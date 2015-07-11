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

图中的每个框被称为事件循环机制的一个阶段，每个阶段都有一个 FIFO 队列来执行回调。虽然每个阶段都是特殊的，但通常情况下，当事件循环进入给定的阶段时，它将执行特定于该阶段的任何操作，然后执行该阶段队列中的回调，直到队列用尽或最大回调数已执行。当该队列已用尽或达到回调限制，事件循环将移动到下一个阶段。

从上面这个简化图中，我们可以分析出 node 的事件循环的阶段顺序为：

**输入数据阶段(incoming data)—>轮询阶段(poll)—>检查阶段(check)—>关闭事件回调阶段(close callback)—>定时器检测阶段(timers)—>I/O 事件回调阶段(I/O callbacks)—>闲置阶段(idle,prepare)—>轮询阶段**

### 三、阶段概述

- 定时器检测阶段(timers)：本阶段执行 timer 的回调，即 setTimeout、setInterval 里面的回调函数。
- I/O 事件回调阶段(timers)：执行延迟到下一个循环迭代 I/O 回调，即上一 lwc 循环中未被执行的一些 I/O 回调。
- 闲置阶段(timers)：仅系统内部使用。
- 轮询阶段(timers)：检索新的 I/O 事件；执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，那些由计时器和 setImmediate()调度的之外）。其余情况 node 将在适当的时候在此阻塞。
- 检查阶段(timers)：setImmediate()回调函数在这里执行
- 关闭事件回调阶段(timers)：一些关闭的回调函数，如：socket.on('close',...)。

日常开发中的绝大部分异步任务都是在 poll、check、timers 这 3 个阶段处理的，所以我们来重点看看。

#### 3.1 timers

#### 3.2 poll

#### 3.3 check

check 阶段。这是一个比较简单的阶段，直接执行 setImmdiate 的回调。

### 四、轮循顺序

执行的轮循顺序——每个阶段都要等对应的宏任务队列执行完毕才会进入到下一个阶段的宏任务队列

1. timers
2. I/O callbacks
3. poll
4. setImmediate
5. close events

每两个阶段之间执行微任务队列

### 五、Event Loop 过程

1. 执行全局的 script 同步代码
2. 执行微任务队列，先执行所有 NextTick 队列中的所有任务，再执行其他
3. 开始执行宏任务
4. 每个阶段的宏任务执行完毕之后
5. TimersQueue—>步骤 2

### 六、setTimeout 和 setImmediate

setImmediate()方法用于把一些需要长时间运行的操作放在一个回调函数里，并在浏览器完成其他操作（如事件和显示更新）后立即运行回调函数。从定义来看就是为了防止一些耗时长的操作阻塞后面的操作，这也是为什么 check 阶段运行顺序排的比较后。

### 七、process.nextTick

process.nextTick 是一个独立于 eventLoop 的任务队列。

### 八、node 版本差异说明

这里主要说明的是 node11 前后的差异，因为 node11 之后一些特性已经向浏览器看齐了，总

### 九、node 和浏览器 eventLoop 的主要区别

两者最主要的区别在于浏览器中的微任务是在每个相应的宏任务完成后执行的，而 node 中的微任务是在不同阶段之间执行的。

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
