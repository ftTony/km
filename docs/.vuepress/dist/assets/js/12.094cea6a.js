(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{260:function(a,s,n){"use strict";n.r(s);var t=n(4),e=Object(t.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"函数式编程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程","aria-hidden":"true"}},[a._v("#")]),a._v(" 函数式编程")]),a._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),n("p",[a._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),a._v(" "),n("h2",{attrs:{id:"内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"%E4%B8%80%E3%80%81%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B%E5%AE%9A%E4%B9%89"}},[a._v("函数式编程定义")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B%E7%89%B9%E6%80%A7"}},[a._v("函数式编程特性")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B%E5%8E%9F%E7%90%86"}},[a._v("函数式编程原理")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B%E5%BA%93"}},[a._v("函数式编程库")])])]),a._v(" "),n("h3",{attrs:{id:"一、函数式编程定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、函数式编程定义","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、函数式编程定义")]),a._v(" "),n("p",[a._v("函数式编程（functional programming）是一种编程范式，它将计算机视为函数运算，并且避免使用程序状态以及易变对象。其中λ 演算（lambda calculus）为该语言最重要的基础。而且，λ 演算的函数可以接受函数当作输入（引数）和输出（传出值）。")]),a._v(" "),n("p",[a._v("比起指令式编程，函数式编程关心数据的映射，命令式编程关心解决问题的步骤。函数式编程更加强调程序执行的结果而非执行的过程，倡导利用若干简单的执行单元让计算结果不断渐进，逐层推导复杂的运算，而不是设计一个复杂的执行过程。")]),a._v(" "),n("p",[a._v("函数式编程特点：")]),a._v(" "),n("ul",[n("li",[a._v("函数是一等公民")]),a._v(" "),n("li",[a._v("只用表达式，不用语句")]),a._v(" "),n("li",[a._v("没有副作用")]),a._v(" "),n("li",[a._v("不修改状态")]),a._v(" "),n("li",[a._v("引用透明")])]),a._v(" "),n("h3",{attrs:{id:"二、函数式编程特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、函数式编程特性","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、函数式编程特性")]),a._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#_1-1-%E7%BA%AF%E5%87%BD%E6%95%B0"}},[a._v("纯函数")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#_1-2-%E6%9F%AF%E9%87%8C%E5%8C%96"}},[a._v("柯里化")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#_1-3-%E5%87%BD%E6%95%B0%E7%BB%84%E5%90%88"}},[a._v("函数组合")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#_1-4-%E6%83%B0%E6%80%A7%E5%87%BD%E6%95%B0"}},[a._v("惰性函数")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#_1-5-%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0"}},[a._v("高阶函数")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#_1-6-%E9%97%AD%E5%8C%85"}},[a._v("闭包")])])]),a._v(" "),n("h4",{attrs:{id:"_1-1-纯函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-纯函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.1 纯函数")]),a._v(" "),n("p",[n("strong",[a._v("纯函数")]),a._v("是指对于相同的输入，永远得到相同的输出，而且没有任何可观察的副作用，也不依赖外部环境的状态。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("const array = [1, 2, 3, 4, 5];\nconst a1 = array.slice(0, 2);\n// array = [1,2,3,4,5]\n// a1 = [1,2]\nconst a2 = array.slice(0, 2);\n// array = [1,2,3,4,5]\n// a2 = [1,2]\nconst b1 = array.splice(0, 2);\n// array = [3,4,5]\n// b1 = [1,2]\nconst b2 = array.splice(0, 2);\n// array = [5]\n// b2 = [3,4]\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br")])]),n("p",[a._v("可以看到，Array.slice是纯函数，因为同样的输入，永远得到相同的输出，并且不会影响外部变量（没有副作用）。而Array.splice不是纯函数，因为同样的输入，输出并不相同，而且修改了原数组（有副作用）。")]),a._v(" "),n("h4",{attrs:{id:"_1-2-柯里化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-柯里化","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.2 柯里化")]),a._v(" "),n("p",[n("strong",[a._v("柯里化")]),a._v(" 是指传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var checkage = min => age => age > min;\nvar checkage20 = checkage(20);\ncheckage20(100);\n// true\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[a._v("第一步，根据参数20，返回一个检查年龄是否大于20的新函数，第二步，传递参数，检查年龄是否大于20。")]),a._v(" "),n("h4",{attrs:{id:"_1-3-函数组合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-函数组合","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.3 函数组合")]),a._v(" "),n("p",[n("strong",[a._v("函数组合")]),a._v(" 定义一个组合函数来讲多个函数调用组合成一个，国了解决类似的函数嵌套问题"),n("code",[a._v("f(h(j(h())))")]),a._v("。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var compose = (f,g) => x => f(g(x));\n\nfunction add(a){\n    return a+a;\n}\n\nfunction multi(a){\n    return a*a;\n}\n\nconst c = compose(add,multi);\nc(3);   //18\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br")])]),n("h4",{attrs:{id:"_1-4-惰性函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-惰性函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.4 惰性函数")]),a._v(" "),n("p",[n("strong",[a._v("惰性函数")]),a._v(" 是“比较懒的函数”，只执行一次就不执行了，是因为缓存了上一次的结果，直接拿来用。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var t;\nfunction f(a){\n    if(t) return t;\n    var e = parseInt(a,10);\n    alert('测试有没有重复！');\n    e = e * e;\n    t = e;\n    return t;\n}\nalert(f('3'));\nalert(f('3'));\nalert(f('4')); // 不会弹出16的，因为这是“隋性”，只计算一次\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br")])]),n("h4",{attrs:{id:"_1-5-高阶函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-高阶函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.5 高阶函数")]),a._v(" "),n("p",[a._v("将函数当参数，把传入的函数做一个封装，然后返回这个封装函数，达到更高程序的抽象。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("function hoc(fn){\n    console.log('begin');\n    const result = fn();\n    console.log('end');\n    return result;\n}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("h4",{attrs:{id:"_1-6-闭包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-闭包","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.6 闭包")]),a._v(" "),n("p",[a._v("闭包的概念来源于 19 世纪 60 年代，在 1975 年被作为一个语言的编程特征实现，用作支持词法范围的函数是一等公民的函数式编程。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("function a(x){\n    return function(y){\n        return x+y;\n    }\n}\nvar a1 = a(1);\na1(3);  //4\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("p",[a._v("虽然外部 a 执行完毕，栈上的帧被释放，但是堆上的作用域并不能被释放，因此 x 依旧可以被外部函数访问，这样就形成的闭包。")]),a._v(" "),n("h3",{attrs:{id:"三、函数式编程原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、函数式编程原理","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、函数式编程原理")]),a._v(" "),n("p",[a._v("函数式编程的起源，是一门叫做范畴论（Category Theory）的数学分支。")]),a._v(" "),n("p",[a._v("彼此之间存在某种关系的概念、事物、对象等等，都构成“范畴”。随便什么东西，只要能找出它们之间的关系就能定义一个“范畴”。")]),a._v(" "),n("p",[a._v("我们可以把“范畴”想象成是一个容器，里面包含两样东西。")]),a._v(" "),n("ul",[n("li",[a._v("值（value）")]),a._v(" "),n("li",[a._v("值的变形关系，也就是函数。")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("class Category{\n    constructor(val){\n        this.val = val;\n    }\n\n    addOne(x){\n        return x+1;\n    }\n}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br")])]),n("p",[a._v("上面代码中，Category是一个类，也是一个容器，里面包含一个值(this.val)和一种变形关系(addOne)。你可能已经看出来了，这里的范畴，就是所有彼此之间相差1的数字。")]),a._v(" "),n("h4",{attrs:{id:"范畴论与函数式编程的关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#范畴论与函数式编程的关系","aria-hidden":"true"}},[a._v("#")]),a._v(" 范畴论与函数式编程的关系")]),a._v(" "),n("p",[a._v("范畴论使用函数，表达范畴之间的关系。")]),a._v(" "),n("p",[a._v("伴随着范畴论的发展，就发展出一整套函数的运算方法。这套方法起初只用于数字运算，后来有人将它在计算机上实现了，就变成了今天的"),n("strong",[a._v("函数式编程")]),a._v("。")]),a._v(" "),n("p",[a._v("本质上，函数式编程只是范畴论的运算方法，跟数理逻辑、微积分、行列式是同一类东西，都是数学方法，只是碰巧它能用来写程序。")]),a._v(" "),n("p",[a._v("所以，为什么函数式编程要求函数必须是纯的，不能有副作用？因为它是一种数学运算，原始目的就是求值，不做其他事情，否则就无法满足函数运算法则了。")]),a._v(" "),n("p",[a._v("总之，在函数式编程中，函数就是一个管道（pipe）。这头进去一个值，那头就会出来一个新的值，没有其他作用。")]),a._v(" "),n("h4",{attrs:{id:"函子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函子","aria-hidden":"true"}},[a._v("#")]),a._v(" 函子")]),a._v(" "),n("p",[a._v("函数不仅可以用于同一个范畴中值的转换，还可以用于将一个范畴转换成另一个范畴。这就涉及到了函子(Functor)。")]),a._v(" "),n("p",[a._v("函子是函数式编程里面最重要的数据类型，也是基本的运算单位和功能单位。")]),a._v(" "),n("p",[a._v("它首先是一种范畴，也就是说，是一个容器，包含了值和变形关系。比较特殊的是，它的变形关系可以依次作用于每一个值，将当前容器变形成另一个容器。")]),a._v(" "),n("p",[a._v("函子的代码实现：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// 任何具有map方法的数据结构，都可以当作函子的实现。\nclass Functor{\n    constructor(val){\n        this.val = val;\n    }\n\n    map(f){\n        return Functor.of(f(this.val));\n    }\n}\n\nFunctor.of = function(value){\n    return new this(value);\n}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br")])]),n("p",[a._v("上面代码中，Functor是一个函子，它的map方法接受函数f作为参数，然后返回一个新的函子，里面包含的值是被f处理过的f(this.val)。")]),a._v(" "),n("p",[a._v("一般约定，函子的标志就是容器具有map方法。该方法将容器里面的每一个值，映射到另一个容器。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("new Functor(2).map(function(two){\n    return two + 2;\n});\n// Functor(4)\n\nnew Functor('flamethrowers').map(function(s){\n    return s.toUpperCase();\n});\n// Functor('FLAMETHROWERS')\n\nnew Functor('bombs').map(_.concat('away')).map(_.prop('length'));\n// Functor(10)\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br")])]),n("p",[a._v("上面的例子说明，函数式编程里面的运算，都是通过函子完成，即运算不直接针对值，而是针对这个值的容器---函子。函子本身具有对外接口（map方法），各种函数就是去处符，通过接口接入容器，引发容器里面的值的变形。")]),a._v(" "),n("p",[a._v("因此，学习函数式编程，实际上就是学习函子的各种运算。由于可以把运算方法封装在函子里面，所以又衍生出各种不同类型的函子，有多少种运算，就有多少种函子。函数式编程就变成了运用不同的函子，解决实际问题。")]),a._v(" "),n("h4",{attrs:{id:"of-方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#of-方法","aria-hidden":"true"}},[a._v("#")]),a._v(" Of 方法")]),a._v(" "),n("p",[a._v("你可能注意到了，上面生成新的函子的时候，用了 new 命令。这实在太不像函数式编程了，因为 new 命令是面向对象编程的标志。")]),a._v(" "),n("p",[a._v("函数式编程一般约定，函子有一个 of 方法，用来生成新的容器。")]),a._v(" "),n("p",[a._v("下面就用 of 方法替换掉 new。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("Functor.of = function(val){\n    return new Functor(val);\n};\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br")])]),n("p",[a._v("然后，前面的例子就可以改成下面这样。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("Functor.of(2).map(function(two){\n    return two +2;\n});\n// Functor(2)\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[a._v("这就更像函数式编程了。")]),a._v(" "),n("h4",{attrs:{id:"maybe-函子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maybe-函子","aria-hidden":"true"}},[a._v("#")]),a._v(" Maybe 函子")]),a._v(" "),n("p",[a._v("函子接受各种函数，处理容器内部的值。这里就有一个问题，容器内部的值可能是一个空值（比如null），而外部函数未必有处理空值的机制，如果传入空值，很可能就会出错。")]),a._v(" "),n("p",[a._v("Maybe函子就是为了解决这一类问题而设计的。简单说，它的map方法里面设置了空值检查。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("class Maybe extends Functor{\n    constructor(value){\n        super();\n        this.val = value;\n    }\n    isnothing(){\n        return !!!this.val;\n    }\n\n    map(f){\n        if(this.isnothing()){\n            // 如果没有值，不执行变形函数，直接返回一个新函子null。\n            return Maybe.of(null);\n        }else{\n            return Maybe.of(f(this.val));\n        }\n    }\n}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br")])]),n("h4",{attrs:{id:"either-函子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#either-函子","aria-hidden":"true"}},[a._v("#")]),a._v(" Either 函子")]),a._v(" "),n("p",[a._v("条件运算 if...else 是最常见的运算之一，函数式编程里面，使用 Either 函子表达。")]),a._v(" "),n("p",[a._v("Either 函子内部有两个值：左值（Left）和右值（Right）。右值是正常情况下使用的值，左值是右值不存在时使用的默认值。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("class Either extends Functor{\n    constructor(value){\n        super();\n        this.val = value;\n    }\n    isnothing(){\n        return !!!this.val;\n    }\n    map(left,right){\n        if(this.isnothing()){\n            return Either.of(left(null));\n        }else{\n            return Either.of(right(this.val));\n        }\n    }\n}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br")])]),n("h4",{attrs:{id:"ap-函子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ap-函子","aria-hidden":"true"}},[a._v("#")]),a._v(" AP 函子")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("function addTwo(x){\n    return x+2;\n}\n\nconst A = Functor.of(2);\nconst B = Functor.of(addTwo);\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br")])]),n("p",[a._v("上面代码中，函子A内部的值是2，函子B内部的值是函数addTwo。")]),a._v(" "),n("p",[a._v("有时，我们想让函子B内部的函数，可以使用函子A内部的值进行运算。这时就需要用到ap函子。")]),a._v(" "),n("p",[a._v("ap 是 applicative（应用）的缩写。凡是部署了 ap 方法的函子，就是 ap 函子。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("class Ap extends Functor {\n  constructor(value) {\n    super();\n    this.val = value;\n  }\n  ap(F) {\n    return Ap.of(this.val(F.val));\n  }\n}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br")])]),n("p",[a._v("注意，ap 方法的参数不是函数，而是另一个函子。")]),a._v(" "),n("p",[a._v("因此，前面例子可以写成下面的形式。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("Ap.of(addTwo).ap(Functor.of(2));\n// Ap(4)\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("p",[a._v("ap函子的意义在于，对于那些多参数的函数，就可以从多个容器之中取值，"),n("strong",[a._v("实现函子的链式操作")]),a._v("。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("function add(x){\n    return function(y){\n        return x+y;\n    }\n}\n\nAp.of(add).ap(Maybe.of(2)).ap(Maybe.of(3));\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("p",[a._v("上面代码中，函数 add 是柯里化以后的形式，一共需要两个参数。通过 ap 函子，我们就可以实现从两个容器之中取值。它还有另外一种写法。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("Ap.of(add(2)).ap(Maybe.of(3));\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("h4",{attrs:{id:"monad-函子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#monad-函子","aria-hidden":"true"}},[a._v("#")]),a._v(" Monad 函子")]),a._v(" "),n("p",[a._v("函子是一个容器，可以包含任何值。函子之中再包含一个函子，也是完全合法的。但是，这样就会出现多层嵌套的函子。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("Maybe.of(Maybe.of(Maybe.of({ name: 'Mulburry', number: 8402 })));\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("上面这个函子，一共有三个Maybe嵌套。如果要取出内部的值，就要连续取三次this.val。这当然很不方便，因此就出现了Monad函子。")]),a._v(" "),n("p",[a._v("Monad 函子的作用是，总是返回一个单层的函子。它有一个 flatMap 方法，与 map 方法作用相同，唯一的区别是如果生成了一个嵌套函子，它会取出后者内部的值，保证返回的永远是一个单层的容器，不会出现嵌套的情况。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("class Monad extends Functor {\n  join() {\n    return this.val;\n  }\n  flatMap(f) {\n    return this.map(f).join();\n  }\n}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br")])]),n("p",[a._v("上面代码中，如果函数 f 返回的是一个函子，那么 this.map(f)就会生成一个嵌套的函子。所以，join 方法保证了 flatMap 方法总是返回一个单层的函子。这意味着嵌套的函子会被铺平（flatten）。")]),a._v(" "),n("h4",{attrs:{id:"io-函子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#io-函子","aria-hidden":"true"}},[a._v("#")]),a._v(" IO 函子")]),a._v(" "),n("p",[a._v("Monad函子的重要应用，就是实现I/O（输入输出）操作。")]),a._v(" "),n("p",[a._v("I/O是不纯的操作，普通的函数式编程没法做，这时就需要把I/O操作写成Monad函子，通过它来完成。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var fs = require('fs');\n\nvar readFile = function(filename){\n    return new IO(function(){\n        return fs.readFileSync(filename,'utf-8');\n    })\n}\n\nvar print = function(x){\n    return new IO(function(){\n        console.log(x);\n        return x;\n    });\n};\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br")])]),n("p",[a._v("上面代码中，读取文件和打印本身都是不纯的操作，但readFile和print却是纯函数，因为它们总是返回IO函子。")]),a._v(" "),n("p",[a._v("如果IO函子是一个Monad，具有flatMap方法，那么我们就可以像下面这样调用这两个函数。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("readFile('./user.txt').flatMap(print);\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("这就是神奇的地方，上面的代码完成了不纯的操作，但是因为flatMap返回的还是一个IO函子，所以这个表达式是纯的。我们通过一个纯的表达式，完成带有副作用的操作，这就是Monad的作用。")]),a._v(" "),n("p",[a._v("由于返回还是IO函子，所以可以实现链式操作。因此，在大多数库里面，flatMap方法被改名成chain。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var tail = function(x){\n    return new IO(function(){\n        return x[x.length-1];\n    });\n};\n\nreadFile('./user.txt').flatMap(tail).flatMap(print);\n\n// 等同于\nreadFile('./user.txt')\n  .chain(tail)\n  .chain(print);\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br")])]),n("p",[a._v("上面代码读取了文件user.txt，然后选取最后一行输出。")]),a._v(" "),n("h3",{attrs:{id:"四、函数式编程库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、函数式编程库","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、函数式编程库")]),a._v(" "),n("ul",[n("li",[a._v("RxJS")]),a._v(" "),n("li",[a._v("CycleJS")]),a._v(" "),n("li",[a._v("LoadshJS")]),a._v(" "),n("li",[a._v("UnderscoreJS")]),a._v(" "),n("li",[a._v("RamdaJS")])]),a._v(" "),n("h3",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),n("p",[a._v("函数式编程是一个非常大的话题，这里只是简单的列举出了一些案例，希望读者看完之后能有个整体的了解。")]),a._v(" "),n("ul",[n("li",[a._v("面向过程编程：想到哪写到哪。")]),a._v(" "),n("li",[a._v("函数式编程：提纯无关业务的纯函数，函数套函数产生神奇的效果。\n"),n("ul",[n("li",[a._v("函数式编程里，同样的输入一定会有同样的输出，永远不依赖外部的状态。")]),a._v(" "),n("li",[a._v("纯函数可以记忆（同样的输入一定会有同样的输出），不跟外界有任何关系，抽象代码方便。")]),a._v(" "),n("li",[a._v("函数式编程可以解决多纯种死锁问题，在每一个函数式编程里面，根本不设计到外部的那个被几个线程争执的变量。")]),a._v(" "),n("li",[a._v("函数式编程可以用来抽象业务逻辑，当系统里面有很多可复用，组合起来有更强大的功能的时候，可以考虑抽库，增加代码健壮性，方便单元测试。")]),a._v(" "),n("li",[a._v("函数式编程会充盈着大量的闭包，闭包是js中觉的核心知识。")]),a._v(" "),n("li",[a._v("函数柯里化：函数接收一堆参数，返回一个新函数，用来继续接收参数，处理业务逻辑。它可以记住参数，相当于是对参数的一种缓存。")]),a._v(" "),n("li",[a._v("函数组合：是为了解决多个函数嵌套调用产生的洋葱式的代码。")]),a._v(" "),n("li",[a._v("惰性函数：比较懒的函数，下一次就不想再求值了（将上一次的运行结果缓存起来了）。")]),a._v(" "),n("li",[a._v("高阶函数：将函数传给函数，让函数具有更复杂的能力和功能。")])])])]),a._v(" "),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://lmjben.github.io/blog/base-functional.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("函数式编程"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"https://wizardforcel.gitbooks.io/functional-light-js/content/",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaScript 轻量级函数式编程"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/",target:"_blank",rel:"noopener noreferrer"}},[a._v("函数式编程"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("函数式编程入门教程"),n("OutboundLink")],1)])]),a._v(" "),n("h2",{attrs:{id:"联系作者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),n("div",{attrs:{align:"center"}},[n("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),n("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=e.exports}}]);