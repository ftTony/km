(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{388:function(t,a,r){"use strict";r.r(a);var e=r(2),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"new-理解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-理解","aria-hidden":"true"}},[t._v("#")]),t._v(" new 理解")]),t._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),r("p",[t._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),t._v(" "),r("h2",{attrs:{id:"内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),r("ul",[r("li",[t._v("new几个特点")]),t._v(" "),r("li",[t._v("代码实现")])]),t._v(" "),r("blockquote",[r("p",[t._v("new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。 ——（来自于MDN）")])]),t._v(" "),r("h3",{attrs:{id:"一、new几个特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、new几个特点","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、new几个特点")]),t._v(" "),r("ul",[r("li",[t._v("创建（或者说构造）一个全新的对象")]),t._v(" "),r("li",[t._v("这个新对象会被执行[[原型]]连接。")]),t._v(" "),r("li",[t._v("这个新对象会绑定到函数调用的this。")]),t._v(" "),r("li",[t._v("如果函数没有返回其他对象，那么this指向这个新对象，否则this指向构造函数中返回的对象。")])]),t._v(" "),r("h3",{attrs:{id:"二、代码实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、代码实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、代码实现")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("    function objectFactory(){\n        var obj = new Object(),\n        Constructor = [].shift.call(arguments);\n        obj.__proto__ = Constructor.prototype;\n        var ret = Constructor.apply(obj,arguments);\n        return typeof ret==='object' ? ret : obj;\n    }\n\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br")])]),r("h3",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/13",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript深入之new的模拟实现"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/yygmind/blog/issues/24",target:"_blank",rel:"noopener noreferrer"}},[t._v("深度解析 new 原理及模拟实现"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"联系作者"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[t._v("#")]),t._v(" 联系作者")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("p",[t._v("\n        平凡世界，贵在坚持。\n    ")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=s.exports}}]);