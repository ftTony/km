(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{428:function(s,n,e){"use strict";e.r(n);var t=e(4),a=Object(t.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#队列","aria-hidden":"true"}},[s._v("#")]),s._v(" 队列")]),s._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),s._v(" "),e("h2",{attrs:{id:"内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),e("ul",[e("li",[s._v("创建队列")])]),s._v(" "),e("h3",{attrs:{id:"一、创建队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、创建队列","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、创建队列")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("enqueue(element)")]),s._v(":向队列尾部添加一个新的项。")]),s._v(" "),e("li",[e("code",[s._v("dequeue()")]),s._v("：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。")]),s._v(" "),e("li",[e("code",[s._v("font()")]),s._v("：返回队列中第一个元素——最先被")]),s._v(" "),e("li",[e("code",[s._v("isEmpty()")]),s._v("：如果队列中不包含任何元素，返回true，否则返回false。")]),s._v(" "),e("li",[e("code",[s._v("size()")]),s._v("：返回队列包含的元素个数，与数组的length属性类似。")])]),s._v(" "),e("p",[e("strong",[s._v("ES5代码实现")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function Queue(){\n    var items = [];\n\n    this.enqueue = function(element){\n        items.push(element);\n    };\n\n    this.dequeue = function(){\n        return items.shift();\n    };\n\n    this.front = function(){\n        return items[0];\n    };\n\n    this.isEmpty = function(){\n        return items.length==0;\n    };\n\n    this.clear = function(){\n        items = [];\n    }\n\n    this.size = function(){\n        return items.length;\n    }\n\n    this.print = function(){\n        console.log(items.toString());\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br")])]),e("p",[e("strong",[s._v("ES6代码实现")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class Queue{\n    constructor(...items){\n        this.reverse = false;\n        this.queue = [...items];\n    }\n\n    enqueue(...items){\n        return this.reverse?this.queue.push(...items):this.queue.unshift(...items);\n    }\n\n    dequeue(){\n        return this.reverse ? this.queue.shift() : this.queue.pop();\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h3",{attrs:{id:"二、优先队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、优先队列","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、优先队列")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function PriorityQueue(){\n    let items = [];\n    function QueueElement(element,priority){\n        this.element = element;\n        this.priority = priority;\n    }\n\n    this.enqueue = function(element,priority){\n        let queueElement = new QueueElement(element,priority);\n\n        let added = false;\n        for(let i=0;i<items.length;i++){\n            if(queueElement.priority < items[i].priority){\n                items.splice(i,0,queueElement);\n                added = true;\n                break;\n            }\n        }\n        if(!added){\n            items.push(queueElement);\n        }\n    };\n\n    this.print = function(){\n        for(let i=0; i<items.length;i++){\n            console.log(`${items[i].element}-${items[i].priority}`);\n        }\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br")])]),e("h3",{attrs:{id:"循环队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#循环队列","aria-hidden":"true"}},[s._v("#")]),s._v(" 循环队列")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function hotPotato(nameList,num){\n\n    let queue = new Queue();\n\n    for(let i=0; i<nameList.length;i++){\n        queue.enqueue(nameList[i]);\n    }\n\n    let eliminated = '';\n    while(queue.size()>1){\n        for(let i=0;i<num;i++){\n            queue.enqueue(queue.dequeue());\n        }\n        eliminated = queue.dequeue();\n        console.log(eliminated+'在击鼓伟花游戏中被淘汰。')\n    }\n    return queue.dequeue();\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),e("ul",[e("li",[s._v("《学习JavaScript数据结构与算法》")])]),s._v(" "),e("h2",{attrs:{id:"联系作者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),e("div",{attrs:{align:"center"}},[e("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),e("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);n.default=a.exports}}]);