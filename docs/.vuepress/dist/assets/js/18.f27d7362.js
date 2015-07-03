(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{239:function(s,a,t){"use strict";t.r(a);var n=t(13),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"行为型设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行为型设计模式"}},[s._v("#")]),s._v(" 行为型设计模式")]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),s._v(" "),t("h2",{attrs:{id:"内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E6%A8%A1%E6%9D%BF%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F"}},[s._v("模板方法模式")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F"}},[s._v("观察者模式")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F"}},[s._v("状态模式")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F"}},[s._v("策略模式")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E8%81%8C%E8%B4%A3%E9%93%BE%E6%A8%A1%E5%BC%8F"}},[s._v("职责链模式")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%85%AD%E3%80%81%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F"}},[s._v("命令模式")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%83%E3%80%81%E8%AE%BF%E9%97%AE%E8%80%85%E6%A8%A1%E5%BC%8F"}},[s._v("访问者模式")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%85%AB%E3%80%81%E4%B8%AD%E4%BB%8B%E8%80%85%E6%A8%A1%E5%BC%8F"}},[s._v("中介者模式")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B9%9D%E3%80%81%E5%A4%87%E5%BF%98%E5%BD%95%E6%A8%A1%E5%BC%8F"}},[s._v("备忘录模式")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%8D%81%E3%80%81%E8%A7%A3%E9%87%8A%E5%99%A8%E6%A8%A1%E5%BC%8F"}},[s._v("解释器模式")])])]),s._v(" "),t("h3",{attrs:{id:"一、模板方法模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、模板方法模式"}},[s._v("#")]),s._v(" 一、模板方法模式")]),s._v(" "),t("h4",{attrs:{id:"_1-1-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-介绍"}},[s._v("#")]),s._v(" 1.1 介绍")]),s._v(" "),t("p",[s._v("模板方法模式由两部分结构组成，第一部分是抽象父类，第二部分是具体的实现子类。通常在抽象父类中封装了子类的算法框架，包括实现一些公共方法和封装子类中所有方法的执行顺序。子类通过继承这个抽象类，也继承了整个算法结构，并且可以选择重写父类的方法。")]),s._v(" "),t("h4",{attrs:{id:"_1-2-代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-代码"}},[s._v("#")]),s._v(" 1.2 代码")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("class Beverage{\n    constructor({brewDrink,addCondiment}){\n        this.brewDrink = brewDrink\n        this.addCondiment = addCondiment\n    }\n    /* 烧开水，共用方法 */\n    boilWater(){\n        console.log('水已经煮沸===共用')\n    }\n    /* 倒杯子里，共用方法 */\n    pourCup(){\n        console.log('倒进杯子里===共用')\n    }\n    /* 模板方法 */\n    init(){\n        this.boilWater()\n        this.brewDrink()\n        this.pourCup()\n        this.addCondiment()\n    }\n}\n/* 咖啡 */\nconst coffee = new Beverage({\n    /* 冲泡咖啡，覆盖抽象方法 */\n    brewDrink:function(){\n        console.log('冲泡咖啡')\n    },\n    /* 加调味品，覆盖抽象方法 */\n    addCondiment:function(){\n        console.log('加点奶和糖')\n    }\n})\ncoffee.init()\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br")])]),t("h4",{attrs:{id:"_1-3-优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-优点"}},[s._v("#")]),s._v(" 1.3 优点")]),s._v(" "),t("ul",[t("li",[s._v("提取了公共代码部分，易于维护")])]),s._v(" "),t("h4",{attrs:{id:"_1-4-缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-缺点"}},[s._v("#")]),s._v(" 1.4 缺点")]),s._v(" "),t("ul",[t("li",[s._v("拉回了系统复杂度，主要是增加了的抽象类和类间联系")])]),s._v(" "),t("h4",{attrs:{id:"_1-5-场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-场景"}},[s._v("#")]),s._v(" 1.5 场景")]),s._v(" "),t("ul",[t("li",[s._v("一次性实现一个算法的就变的部分，并将可变的行为留给子类来实现")]),s._v(" "),t("li",[s._v("子类中公共的行为应被提取出来并集中到一个公共类中避免代码重复")])]),s._v(" "),t("h3",{attrs:{id:"二、观察者模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、观察者模式"}},[s._v("#")]),s._v(" 二、观察者模式")]),s._v(" "),t("p",[s._v("参考"),t("RouterLink",{attrs:{to:"/cs/design-pattern-subscription.html"}},[s._v("观察者模式和发布订阅模式的区别")])],1),s._v(" "),t("h3",{attrs:{id:"三、状态模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、状态模式"}},[s._v("#")]),s._v(" 三、状态模式")]),s._v(" "),t("h4",{attrs:{id:"_3-1-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-介绍"}},[s._v("#")]),s._v(" 3.1 介绍")]),s._v(" "),t("p",[s._v("允许一个对象在其内部状态改变的时候改变它的行为，对象看起来似乎修改了它的类")]),s._v(" "),t("h4",{attrs:{id:"_3-2-代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-代码"}},[s._v("#")]),s._v(" 3.2 代码")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_3-3-优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-优点"}},[s._v("#")]),s._v(" 3.3 优点")]),s._v(" "),t("h4",{attrs:{id:"_3-4-缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-缺点"}},[s._v("#")]),s._v(" 3.4 缺点")]),s._v(" "),t("h4",{attrs:{id:"_3-5-场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-场景"}},[s._v("#")]),s._v(" 3.5 场景")]),s._v(" "),t("ul",[t("li",[s._v("一个对象的行为取决于它的状态，并且它必须在运行时刻根据状态改变它的行为")]),s._v(" "),t("li",[s._v("一个操作中含有大量的分支语句，而且这些分支语句依赖于该对象的状态")])]),s._v(" "),t("h3",{attrs:{id:"四、策略模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、策略模式"}},[s._v("#")]),s._v(" 四、策略模式")]),s._v(" "),t("h4",{attrs:{id:"_4-1-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-介绍"}},[s._v("#")]),s._v(" 4.1 介绍")]),s._v(" "),t("p",[s._v("定义一系列的算法，把它们一个个封装起来，并且使它们可以互相替换")]),s._v(" "),t("h4",{attrs:{id:"_4-2-代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-代码"}},[s._v("#")]),s._v(" 4.2 代码")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<html>\n<head>\n    <title>策略模式-校验表单</title>\n    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">\n</head>\n<body>\n    <form id = "registerForm" method="post" action="http://xxxx.com/api/register">\n        用户名：<input type="text" name="userName">\n        密码：<input type="text" name="password">\n        手机号码：<input type="text" name="phoneNumber">\n        <button type="submit">提交</button>\n    </form>\n    <script type="text/javascript">\n        // 策略对象\n        const strategies = {\n            isNoEmpty: function(value,errorMsg){\n                if(value === \'\'){\n                    return errorMsg;\n                }\n            },\n            isNoSpace: function(value,errorMsg){\n                if(value.trim() === \'\'){\n                    return errorMsg;\n                }\n            },\n            minLength: function(value,length,errorMsg){\n                if(value.trim().length < length){\n                    return errorMsg;\n                }\n            },\n            maxLength: function(value,length,errorMsg){\n                if(value.length>length){\n                    return errorMsg;\n                }\n            },\n            isMobile:function(value,errorMsg){\n                if (!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[7]|18[0|1|2|3|5|6|7|8|9])\\d{8}$/.test(value)) {\n                    return errorMsg;\n                }\n            }\n        }\n\n        // 验证类\n        class Validator{\n            constructor(){\n                this.cache = []\n            }\n        }\n    <\/script>\n</body>\n</html>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br")])]),t("h4",{attrs:{id:"_4-3-优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-优点"}},[s._v("#")]),s._v(" 4.3 优点")]),s._v(" "),t("ul",[t("li",[s._v("利用组合、委托、多态等技术和思想，可以有效的避免多重条件选择语句")]),s._v(" "),t("li",[s._v("提供了对开放-封闭原则的完美支持，将算法封装在独立的 strategy 中，使得它们易于切换，理解，易于扩展")]),s._v(" "),t("li",[s._v("利用组合和委托来让 Context 拥有执行算法的能力，这也是继承的一种更轻便的代替方案")])]),s._v(" "),t("h4",{attrs:{id:"_4-4-缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-缺点"}},[s._v("#")]),s._v(" 4.4 缺点")]),s._v(" "),t("ul",[t("li",[s._v("会在程序中增加许多策略类或者策略对象")]),s._v(" "),t("li",[s._v("要使用策略模式，必须了解所有的 strategy，必须了解各个 strategy 之间的不同点，这样才选择一个合适的 strategy")])]),s._v(" "),t("h4",{attrs:{id:"_4-5-场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-场景"}},[s._v("#")]),s._v(" 4.5 场景")]),s._v(" "),t("ul",[t("li",[s._v("如果在一个系统里面有许多类，它们之间的区别仅在于它们的行为，那么使用策略模式可以动态地让一个对象在许多行为中选择一种行为。")]),s._v(" "),t("li",[s._v("一个系统需要动态地在几种算法中选择一种。")]),s._v(" "),t("li",[s._v("表单验证")])]),s._v(" "),t("h3",{attrs:{id:"五、职责链模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、职责链模式"}},[s._v("#")]),s._v(" 五、职责链模式")]),s._v(" "),t("h4",{attrs:{id:"_5-1-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-介绍"}},[s._v("#")]),s._v(" 5.1 介绍")]),s._v(" "),t("p",[s._v("使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系，将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止")]),s._v(" "),t("h4",{attrs:{id:"_5-2-代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-代码"}},[s._v("#")]),s._v(" 5.2 代码")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("//  请假审批，需要组长审批、经理审批、总监审批\nclass Action{\n    constructor(name){\n        this.name = name\n        this.nextAction = null\n    }\n    setNextAction(action){\n        this.nextAction = action\n    }\n    handle(){\n        console.log(`${this.name} 审批`)\n        if(this.nextAction != null){\n            this.nextAction.handle()\n        }\n    }\n}\n\nlet a1 = new Action('组长')\nlet a2 = new Action('经理')\nlet a3 = new Action('总监')\na1.setNextAction(a2)\na2.setNextAction(a3)\na1.handle()\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("h4",{attrs:{id:"_5-3-优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-优点"}},[s._v("#")]),s._v(" 5.3 优点")]),s._v(" "),t("ul",[t("li",[s._v("降低耦合度。它将请求的发送者和接收者解耦。")]),s._v(" "),t("li",[s._v("简化了对象。使得对象不需要知道链的结构")]),s._v(" "),t("li",[s._v("增强给对象指派职责的灵活性。通过改变链内的成员或者调动它们的次序，允许动态地新增或者删除责任")]),s._v(" "),t("li",[s._v("增加新的请求处理类很方便。")])]),s._v(" "),t("h4",{attrs:{id:"_5-4-缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-缺点"}},[s._v("#")]),s._v(" 5.4 缺点")]),s._v(" "),t("ul",[t("li",[s._v("不能保证某个请求一定会被链中的节点处理，")]),s._v(" "),t("li",[s._v("使程序中多了很多节点对象，可能再一次请求的过程中，大部分的节点并没有起到实质性的作用。他们的作用仅仅是让请求传递下去，从性能方面考虑，要避免过长的职责链到来的性能损耗。")])]),s._v(" "),t("h4",{attrs:{id:"_5-5-场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-场景"}},[s._v("#")]),s._v(" 5.5 场景")]),s._v(" "),t("ul",[t("li",[s._v("JS 中的事件冒泡")]),s._v(" "),t("li",[s._v("作用域链")]),s._v(" "),t("li",[s._v("原型链")])]),s._v(" "),t("h3",{attrs:{id:"六、命令模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、命令模式"}},[s._v("#")]),s._v(" 六、命令模式")]),s._v(" "),t("h4",{attrs:{id:"_6-1-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-介绍"}},[s._v("#")]),s._v(" 6.1 介绍")]),s._v(" "),t("h4",{attrs:{id:"_6-2-代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-代码"}},[s._v("#")]),s._v(" 6.2 代码")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_6-3-优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-优点"}},[s._v("#")]),s._v(" 6.3 优点")]),s._v(" "),t("h4",{attrs:{id:"_6-4-缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-缺点"}},[s._v("#")]),s._v(" 6.4 缺点")]),s._v(" "),t("h3",{attrs:{id:"七、访问者模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、访问者模式"}},[s._v("#")]),s._v(" 七、访问者模式")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"八、中介者模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、中介者模式"}},[s._v("#")]),s._v(" 八、中介者模式")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"九、备忘录模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#九、备忘录模式"}},[s._v("#")]),s._v(" 九、备忘录模式")]),s._v(" "),t("h4",{attrs:{id:"_9-1-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-介绍"}},[s._v("#")]),s._v(" 9.1 介绍")]),s._v(" "),t("h4",{attrs:{id:"_9-2-代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-代码"}},[s._v("#")]),s._v(" 9.2 代码")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_9-3-优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-优点"}},[s._v("#")]),s._v(" 9.3 优点")]),s._v(" "),t("h4",{attrs:{id:"_9-4-缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-缺点"}},[s._v("#")]),s._v(" 9.4 缺点")]),s._v(" "),t("h3",{attrs:{id:"十、解释器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十、解释器模式"}},[s._v("#")]),s._v(" 十、解释器模式")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[s._v("《JavaScript 设计模式》")])]),s._v(" "),t("h2",{attrs:{id:"联系作者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),t("div",{attrs:{align:"center"}},[t("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=r.exports}}]);