# vue 双向数据绑定原理

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [几种实现双向数据绑定做法](#一、几种实现双向数据绑定做法)
- [重新认识Object.defineProperty](#二、重新认识object-defineproperty)
- [思路整理](#三、思路整理)

### 一、几种实现双向数据绑定做法

目前几种主流的mvc(vm)框架都实现了单向数据绑定，而我所理解的双向数据绑定无非就是在单向绑定的基础上给可输入元素（input、textare等）添加了change(input)事件，来动态修改model和 view，并没有多高深。所以无需太过介怀是实现的单向或双向绑定。

实现数据绑定的做法有大致如下几种：

- 发布者-订阅者模式（`backbone.js`）
- 脏值检查（`angular.js`）
- 数据劫持（`vue.js`）

**发布者-订阅者模式:** 一般通过sub, pub的方式实现数据和视图的绑定监听，更新数据方式通常做法是 vm.set('property', value)，这里有篇文章讲的比较详细，有兴趣可点[这里](http://www.html-js.com/article/Study-of-twoway-data-binding-JavaScript-talk-about-JavaScript-every-day)

这种方式现在毕竟太low了，我们更希望通过 vm.property = value 这种方式更新数据，同时自动更新视图，于是有了下面两种方式

**脏值检查:** `angular.js`是通过脏值检测的方式比对数据是否有变更，来决定是否更新视图，最简单的方式就是通过 setInterval() 定时轮询检测数据变动，当然Google不会这么low，angular只有在指定的事件触发时进入脏值检测，大致如下：

- DOM事件，譬如用户输入文本，点击按钮等。(`ng-click`)
- XHR响应事件 (`$http`)
- 浏览器Location变更事件 (`$location`)
- Timer事件(`$timeout`, `$interval`)
- 执行 `$digest()` 或 `$apply()`

**数据劫持:** `vue.js`则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的`setter`，`getter`，在数据变动时发布消息给订阅者，触发相应的监听回调。

### 二、重新认识Object.defineProperty()

`Object.defineProperty()`方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

#### 2.1 参数

- `obj` 要在其上定义属性。
- `prop`要定义或修改的属性的名称
- `descriptor` 将被定义或个性的属性描述符。

属性描述符具有以下可选键值：

- `configurable`当且仅当该属性的configurable为true时，该属性描述符才能被改变，同时该属性也能从对应的对象上被删除。默认为false.
- `enumerable` 当且仅当该属性的`enumerable`为`true`时，该属性才能够出现在对象的枚举属性中。**默认为false**。

**数据描述符同时具有以下可选键值：**

- `value`该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
- `writable`当且仅当该属性的writable为true时，value才能被赋值运算符改变。默认为 false。

**存取描述符同时具有以下可选键值：**

- `get`一个给属性提供 `getter`的方法，如果没有`getter`则为`undefined`。该方法返回值被用作属性值。默认为 `undefined`。
- `set`一个给属性提供`setter`的方法，如果没有`setter`则为`undefined`。该方法将接受唯一参数，并将该参数的新值分配给该属性。默认为`undefined`。

**描述符可同时具有键值**

 | configurable | enumerable | value | writable | get | set |
 | ------------ | ---------- | ----- | -------- | --- | --- | --- |
 | 数据描述符   | Yes        | Yes   | Yes      | Yes | No  | No  |
 | 存取描述符   | Yes        | Yes   | No       | No  | Yes | Yes |

**如果一个描述符不具有value，writable，get和set任意一个关键字，那么它将被认为是一个数据描述符。如果一个描述符同时有(value或writable)和(get或set)关键字，将会产生一个异常。**

示例：

```
var o = {}; // 创建一个新对象

// 在对象中添加一个属性与数据描述符的示例
Object.defineProperty(o, "a", {
  value : 37,
  writable : true,
  enumerable : true,
  configurable : true
});

//对象o拥有了属性a，值为37

```

关于`Object.defineProperty()`[详细使用请点击这里阅读更多用法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)。

### 三、思路整理

要实现mvvm的双向绑定，就必须要实现以下几点：

- 实现一个数据监听器`Observer`，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者
- 实现一个指令解析器`Compile`，对每个元素节点的指令进行扫描和解析，根据指令模板替换以及绑定相应的更新函数。
- 实现一个`Watcher`，作为连接`Observer`和`Compile`的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图。
- `mvvm`入口函数，整合以上三者

上述流程如图所示：

![img](vue01.png)

#### 3.1 实现Observer

```
var data={name:'tony'};
observe(data);
data.name='xiaowuzi';

function observe(data){
	if(!data || typeof data!=='object') return;
	//取出所有属性遍历
	Object.keys(data).forEach(function(key){
		defineReactive(data,key,data[key]);
	});
}

function defineReactive(data,key,val){
	observe(val);	//监听子属性
	Object.defineProperty(data,key,{
		enumerable:true,		//可枚举
		configurable:false,	//不能再define
		get:function(){
			return val;
		},
		set:function(newVal){
			console.log('监听到值的变化了',val,'-->',newVal);
			val=newVal;
		}
	});
	
}

```

这样我们已经可以监听每个数据的变化了，那么监听到变化之后就是怎么通知订阅者了，所以接下来我们需要实现一个消息订阅器，很简单，维护一个数组，用来收集订阅者，数据变动触发`notify`，再调用订阅者的`update`方法，代码改善之后是这样：

```
var data={name:'tony'};
observe(data);
data.name='xiaowuzi';

function observe(data){
	if(!data || typeof data!=='object') return;
	//取出所有属性遍历
	Object.keys(data).forEach(function(key){
		defineReactive(data,key,data[key]);
	});
}

function defineReactive(data,key,val){
	observe(val);	//监听子属性
	Object.defineProperty(data,key,{
		enumerable:true,		//可枚举
		configurable:false,	//不能再define
		get:function(){
			return val;
		},
		set:function(newVal){
			console.log('监听到值的变化了',val,'-->',newVal);
			val=newVal;
		}
	});
	
}

function Dep(){
	this.subs=[];
}

Dep.prototype={
	addSub:function(sub){
		this.subs.push(sub);
	},
	notify:function(){
		this.subs.forEach(function(sub){
			sub.update();
		});
	}
};

```

上面的思路整理中我们已经明确订阅者应该是`Watcher`, 而且`var dep = new Dep();`是在`defineReactive`方法内部定义的，所以想通过`dep`添加订阅者，就必须要在闭包内操作，所以我们可以在`getter`里面动手脚：

```
var data={name:'tony'};
observe(data);
data.name='xiaowuzi';

function observe(data){
	if(!data || typeof data!=='object') return;
	//取出所有属性遍历
	Object.keys(data).forEach(function(key){
		defineReactive(data,key,data[key]);
	});
}

function defineReactive(data,key,val){
	observe(val);	//监听子属性
	Object.defineProperty(data,key,{
		enumerable:true,		//可枚举
		configurable:false,	//不能再define
		get:function(){
			//由于需要在装饰内添加watcher，所以通过Dep定义一个全局target属性，暂存watcher，添加完移除
			Dep.target && dep.addDep(Dep.target);
			return val;
		},
		set:function(newVal){
			console.log('监听到值的变化了',val,'-->',newVal);
			val=newVal;
		}
	});
	
}

function Dep(){
	this.subs=[];
}

Dep.prototype={
	addSub:function(sub){
		this.subs.push(sub);
	},
	notify:function(){
		this.subs.forEach(function(sub){
			sub.update();
		});
	}
};
```

这里已经实现了一个`Observer`了，已经具备了监听数据和数据变化通知订阅者的功能。

#### 3.2 实现Compile

`compile`主要做的事情是解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图，如图所示：

![image](vue02.png)

因为遍历解析的过程有多次操作`dom`节点，为提高性能和效率，会先将跟节点`el`转换成文档碎片`fragment`进行解析编译操作，解析完成，再将`fragment`添加回原来的真实`dom`节点中

```
function Compile(el){
	this.$el=this.isElementNode(el)?el:document.querySelector(el);
	if(this.$el){
		this.$fragment=this.node2Fragment(this.$el);
		this.init();
		this.$el.appendChild(this.$fragment);
	}
}
Compile.prototype={
	init:function(){this.compileElement(this.$fragment);},
	node2Fragment:function(el){
		var fragment=document.createDocumentFragment(),child;
		//将原生节点拷贝到fragment
		while(child==el.firstChild){
			fragment.appendChild(child);
		}
		return;
	}
}
```

`compileElement`方法将遍历所有节点及其子节点，进行扫描解析编译，调用对应的指令渲染函数进行数据渲染，并调用对应的指令更新函数进行绑定，详看代码及注释说明：

```
function Compile(el){
	this.$el=this.isElementNode(el)?el:document.querySelector(el);
	if(this.$el){
		this.$fragment=this.node2Fragment(this.$el);
		this.init();
		this.$el.appendChild(this.$fragment);
	}
}
Compile.prototype={
	init:function(){this.compileElement(this.$fragment);},
	node2Fragment:function(el){
		var fragment=document.createDocumentFragment(),child;
		//将原生节点拷贝到fragment
		while(child==el.firstChild){
			fragment.appendChild(child);
		}
		return;
	}
	compileElement:function(el){
		var childNodes=el.childNodes,me=this;
	[].slice.call(childNodes).forEach(function(node){
			var text=node.textContent;
			var reg=/\{(.*)\}\}/;	//表达式文本
			//按元素节点方式编译
			if(me.isElementNode(node)){
				me.compile(node);
			}else if(me.isTextNode(node) && reg.test(text)){
				me.compileText(node,RegExp.$1);
			}
			//遍历编译子节点
			if(node.childNodes && node.childNodes.length){
				me.compileElement(node);
			}
		});
	},
	compile:function(node){
		var nodeAttrs=node.attributes,me=this;
		[].slice.call(nodeAttrs).forEach(function(attr){
		//规定：指令v-xx命名
		//如<span v-text="content"></span>中指令为v-text
			var attrName=attr.name;	//v-text
			if(me.isDirective(attrName)){
				var exp=attr.value;
				var dir=attrName.substring(2);
				if(me.isEventDirective(dir)){
					//事件指令，如v-on:click
					compileUtil.eventHandler(node,me.$vm,exp,dir);
				}else{
					//普通指令
					compileUtil[dir] && compileUtil[dir](node,me.$vm,exp);
				}
			}
		});
	}
}

//指令处理集合
var compileUtil={
	text:function(node,vm,exp){
		this.bind(node,vm,exp,'text');
	},
	bind:function(node,vm,exp,dir){
		var updateFn=updater[dir+'Updater'];
		//第一次初始化视图
		updateFn && updateFn(node,vm[exp]);
		//实例化订阅者，此操作会在对应的属性消息订阅器中添加了该订阅者watcher
		new Watcher(vm,exp,function(value,oldVale){
			//一旦属性值有变化，会收到通知执行此更新函数，更新视图
			updateFn && updateFn(node,value,oldValue);
		});
	},
	
}

//更新函数
var updater={
	textUpdater:function(node,value){
		node.textContent=typeof value=='undefined'?'':value;
	}
}
```

这里通过递归遍历保证了每个节点及子节点都会解析编译到，包括了双括号表达式声明的文本节点。指令的声明规定是通过特定前缀的节点属性来标记，如`<span v-text="content" other-attr`中`v-text`便是指令，而`other-attr`不是指令，只是普通的属性。
监听数据、绑定更新函数的处理是在`compileUtil.bind()`这个方法中，通过`new Watcher()`添加回调来接收数据变化的通知

#### 3.3 实现Watcher

Watcher订阅者作为Observer和Compile之间通信的桥梁，主要做的事情是:

1. 在自身实例化时往属性订阅器(dep)里面添加自己
2. 自身必须有一个update()方法
3. 待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。

```
function Watcher(vm,exp,cb){
	this.cb=cb;
	this.vm=vm;
	this.exp=exp;
	//此处为了触发属性的getter，从而在dep添加自己，结合Observer更易理解
	this.value=this.get();
}

Watcher.prototype={
	update:function(){
		this.run();	//属性值变化收到通知
	},
	run:function(){
		var value=this.get(); // 取到最新值
		var oldVal=this.value;
		if(value!==oldVal){
			this.value=value;
			this.cb.call(this.vm,value,oldVal); // 执行Compile中绑定的回调，更新视图
		}
	},
	get:function(){
		Dep.target=this;// 将当前订阅者指向自己
		var value=this.vm[exp];// 触发getter，添加自己到属性订阅器中
		Dep.target=null; // 添加完毕，重置
		return value;
	}
};
```

实例化`Watcher`的时候，调用`get()`方法，通过`Dep.target = watcherInstance`标记订阅者是当前`watcher`实例，强行触发属性定义的`getter`方法，`getter`方法执行的时候，就会在属性的订阅器`dep`添加当前`watcher`实例，从而在属性值有变化的时候，`watcherInstance`就能收到更新通知。

#### 3.4 实现MVVM

MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。

```
function MVVM(options){
	this.$options=options;
	var data=this._data=this.$options.data;
	observe(data,this);
	this.$compile=new Compile(optiosn.el || document.body,this);
}
```

但是这里有个问题，从代码中可看出监听的数据对象是options.data，每次需要更新视图，则必须通过`var vm = new MVVM({data:{name: 'kindeng'}}); vm._data.name = 'dmq';` 这样的方式来改变数据。

显然不符合我们一开始的期望，我们所期望的调用方式应用是这样的：`var vm = new MVVM({data: {name: 'kindeng'}}); vm.name = 'dmq';`

所以这里需要给MVVM实例添加一个属性代理的方法，使访问vm的属性代理为访问vm._data的属性，改造后的代码如下：

```
function MVVM(options){
	this.$options=options;
	var data=this._data=this.$options.data,me=this;
	//属性代理，实现 vm.xxx->vm._data.xxx
	Object.keys(data).forEach(function(key){
		me._proxy(key);
	});
	observe(data,this);
	this.$compile=new Compile(options.el || document.body,this);
	
}
MVVM.prototye={
	_proxy:function(key){
		var me=this;
		_proxy:function(key){
			configurable:false,
			enumerable:true,
			get:function proxyGetter(){
				return me._data[key];
			},
			set:function proxySetter(newVal){
				me._data[key]=newVal;
			}
		}
	}
};
```

这里主要还是利用`Object.definedProperty()`这个方法来支持了vm实例对象的属性的读写权，使读写vm实例的属性转成读写了`vm._data`的属性值，达到鱼目混珠的效果

至此，全部模块和功能已经完成了，如本文开头所承诺的两点。一个简单的MVVM模块已经实现，其思想和原理大部分来自经过简化改造的vue[源码](https://github.com/vuejs/vue)，猛戳[这里](https://github.com/DMQ/mvvm)可以看到本文的所有相关代码。

### 参考资料

- [Vue.js双向绑定的实现原理](http://www.cnblogs.com/kidney/p/6052935.html)
- [剖析Vue原理&实现双向绑定MVVM](https://segmentfault.com/a/1190000006599500)
- [深入响应式原理](https://github.com/DDFE/DDFE-blog/issues/7)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
