# 从 URL 输入到页面展现到底发生什么？

## 前言

打开浏览器从输入网址到网页呈现在大家面前，背后到底发生了什么？经历怎么样的一个过程？先给大家来张总体流程图，具体步骤请看下文分解！

![images](browser11.png)

总体来说分为以下几个过程:

- DNS 解析:将域名解析成 IP 地址
- TCP 连接：TCP 三次握手
- 发送 HTTP 请求
- 服务器处理请求并返回 HTTP 报文
- 浏览器解析渲染页面
- 断开连接：TCP 四次挥手

## 内容

- URL 到底是啥
- 域名解析（DNS）
- TCP 三次握手
- 发送 HTTP 请求
- 服务器处理请求并返回 HTTP 报文
- 浏览器解析渲染页面
- 断开连接

### 一、URL 到底是啥

### 二、域名解析（DNS）

### 三、TCP 三次握手

### 四、发送 HTTP 请求

### 五、服务器处理请求并返回 HTTP 报文

### 六、浏览器解析渲染页面

浏览器拿到响应文本 HTML 后，接下来介绍下浏览器渲染机制

![images](browser12.png)

浏览器解析渲染页面分为以下五个步骤：

- 根据 HTML 解析出 DOM 树
- 根据 CSS 解析生成 CSS 规则树
- 结合 DOM 树和 CSS 规则树、生成渲染树
- 根据渲染树计算每一个节点的信息
- 根据计算好的信息绘制页面

### 七、断开连接

### 参考资料

- [从 URL 输入到页面展现到底发生什么？](https://github.com/ljianshu/Blog/issues/24)
- [说一说从输入 URL 到页面呈现发生了什么？](https://juejin.im/post/5df5bcea6fb9a016091def69#heading-24)
- [04 | 导航流程：从输入 URL 到页面展示，这中间发生了什么？](https://time.geekbang.org/column/article/117637)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
