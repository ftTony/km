(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{400:function(a,e,t){"use strict";t.r(e);var r=t(4),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"js-内存管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-内存管理","aria-hidden":"true"}},[a._v("#")]),a._v(" js 内存管理")]),a._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),a._v(" "),t("h2",{attrs:{id:"内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6"}},[a._v("垃圾回收机制")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E5%86%85%E5%AD%98%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F"}},[a._v("内存的生命周期")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E6%A0%87%E8%AE%B0%E6%B8%85%E9%99%A4"}},[a._v("标记清除")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E5%BC%95%E7%94%A8%E8%AE%A1%E6%95%B0"}},[a._v("引用计数")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%94%E3%80%81IE6%E7%9A%84%E6%80%A7%E8%83%BD%E9%97%AE%E9%A2%98"}},[a._v("IE6 的性能问题")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%85%AD%E3%80%81%E7%BC%96%E7%A0%81%E6%B3%A8%E6%84%8F-%E8%A7%A3%E9%99%A4%E5%BC%95%E7%94%A8"}},[a._v("编码注意-解除引用")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%83%E3%80%81%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%9A%84%E4%BC%98%E5%8C%96%E7%AD%96%E7%95%A5"}},[a._v("垃圾回收的优化策略")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%85%AB%E3%80%81%E5%88%86%E4%BB%A3%E5%9B%9E%E6%94%B6"}},[a._v("分代回收")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B9%9D%E3%80%81%E5%A2%9E%E9%87%8F%E5%9B%9E%E6%94%B6"}},[a._v("增量回收")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%8D%81%E3%80%81%E5%86%85%E5%AD%98%E6%B3%84%E9%9C%B2"}},[a._v("内存泄露")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%8D%81%E4%B8%80%E3%80%81%E6%9F%A5%E7%9C%8BChrome%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%8B%E7%9A%84CG%E8%BF%87%E7%A8%8B"}},[a._v("查看 Chrome 浏览器下的 CG 过程")])])]),a._v(" "),t("p",[a._v("JavaScript 具有自动垃圾收集机制，也就是说，执行环境会负责管理代码执行过程中使用的内存。而在 C 和 C++之类的语言中，开发人员的一项基本任务就是手工跟踪内在的使用情况，这是造成许多问题的一个根源。")]),a._v(" "),t("p",[a._v("在编写 JavaScript 程序时，开发人员不用再关心内存使用问题，所需内存的分配以及无用内存的回收完全实现了自动管理。这种垃圾收集机制的原理其实很简单："),t("strong",[a._v("找出那些不再继续使用的变量，然后释放其占用的内存。")]),a._v(" 为此，垃圾收集器会按照固定的时间间隔（或代码执行中预定的收集时间），周期性地执行这一操作。")]),a._v(" "),t("p",[a._v("正因为垃圾回收器的存在，许多人认为 JavaScript 不用太关心内存管理的问题。其实不然，如果不了解 JavaScript 的垃圾回收机制，写出来的代码会容易成内存泄漏（内存无法被回收）的情况。所以，")]),a._v(" "),t("h3",{attrs:{id:"一、垃圾回收机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、垃圾回收机制","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、垃圾回收机制")]),a._v(" "),t("h4",{attrs:{id:"内存的分配场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存的分配场景","aria-hidden":"true"}},[a._v("#")]),a._v(" 内存的分配场景")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#1.1-%E5%AF%B9%E8%B1%A1"}},[a._v("对象")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#1.2-%E6%95%B0%E7%BB%84"}},[a._v("数组")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#1.3-%E5%AD%97%E7%AC%A6%E4%B8%B2"}},[a._v("字符串")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#1.4-%E5%87%BD%E6%95%B0"}},[a._v("函数")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#1.5-%E9%97%AD%E5%8C%85"}},[a._v("闭包")])])]),a._v(" "),t("h5",{attrs:{id:"_1-1-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-对象","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.1 对象")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("new Object();\nnew MyConstructor();\n{a:4,b:5}\nObject.create();\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h5",{attrs:{id:"_1-2-数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-数组","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.2 数组")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("new Array();\n[1,2,3,4];\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h5",{attrs:{id:"_1-3-字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-字符串","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.3 字符串")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// 3.字符串，JavaScript 的字符串和 .NET 一样，使用资源池和 copy on write 方式管理字符串。\nnew String("hello hyddd");\n"<p>" + e.innerHTML + "</p>"\n\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h5",{attrs:{id:"_1-4-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.4 函数")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var x = function () { ... }\nnew Function(code);\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h5",{attrs:{id:"_1-5-闭包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-闭包","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.5 闭包")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('function outer(name) {\n     var x = name;\n     return function inner() {\n        return "Hi, " + name;\n     }\n }\n\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h3",{attrs:{id:"二、内存的生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、内存的生命周期","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、内存的生命周期")]),a._v(" "),t("p",[a._v("函数中局部变量的正常生命周期。")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("内在分配：")]),a._v(" 局部变量只在函数执行的过程中存在。而在这个过程中，会为局部变量在栈（或堆）内存上分配相应的空间，以便存储它们的值。")]),a._v(" "),t("li",[t("strong",[a._v("内在使用：")]),a._v(" 然后在函数中使用这些变量，直到函数执行结束。")]),a._v(" "),t("li",[t("strong",[a._v("内存回收：")]),a._v(" 此时，局部变量就没有存在的必要了因此可以释放它们的内存以供将来使用。")])]),a._v(" "),t("p",[a._v("通常，很容易判断变量是否还有存在的必要，但并非所有情况下都这么容易就能得出结论（）。")]),a._v(" "),t("h3",{attrs:{id:"三、标记清除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、标记清除","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、标记清除")]),a._v(" "),t("p",[a._v("JavaScript 中最常用的垃圾收集方式是"),t("strong",[a._v("标记清除")]),a._v("。当变量进入环境（例如，在函数中声明一个变量）时，就将这个变量为“进入环境”。从逻辑上讲，永远不能释放进入环境的变量所占用的内存，因为只要执行流进入相应的环境，就可能会乃至它们。而当变量离开环境时，则将其标记为“离开环境”。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function test(){\n    var a = 10; //被标记，进入环境\n    var b=20;   // 被标记，进入环境\n}\ntest(); // 执行完毕之后a、b又被标离开环境，被回收。\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[a._v("垃圾回收器在运行的时候会给存储在内存中的所有变量都加上标记（当然，可以使用任何标记方式）。然后，它会去掉环境中的变量以及被环境中的变量引用的变量的标记（例如，闭包）。而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后，垃圾回收器完成内在清除工作，销毁那些带标记的值并回收它们所占用的内存空间。")]),a._v(" "),t("p",[a._v("这种方式的主要缺点就是如果某些对象被清理后，内在是不连续的，那么就算内存战胜率不高，例如只有 50%，但是由于内在空隙太多，后来的大对象甚至无法存储到内存之中，一般的处理方式都是在垃圾回收后进行整理操作，这种方式也叫"),t("strong",[a._v("标记整理")]),a._v("，整理的过程就是将不连续的内存向一端复制，使不连续的内存连续起来。")]),a._v(" "),t("p",[a._v("目前，IE9+、Firefox、Opera、Chrome 和 Safari 的 JavaScript 实现使用的都是"),t("strong",[a._v("标记清除")]),a._v("式的垃圾收集策略（或类似的策略），只不过垃圾收集的时间间隔互有不同。")]),a._v(" "),t("h3",{attrs:{id:"四、引用计数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、引用计数","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、引用计数")]),a._v(" "),t("p",[a._v("另一种不太常见的垃圾收集策略叫做"),t("strong",[a._v("引用计数")]),a._v("（reference counting）。引用计数的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是 1。如果同一个值又被赋给另一个变量，则该值的引用次数加 1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减 1。当这个值的引用次数变成 0 时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。这样，当垃圾收集器下次再运行时，它就会释放那些引用次数为零的值所占用的内存。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function test(){\n    var a = {} ; // a的引用次数为0\n    var b = a ; // a的引用次数加1，为1\n    var c = a; // a的引用次数再加1，为2\n    var b = {}; // a的引用次数减1，为1\n}\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("早期很多浏览器使用引用计数策略，但很它就遇到一个严重的问题："),t("strong",[a._v("循环引用")]),a._v("。循环引用指的是对象 A 中包含一个指向对象 B 的指针，而对象 B 中也包含一个指向对象 A 的引用。请看下面这个例子：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function problem(){\n    var objectA = new Object();\n    var objectB = new Object();\n\n    objectA.someOtherObject = objectB;\n    objectB.anotherObject = objectA;\n}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("在这个例子中，"),t("code",[a._v("objectA")]),a._v(" 和 "),t("code",[a._v("objectB")]),a._v(" 通过各自的属性相互引用；也就是说，这两个对象的引用次数都是 2。在采用 标记清除 策略的实现中，由于函数执行之后，这两个对象都离开了作用域，因此这种相互引用不是个问题。但在采用 引用计数 策略的实现中，当函数执行完毕后，"),t("code",[a._v("objectA")]),a._v(" 和 "),t("code",[a._v("objectB")]),a._v(" 还将继续存在，因为它们的引用次数永远不会是 0。假如这个函数被重复多次调用，就会导致大量内存得不到回收。为此，新一代浏览器都放弃了引用计数方式，转而采用标记清除来实现其垃圾收集机制。可是，引用计数导致的麻烦并未就此终结。")]),a._v(" "),t("p",[a._v("我们知道，IE 中有一部分对象并不是原生"),t("code",[a._v("JavaScript")]),a._v("对象。例如，其"),t("code",[a._v("BOM")]),a._v("和"),t("code",[a._v("DOM")]),a._v("中的对象就是使用"),t("code",[a._v("C++")]),a._v(" 以"),t("code",[a._v("COM")]),a._v("（Component Object Model，组件对象模型）对象的形式实现的，而"),t("code",[a._v("COM")]),a._v("对象的垃圾收集机制采用的就是引用计数策略。因此，即使 "),t("code",[a._v("IE")]),a._v("的"),t("code",[a._v("JavaScript")]),a._v("引擎是使用标记清除策略来实现的，但"),t("code",[a._v("JavaScript")]),a._v("访问的"),t("code",[a._v("COM")]),a._v("对象依然是基于引用计数策略的。换句话说，只要在 IE 中涉及"),t("code",[a._v("COM")]),a._v("对象，就会存在循环引用的问题。下面这个简单的例子，展示了使用"),t("code",[a._v("COM")]),a._v("对象导致的循环引用问题：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('var element = document.getElementById("some_element");\nvar myObject = new Object();\nmyObject.element = element;\nelement.someObject = myObject;\n\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("这个例子在一个"),t("code",[a._v("DOM")]),a._v("元素（element）与一个原生"),t("code",[a._v("JavaScript")]),a._v("对象（myObject）之间创建了循环引用。其中，变量 myObject 有一个名为"),t("code",[a._v("element")]),a._v("的属性指向"),t("code",[a._v("element")]),a._v("对象；而变量"),t("code",[a._v("element")]),a._v("也有一个属性名叫"),t("code",[a._v("someObject")]),a._v("回指 myObject。由于存在这个循环引用，即使将例子中的 DOM 从页面中移除，它也永远不会被回收。")]),a._v(" "),t("p",[a._v("为了避免类似这样的循环引用问题，最好是在不使用它们的时候手工断开原生"),t("code",[a._v("JavaScript")]),a._v("对象与"),t("code",[a._v("DOM")]),a._v("元素之间的连接。例如，可以使用下面的代码消除前面例子创建的循环引用：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("myObject.element = null;\nelement.someObject = null;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("将变量设置为"),t("code",[a._v("null")]),a._v("意味着切断变量与它此前引用的值之间的连接。当垃圾收集器下次运行时，就会删除这些值并回收它们占用的内存。")]),a._v(" "),t("p",[a._v("为了解决上述问题，"),t("code",[a._v("IE9")]),a._v("把"),t("code",[a._v("BOM")]),a._v(" 和"),t("code",[a._v("DOM")]),a._v("对象都转换成了真正的"),t("code",[a._v("JavaScript")]),a._v("对象。这样，就避免了两种垃圾收集算法并存导致的问题，也消除了常见的内存泄漏现象。")]),a._v(" "),t("h3",{attrs:{id:"五、ie6-的性能问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、ie6-的性能问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 五、IE6 的性能问题")]),a._v(" "),t("p",[a._v("IE6 的垃圾回收是根据内存分配量运行的，当环境中存在 256 个变量、4096 个对象、64k 的字符串任意一种情况的时候就会触发垃圾回收器工作，看起来很科学，不用按一段时间就调用一次，有时候会没必要，这样按需调用不是很好吗？但是如果环境中就是有这么多变量等一直存在，现在脚本如此复杂，那么垃圾回收器会一直工作，这样浏览器就没法儿玩儿了。")]),a._v(" "),t("p",[a._v("微软在"),t("code",[a._v("IE7")]),a._v("中做了调整，触发条件不再是固定的，而是动态修改的，初始值和"),t("code",[a._v("IE6")]),a._v("相同，如果垃圾回收器回收的内存分配量低于程序占用内存的 15%，说明大部分内存不可被回收，设的垃圾回收触发条件过于敏感，这时候把临界条件翻倍，如果回收的内存高于 85%，说明大部分内存早就该清理了，这时候则将各种临界值重置回默认值。这一看似简单的调整，极大地提升了"),t("code",[a._v("IE7")]),a._v("在运行包含大量"),t("code",[a._v("JavaScript")]),a._v("的页面时的性能。")]),a._v(" "),t("h3",{attrs:{id:"六、编码注意-解除引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、编码注意-解除引用","aria-hidden":"true"}},[a._v("#")]),a._v(" 六、编码注意-解除引用")]),a._v(" "),t("p",[a._v("使用具备垃圾收集机制的语言编写程序，开发人员一般不必操心内存管理的问题。但是，"),t("code",[a._v("JavaScript")]),a._v("在进行内存管理及垃圾收集时面临的问题还是有点与众不同。其中最主要的一个问题，就是分配给"),t("code",[a._v("Web")]),a._v("浏览器的可用内存数量通常要比分配给桌面应用程序的少。这样做的目的主要是出于安全方面的考虑，目的是防止运行"),t("code",[a._v("JavaScript")]),a._v("的网页耗尽全部系统内存而导致系统崩溃。内存限制问题不仅会影响给变量分配内存，同时还会影响调用栈以及在一个线程中能够同时执行的语句数量。")]),a._v(" "),t("p",[a._v("因此，确保占用最少的内存可以让页面获得更好的性能。而优化内存占用的最佳方式，就是为执行中的代码只保存必要的数据。一旦数据不再有用，最好通过将其值设置为"),t("code",[a._v("null")]),a._v("来释放其引用——这个做法叫做 解除引用（dereferencing）。这一做法适用于大多数全局变量和全局对象的属性。局部变量会在它们离开执行环境时自动被解除引用，如下面这个例子所示：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('function createPerson(name){\n    var localPerson = new Object();\n    localPerson.name = name;\n    return localPerson;\n}\n\nvar globalPerson = createPerson("Nicholas");\n\n// 手工解除globalPerson的引用\nglobalPerson = null;\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("p",[a._v("由于局部变量"),t("code",[a._v("localPerson")]),a._v("在"),t("code",[a._v("createPerson()")]),a._v("函数执行完毕后就离开了其执行环境，因此无需我们显式地去为它解除引用。但是对于全局变量 globalPerson 而言，则需要我们在不使用它的时候手工为它解除引用，这也正是上面例子中最后一行代码的目的。")]),a._v(" "),t("p",[a._v("不过，解除一个值的引用并不意味着自动回收该值所占用的内存。解除引用的真正作用是让值脱离执行环境，以便垃圾收集器下次运行时将其回收。")]),a._v(" "),t("h3",{attrs:{id:"七、垃圾回收的优化策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、垃圾回收的优化策略","aria-hidden":"true"}},[a._v("#")]),a._v(" 七、垃圾回收的优化策略")]),a._v(" "),t("p",[a._v("和其他语言一样，"),t("code",[a._v("JavaScript")]),a._v("的垃圾回收策略也无法避免一个问题：垃圾回收时，会停止响应其他操作，这是为了安全考虑。而"),t("code",[a._v("JavaScript")]),a._v("的垃圾回收在"),t("code",[a._v("100ms")]),a._v("甚至以上，对一般的应用还好，但对于 JavaScript 游戏和动画，这种对连贯性要求比较高的应用，就麻烦了。这就是新引擎需要优化的点：避免垃圾回收造成的长时间停止响应。")]),a._v(" "),t("p",[a._v("David 大叔主要介绍了 2 个优化方案，而这也是最主要的 2 个优化方案了：")]),a._v(" "),t("h3",{attrs:{id:"八、分代回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、分代回收","aria-hidden":"true"}},[a._v("#")]),a._v(" 八、分代回收")]),a._v(" "),t("p",[a._v("这个和 Java 回收策略思想是一致的。目的是通过区分「临时」与「持久」对象；多回收「临时对象区」（young generation），少回收「持久对象区」（tenured generation），减少每次需遍历的对象，从而减少每次 GC 的耗时。"),t("strong",[a._v("Chrome 浏览器所使用的 V8 引擎就是采用的分代回收策略。")]),a._v(" 如图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"memory01.jpg",alt:"images"}})]),a._v(" "),t("h3",{attrs:{id:"九、增量回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#九、增量回收","aria-hidden":"true"}},[a._v("#")]),a._v(" 九、增量回收")]),a._v(" "),t("p",[a._v("这个方案的思想很简单，就是「每次处理一点，下次再处理一点，如此类推」。这种方案，虽然耗时短，但中断较多，带来了上下文切换频繁的问题。"),t("strong",[a._v("Firefox 浏览器所使用的 JavaScript 引擎就是采用的增量回收策略。")]),a._v(" 如图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"memory02.jpg",alt:"images"}})]),a._v(" "),t("p",[a._v("因为每种方案都其适用场景和缺点，因此在实际应用中，会根据实际情况选择方案。例如：如果大量对象都是长期「存活」，则分代处理优势也不大。")]),a._v(" "),t("h3",{attrs:{id:"十、内存泄露"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十、内存泄露","aria-hidden":"true"}},[a._v("#")]),a._v(" 十、内存泄露")]),a._v(" "),t("ul",[t("li",[a._v("意外的全局变量: 无法被回收")]),a._v(" "),t("li",[a._v("定时器: 未被正确关闭，导致所引用的外部变量无法被释放")]),a._v(" "),t("li",[a._v("事件监听: 没有正确销毁 (低版本浏览器可能出现)")]),a._v(" "),t("li",[a._v("闭包: 会导致父级中的变量无法被释放")]),a._v(" "),t("li",[a._v("dom 引用: dom 元素被删除时，内存中的引用未被正确清空")])]),a._v(" "),t("h3",{attrs:{id:"十一、查看-chrome-浏览器下的-cg-过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十一、查看-chrome-浏览器下的-cg-过程","aria-hidden":"true"}},[a._v("#")]),a._v(" 十一、查看 Chrome 浏览器下的 CG 过程")]),a._v(" "),t("p",[a._v("参考"),t("a",{attrs:{href:"https://km.xiaowuzi.info/js/js-memory-1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("JS 内存泄漏、监控和分析"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("ul",[t("li",[a._v("离开作用的值将被自动标记为可以回收，因此将在垃圾收集期间被删除。")]),a._v(" "),t("li",[a._v("“标记清除”是目前主流的垃圾收集算法，这种算法的思想是给当前不使用的值加上标记，然后再回收其内存。")]),a._v(" "),t("li",[a._v("另一种垃圾收集算法是“引用计数”，这种算法的思想是跟踪记录所有值被引用的次数。JavaScript 引擎目前都不再使用这种算法；但在 IE 中访问非原生 JavaScript 对象（如 DOM 元素）时，这种算法仍然可能会导致问题。")]),a._v(" "),t("li",[a._v("当代码中存在循环引用现象时，“引用计数”算法就会导致问题。")]),a._v(" "),t("li",[a._v("解除变量的引用不仅有消除循环引用有助于消除循环引用现象，而且对垃圾收集也有好处。为了确保有效地回收内存，应该及时解除不再使用的全局对象、全局对象属性以及循环引用变量的引用。")])]),a._v(" "),t("h3",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/stone0090/javascript-lessons/tree/master/2.6-GC&MemoryManagement",target:"_blank",rel:"noopener noreferrer"}},[a._v("垃圾回收和内存管理"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/qq449245884/xiaozhi/issues/21",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaScript 是如何工作的：JavaScript 的内存模型"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/qq449245884/xiaozhi/issues/3",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaScript 如何工作:内存管理+如何处理 4 个常见的内存泄漏"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5d0706a6f265da1bc23f77a9",target:"_blank",rel:"noopener noreferrer"}},[a._v("「前端进阶」JS 中的内存管理"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://www.pingan8787.com/2019/02/16/140-%E3%80%90JavaScript%E3%80%91%E3%80%90%E9%87%8D%E6%B8%A9%E5%9F%BA%E7%A1%80%E3%80%9122-%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/",target:"_blank",rel:"noopener noreferrer"}},[a._v("【JavaScript】【重温基础】22.内存管理"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/iRHiu404yYXqCO_PGiJ7yA",target:"_blank",rel:"noopener noreferrer"}},[a._v("【第 1821 期】前端内存优化的探索与实践"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("《高程第 3 版》")]),a._v(" "),t("li",[a._v("《深入浅出 nodejs》")])]),a._v(" "),t("h2",{attrs:{id:"联系作者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);e.default=s.exports}}]);