<<<<<<< HEAD:docs/.vuepress/dist/assets/js/18.b79e705a.js
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{297:function(s,a,n){"use strict";n.r(a);var e=n(2),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"你需要知道的依赖注入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#你需要知道的依赖注入","aria-hidden":"true"}},[s._v("#")]),s._v(" 你需要知道的依赖注入")]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),s._v(" "),n("h2",{attrs:{id:"内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E7%9A%84%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86"}},[s._v("依赖注入的前置知识")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E9%9D%9E%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E7%9A%84%E5%BC%80%E5%8F%91%E6%A8%A1%E5%BC%8F"}},[s._v("非依赖注入的开发模式")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E7%9A%84%E5%BC%80%E5%8F%91%E6%A8%A1%E5%BC%8F"}},[s._v("依赖注入的开发模式")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E7%9A%84%E5%AE%B9%E5%99%A8%E7%9A%84%E5%BC%80%E5%8F%91%E6%A8%A1%E5%BC%8F"}},[s._v("依赖注入的容器的开发模式")])])]),s._v(" "),n("h3",{attrs:{id:"一、依赖注入的前置知识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、依赖注入的前置知识","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、依赖注入的前置知识")]),s._v(" "),n("p",[s._v("要了解依赖注入，必须得先知道以下知识点。")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#11-%E4%BE%9D%E8%B5%96%E5%80%92%E7%BD%AE"}},[s._v("依赖倒置")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#12-%E6%8E%A7%E5%88%B6%E5%8F%8D%E8%BD%AC"}},[s._v("控制反转")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#13-%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5"}},[s._v("依赖注入")])])]),s._v(" "),n("h3",{attrs:{id:"_1-1-依赖倒置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-依赖倒置","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.1 依赖倒置")]),s._v(" "),n("p",[n("strong",[s._v("依赖倒置")]),s._v("（Dependency inversion principle，缩写为 DIP）是"),n("a",{attrs:{href:"https://github.com/cs-learning-record/javascript-series/blob/master/design-patterns/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F6%E5%A4%A7%E5%8E%9F%E5%88%99.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("面向对象六大基本原则"),n("OutboundLink")],1),s._v("之一。它是指一种特定的形式，使得高层次的模块不依赖于低层次的模块的实现细节，依赖关系被颠倒（反转），从而使得低层次模块依赖于高层模块的需求抽象。")]),s._v(" "),n("p",[s._v("该原则规定：")]),s._v(" "),n("ul",[n("li",[s._v("高层次的模块不应该依赖于低层次的模块，两者都应该依赖于抽象接口。")]),s._v(" "),n("li",[s._v("抽象接口不应该依赖于具体实现。而具体实现则应该依赖于抽象接口。")])]),s._v(" "),n("p",[s._v("上面这两句话很抽象，需要细细品味才能发现其中奥秘，如果暂时理解不了也没关系，下文会结合具体案例帮助大家理解。")]),s._v(" "),n("h3",{attrs:{id:"_1-2-控制反转"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-控制反转","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.2 控制反转")]),s._v(" "),n("p",[n("strong",[s._v("控制反转")]),s._v("（Inversion of Control，缩写为 IOC）是面向对象编程中的一种设计原则，用来降低计算机代码之间的耦合度。"),n("strong",[s._v("是实现依赖倒置原则的一种代码设计思路")]),s._v("。其中最常见的方式叫做依赖注入，还有一种方式叫依赖查找。")]),s._v(" "),n("h3",{attrs:{id:"_1-3-依赖注入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-依赖注入","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.3 依赖注入")]),s._v(" "),n("p",[n("strong",[s._v("依赖注入")]),s._v("（Dependency Injection，缩写为 DI）"),n("strong",[s._v("是实现控制反转的一种方式")]),s._v("。常用的依赖注入方法有3种：")]),s._v(" "),n("ul",[n("li",[s._v("接口注入")]),s._v(" "),n("li",[s._v("构造函数注入")]),s._v(" "),n("li",[s._v("属性注入")])]),s._v(" "),n("h3",{attrs:{id:"案例介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#案例介绍","aria-hidden":"true"}},[s._v("#")]),s._v(" 案例介绍")]),s._v(" "),n("p",[s._v("在了解了相关理论之后，接下来我们通过案例来理解一下依赖注入。")]),s._v(" "),n("p",[s._v("常用的后端架构可以分为 3 层：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("web层")]),s._v(" "),n("ul",[n("li",[s._v("接收前端请求，处理请求参数，匹配后端路由，调用对应的 service 层处理业务。")])])]),s._v(" "),n("li",[n("p",[s._v("service层")]),s._v(" "),n("ul",[n("li",[s._v("接收web层的参数，处理业务逻辑，如果需要读取数据，会调用database层。")])])]),s._v(" "),n("li",[n("p",[s._v("database 层")]),s._v(" "),n("ul",[n("li",[s._v("处理数据库相关的层，负责连接数据库，以及常用的增删改查方法的封装。")])])])]),s._v(" "),n("p",[s._v("接下来我们通过"),n("strong",[s._v("非依赖注入")]),s._v("，"),n("strong",[s._v("依赖注入")]),s._v("，"),n("strong",[s._v("依赖注入")]),s._v("容器这 3 种思路，搭建一个简单的后端 3 层架构。")]),s._v(" "),n("h3",{attrs:{id:"二、非依赖注入的开发模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、非依赖注入的开发模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、非依赖注入的开发模式")]),s._v(" "),n("p",[s._v("非依赖注入的开发模式很符合常规逻辑，即：web 层依赖 service 层，service 层依赖 database 层。")]),s._v(" "),n("p",[s._v("案例如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Database{\n    select(sql){\n        const mysql = require('mysql');\n        return new Promise(resolve=>{\n            // 连接数据库，并执行sql语句进行查询\n            mysql.createConnection().query(sql,(error,results,fields)=>{\n                const success=resultes.length>0?true:false;\n                resolve(success);\n            });\n        });\n    }\n}\n\nclass Service{\n    async login(username,password){\n        const db=new Database();\n        const success=await db.select(\n            `select * from user where username=${username} and password=${password}`\n        );\n        return success ? '登录成功' : '登录失败';\n    }\n}\n\nclass Web{\n    matchRouter(path){\n        switch(path){\n            case 'login':\n                const service = new Service();\n                const {username,password} = path.query;\n                return service.login(username,password);\n        }\n    }\n}\n\n// 使用web层\nconst web=new Web();\nweb.matchRouter('login');\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br")])]),n("p",[s._v("上面的代码是典型的高层模块依赖低次模块案例。web层依赖service层，servie层依赖database层。")]),s._v(" "),n("p",[s._v("非依赖注入开发模式的优缺点：")]),s._v(" "),n("ul",[n("li",[s._v("代码复杂度低，逻辑清晰，使用方便，直接new最上层的模块就行了。")]),s._v(" "),n("li",[s._v("不利于维护，如果底层（database层）修改了select方法的传参方式，上层（service层和web层）也必须同步修改调用方式。")]),s._v(" "),n("li",[s._v("不利于测试，各个模块耦合在一起，要单独测试web层是不行的，因为它内部引入了service层和database层，只能当成一个整体测试。")])]),s._v(" "),n("h3",{attrs:{id:"三、依赖注入的开发模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、依赖注入的开发模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 三、依赖注入的开发模式")]),s._v(" "),n("p",[s._v("如果把上面的案例改造成依赖注入的方式也很简单，删除内部依赖关系，将需要的依赖通过构造函数注入就行了。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Database{\n    select(sql){\n\n    }\n}\n\nclass Service{\n    constructor(db){\n\n    }\n    async login(username,password){\n\n    }\n}\n\nclass Web{\n    constructor(service){\n\n    }\n    matchRouter(path){\n        switch(path){\n            case 'login':\n\n        }\n    }\n}\n\n// 使用web层之前，必须手动创建依赖，并注入\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("p",[s._v("上面的代码可以看出，web层并不直接依赖service层，而是通过构造函数将service传进来直接用，这就实现了依赖注入的效果。")]),s._v(" "),n("p",[s._v("依赖注入开发模式的优缺点：")]),s._v(" "),n("ul",[n("li",[s._v("代码复杂度低，逻辑清晰，使用较复杂，需要手动注入依赖。")]),s._v(" "),n("li",[s._v("便于维护，代码耦合度低，各个模块互不依赖。")]),s._v(" "),n("li",[s._v("使用测试，不同模块之间可以单独的进行单元测试。")])]),s._v(" "),n("h3",{attrs:{id:"四、依赖注入的容器的开发模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、依赖注入的容器的开发模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 四、依赖注入的容器的开发模式")]),s._v(" "),n("p",[s._v("如果使用上面的安全，每一次使用都需要手动传入依赖，当依赖太多时，也会造成难以维护的问题。我们可以在一个地方统一进行依赖注入，即在一个依赖注入容器里。")]),s._v(" "),n("p",[s._v("一个简单的依赖注入容器如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// ioc.js\nexport default function createIoC(){\n    const iocMap=new Map();\n    return {\n        bind(key,callback){\n            iocMap.set(key,{callback});\n        },\n        use(key){\n            const {callback}=iocMap.get(key);\n            return callback();\n        }\n    };\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("在统一的配置文件中配置依赖关系。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// ioc-config.js\nimport createIoC from 'ioc.js';\nconst ioc = createIoC();\n\n// 手动绑定依赖关系\nioc.bind('Database',()=>{\n    return new Database();\n});\n\nioc.bind('Service',()=>{\n    const database = ioc.use('Database');\n    return new Service(database);\n});\n\nioc.bind('Web',()=>{\n    const service = ioc.use('Service');\n    return new Web(service);\n});\n\nexport default ioc;\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("使用容器注入依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import ioc from 'ioc-config.js';\n\n// 使用web层\nconst web = ioc.use('web');\nweb.matchRouter('login');\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("上面代码使用IOC窗口来进行依赖注入，优缺点如下：")]),s._v(" "),n("ul",[n("li",[s._v("代码复杂度较高，逻辑较复杂，使用方便，要什么就注入什么就行了。")]),s._v(" "),n("li",[s._v("便于维护，只需要在一个地方（ioc-config.js）定义依赖关系，这个文件可以抽离出来作为单独的配置文件，实现数据驱动。")]),s._v(" "),n("li",[s._v("便于测试，不同模式之间可以单独的进行单元测试。")])]),s._v(" "),n("h3",{attrs:{id:"五、总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、总结","aria-hidden":"true"}},[s._v("#")]),s._v(" 五、总结")]),s._v(" "),n("ul",[n("li",[s._v("依赖倒置是面向对象的基本原则。")]),s._v(" "),n("li",[s._v("控制反转是实现依赖倒置原则的一种代码设计思路。")]),s._v(" "),n("li",[s._v("依赖注入是实现控制反转的一种方式")])]),s._v(" "),n("p",[n("img",{attrs:{src:"base-ioc.jpg",alt:""}})]),s._v(" "),n("p",[s._v("本文通过非依赖注入，依赖注入，IOC 容器这 3 种开发模式来分析了依赖注入的开发方式。加深了笔者对依赖注入的理解，希望通过这个案例能让更多的同学弄懂依赖注入。")]),s._v(" "),n("h3",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://yhlben.github.io/blog/base-ioc.html#%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E7%9A%84%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86",target:"_blank",rel:"noopener noreferrer"}},[s._v("你需要知道的依赖注入"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"联系作者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),n("div",{attrs:{align:"center"}},[n("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),n("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=t.exports}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{272:function(s,a,n){"use strict";n.r(a);var e=n(2),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"你需要知道的依赖注入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#你需要知道的依赖注入","aria-hidden":"true"}},[s._v("#")]),s._v(" 你需要知道的依赖注入")]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),s._v(" "),n("h2",{attrs:{id:"内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E7%9A%84%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86"}},[s._v("依赖注入的前置知识")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E9%9D%9E%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E7%9A%84%E5%BC%80%E5%8F%91%E6%A8%A1%E5%BC%8F"}},[s._v("非依赖注入的开发模式")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E7%9A%84%E5%BC%80%E5%8F%91%E6%A8%A1%E5%BC%8F"}},[s._v("依赖注入的开发模式")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E7%9A%84%E5%AE%B9%E5%99%A8%E7%9A%84%E5%BC%80%E5%8F%91%E6%A8%A1%E5%BC%8F"}},[s._v("依赖注入的容器的开发模式")])])]),s._v(" "),n("h3",{attrs:{id:"一、依赖注入的前置知识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、依赖注入的前置知识","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、依赖注入的前置知识")]),s._v(" "),n("p",[s._v("要了解依赖注入，必须得先知道以下知识点。")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#11-%E4%BE%9D%E8%B5%96%E5%80%92%E7%BD%AE"}},[s._v("依赖倒置")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#12-%E6%8E%A7%E5%88%B6%E5%8F%8D%E8%BD%AC"}},[s._v("控制反转")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#13-%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5"}},[s._v("依赖注入")])])]),s._v(" "),n("h3",{attrs:{id:"_1-1-依赖倒置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-依赖倒置","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.1 依赖倒置")]),s._v(" "),n("p",[n("strong",[s._v("依赖倒置")]),s._v("（Dependency inversion principle，缩写为 DIP）是"),n("a",{attrs:{href:"https://github.com/cs-learning-record/javascript-series/blob/master/design-patterns/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F6%E5%A4%A7%E5%8E%9F%E5%88%99.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("面向对象六大基本原则"),n("OutboundLink")],1),s._v("之一。它是指一种特定的形式，使得高层次的模块不依赖于低层次的模块的实现细节，依赖关系被颠倒（反转），从而使得低层次模块依赖于高层模块的需求抽象。")]),s._v(" "),n("p",[s._v("该原则规定：")]),s._v(" "),n("ul",[n("li",[s._v("高层次的模块不应该依赖于低层次的模块，两者都应该依赖于抽象接口。")]),s._v(" "),n("li",[s._v("抽象接口不应该依赖于具体实现。而具体实现则应该依赖于抽象接口。")])]),s._v(" "),n("p",[s._v("上面这两句话很抽象，需要细细品味才能发现其中奥秘，如果暂时理解不了也没关系，下文会结合具体案例帮助大家理解。")]),s._v(" "),n("h3",{attrs:{id:"_1-2-控制反转"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-控制反转","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.2 控制反转")]),s._v(" "),n("p",[n("strong",[s._v("控制反转")]),s._v("（Inversion of Control，缩写为 IOC）是面向对象编程中的一种设计原则，用来降低计算机代码之间的耦合度。"),n("strong",[s._v("是实现依赖倒置原则的一种代码设计思路")]),s._v("。其中最常见的方式叫做依赖注入，还有一种方式叫依赖查找。")]),s._v(" "),n("h3",{attrs:{id:"_1-3-依赖注入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-依赖注入","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.3 依赖注入")]),s._v(" "),n("p",[n("strong",[s._v("依赖注入")]),s._v("（Dependency Injection，缩写为 DI）"),n("strong",[s._v("是实现控制反转的一种方式")]),s._v("。常用的依赖注入方法有3种：")]),s._v(" "),n("ul",[n("li",[s._v("接口注入")]),s._v(" "),n("li",[s._v("构造函数注入")]),s._v(" "),n("li",[s._v("属性注入")])]),s._v(" "),n("h3",{attrs:{id:"案例介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#案例介绍","aria-hidden":"true"}},[s._v("#")]),s._v(" 案例介绍")]),s._v(" "),n("p",[s._v("在了解了相关理论之后，接下来我们通过案例来理解一下依赖注入。")]),s._v(" "),n("p",[s._v("常用的后端架构可以分为 3 层：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("web层")]),s._v(" "),n("ul",[n("li",[s._v("接收前端请求，处理请求参数，匹配后端路由，调用对应的 service 层处理业务。")])])]),s._v(" "),n("li",[n("p",[s._v("service层")]),s._v(" "),n("ul",[n("li",[s._v("接收web层的参数，处理业务逻辑，如果需要读取数据，会调用database层。")])])]),s._v(" "),n("li",[n("p",[s._v("database 层")]),s._v(" "),n("ul",[n("li",[s._v("处理数据库相关的层，负责连接数据库，以及常用的增删改查方法的封装。")])])])]),s._v(" "),n("p",[s._v("接下来我们通过"),n("strong",[s._v("非依赖注入")]),s._v("，"),n("strong",[s._v("依赖注入")]),s._v("，"),n("strong",[s._v("依赖注入")]),s._v("容器这 3 种思路，搭建一个简单的后端 3 层架构。")]),s._v(" "),n("h3",{attrs:{id:"二、非依赖注入的开发模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、非依赖注入的开发模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、非依赖注入的开发模式")]),s._v(" "),n("p",[s._v("非依赖注入的开发模式很符合常规逻辑，即：web 层依赖 service 层，service 层依赖 database 层。")]),s._v(" "),n("p",[s._v("案例如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Database{\n    select(sql){\n        const mysql = require('mysql');\n        return new Promise(resolve=>{\n            // 连接数据库，并执行sql语句进行查询\n            mysql.createConnection().query(sql,(error,results,fields)=>{\n                const success=resultes.length>0?true:false;\n                resolve(success);\n            });\n        });\n    }\n}\n\nclass Service{\n    async login(username,password){\n        const db=new Database();\n        const success=await db.select(\n            `select * from user where username=${username} and password=${password}`\n        );\n        return success ? '登录成功' : '登录失败';\n    }\n}\n\nclass Web{\n    matchRouter(path){\n        switch(path){\n            case 'login':\n                const service = new Service();\n                const {username,password} = path.query;\n                return service.login(username,password);\n        }\n    }\n}\n\n// 使用web层\nconst web=new Web();\nweb.matchRouter('login');\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br")])]),n("p",[s._v("上面的代码是典型的高层模块依赖低次模块案例。web层依赖service层，servie层依赖database层。")]),s._v(" "),n("p",[s._v("非依赖注入开发模式的优缺点：")]),s._v(" "),n("ul",[n("li",[s._v("代码复杂度低，逻辑清晰，使用方便，直接new最上层的模块就行了。")]),s._v(" "),n("li",[s._v("不利于维护，如果底层（database层）修改了select方法的传参方式，上层（service层和web层）也必须同步修改调用方式。")]),s._v(" "),n("li",[s._v("不利于测试，各个模块耦合在一起，要单独测试web层是不行的，因为它内部引入了service层和database层，只能当成一个整体测试。")])]),s._v(" "),n("h3",{attrs:{id:"三、依赖注入的开发模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、依赖注入的开发模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 三、依赖注入的开发模式")]),s._v(" "),n("p",[s._v("如果把上面的案例改造成依赖注入的方式也很简单，删除内部依赖关系，将需要的依赖通过构造函数注入就行了。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Database{\n    select(sql){\n\n    }\n}\n\nclass Service{\n    constructor(db){\n\n    }\n    async login(username,password){\n\n    }\n}\n\nclass Web{\n    constructor(service){\n\n    }\n    matchRouter(path){\n        switch(path){\n            case 'login':\n\n        }\n    }\n}\n\n// 使用web层之前，必须手动创建依赖，并注入\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("p",[s._v("上面的代码可以看出，web层并不直接依赖service层，而是通过构造函数将service传进来直接用，这就实现了依赖注入的效果。")]),s._v(" "),n("p",[s._v("依赖注入开发模式的优缺点：")]),s._v(" "),n("ul",[n("li",[s._v("代码复杂度低，逻辑清晰，使用较复杂，需要手动注入依赖。")]),s._v(" "),n("li",[s._v("便于维护，代码耦合度低，各个模块互不依赖。")]),s._v(" "),n("li",[s._v("使用测试，不同模块之间可以单独的进行单元测试。")])]),s._v(" "),n("h3",{attrs:{id:"四、依赖注入的容器的开发模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、依赖注入的容器的开发模式","aria-hidden":"true"}},[s._v("#")]),s._v(" 四、依赖注入的容器的开发模式")]),s._v(" "),n("p",[s._v("如果使用上面的安全，每一次使用都需要手动传入依赖，当依赖太多时，也会造成难以维护的问题。我们可以在一个地方统一进行依赖注入，即在一个依赖注入容器里。")]),s._v(" "),n("p",[s._v("一个简单的依赖注入容器如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// ioc.js\nexport default function createIoC(){\n    const iocMap=new Map();\n    return {\n        bind(key,callback){\n            iocMap.set(key,{callback});\n        },\n        use(key){\n            const {callback}=iocMap.get(key);\n            return callback();\n        }\n    };\n}\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("在统一的配置文件中配置依赖关系。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// ioc-config.js\nimport createIoC from 'ioc.js';\nconst ioc = createIoC();\n\n// 手动绑定依赖关系\nioc.bind('Database',()=>{\n    return new Database();\n});\n\nioc.bind('Service',()=>{\n    const database = ioc.use('Database');\n    return new Service(database);\n});\n\nioc.bind('Web',()=>{\n    const service = ioc.use('Service');\n    return new Web(service);\n});\n\nexport default ioc;\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("使用容器注入依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import ioc from 'ioc-config.js';\n\n// 使用web层\nconst web = ioc.use('web');\nweb.matchRouter('login');\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("上面代码使用IOC窗口来进行依赖注入，优缺点如下：")]),s._v(" "),n("ul",[n("li",[s._v("代码复杂度较高，逻辑较复杂，使用方便，要什么就注入什么就行了。")]),s._v(" "),n("li",[s._v("便于维护，只需要在一个地方（ioc-config.js）定义依赖关系，这个文件可以抽离出来作为单独的配置文件，实现数据驱动。")]),s._v(" "),n("li",[s._v("便于测试，不同模式之间可以单独的进行单元测试。")])]),s._v(" "),n("h3",{attrs:{id:"五、总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、总结","aria-hidden":"true"}},[s._v("#")]),s._v(" 五、总结")]),s._v(" "),n("ul",[n("li",[s._v("依赖倒置是面向对象的基本原则。")]),s._v(" "),n("li",[s._v("控制反转是实现依赖倒置原则的一种代码设计思路。")]),s._v(" "),n("li",[s._v("依赖注入是实现控制反转的一种方式")])]),s._v(" "),n("p",[n("img",{attrs:{src:"base-ioc.jpg",alt:""}})]),s._v(" "),n("p",[s._v("本文通过非依赖注入，依赖注入，IOC 容器这 3 种开发模式来分析了依赖注入的开发方式。加深了笔者对依赖注入的理解，希望通过这个案例能让更多的同学弄懂依赖注入。")]),s._v(" "),n("h3",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://yhlben.github.io/blog/base-ioc.html#%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%E7%9A%84%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86",target:"_blank",rel:"noopener noreferrer"}},[s._v("你需要知道的依赖注入"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"联系作者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),n("div",{attrs:{align:"center"}},[n("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),n("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=t.exports}}]);
>>>>>>> 'es6内容添加':docs/.vuepress/dist/assets/js/18.839833b0.js
