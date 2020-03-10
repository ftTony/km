(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{475:function(t,_,v){"use strict";v.r(_);var a=v(13),e=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"单元测试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单元测试"}},[t._v("#")]),t._v(" 单元测试")]),t._v(" "),v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),v("p",[v("strong",[t._v("单元测试")]),t._v("：是指对软件中的最小可测试单元进行检查和验证，通常指的是独立测试单个函数。")]),t._v(" "),v("h2",{attrs:{id:"内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E5%89%8D%E7%AB%AF%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E6%A1%86%E6%9E%B6"}},[t._v("前端单元测试框架")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E4%BA%8C%E3%80%81jest-%E5%85%A5%E9%97%A8"}},[t._v("Jest 入门")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E4%B8%89%E3%80%81vue-%E4%B8%AD%E5%AE%9E%E8%B7%B5-jest"}},[t._v("Vue 中实践 Jest")])])]),t._v(" "),v("h3",{attrs:{id:"一、前端单元测试框架"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、前端单元测试框架"}},[t._v("#")]),t._v(" 一、前端单元测试框架")]),t._v(" "),v("p",[t._v("单元测试有 Mocha, Ava, Karma, Jest, Jasmine 等。")]),t._v(" "),v("h4",{attrs:{id:"_1-1-框架对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-框架对比"}},[t._v("#")]),t._v(" 1.1 框架对比")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("框架")]),t._v(" "),v("th",[t._v("断言")]),t._v(" "),v("th",[t._v("仿真")]),t._v(" "),v("th",[t._v("快照")]),t._v(" "),v("th",[t._v("异步测试")]),t._v(" "),v("th",[t._v("环境")]),t._v(" "),v("th",[t._v("并发测试")]),t._v(" "),v("th",[t._v("测试覆盖率")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Mocha")]),t._v(" "),v("td",[t._v("默认不支持，可配置")]),t._v(" "),v("td",[t._v("默认不支持，可配置")]),t._v(" "),v("td",[t._v("默认不支持，可配置")]),t._v(" "),v("td",[t._v("友好")]),t._v(" "),v("td",[t._v("全局环境")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("需配置")])]),t._v(" "),v("tr",[v("td",[t._v("Ava")]),t._v(" "),v("td",[t._v("默认支持")]),t._v(" "),v("td",[t._v("不支持，需第三方配置")]),t._v(" "),v("td",[t._v("默认支持")]),t._v(" "),v("td",[t._v("友好")]),t._v(" "),v("td",[t._v("隔离环境")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("不支持，需第三方配置")])]),t._v(" "),v("tr",[v("td",[t._v("Jasmine")]),t._v(" "),v("td",[t._v("默认支持")]),t._v(" "),v("td",[t._v("默认支持")]),t._v(" "),v("td",[t._v("默认支持")]),t._v(" "),v("td",[t._v("不友好")]),t._v(" "),v("td",[t._v("全局环境")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("不需配置")])]),t._v(" "),v("tr",[v("td",[t._v("Jest")]),t._v(" "),v("td",[t._v("默认支持")]),t._v(" "),v("td",[t._v("默认支持")]),t._v(" "),v("td",[t._v("默认支持")]),t._v(" "),v("td",[t._v("友好")]),t._v(" "),v("td",[t._v("隔离环境")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("不需配置")])]),t._v(" "),v("tr",[v("td",[t._v("Karma")]),t._v(" "),v("td",[t._v("不支持，需要第三方配置")]),t._v(" "),v("td",[t._v("不支持，需第三方配置")]),t._v(" "),v("td",[t._v("不支持，需要第三方配置")]),t._v(" "),v("td",[t._v("不支持，需要第三方配置")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("需配置")])])])]),t._v(" "),v("ul",[v("li",[t._v("Mocha 是生态最好，使用最广泛的单元测试框架，但是他需要较多的配置来实现它的高扩展性。")]),t._v(" "),v("li",[t._v("Ava 是更轻量高效简单的单元测试框架，但是自身不够稳定，并发运行文件多的时候会撑爆 CPU。")]),t._v(" "),v("li",[t._v("Jasmine 是单元测试框架的“元老”，开箱即用，但是异步测试支持较弱。")]),t._v(" "),v("li",[t._v("Jest 基于 Jasmine，做了大量修改并添加了很多特性，同样开箱即用，但异步测试支持良好。")]),t._v(" "),v("li",[t._v("Karma 能在真实的浏览器中测试，强大适配器，可配置其他单元测试框架，一般会配合 Mocha 或 Jasmine 等一起使用。")])]),t._v(" "),v("h3",{attrs:{id:"二、jest-入门"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、jest-入门"}},[t._v("#")]),t._v(" 二、Jest 入门")]),t._v(" "),v("p",[t._v("Jest 总归是个使用起来很简单的框架，不需要太多的学习时间就能上手了。另外如果你想学习如何用好这个框架，最好的办法其实是阅读工具库以及组件库的测试用例。")]),t._v(" "),v("h4",{attrs:{id:"_2-1-jest-介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-jest-介绍"}},[t._v("#")]),t._v(" 2.1 Jest 介绍")]),t._v(" "),v("h3",{attrs:{id:"三、vue-中实践-jest"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、vue-中实践-jest"}},[t._v("#")]),t._v(" 三、Vue 中实践 Jest")]),t._v(" "),v("h3",{attrs:{id:"参考资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/IgA29U-etBKUls7JnpE2Zw",target:"_blank",rel:"noopener noreferrer"}},[t._v("万字长文总结前端测试体系建设与最佳实践"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://www.jianshu.com/p/1b99af371e66",target:"_blank",rel:"noopener noreferrer"}},[t._v("聊聊前端开发的测试"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/gQZ6SDyDLY8wu5_eedkd1g",target:"_blank",rel:"noopener noreferrer"}},[t._v("聊一聊前端自动化测试（下）"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/KSszU-OcnLuxQ-Ap5KcFQg",target:"_blank",rel:"noopener noreferrer"}},[t._v("【第 1022 期】聊一聊前端自动化测试（上）"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://juejin.im/post/5defacfa51882512664b076f",target:"_blank",rel:"noopener noreferrer"}},[t._v("单元测试从零开始，包含 Vue 及 React 项目中该如何单测"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://www.cnblogs.com/tugenhua0707/p/8419534.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("学习测试框架 Mocha"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://www.cnblogs.com/tugenhua0707/p/8433847.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("学习 Karma+Jasmine+istanbul+webpack 自动化单元测试"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"联系作者"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[t._v("#")]),t._v(" 联系作者")]),t._v(" "),v("div",{attrs:{align:"center"}},[v("p",[t._v("\n        平凡世界，贵在坚持。\n    ")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);_.default=e.exports}}]);