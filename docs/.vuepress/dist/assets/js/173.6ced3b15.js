(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{369:function(t,a,r){"use strict";r.r(a);var e=r(4),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"vue-虚拟-dom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-虚拟-dom","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue 虚拟 DOM")]),t._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),r("p",[t._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),t._v(" "),r("h2",{attrs:{id:"内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),r("ul",[r("li",[t._v("虚拟 DOM 的实现原理")]),t._v(" "),r("li",[t._v("虚拟 DOM 的优缺点")])]),t._v(" "),r("h3",{attrs:{id:"一、虚拟-dom-的实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、虚拟-dom-的实现原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、虚拟 DOM 的实现原理")]),t._v(" "),r("p",[t._v("虚拟 DOM 的实现原理主要包括以下 3 部分：")]),t._v(" "),r("ul",[r("li",[t._v("用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象；")]),t._v(" "),r("li",[t._v("diff 算法 — 比较两棵虚拟 DOM 树的差异；")]),t._v(" "),r("li",[t._v("pach 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。")])]),t._v(" "),r("h4",{attrs:{id:"_1-1-模拟真实-dom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-模拟真实-dom","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 模拟真实 DOM")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("h4",{attrs:{id:"_1-2-diff-算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-diff-算法","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2 diff 算法")]),t._v(" "),r("p",[t._v("参考"),r("a",{attrs:{href:"https://km.xiaowuzi.info/js/vue-diff.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("diff 算法"),r("OutboundLink")],1)]),t._v(" "),r("h4",{attrs:{id:"_1-3-pach-算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-pach-算法","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.3 pach 算法")]),t._v(" "),r("h3",{attrs:{id:"虚拟-dom-的优缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-的优缺点","aria-hidden":"true"}},[t._v("#")]),t._v(" 虚拟 DOM 的优缺点")]),t._v(" "),r("ul",[r("li",[t._v("优点")]),t._v(" "),r("li",[t._v("缺点")])]),t._v(" "),r("h4",{attrs:{id:"优点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优点","aria-hidden":"true"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("保证性能下限")]),t._v("：框架的虚拟 DOM 需要甜酸任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；")]),t._v(" "),r("li",[r("strong",[t._v("无需手动操作 DOM")]),t._v("：我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；")]),t._v(" "),r("li",[r("strong",[t._v("跨平台")]),t._v("：虚拟 DOM 本质上是 JavaScript 对象，而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。")])]),t._v(" "),r("h4",{attrs:{id:"缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缺点","aria-hidden":"true"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("无法进行极致优化")]),t._v("：虽然虽然虚拟 DOM+合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。")])]),t._v(" "),r("h3",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/livoras/blog/issues/13",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何实现一个 Virtual DOM 算法"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/EeN7E8uQS4R_JJloPX8fCQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("揭秘 Vue 中的 Virtual Dom"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/oAlVmZ4Hbt2VhOwFEkNEhw",target:"_blank",rel:"noopener noreferrer"}},[t._v("虚拟 DOM 到底是什么？"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://juejin.im/post/5d36cc575188257aea108a74",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入剖析：Vue 核心之虚拟 DOM"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.404forest.com/2019/03/07/modern-web-development-tech-analysis-virtual-dom/",target:"_blank",rel:"noopener noreferrer"}},[t._v("现代前端科技解析 —— Virtual DOM"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"联系作者"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[t._v("#")]),t._v(" 联系作者")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("p",[t._v("\n        平凡世界，贵在坚持。\n    ")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=s.exports}}]);