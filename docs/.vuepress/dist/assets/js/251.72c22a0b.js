(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{479:function(r,t,e){"use strict";e.r(t);var a=e(4),s=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"vue-服务端渲染（ssr）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-服务端渲染（ssr）","aria-hidden":"true"}},[r._v("#")]),r._v(" Vue 服务端渲染（SSR）")]),r._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[r._v("#")]),r._v(" 前言")]),r._v(" "),e("blockquote",[e("p",[r._v("Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记“激活”为客户端上完全可交互的应用程序。")]),r._v(" "),e("p",[r._v("即：SSR 大致意思是 vue 在客户端将标签渲染成的整个 html 片段的工作在服务端完成，服务端形成的 html 片段直接返回给客户端这个过程就叫做服务端渲染。")])]),r._v(" "),e("h2",{attrs:{id:"内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[r._v("#")]),r._v(" 内容")]),r._v(" "),e("ul",[e("li",[r._v("后端渲染、客户端渲染、同构应用")]),r._v(" "),e("li",[r._v("CSR 和 SSR 的区别")]),r._v(" "),e("li",[r._v("ssr 的优缺点")])]),r._v(" "),e("h3",{attrs:{id:"一、后端渲染、客户端渲染、同构应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、后端渲染、客户端渲染、同构应用","aria-hidden":"true"}},[r._v("#")]),r._v(" 一、后端渲染、客户端渲染、同构应用")]),r._v(" "),e("ul",[e("li",[e("strong",[r._v("后端渲染")]),r._v("：服务器直接生成 HTML 文档并返回给浏览器，但页面交互能力有限。适用于任何后端语言：PHP、Java、Python、GO 等。")]),r._v(" "),e("li",[e("strong",[r._v("客户端渲染")]),r._v("：页面初始加载 HTML 文档中无内容，需要下执行 JS 文件，由浏览器动态生成页面，并通过 JS 进行页面交互事件与状态管理。")]),r._v(" "),e("li",[e("strong",[r._v("同构")]),r._v("：isomorphic/universal，基于 react、vue 框架，客户端渲染和服务器端渲染的结合，在服务器端执行一次，用于实现服务器端渲染（首屏直出），在客户端再执行一次，用于接管页面交互，核心解决 SEO 和首屏渲染慢的问题。")])]),r._v(" "),e("h3",{attrs:{id:"二、csr-和-ssr-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、csr-和-ssr-的区别","aria-hidden":"true"}},[r._v("#")]),r._v(" 二、CSR 和 SSR 的区别")]),r._v(" "),e("ul",[e("li",[e("strong",[r._v("客户端渲染的 TTFP 时间比较长，一般起码需要 3 个 HTTP 请求周期：")]),r._v(" 加载 HTML 文档-> 加载 JS 文件->API 请求数据->根据数据渲染页面，也就是初始化页面会出现白屏，性能上通过 Node 直出，将传统的三次串行 http 请求简化成一次 http 请求，降低首屏渲染时间")]),r._v(" "),e("li",[e("strong",[r._v("单页应用的 SEO 能力几乎为零")]),r._v("，SPA 首次加载的 HTML 文档没有内容，而目前大多数搜索引擎主要识别的内容还是 HTML，对 JavaScript 文件内容的识别都还比较弱，所以如果公司对 SEO 有需求，那 SPA 就不太适合了")])]),r._v(" "),e("p",[r._v("不过对于使用 SSR 方式渲染出的 HTML 页面来说，用户是可以在这些操作（指的是下载 React、构建虚拟 DOM、绑定事件）完成之前就能看到页面。")]),r._v(" "),e("p",[r._v("再反观使用 CSR 方式渲染出的 HTML 页面，你必须等到上面的这些操作（指的是下载 React、构建虚拟 DOM、绑定事件）都完成，virtual-dom 转换成（浏览器）页面上的真实 dom 之后，用户才能看到页面。")]),r._v(" "),e("p",[r._v("CSR 和 SSR 有几个共同点")]),r._v(" "),e("ul",[e("li",[r._v("都需要下载 React 的")]),r._v(" "),e("li",[r._v("都需要经历虚拟 DOM 构建过程")]),r._v(" "),e("li",[r._v("都需要（给页面元素）绑定事件来增强页面的可交互性")])]),r._v(" "),e("h3",{attrs:{id:"三、ssr-的优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、ssr-的优缺点","aria-hidden":"true"}},[r._v("#")]),r._v(" 三、ssr 的优缺点")]),r._v(" "),e("ul",[e("li",[r._v("服务端渲染的优点")]),r._v(" "),e("li",[r._v("服务端渲染的缺点")])]),r._v(" "),e("h4",{attrs:{id:"_1-1-服务端渲染的优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-服务端渲染的优点","aria-hidden":"true"}},[r._v("#")]),r._v(" 1.1 服务端渲染的优点")]),r._v(" "),e("ul",[e("li",[r._v("更好的 SEO：因为 SPA 页面的内容是通过 Ajax 获取，而搜索引擎爬取工具并不会等待 Ajax 异步完成后再抓取页面内容，所以在 SPA 中是抓取不到页面通过 Ajax 获取到的内容；而 SSR 是直接由服务端返回已经渲染好的页面（数据已经包含在页面中），所以搜索引擎爬取工具可以抓取渲染好的页面；")]),r._v(" "),e("li",[r._v("更快的内容到达时间（首屏加载更快）：SPA 会等待所有 Vue 编译后的 js 文件都下载完成后，才开始进行页面的渲染，文件下载等需要一定的时间等，所以首屏渲染需要一定的时间；SSR 直接由服务端渲染好页面直接返回显示，无需等待下载 js 文件及再去渲染等，所以 SSR 有更快的内容到达时间；")])]),r._v(" "),e("h4",{attrs:{id:"_1-2-服务端渲染的缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-服务端渲染的缺点","aria-hidden":"true"}},[r._v("#")]),r._v(" 1.2 服务端渲染的缺点")]),r._v(" "),e("ul",[e("li",[r._v("更多的开发条件限制：例如服务端渲染只支持 beforCreate 和 created 两个钩子函数，这会导致一些外部扩展库需要特殊处理，才能在服务端渲染应用程序中运行；并且与可以部署在任何静态文件服务器上的完全静态单页面应用程序 SPA 不同，服务端渲染应用程序，需要处于 Node.js server 运行环境；")]),r._v(" "),e("li",[r._v("更多的服务器负载：在 Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的 server 更加大量占用 CPU 资源 (CPU-intensive - CPU 密集)，因此如果你预料在高流量环境 ( high traffic ) 下使用，请准备相应的服务器负载，并明智地采用缓存策略。")])]),r._v(" "),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[r._v("#")]),r._v(" 参考资料")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/senntyou/blogs/blob/master/web-extend/5.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("细说后端模板渲染、客户端渲染、node 中间层、服务器端渲染（ssr）"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5cb6c36e6fb9a068af37aa35",target:"_blank",rel:"noopener noreferrer"}},[r._v("Vue SSR 踩坑之旅"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/amandakelake/blog/issues/60",target:"_blank",rel:"noopener noreferrer"}},[r._v("后端渲染、客户端渲染(CSR)、同构应用(SSR)"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/uf_joal0F2csGggfqaYETg",target:"_blank",rel:"noopener noreferrer"}},[r._v("从头开始，彻底理解服务端渲染原理(8 千字汇总长文)"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/EowqAuFQ9-0xOQIxqMvrog",target:"_blank",rel:"noopener noreferrer"}},[r._v("花椒前端基于 Docker 的 SSR 持续开发集成环境实践"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5bc7ea48e51d450e46289eab",target:"_blank",rel:"noopener noreferrer"}},[r._v("React 中同构（SSR）原理脉络梳理"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/vVuP425SrH9m7pk46jnzmw",target:"_blank",rel:"noopener noreferrer"}},[r._v("Vue 预渲染插件 prerender-spa-plugin 使用全记录"),e("OutboundLink")],1)])]),r._v(" "),e("h2",{attrs:{id:"联系作者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[r._v("#")]),r._v(" 联系作者")]),r._v(" "),e("div",{attrs:{align:"center"}},[e("p",[r._v("\n        平凡世界，贵在坚持。\n    ")]),r._v(" "),e("img",{attrs:{src:r.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);t.default=s.exports}}]);