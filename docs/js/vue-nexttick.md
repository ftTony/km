# Vue.netTick 理解与分析

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 什么是 Vue.nextTick()？
- Vue.nextTick 的调用方式
- `vm.$nextTick` 与 `setTimeout` 的区别是什么？
- 理解 MutationObserver
- nextTick 源码分析

### 一、什么是 Vue.nextTick()？

> 官方解释：在下次 DOM 更新循环结束之后执行的延迟回调。在修改数据之后立即使用该方法，获取更新后的 DOM。

简单理解为：当页面中的数据发生改变了，就会把该任务放到一个异步队列中，只有在当前任务空闲时才会进行 DOM 渲染，当 DOM 渲染完成以后，该函数就会自动执行。

### 二、Vue.nextTick 的调用方式

调用方式主要有以下两种：Vue.nextTick([callback,context])和 `vm.$nextTick([callback])`;

1. Vue.nextTick([callback,context]);该方法是全局方法，该方法可能接收 2 个参数，分别为回调函数和执行回调函数的上下文环境。
2. vm.\$nextTick([callback]): 该方法是实列方法，执行时自动绑定 this 到当前的实列上。

### 三、`vm.$nextTick` 与 `setTimeout` 的区别是什么？

在比较 nextTick 与 setTimeout 的区别，其实我们可以比较 promise 或 MutationObserver 对象与 setTimeout 的区别的了，因为 nextTick 会先判断设备是否支持 promise 及 MutationObserver 对象的，只要我们弄懂 promise 和 setTimeout 的区别，也就是弄明白 nextTick 与 setTimeout 的区别了。

我们都知道 Promise.then 和 setTimeout 都是异步的，那么在事件队列中 Promise.then 的事件应该是在 setTimeout 的后面的，那么为什么 Promise.then 比 setTimeout 函数先执行呢？

#### 3.1 理解 Event Loop 的概念

我们都明白，javascript 是单线程的，所有的任务都会在主线程中执行的，当主线程中的任务都执行完成之后，系统会“依次”读取任务队列里面的事件，因此对应的异步任务进入主线程，开始执行。

但是异步任务队列又分为：macrotasks(宏任务)和microtasks(微任务)。他们两者分别有如下API：

- **macrotasks(宏任务)：**
- **microtasks(微任务)：** Promise、process.nextTick、MutationObserver等。

```

```

**总结**：microtasks(微任务)包括Promise和MutaionObserver，因此我们可以知道在Vue中的nextTick的执行速度上是快于setTimeout的。

### 四、理解 MutationObserver

在 Vue 中的 nextTick 的源码中，使用了 3 种情况来做延迟操作，首先会判断我们的设备是否支持 Promise 对象，如果支持 Promise 对象，就使用 Promise.then()异步函数来延迟，如果不支持，我们会继续判断我们的设备是否支持 MutationObserver，如果支持，我们就使用 MutationObserver 来监听，最后如果上面两种都不支持的话，我们会使用 setTimeout 来处理，那么我们现在要理解的是 MutationObserver 是什么？

#### 4.1 MutationObserver是什么？

MutationObserver中文含义可以理解为“变动观察器”。它是监听DOM变动接口，DOM发生任何变动，DOM发生任何变动，MutationObserver会得到通知。在Vue中是通过该属性来监听DOM更新完毕的。

它和事件类似，但有所不同，事件是同步的，当DOM发生变动时，事件会立刻处理，但是MutationObserver则是异步的，它不会立即处理，而是等页面上所有的DOM完成后，会执行一次，如果页面上要操作100次DOM的话，如果是事件的话会监听100次DOM，但是我们的MutationObserver只会执行一次，它是等待所有DOM操作完成后，再执行。

**它的特点是：**

1. 等待所有脚本任务完成后，才会执行，即采用异步方式。
2. DOM的变动记录会封装成一个数组进行处理。
3. 还可以观测发生在DOM的所有类型变动，也可以观测某一类变动。

当然 MutationObserver 也是有浏览器兼容的，我们可以使用如下代码来检测浏览器是否支持该属性，如下代码:

```
var MuationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver;

// 监测浏览器是否支持
var observeMutationSupport = !!MutationObserver;
```

#### 4.2 MutationObserver构造函数
#### 4.3 MutationObserver实例的方法


### 五、nextTick 源码分析

vue源码在 `vue/src/core/util/next-tick.js` 中。源码如下：

### 参考资料

- [Vue 系列---理解 Vue.nextTick 使用及源码分析(五)](https://www.cnblogs.com/tugenhua0707/p/11756584.html)
- [你真的理解\$nextTick 么](https://juejin.im/post/5cd9854b5188252035420a13)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
