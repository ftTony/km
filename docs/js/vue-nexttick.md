# Vue.netTick 理解与分析

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [什么是 Vue.nextTick()？](#一、什么是-vue-nexttick-？)
- [Vue.nextTick 的调用方式](#二、vue-nexttick-的调用方式)
- [为什么 Vue 使用异步更新队列？](#二、为什么-Vue-使用异步更新队列？)
- [`vm.$nextTick` 与 `setTimeout` 的区别是什么？](#四、vm-nexttick-与-settimeout-的区别是什么？)
- [理解 MutationObserver](#五、理解-mutationobserver)
- [nextTick 源码分析](#六、nexttick-源码分析)

### 一、什么是 Vue.nextTick()？

> 官方解释：在下次 DOM 更新循环结束之后执行的延迟回调。在修改数据之后立即使用该方法，获取更新后的 DOM。

简单理解为：当页面中的数据发生改变了，就会把该任务放到一个异步队列中，只有在当前任务空闲时才会进行 DOM 渲染，当 DOM 渲染完成以后，该函数就会自动执行。

#### 1.1 更改数据后，进行节点 DOM 操作

比如修改数据、修改节点样式等操作。比如说修改 data 中的一个属性数据后，如果我这个时候直接获取该 html 内容的话，它还是老数据的，那么此刻，我们可以使用 Vue.nextTick()，在该函数内部获取数据即可：

```
<!DOCTYPE html>
<html>
<head>
  <title>vue.nextTick()方法的使用</title>
  <meta charset="utf-8">
  <script type="text/javascript" src="https://cn.vuejs.org/js/vue.js"></script>
</head>
<body>
  <div id="app">
    <template>
      <div ref="list">{{name}}</div>
    </template>
  </div>
  <script type="text/javascript">
    new Vue({
      el: '#app',
      data: {
        name: 'tony'
      },
      mounted() {
        this.updateData();
      },
      methods: {
        updateData() {
          this.name = '小武子';
          console.log(this.$refs.list.textContent); // 打印 tony
          this.$nextTick(() => {
            console.log('-------');
            console.log(this.$refs.list.textContent); // 打印 小武子
          });
        }
      }
    })
  </script>
</body>
</html>
```

如上代码，页面初始化时候，页面显示的是“tony”；当页面中的所有的 DOM 更新完成后，我估 mounted()生命周期中调用 updateData()方法，然后在该方法内部修改 this.name 这个数据，再打印 this.

refs.list.textContent，可以看到打印的数据还是“tony”；为什么会是这样呢？那是因为修改 name 数据后，我们的 DOM 还没有被渲染完成，所以我们这个时候获取的值还是之前的值，但是我们放在 nextTick 函数里面的时候，代码会在 DOM 更新完成后会自动 nextTick()函数，因此这个时候我们再去使用 this.refs.list.textContent 获取该值的时候，就可以获取到最新值了。

**理解 DOM 更新：** 在 VUE 中，当我们修改了 data 中的某一个值后，并不会立刻去渲染 html 页面，而是将 vue 更改的数据放到 watcher 的一个异步队列中，只有当前任务空闲的才会执行 watcher 中的队列任务，因此这就会有一个延迟时间，因此我们把代码放到 nextTick 函数后就可以获取到 html 页面的最新值了。

#### 1.2 在 created 生命周期中进行 DOM 操作

在 Vue 生命周期中，只有在 mounted 生命周期中我们的 HTML 才渲染完成，因此在该生命周期中，我们就可以获取到页面中的 html DOM 节点，但如果我们在 created 生命周期中是访问不到 DOM 节点的。在该生命周期中我们想要获取 DOM 节点的话，我们需要使用`this.$nextTick()`函数。

代码如下：

```
<!DOCTYPE html>
<html>
<head>
  <title>vue.nextTick()方法的使用</title>
  <meta charset="utf-8">
  <script type="text/javascript" src="https://cn.vuejs.org/js/vue.js"></script>
</head>
<body>
  <div id="app">
    <template>
      <div ref="list">{{name}}</div>
    </template>
  </div>
  <script type="text/javascript">
    new Vue({
      el: '#app',
      data: {
        name: 'tony'
      },
      created() {
        console.log(this.$refs.list); // 打印undefined
        this.$nextTick(() => {
          console.log(this.$refs.list); // 打印出 "<div>tony</div>"
        });
      },
      methods: {

      }
    })
  </script>
</body>
</html>
```

如上代码，在 created 生命周期内，我们打印 this.

refs.list 值为 undefined，那是因为在 created 生命周期内页面的 html 没有被渲染完成，因此打印出为 undefined；但是我们把它放入 this.nextTick 函数内即可打印出值出来，这也印证了 nextTick 是在下次 DOM 更新循环线束之后执行的延迟回调。因此只有 DOM 渲染完成后才会自动执行的延迟回调函数。

Vue 的特点之一就是能实现响应式，但数据更新时，DOM 不会立即更新，而是放入一个异步队列中，因此如果在我们的业务场景中，需要在 DOM 更新之后执行一段代码时，这个时候我们可以使用 `this.$nextTick()`函数来实现

### 二、Vue.nextTick 的调用方式

调用方式主要有以下两种：Vue.nextTick([callback,context])和 `vm.$nextTick([callback])`;

1. `Vue.nextTick([callback,context])`;该方法是全局方法，该方法可能接收 2 个参数，分别为回调函数和执行回调函数的上下文环境。
2. `vm.$nextTick([callback])`: 该方法是实列方法，执行时自动绑定 this 到当前的实列上。

### 三、为什么 Vue 使用异步更新队列？

如果同步更新 DOM 将会有这样一个问题，我们在代码中同步更新数据 N 次，DOM 也会更新 N 次，伪代码如下：

```
this.message = '更新完成'       // DOM更新一次
this.message = '更新完成2'       // DOM更新两次
this.message = '更新完成3'       // DOM更新三次
this.message = '更新完成4'       // DOM更新四次
```

但事实上，我们真正想要的其实只是最后一次更新而已，也就是说前三次 DOM 更新都是可以省略的，我们只需要等所有状态都修改好了之后再进行渲染就可以减少一些无用功。

而这种无用功能在 Vue2.0 开始变得更为重要，Vue2.0 开始引入了 Virtuval DOM，每一次状态发生变化后，状态变化的信号发送给组件，组件内部使用 Virtual DOM 进行计算提出需要更新的具体的 DOM 节点，然后对 DOM 进行更新操作，每次更新状态后的渲染过程需要更多的计算，而这种无用也将浪费更多的性能，所以异步渲染变得更加到头重要。

组件内部使用 Virtual DOM 进行渲染，也就是说，组件内部其实是不关心哪个状态发了变化，它只需要计算一次就可以得知哪些节点需要更新。也就是说，如果更改了 N 个状态，其实只需要发送一个信号就可以将 DOM 更新到最新。例如：

```
this.message = '更新完成'
this.age =  23
this.name = berwin
```

代码中我们分三次修改了三种状态，但其实 Vue 只会渲染一次。因为 VIrtualDOM 只需要一次就可以将整个组件的 DOM 更新到最新，它根本不会关心这个更新的信号到底是从哪个具体的状态发出来的。

那如何才能将渲染操作推迟到所有状态都修改完毕呢？很简单，只需要将渲染操作推迟到本轮事件循环的最后或者下一轮事件循环。也就是说，只需要在本轮事件循环的最后，等前面更新状态的语句都执行完之后，执行一次渲染操作，它就可以无视前面各种更新状态的语法，无论前面写了多少条更新状态的语句，只在最后渲染一次就可以了。

将渲染推迟到本轮事件循环的最后执行渲染的时机会比推迟到下一轮快很多，所以 Vue 优先将渲染操作推迟到本轮事件循环的最后，如果执行环境不支持会降级到下一轮。

当然，Vue 的变化侦测机制决定了它必然会在每次状态发生变化时都会发出渲染的信号，但 Vue 会在收到信号之后检查队列中是否已经存在这个任务，保证队列中不会有重复。如果队列中不存在则将渲染操作添加到队列中。

之后通过异步的方式延迟执行队列中的所有渲染的操作并清空队列，当同一轮事件循环中反复修改状态时，并不会反复向队列中添加相同的渲染操作。

所以我们在使用 Vue 时，修改状态后更新 DOM 都是异步的。

### 四、`vm.$nextTick` 与 `setTimeout` 的区别是什么？

在区别他们两之前，我们先来看一个简单的 demo 如下：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nextTick学习3</title>
    <script type="text/javascript" src="https://cn.vuejs.org/js/vue.js"></script>
</head>
<body>
    <div id="app">
        <template>
          <div ref="list">{{name}}</div>
        </template>
      </div>
      <script type="text/javascript">
        new Vue({
          el: '#app',
          data: {
            name: 'tony'
          },
          created() {
            console.log(this.$refs.list); // 打印undefined
            setTimeout(() => {
              console.log(this.$refs.list); // 打印出 "<div>tony</div>"
            }, 0);
          }
        })
      </script>
</body>
</html>
```

如上代码，我们不使用 nextTick， 我们使用 setTimeout 延迟也一样可以获取页面中的 HTML 元素的，那么他们俩之间到底有什么区别呢？

通过看 vue 源码我们知道，nextTick 源码在`src/core/util/next-tick.js`里面。在 vue 中使用三种情况来延迟调用该函数，首先我们会判断我们的设备是否支持 Promise 对象，如果支持的话，会使用 Promise.then 来做延迟调用函数。如果设备不支持 Promise 对象，再判断是否支持 MutationObserver 对象，如果支持该对象，就使用 MutationObserver 来做延迟，最后如果上面两种都不支持的话，我们会使用`setTimeout(()=>{},0)`;setTimeout 来做延迟操作。

在比较 nextTick 与 setTimeout 的区别，其实我们可以比较 promise 或 MutationObserver 对象与 setTimeout 的区别的了，因为 nextTick 会先判断设备是否支持 promise 及 MutationObserver 对象的，只要我们弄懂 promise 和 setTimeout 的区别，也就是弄明白 nextTick 与 setTimeout 的区别了。

比较 promise 与 setTimeout 之前，需要先了解浏览器的 eventloop，请参考文章[理解 EventLoop](https://km.xiaowuzi.info/js/js-eventloop.html)

**总结**：microtasks(微任务)包括 Promise 和 MutaionObserver，因此我们可以知道在 Vue 中的 nextTick 的执行速度上是快于 setTimeout 的。

### 五、理解 MutationObserver

在 Vue 中的 nextTick 的源码中，使用了 3 种情况来做延迟操作，首先会判断我们的设备是否支持 Promise 对象，如果支持 Promise 对象，就使用 Promise.then()异步函数来延迟，如果不支持，我们会继续判断我们的设备是否支持 MutationObserver，如果支持，我们就使用 MutationObserver 来监听，最后如果上面两种都不支持的话，我们会使用 setTimeout 来处理，那么我们现在要理解的是 MutationObserver 是什么？

#### 5.1 MutationObserver 是什么？

MutationObserver 中文含义可以理解为“变动观察器”。它是监听 DOM 变动接口，DOM 发生任何变动，DOM 发生任何变动，MutationObserver 会得到通知。在 Vue 中是通过该属性来监听 DOM 更新完毕的。

它和事件类似，但有所不同，事件是同步的，当 DOM 发生变动时，事件会立刻处理，但是 MutationObserver 则是异步的，它不会立即处理，而是等页面上所有的 DOM 完成后，会执行一次，如果页面上要操作 100 次 DOM 的话，如果是事件的话会监听 100 次 DOM，但是我们的 MutationObserver 只会执行一次，它是等待所有 DOM 操作完成后，再执行。

**它的特点是：**

1. 等待所有脚本任务完成后，才会执行，即采用异步方式。
2. DOM 的变动记录会封装成一个数组进行处理。
3. 还可以观测发生在 DOM 的所有类型变动，也可以观测某一类变动。

当然 MutationObserver 也是有浏览器兼容的，我们可以使用如下代码来检测浏览器是否支持该属性，如下代码:

```
var MuationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver;

// 监测浏览器是否支持
var observeMutationSupport = !!MutationObserver;
```

#### 5.2 MutationObserver 构造函数

首先我们要使用 MutationObserver 构造函数的话，我们先要实例化 MutationObserver 构造函数，同时我们要指定该实例的回调函数，如下代码：

```
var observer = new MutationObserver(callback);
```

观察器 callback 回调函数会在每次 DOM 发生变动后调用，它接收 2 个参数，第一个是变动的数组，第二个是观察器的实例。

#### 5.3 MutationObserver 实例的方法

observe()该方法是要观察 DOM 节点的变动的。

调用方式为：**observer.observe(dom,option);**

options 类型有如下：

- childList：子节点的变动。
- attributes：属性的变动。
- charatcterData：节点内容或节点文本的变动。
- subtree：所有后代节点的变动。

需要观察哪一种变动类型，需要在 options 对象中指定为 true 即可；但是如果设置 subtree 的变动，必须同时指定 childList，attributes 和 characterData 中的一种或多种。

示例代码如下：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MutationObserver实例的方法</title>
</head>
<body>
    <div id="app">
        <ul>
            <li>tony</li>
        </ul>
    </div>
    <script type="text/javascript">
    var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver;
    var list = document.querySelector('ul');
    var Observer = new MutationObserver(function(mutations,instance){
        console.log(mutations);         // 打印mutations
        console.log(instance);      // 打印 instance
        mutations.forEach(function(mutation){
            console.log(mutation);     // 打印mutation
        });
    });
    Observer.observe(list,{
        childList:true,     //  子节点的变动
        characterData: true, // 节点内容或节点文本变动
        attributes: true,       // 属性变化时
        subtree:true        // 所有后代节点的变动
    });
    list.childNodes[0].data = "小武子";
    var li = document.createElement('li');
    var textNode = document.createTextNode('肖能武');
    li.appendChild(textNode);
    list.appendChild(li);
    // 设置节点的属性，会触发回调函数
    list.setAttribute('data-value', 'tugenhua111');

    // 重新设置属性，会触发回调函数
    list.setAttribute('data-value', 'tugenhua222');

    // 删除属性，也会触发回调函数
    list.removeAttribute('data-value');
    </script>
</body>
</html>
```

打印相应属性如下：

![images](mutationObserver.png)

如上就是 MutationObserver 的基本使用，它能监听子节点的变动、属性的变动、节点内容或节点文本的变动及所有后代节点的变动。

### 六、nextTick 源码分析

vue 源码在 `vue/src/core/util/next-tick.js` 中。源码如下：

```
/* @flow */
/* globals MutationObserver */

import { noop } from 'shared/util'
import { handleError } from './error'
import { isIE, isIOS, isNative } from './env'

export let isUsingMicroTask = false

const callbacks = []
let pending = false

function flushCallbacks () {
  pending = false
  const copies = callbacks.slice(0)
  callbacks.length = 0
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}

let timerFunc

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  const p = Promise.resolve()
  timerFunc = () => {
    p.then(flushCallbacks)
    if (isIOS) setTimeout(noop)
  }
  isUsingMicroTask = true
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  let counter = 1
  const observer = new MutationObserver(flushCallbacks)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true
  })
  timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
  }
  isUsingMicroTask = true
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  timerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else {
  // Fallback to setTimeout.
  timerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}

export function nextTick (cb?: Function, ctx?: Object) {
  let _resolve
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  if (!pending) {
    pending = true
    timerFunc()
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}

```

如上代码，我们从上往下看，

#### 6.1 promise.then 延迟调用

基本代码如下：

```
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  const p = Promise.resolve()
  timerFunc = () => {
    p.then(flushCallbacks)
    if (isIOS) setTimeout(noop)
  }
  isUsingMicroTask = true
}
```

上面代码的含义是：如果我们的设备（或叫浏览器）支持 Promise，那么我们就使用 Promise.then 的方式来延迟函数的调用。Promise.then 会将函数延迟到调用栈的最末端，从而会做到延迟。

#### 6.2 MutationObserver 监听

基本代码如下：

```
else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  let counter = 1
  const observer = new MutationObserver(flushCallbacks)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true
  })
  timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
  }
  isUsingMicroTask = true
}
```

如上代码，首先也是判断我们的设备是否支持 MutationObserver 对象，如果支持的话，我们就会创建一个 MutationObserver 构造函数，并且把 flushCallbacks 函数当做 callback 的回调，然后我们会创建一个文本节点，之后会使用 MutationObserver 对象的 observe 来监听该文本节点，如果广西节点的内容有任何变动的话，它就会触发 flushCallbacks 回调函数。那么要怎么样触发呢？在该代码内有一个 timerFunc 函数，如果我们触发该函数，会导致文本节点的数据发生改变，进而触发 MutationObserver 构造函数。

#### 6.3 setImmediate 监听

基本代码如下：

```
else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  timerFunc = () => {
    setImmediate(flushCallbacks)
  }
}
```

如上面的 Promise 和 MutationObserver 都不支持的话，我们继续会判断设备是否支持 setImmediate，setImmediate 属于 macrotasks(宏任务)的。该任务会在一个宏任务里执行回调队列。

#### 6.4 使用 setTimeout 做降级处理

基本代码如下：

```
else {
  // Fallback to setTimeout.
  timerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}
```

如果我们上面三种情况, 设备都不支持的话, 我们会使用 setTimeout 来做降级处理, 实现延迟效果。

### 参考资料

- [Vue 系列---理解 Vue.nextTick 使用及源码分析(五)](https://www.cnblogs.com/tugenhua0707/p/11756584.html)
- [你真的理解`$nextTick` 么](https://juejin.im/post/5cd9854b5188252035420a13)
- [为什么 Vue 使用异步更新队列](https://github.com/berwin/Blog/issues/22)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
