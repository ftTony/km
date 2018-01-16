# 单点登录原则

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 单系统登录机制
- 多系统的复杂性
- 单点登录

### 一、单系统登录机制

- http 无状态协议
- 会话机制
- 登录状态

#### 1.1 http 无状态协议

web 应用采用 browser/server 架构，http 作为通信协议。http 是无状协议，浏览器的每一次请求，服务器会独立处理，不与之前或之后的请求产生关联，这个过程用下图说明，三次请求/响应对之间没有任何联系。

![images](login02.png)

#### 1.2 会话机制

#### 1.3 登录状态

### 二、多系统的复杂性

### 三、单点登录

### 参考资料

- [Web 登录鉴权](https://lmjben.github.io/blog/osi-web-login.html#session-cookie)
- [单点登录原理与简单实现](https://www.cnblogs.com/ywlaker/p/6113927.html)
- [单点登录（SSO），从原理到实现](https://www.cnblogs.com/ywlaker/p/6113927.html)
- [单点登录（SSO）看这一篇就够了](https://yq.aliyun.com/articles/636281)
- [彻底理解 cookie、session、token](https://mp.weixin.qq.com/s/1Kh18uyEJzM21mc2l5MMCg)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
