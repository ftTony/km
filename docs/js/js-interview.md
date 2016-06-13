# js 相关面试题

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 关于作者

一个工作八年的草根程序员。

## 内容

- 基本类型有哪几种？null 是对象吗？基本数据类型和复杂数据类型存储有什么区别？
- typeof 是否正确判断类型? instanceof 呢？ instanceof 的实现原理是什么？
- for of , for in 和 forEach,map 的区别。
- 如何判断一个变量是不是数组？
- 类数组和数组的区别是什么？
- == 和 === 有什么区别？
- [] == ![]
- ES6 中的 class 和 ES5 的类有什么区别？
- 数组的哪些 API 会改变原数组？
- let、const 以及 var 的区别是什么？
- 在 JS 中什么是变量提升？什么是暂时性死区？
- 如何正确的判断 this? 箭头函数的 this 是什么？
- 词法作用域和 this 的区别。
- 谈谈你对 JS 执行上下文栈和作用域链的理解。
- 什么是闭包？闭包的作用是什么？闭包有哪些使用场景？
- call、apply 有什么区别？call,aplly 和 bind 的内部是如何实现的？
- new 的原理是什么？通过 new 的方式创建对象和通过字面量创建有什么区别？
- 谈谈你对原型的理解？
- 什么是原型链？【原型链解决的是什么问题？】
- prototype 和 `__proto__` 区别是什么？
- 使用 ES5 实现一个继承？
- 什么是深拷贝？深拷贝和浅拷贝有什么区别？
- 防抖和节流的区别是什么？防抖和节流的实现。
- 取数组的最大值（ES5、ES6）
- ES6 新的特性有哪些？
- setTimeout 倒计时为什么会出现误差？
- 为什么 0.1 + 0.2 != 0.3 ?
- promise 有几种状态, Promise 有什么优缺点 ?
- Promise 构造函数是同步还是异步执行，then 中的方法呢 ?promise 如何实现 then 处理 ?
- Promise 和 setTimeout 的区别 ?
- 如何实现 Promise.all ?
- 如何实现 Promise.finally ?
- 什么是函数柯里化？实现 sum(1)(2)(3) 返回结果是 1,2,3 之和
- 说一说 JS 异步发展史
- 谈谈对 async/await 的理解，async/await 的实现原理是什么?
- 使用 async/await 需要注意什么？
- 如何实现 Promise.race？
- 可遍历数据结构的有什么特点？
- requestAnimationFrame 和 setTimeout/setInterval 有什么区别？使用 requestAnimationFrame 有哪些好处？
- JS 类型转换的规则是什么？
- 简述下对 webWorker 的理解？
- ES6 模块和 CommonJS 模块的差异？
- 浏览器事件代理机制的原理是什么？
- js 如何自定义事件？
- 跨域的方法有哪些？原理是什么？
- js 异步加载的方式有哪些？
- 下面代码 a 在什么情况中打印出 1？
- 下面这段代码的输出是什么？
- 实现双向绑定 Proxy 与 Object.defineProperty 相比优劣如何?
- Object.is() 与比较操作符 ===、== 有什么区别？
- 什么是事件循环？Node 事件循环和 JS 事件循环的差异是什么？

### 1.基本类型有哪几种？null 是对象吗？基本数据类型和复杂数据类型存储有什么区别？

- 基本类型有 6 种，分别是 undefined,null,bool,string,number,symbol(ES6 新增)。
- 虽然 typeof null 返回的值是 object,但是 null 不是对象，而是基本数据类型的一种。
- 基本数据类型存储在栈内存，存储的是值。
- 复杂数据类型的值存储在堆内存，地址（指向堆中的值）存储在栈内存。当我们把对象赋值给另外一个变量的时候，复制的是地址，指向同一块内存空间，当其中一个对象改变时，另一个对象也会变化。

### 2.typeof 是否正确判断类型? instanceof 呢？ instanceof 的实现原理是什么？

首先 typeof 能够正确的判断基本数据类型，但是除了 null, typeof null 输出的是对象。
但是对象来说，typeof 不能正确的判断其类型， typeof 一个函数可以输出 'function',而除此之外，输出的全是 object,这种情况下，我们无法准确的知道对象的类型。

