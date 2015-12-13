(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{415:function(s,t,a){"use strict";a.r(t);var r=a(13),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"querystring-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#querystring-模块"}},[s._v("#")]),s._v(" querystring 模块")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("querystring 模块是用来处理 query 字符串的简单辅助模块。")]),s._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BD%AC%E5%AF%B9%E8%B1%A1"}},[s._v("字符串转对象")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E5%AF%B9%E8%B1%A1%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2"}},[s._v("对象转字符串")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E5%85%B6%E5%AE%83%E6%96%B9%E6%B3%95"}},[s._v("其它方法")])])]),s._v(" "),a("h3",{attrs:{id:"一、字符串转对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、字符串转对象"}},[s._v("#")]),s._v(" 一、字符串转对象")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var querystring = require('querystring');\nvar str = 'firstname=dk&url=http%3A%2F%2Fdk-lan.com&lastname=tom&passowrd=123456';\nvar param = querystring.parse(param);\n//结果\n//{firstname:\"dk\", url:\"http://dk-lan.com\", lastname: 'tom', passowrd: 123456};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"二、对象转字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、对象转字符串"}},[s._v("#")]),s._v(" 二、对象转字符串")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var querystring = require('querystring');\n\nvar obj = {firstname:\"dk\", url:\"http://dk-lan.com\", lastname: 'tom', passowrd: 123456};\n//将对象转换成字符串\nvar param = querystring.stringify(obj);\n//结果\n//firstname=dk&url=http%3A%2F%2Fdk-lan.com&lastname=tom&passowrd=123456\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"三、其它方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、其它方法"}},[s._v("#")]),s._v(" 三、其它方法")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("decode()：")]),s._v(" 解码，对应的别名是"),a("code",[s._v("parse()")])]),s._v(" "),a("li",[a("strong",[s._v("encode()：")]),s._v(" 编码，对应的别名是"),a("code",[s._v("stringify()")])]),s._v(" "),a("li",[a("strong",[s._v("escape(str)：")]),s._v(" 对字符串进行编码")]),s._v(" "),a("li",[a("strong",[s._v("parse(str[, sep[, eq[, options]]])：")]),s._v(" 将字符串解析成对象")]),s._v(" "),a("li",[a("strong",[s._v("stringify(obj[, sep[, eq[, options]]])：")]),s._v(" 将对象解析成字符串")]),s._v(" "),a("li",[a("strong",[s._v("unescape(str)：")]),s._v(" 编码的字符串进行解码。")])]),s._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[s._v("《Nodejs 即学即用》")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://nodejs.org/api/querystring.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("nodejs v12.1 文档"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);t.default=e.exports}}]);