# RPC 调用

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- RPC 介绍
- RPC 与 AJAX 及 HTTP 的区别

### 一、 RPC 介绍

### 二、 RPC 与 AJAX 及 HTTP 的区别

#### 2.1 与 Ajax 对比相同点

- 都是两个计算机之间的网络通信，Ajax 是浏览器和服务器通信，RPC 是服务器和服务器通信
- 都需要双方约定一个数据格式

#### 2.2 与 Ajax 对比不同点

- RPC 调用不一定使用 DNS 作为寻址服务，Ajax 一般是浏览器向服务器请求，请求地址一般是`https://域名/xxx`，服务器需要根据域名区寻找对应的 IP 地址，这就是 DNS 寻址过程，而 RPC 一般用在内网之间互相请求，一般使用特有服务进行寻址。
- RPC 应用层协议一般不使用 HTTP，一般使用一些二进制协议，其优点是数据包体积更小、编解码速率更快。
- RPC 基于 TCP 或 UDP 协议，

#### 2.3 RPC 与 HTTP 区别

### 参考资料

- [Nodejs 之 RPC 调研](https://shopee-sc.github.io/blog/2019/11/22/rpc)
- [Nodejs 之 RPC 协议简介](https://mp.weixin.qq.com/s/AhKoUpYA4mCwhbxMRRqjBA)
- [聊聊 Node.js RPC（一）— 协议](https://zhuanlan.zhihu.com/p/38012481)
- [聊聊 Node.js RPC（二）— 服务发现](https://zhuanlan.zhihu.com/p/40606909)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
