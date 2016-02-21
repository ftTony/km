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

### 二、哪些情况会引起内存泄漏

- 意外的全局变量
- 遗忘的定时器
- 使用不当的闭包
- 遗漏的 DOM 元素
- 网络回调

### 三、如何监控内存泄漏

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
