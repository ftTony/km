(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{241:function(e,s,n){"use strict";n.r(s);var a=n(4),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"面试必备！webpack-中那些最易混淆的-5-个知识点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面试必备！webpack-中那些最易混淆的-5-个知识点","aria-hidden":"true"}},[e._v("#")]),e._v(" 面试必备！webpack 中那些最易混淆的 5 个知识点")]),e._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),n("p",[e._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),e._v(" "),n("h2",{attrs:{id:"内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[e._v("#")]),e._v(" 内容")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("module")]),e._v("，"),n("code",[e._v("chunk")]),e._v("和"),n("code",[e._v("bundle")]),e._v("的区别是什么？")]),e._v(" "),n("li",[n("code",[e._v("filename")]),e._v("和"),n("code",[e._v("chunkFilename")]),e._v("的区别")]),e._v(" "),n("li",[n("code",[e._v("webpackPrefetch")]),e._v("、"),n("code",[e._v("webpackPreload")]),e._v(" 和 "),n("code",[e._v("webpackChunkName")]),e._v(" 到底是干什么的？")]),e._v(" "),n("li",[n("code",[e._v("hash")]),e._v("、"),n("code",[e._v("chunkhash")]),e._v("、"),n("code",[e._v("contenthash")]),e._v("有什么不同？")]),e._v(" "),n("li",[n("code",[e._v("sourse-map")]),e._v(" 中 "),n("code",[e._v("eval")]),e._v("、"),n("code",[e._v("cheap")]),e._v("、"),n("code",[e._v("inline")]),e._v(" 和 "),n("code",[e._v("module")]),e._v(" 各是什么意思？")])]),e._v(" "),n("h3",{attrs:{id:"一、module，chunk和bundle的区别是什么？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、module，chunk和bundle的区别是什么？","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、"),n("code",[e._v("module")]),e._v("，"),n("code",[e._v("chunk")]),e._v("和"),n("code",[e._v("bundle")]),e._v("的区别是什么？")]),e._v(" "),n("p",[e._v("我这里举个例子，给大家"),n("strong",[e._v("形象化")]),e._v("的解释一下。")]),e._v(" "),n("p",[e._v("首先我们在"),n("code",[e._v("src")]),e._v("目录下写我们的业务代码，引入"),n("code",[e._v("index.js")]),e._v("、"),n("code",[e._v("utils.js")]),e._v("、"),n("code",[e._v("common.js")]),e._v("和"),n("code",[e._v("index.css")]),e._v("这 4 个文件，目录结构如下：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("src/\n├── index.css\n├── index.html # 这个是 HTML 模板代码\n├── index.js\n├── common.js\n└── utils.js\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[n("code",[e._v("index.css")]),e._v("写一点儿简单的样式：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("body {\n    background-color: red;\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[n("code",[e._v("utils.js")]),e._v("文件写个求平方的工具函数：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export function square(x) {\n    return x * x;\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[n("code",[e._v("common.js")]),e._v("文件写个"),n("code",[e._v("log")]),e._v("工具函数：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("module.exports = {\n  log: (msg) => {\n    console.log('hello ', msg)\n  }\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[n("code",[e._v("index.js")]),e._v("文件做一些简单的修改，引入"),n("code",[e._v("css")]),e._v("文件和"),n("code",[e._v("common.js")]),e._v("：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import './index.css';\nconst { log } = require('./common');\n\nlog('webpack');\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("p",[n("code",[e._v("webpack")]),e._v("的配置如下：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("{\n    entry: {\n        index: \"../src/index.js\",\n        utils: '../src/utils.js',\n    },\n    output: {\n        filename: \"[name].bundle.js\", // 输出 index.js 和 utils.js\n    },\n    module: {\n        rules: [\n            {\n                test: /\\.css$/,\n                use: [\n                    MiniCssExtractPlugin.loader, // 创建一个 link 标签\n                    'css-loader', // css-loader 负责解析 CSS 代码, 处理 CSS 中的依赖\n                ],\n            },\n        ]\n    }\n    plugins: [\n        // 用 MiniCssExtractPlugin 抽离出 css 文件，以 link 标签的形式引入样式文件\n        new MiniCssExtractPlugin({\n            filename: 'index.bundle.css' // 输出的 css 文件名为 index.css\n        }),\n    ]\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br")])]),n("p",[e._v("我们运行一下 webpack，看一下打包的结果：")]),e._v(" "),n("p",[n("img",{attrs:{src:"webpack04.png",alt:"images"}})]),e._v(" "),n("p",[e._v("我们可以看出，"),n("code",[e._v("index.css")]),e._v("和"),n("code",[e._v("common.js")]),e._v("在"),n("code",[e._v("index.js")]),e._v("中被引入，打包生成的"),n("code",[e._v("index.bundle.css")]),e._v("和"),n("code",[e._v("index.bundle.js")]),e._v(" 都属于 "),n("code",[e._v("chunk 0")]),e._v("，"),n("code",[e._v("utils.js")]),e._v(" 因为是独立打包的，它生成的 "),n("code",[e._v("utils.bundle.js")]),e._v(" 属于 "),n("code",[e._v("chunk 1")]),e._v("。")]),e._v(" "),n("p",[e._v("感觉还有些绕？我做了一张图，你肯定一看就懂：")]),e._v(" "),n("p",[n("img",{attrs:{src:"webpack05.png",alt:"images"}})]),e._v(" "),n("p",[e._v("看这个图就很明白了：")]),e._v(" "),n("p",[e._v("一般来说一个"),n("code",[e._v("chunk")]),e._v("对应一个"),n("code",[e._v("bundle")]),e._v("，比如上图中的"),n("code",[e._v("utils.js")]),e._v(" -> "),n("code",[e._v("chunks 1")]),e._v(" -> "),n("code",[e._v("utils.bundle.js")]),e._v("；但也有例外，比如说上图中，我就用 "),n("code",[e._v("MiniCssExtractPlugin")]),e._v(" 从 "),n("code",[e._v("chunks 0")]),e._v(" 中抽离出了 "),n("code",[e._v("index.bundle.css")]),e._v("文件。")]),e._v(" "),n("h4",{attrs:{id:"一句话总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一句话总结","aria-hidden":"true"}},[e._v("#")]),e._v(" 一句话总结")]),e._v(" "),n("p",[n("code",[e._v("module")]),e._v("，"),n("code",[e._v("chunk")]),e._v(" 和 "),n("code",[e._v("bundle")]),e._v(" 其实就是同一份逻辑代码在不同转换场景下的取了三个名字：我们直接写出来的是 module，webpack 处理时是 chunk，最后生成浏览器可以直接运行的 bundle。")]),e._v(" "),n("h3",{attrs:{id:"二、filename和chunkfilename的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、filename和chunkfilename的区别","aria-hidden":"true"}},[e._v("#")]),e._v(" 二、"),n("code",[e._v("filename")]),e._v("和"),n("code",[e._v("chunkFilename")]),e._v("的区别")]),e._v(" "),n("ul",[n("li",[e._v("filename")]),e._v(" "),n("li",[e._v("chunkFilename")])]),e._v(" "),n("h4",{attrs:{id:"_2-1-filename"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-filename","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.1 filename")]),e._v(" "),n("p",[n("code",[e._v("filename")]),e._v("是一个很常见的配置，就是对应于"),n("code",[e._v("entry")]),e._v("里面的输入文件，经过 webpack 打包后输出文件的文件名。比如说经过下面的配置，生成出来的文件名为"),n("code",[e._v("index.min.js")]),e._v("。")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n    entry: {\n        index: "../src/index.js"\n    },\n    output: {\n        filename: "[name].min.js", // index.min.js\n    }\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[n("img",{attrs:{src:"webpack06.png",alt:"images"}})]),e._v(" "),n("h4",{attrs:{id:"_2-2-chunkfilename"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-chunkfilename","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.2 chunkFilename")]),e._v(" "),n("p",[n("code",[e._v("chunkFilename")]),e._v("指未被列在"),n("code",[e._v("entry")]),e._v("中，却又需要被打包出来的"),n("code",[e._v("chunk")]),e._v("文件的名称。一般来说，这个"),n("code",[e._v("chunk")]),e._v("文件指的就是要"),n("strong",[e._v("懒加载")]),e._v("的代码。")]),e._v(" "),n("p",[e._v("比如说我们业务代码中写了一份懒加载"),n("code",[e._v("lodash")]),e._v("的代码：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 文件：index.js\n\n// 创建一个 button\nlet btn = document.createElement(\"button\");\nbtn.innerHTML = \"click me\";\ndocument.body.appendChild(btn);\n\n// 异步加载代码\nasync function getAsyncComponent() {\n    var element = document.createElement('div');\n    const { default: _ } = await import('lodash');\n\n    element.innerHTML = _.join(['Hello!', 'dynamic', 'imports', 'async'], ' ');\n\n    return element;\n}\n\n// 点击 button 时，懒加载 lodash，在网页上显示 Hello! dynamic imports async\nbtn.addEventListener('click', () => {\n    getAsyncComponent().then(component => {\n        document.body.appendChild(component);\n    })\n})\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br")])]),n("p",[e._v("我们的"),n("code",[e._v("webpack")]),e._v("不做任何配置，还是原来的配置代码：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n    entry: {\n        index: "../src/index.js"\n    },\n    output: {\n        filename: "[name].min.js", // index.min.js\n    }\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[e._v("这时候的打包结果如下：")]),e._v(" "),n("p",[n("img",{attrs:{src:"webpack07.png",alt:"images"}})]),e._v(" "),n("p",[e._v("这个"),n("code",[e._v("1.min.js")]),e._v("就是异步加载的"),n("code",[e._v("chunk")]),e._v("文件。"),n("a",{attrs:{href:"https://webpack.docschina.org/configuration/output/#output-chunkfilename",target:"_blank",rel:"noopener noreferrer"}},[e._v("文档"),n("OutboundLink")],1),e._v("里这么解释：")]),e._v(" "),n("blockquote",[n("p",[n("code",[e._v("output.chunkFilename")]),e._v(" 默认使用"),n("code",[e._v("[id].js")]),e._v("或从"),n("code",[e._v("output.filename")]),e._v("中推断出的值（"),n("code",[e._v("[name]")]),e._v("会被预先替换为 "),n("code",[e._v("[id]")]),e._v(" 或 "),n("code",[e._v("[id]")]),e._v(".）")])]),e._v(" "),n("p",[e._v("文档写的太抽象，我们不如结合上面的例子来看：")]),e._v(" "),n("p",[n("code",[e._v("output.filename")]),e._v("的输出文件名是"),n("code",[e._v("[name].min.js")]),e._v("，"),n("code",[e._v("[name]")]),e._v(" 根据"),n("code",[e._v("entry")]),e._v("的配置推断为"),n("code",[e._v("index")]),e._v("，所以输出为 "),n("code",[e._v("index.min.js")]),e._v("；")]),e._v(" "),n("p",[e._v("由于"),n("code",[e._v("output.chunkFilename")]),e._v("没有显示指定，就会把"),n("code",[e._v("[name]")]),e._v("替换为"),n("code",[e._v("chunk")]),e._v("文件的"),n("code",[e._v("id")]),e._v("号，这里文件的"),n("code",[e._v("id")]),e._v("号是"),n("code",[e._v("1")]),e._v("，所以文件名就是"),n("code",[e._v("1.min.js")]),e._v("。")]),e._v(" "),n("p",[e._v("如果我们显式配置"),n("code",[e._v("chunkFilename")]),e._v("，就会按配置的名字生成文件：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n    entry: {\n        index: "../src/index.js"\n    },\n    output: {\n        filename: "[name].min.js",  // index.min.js\n        chunkFilename: \'bundle.js\', // bundle.js\n    }\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br")])]),n("p",[n("img",{attrs:{src:"webpack08.png",alt:"images"}})]),e._v(" "),n("h4",{attrs:{id:"_2-3-总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-总结","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.3 总结")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("filename")]),e._v("指列在"),n("code",[e._v("entry")]),e._v("中，打包后输出的文件的名称。")]),e._v(" "),n("li",[n("code",[e._v("chunkFilename")]),e._v("指未列在"),n("code",[e._v("entry")]),e._v("中，却又需要被打包出来的文件的名称。")])]),e._v(" "),n("h3",{attrs:{id:"三、webpackprefetch、webpackpreload-和-webpackchunkname-到底是干什么的？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、webpackprefetch、webpackpreload-和-webpackchunkname-到底是干什么的？","aria-hidden":"true"}},[e._v("#")]),e._v(" 三、"),n("code",[e._v("webpackPrefetch")]),e._v("、"),n("code",[e._v("webpackPreload")]),e._v(" 和 "),n("code",[e._v("webpackChunkName")]),e._v(" 到底是干什么的？")]),e._v(" "),n("p",[e._v("这几个名词其实都是 webpack "),n("a",{attrs:{href:"https://webpack.docschina.org/api/module-methods/#magic-comments",target:"_blank",rel:"noopener noreferrer"}},[e._v("魔法注释（magic comments）"),n("OutboundLink")],1),e._v("里的，文档中说了 6 个配置，配置都可以组合起来用。我们说说最常用的三个配置。")]),e._v(" "),n("p",[n("strong",[e._v("webpackChunkName")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n    entry: {\n        index: "../src/index.js"\n    },\n    output: {\n        filename: "[name].min.js",  // index.min.js\n        chunkFilename: \'[name].bundle.js\', // 1.bundle.js，chunk id 为 1，辨识度不高\n    }\n}\n\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br")])]),n("p",[n("img",{attrs:{src:"webpack09.png",alt:"images"}})]),e._v(" "),n("p",[e._v("这时候"),n("code",[e._v("webpackChunkName")]),e._v("就可以派上用场了。我们可以在"),n("code",[e._v("import")]),e._v("文件时，在"),n("code",[e._v("import")]),e._v("里以注释的形式为"),n("code",[e._v("chunk")]),e._v("文件取别名：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("async function getAsyncComponent() {\n    var element = document.createElement('div');\n\n    // 在 import 的括号里 加注释 /* webpackChunkName: \"lodash\" */ ，为引入的文件取别名\n    const { default: _ } = await import(/* webpackChunkName: \"lodash\" */ 'lodash');\n\n    element.innerHTML = _.join(['Hello!', 'dynamic', 'imports', 'async'], ' ');\n\n    return element;\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br")])]),n("p",[e._v("这时候打包生成的文件是这样的：")]),e._v(" "),n("p",[n("img",{attrs:{src:"webpack10.png",alt:"images"}})]),e._v(" "),n("p",[e._v("现在问题来了，"),n("code",[e._v("lodash")]),e._v("是我们取的名字，按道理来说应该生成"),n("code",[e._v("lodash.bundle.js")]),e._v("啊，前面的 "),n("code",[e._v("vendors~")]),e._v(" 是什么玩意？")]),e._v(" "),n("p",[e._v("其实"),n("code",[e._v("webpack")]),e._v("懒加载是用内置的一个插件"),n("a",{attrs:{href:"https://webpack.docschina.org/plugins/split-chunks-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("SplitChunksPlugin"),n("OutboundLink")],1),e._v("实现的，这个插件里面有些默认配置项，比如说"),n("code",[e._v("automaticNameDelimiter")]),e._v("，默认的分割符就是"),n("code",[e._v("~")]),e._v("，所以最后的文件名才会出现这个符号，这块儿内容我就不引申了，感兴趣的同学可以自己研究一下。")]),e._v(" "),n("p",[n("strong",[e._v("webpackPrefetch 和 webpackPreload")])]),e._v(" "),n("p",[e._v("这两个配置一个叫预拉取（Prefetch），一个叫预加载（Preload），两者有些细微的不同，我们先说说 "),n("code",[e._v("webpackPrefetch")]),e._v("。")]),e._v(" "),n("p",[e._v("在上面的懒加载代码里，我们是点击按钮时，才会触发异步加载"),n("code",[e._v("lodash")]),e._v("的动作，这时候会动态的生成一个"),n("code",[e._v("script")]),e._v("标签，加载到"),n("code",[e._v("head")]),e._v("头里：")]),e._v(" "),n("p",[n("img",{attrs:{src:"webpack11.png",alt:"images"}})]),e._v(" "),n("p",[e._v("如果我们"),n("code",[e._v("import")]),e._v("的时候添加"),n("code",[e._v("webpackPrefetch")]),e._v("：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("...\n\nconst { default: _ } = await import(/* webpackChunkName: \"lodash\" */ /* webpackPrefetch: true */ 'lodash');\n\n...\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[e._v("就会以"),n("code",[e._v('<link rel="prefetch" as="script">')]),e._v("的形式预拉取"),n("code",[e._v("lodash")]),e._v("代码：")]),e._v(" "),n("p",[n("img",{attrs:{src:"webpack12.png",alt:"images"}})]),e._v(" "),n("p",[e._v("这个异步加载的代码不需要手动点击 button 触发，webpack 会在父 chunk 完成加载后，闲时加载"),n("code",[e._v("lodash")]),e._v("文件。")]),e._v(" "),n("p",[n("code",[e._v("webpackPreload")]),e._v("是预加载当前导航下可能需要资源，他和"),n("code",[e._v("webpackPrefetch")]),e._v("的主要区别是：")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("preload chunk")]),e._v("会在父"),n("code",[e._v("chunk")]),e._v("加载时，以并行方式开始加载。"),n("code",[e._v("prefetch chunk")]),e._v("会在父"),n("code",[e._v("chunk")]),e._v("加载结束后开始加载。")]),e._v(" "),n("li",[n("code",[e._v("preload chunk")]),e._v("具有中等优先级，并立即下载。"),n("code",[e._v("prefetch chunk")]),e._v("在浏览器闲置时下载。")]),e._v(" "),n("li",[n("code",[e._v("preload chunk")]),e._v("会在父"),n("code",[e._v("chunk")]),e._v("中立即请求，用于当下时刻。"),n("code",[e._v("prefetch chunk")]),e._v("会用于未来的某个时刻")])]),e._v(" "),n("h4",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("webpackChunkName")]),e._v("是为预加载的文件取别名")]),e._v(" "),n("li",[n("code",[e._v("webpackPrefetch")]),e._v("会在浏览器闲置下载文件")]),e._v(" "),n("li",[n("code",[e._v("webpackPreload")]),e._v("会在父 chunk 加载时并行下载文件")])]),e._v(" "),n("h3",{attrs:{id:"四、hash、chunkhash、contenthash有什么不同？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、hash、chunkhash、contenthash有什么不同？","aria-hidden":"true"}},[e._v("#")]),e._v(" 四、"),n("code",[e._v("hash")]),e._v("、"),n("code",[e._v("chunkhash")]),e._v("、"),n("code",[e._v("contenthash")]),e._v("有什么不同？")]),e._v(" "),n("p",[e._v("首先来个背景介绍，哈希一般是结合 CDN 缓存来使用的。如果文件内容改变的话，那么对应文件哈希值也会改变，对应的 HTML 引用的 URL 地址也会改变，触发 CDN 服务器从源服务器上拉取对应数据，进而更新本地缓存。")]),e._v(" "),n("ul",[n("li",[e._v("hash")]),e._v(" "),n("li",[e._v("chunkhash")]),e._v(" "),n("li",[e._v("contenthash")])]),e._v(" "),n("h4",{attrs:{id:"_4-1-hash"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-hash","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.1 hash")]),e._v(" "),n("p",[e._v("hash 计算是跟整个项目的构建相关，我们做一个简单的 demo。")]),e._v(" "),n("p",[e._v("沿用案例 1 的 demo 代码，文件目录如下：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("src/\n├── index.css\n├── index.html\n├── index.js\n└── utils.js\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[n("code",[e._v("webpack")]),e._v("的核心配置如下（省略了一些"),n("code",[e._v("module")]),e._v("配置信息）：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("{\n    entry: {\n        index: \"../src/index.js\",\n        utils: '../src/utils.js',\n    },\n    output: {\n        filename: \"[name].[hash].js\",  // 改为 hash\n    },\n\n    ......\n\n    plugins: [\n        new MiniCssExtractPlugin({\n            filename: 'index.[hash].css' // 改为 hash\n        }),\n    ]\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br")])]),n("p",[e._v("生成的文件名如下：")]),e._v(" "),n("p",[n("img",{attrs:{src:"webpack13.png",alt:"images"}})]),e._v(" "),n("p",[e._v("我们可以发现，生成文件的"),n("code",[e._v("hash")]),e._v("和项目的构建"),n("code",[e._v("hash")]),e._v("都是一模一样的。")]),e._v(" "),n("h4",{attrs:{id:"_4-2-chunkhash"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-chunkhash","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.2 chunkhash")]),e._v(" "),n("p",[e._v("因为"),n("code",[e._v("hash")]),e._v("是项目构建的哈希值，项目中如果有些变动，"),n("code",[e._v("hash")]),e._v("一定会变，比如说我改动了"),n("code",[e._v("utils.js")]),e._v("的代码，"),n("code",[e._v("index.js")]),e._v("里的代码虽然没有改变，但是大家都是用的同一份"),n("code",[e._v("hash")]),e._v("。"),n("code",[e._v("hash")]),e._v("一变，缓存一定失效了，这样子是没办法实现 "),n("code",[e._v("CDN")]),e._v("和浏览器缓存的。")]),e._v(" "),n("p",[n("code",[e._v("chunkhash")]),e._v("就是解决这个问题的，它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的"),n("code",[e._v("chunk")]),e._v("，生成对应的哈希值。")]),e._v(" "),n("p",[e._v("我们再举个例子，我们对"),n("code",[e._v("utils.js")]),e._v("里文件进行改动：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export function square(x) {\n    return x * x;\n}\n\n// 增加 cube() 求立方函数\nexport function cube(x) {\n    return x * x * x;\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[e._v("然后把"),n("code",[e._v("webpack")]),e._v("里的所有"),n("code",[e._v("hash")]),e._v("改为"),n("code",[e._v("chunkhash")]),e._v("：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("{\n    entry: {\n        index: \"../src/index.js\",\n        utils: '../src/utils.js',\n    },\n    output: {\n        filename: \"[name].[chunkhash].js\", // 改为 chunkhash\n    },\n\n    ......\n\n    plugins: [\n        new MiniCssExtractPlugin({\n            filename: 'index.[chunkhash].css' // // 改为 chunkhash\n        }),\n    ]\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br")])]),n("p",[e._v("构建结果如下：")]),e._v(" "),n("p",[n("img",{attrs:{src:"webpack14.png",alt:"images"}})]),e._v(" "),n("p",[e._v("我们可以看出，"),n("code",[e._v("chunk 0")]),e._v("的"),n("code",[e._v("hash")]),e._v("都是一样的，"),n("code",[e._v("chunk 1")]),e._v("的"),n("code",[e._v("hash")]),e._v("和上面的不一样。")]),e._v(" "),n("p",[e._v("假设我又把"),n("code",[e._v("utils.js")]),e._v("里的"),n("code",[e._v("cube()")]),e._v("函数去掉，再打包：")]),e._v(" "),n("p",[n("img",{attrs:{src:"webpack15.png",alt:"images"}})]),e._v(" "),n("p",[e._v("对比可以发现，只有"),n("code",[e._v("chunk 1")]),e._v("的"),n("code",[e._v("hash")]),e._v("发生变化，"),n("code",[e._v("chunk 0")]),e._v("的"),n("code",[e._v("hash")]),e._v("还是原来的。")]),e._v(" "),n("h4",{attrs:{id:"_4-3-contenthash"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-contenthash","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.3 contenthash")]),e._v(" "),n("p",[e._v("我们更近一步，"),n("code",[e._v("index.js")]),e._v("和"),n("code",[e._v("index.css")]),e._v("同为一个"),n("code",[e._v("chunk")]),e._v("，如果"),n("code",[e._v("index.js")]),e._v("内容发生变化，但是 "),n("code",[e._v("index.css")]),e._v("没有变化，打包后他们的"),n("code",[e._v("hash")]),e._v("都发生变化，这对"),n("code",[e._v("css")]),e._v("文件来说是一种浪费。如何解决这个问题呢？")]),e._v(" "),n("p",[n("code",[e._v("contenthash")]),e._v("将根据资源内容创建出唯一"),n("code",[e._v("hash")]),e._v("，也就是说文件内容不变，"),n("code",[e._v("hash")]),e._v("就不变。\n我们修改一下"),n("code",[e._v("webpack")]),e._v("的配置：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("{\n    entry: {\n        index: \"../src/index.js\",\n        utils: '../src/utils.js',\n    },\n    output: {\n        filename: \"[name].[chunkhash].js\",\n    },\n\n    ......\n\n    plugins: [\n        new MiniCssExtractPlugin({\n            filename: 'index.[contenthash].css' // 这里改为 contenthash\n        }),\n    ]\n}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br")])]),n("p",[e._v("我们对"),n("code",[e._v("index.js")]),e._v("文件做了"),n("code",[e._v("3")]),e._v("次修改（就是改了改"),n("code",[e._v("log")]),e._v("函数的输出内容，过于简单就先不写了），然后分别构建，结果截图如下：")]),e._v(" "),n("p",[n("img",{attrs:{src:"webpack16.png",alt:"images"}})]),e._v(" "),n("p",[n("img",{attrs:{src:"webpack17.png",alt:"images"}})]),e._v(" "),n("p",[n("img",{attrs:{src:"webpack18.png",alt:"images"}})]),e._v(" "),n("p",[e._v("我们可以发现，"),n("code",[e._v("css")]),e._v("文件的"),n("code",[e._v("hash")]),e._v("都没有发生改变。")]),e._v(" "),n("h4",{attrs:{id:"_4-4-总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-总结","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.4 总结")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("hash")]),e._v("计算与整个项目的构建相关；")]),e._v(" "),n("li",[n("code",[e._v("chunkhash")]),e._v("计算与同一"),n("code",[e._v("chunk")]),e._v("内容相关；")]),e._v(" "),n("li",[n("code",[e._v("contenthash")]),e._v("计算与文件内容本身相关。")])]),e._v(" "),n("h3",{attrs:{id:"五、sourse-map-中-eval、cheap、inline-和-module-各是什么意思？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、sourse-map-中-eval、cheap、inline-和-module-各是什么意思？","aria-hidden":"true"}},[e._v("#")]),e._v(" 五、"),n("code",[e._v("sourse-map")]),e._v(" 中 "),n("code",[e._v("eval")]),e._v("、"),n("code",[e._v("cheap")]),e._v("、"),n("code",[e._v("inline")]),e._v(" 和 "),n("code",[e._v("module")]),e._v(" 各是什么意思？")]),e._v(" "),n("p",[n("code",[e._v("sourse-map")]),e._v("，里面都有个"),n("code",[e._v("map")]),e._v("了，肯定是映射的意思。"),n("code",[e._v("sourse-map")]),e._v("就是一份"),n("strong",[e._v("源码和转换后代码的映射文件")]),e._v("。具体的原理内容较多，感兴趣的同学可以自行搜索，我这里就不多言了。")]),e._v(" "),n("p",[n("img",{attrs:{src:"webpack03.png",alt:"images"}})]),e._v(" "),n("p",[e._v("如果再仔细看一下，就发现这 13 种大部分都是"),n("code",[e._v("eval")]),e._v("、"),n("code",[e._v("cheap")]),e._v("、"),n("code",[e._v("inline")]),e._v(" 和 "),n("code",[e._v("module")]),e._v("这 4 个词排列组合的，我做了个简单的表格，比官网上直白多了：")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("参数")]),e._v(" "),n("th",[e._v("参数解释")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("eval")]),e._v(" "),n("td",[e._v("打包后的模块都使用"),n("code",[e._v("eval()")]),e._v("执行，行映射可能不准；不产生独立的 map 文件")])]),e._v(" "),n("tr",[n("td",[e._v("cheap")]),e._v(" "),n("td",[e._v("map 映射只显示行不显示列，忽略源自 loader 的 source map")])]),e._v(" "),n("tr",[n("td",[e._v("inline")]),e._v(" "),n("td",[e._v("映射文件以 base64 格式编码，加在 bundle 文件最后，不产生独立的 map 文件")])]),e._v(" "),n("tr",[n("td",[e._v("module")]),e._v(" "),n("td",[e._v("增加对 loader source map 和第三方模块的映射")])])])]),e._v(" "),n("h3",{attrs:{id:"六、loader-和-plugin-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、loader-和-plugin-的区别","aria-hidden":"true"}},[e._v("#")]),e._v(" 六、loader 和 plugin 的区别")]),e._v(" "),n("ul",[n("li",[e._v("主要区别")]),e._v(" "),n("li",[e._v("常用的 plugin")]),e._v(" "),n("li",[e._v("常用的 loader")])]),e._v(" "),n("h3",{attrs:{id:"_6-1-主要区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-主要区别","aria-hidden":"true"}},[e._v("#")]),e._v(" 6.1 主要区别")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("loader")]),e._v("用于加载某些资源文件。因为 webpack 本身只能打包"),n("code",[e._v("commonjs")]),e._v("规范的 js 文件，对于其他资源例如 css，图片，或者其他的语法集，比如 jsx，coffee，是没有办法加载的。这就是需要对应的 loader 将资源转化，加载进来。从字面意思也能看出，loader 是用于加载的，它作用于一个个文件上。")]),e._v(" "),n("li",[n("code",[e._v("plugin")]),e._v("用于扩展 webpack 的功能。它直接作用 webpack，扩展了它的功能。当然 loader 也时变相的扩展了 webpack，但是它只专注于文件（transform）这一个领域。而 plugin 的功能更加的丰富，而不仅局限于资源的加载。")])]),e._v(" "),n("h3",{attrs:{id:"_6-2-常用的-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-常用的-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" 6.2 常用的 plugin")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("CommonsChunkPlugin")]),e._v(" 创建一个公用的 chunk，常用于将第三方 lib 抽取成公用 js，例如")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("entry:{\n    vendor:['jquery','other-lib'],\n    app:'./entry'\n}\n\nnew CommonsChunkPlugin({\n    name:'vendor',\n    filename:'vendor.js',\n    minChunks:infinity\n})\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br")])]),n("p",[e._v("-"),n("code",[e._v("HotMouleReplacementPlugin")]),e._v(" 启用 "),n("code",[e._v("module")]),e._v("热替换")]),e._v(" "),n("h3",{attrs:{id:"_6-3-常用的-loader"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-常用的-loader","aria-hidden":"true"}},[e._v("#")]),e._v(" 6.3 常用的 loader")]),e._v(" "),n("p",[e._v("loader 的功能就是加载资源到 webpack")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("css")]),e._v(" 和 "),n("code",[e._v("style")]),e._v(" cssloader 和 styleloader 做两件事件\n"),n("ul",[n("li",[n("code",[e._v("css-loader")]),e._v("遍历所有 require 的 css 文件，输出文件内容")]),e._v(" "),n("li",[n("code",[e._v("style-loader")]),e._v("将 css 内容输出到页面的"),n("code",[e._v("style")]),e._v("标签中")])])])]),e._v(" "),n("h3",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://juejin.im/post/5cede821f265da1bbd4b5630",target:"_blank",rel:"noopener noreferrer"}},[e._v("面试必备！webpack 中那些最易混淆的 5 个知识点"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/alienzhou/blog/issues/21",target:"_blank",rel:"noopener noreferrer"}},[e._v("【webpack 进阶】你真的掌握了 loader 么？- loader 十问"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"联系作者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[e._v("#")]),e._v(" 联系作者")]),e._v(" "),n("div",{attrs:{align:"center"}},[n("p",[e._v("\n        平凡世界，贵在坚持。\n    ")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=t.exports}}]);