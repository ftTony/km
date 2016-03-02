(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{351:function(e,r,a){"use strict";a.r(r);var t=a(4),v=Object(t.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vue-源码分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-源码分析","aria-hidden":"true"}},[e._v("#")]),e._v(" vue 源码分析")]),e._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),a("p",[e._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),e._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[e._v("#")]),e._v(" 内容")]),e._v(" "),a("ul",[a("li",[e._v("源码目录设计")])]),e._v(" "),a("h3",{attrs:{id:"一、源码目录设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、源码目录设计","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、源码目录设计")]),e._v(" "),a("p",[e._v("Vue.js 的源码都在 src 目录下，其目录结构如下。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("src\n├── compiler        # 编译相关\n├── core            # 核心代码\n├── platforms       # 不同平台的支持\n├── server          # 服务端渲染\n├── sfc             # .vue 文件解析\n├── shared          # 共享代码\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("ul",[a("li",[e._v("compiler")]),e._v(" "),a("li",[e._v("core")]),e._v(" "),a("li",[e._v("platform")]),e._v(" "),a("li",[e._v("server")]),e._v(" "),a("li",[e._v("sfc")]),e._v(" "),a("li",[e._v("shared")])]),e._v(" "),a("h4",{attrs:{id:"_1-1-compiler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-compiler","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.1 compiler")]),e._v(" "),a("p",[a("code",[e._v("compiler")]),e._v("目录包含"),a("code",[e._v("Vue.js")]),e._v("所有编译相关的代码。它包括把模板解析成ast语法树、ast语法树优化，代码生成等功能。")]),e._v(" "),a("p",[e._v("编译的工作可以在构建时做（借助"),a("code",[e._v("webpack")]),e._v("、"),a("code",[e._v("vue-loader")]),e._v("等辅助插件）；也可以在运行时做，使用包含构建功能的"),a("code",[e._v("vue.js")]),e._v("。显然，编译是一项耗性能的工作，所以更推荐前者——离线编译。")]),e._v(" "),a("h4",{attrs:{id:"_1-2-core"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-core","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.2 core")]),e._v(" "),a("p",[a("code",[e._v("core")]),e._v("目录包含了"),a("code",[e._v("Vue.js")]),e._v("的核心代码，包括内置组件、全局API封装，Vue实例化、观察者、虚拟DOM、工具函数等等。")]),e._v(" "),a("p",[e._v("这里的代码可谓是 Vue.js 的灵魂，也是我们之后需要重点分析的地方")]),e._v(" "),a("h4",{attrs:{id:"_1-3-platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-platform","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.3 platform")]),e._v(" "),a("p",[a("code",[e._v("Vue.js")]),e._v("是一个跨平台的"),a("code",[e._v("MVVM")]),e._v("框架，它可以跑在"),a("code",[e._v("web")]),e._v("上，也可以配合"),a("code",[e._v("weex")]),e._v("跑在"),a("code",[e._v("native")]),e._v("客户端上。"),a("code",[e._v("platform")]),e._v("是 "),a("code",[e._v("Vue.js")]),e._v("的入口，2 个目录代表 2 个主要入口，分别打包成运行在"),a("code",[e._v("web")]),e._v("上和"),a("code",[e._v("weex")]),e._v("上的"),a("code",[e._v("Vue.js")]),e._v("。")]),e._v(" "),a("p",[e._v("我们会重点分析"),a("code",[e._v("web")]),e._v("入口打包后的"),a("code",[e._v("Vue.js")]),e._v("，对于"),a("code",[e._v("weex")]),e._v("入口打包的"),a("code",[e._v("Vue.js")]),e._v("，感兴趣的同学可以自行研究。")]),e._v(" "),a("h4",{attrs:{id:"_1-4-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-server","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.4 server")]),e._v(" "),a("p",[a("code",[e._v("Vue.js 2.0")]),e._v("支持了服务端渲染，所有服务端渲染相关的逻辑都在这个目录下。注意：这部分代码是跑在服务端的"),a("code",[e._v("Node.js")]),e._v("，不要和跑在浏览器端的"),a("code",[e._v("Vue.js")]),e._v("混为一谈。")]),e._v(" "),a("p",[e._v("服务端渲染主要的工作是把组件渲染为服务器端的"),a("code",[e._v("HTML")]),e._v('字符串，将它们直接发送到浏览器，最后将静态标记"混合"为客户端上完全交互的应用程序。')]),e._v(" "),a("h4",{attrs:{id:"_1-5-sfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-sfc","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.5 sfc")]),e._v(" "),a("p",[e._v("通常我们开发"),a("code",[e._v("Vue.js")]),e._v("都会借助"),a("code",[e._v("webpack")]),e._v("构建， 然后通过"),a("code",[e._v(".vue")]),e._v("单文件来编写组件。")]),e._v(" "),a("p",[e._v("这个目录下的代码逻辑会把"),a("code",[e._v(".vue")]),e._v("文件内容解析成一个"),a("code",[e._v("JavaScript")]),e._v("的对象。")]),e._v(" "),a("h4",{attrs:{id:"_1-6-shared"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-shared","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.6 shared")]),e._v(" "),a("p",[a("code",[e._v("Vue.js")]),e._v("会定义一些工具方法，这里定义的工具方法都是会被浏览器端的"),a("code",[e._v("Vue.js")]),e._v("和服务端的"),a("code",[e._v("Vue.js")]),e._v("所共享的。")]),e._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/muwoo/blogs",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue 源码分析"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://hcysun.me/vue-design/art/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue 技术内幕"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://ustbhuangyi.github.io/vue-analysis/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js 技术揭秘"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/answershuto/learnVue",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js 源码解析"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/dirkhe1051931999/hjBlog/tree/master/blog-vue-sourcecode-study",target:"_blank",rel:"noopener noreferrer"}},[e._v("你想要的 vue 源码分析"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5ce5565d6fb9a07ed2244513",target:"_blank",rel:"noopener noreferrer"}},[e._v("学习 Vue 源码的必要知识储备"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[e._v("#")]),e._v(" 联系作者")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("p",[e._v("\n        平凡世界，贵在坚持。\n    ")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);r.default=v.exports}}]);