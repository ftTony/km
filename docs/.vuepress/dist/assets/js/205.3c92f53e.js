(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{425:function(s,a,n){"use strict";n.r(a);var t=n(13),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"vue-虚拟-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-虚拟-dom"}},[s._v("#")]),s._v(" Vue 虚拟 DOM")]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),s._v(" "),n("h2",{attrs:{id:"内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E8%99%9A%E6%8B%9F-dom-%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86"}},[s._v("虚拟 DOM 的实现原理")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E8%99%9A%E6%8B%9F-dom-%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9"}},[s._v("虚拟 DOM 的优缺点")])])]),s._v(" "),n("h3",{attrs:{id:"一、虚拟-dom-的实现原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、虚拟-dom-的实现原理"}},[s._v("#")]),s._v(" 一、虚拟 DOM 的实现原理")]),s._v(" "),n("p",[s._v("虚拟 DOM 的实现原理主要包括以下 3 部分：")]),s._v(" "),n("ul",[n("li",[s._v("用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象；")]),s._v(" "),n("li",[s._v("diff 算法 — 比较两棵虚拟 DOM 树的差异；")]),s._v(" "),n("li",[s._v("pach 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。")])]),s._v(" "),n("h4",{attrs:{id:"_1-1-模拟真实-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-模拟真实-dom"}},[s._v("#")]),s._v(" 1.1 模拟真实 DOM")]),s._v(" "),n("p",[s._v("用 JavaScript 来表示一个 DOM 节点是很简单的事情，你只需要记录它的节点类型、属性，还有子节点：")]),s._v(" "),n("p",[s._v("element.js")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function Element(tagName,props,children){\n    if(!(this instanceof Element)){\n        if(!_.isArray(children) && children !=null){\n            children = _.slice(arguments,2).filter(_.truthy)\n        }\n        return new Element(tagName,props,children)\n    }\n\n    if(_.isArray(props)){\n        children = props\n        props = {}\n    }\n\n    this.tagName = tagName\n    this.props = props || {}\n    this.chilren = children || []\n    this.key = props ? props.key: 666\n\n    var count = 0\n\n    _.each(this.children,function(child,i){\n        if(child instanceof Element){\n            count += child.count\n        }else{\n            children[i] = '' +child\n        }\n        count++\n    })\n\n    this.count = count\n}\n\nElement.prototype.render = function(){\n    var el = document.createElement(this.tagName)\n    var props = this.props\n\n    for(var propName in props){\n        var propValue = props[propName]\n        _.setAttr(el,propName,propValue)\n    }\n\n    _.each(this.children,function(child){\n        var childEl = (child instanceof Element)?child.render():document.createTextNode(child)\n        el.appendChild(childEl)\n    })\n\n    return el\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br")])]),n("h4",{attrs:{id:"_1-2-diff-算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-diff-算法"}},[s._v("#")]),s._v(" 1.2 diff 算法")]),s._v(" "),n("p",[s._v("参考"),n("a",{attrs:{href:"https://km.xiaowuzi.info/js/vue-diff.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("diff 算法"),n("OutboundLink")],1)]),s._v(" "),n("h4",{attrs:{id:"_1-3-pach-算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-pach-算法"}},[s._v("#")]),s._v(" 1.3 pach 算法")]),s._v(" "),n("h3",{attrs:{id:"二、虚拟-dom-的优缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、虚拟-dom-的优缺点"}},[s._v("#")]),s._v(" 二、虚拟 DOM 的优缺点")]),s._v(" "),n("ul",[n("li",[s._v("优点")]),s._v(" "),n("li",[s._v("缺点")])]),s._v(" "),n("h4",{attrs:{id:"优点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[s._v("#")]),s._v(" 优点")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("保证性能下限")]),s._v("：框架的虚拟 DOM 需要甜酸任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；")]),s._v(" "),n("li",[n("strong",[s._v("无需手动操作 DOM")]),s._v("：我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；")]),s._v(" "),n("li",[n("strong",[s._v("跨平台")]),s._v("：虚拟 DOM 本质上是 JavaScript 对象，而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。")])]),s._v(" "),n("h4",{attrs:{id:"缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[s._v("#")]),s._v(" 缺点")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("无法进行极致优化")]),s._v("：虽然虽然虚拟 DOM+合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。")])]),s._v(" "),n("h3",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/livoras/blog/issues/13",target:"_blank",rel:"noopener noreferrer"}},[s._v("如何实现一个 Virtual DOM 算法"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/EeN7E8uQS4R_JJloPX8fCQ",target:"_blank",rel:"noopener noreferrer"}},[s._v("揭秘 Vue 中的 Virtual Dom"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/oAlVmZ4Hbt2VhOwFEkNEhw",target:"_blank",rel:"noopener noreferrer"}},[s._v("虚拟 DOM 到底是什么？"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5d36cc575188257aea108a74",target:"_blank",rel:"noopener noreferrer"}},[s._v("深入剖析：Vue 核心之虚拟 DOM"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://www.404forest.com/2019/03/07/modern-web-development-tech-analysis-virtual-dom/",target:"_blank",rel:"noopener noreferrer"}},[s._v("现代前端科技解析 —— Virtual DOM"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"联系作者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),n("div",{attrs:{align:"center"}},[n("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),n("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=e.exports}}]);