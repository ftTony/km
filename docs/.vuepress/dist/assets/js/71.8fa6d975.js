(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{264:function(n,s,a){"use strict";a.r(s);var t=a(2),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"执行上下文与执行上下文栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文与执行上下文栈","aria-hidden":"true"}},[n._v("#")]),n._v(" 执行上下文与执行上下文栈")]),n._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),a("p",[n._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),n._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[n._v("#")]),n._v(" 内容")]),n._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E7%9A%84%E7%B1%BB%E5%9E%8B"}},[n._v("执行上下文的类型")])]),n._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E6%89%A7%E8%A1%8C%E6%A0%88"}},[n._v("执行栈")])]),n._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E7%9A%84%E5%88%9B%E5%BB%BA"}},[n._v("执行上下文的创建")])]),n._v(" "),a("li",[a("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E6%89%A7%E8%A1%8C%E8%BF%87%E7%A8%8B"}},[n._v("执行过程")])]),n._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E4%B8%89%E4%B8%AA%E9%87%8D%E8%A6%81%E5%B1%9E%E6%80%A7"}},[n._v("执行上下文三个重要属性")])])]),n._v(" "),a("h3",{attrs:{id:"一、执行上下文的类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、执行上下文的类型","aria-hidden":"true"}},[n._v("#")]),n._v(" 一、执行上下文的类型")]),n._v(" "),a("h4",{attrs:{id:"_1-1-执行上下文总共有三种类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-执行上下文总共有三种类型","aria-hidden":"true"}},[n._v("#")]),n._v(" 1.1 执行上下文总共有三种类型")]),n._v(" "),a("ul",[a("li",[a("strong",[n._v("全局执行上下文")]),n._v("：只有一个，浏览器中的全局对象就是window对象，"),a("code",[n._v("this")]),n._v("指向这个全局对象")]),n._v(" "),a("li",[a("strong",[n._v("函数执行上下文")]),n._v("：存在无数个，只有在函数被调用的时候才会被创建，每次调用函数都会创建一个新的执行上下文。")]),n._v(" "),a("li",[a("strong",[n._v("Eval函数执行上下文")]),n._v("：指的是运行在eval函数中的代码，很少用而且不建议使用。")])]),n._v(" "),a("h3",{attrs:{id:"二、执行栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、执行栈","aria-hidden":"true"}},[n._v("#")]),n._v(" 二、执行栈")]),n._v(" "),a("p",[n._v("执行栈，也叫调用栈，具有 LIFO（后进先出）结构，用于存储在代码执行期间创建的所有执行上下文。")]),n._v(" "),a("p",[n._v("首次运行JS代码时，会创建一个"),a("strong",[n._v("全局")]),n._v("执行上下文并Push到当前的执行栈中。每当发生函数调用，引擎都会为该函数创建一个"),a("strong",[n._v("新的函数")]),n._v("执行上下文并Push到当前执行栈的栈顶。")]),n._v(" "),a("p",[n._v("根据执行栈LIFO规则，当栈顶"),a("strong",[n._v("函数")]),n._v("运行完成后，其对应的函数执行上下文将会从执行栈中Pop出，上下文控制权将移到当前执行栈的下一个执行上下文。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("var a = 'Hello World!';\n\nfunction first() {  \n  console.log('Inside first function');  \n  second();  \n  console.log('Again inside first function');  \n}\n\nfunction second() {  \n  console.log('Inside second function');  \n}\n\nfirst();  \nconsole.log('Inside Global Execution Context');\n\n// Inside first function\n// Inside second function\n// Again inside first function\n// Inside Global Execution Context\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://camo.githubusercontent.com/2b271448ad38e8fde43f28db066af7dbe356cbb3/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323031382f31312f352f313636653235386531643032383161363f696d61676556696577322f302f772f313238302f682f3936302f666f726d61742f776562702f69676e6f72652d6572726f722f31",alt:"image"}})]),n._v(" "),a("h4",{attrs:{id:"对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对比","aria-hidden":"true"}},[n._v("#")]),n._v(" 对比")]),n._v(" "),a("p",[n._v("有如下两段代码，执行的结果是一样的，但是两段代码究竟有什么不同？")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('var scope="global scope";\nfunction checkscope(){\n  var scope="local scope";\n  function fn(){\n    return scope;\n  }\n  return fn();\n}\ncheckscope();\n\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('var scope="global scope";\nfunction checkscope(){\n  var scope="local scope";\n  function f(){\n    return scope;\n  }\n  return f;\n}\ncheckscope()();\n\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br")])]),a("p",[n._v("两段代码执行的结果一样，但是两段代码究竟有哪些不同呢？")]),n._v(" "),a("p",[n._v("答案就是执行上下文栈的变化不一样。")]),n._v(" "),a("p",[n._v("让我们模拟第一段代码：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("ECStack.push(<checkscope> functionContext);\nECStack.push(<f> functionContext);\nECStack.pop();\nECStack.pop();\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br")])]),a("p",[n._v("让我们模拟第二段代码：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("ECStack.push(<checkscope> functionContext);\nECStack.pop();\nECStack.push(<f> functionContext);\nECStack.pop();\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br")])]),a("h3",{attrs:{id:"三、执行上下文的创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、执行上下文的创建","aria-hidden":"true"}},[n._v("#")]),n._v(" 三、执行上下文的创建")]),n._v(" "),a("p",[n._v("执行上下文分两个阶段创建："),a("strong",[n._v("1）创建阶段； 2）执行阶段")])]),n._v(" "),a("h4",{attrs:{id:"_3-1-创建阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-创建阶段","aria-hidden":"true"}},[n._v("#")]),n._v(" 3.1 创建阶段")]),n._v(" "),a("ul",[a("li",[n._v("确定this的值，也被称为"),a("strong",[n._v("This Binding")])]),n._v(" "),a("li",[a("strong",[n._v("LexicalEnvironment（词法环境）")]),n._v(" 组件被创建。")]),n._v(" "),a("li",[a("strong",[n._v("VariableEnvironment（变量环境）")]),n._v(" 组件被创建。")])]),n._v(" "),a("p",[n._v("直接看伪代码可能更加直观")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("ExecutionContext = {  \n  ThisBinding = <this value>,     // 确定this \n  LexicalEnvironment = { ... },   // 词法环境\n  VariableEnvironment = { ... },  // 变量环境\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br")])]),a("h5",{attrs:{id:"_3-1-1-this-binding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-this-binding","aria-hidden":"true"}},[n._v("#")]),n._v(" 3.1.1 This Binding")]),n._v(" "),a("ol",[a("li",[a("strong",[n._v("全局")]),n._v("执行上下文中，this 的值指向全局对象，在浏览器中this 的值指向 window 对象，而在nodejs中指向这个文件的module对象。")]),n._v(" "),a("li",[a("strong",[n._v("函数")]),n._v("执行上下文中，this 的值取决于函数的调用方式。具体有：默认绑定、隐式绑定、显式绑定（硬绑定）、new绑定、箭头函数，具体内容在【"),a("a",{attrs:{href:"https://github.com/ftTony/blog/issues/6",target:"_blank",rel:"noopener noreferrer"}},[n._v("this解析"),a("OutboundLink")],1),n._v("】部分详解。")])]),n._v(" "),a("h5",{attrs:{id:"_3-1-2-词法环境（lexical-environment）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-词法环境（lexical-environment）","aria-hidden":"true"}},[n._v("#")]),n._v(" 3.1.2 词法环境（Lexical Environment）")]),n._v(" "),a("p",[n._v("词法环境有两个"),a("strong",[n._v("组成部分")])]),n._v(" "),a("ul",[a("li",[a("strong",[n._v("环境记录")]),n._v("：存储变量和函数声明的实际位置")]),n._v(" "),a("li",[a("strong",[n._v("对外部环境的引用")]),n._v("：可以访问其外部词法环境")])]),n._v(" "),a("p",[n._v("词法环境有两种"),a("strong",[n._v("类型")])]),n._v(" "),a("ol",[a("li",[a("p",[a("strong",[n._v("全局环境")]),n._v("：是一个没有外部环境的词法环境，其外部环境引用为null。拥有一个全局对象（window对象）及其关联的方法和属性（例如数组方法）以及任何用户自定义的全局变量，this 的值指向这个全局对象。")])]),n._v(" "),a("li",[a("p",[a("strong",[n._v("函数环境")]),n._v("：用户在函数中字义的变量被存储在"),a("strong",[n._v("环境记录")]),n._v("中，包含了"),a("code",[n._v("arguments")]),n._v("对象。对外部环境的引用可以是全局环境，也可以是包含内部的外部函数环境。")])]),n._v(" "),a("li",[a("p",[a("strong",[n._v("直接看伪代码可能更加直观")])])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('GlobalExectionContext = {  // 全局执行上下文\n  LexicalEnvironment: {    \t  // 词法环境\n    EnvironmentRecord: {   \t\t// 环境记录\n      Type: "Object",      \t\t   // 全局环境\n      // 标识符绑定在这里 \n      outer: <null>  \t   \t\t   // 对外部环境的引用\n  }  \n}\n\nFunctionExectionContext = { // 函数执行上下文\n  LexicalEnvironment: {  \t  // 词法环境\n    EnvironmentRecord: {  \t\t// 环境记录\n      Type: "Declarative",  \t   // 函数环境\n      // 标识符绑定在这里 \t\t\t  // 对外部环境的引用\n      outer: <Global or outer function environment reference>  \n  }  \n}\n\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br")])]),a("h5",{attrs:{id:"_3-1-3-变量环境（variable-environment）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-变量环境（variable-environment）","aria-hidden":"true"}},[n._v("#")]),n._v(" 3.1.3 变量环境（Variable Environment）")]),n._v(" "),a("p",[n._v("变量环境也是一个词法环境，因此它具有上面定义的词法环境的所有属性。")]),n._v(" "),a("p",[n._v("在 ES6 中，"),a("strong",[n._v("词法环境")]),n._v("和"),a("strong",[n._v("变量环境")]),n._v("的区别在于前者用于存储函数声明和变量（ let 和 const ）绑定，而后者仅用于存储变量（ var ）绑定。")]),n._v(" "),a("p",[n._v("使用例子进行介绍")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("let a = 20;  \nconst b = 30;  \nvar c;\n\nfunction multiply(e, f) {  \n var g = 20;  \n return e * f * g;  \n}\n\nc = multiply(20, 30);\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br")])]),a("p",[n._v("执行上下文如下所示")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('GlobalExectionContext = {\n\n  ThisBinding: <Global Object>,\n\n  LexicalEnvironment: {  \n    EnvironmentRecord: {  \n      Type: "Object",  \n      // 标识符绑定在这里  \n      a: < uninitialized >,  \n      b: < uninitialized >,  \n      multiply: < func >  \n    }  \n    outer: <null>  \n  },\n\n  VariableEnvironment: {  \n    EnvironmentRecord: {  \n      Type: "Object",  \n      // 标识符绑定在这里  \n      c: undefined,  \n    }  \n    outer: <null>  \n  }  \n}\n\nFunctionExectionContext = {  \n   \n  ThisBinding: <Global Object>,\n\n  LexicalEnvironment: {  \n    EnvironmentRecord: {  \n      Type: "Declarative",  \n      // 标识符绑定在这里  \n      Arguments: {0: 20, 1: 30, length: 2},  \n    },  \n    outer: <GlobalLexicalEnvironment>  \n  },\n\n  VariableEnvironment: {  \n    EnvironmentRecord: {  \n      Type: "Declarative",  \n      // 标识符绑定在这里  \n      g: undefined  \n    },  \n    outer: <GlobalLexicalEnvironment>  \n  }  \n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br")])]),a("p",[a("strong",[n._v("变量提升")]),n._v("的原因：在创建阶段，函数声明存储在环境中，而变量会被设置为 undefined（在 var 的情况下）或保持未初始化（在 let 和 const 的情况下）。所以这就是为什么可以在声明之前访问 var 定义的变量（尽管是 undefined ），但如果在声明之前访问 let 和 const 定义的变量就会提示引用错误的原因。这就是所谓的变量提升。")]),n._v(" "),a("h4",{attrs:{id:"_3-2-执行阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-执行阶段","aria-hidden":"true"}},[n._v("#")]),n._v(" 3.2 执行阶段")]),n._v(" "),a("p",[n._v("此阶段，完成对所有变量的分配，最后执行代码。")]),n._v(" "),a("p",[n._v("如果 Javascript 引擎在源代码中声明的实际位置找不到 let 变量的值，那么将为其分配 undefined 值。")]),n._v(" "),a("h3",{attrs:{id:"四、函数上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、函数上下文","aria-hidden":"true"}},[n._v("#")]),n._v(" 四、函数上下文")]),n._v(" "),a("p",[n._v("在函数上下文中，用活动对象(activation object, AO)来表示变量对象。")]),n._v(" "),a("p",[n._v("活动对象和变量对象的区别在于")]),n._v(" "),a("ol",[a("li",[n._v("变量对象（VO）是规范上或者是JS引擎上实现的，并不能在JS环境中直接访问。")]),n._v(" "),a("li",[n._v("当进入到一个执行上下文后，这个变量对象才会被"),a("strong",[n._v("激活")]),n._v("，所以叫活动对象（AO），这时候活动对象上的各种属性才能被访问。")])]),n._v(" "),a("p",[n._v("调用函数时，会为其创建一个"),a("strong",[n._v("Arguments对象")]),n._v("，并自动初始化局部变量arguments，指代该Arguments对象。所有作为参数传入的值都会成为Arguments对象的数组元素。")]),n._v(" "),a("h3",{attrs:{id:"四、执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、执行过程","aria-hidden":"true"}},[n._v("#")]),n._v(" 四、执行过程")]),n._v(" "),a("p",[n._v("执行上下文的代码会分成两个阶段进行处理：分析和执行，我们也可以叫做：")]),n._v(" "),a("ul",[a("li",[n._v("进入执行上下文")]),n._v(" "),a("li",[n._v("代码执行")])]),n._v(" "),a("h4",{attrs:{id:"_4-1-进入执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-进入执行上下文","aria-hidden":"true"}},[n._v("#")]),n._v(" 4.1 进入执行上下文")]),n._v(" "),a("p",[n._v("当进入执行上下文时，这时候还没有执行代码，")]),n._v(" "),a("p",[n._v("变量对象会包括：")]),n._v(" "),a("ol",[a("li",[n._v("函数的所有形参（如果是函数上下文）")])]),n._v(" "),a("ul",[a("li",[n._v("由名称和对应值组成的一个变量对象的属性被创建")]),n._v(" "),a("li",[n._v("没有实参，属性值设为undefined")])]),n._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[n._v("函数声明")])]),n._v(" "),a("ul",[a("li",[n._v("由名称和对应值（函数对象（function-object））组成一个变量对象的属性被创建")]),n._v(" "),a("li",[n._v("如果变量对象已经存在相同名称的属性，则完全替换这个属性")])]),n._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[n._v("变量声明")])]),n._v(" "),a("ul",[a("li",[n._v("由名称和对应值（undefined）组成一个变量对象的属性被创建；")]),n._v(" "),a("li",[n._v("如果变量名称跟已经声明的形参或函数相同，则变量声明不会干扰已经存在的这类属性")])]),n._v(" "),a("p",[n._v("举个例子")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("\nfunction foo(a) {\n  var b = 2;\n  function c() {}\n  var d = function() {};\n\n  b = 3;\n\n}\n\nfoo(1);\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br")])]),a("p",[n._v("在进入执行上下文后，这时候的 AO 是：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("AO={\n  arguments:{\n    0:1,\n    length:1\n  },\n  a:1,\n  b:undefined,\n  c:reference to function c(){},\n  d:undefined\n}\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br")])]),a("h4",{attrs:{id:"_4-2-代码执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-代码执行","aria-hidden":"true"}},[n._v("#")]),n._v(" 4.2 代码执行")]),n._v(" "),a("p",[n._v("在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值")]),n._v(" "),a("p",[n._v("还是上面的例子，当代码执行完后，这时候的 AO 是：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('AO = {\n    arguments: {\n        0: 1,\n        length: 1\n    },\n    a: 1,\n    b: 3,\n    c: reference to function c(){},\n    d: reference to FunctionExpression "d"\n}\n\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br")])]),a("p",[n._v("总结我们上述所说：")]),n._v(" "),a("ol",[a("li",[n._v("全局上下文的变量对象初始化是全局对象")]),n._v(" "),a("li",[n._v("函数上下文的变量对象初始化只包括 Arguments 对象")]),n._v(" "),a("li",[n._v("在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值")]),n._v(" "),a("li",[n._v("在代码执行阶段，会再次修改变量对象的属性值")])]),n._v(" "),a("h3",{attrs:{id:"五、执行上下文三个重要属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、执行上下文三个重要属性","aria-hidden":"true"}},[n._v("#")]),n._v(" 五、执行上下文三个重要属性")]),n._v(" "),a("ul",[a("li",[a("strong",[n._v("变量对象")]),n._v("，包含变量、函数声明和函数的形参，该属性只能在全局上下文中访问，详情可参考"),a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/5",target:"_blank",rel:"noopener noreferrer"}},[n._v("javascript 变量对象"),a("OutboundLink")],1)]),n._v(" "),a("li",[a("strong",[n._v("作用域链")]),n._v("（JS 采用词法作用域，也就是说变量的作用域是在定义时就决定了），详情可参考"),a("a",{attrs:{href:"https://juejin.im/post/5c3b7133e51d45520a76862c",target:"_blank",rel:"noopener noreferrer"}},[n._v("javaScript作用域"),a("OutboundLink")],1)]),n._v(" "),a("li",[a("strong",[n._v("this")])])]),n._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[n._v("#")]),n._v(" 参考资料")]),n._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/yygmind/blog/issues/12",target:"_blank",rel:"noopener noreferrer"}},[n._v("理解JavaScript 中的执行上下文和执行栈"),a("OutboundLink")],1)]),n._v(" "),a("li",[a("a",{attrs:{href:"http://www.cnblogs.com/wangfupeng1988/p/3986420.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("深入理解javascript原型和闭包（8）——简述【执行上下文】上"),a("OutboundLink")],1)]),n._v(" "),a("li",[a("a",{attrs:{href:"http://www.cnblogs.com/TomXu/archive/2012/01/13/2308101.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("深入理解JavaScript系列（11）：执行上下文（Execution Contexts）"),a("OutboundLink")],1)]),n._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/5",target:"_blank",rel:"noopener noreferrer"}},[n._v("JavaScript深入之变量对象"),a("OutboundLink")],1)]),n._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/4",target:"_blank",rel:"noopener noreferrer"}},[n._v("JavaScript深入之执行上下文栈"),a("OutboundLink")],1)])]),n._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[n._v("#")]),n._v(" 联系作者")]),n._v(" "),a("div",{attrs:{align:"center"}},[a("p",[n._v("\n        平凡世界，贵在坚持。\n    ")]),n._v(" "),a("img",{attrs:{src:n.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=e.exports}}]);