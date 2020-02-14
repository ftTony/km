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

#### 1.1 更改数据后，进行节点DOM操作

比如修改数据、修改节点样式等操作。比如说修改data中的一个属性数据后，如果我这个时候直接获取该html内容的话，它还是老数据的，那么此刻，我们可以使用Vue.nextTick()，在该函数内部获取数据即可：

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

如上代码，页面初始化时候，页面显示的是“tony”；当页面中的所有的DOM更新完成后，我估mounted()生命周期中调用updateData()方法，然后在该方法内部修改this.name这个数据，再打印this.

refs.list.textContent，可以看到打印的数据还是“tony”；为什么会是这样呢？那是因为修改name数据后，我们的DOM还没有被渲染完成，所以我们这个时候获取的值还是之前的值，但是我们放在nextTick函数里面的时候，代码会在DOM更新完成后会自动nextTick()函数，因此这个时候我们再去使用this.refs.list.textContent获取该值的时候，就可以获取到最新值了。

**理解DOM更新：** 在VUE中，当我们修改了data中的某一个值后，并不会立刻去渲染html页面，而是将vue更改的数据放到watcher的一个异步队列中，只有当前任务空闲的才会执行watcher中的队列任务，因此这就会有一个延迟时间，因此我们把代码放到nextTick函数后就可以获取到html页面的最新值了。

#### 1.2 在created生命周期中进行DOM操作

在Vue生命周期中，只有在mounted生命周期中我们的HTML才渲染完成，因此在该生命周期中，我们就可以获取到页面中的html DOM节点，但如果我们在created生命周期中是访问不到DOM节点的。在该生命周期中我们想要获取DOM节点的话，我们需要使用`this.$nextTick()`函数。

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

如上代码，在created生命周期内，我们打印 this.

refs.list值为undefined，那是因为在created生命周期内页面的html没有被渲染完成，因此打印出为undefined；但是我们把它放入this.nextTick函数内即可打印出值出来，这也印证了nextTick是在下次DOM更新循环线束之后执行的延迟回调。因此只有DOM渲染完成后才会自动执行的延迟回调函数。

Vue的特点之一就是能实现响应式，但数据更新时，DOM不会立即更新，而是放入一个异步队列中，因此如果在我们的业务场景中，需要在DOM更新之后执行一段代码时，这个时候我们可以使用this.$nextTick()函数来实现

### 二、Vue.nextTick 的调用方式

调用方式主要有以下两种：Vue.nextTick([callback,context])和 `vm.$nextTick([callback])`;

1. `Vue.nextTick([callback,context])`;该方法是全局方法，该方法可能接收 2 个参数，分别为回调函数和执行回调函数的上下文环境。
2. `vm.$nextTick([callback])`: 该方法是实列方法，执行时自动绑定 this 到当前的实列上。

### 三、`vm.$nextTick` 与 `setTimeout` 的区别是什么？

在区别他们两之前，我们先来看一个简单的demo如下：

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

如上代码，我们不使用 nextTick， 我们使用setTimeout延迟也一样可以获取页面中的HTML元素的，那么他们俩之间到底有什么区别呢？

通过看vue源码我们知道，nextTick源码在`src/core/util/next-tick.js`里面。在vue中使用三种情况来延迟调用该函数，首先我们会判断我们的设备是否支持Promise对象，如果支持的话，会使用Promise.then来做延迟调用函数。如果设备不支持Promise对象，再判断是否支持MutationObserver对象，如果支持该对象，就使用MutationObserver来做延迟，最后如果上面两种都不支持的话，我们会使用`setTimeout(()=>{},0)`;setTimeout来做延迟操作。

在比较 nextTick 与 setTimeout 的区别，其实我们可以比较 promise 或 MutationObserver 对象与 setTimeout 的区别的了，因为 nextTick 会先判断设备是否支持 promise 及 MutationObserver 对象的，只要我们弄懂 promise 和 setTimeout 的区别，也就是弄明白 nextTick 与 setTimeout 的区别了。

比较promise与setTimeout之前，需要先了解浏览器的eventloop，请参考文章[理解 EventLoop](https://km.xiaowuzi.info/js/js-eventloop.html)

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

首先我们要使用MutationObserver构造函数的话，我们先要实例化MutationObserver构造函数，同时我们要指定该实例的回调函数，如下代码：

```
var observer = new MutationObserver(callback);
```

观察器callback回调函数会在每次DOM发生变动后调用，它接收2个参数，第一个是变动的数组，第二个是观察器的实例。

#### 4.3 MutationObserver实例的方法

observe()该方法是要观察DOM节点的变动的。

调用方式为：**observer.observe(dom,option);**

options 类型有如下：

- childList：子节点的变动。
- attributes：属性的变动。
- charatcterData：节点内容或节点文本的变动。
- subtree：所有后代节点的变动。

需要观察哪一种变动类型，需要在options对象中指定为true即可；但是如果设置subtree的变动，必须同时指定childList，attributes和characterData中的一种或多种。

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

如上就是MutationObserver的基本使用，它能监听子节点的变动、属性的变动、节点内容或节点文本的变动及所有后代节点的变动。

### 五、nextTick 源码分析

vue源码在 `vue/src/core/util/next-tick.js` 中。源码如下：

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

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
let timerFunc

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  const p = Promise.resolve()
  timerFunc = () => {
    p.then(flushCallbacks)
    if (isIOS) setTimeout(noop)
  }
  isUsingMicroTask = true
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
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

#### 5.1 promise.then 延迟调用

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

上面代码的含义是：如果我们的设备（或叫浏览器）支持Promise，那么我们就使用Promise.then的方式来延迟函数的调用。Promise.then会将函数延迟到调用栈的最末端，从而会做到延迟。

#### 5.2 MutationObserver 监听

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

#### 5.3 setImmediate 监听

基本代码如下：

```
else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  timerFunc = () => {
    setImmediate(flushCallbacks)
  }
} 
```

#### 5.4 使用setTimeout 做降级处理

基本代码如下：

```
else {
  // Fallback to setTimeout.
  timerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}
```

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
