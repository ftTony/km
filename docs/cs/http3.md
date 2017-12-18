# HTTP3 学习

## 前言

Google 在推 SPDY 的时候就已经意识到了 HTTP2 存在的问题，于是就另起炉灶搞了一个基于 UDP 协议的“QUIC”协议，让 HTTP 跑在 QUIC 上而不是 TCP 上。而这个“HTTP over QUIC”就是 HTTP 协议的下一个大版本，HTTP/3。它在 HTTP/2 的基础上又实现了质的飞跃，真正“完美”地解决了“队头阻塞”问题

## 内容

- HTTP/2 的缺点
- HTTP/3 简介
- QUIC 协议特点

### 一、HTTP/2 的缺点

- TCP 和 TCP+TLS 建立连接的延时
- TCP 的队头阻塞并没有彻底解决
- 多路利用导致服务器压力上升
- 多路利用容易 Timeout

#### 1.1 TCP 和 TCP+TLS 建立连接的延时

TCP 连接需要和服务器进行**三次握手**，即消耗完 1.5 个 RTT 之后才能进行数据传输。

TLS 连接有两个版本——TLS1.2 和 TLS1.3，

### 二、HTTP/3 简介

### 三、QUIC 协议特点

- 改进的拥塞控制、可靠传输
- 快速握手
- 集成了 TLS 1.3 加密
- 多路复用
- 连接迁移

#### 3.1 改进的拥塞控制、可靠传输

从拥塞算法和可靠传输本身来看，QUIC 只是按照 TCP 协议重新实现了一遍，那么 QUIC 协议到底改进在哪些方面呢？主要有如下几点：

#### 3.2 快速握手功能

由于 QUIC 是基于 UDP 的，所以 QUIC 可以实现 0-RTT 或者 1-RTT 来建立连接，可以大大提升首次打开页面的速度。

#### 3.3 集成了 TLS 加密功能

#### 3.4 多路复用，彻底解决 TCP 中队头阻塞的问题。

### 参考资料

- [解密 HTTP/2 与 HTTP/3 的新特性](https://mp.weixin.qq.com/s/5jR7MrWQ9v3w_E8BhNWrpA)
- [HTTP/3 要点](https://mp.weixin.qq.com/s/qBD90RdofvYDNX2sSJWgNA)
- [31 ｜ HTTP/3：甩掉 TCP、TLS 的包袱，构建高效网络](https://time.geekbang.org/column/article/150159)
- [一文读懂 HTTP/1HTTP/2HTTP/3](https://zhuanlan.zhihu.com/p/102561034)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
