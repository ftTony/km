# JS 内存泄漏、监控和分析

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 内存泄漏的定义以及为什么发生内存泄漏？
- 为什么会发生内存泄漏？
- 哪些情况会引起内存泄漏
- 如何监控内存泄漏
- 如何分析内存泄漏，找出有问题的代码
- 实例分析

### 一、内存泄漏的定义以及为什么发生内存泄漏？

**内存泄漏**是指申请的内存没有及时回收掉，被泄漏了。

虽然前端有垃圾回收机制，但当某块无用的内存，却无法被垃圾回收机制认为是垃圾时，也就发生内存泄漏了

而垃圾回收机制通常是使用标志清除策略，简单说，也就是引用引用从根节点开始是否可达来判定是否是垃圾

上面是发生内存泄漏的根本原因，直接原因则是，当不同生命周期的两个东西相互通信时，一方生命到期该回收了，去被另一方还持有时，也就发生内存泄漏了

### 二、哪些情况会引起内存泄漏

- 意外的全局变量
- 遗忘的定时器
- 使用不当的闭包
- 遗漏的 DOM 元素
- 网络回调

#### 2.1 意外的全局变量

全局变量的生命周期最长，直到页面关闭前，它都存活着，所以全局变量上的内存一直不会被回收

当全局变量使用不当，没有及时回收（手动赋值 null），或者拼写错误等将某个变量挂载到全局变量时，也就发生内存泄漏了

示例代码：

```
function foo(){
    bar1 = 'some text';         // 没有声明变量  实际上是全局变量 => window.bar1
    this.bar2= 'some text';     //  全局变量=> window.bar2
}
foo();
```

在这个例子中，意外的创建了两个全局变量 bar1 和 bar2

#### 2.2 遗忘的定时器

setTimeout 和 setInterval 是由浏览器专门线程来维护它的生命周期，所以当在某个页面使用了定时器，当该页面销毁时，没有手动去释放清理这些定时器的话，那么这些定时器还是存活着的

也就是说，定时器的生命周期并不挂靠在页面上，

#### 2.3 使用不当的闭包

#### 2.4 遗漏的 DOM 元素

#### 2.5 网络回调

### 三、如何监控内存泄漏

内存泄漏是可以分成两类的，一种是比较严重的，泄漏的就一直回收不回来了，另一种严重程度稍微轻点，就是没有及时清理导致的内存严重，一段时间后还是可以被清理掉

不管哪一种，利用开发者工具抓到的内存图，应该都会看到一段时间内，内存占用不断的直线式下降，这是因为不断发生 GC，也就是垃圾回收导致的

### 四、如何分析内存泄漏，找出有问题的代码

### 五、实例分析

### 参考资料

- [垃圾回收和内存管理](https://github.com/stone0090/javascript-lessons/tree/master/2.6-GC&MemoryManagement)
- [前端面试：谈谈 JS 垃圾回收机制](https://github.com/qq449245884/xiaozhi/issues/36)
- [Node.js 内存管理和 V8 垃圾回收机制](https://mp.weixin.qq.com/s?__biz=MzIyNDU2NTc5Mw==&mid=2247483715&idx=1&sn=00600d07ce4fd2b465d6cc7692d050f0&scene=21#wechat_redirect)
- [浏览器垃圾回收机制与 Vue 项目内存泄漏场景分析](https://mp.weixin.qq.com/s/sMV4KyUb6RORJ4la7MfC4Q)
- [V8 引擎如何进行垃圾内存的回收？](https://sanyuan0704.github.io/frontend_daily_question/week07/038.html)
- [一文搞懂 V8 引擎的垃圾回收](https://mp.weixin.qq.com/s/1SGodqhTRM9mBy0Q9J0qow)
- [day038:V8 引擎如何进行垃圾内存的回收？](https://mp.weixin.qq.com/s/47IoOxXYoxhh00XfTIntDQ)
- [13 | 垃圾回收：垃圾数据是如何自动回收的？](https://time.geekbang.org/column/article/131233)
- [Chrome 浏览器垃圾回收机制与内存泄漏分析](https://mp.weixin.qq.com/s/m_cwfM0PgivmmCKaK-TviQ)
- [讲讲 js 的内存泄漏、如何监控和分析](https://mp.weixin.qq.com/s/5qDzvMLx_DAMWOwU7dFNWA)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
