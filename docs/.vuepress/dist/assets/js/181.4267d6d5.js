(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{357:function(t,e,a){"use strict";a.r(e);var r=a(4),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuex-学习及原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex-学习及原理","aria-hidden":"true"}},[t._v("#")]),t._v(" vuex 学习及原理")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),t._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%B8%80%E3%80%81vuex-%E4%BB%8B%E7%BB%8D"}},[t._v("Vuex 介绍")])]),t._v(" "),a("li",[t._v("Vuex 的原理是什么")]),t._v(" "),a("li",[t._v("什么时候使用 Vuex")]),t._v(" "),a("li",[t._v("如何使用 Vuex")])]),t._v(" "),a("h3",{attrs:{id:"一、vuex-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、vuex-介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、Vuex 介绍")]),t._v(" "),a("p",[t._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。")]),t._v(" "),a("h3",{attrs:{id:"二、vuex-的原理是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、vuex-的原理是什么","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、Vuex 的原理是什么")]),t._v(" "),a("p",[a("img",{attrs:{src:"vuex.png",alt:"images"}})]),t._v(" "),a("p",[t._v("Vuex 实现了一个单向数据流，在全局拥有一个 State 存放数据，当组件要更改 State 中的数据时，必须通过 Mutation 进行，Mutation 同时提供了订阅者模式供外部插件调用")]),t._v(" "),a("p",[t._v("vuex 主要包括以下几个模块：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("State")]),t._v("：定义了应用状态的数据结构，可以在这里设置默认的初始状态。")]),t._v(" "),a("li",[a("code",[t._v("Getter")]),t._v("：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。")]),t._v(" "),a("li",[a("code",[t._v("Mutation")]),t._v("：是唯一更改 store 中状态的方法，且必须是同步函数。")]),t._v(" "),a("li",[a("code",[t._v("Action")]),t._v("：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。")]),t._v(" "),a("li",[a("code",[t._v("Module")]),t._v("：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。")])]),t._v(" "),a("h3",{attrs:{id:"三、什么时候使用-vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、什么时候使用-vuex","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、什么时候使用 Vuex")]),t._v(" "),a("p",[t._v("虽然 Vuex 可以帮助我们管理共享状态，但也附带了更多的概念和框架。这需要对短期和长期效益进行权衡。")]),t._v(" "),a("p",[t._v("如果您的应用够简单，您最好不要使用 Vuex,因为使用 Vuex 可能是繁琐冗余的。一个简单的"),a("code",[t._v("global event bus")]),t._v("就跢您所需了。但是，"),a("strong",[t._v("如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。")])]),t._v(" "),a("h3",{attrs:{id:"四、如何使用-vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、如何使用-vuex","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、如何使用 Vuex")]),t._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ljianshu/Blog/issues/36",target:"_blank",rel:"noopener noreferrer"}},[t._v("从头开始学习 Vuex"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/qQxUCbPBYSq9vU7dvDOCzg",target:"_blank",rel:"noopener noreferrer"}},[t._v("学习 vuex 源码整体架构，打造属于自己的状态管理库"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[t._v("#")]),t._v(" 联系作者")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("p",[t._v("\n        平凡世界，贵在坚持。\n    ")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);e.default=v.exports}}]);