# Service Workers 学习

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 什么是 Service Workers
- Service Worker 的优势
- Service Worker 的设计思路
- Service Worker 使用

### 一、什么是 Service Workers

在 2014 年的时候，标准委员会就提出了 Service Worker 的概念，它的主要思想是在**页面和网络之间增加一个拦截器，用来缓存和拦截请求**。整体结构如下图所示：

![images](service-worker.png)

在没有安装 Service Worker 之前，WebApp 都是直接通过网络模块来请求资源的。安装了 Service Worker 模块之后，WebApp 请求资源时，会先通过 Service Worker，让它判断是返回 Service Worker 缓存的资源还是重新去网络请求资源。一切的控制权都交由 Service Worker 来处理。

**兼容性**

### 二、Service Worker 的优势

#### 2.1 支持离线访问

#### 2.2 加载速度快

#### 2.3 离线状态下的可用性

### 三、Service Worker 的设计思路

### 四、Service Worker 使用

## 参考资料

- [Service Worker 初探](https://mp.weixin.qq.com/s/cNgC0uDrILaFY5TFL_Bglw)
- [Service Worker：让你的 Web 应用牛逼起来](https://mp.weixin.qq.com/s/IhMyaCYrTAXJcKSPSnEOjw)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
