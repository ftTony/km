## 函数柯理化

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [定义](#一、定义)
- [用途](#二、用途)
- [代码实现](#三、代码实现)

### 一、定义

函数柯里化又叫部分求值，维基百科中对柯里化 (Currying) 的定义为：

> 在数学和计算机科学中，柯里化是一种将使用多个参数的函数转换成一系列使用一个参数的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

例子

```

function add(a,b){
    return a + b;
}

// 执行add函数，一次传入两个参数即可
add(1,2)    //3

// 假设有一个curry函数可以做到柯里化
var addCurry = curry(add);
addCurry(1)(2)  // 3

```

### 二、用途

- [延迟计算](#21-%e5%bb%b6%e8%bf%9f%e8%ae%a1%e7%ae%97)
- [动态创建函数](#22-%e5%8a%a8%e6%80%81%e5%88%9b%e5%bb%ba%e5%87%bd%e6%95%b0)
- [参数利用](#23-%e5%8f%82%e6%95%b0%e5%88%a9%e7%94%a8)

#### 2.1 延迟计算

```
const add = (...args) => args.reduce((a,b)=> a + b);

function currying(func){
    const args = [];
    return function result(...rest){
        if(res.length === 0){
            return func(...args);
        }else{
            args.push(...rest);
            return result;
        }
    }
}

const sum =currying(add);


```

上面的代码理解起来很容易，就是「用闭包把传入参数保存起来，当传入参数的数量足够执行函数时，就开始执行函数」。上面的 currying 函数是一种简化写法，判断传入的参数长度是否为 0，若为 0 执行函数，否则收集参数。

#### 2.2 动态创建函数

有一种典型的应用情景是这样的，每次调用函数都需要进行一次判断，但其实第一次判断计算之后，后续调用并不需要再次判断，这种情况下就非常适合使用柯里化方案来处理。即第一次判断之后，动态创建一个新函数用于处理后续传入的参数，并返回这个新函数。当然也可以使用惰性函数来处理，本例最后一个方案会有所介绍。

我们看下面的这个例子，在 DOM 中添加事件时需要兼容现代浏览器和 IE 浏览器（IE < 9），方法就是对浏览器环境进行判断，看浏览器是否支持，简化写法如下。

```
function addEvent(type,el,fn,capture = false){
    if (window.addEventListener){
        el.addEventListener(type,fn,capture);
    }else if(window.attachEvent){
        el.attachEvent('on' + type,fn);
    }
}

```

但是这种写法有一个问题，就是每次添加事件都会调用做一次判断，那么有没有什么办法只判断一次呢，可以利用装饰和立即调用函数表达式（IIFE）来处理。

```
const addEvent =(function(){
    if(window.addEventListener){
        return function (type,el,fn,capture){
            el.addEventListener(type,fn,capture);
        }
    }
    else if(window.attachEvent){
        return function (type,el,fn){
            el.attachEvent('on' + type,fn);
        }
    }
})();

```

上面这种实现方案就是一种典型的柯里化应用，在第一次的`if...else if...`判断之后完成部分计算，动态创建新的函数用于处理后续传入的参数，这样做的好处就是之后调用就不需要再次计算了。

**当然可以使用惰性函数来实现**这一功能，原理很简单，就是重写函数。

```
function addEvent(type,el,fn,capture=false){
    // 重写函数
    if(window.addEventListener){
        addEvent = function (type,el,fn,capture){
            el.addEventListener(type,fn,capture);
        }
    }
    else if(window.attachEvent){
        addEvent = function(type, el, fn){
            el.attachEvent('on'+type,fn);
        }
    }

    // 执行函数，有循环爆栈风险
    addEvent(type,el,fn,capture);
}

```

第一次调用`addEvent`函数后，会进行一次环境判断，在这之后`addEvent`函数被重写，所以下次调用时就不会再次判断环境，可以说很完美了。

#### 2.3 参数利用

我们知道调用`toString()`可以获取每个对象的类型，但是不同对象的`toString()`有不同的实现，所以需要通过`Object.prototype.toString()`来获取`Object`上的实现，同时以`call() / apply()`的形式来调用，并传递要检查的对象作为第一个参数，例如下面这个例子。

```
function isArray(obj){
    return Object.prototype.toString.call(obj) === '[object Array]';
}

function isNumber(obj){
    return Object.prototype.toString.call(obj) === '[object Number]';
}

function isString(obj){
    return Object.prototype.toString.call(obj) === '[object String]';
}

// Test
isArray([1, 2, 3]); // true
isNumber(123); // true
isString('123'); // true

```

但是上面方案有一个问题，那就是每种类型都需要定义一个方法，这里我们可以使用 bind 来扩展，**优点**是可以直接使用改造后的 toStr。

```
const toStr = Function.prototype.call.bind(Object.prototype.toString);

// 改造前
[1,2,3].toString(); // "1,2,3"
'123'.toString();
123.toString();
Object(123).toString(); // "123"

// 改造后
toStr([1, 2, 3]); 	// "[object Array]"
toStr('123'); 		// "[object String]"
toStr(123); 		// "[object Number]"
toStr(Object(123)); // "[object Number]"

```

上面例子首先使用`Function.prototype.call`函数指定一个`this`值，然后`.bind`返回一个新的函数，始终将 `Object.prototype.toString`设置为传入参数，其实等价于`Object.prototype.toString.call()`。

### 三、代码实现

- [es5 实现](#31-es5%e5%ae%9e%e7%8e%b0)
- [es6 实现](#32-es6%e5%ae%9e%e7%8e%b0)

### 3.1 es5 实现

```
function curry(fn,args,holes){
    var length = fn.length;

    args = args || [];

    holes = holes || [];

    return function(){

        var _args = args.slice(0),
            _holes = holes.slice(0),
            argsLen = args.length,
            holesLen = holes.length,
            arg,i,index=0;

        for (i=0;i<arguments.length;i++){
            arg = arguments[i];
            // 处理类似 fn(1,_,_,4)(_,3) 这种情况，index需要指向holes
            _args.push(arg);
        }
        if(_args.length<length){
            return curry.call(this,fn,_args);
        }else{
            return fn.apply(this,_args);
        }
    }
}

```

### 3.2 es6 实现

```

const currying = fn => judge = (...args) => args.length >= fn.length ? fn(...args) : (...arg) => judge(...args,...arg);


```

### 参考资料

- [JavaScript 专题之函数柯里化](https://github.com/mqyqingfeng/Blog/issues/42)
- [深入高阶函数应用之柯里化](https://muyiy.vip/blog/6/6.2.html)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
