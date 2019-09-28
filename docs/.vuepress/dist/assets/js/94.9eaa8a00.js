(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{328:function(s,n,a){"use strict";a.r(n);var e=a(2),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"函数柯理化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数柯理化","aria-hidden":"true"}},[s._v("#")]),s._v(" 函数柯理化")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),s._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E5%AE%9A%E4%B9%89"}},[s._v("定义")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E7%94%A8%E9%80%94"}},[s._v("用途")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0"}},[s._v("代码实现")])])]),s._v(" "),a("h3",{attrs:{id:"一、定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、定义","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、定义")]),s._v(" "),a("p",[s._v("函数柯里化又叫部分求值，维基百科中对柯里化 (Currying) 的定义为：")]),s._v(" "),a("blockquote",[a("p",[s._v("在数学和计算机科学中，柯里化是一种将使用多个参数的函数转换成一系列使用一个参数的函数，并且返回接受余下的参数而且返回结果的新函数的技术。")])]),s._v(" "),a("p",[s._v("例子")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nfunction add(a,b){\n    return a + b;\n}\n\n// 执行add函数，一次传入两个参数即可\nadd(1,2)    //3\n\n// 假设有一个curry函数可以做到柯里化\nvar addCurry = curry(add);\naddCurry(1)(2)  // 3\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"二、用途"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、用途","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、用途")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#21-%e5%bb%b6%e8%bf%9f%e8%ae%a1%e7%ae%97"}},[s._v("延迟计算")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#22-%e5%8a%a8%e6%80%81%e5%88%9b%e5%bb%ba%e5%87%bd%e6%95%b0"}},[s._v("动态创建函数")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#23-%e5%8f%82%e6%95%b0%e5%88%a9%e7%94%a8"}},[s._v("参数利用")])])]),s._v(" "),a("h4",{attrs:{id:"_2-1-延迟计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-延迟计算","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.1 延迟计算")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const add = (...args) => args.reduce((a,b)=> a + b);\n\nfunction currying(func){\n    const args = [];\n    return function result(...rest){\n        if(res.length === 0){\n            return func(...args);\n        }else{\n            args.push(...rest);\n            return result;\n        }\n    }\n}\n\nconst sum =currying(add);\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("上面的代码理解起来很容易，就是「用闭包把传入参数保存起来，当传入参数的数量足够执行函数时，就开始执行函数」。上面的 currying 函数是一种简化写法，判断传入的参数长度是否为 0，若为 0 执行函数，否则收集参数。")]),s._v(" "),a("h4",{attrs:{id:"_2-2-动态创建函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-动态创建函数","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.2 动态创建函数")]),s._v(" "),a("p",[s._v("有一种典型的应用情景是这样的，每次调用函数都需要进行一次判断，但其实第一次判断计算之后，后续调用并不需要再次判断，这种情况下就非常适合使用柯里化方案来处理。即第一次判断之后，动态创建一个新函数用于处理后续传入的参数，并返回这个新函数。当然也可以使用惰性函数来处理，本例最后一个方案会有所介绍。")]),s._v(" "),a("p",[s._v("我们看下面的这个例子，在 DOM 中添加事件时需要兼容现代浏览器和 IE 浏览器（IE < 9），方法就是对浏览器环境进行判断，看浏览器是否支持，简化写法如下。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function addEvent(type,el,fn,capture = false){\n    if (window.addEventListener){\n        el.addEventListener(type,fn,capture);\n    }else if(window.attachEvent){\n        el.attachEvent('on' + type,fn);\n    }\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("但是这种写法有一个问题，就是每次添加事件都会调用做一次判断，那么有没有什么办法只判断一次呢，可以利用装饰和立即调用函数表达式（IIFE）来处理。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const addEvent =(function(){\n    if(window.addEventListener){\n        return function (type,el,fn,capture){\n            el.addEventListener(type,fn,capture);\n        }\n    }\n    else if(window.attachEvent){\n        return function (type,el,fn){\n            el.attachEvent('on' + type,fn);\n        }\n    }\n})();\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("上面这种实现方案就是一种典型的柯里化应用，在第一次的"),a("code",[s._v("if...else if...")]),s._v("判断之后完成部分计算，动态创建新的函数用于处理后续传入的参数，这样做的好处就是之后调用就不需要再次计算了。")]),s._v(" "),a("p",[a("strong",[s._v("当然可以使用惰性函数来实现")]),s._v("这一功能，原理很简单，就是重写函数。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function addEvent(type,el,fn,capture=false){\n    // 重写函数\n    if(window.addEventListener){\n        addEvent = function (type,el,fn,capture){\n            el.addEventListener(type,fn,capture);\n        }\n    }\n    else if(window.attachEvent){\n        addEvent = function(type, el, fn){\n            el.attachEvent('on'+type,fn);\n        }\n    }\n\n    // 执行函数，有循环爆栈风险\n    addEvent(type,el,fn,capture);\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("第一次调用"),a("code",[s._v("addEvent")]),s._v("函数后，会进行一次环境判断，在这之后"),a("code",[s._v("addEvent")]),s._v("函数被重写，所以下次调用时就不会再次判断环境，可以说很完美了。")]),s._v(" "),a("h4",{attrs:{id:"_2-3-参数利用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-参数利用","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.3 参数利用")]),s._v(" "),a("p",[s._v("我们知道调用"),a("code",[s._v("toString()")]),s._v("可以获取每个对象的类型，但是不同对象的"),a("code",[s._v("toString()")]),s._v("有不同的实现，所以需要通过"),a("code",[s._v("Object.prototype.toString()")]),s._v("来获取"),a("code",[s._v("Object")]),s._v("上的实现，同时以"),a("code",[s._v("call() / apply()")]),s._v("的形式来调用，并传递要检查的对象作为第一个参数，例如下面这个例子。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function isArray(obj){\n    return Object.prototype.toString.call(obj) === '[object Array]';\n}\n\nfunction isNumber(obj){\n    return Object.prototype.toString.call(obj) === '[object Number]';\n}\n\nfunction isString(obj){\n    return Object.prototype.toString.call(obj) === '[object String]';\n}\n\n// Test\nisArray([1, 2, 3]); // true\nisNumber(123); // true\nisString('123'); // true\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("但是上面方案有一个问题，那就是每种类型都需要定义一个方法，这里我们可以使用 bind 来扩展，"),a("strong",[s._v("优点")]),s._v("是可以直接使用改造后的 toStr。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('const toStr = Function.prototype.call.bind(Object.prototype.toString);\n\n// 改造前\n[1,2,3].toString(); // "1,2,3"\n\'123\'.toString();\n123.toString();\nObject(123).toString(); // "123"\n\n// 改造后\ntoStr([1, 2, 3]); \t// "[object Array]"\ntoStr(\'123\'); \t\t// "[object String]"\ntoStr(123); \t\t// "[object Number]"\ntoStr(Object(123)); // "[object Number]"\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("上面例子首先使用"),a("code",[s._v("Function.prototype.call")]),s._v("函数指定一个"),a("code",[s._v("this")]),s._v("值，然后"),a("code",[s._v(".bind")]),s._v("返回一个新的函数，始终将 "),a("code",[s._v("Object.prototype.toString")]),s._v("设置为传入参数，其实等价于"),a("code",[s._v("Object.prototype.toString.call()")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"三、代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、代码实现","aria-hidden":"true"}},[s._v("#")]),s._v(" 三、代码实现")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#31-es5%e5%ae%9e%e7%8e%b0"}},[s._v("es5 实现")])]),s._v(" "),a("li",[a("a",{attrs:{href:"#32-es6%e5%ae%9e%e7%8e%b0"}},[s._v("es6 实现")])])]),s._v(" "),a("h3",{attrs:{id:"_3-1-es5-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-es5-实现","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1 es5 实现")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function curry(fn,args,holes){\n    var length = fn.length;\n\n    args = args || [];\n\n    holes = holes || [];\n\n    return function(){\n\n        var _args = args.slice(0),\n            _holes = holes.slice(0),\n            argsLen = args.length,\n            holesLen = holes.length,\n            arg,i,index=0;\n\n        for (i=0;i<arguments.length;i++){\n            arg = arguments[i];\n            // 处理类似 fn(1,_,_,4)(_,3) 这种情况，index需要指向holes\n            _args.push(arg);\n        }\n        if(_args.length<length){\n            return curry.call(this,fn,_args);\n        }else{\n            return fn.apply(this,_args);\n        }\n    }\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h3",{attrs:{id:"_3-2-es6-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-es6-实现","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.2 es6 实现")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nconst currying = fn => judge = (...args) => args.length >= fn.length ? fn(...args) : (...arg) => judge(...args,...arg);\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/42",target:"_blank",rel:"noopener noreferrer"}},[s._v("JavaScript 专题之函数柯里化"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://muyiy.vip/blog/6/6.2.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("深入高阶函数应用之柯里化"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);n.default=t.exports}}]);