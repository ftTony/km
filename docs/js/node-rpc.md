# RPC 调用

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [RPC 介绍](#一、-rpc-介绍)
- [RPC 与 AJAX 及 HTTP 的区别](#二、-rpc-与-ajax-及-http-的区别)
- [RPC 基本原理](#三、rpc-基本原理)
- [简单 RPC 通信协议设计](#四、简单-rpc-通信协议设计)
- [Nodejs 实现 RPC 通讯协议](#五、nodejs-实现-rpc-通讯协议)

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

首先来看看一个基于 TCP 的 RPC 调用的基本流程，以便对它有个宏观的认识。

1. 调用方（Client）通过本地的 RPC 代理（Proxy）调用相应的接口
2. 本地代理将 RPC 的服务名，方法名和参数等等信息转换成一个标准的 RPC Request 对象，即组装成能够进行网络传输的消息体
3. RPC 框架采用 RPC 协议（RPC Protocol）将 RPC Request 对象序列化成二进制形式，然后通过 TCP 通道传递给服务提供方（Server）
4. 服务端（Server）收到二进制数据后，将它反序列化成 RPC Request 对象（解码）
5. 服务端（Server）根据 RPC Request 中的解码信息找到本地对应的方法，传入参数执行，得到结果，并将结果封装成 RPC Response 交给 RPC 框架
6. RPC 框架将 RPC Response 对象序列化成二进制形式，然后通过 TCP 通道传递给服务调用方（Client）
7. 调用方（Clinet）收到二进制数据后，将它反序列化成 RPC Response 对象，并且将结果通过本地代理（Proxy）返回给业务代码
8. 调用方（Client）得到最终结果。

RPC 的目标就是要将 2~8 这些步骤都封装起来，让用户对这些细节透明。

### 四、简单 RPC 通信协议设计

通常它由一个 Header 和一个 Payload（类似于 HTTP 的 Boby）组成，合起来叫一个包（Packet）。之所以要有包，是因为二进制只完成 Stream 的传输，并不知道一次数据请求和响应的起始和结束，我们需要预先定义好包结构才能做解析。

协议设计就像把一个数据包按顺序切分成若干个单位长度的「小格子」，然后约定每个「小格子」里存储什么样的信息，一个「小格子」就是一个 Byte，它是协议设计的最小单位，1Byte 是 8Bit，可以描述 0 ~ 2^8 个字节数，具体使用多少个字节要看实际存储的信息。

简单包结构设计：

- 标记包的类型，比如：0 表示请求，1 表示响应，需要一个 Byte
- 关联 ID，将请求和它对应的响应关联起来，这个 ID 我们选择用一个 Int32 类型（4 Bytes）自增的数字表示
- Payload 长度记录，要能实现包的准确切割，我们需要明确包的长度，用 4 个 Byte
- 应用层协议类型标记，一个 Byte

```
0      1      2      3      4      5      6      7      8      9     10
+------+------+------+------+------+------+------+------+------+------+
| type |          requestId        | codec|         bodyLength        |
+------+---------------------------+------+---------------------------+
|                  ...          payload                               |
|                                                     ...             |
+---------------------------------------------------------------------+
```

这已经是可以工作的 RPC 通讯协议了，但随着 RPC 功能的增加我们可能需要记录更多的信息，这里就不说了。可以自行再了解。

### 五、Nodejs 实现 RPC 通讯协议

Nodejs 中有个 Buffer 模块，可以提供对二进制数据的操作。所以我们可以用来进行二进制的编码和解码，结合上面的通信协议，可以写出编码和解码部分代码。

#### 5.1 简单编码部分

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

#### 5.2 简单解码部分

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
