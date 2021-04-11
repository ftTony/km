(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{582:function(e,v,_){"use strict";_.r(v);var r=_(19),d=Object(r.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"虚拟-dom-解析-优化篇"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-解析-优化篇"}},[e._v("#")]),e._v(" 虚拟 DOM 解析——优化篇")]),e._v(" "),_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),_("p",[e._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),e._v(" "),_("h2",{attrs:{id:"内容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[e._v("#")]),e._v(" 内容")]),e._v(" "),_("p",[e._v("我们不要按顺序去循环"),_("code",[e._v("newChildren")]),e._v("和"),_("code",[e._v("oldChildren")]),e._v("这两个数组，可以先比较这两个数组里特殊位置的子节点，比如：")]),e._v(" "),_("ul",[_("li",[e._v("先把"),_("code",[e._v("newChildren")]),e._v("数组里的所有未处理子节点的第一个子节点和"),_("code",[e._v("oldChildren")]),e._v("数组里所有未处理子节点的第一个子节点做比对，如果相同，那就直接进入更新节点的操作；")]),e._v(" "),_("li",[e._v("如果不同，再把"),_("code",[e._v("newChildren")]),e._v("数组里所有未处理子节点的最后一个子节点和"),_("code",[e._v("oldChildren")]),e._v("数组里所有未处理子节点的最后一个子节点做比对，如果相同，那就直接进入更新节点的操作；")]),e._v(" "),_("li",[e._v("如果不同，再把"),_("code",[e._v("newChildren")]),e._v("数组里所有未处理子节点的最后一个子节点和"),_("code",[e._v("oldChildren")]),e._v("数组里所有未处理子节点的第一个子节点做比对，如果相同，那就直接进入更新节点的操作，更新完后再将"),_("code",[e._v("oldChildren")]),e._v("数组里的该节点移动到与newChildren数组里节点相同的位置；")]),e._v(" "),_("li",[e._v("如果不同，再把"),_("code",[e._v("newChildren")]),e._v("数组里所有未处理子节点的第一个子节点和"),_("code",[e._v("oldChildren")]),e._v("数组里所有未处理子节点的最后一个子节点做比对，如果相同，那就直接进入更新节点的操作，更新完后再将"),_("code",[e._v("oldChildren")]),e._v("数组里的该节点移动到与"),_("code",[e._v("newChildren")]),e._v("数组里节点相同的位置；")])]),e._v(" "),_("p",[e._v("最后四种情况都试完如果还不同，那就按照之前循环的方式来查找节点。")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("newChildren")]),e._v("数组里的所有未处理子节点的第一个子节点称为：新前；")]),e._v(" "),_("li",[_("code",[e._v("newChildren")]),e._v("数组里的所有未处理子节点的最后一个子节点称为：新后；")]),e._v(" "),_("li",[_("code",[e._v("oldChildren")]),e._v("数组里的所有未处理子节点的第一个子节点称为：旧前；")]),e._v(" "),_("li",[_("code",[e._v("oldChildren")]),e._v("数组里的所有未处理子节点的最后一个子节点称为：旧后；")])]),e._v(" "),_("h3",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://nlrx-wjc.github.io/Learn-Vue-Source-Code/virtualDOM/optimizeUpdataChildren.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("优化更新子节点"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=d.exports}}]);