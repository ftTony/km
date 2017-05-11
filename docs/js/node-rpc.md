# RPC 调用

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [RPC 介绍](#一、-rpc-介绍)
- [RPC 与 AJAX 及 HTTP 的区别](#二、-rpc-与-ajax-及-http-的区别)
- [RPC 基本原理](#三、rpc-基本原理)
- [Nodejs 实现 RPC 通讯协议](#四、Nodejs-实现-RPC-通讯协议)

### 一、 RPC 介绍

RPC 中文名**远程过程调用**，拆开理解，**过程**也叫方法或函数，**远程**就是说方法不当前进程里，而是在其他进程或机器上面，合起来 RPC 就是调用其他进程或机器上面的函数。简单讲，就是本地调用的逻辑处理的过程放在的远程的机器上，而不是本地服务代理来处理。一个完整的 RPC 框架主要有三部分组成：通信框架、通信协议、序列化和反序列化格式。

### 二、 RPC 与 AJAX 及 HTTP 的区别

#### 2.1 与 Ajax 对比相同点

- 都是两个计算机之间的网络通信，Ajax 是浏览器和服务器通信，RPC 是服务器和服务器通信
- 都需要双方约定一个数据格式

#### 2.2 与 Ajax 对比不同点

- RPC 调用不一定使用 DNS 作为寻址服务，Ajax 一般是浏览器向服务器请求，请求地址一般是`https://域名/xxx`，服务器需要根据域名区寻找对应的 IP 地址，这就是 DNS 寻址过程，而 RPC 一般用在内网之间互相请求，一般使用特有服务进行寻址。
- RPC 应用层协议一般不使用 HTTP，一般使用一些二进制协议，其优点是数据包体积更小、编解码速率更快。
- RPC 基于 TCP 或 UDP 协议，其中 TCP 通信又存在多种通信方式单工通信(两个服务器之间，只允许单向发送消息，如只能 A 给 B 发消息)、半双工通信(两个服务器之间，同一时间只允许单向发送消息，如时间段一 A 发给 B，时间段二 B 发给 A，又称为轮番单工通信)、全双工通信(可以自由互相发送消息)。

#### 2.3 RPC 与 HTTP 区别

- RPC 通常所讲是一个框架，而 HTTP 是基于 TCP 的实现的超文本传输协议，HTTP 是无状态协议；最初用于浏览器与服务器的通信，后来广泛用于各个服务间的通信。
- RPC 是远程过程调用，RPC 框架的通信过程可以使用各种通信协议（如 HTTP，TCP 以及各种自定义协议）实现。良好的 rpc 调用是面向服务的封装，针对服务的可用性和效率等都做了优化。单纯使用 http 调用则缺少了这些特性。

### 三、RPC 基本原理

### 四、Nodejs 实现 RPC 通讯协议

Nodejs 中有个 Buffer 模块，可以提供对二进制数据的操作。所以我们可以用来进行二进制的编码和解码，结合上面的通信协议，可以写出编码和解码部分代码。

#### 4.1 简单编码部分

```
// 编码
const payload = {
  service: 'com.test',
  methodName: 'plus',
  args: [ 1, 2 ],
};
const body = new Buffer(JSON.stringify(payload));

const header = new Buffer(10);
header[0] = 0;
header.writeInt32BE(1000, 1);
header[5] = 1; // codec => 1 代表是 JSON 序列化
header.writeInt32BE(body.length, 6);

const packet = Buffer.concat([ header, body ], 10 + body.length);
```

#### 4.2 简单解码部分

```
// 解码
const type = buf[0]; // => 0 (request)
const requestId = buf.readInt32BE(1); // => 1000
const codec = buf[5];
const bodyLength = buf.readInt32BE(6);

const body = buf.slice(10, 10 + bodyLength);
const payload = JSON.parse(body);
```

### 参考资料

- [Nodejs 之 RPC 调研](https://shopee-sc.github.io/blog/2019/11/22/rpc)
- [聊聊 Node.js RPC（一）— 协议](https://zhuanlan.zhihu.com/p/38012481)
- [聊聊 Node.js RPC（二）— 服务发现](https://zhuanlan.zhihu.com/p/40606909)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