instanceof 可以准确的判断复杂数据类型，但是不能正确判断基本数据类型。

instanceof 是通过原型链判断的，A instanceof B, 在 A 的原型链中层层查找，是否有原型等于 `B.prototype`，如果一直找到 A 的原型链的顶端(null;即 `Object.__proto__.__proto__`),仍然不等于 `B.prototype`，那么返回 false，否则返回 true.

```
// L instanceof R
function instance_of(L, R) {//L 表示左表达式，R 表示右表达式
    var O = R.prototype;// 取 R 的显式原型
    L = L.__proto__;    // 取 L 的隐式原型
    while (true) {
        if (L === null) //已经找到顶层
            return false;
        if (O === L)   //当 O 严格等于 L 时，返回 true
            return true;
        L = L.__proto__;  //继续向上一层原型链查找
    }
}

```

### 3.for of , for in 和 forEach,map 的区别。

- for...of 循环：具有 iterator 接口，就可以用 for...of 循环遍历它的成员(属性值)。for...of 循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象、Generator 对象，以及字符串。for...of 循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。对于普通的对象，for...of 结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用。可以中断循环。
- for...in 循环：遍历对象自身的和继承的可枚举的属性, 不能直接获取属性值。可以中断循环。
- forEach: 只能遍历数组，不能中断，没有返回值(或认为返回值是 undefined)。
- map: 只能遍历数组，不能中断，返回值是修改后的数组。

### 4.如何判断一个变量是不是数组？

- 使用 Array.isArray 判断，如果返回 true, 说明是数组
- 使用 instanceof Array 判断，如果返回 true, 说明是数组
- 使用 Object.prototype.toString.call 判断，如果值是 [object Array], 说明是数组
- 通过 constructor 来判断，如果是数组，那么 `arr.constructor === Array`. (不准确，因为我们可以指定 `obj.constructor = Array`)

### 5.类数组和数组的区别是什么？

1. 拥有 length 属性，其它属性（索引）为非负整数（对象中的索引会被当做字符串来处理）;
2. 不具有数组所具有的方法；

类数组是一个普通对象，而真实的数组是 Array 类型。

常见的类数组有: 函数的参数 arguments, DOM 对象列表(比如通过 document.querySelectorAll 得到的列表), jQuery 对象 (比如 `$("div")`).

任何定义了遍历器（Iterator）接口的对象，都可以用扩展运算符转为真正的数组。

Array.from 方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象。

### 6.== 和 === 有什么区别？

=== 不需要进行类型转换，只有类型相同并且值相等时，才返回 true.

== 如果两者类型不同，首先需要进行类型转换。具体流程如下:

1. 首先判断两者类型是否相同，如果相等，判断值是否相等.
2. 如果类型不同，进行类型转换
3. 判断比较的是否是 null 或者是 undefined, 如果是, 返回 true .
4. 判断两者类型是否为 string 和 number, 如果是, 将字符串转换成 number
5. 判断其中一方是否为 boolean, 如果是, 将 boolean 转为 number 再进行判断
6. 判断其中一方是否为 object 且另一方为 string、number 或者 symbol , 如果是, 将 object 转为原始类型再进行判断

#### 思考：.[] == ![]

我们来分析一下: `[] == ![]`是 true 还是 false？

1. 首先，我们需要知道 ! 优先级是高于 == (更多运算符优先级可查看: [运算符优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence))
2. `![]`引用类型转换成布尔值都是 true,因此`![]`的是 false
3. 根据上面的比较步骤中的第五条，其中一方是 boolean，将 boolean 转为 number 再进行判断，false 转换成 number，对应的值是 0.
4. 根据上面比较步骤中的第六条，有一方是 number，那么将 object 也转换成 Number,空数组转换成数字，对应的值是 0.(空数组转换成数字，对应的值是 0，如果数组中只有一个数字，那么转成 number 就是这个数字，其它情况，均为 NaN)
5. 0 == 0; 为 true

### 8.ES6 中的 class 和 ES5 的类有什么区别？

1. ES6 class 内部所有定义的方法都是不可枚举的；
2. ES6 class 必须使用 new 调用；
3. ES6 class 不存在变量提升；
4. ES6 class 默认即是严格模式；
5. ES6 class 子类必须在父类的构造函数中调用 super()，这样才有 this 对象；ES5 中类继承的关系是相反的，先有子类的 this，然后用父类的方法应用在 this 上。

