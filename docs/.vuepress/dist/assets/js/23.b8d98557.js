(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{243:function(s,n,t){"use strict";t.r(n);var a=t(13),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"观察者模式和发布订阅模式的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式和发布订阅模式的区别"}},[s._v("#")]),s._v(" 观察者模式和发布订阅模式的区别")]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),s._v(" "),t("h2",{attrs:{id:"内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F"}},[s._v("观察者模式")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E8%AE%A2%E9%98%85-%E5%8F%91%E5%B8%83%E6%A8%A1%E5%BC%8F"}},[s._v("订阅-发布模式")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F%E4%B8%8E%E8%AE%A2%E9%98%85-%E5%8F%91%E5%B8%83%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%8C%BA%E5%88%AB"}},[s._v("观察者模式与订阅-发布模式的区别")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F%E4%B8%8E%E8%AE%A2%E9%98%85-%E5%8F%91%E5%B8%83%E6%A8%A1%E5%BC%8F%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0"}},[s._v("观察者模式与订阅-发布模式代码实现")])])]),s._v(" "),t("h3",{attrs:{id:"一、观察者模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、观察者模式"}},[s._v("#")]),s._v(" 一、观察者模式")]),s._v(" "),t("p",[s._v("观察者模式定义了对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知，并自动更新。观察者模式属于行为型模式，行为型模式关注的是对象之间的通讯；观察者模式就是观察都和被观察者之间的通讯。")]),s._v(" "),t("p",[s._v("观察者模式有一个别名叫“发布-订阅模式”，或者说是“订阅-发布模式”，订阅者和订阅目标是联系在一起的，当订阅目标发生改变时，逐个通知订阅者。我们可以用报纸期刊的订阅来形象的说明，当你订阅了一份报纸，每天都会有一份最新的报纸送到你手上，有多少人订阅报纸，报社就会发多少份报纸，报社和订报纸的客户就是上面文章开头所说的“一对多”的依赖关系。")]),s._v(" "),t("h3",{attrs:{id:"二、订阅-发布模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、订阅-发布模式"}},[s._v("#")]),s._v(" 二、订阅-发布模式")]),s._v(" "),t("p",[s._v("其实 24 种基本的设计模式中并没有发布订阅模式，他是只观察者模式的一个别称。")]),s._v(" "),t("p",[s._v("但是经过时间的沉淀，似乎他已经强大了起来，已经独立观察者模式，成为另外一种不同的设计模式。")]),s._v(" "),t("p",[s._v("在现在的发布订阅模式中，称为发布者的消息发送者不会将消息直接发送给订阅者，这意味着发布者和订阅者不知道彼此的存在。在发布者和订阅者之间存在第三个组件，称为高度中心或事件通道，它维持着发布者和订阅者之间的联系，过滤所有发布者传入的消息并相应地分发它们给订阅者。")]),s._v(" "),t("p",[s._v("举一个例子，你在微博上关注了 A，同时其他很多人也关注了 A，那么当 A 发布动态的时候，微博就会为你们推送这条动态。A 就是发布者，你是订阅者，微博就是调度中心，你和 A 是没有直接的消息往来的，全是通过微博来协调的。")]),s._v(" "),t("h3",{attrs:{id:"三、观察者模式与订阅-发布模式的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、观察者模式与订阅-发布模式的区别"}},[s._v("#")]),s._v(" 三、观察者模式与订阅-发布模式的区别")]),s._v(" "),t("p",[t("img",{attrs:{src:"design-pattern-subscription.png",alt:"images"}})]),s._v(" "),t("p",[s._v("两种模式之间的差异")]),s._v(" "),t("ul",[t("li",[s._v("Observer 模式要求观察者必须订阅内容改变的事件，定义了一个一对多的依赖关系；")]),s._v(" "),t("li",[s._v("Publish/Subscribe 模式使用了一个"),t("code",[s._v("调度中心/事件通道")]),s._v("，这个通道介于订阅者与发布者之间；")]),s._v(" "),t("li",[s._v("观察者模式里面观察者「被迫」执行内容改变事件（subject 内容事件）；发布/订阅模式中，订阅者可以自定义事件处理程序；")]),s._v(" "),t("li",[s._v("观察者模式两个对象之间有很强的依赖关系；发布/订阅模式两个对象之间的耦合读底。")])]),s._v(" "),t("h3",{attrs:{id:"四、观察者模式与订阅-发布模式代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、观察者模式与订阅-发布模式代码实现"}},[s._v("#")]),s._v(" 四、观察者模式与订阅-发布模式代码实现")]),s._v(" "),t("h4",{attrs:{id:"_4-1-实现观察者模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-实现观察者模式"}},[s._v("#")]),s._v(" 4.1 实现观察者模式")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\n// 主题 保存状态，状态变化之后触发所有观察者对象\nclass Subject {\n    constructor(){\n        this.state = 0\n        this.observers = []\n    }\n    getState(){\n        return this.state\n    }\n    setState(state){\n        this.state = state\n        this.notifyAllObservers()\n    }\n    notifyAllObservers(){\n        this.observers.forEach(observer =>{\n            observer.update()\n        })\n    }\n    attach(observer){\n        this.observers.push(observer)\n    }\n}\n\n// 观察者\nclass Observer {\n    constructor(name,subject){\n        this.name = name\n        this.subject = subject\n        this.subject.attach(this)\n    }\n    update(){\n        console.log(`${this.name} update,state:${this.subject.getState()}`)\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br")])]),t("h4",{attrs:{id:"_4-2-实现订阅-发布模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-实现订阅-发布模式"}},[s._v("#")]),s._v(" 4.2 实现订阅-发布模式")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 定义发布/订阅类\nclass Pubsub{\n    constructor(){\n        this.topics = {};\n        this.subUid = -1;\n    }\n\n    // 发布事件\n    publish(topic,args){\n        if(!this.topics[topic]) return false;\n\n        let subscribers = this.topics[topic]\n        let len = subscribers ? subscribers.length : 0;\n\n        while (len--){\n            subscribers[len].func(topic,args);\n        }\n\n        return this;\n    }\n\n    // 订阅事件\n    subscribe(topic,func){\n        if(!this.topics[topic]) this.topics[topic] = []\n\n        let token = (++this.subUid).toString()\n        this.topics[topic].push({\n            token:token,\n            func:func\n        })\n\n        return token\n    }\n\n    // 取消订阅\n    unsubscribe(token){\n        for(let m in topics){\n            if(topics[m]){\n                for (let i = 0; i < topics[m].length; i++) {\n                    if (topics[m][i].token == token) {\n                        topics[m].splice(i, 1);\n                        return token;\n                    }\n                }\n            }\n        }\n        return this;\n    }\n}\n\nexport defaultPubsub;\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br")])]),t("h3",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/LuckyWinty/fe-weekly-questions/issues/49",target:"_blank",rel:"noopener noreferrer"}},[s._v("观察者模式 vs 发布-订阅模式，说说区别"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5af05d406fb9a07a9e4d2799",target:"_blank",rel:"noopener noreferrer"}},[s._v("不好意思，观察者模式跟发布订阅模式就是不一样"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5bb1bb616fb9a05d2b6dccfa",target:"_blank",rel:"noopener noreferrer"}},[s._v("谈谈观察者模式和发布订阅模式"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/onepixel/p/10806891.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("观察者模式与订阅发布模式的区别"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"联系作者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),t("div",{attrs:{align:"center"}},[t("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);n.default=e.exports}}]);