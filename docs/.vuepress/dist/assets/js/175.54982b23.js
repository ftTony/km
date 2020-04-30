(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{397:function(e,t,s){"use strict";s.r(t);var a=s(13),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"理解-eventloop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解-eventloop"}},[e._v("#")]),e._v(" 理解 EventLoop")]),e._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),s("p",[s("code",[e._v("Event Loop")]),e._v("即事件循环，是指浏览器或"),s("code",[e._v("Node")]),e._v("的一种解决"),s("code",[e._v("javaScript")]),e._v("单线程运行时不会阻塞的一种机制，也就是我们经常使用"),s("strong",[e._v("异步")]),e._v("的原理。")]),e._v(" "),s("h2",{attrs:{id:"内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[e._v("#")]),e._v(" 内容")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E5%A0%86%E3%80%81%E6%A0%88%E3%80%81%E9%98%9F%E5%88%97"}},[e._v("堆，栈、队列")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E7%BA%BF%E7%A8%8B%E4%B8%8E%E8%BF%9B%E7%A8%8B"}},[e._v("线程与进程")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%89%E3%80%81event-loop"}},[e._v("Event Loop")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%E7%9A%84-event-loop"}},[e._v("浏览器中的 Event Loop")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E4%BE%8B%E5%AD%90"}},[e._v("例子")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E5%85%AD%E3%80%81nodejs%E7%9A%84event-loop"}},[e._v("NodeJS 的 Event Loop")])])]),e._v(" "),s("h3",{attrs:{id:"一、堆、栈、队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、堆、栈、队列"}},[e._v("#")]),e._v(" 一、堆、栈、队列")]),e._v(" "),s("p",[s("img",{attrs:{src:"eventloop.png",alt:"images"}})]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#11-%E5%A0%86"}},[e._v("堆")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#12-%E6%A0%88"}},[e._v("栈")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#13-%E9%98%9F%E5%88%97"}},[e._v("队列")])])]),e._v(" "),s("h4",{attrs:{id:"_1-1-堆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-堆"}},[e._v("#")]),e._v(" 1.1 堆")]),e._v(" "),s("p",[s("strong",[e._v("堆")]),e._v("是一种数据结构，是利用完全二叉树维护的一组数据，堆分为两种，一种为最大"),s("strong",[e._v("堆")]),e._v("，一种为最小"),s("strong",[e._v("堆")]),e._v("，将根节点"),s("strong",[e._v("最大")]),e._v("的"),s("strong",[e._v("堆")]),e._v("叫做"),s("strong",[e._v("最大堆")]),e._v("或"),s("strong",[e._v("大根堆")]),e._v("，根节点"),s("strong",[e._v("最小")]),e._v("的"),s("strong",[e._v("堆")]),e._v("叫做"),s("strong",[e._v("最小堆")]),e._v("或"),s("strong",[e._v("小根堆")]),e._v("。")]),e._v(" "),s("p",[s("strong",[e._v("堆")]),e._v("是"),s("strong",[e._v("线性数据结构")]),e._v("，相当于"),s("strong",[e._v("一维数组")]),e._v("，有唯一后继。")]),e._v(" "),s("p",[e._v("如最大堆")]),e._v(" "),s("p",[s("img",{attrs:{src:"eventloop01.png",alt:"images"}})]),e._v(" "),s("h4",{attrs:{id:"_1-2-栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-栈"}},[e._v("#")]),e._v(" 1.2 栈")]),e._v(" "),s("p",[s("strong",[e._v("栈")]),e._v("在计算机科学中是限定仅在"),s("strong",[e._v("表尾")]),e._v("进行"),s("strong",[e._v("插入")]),e._v("或"),s("strong",[e._v("删除")]),e._v("操作的线性表。"),s("strong",[e._v("栈")]),e._v("是一种数据结构，它按照"),s("strong",[e._v("后进先出")]),e._v("的原则存储数据，"),s("strong",[e._v("先进入")]),e._v("的数据被压入"),s("strong",[e._v("栈底")]),e._v("，"),s("strong",[e._v("最后的数据在栈顶")]),e._v("，需要读数据的时候从"),s("strong",[e._v("栈顶")]),e._v("开始"),s("strong",[e._v("弹出数据")]),e._v("。")]),e._v(" "),s("p",[s("strong",[e._v("栈")]),e._v("是只能在"),s("strong",[e._v("某一端插入")]),e._v("和"),s("strong",[e._v("删除")]),e._v("的"),s("strong",[e._v("特殊线性表")]),e._v("。")]),e._v(" "),s("p",[s("img",{attrs:{src:"eventloop02.png",alt:"images"}})]),e._v(" "),s("h4",{attrs:{id:"_1-3-队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-队列"}},[e._v("#")]),e._v(" 1.3 队列")]),e._v(" "),s("p",[e._v("特殊之处在于它只允许在表的前端进行"),s("strong",[e._v("删除")]),e._v("操作，而在表的后端进行"),s("strong",[e._v("插入")]),e._v("操作，和"),s("strong",[e._v("栈")]),e._v("一样，"),s("strong",[e._v("队列")]),e._v("是一种操作受限制的线性表。")]),e._v(" "),s("p",[e._v("进行"),s("strong",[e._v("插入")]),e._v("操作的端称为"),s("strong",[e._v("队尾")]),e._v("，进行"),s("strong",[e._v("删除")]),e._v("操作的称为"),s("strong",[e._v("队头")]),e._v("。队列中没有元素时，称为"),s("strong",[e._v("空队列")]),e._v("。")]),e._v(" "),s("p",[s("strong",[e._v("队列")]),e._v("的数据元素又称为"),s("strong",[e._v("队列元素")]),e._v("。在队列中插入一个队列元素称为"),s("strong",[e._v("入队")]),e._v("，从"),s("strong",[e._v("队列")]),e._v("中一个队列歹毒称为"),s("strong",[e._v("出队")]),e._v("。因为队列"),s("strong",[e._v("只允许")]),e._v("在一端"),s("strong",[e._v("插入")]),e._v("，在另一端"),s("strong",[e._v("删除")]),e._v("，所以只有"),s("strong",[e._v("最早")]),e._v("进入"),s("strong",[e._v("队列")]),e._v("的元素"),s("strong",[e._v("才能最先从队列中")]),e._v("删除，故队列又称为"),s("strong",[e._v("先进先出")]),e._v("。")]),e._v(" "),s("h3",{attrs:{id:"二、线程与进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、线程与进程"}},[e._v("#")]),e._v(" 二、线程与进程")]),e._v(" "),s("p",[e._v("官方的说法是：进程是 CPU 资源分配的最小单位；线程是 CPU 调度的最小单位。")]),e._v(" "),s("p",[e._v("这两句话并不好理解，我们先来看张图：")]),e._v(" "),s("p",[s("img",{attrs:{src:"eventloop03.png",alt:"images"}})]),e._v(" "),s("ul",[s("li",[e._v("进程好比图中的工厂，有单独的专属自己的工厂资源。")]),e._v(" "),s("li",[e._v("线程好比图中的工人，多个工人在一个工厂中协作工作，工厂与工人是 1:n 的关系。也就是说"),s("strong",[e._v("一个进程由一个或多个线程组成，线程是一个进程中代码的不同执行路线")]),e._v("；")]),e._v(" "),s("li",[e._v("工厂空间是工厂共享的，这象征一个进程的内在空间是共享的，每个线程都可用这些共享内存。")]),e._v(" "),s("li",[e._v("多个工厂之间独立存在。")])]),e._v(" "),s("h3",{attrs:{id:"三、event-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、event-loop"}},[e._v("#")]),e._v(" 三、Event Loop")]),e._v(" "),s("p",[e._v("在"),s("code",[e._v("JavaScript")]),e._v("中，任务被分为两种，一种宏任务（"),s("code",[e._v("MacroTask")]),e._v("）也叫"),s("code",[e._v("Task")]),e._v("，一种叫微任务（"),s("code",[e._v("MicroTask")]),e._v("）。")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#31-macrotask%E5%AE%8F%E4%BB%BB%E5%8A%A1"}},[e._v("MacroTask（宏任务）")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#32-microtask%E5%BE%AE%E4%BB%BB%E5%8A%A1"}},[e._v("MicroTask（微任务）")])])]),e._v(" "),s("h4",{attrs:{id:"_3-1-macrotask（宏任务）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-macrotask（宏任务）"}},[e._v("#")]),e._v(" 3.1 MacroTask（宏任务）")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("script")]),e._v("全部代码、"),s("code",[e._v("setTimeout")]),e._v("、"),s("code",[e._v("setInterval")]),e._v("、"),s("code",[e._v("setImmediate")]),e._v("（浏览器暂时不支持，只有 IE10 支持，具体可见 MDN）、"),s("code",[e._v("I/O")]),e._v("、"),s("code",[e._v("UI Rendering")]),e._v("。")])]),e._v(" "),s("h4",{attrs:{id:"_3-2-microtask（微任务）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-microtask（微任务）"}},[e._v("#")]),e._v(" 3.2 MicroTask（微任务）")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Process.nextTick(node独有)")]),e._v("、"),s("code",[e._v("Promise")]),e._v("、"),s("code",[e._v("Object.observe(废弃)")]),e._v("、"),s("code",[e._v("MutationObserver")]),e._v("（具体使用方式查看[这里](http://javascript.ruanyifeng.com/dom/mutationobserver.html）")])]),e._v(" "),s("h3",{attrs:{id:"四、浏览器中的-event-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、浏览器中的-event-loop"}},[e._v("#")]),e._v(" 四、浏览器中的 Event Loop")]),e._v(" "),s("p",[s("code",[e._v("Javascript")]),e._v("有一个"),s("code",[e._v("main thread")]),e._v("主线程和"),s("code",[e._v("call-stack")]),e._v("调用栈(执行栈)，所有的任务都会被放到调用栈等待主线程执行。")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#41-js%E8%B0%83%E7%94%A8%E6%A0%88"}},[e._v("JS 调用栈")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#42-%E5%90%8C%E6%AD%A5%E4%BB%BB%E5%8A%A1%E5%92%8C%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1"}},[e._v("同步任务和异步任务")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#43-event-loop-%E8%BF%87%E7%A8%8B%E8%A7%A3%E6%9E%90"}},[e._v("Event Loop 过程解析")])])]),e._v(" "),s("h4",{attrs:{id:"_4-1-js-调用栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-js-调用栈"}},[e._v("#")]),e._v(" 4.1 JS 调用栈")]),e._v(" "),s("p",[e._v("JS 调用栈采用的是后进先出的规则，当函数执行的时候，会被添加到栈的顶部，当执行完后，就会从栈顶移出，直到栈内被清空。")]),e._v(" "),s("h4",{attrs:{id:"_4-2-同步任务和异步任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-同步任务和异步任务"}},[e._v("#")]),e._v(" 4.2 同步任务和异步任务")]),e._v(" "),s("p",[s("code",[e._v("JavaScript")]),e._v("单线程任务被分为"),s("strong",[e._v("同步任务")]),e._v("和"),s("strong",[e._v("异步任务")]),e._v("，同步任务会在调用栈中按照顺序等待主线程依次执行，异步任务会在异步任务有了结果后，将注册的回调函数放入任务队列中等待主线程空闲的时候（调用栈被清空），被读取到栈内等待主线程的执行。")]),e._v(" "),s("p",[s("img",{attrs:{src:"eventloop05.jpg",alt:"images"}})]),e._v(" "),s("p",[e._v("任务队列"),s("code",[e._v("Task Queue")]),e._v("，即队列，是一种先进先出的一种数据结构。")]),e._v(" "),s("h4",{attrs:{id:"_4-3-event-loop-过程解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-event-loop-过程解析"}},[e._v("#")]),e._v(" 4.3 Event Loop 过程解析")]),e._v(" "),s("p",[s("img",{attrs:{src:"eventloop04.png",alt:"images"}})]),e._v(" "),s("ul",[s("li",[e._v("一开始执行栈空我们可以把"),s("strong",[e._v("执行栈认为是一个存储函数调用的栈结构，遵循先进后出的原则。")]),e._v(" micro 队列空，macro 队列里有且只有一个 script 脚本（整体代码）。")]),e._v(" "),s("li",[e._v("全局上下文（script 标签）被推入执行栈，同步代码执行。在执行的过程中，会判断是同步任务还是异步任务，通过对一些接口的调用，可以产生新的 macro-task 与 micro-task，它们会分别被推入各自的任务队列里，同步代码执行完了，script 脚本会被移出 macro 队列，这个过程本质上是队列的 macro-task 的执行和出队的过程。")]),e._v(" "),s("li",[e._v("上一步我们出队的是一个 macro-task,这一步我们处理的是 micro-task。但需要注意的是：当 macro-task 出队时，任务是"),s("strong",[e._v("一个一个")]),e._v("执行的；而 micro-task 出队时，任务是"),s("strong",[e._v("一队一队")]),e._v("执行的。因此我们处理 micro 队列这一步，会逐个执行队列中的任务并把它出队，直到队列被清空。")]),e._v(" "),s("li",[s("strong",[e._v("执行渲染操作，更新界面")])]),e._v(" "),s("li",[e._v("检查是否存在 Web worker 任务，如果有，则对其进行处理")]),e._v(" "),s("li",[e._v("上述过程循环往复，直到两个队列都清空")])]),e._v(" "),s("p",[e._v("我们总结一下，每一次循环都是一个这样的过程：")]),e._v(" "),s("p",[s("img",{attrs:{src:"eventloop07.png",alt:"images"}})]),e._v(" "),s("p",[s("strong",[e._v("当某个宏任务执行完后，会查看是否有微任务队列，如果有，先执行微任务队列中的所有任务，如果没有，会读取宏任务队列中排在最前的任务，执行宏任务的过程中，遇到微任务，依次加入微任务队列。栈空后，再依次读取微任务队列里的任务，依次类推。")])]),e._v(" "),s("p",[s("strong",[e._v("mactotask & microtask 的执行顺序")])]),e._v(" "),s("p",[s("img",{attrs:{src:"eventloop06.png",alt:"images"}})]),e._v(" "),s("h3",{attrs:{id:"五、例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、例子"}},[e._v("#")]),e._v(" 五、例子")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#5.1-%E4%BE%8B%E4%B8%80"}},[e._v("例一")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#5.2-%E4%BE%8B%E4%BA%8C"}},[e._v("例二")])])]),e._v(" "),s("h4",{attrs:{id:"_5-1-例一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-例一"}},[e._v("#")]),e._v(" 5.1 例一")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("    console.log('start');\n\n    setTimeout(function(){\n        console.log('setTimeout')\n    },0)\n\n    Promise.resolve().then(function(){\n        console.log('promise1')\n    }).then(function(){\n        console.log('promise2')\n    })\n\n    console.log('end')\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("p",[e._v("打印台输出的 log 顺序是什么？结合上述的步骤分析。")]),e._v(" "),s("p",[s("img",{attrs:{src:"browser-deom1-excute-animate.gif",alt:"images"}})]),e._v(" "),s("ul",[s("li",[e._v("首先，全局代码（main()）压入调用栈执行，打印"),s("code",[e._v("start")]),e._v(";")]),e._v(" "),s("li",[e._v("接下来"),s("code",[e._v("setTimeout")]),e._v("压入"),s("code",[e._v("macrotask")]),e._v("队列，"),s("code",[e._v("promise.then")]),e._v("回调放入"),s("code",[e._v("microtask")]),e._v("队列，最后执行"),s("code",[e._v("console.log('end')")]),e._v("，打印出"),s("code",[e._v("end")]),e._v(";")]),e._v(" "),s("li",[e._v("至此，调用栈中的代码被执行完成，回顾"),s("code",[e._v("macrotask")]),e._v("的定义，我们知道全局代码属于"),s("code",[e._v("macrotask")]),e._v("，"),s("code",[e._v("macrotask")]),e._v("执行完，那接下来就是执行"),s("code",[e._v("microtask")]),e._v("队列的任务了，执行"),s("code",[e._v("promise")]),e._v("回调打印"),s("code",[e._v("promise1")]),e._v(";")]),e._v(" "),s("li",[s("code",[e._v("promise")]),e._v("回调函数默认返回"),s("code",[e._v("undefined")]),e._v("，promise 状态变为"),s("code",[e._v("fullfill")]),e._v("触发接下来的"),s("code",[e._v("then")]),e._v("架设，继续压入"),s("code",[e._v("microtask")]),e._v("队列，"),s("strong",[e._v("event loop 会把当前的 microtask 队列一直执行完")]),e._v("，此时执行第二个"),s("code",[e._v("promise.then")]),e._v("回调打印出"),s("code",[e._v("promise2")]),e._v(";")]),e._v(" "),s("li",[e._v("这时"),s("code",[e._v("microtask")]),e._v("队列已经为空，从上面的流程图可以知道，接下来主线程会去做一些 UI 渲染工作，然后开始下一轮"),s("code",[e._v("event loop")]),e._v(",执行"),s("code",[e._v("setTimeout")]),e._v("的回调，打印出"),s("code",[e._v("setTimeout")]),e._v(";")])]),e._v(" "),s("h4",{attrs:{id:"_5-2-例二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-例二"}},[e._v("#")]),e._v(" 5.2 例二")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Promise.resolve().then(()=>{\n    console.log('Promise1')\n    setTimeout(()=>{\n        console.log('setTimeout2');\n    },0)\n});\nsetTimeout(()=>{\n    console.log('setTimeout1');\n    Promise.resolve().then(()=>{\n        console.log('Promise2')\n    })\n},0)\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("p",[e._v("最后输出结果是 Promise1，setTimeout1，Promise2，setTimeout2")]),e._v(" "),s("ul",[s("li",[e._v("一开始执行栈的同步任务（这属于宏任务）执行完毕，会去查看是否有微任务队列，上题中存在（有且只有一个），然后执行微任务队列中的所有任务输出"),s("code",[e._v("Promise1")]),e._v("，同时会生成一个宏任务"),s("code",[e._v("setTimeout2")])]),e._v(" "),s("li",[e._v("然后去查看宏任务队列，宏任务"),s("code",[e._v("setTimeout1")]),e._v("在"),s("code",[e._v("setTimeout2")]),e._v("之前，先执行宏任务"),s("code",[e._v("setTimeout1")]),e._v("，输出"),s("code",[e._v("setTimeout1")])]),e._v(" "),s("li",[e._v("在执行宏任务"),s("code",[e._v("setTimeout1")]),e._v("时会生成微任务"),s("code",[e._v("Promise2")]),e._v("，放入微任务队列中，接着先去清空微任务队列中的所有任务，输出"),s("code",[e._v("Promise2")])]),e._v(" "),s("li",[e._v("清空完微任务队列中的所有任务后，就又会去宏任务队列取一个，这回执行的是"),s("code",[e._v("setTimeout2")])])]),e._v(" "),s("h3",{attrs:{id:"六、nodejs-的-event-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、nodejs-的-event-loop"}},[e._v("#")]),e._v(" 六、NodeJS 的 Event Loop")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#61-node%E7%AE%80%E4%BB%8B"}},[e._v("Node 简介")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#62-%E5%85%AD%E4%B8%AA%E9%98%B6%E6%AE%B5"}},[e._v("六个阶段")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#63-micro-task-%E4%B8%8E-macro-task"}},[e._v("Micro-Task 与 Macro-Task")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#64-%E6%B3%A8%E6%84%8F%E7%82%B9"}},[e._v("注意点")])])]),e._v(" "),s("h4",{attrs:{id:"_6-1-node-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-node-简介"}},[e._v("#")]),e._v(" 6.1 Node 简介")]),e._v(" "),s("p",[e._v("Node 中 Event Loop 和浏览器中的是完全不相同的东西。Nodejs 采用 V8 作为 js 的解析引擎，而 I/O 处理方面使用了自己设计的 libuv，libuv 是一个基于事件驱动的跨平台抽象层，封装了不同操作系统一些底层特性，对处提供统一的 API，事件循环机制也是它里面的实现。")]),e._v(" "),s("p",[s("img",{attrs:{src:"eventloop08.png",alt:"images"}})]),e._v(" "),s("p",[e._v("Node.js 的运行机制如下：")]),e._v(" "),s("ul",[s("li",[e._v("V8 引擎解析 JavaScript 脚本。")]),e._v(" "),s("li",[e._v("解析后的代码，调用 Node API。")]),e._v(" "),s("li",[e._v("libuv 库负责 Node API 的执行。它将不同的任务分配给不同的线程，形成一个 Event Loop(事件循环)，以异步的方式将任务的执行结果返回给 V8 引擎。")]),e._v(" "),s("li",[e._v("V8 引擎再将结果返回给用户。")])]),e._v(" "),s("h4",{attrs:{id:"_6-2-六个阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-六个阶段"}},[e._v("#")]),e._v(" 6.2 六个阶段")]),e._v(" "),s("p",[e._v("其中 libuv 引擎中的事件循环分为 6 个阶段，它们会按照顺序反复运行。每当进入某一个阶段的时候，都会从对应的架设队列中取出函数去执行。当队列为空或者执行的回调函数数量达到系统设定的阈值，就会进入下一阶段。")]),e._v(" "),s("p",[s("img",{attrs:{src:"eventloop09.png",alt:"images"}})]),e._v(" "),s("p",[e._v("从上图中，大致看出 node 中的事件循环的顺序：")]),e._v(" "),s("p",[e._v("外部输入数据——>轮询阶段(poll)——>检查阶段(check)——>关闭事件回调阶段(close callback)——>定时器检测阶段(timer)——>I/O 事件回调阶段(I/O callbacks)——>闲置阶段(idle,prepare)——>轮询阶段(按照该顺序反复运行)")]),e._v(" "),s("ul",[s("li",[e._v("timers 阶段：这个阶段执行 timer(setTimeout、setInterval)的回调")]),e._v(" "),s("li",[e._v("I/O callbacks 阶段：处理一些上一轮循环中的少数未执行的 I/O 回调")]),e._v(" "),s("li",[e._v("idle,prepare 阶段：仅 node 内部使用")]),e._v(" "),s("li",[e._v("poll 阶段：获取新的 I/O 事件，适当的条件下 node 将阻塞在这里")]),e._v(" "),s("li",[e._v("check 阶段：执行 setImmediate()的回调")]),e._v(" "),s("li",[e._v("close callbacks 阶段：执行 socket 的 close 事件回调")])]),e._v(" "),s("p",[e._v("注意："),s("strong",[e._v("上面六个阶段都不包括")]),e._v("process.nextTick()")]),e._v(" "),s("p",[e._v("接下去我们详细介绍"),s("code",[e._v("timers")]),e._v("、"),s("code",[e._v("poll")]),e._v("、"),s("code",[e._v("check")]),e._v("这 3 个阶段，因为日常开发中的绝大部分异步任务都是在这 3 个阶段处理的。")]),e._v(" "),s("p",[s("strong",[e._v("(1) timer")])]),e._v(" "),s("p",[e._v("timers 阶段会执行 setTimeout 和 setInterval 回调，并且是由 poll 阶段控制的。同样，"),s("strong",[e._v("在 Node 中定时器指定的时间也不是准确时间，只能是尽快执行")]),e._v("。")]),e._v(" "),s("p",[s("strong",[e._v("(2) poll")])]),e._v(" "),s("p",[e._v("poll 是一个至关重要的阶段，这一阶段中，系统会做两件事情")]),e._v(" "),s("ol",[s("li",[e._v("回到 timer 阶段执行回调")]),e._v(" "),s("li",[e._v("执行 I/O 回调")])]),e._v(" "),s("p",[e._v("并且在进入该阶段时如果没有设定了 timer 的话，会发生以下两件事情")]),e._v(" "),s("ul",[s("li",[e._v("如果 poll 队列不为空，会遍历回调队列并同步执行，直到队列为空或者达到系统限制")]),e._v(" "),s("li",[e._v("如果 poll 队列为空时，会有两件事发生\n"),s("ul",[s("li",[e._v("如果有 setImmediate 回调需要执行，poll 阶段会停止并且进入到 check 阶段执行回调")]),e._v(" "),s("li",[e._v("如果没有 setImmediate 回调需要执行，会先行回调被加入到队列中并立即执行回调，这里同样会有个超时时间设置防止设置防止一直先行下去")])])])]),e._v(" "),s("p",[e._v("当然设定了 timer 的话且 poll 队列为空，则会判断是否有 timer 超时，如果有的话会回到 timer 阶段执行回调。")]),e._v(" "),s("p",[s("strong",[e._v("(3) check 阶段")])]),e._v(" "),s("p",[e._v("setImmediate()的回调会被加入 check 队列中，从 event loop 的阶段图可以知道，check 阶段的执行顺序在 poll 阶段之后。")]),e._v(" "),s("p",[e._v("我们先来看个例子：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("console.log('start')\nsetTimeout(()=>{\n\n},0);\nsetTimeout(()=>{\n    console.log('timer2')\n    Promise.resolve().then(function(){\n        console.log('promise2')\n    },0)\n})\nPromise.resolve().then(function(){\n    console.log('promise3')\n})\nconsole.log('end');\n// start=>end=>promise3=>timer1=>timer2=>promise1=>promise2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br")])]),s("ul",[s("li",[e._v("一开始执行栈的同步任务(这属于宏任务)执行完毕后(依次打印出 start end,并将 2 个 timer 依次放入 timer 队列)，会先去执行微任务("),s("strong",[e._v("这点跟浏览器端的一样")]),e._v(")，所以打印出 promise3")]),e._v(" "),s("li",[e._v("然后进入 timer 阶段，执行 timer1 的回调函数，打印 timer1，并将 promise.then 回调放入 microtask 队列，同样的步骤执行 timer2，打印 timer2；这点跟浏览器端相差比较大，"),s("strong",[e._v("timer 阶段有几个 setTimeout/setInterval 都会依次执行")]),e._v("，并不像浏览器端，每执行一个宏任务后就支执行一个微任务。")])]),e._v(" "),s("h4",{attrs:{id:"_6-3-micro-task-与-macro-task"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-micro-task-与-macro-task"}},[e._v("#")]),e._v(" 6.3 Micro-Task 与 Macro-Task")]),e._v(" "),s("p",[e._v("Node 端事件循环中的异步队列也是这两种：macro（宏任务）队列和 micro（微任务）队列。")]),e._v(" "),s("ul",[s("li",[e._v("常见的 macro-task 比如：setTimeout、setInterval、setImmediate、script(整体代码)、I/O 操作等。")]),e._v(" "),s("li",[e._v("常见的 micro-task 比如：process.nextTick、new Promise().then(回调)等。")])]),e._v(" "),s("h4",{attrs:{id:"_6-4-注意点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-注意点"}},[e._v("#")]),e._v(" 6.4 注意点")]),e._v(" "),s("p",[s("strong",[e._v("(1) setTimeout 和 setImmediate")])]),e._v(" "),s("p",[e._v("二者非常相似，区别主要在于调用时间时机不同。")]),e._v(" "),s("ul",[s("li",[e._v("setImmediate 设计在 poll 阶段完成时执行，即 check 阶段。")]),e._v(" "),s("li",[e._v("setTimeout 设计在 poll 阶段为空闲时，且设定到达后执行，但它的 timer 阶段执行")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("setTimeout(function timeout(){\n    console.log('timeout');\n},0);\nsetImmediate(function immediate(){\n console.log('immediate');\n})\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("ul",[s("li",[e._v("对于以上代码来说，setTimeout 可能执行在前，也可能执行在后。")]),e._v(" "),s("li",[e._v("首先 setTimeout(fn,0)===setTimeout(fn,1)这是由源码决定的进入事件循环也是需要成本的，如果在准备时候花费了大于 1ms 的时间，那么在 timer 阶段就会直接执行 setTimeout 回调")]),e._v(" "),s("li",[e._v("如果准备时间花费小于 1ms，那么就 setImmediate 回调先执行了")])]),e._v(" "),s("p",[e._v("但当二者在异步 i/o callback 内部调用时，总是先执行 setImmediate，再执行 setTimeout")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const fs = require('fs');\n\nfs.readFile(__filename,()=>{\n    setTimeout(()=>{\n        console.log('timeout')\n    },0)\n    setImmediate(()=>{\n        console.log('immedidate')\n    })\n})\n\n// immediate\n// timeout\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("p",[e._v("在上述代码中，setImmediate 永远先执行。因为两个代码写在 IO 回调中，IO 回调是在 poll 阶段执行，当回调执行完毕后队列为空，发现存在 setImmediate 回调，所以就直接跳转到 check 阶段去执行回调了。")]),e._v(" "),s("p",[s("strong",[e._v("(2) process.nextTick")])]),e._v(" "),s("p",[e._v("这个函数其实是独立于 Event Loop 之外的，它有一个自己的队列，当每个阶段完成后，如果存在 nextTick 队列，就会清空队列中的所有回调函数，并且优先于其他 microtask 执行。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("setTimeout(()=>{\n    console.log('timer1')\n    Promise.resolve().then(function(){\n        console.log('promise1')\n    })\n},0)\nprocess.nextTick(()=>{\n    console.log('nextTick')\n    process.nextTick(()=>{\n        console.log('nextTick');\n        process.nextTick(()=>[\n            console.log('nextTick')\n            process.nextTick(()=>[\n                console.log('nextTick')\n            ])\n        ])\n    })\n})\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br")])]),s("h3",{attrs:{id:"六、node-与浏览器的-event-loop-差异"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、node-与浏览器的-event-loop-差异"}},[e._v("#")]),e._v(" 六、Node 与浏览器的 Event Loop 差异")]),e._v(" "),s("p",[e._v("Node 的 EventLoop 可以看这篇文章"),s("a",{attrs:{href:"https://km.xiaowuzi.info/js/node-eventloop.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node 的事件循环机制"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("strong",[e._v("浏览器环境下，microtask 的任务队列是每个 macrotask 执行完之后执行。而在 Node.js 中，microtask 会在事件循环的各个阶段之间执行，也就是一个阶段执行完毕，就会去执行 microtask 队列的任务。")])]),e._v(" "),s("p",[s("img",{attrs:{src:"eventloop10.png",alt:"images"}})]),e._v(" "),s("p",[e._v("接下我们通过一个例子来说明两者区别：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("setTimeout(()=>{\n    console.log('timer1')\n    Promise.resolve().then(function(){\n        console.log('promise1')\n    })\n},0)\n\nsetTimeout(()=>{\n    console.log('timer2')\n    Promise.resolve().then(function(){\n        console.log('promise2')\n    })\n},0)\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("p",[e._v("浏览器端运行结果："),s("code",[e._v("timer1=>promise1=>timer2=>promise2")])]),e._v(" "),s("p",[e._v("浏览器的处理过程如下:")]),e._v(" "),s("p",[s("img",{attrs:{src:"browser-deom2-excute-animate.gif",alt:"images"}})]),e._v(" "),s("p",[e._v("Node 端运行结果分两种情况：")]),e._v(" "),s("ul",[s("li",[e._v("如果 node11 版本一量执行一个阶段里的一个宏任务(setTimeout.setInterval 和 setImmediate)就立刻执行微任务队列，这就跟浏览器端运行一致，最后的结果为"),s("code",[e._v("timer1=>promise1=>timer2=>promise2")])]),e._v(" "),s("li",[e._v("如果是 node10 及其之前版本：要看第一个定时器执行完，第二个定时器是否在完成队列中。\n"),s("ul",[s("li",[e._v("如果是第二个定时器还未在完成队列中，最后的结果为"),s("code",[e._v("timer1=>promise1=>timer2=>promise2")])]),e._v(" "),s("li",[e._v("如果是第二个定时器已经完成队列中，则最后的结果为"),s("code",[e._v("timer1=>timer2=>promise1=>promise2")])])])])]),e._v(" "),s("ol",[s("li",[e._v("全局脚本(main())执行，将 2 个 timer 依次放入 timer 队列，main()执行完毕，调用栈空闲，任务队列开始执行；")]),e._v(" "),s("li",[e._v("首先进入 timer 阶段，执行 timer1 的回调函数，打印 timer1，并将 promise1.then 回调放入 microtas 队列，同样的步骤执行 timer2,打印 timer2;")]),e._v(" "),s("li",[e._v("至此，timer 阶段执行结束，event loop 进入下一个阶段之前，执行 microtask 队列的所有任务，依次打印 promise1、promise2")])]),e._v(" "),s("p",[e._v("Node 端的处理过程如下：")]),e._v(" "),s("p",[s("img",{attrs:{src:"nodejs-deom-excute-animate.gif",alt:"images"}})]),e._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),s("p",[e._v("浏览器和 Node 环境下，microtask 任务队列的执行时机不同")]),e._v(" "),s("ul",[s("li",[e._v("Node 端，microtask 在事件循环的各个阶段之间执行")]),e._v(" "),s("li",[e._v("浏览器端，microtask 在事件循环的 macrotask 执行完之后执行")])]),e._v(" "),s("h3",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/ETDqdo3JIcUxbeIlddSq-Q",target:"_blank",rel:"noopener noreferrer"}},[e._v("你不知道的 Event Loop"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5c3d8956e51d4511dc72c200",target:"_blank",rel:"noopener noreferrer"}},[e._v("一次弄懂 Event Loop（彻底解决此类面试问题）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5be04a8e6fb9a04a072fd2cd",target:"_blank",rel:"noopener noreferrer"}},[e._v("Event Loop"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ljianshu/Blog/issues/54",target:"_blank",rel:"noopener noreferrer"}},[e._v("浏览器与 Node 的事件循环(Event Loop)有何区别?"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/59e85eebf265da430d571f89",target:"_blank",rel:"noopener noreferrer"}},[e._v("这一次，彻底弄懂 JavaScript 执行机制"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000013861128",target:"_blank",rel:"noopener noreferrer"}},[e._v("一篇文章教会你 Event loop——浏览器和 Node"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/33058983",target:"_blank",rel:"noopener noreferrer"}},[e._v("详解 JavaScript 中的 Event Loop（事件循环）机制"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5be04a8e6fb9a04a072fd2cd",target:"_blank",rel:"noopener noreferrer"}},[e._v("Event Loop"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/DLunwkzknoQ0tczLHuqpHg",target:"_blank",rel:"noopener noreferrer"}},[e._v("「前端进阶」从多线程角度来看 Event Loop"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/nQgsEQorv00fr4XqU764bA",target:"_blank",rel:"noopener noreferrer"}},[e._v("【THE LAST TIME】彻底吃透 JavaScript 执行机制"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/kG4FHXlqbKFWYQCtPhLtxA",target:"_blank",rel:"noopener noreferrer"}},[e._v("《一文看懂浏览器事件循环》"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/G2L_9kj8ST0_HPG7yxd2lw",target:"_blank",rel:"noopener noreferrer"}},[e._v("说说 JS 的事件循环机制 (含满分答题技巧)"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/OudqDff3QvmBqIiD74LrTw",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript 事件循环：从起源到浏览器再到 Node.js"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"联系作者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[e._v("#")]),e._v(" 联系作者")]),e._v(" "),s("div",{attrs:{align:"center"}},[s("p",[e._v("\n        平凡世界，贵在坚持。\n    ")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);t.default=r.exports}}]);