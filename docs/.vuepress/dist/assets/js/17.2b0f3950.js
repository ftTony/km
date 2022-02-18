(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{244:function(a,s,e){"use strict";e.r(s);var t=e(4),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"架构型设计模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#架构型设计模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 架构型设计模式")]),a._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("p",[a._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),a._v(" "),e("h2",{attrs:{id:"内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E5%90%8C%E6%AD%A5%E6%A8%A1%E5%9D%97%E6%A8%A1%E5%BC%8F"}},[a._v("同步模块模式")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E5%BC%82%E6%AD%A5%E6%A8%A1%E5%9D%97%E6%A8%A1%E5%BC%8F"}},[a._v("异步模块模式")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%B8%89%E3%80%81widget-%E6%A8%A1%E5%BC%8F"}},[a._v("Widget 模式")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E5%9B%9B%E3%80%81mvc-%E6%A8%A1%E5%BC%8F"}},[a._v("MVC 模式")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%94%E3%80%81mvp-%E6%A8%A1%E5%BC%8F"}},[a._v("MVP 模式")])]),a._v(" "),e("li",[e("a",{attrs:{href:"#%E5%85%AD%E3%80%81mvvm-%E6%A8%A1%E5%BC%8F"}},[a._v("MVVM 模式")])])]),a._v(" "),e("h3",{attrs:{id:"一、同步模块模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、同步模块模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、同步模块模式")]),a._v(" "),e("h4",{attrs:{id:"_1-1-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.1 介绍")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("模块化：")]),a._v(" 将复杂的系统分解成高内聚、低耦合的模块，使系统开发变得可控、可维护、可扩展，提高模块的重复使用率。")]),a._v(" "),e("li",[e("strong",[a._v("同步模块模式：")]),a._v(" 请求发出去之后，无论模块是否存在，立即执行后续的逻辑，实现模块开发中对模块的立即使用。")])]),a._v(" "),e("h4",{attrs:{id:"_1-2-代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-代码","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.2 代码")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/*\n * 模块化开发就是讲复杂的系统分解为高内聚，低耦合的模块。\n * 每个工程师都可以去开发自己的模块实现复杂的系统可控，可维护，可扩展。模块相互之间可以调用\n * 要点：首先要有一个模块管理器，管理模块的创建和调度\n * 模块调动：调用分为两类，一类同步模块调用的实现，第二类是异步的实现\n */\n// 模块管理对象F\nclass F{\n    static define(str,fn){\n        let parts = str.split('.'),\n            old = this,\n            parent = this,\n            i = 0,\n            len = 0;\n        // 如果第一个模块是管理模块器，则移除\n        if(parts[0] === 'F'){\n            parts = parts.slice(1);\n        }\n        // 屏蔽对define与module模块\n        if(parts[0] === 'define' || parts[0] === 'module'){\n            return false\n        }\n\n        // 遍历路由模块并且定义每层模块\n        for()\n    }\n    // 使用模块\n    static module(){\n\n    }\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br"),e("span",{staticClass:"line-number"},[a._v("28")]),e("br"),e("span",{staticClass:"line-number"},[a._v("29")]),e("br"),e("span",{staticClass:"line-number"},[a._v("30")]),e("br"),e("span",{staticClass:"line-number"},[a._v("31")]),e("br")])]),e("h3",{attrs:{id:"二、异步模块模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、异步模块模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、异步模块模式")]),a._v(" "),e("h4",{attrs:{id:"_2-1-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.1 介绍")]),a._v(" "),e("p",[a._v("请求发出去之后，继续执行其他业务逻辑，知道模块加载完成执行后续的逻辑，实际模块开发中模块加载完成后引用。")]),a._v(" "),e("h4",{attrs:{id:"_2-2-代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-代码","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.2 代码")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("let getUrl = function (moduleName){\n    return String(moduleName).replace(/\\.js$/g,'')+'.js';\n};\nloadScript = function(src){\n\n};\nlet moduleCache = {},\n    setModule = function(moduleName,params,callback){\n\n    };\nlet loadModule = function(moduleName,callback){\n\n};\nF.module = function(url,modDeps,modCallBack){\n\n};\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br")])]),e("h3",{attrs:{id:"三、widget-模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、widget-模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、Widget 模式")]),a._v(" "),e("h4",{attrs:{id:"_3-1-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.1 介绍")]),a._v(" "),e("p",[a._v("Widget 模式就是借用 web Widget 思想将页面分解为部件，针对部件开发，最终组合为完整的页面。")]),a._v(" "),e("h3",{attrs:{id:"四、mvc-模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、mvc-模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、MVC 模式")]),a._v(" "),e("p",[a._v("MVC 模式将程序分为三个部分：模型（Model）、视图（View）、控制器（Controller）。")]),a._v(" "),e("ol",[e("li",[e("strong",[a._v("Model 模型层：")]),a._v(" 业务数据的处理和存储，数据更新后更新；")]),a._v(" "),e("li",[e("strong",[a._v("View 视图层：")]),a._v(" 人机交互接口，一般为展示给用户的界面；")]),a._v(" "),e("li",[e("strong",[a._v("Controller 控制器层：")]),a._v(" 负责连接 Model 层和 View 层，接受并处理 View 层触发的事件，并在 Model 层的数据状态变动时更新 View 层；")])]),a._v(" "),e("p",[a._v("MVC 模式的目的是"),e("strong",[a._v("通过引入 Controller 层来将 Model 层和 View 层分离")]),a._v("，分层的引入是原来大锅烩方式的改进，使得系统在可维护性和可读性上有了进步。")]),a._v(" "),e("p",[a._v("View 层通过事件通知到 Controller 层，Controller 层经过对事件的处理完成相关业务逻辑，要求 Model 层改变数据状态，Model 层再将数据更新到 View 层。示意图如下：")]),a._v(" "),e("p",[e("img",{attrs:{src:"design-pattern-mvc.jpeg",alt:"images"}})]),a._v(" "),e("h3",{attrs:{id:"五、mvp-模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、mvp-模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 五、MVP 模式")]),a._v(" "),e("p",[e("strong",[a._v("MVP")]),a._v(" 模式将程序分为三个部分：模型（Model）、视图（View）、管理层（Presenter）。")]),a._v(" "),e("ol",[e("li",[e("strong",[a._v("Model 模型层：")]),a._v(" 只负责存储数据，与 View 呈现无关，也与 UI 处理逻辑无关，发生更新也不用主动通知 View;")]),a._v(" "),e("li",[e("strong",[a._v("View 模型层：")]),a._v(" 人机交互接口，一般为展示给用户的界面；")]),a._v(" "),e("li",[e("strong",[a._v("Presenter 管理层：")]),a._v(" 负责连接 Model 层和 View 层，处理 View 层的事件，负责获取数据并将获取的数据经过处理后更新 View;")])]),a._v(" "),e("p",[a._v("MVC 模式的 View 层和 Model 层存在耦合，为了解决这个问题，MVP 模式将 View 层和 Model 层解耦，之间的交互只能通过 Presenter 层，实际上，MVP 模式的目的就是"),e("strong",[a._v("将 View 层和 Model 层完全解耦")]),a._v("，使得对 View 层的修改不会影响到 Model 层，而对 Model 层的数据改动也不会影响到 View 层。")]),a._v(" "),e("p",[e("img",{attrs:{src:"design-pattern-mvp.jpeg",alt:"images"}})]),a._v(" "),e("h3",{attrs:{id:"六、mvvm-模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、mvvm-模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 六、MVVM 模式")]),a._v(" "),e("p",[e("strong",[a._v("MVVM")]),a._v("模式将程序分为三个部分：模型（Model）、视图（View）、视图模型（View-Model）。和 MVP 模式类似，Model 层和 View 层也被隔开离开，彻底解耦，ViewModel 层相当于 Presenter 层，负责绑定 Model 层和 View 层，相比于 MVP 增加了双向绑定机制。")]),a._v(" "),e("p",[e("img",{attrs:{src:"design-pattern-mvvm.jpeg",alt:"images"}})]),a._v(" "),e("p",[a._v("MVVM 模式的特征是 ViewModel 层和 View 层采用双向绑定的形式（Binding），View 层的变动，将自动反映在 ViewModel 层，反之亦然。")]),a._v(" "),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),e("ul",[e("li",[a._v("《JavaScript 设计模式》")]),a._v(" "),e("li",[e("a",{attrs:{href:"https://www.yuque.com/wubinhp/uxiv5i/bik7rk",target:"_blank",rel:"noopener noreferrer"}},[a._v("MVC、MVP、MVVM"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"联系作者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),e("div",{attrs:{align:"center"}},[e("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),e("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=r.exports}}]);