### 9.数组的哪些 API 会改变原数组？

修改原数组的 API 有:

```
splice/reverse/fill/copyWithin/sort/push/pop/unshift/shift
```

不修改原数组的 API 有:

```
slice/map/forEach/every/filter/reduce/entries/find/concat
```

注: 数组的每一项是简单数据类型，且未直接操作数组的情况下(稍后会对此题重新作答)。

### 10.let、const 以及 var 的区别是什么？

1. let 和 const 定义的变量不会出现变量提升，而 var 定义的变量会提升。
2. let 和 const 是 JS 中的块级作用域
3. let 和 const 不允许重复声明(会抛出错误)
4. let 和 const 定义的变量在定义语句之前，如果使用会抛出错误(形成了暂时性死区)，而 var 不会。
5. const 声明一个只读的常量。一旦声明，常量的值就不能改变(如果声明是一个对象，那么不能改变的是对象的引用地址)

### 11.在 JS 中什么是变量提升？什么是暂时性死区？

变量提升就是变量在声明之前就可以使用，值为 undefined。

在代码块内，使用 let/const 命令声明变量之前，该变量都是不可用的(会抛出错误)。这在语法上，称为“暂时性死区”。暂时性死区也意味着 typeof 不再是一个百分安全的操作。

```
typeof x; // ReferenceError(暂时性死区，抛错)
let x;

```

暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

### 12.如何正确的判断 this? 箭头函数的 this 是什么？

this 的绑定规则有四种：默认绑定，隐匿绑定，显式绑定，new 绑定

1. 函数是否在 new 中调用(new 绑定)，如果是，那么 this 绑定的是新创建的对象【前提是构造函数中没有返回对象或者 function，否则 this 指向返回的对象/function】
2. 函数是否通过 call,apply 调用，或者使用了 bind (即硬绑定)，如果是，那么 this 绑定的就是指定的对象。
3. 函数是否在某个上下文对象中调用(隐式绑定)，如果是的话，this 绑定的是那个上下文对象。一般是 obj.foo()
4. 如果以上都不是，那么使用默认绑定。如果在严格模式下，则绑定到 undefined，否则绑定到全局对象。
5. 如果把 null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind, 这些值在调用时会被忽略，实际应用的是默认绑定规则。
6. 箭头函数没有自己的 this, 它的 this 继承于上一层代码块的 this。

