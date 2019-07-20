(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{380:function(a,t,s){"use strict";s.r(t);var r=s(2),n=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"javascript-执行过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-执行过程","aria-hidden":"true"}},[a._v("#")]),a._v(" javascript 执行过程")]),a._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),s("p",[a._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),a._v(" "),s("h2",{attrs:{id:"内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%80%E6%A6%82%E8%BF%B0"}},[a._v("概述")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%8CJavaScript%E5%BC%95%E6%93%8E"}},[a._v("JavaScript引擎")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%89Runtime(%E8%BF%90%E8%A1%8C%E6%97%B6)"}},[a._v("Runtime(运行时)")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E5%9B%9B%E8%B0%83%E7%94%A8%E6%A0%88"}},[a._v("调用栈")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%94%E5%B9%B6%E5%8F%91%E4%B8%8E%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF"}},[a._v("并发与事件循环")])])]),a._v(" "),s("h3",{attrs:{id:"一、概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、概述","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、概述")]),a._v(" "),s("p",[a._v("几乎每个人都已经听说过V8引擎，大多数人都知道JavaScript是单线程的，或者它使用的是回调队列。")]),a._v(" "),s("p",[a._v("在本文中，我们将详细介绍这些概念，并解释JavaScript实现如何运行。通过了解这些细节，你将能够适当地利用所提供的API来编写更好的、非阻塞的应用程序。")]),a._v(" "),s("p",[a._v("如果您对JavaScript还比较陌生，那么本文将帮助您理解为什么JavaScript与其他语言比如此“怪异”。")]),a._v(" "),s("p",[a._v("如果你是一个有经验的JavaScript开发人员，希望它能让您对每天使用JavaScript运行时的实际工作方式有一些新的见解。")]),a._v(" "),s("h3",{attrs:{id:"二、javascript引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、javascript引擎","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、JavaScript引擎")]),a._v(" "),s("p",[a._v("JavaScript引擎的一个流行示例是Google的V8引擎。例如，在Chrome和Node.js中使用V8引擎，下面是一个非常简化的视图：")]),a._v(" "),s("p",[s("img",{attrs:{src:"run01.png",alt:""}})]),a._v(" "),s("p",[a._v("V8引擎由两个主要部件组成:")]),a._v(" "),s("ul",[s("li",[a._v("emory Heap(内存堆)——内存分配地址的地方")]),a._v(" "),s("li",[a._v("Call Stack(调用堆栈)——代码执行的地方")])]),a._v(" "),s("h3",{attrs:{id:"三、runtime-运行时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、runtime-运行时","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、Runtime(运行时)")]),a._v(" "),s("p",[a._v("有些浏览器的API经常被使用到（比如说：setTimeout），但是，这些API却不是引擎提供的。那么，他们是从哪儿来的呢？事实上这里面实际情况有点复杂。")]),a._v(" "),s("p",[s("img",{attrs:{src:"run02.png",alt:""}})]),a._v(" "),s("p",[a._v("所以说我们还有很多引擎之外的API，我们把这些称为浏览器提供API称为Web API，比如说DOM、AJAX、setTimeout等等。")]),a._v(" "),s("p",[a._v("然后我们还拥有如此流行的事件循环和回调队列。")]),a._v(" "),s("h3",{attrs:{id:"四、调用栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、调用栈","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、调用栈")]),a._v(" "),s("p",[a._v("JavaScript是一种单线程语言，这意味着它只有一个调用堆栈。因此，它一次只能做一件事。")]),a._v(" "),s("p",[a._v("调用栈是一种数据结构，它记录了我们在程序中的位置。如果我们运行到一个函数，它就会将其旋转到栈顶，当从这个函数返回的时候，就会将这个函数从栈顶弹出，这就是调用栈做的事情。")]),a._v(" "),s("p",[a._v("来个例子：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("function multiply(x,y){\n    return x * y;\n}\nfunction printSquare(x){\n    var s = multiply(x,x);\n    console.log(s);\n}\n\nprintSquare(5);\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("p",[a._v("当程序开始执行的时候，调用栈是空的，然后，步骤如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"run04.png",alt:""}})]),a._v(" "),s("p",[a._v("每一个进入调用栈的都称为调用帧。")]),a._v(" "),s("p",[a._v("这能清楚的知道当异常发生的时候堆栈追踪是怎么被构造的，堆栈的状态是如何的，让我们看一下下面的代码：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("function foo(){\n    throw new Error('SessionStack will help you resolve crashes');\n}\nfunction bar(){\n    foo();\n}\nfunction start(){\n    bar();\n}\nstart();\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("p",[a._v("如果这发生在Chrome里（假设这段代码实在一个名为foo.js的文件中），那么将会生成以下的堆栈追踪：")]),a._v(" "),s("p",[s("img",{attrs:{src:"run03.png",alt:""}})]),a._v(" "),s("p",[a._v("“堆栈溢出”，当你达到调用栈最大的大小的时候就会发生这种情况，而且这相当容易发生，特别是在你写递归的时候却没有全方位的测试它。我们来看看下面的代码：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("function foo(){\n    foo();\n}\nfoo();\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("当引擎开始执行这段代码时，它首先调用函数“foo”。然而，这个函数是递归的，并且在没有任何终止条件的情况下开始调用自己。因此，在执行的每一步中，相同的函数都会被一次又一次地添加到调用堆栈中，如下所示：")]),a._v(" "),s("p",[s("img",{attrs:{src:"run05.png",alt:""}})]),a._v(" "),s("p",[a._v("然而，在某些时候，调用堆栈中的函数调用数量超过了调用堆栈的实际大小，浏览器决定采取行动，抛出一个错误，它可能是这样子的：")]),a._v(" "),s("p",[s("img",{attrs:{src:"run06.png",alt:""}})]),a._v(" "),s("p",[a._v("在单个线程上运行代码很容易，因为你不必处理在多线程环境中出现的复杂场景——例如死锁。")]),a._v(" "),s("p",[a._v("但是在一个线程上运行也非常有限制，由于JavaScript只有一个调用堆栈，当某段代码运行变慢时会发生什么？")]),a._v(" "),s("h3",{attrs:{id:"五、并发与事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、并发与事件循环","aria-hidden":"true"}},[a._v("#")]),a._v(" 五、并发与事件循环")]),a._v(" "),s("p",[a._v("当调用堆栈中的函数调用需要花费大量时间来处理时会发生什么情况？例如，假设你希望在浏览器中使用JavaScript进行一些复杂的图像转换。")]),a._v(" "),s("p",[a._v("你可能会问-为什么这是一个问题？问题是，当调用堆栈有函数要执行时，浏览器实际上不能做任何其他事情——它被阻塞了，这意味着浏览器不能呈现，它不能运行任何其他代码，它只是卡住了，如果你想在应用中使用流畅的页面效果，这就会产生问题。")]),a._v(" "),s("p",[a._v("而且这不是唯一的问题，一旦你的浏览器开始处理调用栈中的众多任务，它可能会停止响应相当长一段时间。大多数浏览器都会这么做，报一个错误，询问你是否想终止web页面。")]),a._v(" "),s("p",[s("img",{attrs:{src:"run07.png",alt:""}})]),a._v(" "),s("p",[a._v("这并不是最好的用户体验，不是吗？")]),a._v(" "),s("p",[a._v("那么我们怎样才能在不阻塞UI和不使浏览器失去响应的情况下执行大量代码呢？解决方案是异步回调。")]),a._v(" "),s("h3",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/qq449245884/xiaozhi/issues/1",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaScript是如何工作的：引擎，运行时和调用堆栈的概述！"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"联系作者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),s("div",{attrs:{align:"center"}},[s("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),s("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);t.default=n.exports}}]);