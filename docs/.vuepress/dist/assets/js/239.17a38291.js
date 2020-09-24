(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{468:function(e,a,n){"use strict";n.r(a);var s=n(4),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"加载性能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#加载性能","aria-hidden":"true"}},[e._v("#")]),e._v(" 加载性能")]),e._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),n("p",[e._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),e._v(" "),n("h2",{attrs:{id:"内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[e._v("#")]),e._v(" 内容")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E9%A6%96%E5%B1%8F%E5%8A%A0%E8%BD%BD"}},[e._v("首屏加载")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E7%99%BD%E5%B1%8F%E7%9A%84%E5%AE%9A%E4%B9%89"}},[e._v("白屏的定义")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E7%99%BD%E5%B1%8F%E5%8A%A0%E8%BD%BD%E7%9A%84%E9%97%AE%E9%A2%98%E5%88%86%E6%9E%90"}},[e._v("白屏加载的问题分析")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E7%99%BD%E5%B1%8F%E7%9A%84%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96"}},[e._v("白屏的性能优化")])])]),e._v(" "),n("h3",{attrs:{id:"一、首屏加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、首屏加载","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、首屏加载")]),e._v(" "),n("p",[e._v("首屏加载是被讨论最多的话题,一方面 web 前端首屏的加载性能的确普遍较差,另一方面,首屏的加载速度至关重要,很多时候过长的白屏会导致用户还没有体验到网站功能的时候就流失了,首屏速度是用户留存的关键点。")]),e._v(" "),n("p",[n("strong",[e._v("“它在运行吗？”")]),e._v(" 这个疑问一直到用户看到页面第一个绘制的元素为止，这个时候用户才能确定自己的请求是有效的（而不是被墙了...）")]),e._v(" "),n("p",[n("strong",[e._v("“它有用吗？”")]),e._v(" 如果只绘制出无意义的各种乱序的元素，这对于用户是不可理解的，此时虽然页面开始加载了，但是对于用户没有任何价值，直到文字内容、交互按钮这些元素加载完毕，用户才能理解页面，这个时候用户会尝试与页面交互。")]),e._v(" "),n("p",[n("strong",[e._v("“它能使用了吗？”")]),e._v(" 直到用户成功与页面互动，这才算是首屏加载完毕了")]),e._v(" "),n("h3",{attrs:{id:"二、白屏的定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、白屏的定义","aria-hidden":"true"}},[e._v("#")]),e._v(" 二、白屏的定义")]),e._v(" "),n("p",[e._v("不管是我们如何优化性能，首屏必然是会出现白屏的，因为这是前端开发这项技术的特点决定的。")]),e._v(" "),n("p",[e._v("白屏时间是指："),n("strong",[e._v("用户从打开页面开始到页面开始有东西呈现为止，这过程占用时间就是白屏时间")])]),e._v(" "),n("ul",[n("li",[e._v("白屏时间 = "),n("code",[e._v("domloadng")]),e._v(" - "),n("code",[e._v("fetchStart")])])]),e._v(" "),n("h3",{attrs:{id:"三、白屏加载的问题分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、白屏加载的问题分析","aria-hidden":"true"}},[e._v("#")]),e._v(" 三、白屏加载的问题分析")]),e._v(" "),n("p",[e._v("在现代前端应用开发中，我们往往会用 webpack 等打包器进行打包，很多情况下我们不进行优化，就会出现很多何种巨大的 chunk，有的甚至在 5M 左右，这些 chunk 是加载速度的杀手。")]),e._v(" "),n("p",[e._v("浏览器通常都有并发请求的限制，以 Chrome 为例，它的并发请求就为 6 个，这导致我们必须在请求完前 6 个之后，才继续进行后续请求，这也影响我们资源的加载速度。")]),e._v(" "),n("p",[n("img",{attrs:{src:"performance40.png",alt:"images"}})]),e._v(" "),n("p",[e._v("当然了，网络、带宽这是自始至终都影响加载速度的因素，白屏也不例外")]),e._v(" "),n("h3",{attrs:{id:"四、白屏的性能优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、白屏的性能优化","aria-hidden":"true"}},[e._v("#")]),e._v(" 四、白屏的性能优化")]),e._v(" "),n("p",[e._v("我们先梳理下白屏时间内发生了什么：")]),e._v(" "),n("ol",[n("li",[e._v("回车按下，浏览器解析网址，进行 DNS 查询，查询返回 IP，通过 IP 发出 HTTP(S)请求")]),e._v(" "),n("li",[e._v("服务器返回 HTML，浏览器开始解析 HTML，此时触发请求 js 和 css 资源")]),e._v(" "),n("li",[e._v("js 被加载，开始执行 js，调用各种函数创建 DOM 并渲染到根节点，直到第一个可见元素产生")])]),e._v(" "),n("h4",{attrs:{id:"_4-1-loading-提示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-loading-提示","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.1 loading 提示")]),e._v(" "),n("p",[e._v("如果你用的是以 webpack 为基础的前端框架工程体系，那么你的"),n("code",[e._v("index.html")]),e._v("文件一定是这样的：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<div id="app"></div>\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("我们将打包好的整个代码都渲染到这个 root 根节点上，而我们如何渲染呢？当然是用 JavaScript 操作各种 dom 渲染,比如 react 肯定是调用各种"),n("code",[e._v("_React_._createElement_()")]),e._v(",这是很耗时的,在此期间虽然 html 被加载了,但是依然是白屏,这就存在操作空间,我们能不能在 js 执行期间先加入提示,增加用户体验呢?")]),e._v(" "),n("p",[e._v("是的,我们一般有一款 webpack 插件叫 "),n("code",[e._v("html-webpack-plugin")]),e._v(" ,在其中配置 html 就可以在文件中插入 loading 图。")]),e._v(" "),n("p",[e._v("webpack 配置：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const HtmlWebpackPlugin = require('html-webpack-plugin')\nconst loading = require('./render-loading')\n\nmodule.exports = {\n    entry: './src/index.js',\n    output: {\n        path: __dirname + '/dist',\n        filename: 'index_bundle.js'\n    },\n    plugins:[\n        new HtmlWebpackPlugin({\n            template: './src/index.html',\n            loading:loading\n        })\n    ]\n};\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br")])]),n("h4",{attrs:{id:"_4-2-伪-服务端渲染"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-伪-服务端渲染","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.2 (伪)服务端渲染")]),e._v(" "),n("p",[e._v("那么既然在 HTML 加载到 js 执行期间会有时间等待，那么为什么不直接服务端渲染呢？直接返回的 HTML 就是带完整 DOM 结构的，省得还得调用 js 执行各种创建 dom 的工作，不仅如此还对 SEO 友好")]),e._v(" "),n("p",[e._v("正是有这种需求 vue 和 react 都支持服务端渲染，而相关的框架"),n("code",[e._v("Nuxt.js")]),e._v("、"),n("code",[e._v("Next.js")]),e._v("也大行其道，当然对已经采用客户端渲染的应用这个成本太高了。")]),e._v(" "),n("h4",{attrs:{id:"_4-3-开启-http2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-开启-http2","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.3 开启 HTTP2")]),e._v(" "),n("p",[e._v("我们看到获取 html 之后我们需要自上而下解析，在解析到"),n("code",[e._v("script")]),e._v("相关标签的时候才能请求想关资源，而且由于浏览器并发限制，我们最多一次性请求 6 次，那么有没有办法破解这些困境呢？")]),e._v(" "),n("p",[e._v("http2 是非常好的解决办法，http2 本身的机制就跢快：")]),e._v(" "),n("ol",[n("li",[e._v("http2 采用二进制分帧的方式进行通信，而 http1.x 是用文本，http2 的效率更高")]),e._v(" "),n("li",[e._v("http2 可以进行多路利用，即跟同一个域名通信，仅需要一个 TCP 建立请求通道，请求与响应可以同时基于此通道进行双向通信，而 http1.x 每次请求需要建立 TCP，多次请求需要多次连接，还有并发限制，十分耗时")]),e._v(" "),n("li",[e._v("http2 可以头部压缩，能够节省消息头战胜的网络的流量，而 HTTP/1.x 每次请求，都会携带大量冗余头信息，消费了很多带宽资源")])]),e._v(" "),n("h4",{attrs:{id:"_4-4-开启浏览器缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-开启浏览器缓存","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.4 开启浏览器缓存")]),e._v(" "),n("p",[e._v("参考"),n("a",{attrs:{href:"https://km.xiaowuzi.info/cs/http-cache.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("web 缓存"),n("OutboundLink")],1)]),e._v(" "),n("h4",{attrs:{id:"_4-5-webpack-打包优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-webpack-打包优化","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.5 webpack 打包优化")]),e._v(" "),n("p",[e._v("通常情况下我们的 WebApp 是有我们的自身代码和第三方库组成的，我们自身的代码是会常常变动的，而第三方库除非有较大的版本升级，不然是不会变的，所以第三方库和我们的代码需要分开打包，我们可以给第三方库设置一个较长的强缓存时间，这样就不会频繁请求第三方库的代码了。")]),e._v(" "),n("p",[e._v("那么如何提取第三方库呢？在 webpack4.x 中 SplitChuncksPlugin 插件取代了 CommonsChunkPlugin 插件来进行公共模块抽取，我们可以对 SplitChunksPlugin 进行配置进行"),n("strong",[e._v("拆包")]),e._v("操作。")]),e._v(" "),n("p",[e._v("SplitChunksPlugins 配置示意如下：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('optimization:{\n    splitChunks: {\n        chunks: "initial",          // 代码块类型 必须三选一："initial" (初始化) | "all"(默认就是all) | "async" (动态加载)\n        minSize: 0,     // 最小尺寸，默认0\n        maxAsyncRequests: 1,    // 最大异步请求数，默认1\n        maxInitialRequests: 1,  // 最大初始化请求数，默认1\n        name: ()=>{},   // 名称，此选项可以接收function\n        cacheGroups:{       // 缓存组会继承splitChuncks的配置，但是test、priorty和reuseExistingChunk只能用于配置缓存组。\n            priority: "0",      // 缓存组优先级，即权重 false | object\n            vendor: {   // key 为entry中定义的入口名称\n                chunks: "initial",          // 必须三选一： "initial"(初始化s) | "all" | "async"(默认就是异步)\n                test: /react|lodash/,   // 正则规则验证，如果符合就提取chunk\n                name: \'vendor\',     // 要缓存的，分隔出来chunk名称\n                minSize: 0,\n                minChunks: 1,\n                enforce: true,\n                reuseExistingChunk: true // 可设置是否征用已用chunk 不再创建新的chunk\n            }\n        }\n    }\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://webpack.js.org/plugins/split-chunks-plugin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("split-chunks-plugin"),n("OutboundLink")],1),e._v("的配置项很多，可以去官网了解如何配置，我们现在只简单列举了一下配置元素。")]),e._v(" "),n("p",[e._v("如果我们想抽取第三方库可以这样简单配置")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("splitChunks:{\n    chunks: 'all',\n    minSize: 30000,\n    maxAsyncRequests: 5,\n    maxInitialRequests: 3,      // 最大初始化请求数\n    automaticNameDelimiter: '~',    // 打包分割符\n    name: true,\n    cacheGroups: {\n        vendor: {\n            name: \"vendor\",\n            test: /[\\\\/]node_modules[\\\\/]/,   // 打包第三方库\n            chunks: \"all\",\n            priority: 10    // 优先级\n        },\n        common: {   // 打包其余的公共代码\n            minChunks: 2,       // 引入两次及以上被打包\n            name: 'common',     // 分离包的名字\n            chunks: 'all',\n            priority: 5\n        }\n    }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br")])]),n("p",[e._v("这样似乎大功告成了？并没有，我们的配置有很大的问题：")]),e._v(" "),n("ol",[n("li",[e._v("我们粗暴得将第三方库一起打包可以吗？当然是有问题的，因为将第三方库一块打包，只要有一个库我们升级或者引入一个新库，这个 chunk 就会变动，那么这个 chunk 的变动性会很高，并不适合长期缓存，还有一点，我们要提高首页加载速度，第一要务是减少首页加载依赖的代码量，请问像 react vue reudx 这种整个应用的基础库我们是首页必须要依赖的之外，像 d3.js、three.js 这种特定页面才会出现的特殊库是没必要在首屏加载的，所以我们需要将应用基础库和特定的库进行分离。")]),e._v(" "),n("li",[e._v("当 chunk 在强缓存期，但服务器代码已经变动了，我们怎么通知客户端？上面我们的示意图已经看到了，当命中的资源在缓存期内，浏览器是直接读取缓存而不会向服务器确认的，如果这个时候服务器代码已经变动了，怎么办？这个时候我们不能将 index.html 缓存（反正 webpack 时代的 html 页面小到没有缓存的必要），需要每次引入 script 脚本的时候去服务器更新，并开启 hashchunk，它的作用是当 chunk 发生改变的时候会生成新的 hash 值，如果不变就不发生变动，这样当 index 加载后续 script 资源时如果 hashchunk 没变就会命中缓存，如果改变了那么会重新去服务端加载新资源。")])]),e._v(" "),n("p",[e._v("下面示意了如何将第三方库进行拆包，基础型的 react 等库与工具性的 lodash 和特定库 Echarts 进行拆分")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cacheGroups: {\n    reactBase:{\n        name: 'reactBase',\n        test: (module) => {\n            return /react|redux/.test(module.context);\n        },\n        chunks: 'initial',\n        priority:10,\n    },\n    utilBase:{\n        name: 'utilBase',\n        test: (module) =>{\n            return /rxjs| lodash/.test(module.context);\n        },\n        chunks: 'initial',\n        priority: 9,\n    },\n    uiBase:{\n        name: 'chartBase',\n        test: (module)=>{\n            return /echarts/.test(module.context);\n        },\n        chunks: 'initial',\n        priority: 8,\n    },\n    commons:{\n        name: 'common',\n        chunks: 'initial',\n        priority: 2,\n        minChunks:2\n    }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br")])]),n("p",[e._v("我们对 chunk 进行 hash 化，正如下图所示，我们变动 chunk2 相关的代码后，其它 chunk 都没有变化，只有 chunk2 的 hash 改变了")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("output:{\n    filename: mode === 'production' ? '[name].[chunkhash:8]':'[name].js',\n    chunkFilename: mode === 'production' ? '[id].[chunkhash:8].chunk.js':'[id].js',\n    path: getPath(config.outputPath)\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[n("img",{attrs:{src:"performance24.png",alt:"images"}})]),e._v(" "),n("p",[n("img",{attrs:{src:"performance25.png",alt:"images"}})]),e._v(" "),n("p",[e._v("我们通过 http 缓存+webpack hash 缓存策略使得前端项目充分利用了缓存的优势，但是 webpack 之所以需要传说中的"),n("strong",[e._v("webpack 配置工程师")]),e._v("是有原因的，因为 webpack 本身是玄学，还是以上图为例，如果你 chunk2 的相关代码去除了一个依赖或者引入了新的但是已经存在工程中依赖，会怎么样呢？")]),e._v(" "),n("p",[e._v("我们正常的的期望是，只有 chunk2 发生变化了，但是事实上是大量不相干的 chunk 的 hash 发生了变动，这就导致我们缓存策略失败了，下图是变更后的 hash，我们用红圈圈起来的都是 hash 变动的，而事实上我们只变动了 chunk2 相关的代码，为什么会这样呢？")]),e._v(" "),n("p",[n("img",{attrs:{src:"performance26.png",alt:"images"}})]),e._v(" "),n("p",[e._v("原因是 webpack 会给每个 chunk 搭上 id，这个 id 是自增的，比如 chunk 0 中的 id 为 0，一旦我们引入新的依赖，chunk 的自增被打乱，这个时候又因为 hashchunk 根据内容生成 hash，这就导致了 id 的变动致使 hashchunk 发生巨变，虽然代码内容根本没有变化。")]),e._v(" "),n("p",[n("img",{attrs:{src:"performance27.png",alt:"images"}})]),e._v(" "),n("p",[e._v("这个问题我们需要额外引入一个插件 HashedModuleIdsPlugin,他用非自增的方式进行 chunk id 的命名,可以解决这个问题,虽然 webpack 号称 0 配置了,但是这个常用功能没有内置,要等到下个版本了。")]),e._v(" "),n("p",[n("img",{attrs:{src:"performance28.png",alt:"images"}})]),e._v(" "),n("blockquote",[n("p",[e._v("webpack hash 缓存相关内容建议阅读此"),n("a",{attrs:{href:"https://github.com/pigcan/blog/issues/9",target:"_blank",rel:"noopener noreferrer"}},[e._v("文章"),n("OutboundLink")],1),e._v(" 作为拓展")])]),e._v(" "),n("h3",{attrs:{id:"五、fmp-首次有意义绘制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、fmp-首次有意义绘制","aria-hidden":"true"}},[e._v("#")]),e._v(" 五、FMP(首次有意义绘制)")]),e._v(" "),n("p",[e._v("在白屏结束之后，页面开始渲染，但是此时的页面还是只是出现个别无意义的元素，比如下拉菜单按钮、或者乱序的元素、导航等等，这些元素虽然是页面的组成部分但是没有意义。")]),e._v(" "),n("p",[e._v("什么是有意义？")]),e._v(" "),n("ul",[n("li",[e._v("对于搜索引擎用户是完整搜索结果")]),e._v(" "),n("li",[e._v("对于微博用户是时间线上的微博内容")]),e._v(" "),n("li",[e._v("对于淘宝用户是商品页面的展示")])]),e._v(" "),n("p",[e._v("那么在 FCP 与 FMP 之间虽然开始绘制页面，但是整个页面是没有意义的，用户依然在焦虑等待，而且这个时候可能出现乱序的元素或者闪烁的元素，很影响体验，此时我们可能需要进行用户体验上的一些优化。")]),e._v(" "),n("p",[e._v("Skeleton 是一个好方法，Skeleton 现在已经很开始被广泛应用了，它的意义在于事先撑开即将渲染的元素，避免闪屏，同时提示用户这要渲染东西了，较少用户焦虑。")]),e._v(" "),n("p",[e._v("比如微博的 Skeleton 就做的很不错")]),e._v(" "),n("p",[n("img",{attrs:{src:"performance23.png",alt:"images"}})]),e._v(" "),n("p",[e._v("在不同框架上都有相应的 Skeleton 实现")]),e._v(" "),n("ul",[n("li",[e._v("React: antd 内置的骨架图 "),n("a",{attrs:{href:"https://ant.design/components/skeleton-cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Skeleton"),n("OutboundLink")],1),e._v(" 方案")]),e._v(" "),n("li",[e._v("Vue："),n("a",{attrs:{href:"https://github.com/lavas-project/vue-skeleton-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-skeleton-webpack-plugin"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("以 vue-cli 3 为例,我们可以直接在 vue.config.js 中配置")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 引入插件\nconst SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');\n\nmodule.exports = {\n    // 额外配置参考官方文档\n    configureWebpack: (config) => {\n        config.plugins.push(new SkeletonWebpackPlugin({\n            webpackConfig:{\n                entry:{\n                    app: path.join(__dirname,'./src/Skeleton.js')\n                }\n            },\n            minimize: true,\n            quiet: true\n        }))\n    },\n    // 这个是让骨架屏的css分离，直接作为内联style处理到html里，提高载入速度\n    css:{\n        extract :true,\n        sourceMap: false,\n        modules: false\n    }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br")])]),n("p",[e._v("然后就是基本的 vue 文件编写了")]),e._v(" "),n("h3",{attrs:{id:"六、tti-可交互时间"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、tti-可交互时间","aria-hidden":"true"}},[e._v("#")]),e._v(" 六、TTI(可交互时间)")]),e._v(" "),n("p",[e._v("当有意义的内容渲染出来之后，用户会尝试与页面交互，这个时候页面并不是加载完毕了，而是看起来页面加载完毕了，事实上这个时候 JavaScript 脚本依然在密集得执行。")]),e._v(" "),n("blockquote",[n("p",[e._v("我们看到在页面已经基本呈现的情况下，依然有大量的脚本在执行")])]),e._v(" "),n("p",[n("img",{attrs:{src:"performance29.png",alt:"images"}})]),e._v(" "),n("p",[e._v("这个时候页面并不是可交互的，")]),e._v(" "),n("h4",{attrs:{id:"_6-1-tree-shaking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-tree-shaking","aria-hidden":"true"}},[e._v("#")]),e._v(" 6.1 Tree Shaking")]),e._v(" "),n("p",[e._v("Tree Shaking 虽然出现很早了，比如 js 基础库的事实标准打包工具 rollup 就是 Tree Shaking 的祖师爷，react 用 rollup 打包之后体积减少了 30%，这就是 Tree Shaking 的厉害之处。")]),e._v(" "),n("p",[e._v("Tree Shaking 的作用就是，通过程序流分析找出你代码中无用的代码并剔除，如果不用 Tree Shaking 那么很多代码虽然定义了但是永远都不会用到，也会进入用户的客户端执行，这无疑是性能的多杀手，Tree Shaking 依赖 es6 的 module 模块的静态特性，通过分析剔除无用代码")]),e._v(" "),n("p",[e._v("目前在 webpack4.x 版本之后在生产环境下已经默认支持 Tree Shaking 了，所以 Tree Shaking 可以称得上开箱即用的技术了，但是并不代表 Tree Shaking 真的会起作用，因为这里面还是有很多坑")]),e._v(" "),n("p",[e._v("坑 1：Babel 转译，我们已经提到了 Tree Shaking 的时候必须用 es6 的 module，如果用 common.js 那种 f\n动态 module，Tree Shaking 就失效了，但是 Babel 默认状态下是启用 common.js 的，所以需要我们手动关闭。\n坑 2：第三方库不可控，我们已经知道 Tree Shaking 的程序分析依赖 ESM，但是市面上很多库为了兼容性依然只暴露了 ES5 版本的代码，这导致 Tree Shaking 对很多第三方库是无效的，所以我们要尽量依赖有 ESM 的库，比如之前有一个 ESM 版的 lodash(lodash-es)，我们就可以这样引用了"),n("code",[e._v("import { dobounce} from 'lodash-es'")])]),e._v(" "),n("h4",{attrs:{id:"_6-2-polyfill-动态加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-polyfill-动态加载","aria-hidden":"true"}},[e._v("#")]),e._v(" 6.2 polyfill 动态加载")]),e._v(" "),n("p",[e._v("polyfill 是为了浏览器兼容性而生，是否需要 polyfill 应该有客户端的浏览器自己决定，而不是开发者决定，但是我们在很长一段时间里都是开发者将各种 ployfill 打包，其实很多情况下导致用户加载了根本没有必要的代码。")]),e._v(" "),n("p",[e._v("解决这个问题的方法很简单，直接引入"),n("code",[e._v('<script src="https://cdn.polyfill.io/v2/polyfill.min.js"><\/script>')]),e._v("即可，而对于 Vue 开发者就更友好了，vue-cli 现在生成的模板就自带这个引用。")]),e._v(" "),n("p",[e._v("这个原理就是服务商通过识别不同浏览器的 User Agent，使得服务器能够识别客户使用的操作系统及版本、CPU 类型、浏览器及版本、浏览器渲染引擎、浏览器语言、浏览器插件等，然后根据这个信息判断是否需要加载 polyfill，开发者在流星器的 network 就可以查看 User Agent。")]),e._v(" "),n("h4",{attrs:{id:"_6-3-动态加载-es6-代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-动态加载-es6-代码","aria-hidden":"true"}},[e._v("#")]),e._v(" 6.3 动态加载 ES6 代码")]),e._v(" "),n("p",[e._v("既然 polyfill 能动态加载，那么 es5 和 es6+的代码能不能动态加载呢？是的，但是这样有什么意义呢？es6 会更快吗？")]),e._v(" "),n("p",[e._v("我们得首先明确一点，一般情况下在新标准发布后，浏览器厂商会着重优化新标准的性能，而老的标准的性能优化会逐渐停滞，即使面向未来编程，es6 的性能也会往越来越快的方向发展。")]),e._v(" "),n("p",[e._v("其次，我们平时编写的代码可都 es6+，而发布的 es5 是经过 babel 或者 ts 默译的，在大多数情况下，经过工具转译的代码往往被比不上手写代码的性能，这个"),n("a",{attrs:{href:"http://incaseofstairs.com/six-speed/",target:"_blank",rel:"noopener noreferrer"}},[e._v("性能对比网站"),n("OutboundLink")],1),e._v("的显示也是如此，虽然 babel 等转译工具都在进步，但是仍然会看到转译后代码的性能下降，尤其是对 class 代码的转译，其性能下降是很明显的。")]),e._v(" "),n("p",[e._v("最后转译后的代码体积会出现代码膨胀的情况，转译器用了很多奇技淫巧将 es6 转为 es5 导致了代码量剧增，使用 es6 就代表了更小的体积。")]),e._v(" "),n("p",[e._v("那么如何动态加载呢？秘诀就是"),n("code",[e._v('<script type="module">')]),e._v("这个标签来判断浏览器是否支持 es6。")]),e._v(" "),n("p",[e._v("体积大小对比：")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Version")]),e._v(" "),n("th",[e._v("Size(minified)")]),e._v(" "),n("th",[e._v("Size(minified+gzipped)")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("ES2015+(main.js)")]),e._v(" "),n("td",[e._v("80K")]),e._v(" "),n("td",[e._v("21K")])]),e._v(" "),n("tr",[n("td",[e._v("ES5(main-legacy.js)")]),e._v(" "),n("td",[e._v("175K")]),e._v(" "),n("td",[e._v("43K")])])])]),e._v(" "),n("p",[e._v("执行时间对比：")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Version")]),e._v(" "),n("th",[e._v("Parse/eval time(individual runs)")]),e._v(" "),n("th",[e._v("Parse/eval time(avg)")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("ES2015+(main.js)")]),e._v(" "),n("td",[e._v("184ms,164ms,166ms")]),e._v(" "),n("td",[e._v("172ms")])]),e._v(" "),n("tr",[n("td",[e._v("ES5(main-legacy.js)")]),e._v(" "),n("td",[e._v("389ms,351ms,360ms")]),e._v(" "),n("td",[e._v("367ms")])])])]),e._v(" "),n("p",[e._v("双方对比的结果是,es6 的代码体积在小了一倍的同时,性能高出一倍.")]),e._v(" "),n("h4",{attrs:{id:"_6-4-路由级别拆解代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-路由级别拆解代码","aria-hidden":"true"}},[e._v("#")]),e._v(" 6.4 路由级别拆解代码")]),e._v(" "),n("p",[e._v("我们在上文中已经通过 SplitChunksPlugin 将第三方库进行了抽离，但是在首屏加载过程中依然有很多冗余代码，比如我们的首页是个登录界面，那么其实用到的代码很简单")]),e._v(" "),n("ol",[n("li",[e._v("框架的基础库例如 vue redux 等等")]),e._v(" "),n("li",[e._v("ui 框架的部分 form 组件和按钮组件等等")]),e._v(" "),n("li",[e._v("一个简单的布局组件")]),e._v(" "),n("li",[e._v("其它少量逻辑和样式")])]),e._v(" "),n("p",[e._v("登录界面的代码很少的，为什么不只加载登录界面的代码呢？")]),e._v(" "),n("p",[e._v("这就需要我们进行对代码在路由级别的拆分，除了基础的框架和 UI 库之外，我们只需要加载当前页面的代码即可，这就有得用到 Code Splitting 技术进行代码分割，我们要做的其实很简单")]),e._v(" "),n("p",[e._v("我们得先给 babel 设置 plugin-syntax-dynamic-import 这个动态 import 的插件，然后就可以就函数内使用 import 了")]),e._v(" "),n("p",[e._v("对于 Vue 你可以这样引入路由")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export default new Router({\n    routes:[\n        {\n            path:'/',\n            name:'Home',\n            component:Home\n        },\n        {\n            path:'/login',\n            name:'login',\n            component:()=>import('@components/login')\n        }\n    ]\n})\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br")])]),n("p",[e._v("你的登录页面会被单独打包")]),e._v(" "),n("p",[e._v("对于 react，其内置的"),n("code",[e._v("React.lazy()")]),e._v("就可以动态加载路由和组件，效果与 vue 大同小异，当然"),n("code",[e._v("lazy()")]),e._v("目前还没有支持服务端渲染，如果你想在服务端渲染使用，可以用"),n("a",{attrs:{href:"https://github.com/jamiebuilds/react-loadable",target:"_blank",rel:"noopener noreferrer"}},[e._v("React Loadable"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"七、组件加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#七、组件加载","aria-hidden":"true"}},[e._v("#")]),e._v(" 七、组件加载")]),e._v(" "),n("p",[e._v("路由其实是一个大组件，很多时候人们忽略了路由跳转之间的加载优化，更多的时候我们的精力都留在首屏加载之上，但是路由跳转间的加载同样重要，如果加载过慢同样影响用户体验。")]),e._v(" "),n("p",[e._v("我们不可忽视的是在很多时候，首屏的加载反而比路由跳转要快，也更容易优化。")]),e._v(" "),n("p",[e._v("比如石墨文档的首页是这样的:")]),e._v(" "),n("p",[n("img",{attrs:{src:"performance30.png",alt:"images"}})]),e._v(" "),n("p",[e._v("一个非常常见的官网首页，代码量也不会太多，处理好第三方资源的加载后，是很容易就达到性能要求的页面类型。")]),e._v(" "),n("p",[e._v("加载过程不过几秒钟，而当我跳转到真正的工作界面时，这是个类似 word 的在线编辑器")]),e._v(" "),n("p",[n("img",{attrs:{src:"performance31.png",alt:"images"}})]),e._v(" "),n("p",[e._v("我用 Lighthouse 的测试结果是,可交互时间高达 17.2s")]),e._v(" "),n("p",[n("img",{attrs:{src:"performance32.png",alt:"images"}})]),e._v(" "),n("p",[e._v("这并不是石墨做得不够好，而是对于这种应用网站，相比于首屏，工作页面的跳转加载优化难度更大，因为其工作页面的代码量远远大于一个官网的代码量和复杂度")]),e._v(" "),n("p",[e._v("我们看到在加载过程中有超过 6000ms 再进行 JavaScript 的解析和执行")]),e._v(" "),n("p",[n("img",{attrs:{src:"performance33.png",alt:"images"}})]),e._v(" "),n("h3",{attrs:{id:"八、组件懒加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#八、组件懒加载","aria-hidden":"true"}},[e._v("#")]),e._v(" 八、组件懒加载")]),e._v(" "),n("p",[e._v("Code Spliting 不仅可以进行路由分割，甚至可以进行组件级别的代码分割，当然是使用方式也是大同小异，组件的级别的分割带来的好处是我们可以在页面的加载中只渲染部分必须的组件，而其余的组件可以按需加载。")]),e._v(" "),n("p",[e._v("就比如一个 Dropdown(下拉组件)，我们在渲染初始页面的时候下拉的 Menu(菜单组件)是没必要渲染的，因为只有点击了 Dropdown 之后 Menu 才有必要渲染出来。")]),e._v(" "),n("p",[e._v("路由分割 vs 组件分割")]),e._v(" "),n("p",[n("img",{attrs:{src:"performance34.png",alt:"images"}})]),e._v(" "),n("p",[e._v("我们可以一个 demo 为例来分析一下组件级别分割的方法与技巧")]),e._v(" "),n("p",[e._v("我们假设一个场景，比如我们在做一个打卡应用，有一个需求是我们点击下拉菜单选择相关的习惯，查看近一周的打卡情况")]),e._v(" "),n("p",[e._v("我们的 demo 是这样子：")]),e._v(" "),n("p",[n("img",{attrs:{src:"performance35.png",alt:"images"}})]),e._v(" "),n("p",[e._v("我们先对比一下有组件分割和无组件分割的资源加载情况（开发环境下无压缩）")]),e._v(" "),n("p",[e._v("无组件分割，我们看到有一个非常大的 chunk，因为这个组件除了我们的代码外，还包含了 antrd 组件和 Echarts 图表以及 React 框架部分代码")]),e._v(" "),n("p",[n("img",{attrs:{src:"performance36.png",alt:"images"}})]),e._v(" "),n("p",[e._v("组件分割后，初始页面体积下降明显，路由间跳转的初始加载体积变小意味着更快的加载速度")]),e._v(" "),n("p",[n("img",{attrs:{src:"performance37.png",alt:"images"}})]),e._v(" "),n("p",[e._v("其实组件分割的方法跟路由分割差不多，也是通过 lazy+Suspense 的方法进行组件懒加载")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 动态加载图表组件\nconst Chart = lazy(()=>import('./charts'))\n\n// 包含着图表的 model 组件\nconst ModalEchart = (props) =>(\n    <Modal\n    title = \"Basic Modal\"\n    visible = {props.visible}\n    onOk = {props.handleOk}\n    onCancel = {props.handleCancel}\n    >\n        <Chart />\n   </Modal>\n)\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br")])]),n("h3",{attrs:{id:"九、组件预加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#九、组件预加载","aria-hidden":"true"}},[e._v("#")]),e._v(" 九、组件预加载")]),e._v(" "),n("p",[e._v("我们通过组件懒加载将页面的初始渲染的资源体积降低了下来，提高了加载性能，但是组件的性能又出现了问题，还是上一个 demo，我们把初始页面的 3.9m 的体积减少到了 1.7m，页面的加载是迅速了，但是组件的加载却变慢了。")]),e._v(" "),n("p",[e._v("原因是其余的 2m 资源的压力全部压在图表组件上(Echarts 的体积缘故)，因此当我们点击菜单加载图表的时候会出现 1-2s 的 loading 延迟，如下：")]),e._v(" "),n("p",[n("img",{attrs:{src:"performance38.png",alt:"images"}})]),e._v(" "),n("p",[e._v("我们能不能提前把图表加载进来，避免图表渲染中加载时间过长的问题？这种提前加载的方法就是组件的预加载")]),e._v(" "),n("p",[e._v("原理也很简单，就是在用户的鼠标还处于 hover 状态的时候就开始触发图表资源的加载，通常情况下当用户点击结束之后，加载也基本完成，这个时候图表会很顺利地渲染出来，不会出现延迟")]),e._v(" "),n("h4",{attrs:{id:"keep-alive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive","aria-hidden":"true"}},[e._v("#")]),e._v(" keep-alive")]),e._v(" "),n("p",[e._v("对于使用 vue 的开发者 keep-alive 这个 API 应该是最熟悉不过了，keep-alive 的作用是在页面已经跳转后依然不销毁组件，保存组件对应的实例在内存中，当此页面再次需要渲染的时候就可以利用已经缓存的组件实例了。")]),e._v(" "),n("p",[e._v("如果大量实例不销毁保存在内存中,那么这个 API 存在内存泄漏的风险,所以要注意调用 deactivated 销毁。")]),e._v(" "),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000016458627",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端阶段性总结（二）：页面渲染机制与性能优化"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/N_6faORvlDSxFQMh1o2naA",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端性能优化之白屏时间"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5a966bd16fb9a0635172a50a",target:"_blank",rel:"noopener noreferrer"}},[e._v("2018 前端性能优化清单"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5a67e49df265da3e377c2d59",target:"_blank",rel:"noopener noreferrer"}},[e._v("【译】2018 前端性能优化清单 —— 第一部分"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5c4418006fb9a049c043545e",target:"_blank",rel:"noopener noreferrer"}},[e._v("[译] 2019 前端性能优化年度总结 — 第一部分"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/d9J-_aF9K8QTUtemol-EfQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("2020 前端性能优化清单（一）"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/7NJv21Dz7eGFFt-c3qitWw",target:"_blank",rel:"noopener noreferrer"}},[e._v("2020 前端性能优化清单（二）"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/J1hMFK9LfzvTNvEtyOwE-Q",target:"_blank",rel:"noopener noreferrer"}},[e._v("2020 前端性能优化清单（三）"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/MJNaI6HmClodAsGgI26EMA",target:"_blank",rel:"noopener noreferrer"}},[e._v("2020 前端性能优化清单（四）"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/jcDuMrj8lKugAvSlKqERfQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("2020 前端性能优化清单（五）"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/rPnRfsIlGwAZIm2yNAdUzg",target:"_blank",rel:"noopener noreferrer"}},[e._v("2020 前端性能优化清单（六）"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://www.cxymsg.com/guide/load.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端性能优化-加载篇"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/n1rELZ4y2htKCuAldlqS9A",target:"_blank",rel:"noopener noreferrer"}},[e._v("我们是如何将网站加载时间减少 24%的？"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5b6fa8c86fb9a0099910ac91",target:"_blank",rel:"noopener noreferrer"}},[e._v("网站性能优化实战——从 12.67s 到 1.06s 的故事"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/DdbaiuZd4RbqUod0jhn_vg",target:"_blank",rel:"noopener noreferrer"}},[e._v("你必须懂的前端性能优化"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5c76843af265da2ddd4a6dd0",target:"_blank",rel:"noopener noreferrer"}},[e._v("我是如何让公司后台管理系统焕然一新的(上) -性能优化"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5c7b4761f265da2db2795036",target:"_blank",rel:"noopener noreferrer"}},[e._v("我是如何让公司后台管理系统焕然一新的（下）-封装组件"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000019499007",target:"_blank",rel:"noopener noreferrer"}},[e._v("提升 90%加载速度——vuecli 下的首屏性能优化"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/Hcp60sfDOyXcP9TM0CX2Bw",target:"_blank",rel:"noopener noreferrer"}},[e._v("【第 843 期】前端性能优化"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://time.geekbang.org/column/article/143889",target:"_blank",rel:"noopener noreferrer"}},[e._v("25 | 页面性能：如何系统地优化页面？"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"联系作者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[e._v("#")]),e._v(" 联系作者")]),e._v(" "),n("div",{attrs:{align:"center"}},[n("p",[e._v("\n        平凡世界，贵在坚持。\n    ")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=t.exports}}]);