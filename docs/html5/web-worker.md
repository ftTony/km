# web worker 学习

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- Web Worker 介绍
- Web Worker 分类
- Web Worker 工作原理
- Web Worker 使用

### 一、Web Worker 介绍

Web Worker 使得一个 Web 应用程序可以在与主执行纯种分享的后台线程中运行一个脚本操作。这样做的好处是可以在一个单独的线程中执行费时的处理任务，从而允许主（通常是 UI）线程运行而不被阻塞。

它的作用就是给 JS 创造多线程运行环境，允许主线程创建 worker 线程，分配任务给后者，主线程运行的同时 worker 线程也在运行，相互不干扰，在 worker 线程运行结束后把结果返回给主线程。这样做的好处是主线程可以把计算密集型或高延迟的任务交给 worker 线程执行，这样主线程就会变得轻松，不会被阻塞或拖慢。这并不意味着 JS 语言本身支持了多线程能力，而是浏览器作为宿主环境提供了 JS 一个多线程运行的环境。

不过因为 worker 一旦新建，就会一直运行，不会被主线程的活动打断，这样有利于随时响应主线程的通性，但是也会造成资源的浪费，所以不应过度使用，用完注意关闭。或者说：如果 worker 无实例引用，该 worker 空闲后立即会被关闭；如果 worker 实列引用不为 0，该 worker 空闲也不会被关闭。

**兼容性**

| Browser | IE  | Edge | FireFox | Chrome | Safari |
| ------- | --- | ---- | ------- | ------ | ------ |
| version | 10+ | 12+  | 3.5+    | 4+     | 4+     |

### 二、Web Worker 分类

Web Worker 一共包含了 3 种类型的 Worker：

- Delicated Worker（专用 Worker）
- Shared Worker（共享 Worker）
- Service Worker（服务 Worker）

#### 2.1 Delicated Worker（专用 Worker）

Dedicated Worker 由主线程实例化且只能与它通信。

#### 2.2 Shared Worker（共享 Worker）

Shared Worker 可以被同一域（浏览器中不同的 tab、iframe 或其他 Shared Worker）下的所有线程访问。

#### 2.3 Service Worker（服务 Worker）

Service Worker 是一个事件驱动型 Worker，它的初始化注册需要网页/站点的 origin 和路径信息。一个注册好的 Service Worker 可以控制相关网页/网站的导航、资源请求以及进行粒度化的资源缓存操作

### 三、web worker 工作原理

### 四、web worker 使用

#### 4.1 限制

worker 线程的使用有一些注意点

1. 同源限制 worker 线程执行的脚本文件必须和主线程的脚本文件同源，这是当然的了，总不能允许 worker 线程到别人电脑上到处读文件吧
2. 文件限制 为了安全，worker 线程无法读取本地文件，它所加载的脚本必须来自网络，且需要与主线程的脚本同源
3. DOM 操作限制 worker 线程在与主线程的 window 不同的另一个全局上下文中运行，其中无法读取主线程所在网页的 DOM 对象，也不能获取 `document`、 `window`等对象，但是可以获取 `navigator`、 `location(只读)`、`XMLHttpRequest`、 `setTimeout`族等浏览器 API。
4. 通信限制 worker 线程与主线程不在同一个上下文，不能直接通信，需要通过 postMessage 方法来通信。
5. 脚本限制 worker 线程不能执行`alert`、`confirm`，但可以使用`XHLHttpRequest`对象发出 ajax 请求。

#### 4.2 实战场景

**加密数据**

有些加解密的算法比较复杂，或者在加解密很多数据的时候，这会非常耗费计算资源，导致 UI 线程无响应，因此这是使用 Web Worker 的好时机，使用 Worker 线程可以让用户更加无缝的操作 UI。

**预取数据**

有时候为了提升数据加载速度，可以提前使用 Worker 线程获取数据，因为 Worker 线程是可以是用 `XMLHttpRequest` 的。

**预渲染**

在某些渲染场景下，比如渲染复杂的 canvas 的时候需要计算的效果比如反射、折射、光影、材料等，这些计算的逻辑可以使用 Worker 线程来执行，也可以使用多个 Worker 线程，这里有个射线追踪的示例。

**复杂数据处理场景**

某些检索、排序、过滤、分析会非常耗费时间，这时可以使用 Web Worker 来进行，不占用主线程。

**预加载图片**

有时候一个页面有很多图片，或者有几个很大的图片的时候，如果业务限制不考虑屋架载，也可以使用 Web Worker 来加载图片

### 参考资料

- [Web Worker 的内部构造以及 5 种你应当使用它的场景](https://mp.weixin.qq.com/s/3MhSJoATeyHn3d96d3M3Sw)
- [前端 Web Workers 到底是什么](https://mp.weixin.qq.com/s/_ymkF6-Cc8i9A40WEOwMjQ)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
