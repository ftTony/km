(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{383:function(t,a,s){"use strict";s.r(a);var e=s(13),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"let-与-const"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#let-与-const"}},[t._v("#")]),t._v(" let 与 const")]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("let 和 const 新特性介绍及 let 和 const 区别。")]),t._v(" "),s("h2",{attrs:{id:"内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%80let-%E5%92%8C-const-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95"}},[t._v("let 和 const 基本用法")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%8C%E4%B8%8D%E5%AD%98%E5%9C%A8%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87"}},[t._v("不存在变量提升")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%89%E4%B8%8D%E7%BB%91%E5%AE%9A%E5%85%A8%E5%B1%80%E4%BD%9C%E7%94%A8%E5%9F%9F"}},[t._v("不绑定全局作用域")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%9B%9B%E6%9A%82%E6%97%B6%E6%80%A7%E6%AD%BB%E5%8C%BA"}},[t._v("暂时性死区")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%94%E4%B8%8D%E5%85%81%E8%AE%B8%E9%87%8D%E5%A4%8D%E5%A3%B0%E6%98%8E"}},[t._v("不允许重复声明")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%85%AD%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F"}},[t._v("块级作用域")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%83let-%E5%92%8C-const-%E7%9A%84%E5%8C%BA%E5%88%AB"}},[t._v("let 和 const 的区别")])])]),t._v(" "),s("h3",{attrs:{id:"一、let-和-const-基本用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、let-和-const-基本用法"}},[t._v("#")]),t._v(" 一、let 和 const 基本用法")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#11-let-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95"}},[t._v("let 基本用法")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#12-const-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95"}},[t._v("const 基本用法")])])]),t._v(" "),s("h4",{attrs:{id:"_1-1-let-基本用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-let-基本用法"}},[t._v("#")]),t._v(" 1.1 let 基本用法")]),t._v(" "),s("p",[t._v("ES6 新增了 let 命令，用来声明变量。它的用法类似于 var，但是所声明的变量，只在 let 命令所在的代码块内有效。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{\n  let a = 10;\n  var b = 1;\n}\n\na // ReferenceError: a is not defined.\nb // 1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h4",{attrs:{id:"_1-2-const-基本用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-const-基本用法"}},[t._v("#")]),t._v(" 1.2 const 基本用法")]),t._v(" "),s("p",[s("code",[t._v("const")]),t._v("声明一个只读的常量。一旦声明，常量的值就不能改变。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const PI = 3.1415;\nPI // 3.1415\n\nPI = 3;\n// TypeError: Assignment to constant variable.\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"二、不存在变量提升"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、不存在变量提升"}},[t._v("#")]),t._v(" 二、不存在变量提升")]),t._v(" "),s("p",[s("code",[t._v("var")]),t._v("命令会发生”变量提升“现象，即变量可以在声明之前使用，值为"),s("code",[t._v("undefined")]),t._v("。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。")]),t._v(" "),s("p",[t._v("为了纠正这种现象，"),s("code",[t._v("let")]),t._v("命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("if (false) {\n    let value = 1;\n}\nconsole.log(value); // Uncaught ReferenceError: value is not defined\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"三、不绑定全局作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、不绑定全局作用域"}},[t._v("#")]),t._v(" 三、不绑定全局作用域")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("let value = 1;\nconsole.log(window.value); // undefined\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"四、暂时性死区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、暂时性死区"}},[t._v("#")]),t._v(" 四、暂时性死区")]),t._v(" "),s("p",[t._v("let 和 const 声明的变量不会被提升到作用域顶部，如果在声明之前访问这些变量，会导致报错：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("console.log(typeof value); // Uncaught ReferenceError: value is not defined\nlet value = 1;\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"五、不允许重复声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、不允许重复声明"}},[t._v("#")]),t._v(" 五、不允许重复声明")]),t._v(" "),s("p",[s("code",[t._v("let")]),t._v("不允许在相同作用域内，重复声明同一个变量。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("var value = 1;\nlet value = 2; // Uncaught SyntaxError: Identifier 'value' has already been declared\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"六、块级作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、块级作用域"}},[t._v("#")]),t._v(" 六、块级作用域")]),t._v(" "),s("p",[s("code",[t._v("let")]),t._v("实际上为 JavaScript 新增了块级作用域。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("function f1() {\n  let n = 5;\n  if (true) {\n    let n = 10;\n  }\n  console.log(n); // 5\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h3",{attrs:{id:"七、let-和-const-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、let-和-const-的区别"}},[t._v("#")]),t._v(" 七、let 和 const 的区别")]),t._v(" "),s("p",[t._v("const 用于声明常量，其值一旦被设定不能再被修改，否则会报错。")]),t._v(" "),s("h3",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://yjhenan.gitbooks.io/-ecmascript-6/content/docs/let.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《ECMAScript 6 入门》 第三版"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/82",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES6 系列之 let 和 const"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"联系作者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[t._v("#")]),t._v(" 联系作者")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("p",[t._v("\n        平凡世界，贵在坚持。\n    ")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=n.exports}}]);