# 加载性能

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 首屏加载
- 白屏的定义

### 一、首屏加载

首屏加载是被讨论最多的话题,一方面 web 前端首屏的加载性能的确普遍较差,另一方面,首屏的加载速度至关重要,很多时候过长的白屏会导致用户还没有体验到网站功能的时候就流失了,首屏速度是用户留存的关键点。

**“它在运行吗？”**这个疑问一直到用户看到页面第一个绘制的元素为止，这个时候用户才能确定自己的请求是有效的（而不是被墙了...）

**“它有用吗？”**如果只绘制出无意义的各种乱序的元素，这对于用户是不可理解的，此时虽然页面开始加载了，但是对于用户没有任何价值，直到文字内容、交互按钮这些元素加载完毕，用户才能理解页面，这个时候用户会尝试与页面交互。

**“它能使用了吗？”**直到用户成功与页面互动，这才算是首屏加载完毕了

### 二、白屏的定义

### 三、白屏加载的问题分析

在现代前端应用开发中，我们往往会用 webpack 等打包器进行打包，很多情况下我们不进行优化，就会出现很多何种巨大的 chunk，有的甚至在 5M 左右，这些 chunk 是加载速度的杀手。

浏览器通常都有并发请求的限制，以 Chrome 为例，它的并发请求就为 6 个，这导致我们必须在请求完前 6 个之后，才继续进行后续请求，这也影响我们资源的加载速度。

### 四、白屏的性能优化

我们先梳理下白屏时间内发生了什么：

#### 4.1 loading 提示

如果你用的是以 webpack 为基础的前端框架工程体系，那么你的`index.html`文件一定是这样的：

```
<div id="app"></div>
```

我们将打包好的整个代码都渲染到这个 root 根节点上，而我们如何渲染呢？当然是用 JavaScript 操作各种 dom 渲染,比如 react 肯定是调用各种`_React_._createElement_()`,这是很耗时的,在此期间虽然 html 被加载了,但是依然是白屏,这就存在操作空间,我们能不能在 js 执行期间先加入提示,增加用户体验呢?

是的,我们一般有一款 webpack 插件叫 `html-webpack-plugin` ,在其中配置 html 就可以在文件中插入 loading 图。

webpack 配置：

```
const HtmlWebpackPlugin = require('html-webpack-plugin')
const loading = require('./render-loading')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            loading:loading
        })
    ]
};
```

#### 4.2 (伪)服务端渲染

那么既然在 HTML 加载到 js 执行期间会有时间等待，那么为什么不直接服务端渲染呢？直接返回的 HTML 就是带完整 DOM 结构的，省得还得调用 js 执行各种创建 dom 的工作，不仅如此还对 SEO 友好

正是有这种需求 vue 和 react 都支持服务端渲染，而相关的框架`Nuxt.js`、`Next.js`也大行其道，当然对已经采用客户端渲染的应用这个成本太高了。

#### 4.3 开启 HTTP2

我们看到获取 html 之后我们需要自上而下解析，在解析到`script`相关标签的时候才能请求想关资源，而且由于浏览器并发限制，我们最多一次性请求 6 次，那么有没有办法破解这些困境呢？

http2 是非常好的解决办法，http2 本身的机制就跢快：

1. http2 采用二进制分帧的方式进行通信，而 http1.x 是用文本，http2 的效率更高
2. http2 可以进行多路利用，即跟同一个域名通信，仅需要一个 TCP 建立请求通道，请求与响应可以同时基于此通道进行双向通信，而 http1.x 每次请求需要建立 TCP，多次请求需要多次连接，还有并发限制，十分耗时
3. http2 可以头部压缩，能够节省消息头战胜的网络的流量，而 HTTP/1.x 每次请求，都会携带大量冗余头信息，消费了很多带宽资源

#### 4.4 开启浏览器缓存

## 参考资料

- [前端性能优化之白屏时间](https://mp.weixin.qq.com/s/N_6faORvlDSxFQMh1o2naA)
- [2018 前端性能优化清单](https://juejin.im/post/5a966bd16fb9a0635172a50a)
- [【译】2018 前端性能优化清单 —— 第一部分](https://juejin.im/post/5a67e49df265da3e377c2d59)
- [[译] 2019 前端性能优化年度总结 — 第一部分](https://juejin.im/post/5c4418006fb9a049c043545e)
- [前端性能优化-加载篇](https://www.cxymsg.com/guide/load.html)
- [我们是如何将网站加载时间减少 24%的？](https://mp.weixin.qq.com/s/n1rELZ4y2htKCuAldlqS9A)
- [网站性能优化实战——从 12.67s 到 1.06s 的故事](https://juejin.im/post/5b6fa8c86fb9a0099910ac91)
- [你必须懂的前端性能优化](https://mp.weixin.qq.com/s/DdbaiuZd4RbqUod0jhn_vg)
- [我是如何让公司后台管理系统焕然一新的(上) -性能优化](https://juejin.im/post/5c76843af265da2ddd4a6dd0)
- [我是如何让公司后台管理系统焕然一新的（下）-封装组件](https://juejin.im/post/5c7b4761f265da2db2795036)
- [提升 90%加载速度——vuecli 下的首屏性能优化](https://segmentfault.com/a/1190000019499007)
- [【第 843 期】前端性能优化](https://mp.weixin.qq.com/s/Hcp60sfDOyXcP9TM0CX2Bw)
- [25 | 页面性能：如何系统地优化页面？](https://time.geekbang.org/column/article/143889)
- [【性能优化】DNS 预解析](https://github.com/amandakelake/blog/issues/50)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
