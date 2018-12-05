(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{392:function(a,t,e){"use strict";e.r(t);var s=e(4),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"字符串扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串扩展","aria-hidden":"true"}},[a._v("#")]),a._v(" 字符串扩展")]),a._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("p",[a._v("ES6 对字符串的改造和增强，介绍字符串对象的新增方法。")]),a._v(" "),e("h2",{attrs:{id:"内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E4%B8%80%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E9%81%8D%E5%8E%86%E5%99%A8%E6%8E%A5%E5%8F%A3"}},[a._v("字符串的遍历器接口")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%8C%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2"}},[a._v("模板字符串")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%B8%89%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%96%B0%E5%A2%9E%E6%96%B9%E6%B3%95"}},[a._v("字符串新增方法")])])]),a._v(" "),e("h3",{attrs:{id:"一、字符串的遍历器接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、字符串的遍历器接口","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、字符串的遍历器接口")]),a._v(" "),e("p",[a._v("ES6为字符串添加了遍历器接口，使得字符串可以被"),e("code",[a._v("for...of")]),a._v("循环遍历。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("for(let codePoint of 'foo'){\n    console.log(codePoint)\n}\n// 'f'\n// 'o'\n// 'o'\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h3",{attrs:{id:"二、模板字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、模板字符串","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、模板字符串")]),a._v(" "),e("p",[a._v("模板字符串是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// 普通字符串\n`In JavaScript \'\\n\' is a line-feed.`\n\n// 多行字符串\n`In JavaScript this is \nnot legal.`\n\n// 字符串中嵌入变量\nvar name = "Bob",time = "today";\n`Hello ${name},how are you ${time}?`\n\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br")])]),e("h3",{attrs:{id:"三、字符串新增方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、字符串新增方法","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、字符串新增方法")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("String.fromCodePoint()")]),a._v("： 用于从码点返回对应字符，但是这个方法不能识别32位的UTF-16字符。")]),a._v(" "),e("li",[e("code",[a._v("repeat()")]),a._v("：方法返回一个新字符串，表示将原字符串重复"),e("code",[a._v("n")]),a._v("次。")]),a._v(" "),e("li",[e("code",[a._v("trimStart()，trimEnd()")]),a._v("："),e("code",[a._v("trimStart()")]),a._v("消除字符串头部的空格，"),e("code",[a._v("trimEnd()")]),a._v("消除发问的空格。")]),a._v(" "),e("li",[e("code",[a._v("includes()，startsWith()，endsWith()")]),a._v("："),e("code",[a._v("includes()")]),a._v("返回布尔值，表示是否找到了参数字符串。"),e("code",[a._v("startsWidth()")]),a._v("返回布尔值，表示参数字符串是否在原字符串的头部。"),e("code",[a._v("endsWidth()")]),a._v("返回布尔值，表示参数字符串是否在原字符串的尾部。")]),a._v(" "),e("li",[e("code",[a._v("padStart()，padEnd()")]),a._v("：用于头部补全和尾部补全。")])]),a._v(" "),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://yjhenan.gitbooks.io/-ecmascript-6/content/docs/string.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("《ECMAScript 6 入门》 第三版"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/string",target:"_blank",rel:"noopener noreferrer"}},[a._v("ECMAScript 6 入门"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"联系作者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),e("div",{attrs:{align:"center"}},[e("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),e("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);t.default=r.exports}}]);