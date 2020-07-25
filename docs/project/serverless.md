# serverless 前世今生

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [Serverless 介绍](#一、serverless-介绍)
- [Serverless 使用](#二、serverless-使用)

### 一、Serverless 介绍

#### 1.1 什么是 ServerLess

ServerLess = Faas(Function as a service) + Baas(Backend as a serice)

Faas 就是一些运行函数的平台，比如阿里云的函数计算、AWS 的 Lambda 等。

BaaS 则是一些后端云服务，比如云数据库、对象存储，消息队列等。利用 Baas，可以极大简化我们的应用开发难度

Serverless 则可以理解为运行在 FaaS 中的，使用了 BaaS 的函数。

#### 1.2 ServerLess 特点

- 事件驱动，函数在 FaaS 平台中，需要通过一系列事件来驱动函数执行。
- 无状态，因为每次函数执行，可能使用的都是不同的容器，无法进行内存或数据共享。如果要共享数据，则只能通过第三方服务，比如 Redis 等。
- 无运维，使用 ServerLess 我们不需要关心服务器，不需要关心运维。
- 低成本，使用 ServerLess 成本很低，因为我们只需要为每次函数的运行付费。函数不运行，则不花钱，也不会浪费服务器资源

#### 1.3 Serverless 优点

- 降低启动成本
  - 减少运营成本
  - 降低开发成本
- 实现快速上线
  - 更快的部署流水线
  - 更快的开发速度
- 系统安全更高
- 适应微服务架构
- 自动扩展能力

#### 1.4 Serverless 缺点

- 不适合有状态的服务
- 不适合长时间运行应用
- 完全依赖于第三方服务
- 冷启动时间较长
- 缺乏调度和开发工具

#### 1.5 Serverless 使用场景

- 发送通知
- WebHook
- 轻量级 API
- 物联网
- 数据统计分析
- Trigger 及定时任务
- 精益创业
- Chat 机器人

### 二、Serverless 使用

### 参考资料

- [无服务架构实践手册](https://jimmysong.io/serverless-handbook/)
- [Serverless 掀起新的前端技术变革](https://zhuanlan.zhihu.com/p/65914436)
- [前端学 serverless 系列](https://juejin.im/post/5d1c9380f265da1bc94f098e)
- [Serverless—前端的 3.0 时代](https://mp.weixin.qq.com/s/4ljo3QuwgGEzQ5OHqOA01w)
- [面向传统，Serverless 进化之路](https://mp.weixin.qq.com/s/DSFms7ovOMMuhe914Z7vcw)
- [写给前端工程师的 Serverless 入门](https://mp.weixin.qq.com/s/JXDMAmKfUOj4V66yVaT_6Q)
- [万字长文之 Serverless 实战详细指南](https://mp.weixin.qq.com/s/Ad-lyV85_000infAe_hZ2Q)
- [基于 NodeJS 的 serverless 架构实践](https://mp.weixin.qq.com/s/rR8VK7RodyCofOiSehF6fA)
- [Serverless（无服务）基础知识](https://juejin.im/post/5d42945ff265da03a715b2f0)
- [【第 1824 期】Serverless 函数应用架构升级](https://mp.weixin.qq.com/s/uWX6zdG7EFc43orrzAdWpA)
- [前端微服务在字节跳动的打磨与应用](https://juejin.im/post/5e17f064e51d45315d648b95)
- [ICBU 跨境供应链前端架构演进与 Serverless 实践](https://mp.weixin.qq.com/s/GFZ5MmYxmwtZmY8Q92IjBg)
- [当 SSR 遇上 Serverless，轻松实现页面瞬开](https://mp.weixin.qq.com/s/z6IycL0yDt419K_EzufokA)
- [【第 1861 期】千万级流量业务的 Serverless 实践，看 FaaS 给前端带来的变化](https://mp.weixin.qq.com/s/-oenEmJlGXNQ2XMuBp8S0g)
- [探索 Serverless 中的前端开发模式](https://juejin.im/post/5cdc3dc2e51d453b6c1d9d3a)
- [Serverless + Egg.js 后台管理系统实战](https://mp.weixin.qq.com/s/5Ngu5eWWr1jU_rm9d7IE-g)
- [【第 1890 期】看懂 Serverless SSR，这一篇就够了！](https://mp.weixin.qq.com/s/xcxoCUzzruVSm15TLLOs-Q)
- [12 张手绘图，终于搞懂了微服务架构](https://mp.weixin.qq.com/s/akBoBjaPLtctdJrs-Hvhtg)
- [使用 Serverless 模式开发部署前端和 Node.js](https://mp.weixin.qq.com/s/DeOFNQR03Dbf_B7Yt3k4_A)
- [探索 Serverless 中的前端开发模式](https://mp.weixin.qq.com/s/OUR5A2InyuRFhbF7SB-Atw)
- [TypeScript + ServerLess 开发 REST API 实战](https://mp.weixin.qq.com/s/whURh7YRr_iUtfmAAd_7AQ)
- [如何基于云函数 + SaaS 无缝开发应用|前端搞 Serverless](https://mp.weixin.qq.com/s/vKFPegd0dI-dqpwBC9tMUQ)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
