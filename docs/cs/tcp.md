# TCP 与 UDP

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- TCP
- UDP
- TCP 与 UDP 区别

### 一、

### 二、UDP

用户数据报协议 UDP，是面向无连接的通讯协议，是无连接的，尽最大可能交付，没有拥塞控制，面向报文（对于应用程序传下来的报文不合并也不拆分，只是添加 UDP 首部），支持一对一、一对多、多对一和多对多的交互通信。UDP 通讯时不需要接收方确认，属于不可靠的传输，可能会出现丢包现象，实际应用中要求程序员编程验证。例如：视频传输、实时通信。

#### 2.1 UDP 首部格式

![images](net-udp.png)

### 三、TCP 与 UDP 区别

### 参考资料

- [TCP/IP 详解学习笔记](https://www.cnblogs.com/zhehan54/p/6204767.html)
- [面试官，不要再问我三次握手和四次挥手](https://mp.weixin.qq.com/s/WI9045Sd7gRsE-WZ5x8tcA)
- [TCP 三次握手和四次挥手](https://mp.weixin.qq.com/s/rWkD5ktlJDxcNFJ-5NH1eQ)
- [面试官问:TCP 为啥要 3 次握手和 4 次挥手？握两次手不行吗？](https://mp.weixin.qq.com/s/KCEgz5FqQ44Vt3iUREJmaA)
- [面试官问我：一个 TCP 连接可以发多少个 HTTP 请求？竟答不上来](https://zhuanlan.zhihu.com/p/93586950)
- [动画：用动画给面试官解释 TCP 三次握手过程](https://mp.weixin.qq.com/s/HNrY1sMk14_ogqCZ8s_2sw)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
