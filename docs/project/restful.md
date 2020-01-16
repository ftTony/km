# RESTful 架构

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 什么是 REST
- REST 特点
- REST 优点
- Nodejs 实现 RESTful API

### 一、什么是 REST

REST：（Representational State Transfer）即**表现层状态转换**，定义了**资源**的通用访问格式，是一种网络应用程序的**设计风格**和**开发方式**。

### 二、REST 特点

REST 通常使用 `JSON` 数据格式。

REST 基本架构的四个方法：

- **GET**-用于**获取数据**
- **PUT**-用于**更新或添加数据**
- **DELETE**-用于**删除数据**
- **POST**- 用于**添加数据**

### 三、REST 优点

- 可更高效利用缓存来提高响应速度
- 通讯本身的无状态性可以让不同的服务器的处理一系列请求中的不同请求，提高服务器的扩展性
- 浏览器即可作为客户端，简化软件需求
- 相对于其他叠加在 HTTP 协议之上的机制，REST 的软件依赖性更小
- 不需要额外的资源发现机制
- 在软件技术演进中的长期的兼容性更好

### 四、Nodejs 实现 RESTful API

### 参考资料

- [【全栈修炼】RESTful 架构及实践修炼宝典](http://www.pingan8787.com/2019/11/25/186-%E3%80%90%E5%85%A8%E6%A0%88%E4%BF%AE%E7%82%BC%E3%80%91RESTful%E6%9E%B6%E6%9E%84%E5%8F%8A%E5%AE%9E%E8%B7%B5%E4%BF%AE%E7%82%BC%E5%AE%9D%E5%85%B8/)
- [RESTful 架构详解](https://github.com/frank-lam/fullstack-tutorial/blob/master/notes/RESTful%20API.md)
- [理解 RESTful API 设计规范](https://www.cnblogs.com/tugenhua0707/p/12153857.html)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
