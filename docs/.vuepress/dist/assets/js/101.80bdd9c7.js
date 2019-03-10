(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{420:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象","aria-hidden":"true"}},[s._v("#")]),s._v(" 对象")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),s._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%B8%80%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1"}},[s._v("创建对象")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%8C%E5%AF%B9%E8%B1%A1%E7%9B%B8%E5%85%B3%E6%96%B9%E6%B3%95"}},[s._v("对象相关方法")])])]),s._v(" "),a("h3",{attrs:{id:"一、创建对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、创建对象","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、创建对象")]),s._v(" "),a("h4",{attrs:{id:"_1-1-工厂模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-工厂模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.1 工厂模式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function createPerson(name) {\n    var o = new Object();\n    o.name = name;\n    o.getName = function () {\n        console.log(this.name);\n    };\n\n    return o;\n}\n\nvar person1 = createPerson('kevin');\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("缺点：对象无法识别，因为所有的实例都指向一个原型")]),s._v(" "),a("h4",{attrs:{id:"_1-2-构造函数模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-构造函数模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.2 构造函数模式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function Person(name){\n    this.name=name;\n    this.getName=function(){\n        console.log(this.name);\n    };\n}\n\nvar person1=new Person('tony');\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("优点：实例可以识别为一个特定的类型")]),s._v(" "),a("p",[s._v("缺点：每次创建实例时，每个方法都要被创建一次")]),s._v(" "),a("h4",{attrs:{id:"_1-2-1-构造函数模式优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-构造函数模式优化","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.2.1 构造函数模式优化")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nfunction Person(name) {\n    this.name = name;\n    this.getName = getName;\n}\n\nfunction getName() {\n    console.log(this.name);\n}\n\nvar person1 = new Person('kevin');\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("优点：解决了每个方法都要被重新创建的问题")]),s._v(" "),a("p",[s._v("缺点：在全局作用域中定义的函数实际上只能被某个对象调用，这让全局作用有点名不副实。")]),s._v(" "),a("h4",{attrs:{id:"_1-3-原型模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-原型模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.3 原型模式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function Person(name) {\n\n}\n\nPerson.prototype.name = 'keivn';\nPerson.prototype.getName = function () {\n    console.log(this.name);\n};\n\nvar person1 = new Person();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("优点：方法不会重新创建")]),s._v(" "),a("p",[s._v("缺点：1. 所有的属性和方法都共享 2. 不能初始化参数")]),s._v(" "),a("h4",{attrs:{id:"_1-3-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.3.1")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function Person(name) {\n\n}\n\nPerson.prototype = {\n    name: 'kevin',\n    getName: function () {\n        console.log(this.name);\n    }\n};\n\nvar person1 = new Person();\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("优点：封装性好了一点")]),s._v(" "),a("p",[s._v("缺点：重写了原型，丢失了constructor属性")]),s._v(" "),a("h4",{attrs:{id:"_1-3-2-原型模式优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-原型模式优化","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.3.2 原型模式优化")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function Person(name) {\n\n}\n\nPerson.prototype = {\n    constructor: Person,\n    name: 'kevin',\n    getName: function () {\n        console.log(this.name);\n    }\n};\n\nvar person1 = new Person();\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("优点：实例可以通过constructor属性找到所属构造函数")]),s._v(" "),a("p",[s._v("缺点：原型模式该有的缺点还是有")]),s._v(" "),a("h4",{attrs:{id:"_1-4-组合构造函数模式和原型模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-组合构造函数模式和原型模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.4 组合构造函数模式和原型模式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nfunction Person(name){\n    this.name=name;\n}\n\nPerson.prototype={\n    constructor:Person,\n    getName:function(){\n        console.log(this.name);\n    }\n};\n\nvar person1 = new Person();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("优点：该共享的共享，该私有的私有，使用最广泛的方式")]),s._v(" "),a("p",[s._v("缺点：有的人就是希望全部都写在一起，即更好的封装性")]),s._v(" "),a("h4",{attrs:{id:"_1-5-动态原型模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-动态原型模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.5 动态原型模式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('function Person(name){\n    this.name=name;\n    if(typeof this.getName!="function"){\n        Person.prototype.getName=function(){\n            console.log(this.name);\n        };\n    }\n}\n\nvar person1=new Person();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("注意：使用动态原型模式时，不能用对象字面量重写原型，因为在已经创建了实例的情况下重写原型，那么就会切断现有实例与新原型之间的联系。")]),s._v(" "),a("h4",{attrs:{id:"_1-6-寄生构造函数模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-寄生构造函数模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.6 寄生构造函数模式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function Person(name){\n\n    var o=new Object();\n    o.name=name;\n    o.getName=function(){\n        console.log(this.name);\n    };\n    return o;\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("注意：返回的对象与构造函数或者与构造函数的原型属性之间没有关系；也就是说，构造函数返回的对象与在构造函数外部创建的对象没有什么不同。为此不能依赖instanceof操作为确定对象类型。")]),s._v(" "),a("h4",{attrs:{id:"_1-7-稳妥构造函数模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-稳妥构造函数模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.7 稳妥构造函数模式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function person(name){\n\n}\n\nvar person1=person('kevin');\nperson1.sayName();  // kevin\nperson1.name='tony';\nperson1.sayName();  // kevin\nconsole.log(person1.name);  //daisy\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("所谓稳妥对象，指的是没有公共属性，而且其方法也不引用 this 的对象。")]),s._v(" "),a("p",[s._v("与寄生构造函数模式有两点不同：")]),s._v(" "),a("ol",[a("li",[s._v("新创建的实例方法不引用 this")]),s._v(" "),a("li",[s._v("不使用 new 操作符调用构造函数")]),s._v(" "),a("li",[s._v("稳妥对象最适合在一些安全的环境中。")])]),s._v(" "),a("p",[s._v("稳妥构造函数模式也跟工厂模式一样，无法识别对象所属类型。")]),s._v(" "),a("h3",{attrs:{id:"二、对象相关方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、对象相关方法","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、对象相关方法")]),s._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[s._v("《高程第三版》")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/15",target:"_blank",rel:"noopener noreferrer"}},[s._v("JavaScript深入之创建对象的多种方式以及优缺点"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);n.default=t.exports}}]);