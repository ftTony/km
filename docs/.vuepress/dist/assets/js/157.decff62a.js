(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{388:function(r,e,t){"use strict";t.r(e);var o=t(4),v=Object(o.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"proxy-和-reflect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proxy-和-reflect","aria-hidden":"true"}},[r._v("#")]),r._v(" Proxy 和 Reflect")]),r._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[r._v("#")]),r._v(" 前言")]),r._v(" "),t("p",[r._v("Proxy 用于个性某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”，即对编程语言进行编程。")]),r._v(" "),t("p",[r._v("Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和必定。")]),r._v(" "),t("h2",{attrs:{id:"内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[r._v("#")]),r._v(" 内容")]),r._v(" "),t("ul",[t("li",[r._v("概述")]),r._v(" "),t("li",[r._v("Proxy 实例的方法")]),r._v(" "),t("li",[r._v("this 问题")])]),r._v(" "),t("h3",{attrs:{id:"一、概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、概述","aria-hidden":"true"}},[r._v("#")]),r._v(" 一、概述")]),r._v(" "),t("p",[r._v("ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。")]),r._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("var proxy = new Proxy(target,handler);\n")])]),r._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[r._v("1")]),t("br")])]),t("p",[t("code",[r._v("new Proxy()")]),r._v("表示生成一个"),t("code",[r._v("Proxy")]),r._v("实例，"),t("code",[r._v("target")]),r._v("参数表示所要拦截的目标对象，"),t("code",[r._v("handler")]),r._v("参数也是一个对象，用来寶拦截行为。")]),r._v(" "),t("h3",{attrs:{id:"二、proxy-实例的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、proxy-实例的方法","aria-hidden":"true"}},[r._v("#")]),r._v(" 二、Proxy 实例的方法")]),r._v(" "),t("ul",[t("li",[t("strong",[r._v("get(target,propKey,receiver)")]),r._v("：拦截对象属性的读取，比如"),t("code",[r._v("proxy.foo")]),r._v("和"),t("code",[r._v("proxy['foo']")]),r._v("。")]),r._v(" "),t("li",[t("strong",[r._v("set(target,propKey,value,receiver)")]),r._v("：拦截对象属性的设置，比如"),t("code",[r._v("proxy.foo = v")]),r._v("或"),t("code",[r._v("proxy['foo'] = v")]),r._v("，返回一个布尔值。")]),r._v(" "),t("li",[t("strong",[r._v("has(target,propKey)")]),r._v("：拦截"),t("code",[r._v("propKey in proxy")]),r._v("的操作，返回一个布尔值。")]),r._v(" "),t("li",[t("strong",[r._v("deleteProperty(target,propKey)")]),r._v("：拦截"),t("code",[r._v("delete proxy[propKey]")]),r._v("的操作，返回一个布尔值。")]),r._v(" "),t("li",[t("strong",[r._v("ownKeys(tarte)")]),r._v("：拦截"),t("code",[r._v("Object.getOwnPropertyNames(proxy)")]),r._v("、"),t("code",[r._v("Object.getOwnPropertySymbols(proxy)")]),r._v("、"),t("code",[r._v("Object.keys(proxy)")]),r._v("、"),t("code",[r._v("for...in")]),r._v("循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而"),t("code",[r._v("Object.keys()")]),r._v("的返回结果仅包括目标对象自身的可遍历属性。")]),r._v(" "),t("li",[t("strong",[r._v("getOwnPropertyDescriptor(target,propKey)")]),r._v("：拦截"),t("code",[r._v("Object.getOwnPropertyDescriptor(proxy,propKey)")]),r._v("，返回属性的描述对象。")]),r._v(" "),t("li",[t("strong",[r._v("defineProperty(target,propKey,propDesc)")]),r._v("：拦截"),t("code",[r._v("Object.definedProperty(proxy,propKey,propDesc)")]),r._v("、"),t("code",[r._v("Object.definedProperties(proxy,propDescs)")]),r._v("，返回一个布尔值。")]),r._v(" "),t("li",[t("strong",[r._v("preventExtensions(target)")]),r._v("：拦截"),t("code",[r._v("Object.preventExtensions(proxy)")]),r._v("，返回一个布尔值。")]),r._v(" "),t("li",[t("strong",[r._v("getPrototypeOf(target)")]),r._v("：拦截"),t("code",[r._v("Object.getPrototypeOf(proxy)")]),r._v("，返回一个对象。")]),r._v(" "),t("li",[t("strong",[r._v("isExtensible(target)")]),r._v("：拦截"),t("code",[r._v("Object.isExtensible(proxy)")]),r._v(",返回一个布尔值。")]),r._v(" "),t("li",[t("strong",[r._v("setPrototypeOf(target,proto)")]),r._v("：拦截"),t("code",[r._v("Object.setPrototypeOf(proxy,proto)")]),r._v("，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。")]),r._v(" "),t("li",[t("strong",[r._v("apply(target,object,args)")]),r._v("：拦截 Proxy 实例作为函数调用的操作，比如"),t("code",[r._v("proxy(...args)")]),r._v("、"),t("code",[r._v("proxy.call(object,...args)")]),r._v("、"),t("code",[r._v("proxy.apply(...)")]),r._v("。")]),r._v(" "),t("li",[t("strong",[r._v("construct(target,args)")]),r._v("：拦截 Proxy 实例作为构造函数调用的操作，比如"),t("code",[r._v("new Proxy(...args)")]),r._v("。")])]),r._v(" "),t("h3",{attrs:{id:"三、this-问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、this-问题","aria-hidden":"true"}},[r._v("#")]),r._v(" 三、this 问题")]),r._v(" "),t("p",[r._v("虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。")]),r._v(" "),t("h3",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[r._v("#")]),r._v(" 参考资料")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/proxy",target:"_blank",rel:"noopener noreferrer"}},[r._v("ECMAScript 6 入门"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://yjhenan.gitbooks.io/-ecmascript-6/content/docs/proxy.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("《ECMAScript 6 入门》 第三版"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/MfKjL8atgDInN3yTRDGk3Q",target:"_blank",rel:"noopener noreferrer"}},[r._v("ES6 之 Proxy 的巧用"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/wBwOKb5lOazpCa0ufl2Mgw",target:"_blank",rel:"noopener noreferrer"}},[r._v("你不知道的 Proxy：ES6 Proxy 可以做哪些有意思的事情？"),t("OutboundLink")],1)])]),r._v(" "),t("h2",{attrs:{id:"联系作者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[r._v("#")]),r._v(" 联系作者")]),r._v(" "),t("div",{attrs:{align:"center"}},[t("p",[r._v("\n        平凡世界，贵在坚持。\n    ")]),r._v(" "),t("img",{attrs:{src:r.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);e.default=v.exports}}]);