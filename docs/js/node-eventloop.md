# Node 的事件循环机制

## 前言

Node 中也有宏任务和微任务，与浏览中的事件循环类似。Node 与浏览器事件循环不同，其中有多个宏任务队列，而浏览器是只一个宏任务队列。

Node 的架构底层是有 libuv，它是 Node 自身的动力来源之一，通过它可以去调用一些底层操作，Node 中的 Event Loop 功能就是在 libuv 中封装实现的。

## 内容

- 宏任务和微任务
- 事件循环机制的六个阶段
- 阶段概述
- 轮循顺序
- Event Loop 过程
- setTimeout 和 setImmediate

### 一、宏任务和微任务

宏任务大概包括：

- setTimeout
- setInterval
- setImmediate
- script（整体代码）
- I/O 操作等。

微任务大概包括：

- process.nextTick(与普通微任务有区别，在微任务队列执行之前执行)
- new Promise().then(回调)等。

### 二、事件循环机制的六个阶段

![images](node11.jpg)

图中的每个框被称为事件循环机制的一个阶段，每个阶段都有一个 FIFO 队列来执行回调。虽然每个阶段都是特殊的，但通常情况下，当事件

### 三、阶段概述

- 定时器检测阶段(timers)：本阶段执行 timer 的回调，即 setTimeout、setInterval 里面的回调函数。
- I/O 事件回调阶段(timers)：执行延迟到下一个循环迭代 I/O 回调，即上一 lwc 循环中未被执行的一些 I/O 回调。
- 闲置阶段(timers)：
- 轮询阶段(timers)：
- 检查阶段(timers)：
- 关闭事件回调阶段(timers)：

### 四、轮循顺序

### 五、Event Loop 过程

### 六、setTimeout 和 setImmediate

### 参考资料

- [【语音解题系列】说说 Node 的事件循环机制](https://mp.weixin.qq.com/s/qEmR-N6cANSkKuJt2QO_eg)
- [分享 10 道 Nodejs EventLoop 和事件相关面试题](https://mp.weixin.qq.com/s/RNYYNR7A01V-Y2aC1wNsGw)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