如果 this 的知识点，您还不太懂，请戳: [this 理解](https://km.xiaowuzi.info/js/es5-this.html)

### 13.词法作用域和 this 的区别。

- 词法作用域是由你在写代码时将变量和块作用域写在哪里来决定的
- this 是在调用时被绑定的，this 指向什么，完全取决于函数的调用位置(关于 this 的指向问题，本文已经有说明)

### 14.谈谈你对 JS 执行上下文栈和作用域链的理解。

执行上下文就是当前 JavaScript 代码被解析和执行时所在环境, JS 执行上下文栈可以认为是一个存储函数调用的栈结构，遵循先进后出的原则。

- JavaScript 执行在单线程上，所有的代码都是排队执行。
- 一开始浏览器执行全局的代码时，首先创建全局的执行上下文，压入执行栈的顶部。
- 每当进入一个函数的执行就会创建函数的执行上下文，并且把它压入执行栈的顶部。当前函数执行-完成后，当前函数的执行上下文出栈，并等待垃圾回收。
- 浏览器的 JS 执行引擎总是访问栈顶的执行上下文。
- 全局上下文只有唯一的一个，它在浏览器关闭时出栈。

作用域链：无论是 LHS 还是 RHS 查询，都会在当前的作用域开始查找，如果没有找到，就会向上级作用域继续查找目标标识符，每次上升一个作用域，一直到全局作用域为止。

如果执行上下文及上下文栈不理解的话，请戳[执行上下文](https://km.xiaowuzi.info/js/es5-execution-context.html)

### 15.什么是闭包？闭包的作用是什么？闭包有哪些使用场景？

闭包是指有权访问另一个函数作用域中的变量的函数，创建闭包最常用的方式就是在一个函数内部创建另一个函数。

闭包的作用有:

1. 封装私有变量
2. 模仿块级作用域(ES5 中没有块级作用域)
3. 实现 JS 的模块

如果闭包不理解的话，请戳[闭包](https://km.xiaowuzi.info/js/es5-closure.html)

### 16.call、apply 有什么区别？call,aplly 和 bind 的内部是如何实现的？

请戳以下两个链接：

- [apply&bind&call.](https://km.xiaowuzi.info/js/es5-apply-call-bind.html)
- [apply&bind&call 模拟实现](https://github.com/cs-learning-record/javascript-series/blob/master/javascript/apply%26bind%26call%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0.md)

### 17.new 的原理是什么？通过 new 的方式创建对象和通过字面量创建有什么区别？

请戳链接：[new 模拟实现](https://km.xiaowuzi.info/js/es5-news.html)

### 18.谈谈你对原型的理解？

### 19.什么是原型链？【原型链解决的是什么问题？】

### 20.prototype 和 **proto** 区别是什么？

### 21.使用 ES5 实现一个继承？

### 22.什么是深拷贝？深拷贝和浅拷贝有什么区别？

参考[JS的浅拷贝与深拷贝](https://km.xiaowuzi.info/js/js-clone.html)

### 23.防抖和节流的区别是什么？防抖和节流的实现。

### 24.取数组的最大值（ES5、ES6）

```
// ES5 的写法
Math.max.apply(null,[14,3,77,30]);

// ES6 的写法
Math.max(...[14,3,77,30]);

// reduce
[14,3,77,30].reduce((accumulator,currentValue){
    return accumulator = accumulator > currentValue ? accumulator : currentValue
})
```

### 25.ES6 新的特性有哪些？

1. 新增了块级作用域(let,const)
2. 提供了定义类的语法糖(class)
3. 新增了一种基本数据类型(Symbol)
4. 新增了变量的解构赋值
5. 函数参数允许设置默认值，引入了 rest 参数，新增了箭头函数
6. 数组新增了一些 API，如 isArray/from/of 方法，数组实例新增了 entries()，keys()和 values()等方法
7. 对象和数组新增了扩展运算符
8. ES6 新增了模块化(import/export)
9. ES6 新增了 Set 和 Map 数组结构
10. ES6 原生提供了 Proxy 构造函数，用来生成 Proxy 实例
11. ES6 新增了生成器(Generator)和遍历器(Iterator)

### 26.setTimeout 倒计时为什么会出现误差？

### 27.为什么 0.1 + 0.2 != 0.3 ?

参考[js 精度丢失问题](https://km.xiaowuzi.info/js/js-precision.html)

### 28.promise 有几种状态, Promise 有什么优缺点 ?

promise有三种状态：fulfilled,rejected,pending.

Promise的优点：

- 

### 29.Promise 构造函数是同步还是异步执行，then 中的方法呢 ?promise 如何实现 then 处理 ?

### 30.Promise 和 setTimeout 的区别 ?

Promise是微任务，setTimeout是宏任务，同一个事件循环中，promise.then总是先于setTimeout执行。

### 31.如何实现 Promise.all ?

### 32.如何实现 Promise.finally ?

### 33.什么是函数柯里化？实现 sum(1)(2)(3) 返回结果是 1,2,3 之和

### 34.说一说 JS 异步发展史

### 35.谈谈对 async/await 的理解，async/await 的实现原理是什么?

### 36.使用 async/await 需要注意什么？

### 37.如何实现 Promise.race？

### 38.可遍历数据结构的有什么特点？

### 39.requestAnimationFrame 和 setTimeout/setInterval 有什么区别？使用 requestAnimationFrame 有哪些好处？

### 40.JS 类型转换的规则是什么？

### 41.简述下对 webWorker 的理解？

HTML5则提出了 Web Worker 标准，表示js允许多线程，但是子线程完全受主线程控制并且不能操作dom，只有主线程可以操作dom，所以js本质上依然是单线程语言。

web worker就是在js单线程执行的基础上开启一个子线程，进行程序处理，而不影响主线程的执行，当子线程执行完之后再回到主线程上，在这个过程中不影响主线程的执行。子线程与主线程之间提供了数据交互的接口postMessage和onmessage，来进行数据发送和接收。

```
```

### 42.ES6 模块和 CommonJS 模块的差异？

参考[js 模块化](https://km.xiaowuzi.info/js/js-module.html)

### 43.浏览器事件代理机制的原理是什么？

### 44.js 如何自定义事件？

> 自定义DOM事件(不考虑IE9之前版本)

自定义事件有三种方式，一种是使用`new Event()`，另一种是`createEvent('CustomEvent')`，另一种是`new customEvent()`

1. 使用`new Event()`

获取不到`event.detail`

```
let btn = document.querySelector('#btn');
let ev = new Event('alert',{
    bubbles:true,           // 事件是否冒泡；默认值false
    cancelable:true,        // 事件能否被取消；默认值false
    composed:false
});
btn.addEventListener('alert',function(event){
    console.log(event.bubbles);     // true
    console.log(event.cancelable);      // true
    console.log(event.detail);          // undefined
},false);
btn.dispatchEvent(ev);
```

2. 使用`createEvent('CustomEvent')`（DOM3）

要创建自定义事件，可以调用`createEvent('CustomEvent')`，返回的对象有initCustomEvent方法，接受以下四个参数：

- type：字符串，表示触发的事件类型，如此处的`alert`
- bubbles：布尔值，表示事件是否冒泡
- cancelable：布尔值，表示事件是否可以取消
- detail：任意值，保存在event对象的detail属性中

```
let btn = document.querySelector('#btn');
let ev = btn.createEvent('CustomEvent');
ev.initCustomEvent('alert',true,true,'button');
btn.addEventListener('alert',function(event){
    console.log(event.bubbles); //true
    console.log(event.cancelable);//true
    console.log(event.detail); //button
},false);
btn.dispatchEvent(ev);
```

3. 使用`new customEvent()`（DOM4）

使用起来比`createEvent('CustomEvent')`更加方便

```
var btn = document.querySelector('#btn');
/*
  * 第一个参数是事件类型
  * 第二个参数是一个对象
  */
var ev = new CustomEvent('alert',{

});
```

> 自定义非DOM事件(观察者模式)

- EventTarget类型有一个单独的属性handlers,用于存储事件处理程序（观察者）。
- addHandler()用于注册给定类型事件处理程序；
- fire()用于触发一个事件；
- removeHandler()用于注销某个事件类型的事件处理程序。

```
```

### 45.跨域的方法有哪些？原理是什么？

参考[跨域](https://km.xiaowuzi.info/project/cross-domain.html)

### 46.js 异步加载的方式有哪些？

### 47.下面代码 a 在什么情况中打印出 1？

### 48.下面这段代码的输出是什么？

```
function Foo() {
    getName = function() {console.log(1)};
    return this;
}
Foo.getName = function() {console.log(2)};
Foo.prototype.getName = function() {console.log(3)};
var getName = function() {console.log(4)};
function getName() {console.log(5)};

Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
```

### 49.实现双向绑定 Proxy 与 Object.defineProperty 相比优劣如何?

1. Object.definedProperty的作用是劫持一个对象的属性，劫持属性的getter和setter方法，在对象的属性发生变化时进行特定的操作。而Proxy劫持的是整个对象。
2. Proxy会返回一个代理对象，

### 50.Object.is() 与比较操作符 ===、== 有什么区别？

以下情况，Object.is认为是相等

- 两个值都是 undefined

### 51.什么是事件循环？Node 事件循环和 JS 事件循环的差异是什么？

### 52.["1", "2", "3"].map(parseInt)

### 53.[typeof null, null instanceof Object]

### 54.[ [3,2,1].reduce(Math.pow), [].reduce(Math.pow) ]

### 参考资料

- [【面试篇】寒冬求职季之你必须要懂的原生 JS(上)](https://juejin.im/post/5cab0c45f265da2513734390)
- [【面试篇】寒冬求职季之你必须要懂的原生 JS(中)](https://juejin.im/post/5cbd1e33e51d45789161d053)
- [春招季如何横扫 Javascript 面试核心考点(基础版)？](https://juejin.im/post/5c6ad9fde51d453c356e37d1)
- [每日·壹题](https://muyiy.cn/question/program/5.html)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>