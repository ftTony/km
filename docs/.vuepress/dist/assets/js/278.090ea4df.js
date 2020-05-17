(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{507:function(a,e,r){"use strict";r.r(e);var t=r(4),i=Object(t.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"webpack-原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webpack-原理","aria-hidden":"true"}},[a._v("#")]),a._v(" webpack 原理")]),a._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),r("p",[a._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),a._v(" "),r("h2",{attrs:{id:"内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E4%B8%80%E3%80%81webpack-%E4%BA%8B%E4%BB%B6%E6%B5%81"}},[a._v("webpack 事件流")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E4%BA%8C%E3%80%81webpack-%E8%BF%90%E8%A1%8C%E6%B5%81%E7%A8%8B%E8%AF%A6%E8%A7%A3"}},[a._v("webpack 运行流程详解")])]),a._v(" "),r("li",[a._v("Webpack 之 Tapable")]),a._v(" "),r("li",[a._v("Compiler 和 Compilation")]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E6%8A%BD%E8%B1%A1%E8%AF%AD%E6%B3%95%E6%A0%91%EF%BC%88ast%EF%BC%89"}},[a._v("抽象语法树（AST）")])])]),a._v(" "),r("h3",{attrs:{id:"一、webpack-事件流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、webpack-事件流","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、webpack 事件流")]),a._v(" "),r("p",[a._v("Webpack 就像一条生产线，要经过一系列处理流程后才能将源文件转换成输出结果。 这条生产线上的每个处理流程的职责都是单一的，多个流程之间有存在依赖关系，只有完成当前处理后才能交给下一个流程去处理。 插件就像是一个插入到生产线中的一个功能，在特定的时机对生产线上的资源做处理。 Webpack 通过 "),r("a",{attrs:{href:"https://juejin.im/post/5abf33f16fb9a028e46ec352",target:"_blank",rel:"noopener noreferrer"}},[a._v("Tapable"),r("OutboundLink")],1),a._v(" 来组织这条复杂的生产线。 Webpack 在运行过程中会广播事件，插件只需要监听它所关心的事件，就能加入到这条生产线中，去改变生产线的运作。 Webpack 的事件流机制保证了插件的有序性，使得整个系统扩展性很好。")]),a._v(" "),r("h3",{attrs:{id:"二、webpack-运行流程详解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、webpack-运行流程详解","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、webpack 运行流程详解")]),a._v(" "),r("p",[a._v("Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程。")]),a._v(" "),r("ul",[r("li",[a._v("初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数。")]),a._v(" "),r("li",[a._v("开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，通过执行对象的 run 方法开始执行编译。")]),a._v(" "),r("li",[a._v("确定入口：根据配置中的 entry 找出所有入口文件。")]),a._v(" "),r("li",[a._v("编译模块：从入口文件出发，调用所有配置的 loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤走到所有入口依赖的文件都经过了本步骤的处理。")]),a._v(" "),r("li",[a._v("完成模块编译：在经过第 4 步使用 loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容及它们之间的依赖关系。")]),a._v(" "),r("li",[a._v("输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再将每个 Chunk 转换成一个单独的文件加入输出列表中，这是可以修改输出内容的最后机会。")]),a._v(" "),r("li",[a._v("输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，将文件的内容写入文件系统中。")])]),a._v(" "),r("p",[a._v("流程图：")]),a._v(" "),r("p",[r("img",{attrs:{src:"webpack02.jpg",alt:"images"}})]),a._v(" "),r("h3",{attrs:{id:"三、webpack-之-tapable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、webpack-之-tapable","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、Webpack 之 Tapable")]),a._v(" "),r("ul",[r("li",[a._v("Webpack 本质上是一种事件流的机制，它的工作流程就是将各个插件串联起来，而实现这一切的核心就是 Tapable，Webpack 中最核心的负责编译的 Compiler 和负责创建 Bundle 的 Compilation 都是 Tapable 的实例")]),a._v(" "),r("li",[a._v("Webpack 内部有各种各样的钩子，插件将自己的方法注册到对应的钩子上，这样 Webpack 编译的时候，会触发这些钩子，因此也就触发了插件的方法")])]),a._v(" "),r("h4",{attrs:{id:"_3-1-tabpable-分类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-tabpable-分类","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.1 Tabpable 分类")]),a._v(" "),r("ul",[r("li",[a._v("Tabpable 提供了很多类型的 Hook，分为同步（Sync）和异步（Async）两大类（异步中又区分异步并行和异步串行），而根据事件执行的终止条件的不同，又衍生出 "),r("code",[a._v("Basic/Bail/Waterfall/Loop")]),a._v(" 类型")])]),a._v(" "),r("h4",{attrs:{id:"_3-2-所有-hook-的注意事项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-所有-hook-的注意事项","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.2 所有 Hook 的注意事项")]),a._v(" "),r("ul",[r("li",[a._v("所有的 Hook 实例化时，都接收一个可选参数，参数是一个参数名的字符串数组")]),a._v(" "),r("li",[a._v("参数的名字可以任意填写，但是参数数组的长数必须是跟实际接受的参数个数一致")]),a._v(" "),r("li",[a._v("如果回调函数不接受参数，可以传入空数组")]),a._v(" "),r("li",[a._v("在实例化的时候传入的数组长度有用，值没有用途")]),a._v(" "),r("li",[r("strong",[a._v("每个 Hook 的实例就是一个类似于发布订阅的事件管理器，用 tap 注册事件，第一个参数可以任意填写，哪怕用中文写注释都可以，因为调用 call 时，不用传递事件名，会执行所有注册的事件")])]),a._v(" "),r("li",[a._v("执行 call 时，参数个数和实例化时的数组长度有关")])]),a._v(" "),r("h3",{attrs:{id:"四、compiler-和-compilation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、compiler-和-compilation","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、Compiler 和 Compilation")]),a._v(" "),r("ul",[r("li",[a._v("Compiler 和 Compilation 都继承自 Tapable，这样就可以订阅和发射事件。")]),a._v(" "),r("li",[a._v("Compiler：Webpack 执行构建的时候，都会先读取 Webpack 配置文件实例化一个 Compiler 对象，然后调用它的 run 方法来开启一次完整的编译，Compiler 对象代表了完整的 Webpack 环境配置。这个对象在启动 Webpack 时被一次性建立，并配置好所有可操作的设置，包括 options，loader 和 plugin。当在 Webpack 环境中应用一个插件时，插件将收到些 Compiler 对象的引用。可以使用它来访问 Webpack 的主环境。")]),a._v(" "),r("li",[a._v("Compilation：对象代表一次资源版本的构建。当运行 Webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 Compilation，从而生成一组新的编译资源。一个 Compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。Compilation 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。")])]),a._v(" "),r("h3",{attrs:{id:"五、抽象语法树（ast）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、抽象语法树（ast）","aria-hidden":"true"}},[a._v("#")]),a._v(" 五、抽象语法树（AST）")]),a._v(" "),r("h4",{attrs:{id:"_5-1-ast-是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-ast-是什么","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.1 AST 是什么")]),a._v(" "),r("ul",[r("li",[a._v("JavaScript Parser 会把代码转化为一颗抽象语法树（AST），这颗树定义了代码的结构，通过操纵这颗树，我们可以精准的定位到声明语句、赋值语句、运算语句等等，实现对代码的分析、优化、变更等操作。")])]),a._v(" "),r("h4",{attrs:{id:"_5-2-ast-用途"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-ast-用途","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.2 AST 用途")]),a._v(" "),r("ul",[r("li",[a._v("代码语法的检查、代码风格的检查、代码的格式化、代码的高亮、代码错误提示、代码自动补全等等")]),a._v(" "),r("li",[a._v("如 JSLint、JSHint 对代码错误或风格的检查，发现一些潜在的错误")]),a._v(" "),r("li",[a._v("IDE 的错误提示、格式化、高亮、自动补全等等")]),a._v(" "),r("li",[a._v("代码混淆压缩")]),a._v(" "),r("li",[a._v("UglifyJS2 等")])]),a._v(" "),r("h4",{attrs:{id:"_5-3-ast-执行流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-ast-执行流程","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.3 AST 执行流程")]),a._v(" "),r("ul",[r("li",[a._v("解析源代码")]),a._v(" "),r("li",[a._v("词法解析：词法解析器(Tokenizer)在这个阶段将代码字符串转换为语法单元数组——Tokens(令牌)。")])]),a._v(" "),r("p",[a._v("Javascript 代码中的语法单元主要包括以下这么几种：")]),a._v(" "),r("ul",[r("li",[a._v("关键字："),r("code",[a._v("const")]),a._v("、"),r("code",[a._v("let")]),a._v("、"),r("code",[a._v("var")]),a._v("等")]),a._v(" "),r("li",[a._v("标识符：可能是一个变量，也可能是 if、else 这些关键字，又或者是 true、false 这些常量")]),a._v(" "),r("li",[a._v("运算符")]),a._v(" "),r("li",[a._v("数字")]),a._v(" "),r("li",[a._v("空格")]),a._v(" "),r("li",[a._v("注释")]),a._v(" "),r("li",[r("strong",[a._v("语法解析")]),a._v("：这个阶段语法解析器（Parser）会把 Tokens 转换为抽象语法树")]),a._v(" "),r("li",[r("strong",[a._v("深度优先遍历语法树，修改语法树")])]),a._v(" "),r("li",[a._v("将语法树转换回源代码")])]),a._v(" "),r("h4",{attrs:{id:"_5-4-javascript-parser"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-javascript-parser","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.4 JavaScript Parser")]),a._v(" "),r("ul",[r("li",[a._v("JavaScript Parser，把 js 源码转化为抽象语法树的解析器。")]),a._v(" "),r("li",[a._v("浏览器会把 js 源码通过解析器转为抽象语法树，再进一步转化为字节码或直接生成机器码。")])]),a._v(" "),r("h4",{attrs:{id:"_5-5-项目中需要用到的工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-项目中需要用到的工具","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.5 项目中需要用到的工具")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer"}},[a._v("astexplorer"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://www.npmjs.com/package/@babel/core",target:"_blank",rel:"noopener noreferrer"}},[a._v("@babel/core"),r("OutboundLink")],1),a._v("里面内置了 babylon/parser，也可以用它来转换 AST")])]),a._v(" "),r("h3",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://tsejx.github.io/webpack-guidebook/principle-analysis/implementation-principle/source-code-analysis",target:"_blank",rel:"noopener noreferrer"}},[a._v("源码分析"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/jerryOnlyZRJ/webpack-loader/blob/master/docs/webpack-principle.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("Webpack 运行机制"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/uc4fVViv4u86TTX2XsMgFA",target:"_blank",rel:"noopener noreferrer"}},[a._v("【第 1617 期】Webpack 是怎样运行的?"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/58151131",target:"_blank",rel:"noopener noreferrer"}},[a._v("理解 webpack 原理，手写一个 100 行的 webpack"),r("OutboundLink")],1)])]),a._v(" "),r("h2",{attrs:{id:"联系作者"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),r("div",{attrs:{align:"center"}},[r("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),r("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);e.default=i.exports}}]);