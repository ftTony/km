# HTTP3 学习

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- HTTP/2 的缺点
- HTTP/3 简介
- QUIC 协议特点

### 一、HTTP/2 的缺点

- TCP 和 TCP+TLS 建立连接的延时
- TCP 的队头阻塞并没有彻底解决

### 二、HTTP/3 简介

### 三、QUIC 协议特点

- 实现了类似 TCP 的流量控制、传输可靠性的功能。
- 实现了快速握手功能
- 集成了 TLS 加密功能
- 多路复用，彻底解决 TCP 中队头阻塞的问题。

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
