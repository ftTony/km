(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{368:function(s,a,n){"use strict";n.r(a);var t=n(4),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"this-解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#this-解析","aria-hidden":"true"}},[s._v("#")]),s._v(" this 解析")]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),s._v(" "),n("h2",{attrs:{id:"内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E9%BB%98%E8%AE%A4%E7%BB%91%E5%AE%9A"}},[s._v("默认绑定")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E9%9A%90%E5%BC%8F%E7%BB%91%E5%AE%9A"}},[s._v("隐式绑定")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E9%9A%90%E5%BC%8F%E4%B8%A2%E5%A4%B1"}},[s._v("隐式丢失")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E6%98%BE%E5%BC%8F%E7%BB%91%E5%AE%9A"}},[s._v("显式绑定")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%94%E3%80%81new%E7%BB%91%E5%AE%9A"}},[s._v("new绑定")])])]),s._v(" "),n("h3",{attrs:{id:"一、默认绑定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、默认绑定","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、默认绑定")]),s._v(" "),n("p",[s._v("首先要介绍的是最常用的函数调用类型:独立函数调用。可以把这条规则看作是无法应用其他规则时的默认规则。来自《你不知道的javascript(上卷)》")]),s._v(" "),n("p",[s._v("例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function foo() {\n\t console.log( this.a );\n}\nvar a=2; foo(); // 2\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("那么我们怎么知道这里应用了默认绑定呢?可以通过分析调用位置来看看"),n("code",[s._v("foo()")]),s._v("是如何调用的。")]),s._v(" "),n("p",[s._v("如果使用严格模式(strict mode)，那么全局对象将无法使用默认绑定，因此this会绑定到"),n("code",[s._v("undefined")]),s._v(":")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('function foo() { "use strict";\n         console.log( this.a );\n     }\nvar a=2;\nfoo(); // TypeError: this is undefined\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("这里有一个微妙但是非常重要的细节，虽然 this 的绑定规则完全取决于调用位置，但是只 有foo()运行在非strict mode下时，默认绑定才能绑定到全局对象;严格模式下与foo() 的调用位置无关:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('function foo() { console.log( this.a );\n}\nvara=2;\n(function(){ "use strict";\n         foo(); // 2\n})();\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"二、隐式绑定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、隐式绑定","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、隐式绑定")]),s._v(" "),n("p",[s._v("隐式绑定需要考虑的是调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function foo() { \n\tconsole.log( this.a );\n}\nvar obj={ \n\ta: 2,\n\tfoo: foo \n};\nobj.foo(); // 2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("对象属性引用链中只有最顶层或者说最后一层会影响调用位置。举例来说：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function foo() { \n\tconsole.log( this.a );\n}\nvar obj2={ \n\ta: 42,\n\tfoo: foo\n\t};\nvar obj1={ \n\ta: 2,\n\tobj2: obj2 \n};\nobj1.obj2.foo(); // 42\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"三、隐式丢失"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、隐式丢失","aria-hidden":"true"}},[s._v("#")]),s._v(" 三、隐式丢失")]),s._v(" "),n("p",[s._v("this 绑定问题就是被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，从而把 this 绑定到全局对象或者 undefined 上，取决于是否是严格模式。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(' function foo() { console.log( this.a );\n}\nvarobj={ a: 2,\nfoo: foo };\nvar bar = obj.foo; // 函数别名!\nvar a = "oops, global"; // a 是全局对象的属性 bar(); // "oops, global"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("另一种形式")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function box(fn){\n\tvar a='2';\n\tfn();\n}\nvar a=1;\nfunction b(){\n\tconsole.log(this.a);\n}\nbox(b);\n\\\\ 1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var boss1 = {\n  name: 'boss1',\n  returnThis () {\n    return this\n  }\n}\nvar boss2 = {\n  name: 'boss2',\n  returnThis () {\n    return boss1.returnThis()\n  }\n}\nvar boss3 = {\n  name: 'boss3',\n  returnThis () {\n    var returnThis = boss1.returnThis\n    return returnThis()\n  }\n}\n\nboss1.returnThis() // boss1\nboss2.returnThis() // ? boss1\nboss3.returnThis() // window\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h3",{attrs:{id:"四、显式绑定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、显式绑定","aria-hidden":"true"}},[s._v("#")]),s._v(" 四、显式绑定")]),s._v(" "),n("p",[s._v("可以直接指定this的绑定对象，我们称之为显式绑定。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function foo() { \n\tconsole.log( this.a );\n }\n var obj={ \n\ta:2\n };\n foo.call( obj ); // 2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("通过 foo.call(..)，我们可以在调用 foo 时强制把它的 this 绑定到 obj 上。")]),s._v(" "),n("h3",{attrs:{id:"五、new绑定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、new绑定","aria-hidden":"true"}},[s._v("#")]),s._v(" 五、new绑定")]),s._v(" "),n("p",[s._v("使用 new 来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。")]),s._v(" "),n("ol",[n("li",[s._v("创建(或者说构造)一个全新的对象。")]),s._v(" "),n("li",[s._v("这个新对象会被执行[[原型]]连接。")]),s._v(" "),n("li",[s._v("这个新对象会绑定到函数调用的this。")]),s._v(" "),n("li",[s._v("如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function foo(a) { this.a = a;\n}\nvar bar = new foo(2); console.log( bar.a ); // 2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("使用 new 来调用 foo(..) 时，我们会构造一个新对象并把它绑定到 foo(..) 调用中的 this 上。")]),s._v(" "),n("h3",{attrs:{id:"六、总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、总结","aria-hidden":"true"}},[s._v("#")]),s._v(" 六、总结")]),s._v(" "),n("p",[s._v("可以根据优先级来判断函数在某个调用位置应用的是哪条规则。可以按照下面的顺序来进行判断:")]),s._v(" "),n("ol",[n("li",[s._v("函数是否在new中调用(new绑定)?如果是的话this绑定的是新创建的对象。 var bar=new foo();")]),s._v(" "),n("li",[s._v("函数是否通过call、apply（显示绑定）或硬绑定调用？如果是的话，this绑定的是指定的对象。var bar=foo.call(obj2);")]),s._v(" "),n("li",[s._v("函数是否在某个上下文对象中调用(隐式绑定)？如果是的话，this绑定的是那个上下文对象。")]),s._v(" "),n("li",[s._v("如果都不是的话。使用默认绑定。如果在严格模式下，就绑定到undefined，否则绑定到全局对象。var bar=foo();")])]),s._v(" "),n("h3",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ul",[n("li",[s._v("《你不知道的javascript(上)》")]),s._v(" "),n("li",[n("a",{attrs:{href:"http://www.jianshu.com/p/fcbc21a2c507",target:"_blank",rel:"noopener noreferrer"}},[s._v("this与对象原型 第二章：this豁然开朗"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"http://www.jianshu.com/p/11d84af237c0",target:"_blank",rel:"noopener noreferrer"}},[s._v("this与对象原型 第一章：this是什么？"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"http://www.cnblogs.com/TomXu/archive/2012/01/17/2310479.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("深入理解JavaScript系列（13）：This? Yes,this!"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/entry/5a29df626fb9a045211e9c2a?utm_source=gold_browser_extension",target:"_blank",rel:"noopener noreferrer"}},[s._v("全面理解 JavaScript 中的 this"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/b_SojysoGA_Z7WLJrilizg",target:"_blank",rel:"noopener noreferrer"}},[s._v("JavaScript This 的六道坎"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/YvetteLau/Blog/issues/6",target:"_blank",rel:"noopener noreferrer"}},[s._v(" Open嗨，你真的懂this吗？"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"联系作者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),n("div",{attrs:{align:"center"}},[n("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),n("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=e.exports}}]);