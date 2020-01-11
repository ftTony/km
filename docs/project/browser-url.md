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

URL（Uniform Resource Locator），统一资源定位符，用于定位互联网上资源，俗称网址。

比如 [http://www.w3school.com.cn/html/index.asp](http://www.w3school.com.cn/html/index.asp)，遵守以下的语法规则：

**scheme://host.domain:port/path/filename**

各部分解释如下：

- `scheme` - 定义因特网服务的类型。常见的协议有 http、https、ftp、file，其中最常见的类型是 http，而 https 则是进行加密的网络传输。
- `host` - 定义域主机（http 的默认主机是 www）
- `domain` - 定义因特网域名，比如 w3school.com.cn
- `port` - 定义主机上的端口号（http 的默认端口号是 80）
- `path` - 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）。
- `filename` - 定义文档/资源的名称

### 二、域名解析（DNS）

在浏览器输入网址后，首先要经过域名解析，因为浏览器并不能直接通过域名找到对应的服务器，而是要通过 IP 地址。大家

### 三、TCP 三次握手

[TCP 与 UDP](https://km.xiaowuzi.info/cs/tcp.html)

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
- 《网络是怎么连接的》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
