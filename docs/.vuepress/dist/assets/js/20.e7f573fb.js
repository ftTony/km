(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{249:function(a,s,t){"use strict";t.r(s);var e=t(4),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"创建型设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建型设计模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建型设计模式")]),a._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),a._v(" "),t("h2",{attrs:{id:"内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E7%AE%80%E5%8D%95%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F"}},[a._v("简单工厂模式")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F"}},[a._v("工厂方法模式")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F"}},[a._v("抽象工厂模式")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E5%BB%BA%E9%80%A0%E8%80%85%E6%A8%A1%E5%BC%8F"}},[a._v("建造者模式")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F"}},[a._v("单例模式")])])]),a._v(" "),t("h3",{attrs:{id:"一、简单工厂模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、简单工厂模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、简单工厂模式")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// 篮球基类\nclass BasketBall{\n    constructor(){\n        this.intro = '篮球盛行于美国'\n    }\n}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("h3",{attrs:{id:"二、工厂方法模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、工厂方法模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、工厂方法模式")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"三、抽象工厂模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、抽象工厂模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、抽象工厂模式")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"四、建造者模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、建造者模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、建造者模式")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"五、单例模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、单例模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 五、单例模式")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("let LazySingle = (function(){\n    let _instance = null;\n    function single(){\n        return {\n            publicMath(){},\n            publicConst:100\n        }\n    }\n    return function(){\n        if(!_instance){\n            _instance = single();\n        }\n        // 返回单例\n        return _instance;\n    }\n})();\nconsole.log(LazySingle().publicConst);\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br")])]),t("h3",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[a._v("《JavaScript 设计模式》")]),a._v(" "),t("li",[a._v("《JavaScript 设计模式与开发实践》")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/yanlele/node-index/blob/master/book/04%E3%80%81js%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/02%E7%AF%87%E3%80%81%E5%88%9B%E5%BB%BA%E5%9E%8B%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/README.md#class02-08",target:"_blank",rel:"noopener noreferrer"}},[a._v("第二篇、创建型设计模式"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"联系作者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=n.exports}}]);