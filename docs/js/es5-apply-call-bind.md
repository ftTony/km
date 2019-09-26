# apply&bind&call

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [call方法](#一、call方法)
- [apply方法](#二、apply方法)
- [bind方法](#三、bind方法)
- [call、apply、bind方法的共同点和区别](#四、callapplybind方法的共同点和区别)
- [call 模拟实现](#五、call模拟实现)
- [apply 模拟实现](#六、apply模拟实现)
- [bind 模拟实现](#七、bind模拟实现)

### 一、call方法

`call()` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。

**语法：**call([thisObj[,arg1[, arg2[, [,.argN]]]]]) 

**定义：**调用一个对象的一个方法，以另一个对象替换当前对象。

**说明：**call 方法可以用来代替另一个对象调用一个方法。

thisObj的取值有以下4种情况：

1. 不传，或者传null,undefined， 函数中的this指向window对象
2. 传递另一个函数的函数名，函数中的this指向这个函数的引用
3. 传递字符串、数值或布尔类型等基础类型，函数中的this指向其对应的包装对象，如 String、Number、Boolean
4. 传递一个对象，函数中的this指向这个对象

```
function a(){   
  console.log(this);   //输出函数a中的this对象
}      
function b(){}       
var c={name:"call"};    //定义对象c  
a.call();   //window
a.call(null);   //window
a.call(undefined);   //window
a.call(1);   //Number
a.call('');   //String
a.call(true);   //Boolean
a.call(b);   //function b(){}
a.call(c);   //Object
```

如果你不理解上面的，没关系，我们再来看一个例子：

```
function class1(){   
  this.name=function(){   
    console.log("我是class1内的方法");   
  }   
}   
function class2(){ 
  class1.call(this); //此行代码执行后，当前的this指向了class1（也可以说class2继承了class1）   
}   
var f=new class2();   
f.name();   //调用的是class1内的方法，将class1的name方法交给class2使用

```

常用例子：

```

function eat(x,y){   
  console.log(x+y);   
}   
function drink(x,y){   
  console.log(x-y);   
}   
eat.call(drink,3,2);
输出：5

```

这个例子中的意思就是用 eat 来替换 drink，eat.call(drink,3,2) == eat(3,2) ，所以运行结果为：console.log(5);

注意：js 中的函数其实是对象，函数名是对 Function 对象的引用。

```

function Animal(){   
  this.name="animal";   
  this.showName=function(){   
    console.log(this.name);   
  }   
}   
function Dog(){   
  this.name="dog";   
}   
var animal=new Animal();   
var dog=new Dog();       
animal.showName.call(dog);
输出：dog

```

在上面的代码中，我们可以看到Dog里并没有showName方法，那为什么（this.name）的值是dog呢？

关键就在于最后一段代码（animal.showName.call(dog)），意思是把animal的方法放到dog上执行，也可以说，把animal 的showName()方法放到 dog上来执行，所以this.name 应该是 dog。

**继承**

```
function Animal(name){   
  this.name=name;   
  this.showName=function(){   
    console.log(this.name);   
  }   
}   
function Dog(name){   
  Animal.call(this,name);   
}   
var dog=new Dog("Crazy dog");   
dog.showName();
输出：Crazy dog

```

Animal.call(this) 的意思就是使用 Animal对象代替this对象，那么Dog就能直接调用Animal的所有属性和方法。

### 二、apply方法

`apply()`方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。

**语法：**apply([thisObj[,argArray]])

**定义：**应用某一对象的一个方法，用另一个对象替换当前对象。

**说明：**如果 argArray 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。
如果没有提供 argArray 和 thisObj 任何一个参数，那么 Global 对象将被用作 thisObj， 并且无法被传递任何参数。

```
function class1(args1,args2){       
  this.name=function(){      
   console.log(args,args);      
  }     
}     
function class2(){    
  var args1="1";
  var args2="2";
  class1.call(this,args1,args2);  
  /*或*/
  class1.apply(this,[args1,args2]);
}
var c=new class2();   
c.name();
输出：1 2

```

call 需要把参数按顺序传递进去，而 apply 则是把参数放在数组里。

既然两者功能一样，那该用哪个呢？

在JavaScript 中，某个函数的参数数量是不固定的，因此要说适用条件的话，当你的参数是明确知道数量时用`call()`而不确定的时候用`apply()`，然后把参数 push 进数组传递进去。当参数数量不确定时，函数内部也可以通过 arguments 这个数组来遍历所有的参数。

### 三、bind方法

`bind()`是在EcmaScript5中扩展的方法（IE6,7,8不支持）,`bind()`方法与 `apply` 和 `call` 很相似，也是可以改变函数体内 this 的指向。

**MDN的解释是：** `bind()`方法会创建一个新函数，称为绑定函数，当调用这个绑定函数时，绑定函数会以创建它时传入 `bind()`方法的第一个参数作为 this，传入 `bind()` 方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。

注意：bind方法的返回值是函数

```
var bar=function(){   
  console.log(this.x);   
}
var foo={ 
     x:3   
}   
bar();  
bar.bind(foo)();
 /*或*/
var func=bar.bind(foo);   
func();
输出：
undefined
3

```

### 四、call、apply、bind方法的共同点和区别

1. `apply、call、bind`三都是用来改变函数的this对象的指向的；
2. `apply、call、bind`三者第一个参数都是this要指向的对象，也就是想指定的上下文（函数的每次调用都会拥有一个特殊值——本次调用的上下文(context)——这就是this关键字的值。）；
3. `apply 、 call 、bind` 三者都可以利用后续参数传参；
4. bind 是返回对应函数，便于稍后调用，apply 、call 则是立即调用 。

### 一、call 模拟实现

> call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。

从定义上看 call 有以下两个作用：

1. call 改变了 this 的指向，指向到 foo
2. bar 函数执行了

```

Function.prototype.call2=function(context){
    var context= context || window;
    context.fn=this;

    var args=[];
    for(var i=1,len=arguments.length;i<len;i++){
        args.push('arguments['+i+']');
    }

    var result=eval('context.fn('+args+')');

    delete context.fn;
    return result;
}


```

### 二、apply 模拟实现

apply 功能跟 call 类似，代码实现如下：

```
    Function.prototype.apply=function(context,arr){
        var context=Object(context) || window;

        var result;
        if(!arr){
            result=context.fn();
        }else{
            var args=[];
            for(var i=0,len=arr.length;i<len;i++){
                args.push('arr['+i+')');
            }
            result=eval('context.fn('+args+')')
        }

        delete context.fn
        return result;
    }
```

### 三、bind 模拟实现

> bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )

bind 函数的三个特点：

1. 返回一个函数
2. 可以传入参数
3. 一个绑定函数也能使用 new 操作符创建对象，这种行为就像把原函数当成构造器，提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。

模拟实现如下：

```
Function.prototype._bind=function(context){
    var func=this;
    var params=[].slice.call(arguments,1);
    var Fnop=function(){};
    var fbound=function(){
        params=params.concat([].slice.call(arguments));
        return  func.apply(this instanceof Fnop? this:context,params);
    };
    Fnop.prototype=this.prototype;
    fbound.prototype=new Fnop();
    return fbound;
};

```

### 参考资料

- [JS中的call、apply、bind方法](http://ghmagical.com/article/page/id/UPLfoGI9vJ91)
- [js中call、apply、bind那些事](https://qianlongo.github.io/2016/04/26/js%E4%B8%ADcall%E3%80%81apply%E3%80%81bind%E9%82%A3%E4%BA%9B%E4%BA%8B/#more)
- [巧妙理解 call 和 apply](https://juejin.im/post/59019f9fa22b9d0065c51ef8)
- [JavaScript 深入之 bind 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/12)
- [JavaScript 深入之 call 和 apply 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>