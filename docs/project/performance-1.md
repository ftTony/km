# 加载性能

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [首屏加载](#一、首屏加载)
- [白屏的定义](#二、白屏的定义)
- [白屏加载的问题分析](#三、白屏加载的问题分析)
- [白屏的性能优化](#四、白屏的性能优化)

### 一、首屏加载

首屏加载是被讨论最多的话题,一方面 web 前端首屏的加载性能的确普遍较差,另一方面,首屏的加载速度至关重要,很多时候过长的白屏会导致用户还没有体验到网站功能的时候就流失了,首屏速度是用户留存的关键点。

**“它在运行吗？”** 这个疑问一直到用户看到页面第一个绘制的元素为止，这个时候用户才能确定自己的请求是有效的（而不是被墙了...）

**“它有用吗？”** 如果只绘制出无意义的各种乱序的元素，这对于用户是不可理解的，此时虽然页面开始加载了，但是对于用户没有任何价值，直到文字内容、交互按钮这些元素加载完毕，用户才能理解页面，这个时候用户会尝试与页面交互。

**“它能使用了吗？”** 直到用户成功与页面互动，这才算是首屏加载完毕了

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

参考[web 缓存](https://km.xiaowuzi.info/cs/http-cache.html)

#### 4.5 webpack 打包优化

通常情况下我们的 WebApp 是有我们的自身代码和第三方库组成的，我们自身的代码是会常常变动的，而第三方库除非有较大的版本升级，不然是不会变的，所以第三方库和我们的代码需要分开打包，我们可以给第三方库设置一个较长的强缓存时间，这样就不会频繁请求第三方库的代码了。

那么如何提取第三方库呢？在 webpack4.x 中 SplitChuncksPlugin 插件取代了 CommonsChunkPlugin 插件来进行公共模块抽取，我们可以对 SplitChunksPlugin 进行配置进行**拆包**操作。

SplitChunksPlugins 配置示意如下：

```
optimization:{
    splitChunks: {
        chunks: "initial",          // 代码块类型 必须三选一："initial" (初始化) | "all"(默认就是all) | "async" (动态加载)
        minSize: 0,     // 最小尺寸，默认0
        maxAsyncRequests: 1,    // 最大异步请求数，默认1
        maxInitialRequests: 1,  // 最大初始化请求数，默认1
        name: ()=>{},   // 名称，此选项可以接收function
        cacheGroups:{       // 缓存组会继承splitChuncks的配置，但是test、priorty和

        }
    }
}
```

[split-chunks-plugin](https://webpack.js.org/plugins/split-chunks-plugin/)的配置项很多，可以去官网了解如何配置，我们现在只简单列举了一下配置元素。

如果我们想抽取第三方库可以这样简单配置

```
splitChunks:{
    chunks: 'all',
    minSize: 30000,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,      // 最大初始化请求数
    automaticNameDelimiter: '~',    // 打包分割符
    name: true,

}
```

这样似乎大功告成了？并没有，我们的配置有很大的问题：

1. 我们粗暴得将第三方库一起打包可以吗？
2. 当 chunk 在强缓存期，但服务器代码已经变动了，我们怎么通知客户端？上面我们的示意图已经看到

下面示意了如何将第三方库进行拆包，基础型的 react 等库与工具性的 lodash 和特定库 Echarts 进行拆分

```
cacheGroups: {
    reactBase:{

    }
}
```

我们对 chunk 进行 hash 化，正如下图所示，我们变动 chunk2 相关的代码后，其它 chunk 都没有变化，只有 chunk2 的 hash 改变了

```
output:{
    filename: mode === 'production' ? '[name].[chunkhash:8]':'[name].js',
    chunkFilename: mode === 'production' ? '[id].[chunkhash:8].chunk.js':'[id].js',
    path: getPath(config.outputPath)
}
```

### 五、FMP(首次有意义绘制)

在白屏结束之后，页面开始渲染，但是此时的页面还是只是出现个别无意义的元素，比如下拉菜单按钮、或者乱序的元素、导航等等，这些元素虽然是页面的组成部分但是没有意义。

什么是有意义？

- 对于搜索引擎用户是完整搜索结果
- 对于微博用户是时间线上的微博内容
- 对于淘宝用户是商品页面的展示

那么在 FCP 与 FMP 之间虽然开始绘制页面，但是整个页面是没有意义的，用户依然在焦虑等待，而且这个时候可能出现乱序的元素或者闪烁的元素，很影响体验，此时我们可能需要进行用户体验上的一些优化。

Skeleton 是一个好方法，Skeleton 现在已经很开始被广泛应用了，它的意义在于事先撑开即将渲染的元素，避免闪屏，同时提示用户这要渲染东西了，较少用户焦虑。

比如微博的 Skeleton 就做的很不错

![images](performance23.png)

在不同框架上都有相应的 Skeleton 实现

- React: antd 内置的骨架图 [Skeleton](https://ant.design/components/skeleton-cn/) 方案
- Vue：[vue-skeleton-webpack-plugin](https://github.com/lavas-project/vue-skeleton-webpack-plugin)

以 vue-cli 3 为例,我们可以直接在 vue.config.js 中配置

```
// 引入插件
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');


```

然后就是基本的 vue 文件编写了

### 六、TTI(可交互时间)

当有意义的内容渲染出来之后，用户会尝试与页面交互，这个时候页面并不是加载完毕了，而是看起来页面加载完毕了，事实上这个时候 JavaScript 脚本依然在密集得执行。

#### 6.1 Tree Shaking

Tree Shaking 虽然出现很早了，比如 js 基础库的事实标准打包工具 rollup 就是 Tree Shaking 的祖师爷，react 用 rollup 打包之后体积减少了 30%，这就是 Tree Shaking 的厉害之处。

Tree Shaking 的作用就是，通过程序流分析找出你代码中无用的代码并剔除，如果不用 Tree Shaking 那么很多代码虽然定义了但是永远都不会用到，也会进入用户的客户端执行，这无疑是性能的多杀手，Tree Shaking 依赖 es6 的 module 模块的静态特性，通过分析剔除无用代码

目前在 webpack4.x 版本之后在生产环境下已经默认支持 Tree Shaking 了，所以 Tree Shaking 可以称得上开箱即用的技术了，但是并不代表 Tree Shaking 真的会起作用，因为这里面还是有很多坑

坑 1：

坑 2：

#### 6.2 polyfill 动态加载

polyfill 是为了浏览器兼容性而生，是否需要 polyfill 应该有客户端的浏览器自己决定，而不是开发者决定，但是我们在很长一段时间里都是开发者将各种 ployfill 打包，其实很多情况下导致用户加载了根本没有必要的代码。

解决这个问题的方法很简单，直接引入`<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>`即可，而对于 Vue 开发者就更友好了，vue-cli 现在生成的模板就自带这个引用。

这个原理就是服务商通过识别不同浏览器的 User Agent，使得服务器能够识别客户使用的操作系统及版本、CPU 类型、浏览器及版本、浏览器渲染引擎、浏览器语言、浏览器插件等，然后根据这个信息判断是否需要加载 polyfill，开发者在流星器的 network 就可以查看 User Agent。

#### 6.3 动态加载 ES6 代码

既然 polyfill 能动态加载，那么 es5 和 es6+的代码能不能动态加载呢？是的，但是这样有什么意义呢？es6 会更快吗？

#### 6.4 路由级别拆解代码

我们在上文中已经通过 SplitChunksPlugin 将第三方库进行了抽离，但是在首屏加载过程中依然有很多冗余代码，比如我们的首页是个登录界面，那么其实用到的代码很简单

1. 框架的基础库例如 vue redux 等等
2. ui 框架的部分 form 组件和按钮组件等等
3. 一个简单的布局组件
4. 其它少量逻辑和样式

### 七、组件加载

### 八、组件懒加载

Code Spliting 不仅可以进行路由分割，甚至可以进行组件级别的代码分割，当然是使用方式也是大同小异，组件的级别的分割带来的好处是我们可以在页面的加载中只渲染部分必须的组件，而其余的组件可以按需加载。

就比如一个 Dropdown(下拉组件)，我们在渲染初始页面的时候下拉的

### 九、组件预加载

我们通过组件懒加载将页面的初始渲染的资源体积降低了下来，提高了加载性能，但是组件的性能又出现了问题，还是上一个 demo，我们把初始页面的 3.9m 的体积减少到了 1.7m，页面的加载是迅速了，但是组件的加载却变慢了。

原因是其余的 2m 资源的压力全部压在图表组件上(Echarts 的体积缘故)，因此当我们点击菜单加载图表的时候会出现 1-2s 的 loading 延迟，如下：

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
