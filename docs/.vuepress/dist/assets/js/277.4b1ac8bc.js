(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{501:function(e,s,a){"use strict";a.r(s);var n=a(13),r=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"webpack-打包优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-打包优化"}},[e._v("#")]),e._v(" webpack 打包优化")]),e._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),a("p",[e._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),e._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[e._v("#")]),e._v(" 内容")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"l#%E4%B8%80%E3%80%81%E4%BC%98%E5%8C%96%E6%89%93%E5%8C%85%E5%A4%A7%E5%B0%8F"}},[e._v("优化打包大小")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E4%BC%98%E5%8C%96%E6%89%93%E5%8C%85%E9%80%9F%E5%BA%A6"}},[e._v("优化打包速度")])]),e._v(" "),a("li",[e._v("分析打包速度工具")])]),e._v(" "),a("h3",{attrs:{id:"一、优化打包大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、优化打包大小"}},[e._v("#")]),e._v(" 一、优化打包大小")]),e._v(" "),a("ul",[a("li",[e._v("开启"),a("code",[e._v("tree shaking")]),e._v("模式")]),e._v(" "),a("li",[e._v("提取公共代码")]),e._v(" "),a("li",[e._v("分割代码以按需加载")]),e._v(" "),a("li",[e._v("webpack 实现 CDN 的接入")])]),e._v(" "),a("h4",{attrs:{id:"_1-1-开启tree-shaking模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-开启tree-shaking模式"}},[e._v("#")]),e._v(" 1.1 开启"),a("code",[e._v("tree shaking")]),e._v("模式")]),e._v(" "),a("p",[a("code",[e._v("Tree Shaking")]),e._v("正常工作的前提是，提交给 Webpack 的 JavaScript 代码必须采用了 ES6 的模块化语法，因为 ES6 模块化语法是静态的，可以进行静态分析。")]),e._v(" "),a("p",[e._v("首先，为了将采用 ES6 模块化的代码提交给 Webpack，需要配置 Babel 以让其保留 ES6 模块化语句。修改"),a("code",[e._v(".babelrc")]),e._v("文件如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{\n    'presets':[\n        [\n            'env',{\n                'module':false\n            }\n        ]\n    ]\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("第二个要求，需要使用 UglifyJsPlugin 插件。如果在"),a("code",[e._v('mode:"production"')]),e._v("模式，这个插件已经黑夜添加了，如果在其它模式下，可以手工添加它。")]),e._v(" "),a("p",[e._v("另外要记住的是打开"),a("code",[e._v("optimization.usedExports")]),e._v("。在"),a("code",[e._v('mode: "production"')]),e._v("模式下，它也是默认打开了的。它告诉 "),a("code",[e._v("webpack")]),e._v(" 每个模块明确使用 "),a("code",[e._v("exports")]),e._v("。这样之后，webpack 会在打包文件中添加诸如"),a("code",[e._v("/_ unused harmony export _/")]),e._v("这样的注释，其后"),a("code",[e._v("UglifyJsPlugin")]),e._v("插件会对这些注释作出理解。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = {\n    mode: 'none',\n    optimization: {\n        minimize: true,\n        minimizer: [\n            new UglifyJsPlugin()\n        ],\n        usedExports: true,\n        sideEffects: true\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("h4",{attrs:{id:"_1-2-提取公共代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-提取公共代码"}},[e._v("#")]),e._v(" 1.2 提取公共代码")]),e._v(" "),a("p",[e._v("大型网站通常由多个页面组成，每个页面都是一个独立的单页应用，但由于所有页面都采用同样的技术栈及同一套样式代码，就导致这些页面之间有很多相同的代码。可以使用 splitChunks 进行分包：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("splitChunks: {\n        chunks: \"async\",\n        minSize: 30000,\n        minChunks: 1,\n        maxAsyncRequests: 5,\n        maxInitialRequests: 3,\n        automaticNameDelimiter: '~',\n        name: true,\n        cacheGroups: {\n            vendors: {\n                test: /[\\\\/]node_modules[\\\\/]/,\n                priority: -10\n            },\n        default: {\n                minChunks: 2,\n                priority: -20,\n                reuseExistingChunk: true\n            }\n        }\n    }\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br")])]),a("h4",{attrs:{id:"_1-3-分割代码以按需加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-分割代码以按需加载"}},[e._v("#")]),e._v(" 1.3 分割代码以按需加载")]),e._v(" "),a("p",[e._v("Webpack 支持两种动态代码拆分技术：")]),e._v(" "),a("ul",[a("li",[e._v("符合 "),a("code",[e._v("ECMAScript proposal 的 import()")]),e._v(" 语法，推荐使用")]),e._v(" "),a("li",[e._v("传统的 "),a("code",[e._v("require.ensure")])])]),e._v(" "),a("p",[a("code",[e._v("import()")]),e._v(" 用于动态加载模块，其引用的模块及子模块会被分割打包成一个独立的 "),a("code",[e._v("chunk")]),e._v("。Webpack 还允许以注释的方式传参，进而更好的生成 "),a("code",[e._v("chunk")]),e._v("。")]),e._v(" "),a("h4",{attrs:{id:"_1-4-webpack-实现-cdn-的接入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-webpack-实现-cdn-的接入"}},[e._v("#")]),e._v(" 1.4 webpack 实现 CDN 的接入")]),e._v(" "),a("ul",[a("li",[e._v("静态资源的导入 URL 需要变成指向 DNS 服务的绝对路径的 URL，而不是相对 HTML 文件的")]),e._v(" "),a("li",[e._v("静态资源的文件名需要带上由文件内容算出来的 Hash 值，以防止被缓存")]),e._v(" "),a("li",[e._v("将不同类型的资源放到不同域名的 DNS 服务上，以防止资源的并行加载被阻塞")])]),e._v(" "),a("h3",{attrs:{id:"二、优化打包速度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、优化打包速度"}},[e._v("#")]),e._v(" 二、优化打包速度")]),e._v(" "),a("ul",[a("li",[e._v("优化"),a("code",[e._v("Loader")]),e._v("配置")]),e._v(" "),a("li",[e._v("优化"),a("code",[e._v("resolve.module")]),e._v("配置")]),e._v(" "),a("li",[e._v("优化"),a("code",[e._v("resolve.aslias")]),e._v("配置")]),e._v(" "),a("li",[e._v("优化"),a("code",[e._v("resolve.mainFields")]),e._v("配置")]),e._v(" "),a("li",[e._v("优化"),a("code",[e._v("resolve.extensions")]),e._v("配置")]),e._v(" "),a("li",[e._v("优化"),a("code",[e._v("module.noParse")]),e._v("配置")]),e._v(" "),a("li",[a("code",[e._v("happypack")]),e._v("并发")]),e._v(" "),a("li",[e._v("使用 "),a("code",[e._v("DllPlugin")]),e._v(" 和 "),a("code",[e._v("DllReferencePlugin")])]),e._v(" "),a("li",[e._v("使用"),a("code",[e._v("ParallelUglifyPlugin")])]),e._v(" "),a("li",[e._v("合理利用缓存")])]),e._v(" "),a("h4",{attrs:{id:"_2-1-优化loader配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-优化loader配置"}},[e._v("#")]),e._v(" 2.1 优化"),a("code",[e._v("Loader")]),e._v("配置")]),e._v(" "),a("p",[e._v("由于 Loader 对文件的转换操作很耗时，所以需要让尽可能少的文件被 Loader 处理。可以通过"),a("code",[e._v("test/include/exclude")]),e._v("三个配置项来命中 loader 要应用规则的文件。")]),e._v(" "),a("p",[e._v("示例代码：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module .exports = {\n    module : {\n        rules : [{\n        //如果项目源码中只有 文件，就不要写成/\\jsx?$/，以提升正则表达式的性能\n        test: /\\.js$/,\n        //babel -loader 支持缓存转换出的结果，通过 cacheDirectory 选项开启\n        use: ['babel-loader?cacheDirectory'] ,\n        //只对项目根目录下 src 目录中的文件采用 babel-loader\n        include: path.resolve(__dirname,'src'),\n        }],\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("h4",{attrs:{id:"_2-2-优化resolve-module配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-优化resolve-module配置"}},[e._v("#")]),e._v(" 2.2 优化"),a("code",[e._v("resolve.module")]),e._v("配置")]),e._v(" "),a("p",[a("code",[e._v("resolve.modules")]),e._v("的默认值是"),a("code",[e._v("['node_modules']")]),e._v("，含义是先去当前目录的"),a("code",[e._v("node_modules")]),e._v("目录下去找我们想找的模块，如果没找到就去上一级目录"),a("code",[e._v("../node_modules")]),e._v("中找，再没有就去"),a("code",[e._v("../../node_modules")]),e._v("中找，以此类推。这和 Node.js 的模块寻找机制很相似。当安装的第三方模块都放在项目根目录的"),a("code",[e._v("node_modules")]),e._v("目录下时，就没有必要按照默认的方式去一层层地寻找，可以指明存放第三方模块的绝对路径，以减少寻找。")]),e._v(" "),a("p",[e._v("示例代码：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = {\n    resolve: {\n        modules: [path.resolve( __dirname,'node modules')]\n    },\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h4",{attrs:{id:"_2-3-优化resolve-aslias配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-优化resolve-aslias配置"}},[e._v("#")]),e._v(" 2.3 优化"),a("code",[e._v("resolve.aslias")]),e._v("配置")]),e._v(" "),a("p",[a("code",[e._v("resolve.alias")]),e._v("配置项通过别名来将原导入路径映射成一个新的导入路径。在项目经常会依赖一些庞大的第三方模块，以"),a("code",[e._v("React")]),e._v("库为例，发布出去的"),a("code",[e._v("React")]),e._v("库中包含两套代码")]),e._v(" "),a("ul",[a("li",[e._v("一套是采用"),a("code",[e._v("CommonJS")]),e._v("规范的模块化代码，这些文件都放在"),a("code",[e._v("lib")]),e._v("目录下，以"),a("code",[e._v("package.json")]),e._v("中指定的入口文件"),a("code",[e._v("react.js")]),e._v("为模块的入口")]),e._v(" "),a("li",[e._v("一套是将"),a("code",[e._v("React")]),e._v("的所有相关代码打包好的完整代码放到一个单独的文件中， 这些代码没有采用模块化，可以直接执行。其中"),a("code",[e._v("dist/react.js")]),e._v("用于开发环境，里面包含检查和警告的代码。"),a("code",[e._v("dist/react.min.js")]),e._v(" 用于线上环境，被最小化了。")])]),e._v(" "),a("p",[e._v("在默认情况下，"),a("code",[e._v("Webpack")]),e._v("会从入口文件"),a("code",[e._v("./node_modules/react/react.js")]),e._v("开始递归解析和处理依赖的几十个文件，这会是一个耗时的操作通过配置"),a("code",[e._v("resolve.alias")]),e._v("，可以让"),a("code",[e._v("Webpack")]),e._v("在处理"),a("code",[e._v("React")]),e._v("库时，直接使用单独、完整的"),a("code",[e._v("react.min.js")]),e._v("文件，从而跳过耗时的递归解析操作")]),e._v(" "),a("p",[e._v("示例代码：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = {\n    resolve: {\n    //使用 alias 将导入 react 的语句换成直接使用单独、完整的 react.min.js 文件，\n    //减少耗时的递归解析操作\n        alias: {\n            'react': path.resolve( __dirname ,'./node_modules/react/dist/react.min.js'),\n        }\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h4",{attrs:{id:"_2-4-优化resolve-mainfields配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-优化resolve-mainfields配置"}},[e._v("#")]),e._v(" 2.4 优化"),a("code",[e._v("resolve.mainFields")]),e._v("配置")]),e._v(" "),a("p",[e._v("在安装的第三方模块中都会有一个"),a("code",[e._v("package.json")]),e._v("文件，用于描述这个模块的属性，其中可以存在多个字段描述入口文件，原因是某些模块可以同时用于多个环境中，针对不同的运行环境需要使用不同的代码。")]),e._v(" "),a("p",[a("code",[e._v("resolve.mainFields")]),e._v("的默认值和当前的"),a("code",[e._v("target")]),e._v("配置有关系，对应的关系如下：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("target web")]),e._v("或者"),a("code",[e._v("websorker")]),e._v("时，值是"),a("code",[e._v("［'browser','module','main']")]),e._v("。")]),e._v(" "),a("li",[a("code",[e._v("target")]),e._v("为其他情况时，值是"),a("code",[e._v("［ 'module','main']")]),e._v("。")])]),e._v(" "),a("p",[e._v("以 "),a("code",[e._v("target")]),e._v(" 等于 "),a("code",[e._v("web")]),e._v(" 为例， "),a("code",[e._v("Webpack")]),e._v(" 会先采用第三方模块中的 "),a("code",[e._v("browser")]),e._v(" 字段去寻找模块的入口文件，如果不存在，就采用 "),a("code",[e._v("module")]),e._v(" 字段，以此类推。")]),e._v(" "),a("p",[e._v("为了减少搜索步骤，在明确第三方模块的入口文件描述字段时，我们可以将它设置得尽量少。由于大多数第三方模块都采用"),a("code",[e._v("main")]),e._v("字段去描述入口文件的位置，所以可以这样配置：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = {\n    resolve: {\n    //只采用 main 字段作为入口文件的描述字段，以减少搜索步骤\n    mainFields: ['main']\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("h4",{attrs:{id:"_2-5-优化resolve-extensions配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-优化resolve-extensions配置"}},[e._v("#")]),e._v(" 2.5 优化"),a("code",[e._v("resolve.extensions")]),e._v("配置")]),e._v(" "),a("p",[e._v("在导入语句没带文件后缀时，Webpack 会自动带上后缀去尝试询问文件是否存在。如果这个列表越长，或者正确的后缀越往后，就会造成尝试的次数越多，所以"),a("code",[e._v("resolve.extensions")]),e._v("的配置也会影响到构建的性能在配置"),a("code",[e._v("resolve.extensions")]),e._v("时需要遵守以下几点，以做到尽可能地优化构建性能。")]),e._v(" "),a("ul",[a("li",[e._v("后缀尝试表要尽可能小，不要将项目中不可能存在的情况写到后缀尝试列表中。")]),e._v(" "),a("li",[e._v("频率出现最高的文件后缀要优先放在最前面，以做到尽快退出寻找过程。")]),e._v(" "),a("li",[e._v("在源码中写入语句时，要尽可能带上后缀从而可以避免寻找过程。例如在确定的情况下将 "),a("code",[e._v("require ( './data '）")]),e._v(" 写成 "),a("code",[e._v("require （'./data.json'）")])])]),e._v(" "),a("p",[e._v("示例配置：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = {\n    resolve : {\n        //尽可能减少后缀尝试的可能性\n        extensions : ['js'],\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("h4",{attrs:{id:"_2-6-优化module-noparse配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-优化module-noparse配置"}},[e._v("#")]),e._v(" 2.6 优化"),a("code",[e._v("module.noParse")]),e._v("配置")]),e._v(" "),a("p",[a("code",[e._v("module.noParse")]),e._v("配置项可以让"),a("code",[e._v("Webpack")]),e._v("忽略对部分没采用模块化的文件的递归解析处理，这样做的好处是能提高构建性能。原因是一些库如 jQuery。")]),e._v(" "),a("p",[e._v("示例代码：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = {\n    module: {\n        noParse: /jquery/,\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h4",{attrs:{id:"_2-7-happypack并发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-happypack并发"}},[e._v("#")]),e._v(" 2.7 "),a("code",[e._v("happypack")]),e._v("并发")]),e._v(" "),a("p",[a("code",[e._v("WebPack")]),e._v("是单线程模型的，也就是说"),a("code",[e._v("WebPack")]),e._v("需要一个一个地处理任务，不能同时处理多个任务。"),a("code",[e._v("HappyPack")]),e._v("将任务分解给多个子进程去并发执行，子进程处理完后再将结果发送给主进程，从而发挥多核 CPU 电脑的威力。")]),e._v(" "),a("p",[e._v("示例代码：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const HappyPack = require('happypack')\nconst os = require('os')\nconst happThreadPool = HappyPack.ThreadPool({size:os.cpus().length})\n\n{\n    test:/\\.js$/,\n}\n\nplugins:[\n    new HappyPack({\n        id:'happy-babel-js',\n        loaders:['babel-loader?cacheDirectory=true],\n        threadPool:happyThreadPool\n    })\n]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br")])]),a("p",[e._v("在整个"),a("code",[e._v("WebPack")]),e._v("构建流程中，最耗时的流程可能就是"),a("code",[e._v("Loader")]),e._v("对文件的转换操作了，因为要转换的文件数据量巨大，而且这些转换操作都只能一个一个地处理"),a("code",[e._v("HappyPack")]),e._v("的核心原理就是将这部分任务分解到多个进程中去并行处理，从而减少总的构建时间。")]),e._v(" "),a("h4",{attrs:{id:"_2-8-优化文件监听的性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-优化文件监听的性能"}},[e._v("#")]),e._v(" 2.8 优化文件监听的性能")]),e._v(" "),a("p",[e._v("在开启监听模式时，默认情况下会监听配置的"),a("code",[e._v("Entry")]),e._v("文件和所有"),a("code",[e._v("Entry")]),e._v("递归依赖的文件，在这些文件中会有很多存在于"),a("code",[e._v("node_modules")]),e._v("下，因为如今的"),a("code",[e._v("Web")]),e._v("项目会依赖大量的第三方模块，所以在大多数情况下我们都不可能去编辑"),a("code",[e._v("node_modules")]),e._v("下的文件，而是编辑自己建立的源码文件，而一个很大的优化点就是忽略"),a("code",[e._v("node_modules")]),e._v("下的文件，不监听它们。")]),e._v(" "),a("p",[e._v("示例代码：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.export = {\n    watchOptions : {\n        //不监听的 node_modules 目录下的文件\n        ignored : /node_modules/,\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("采用这种方法优化后， Webpack 消耗的内存和 CPU 将会大大减少。推荐使用 "),a("code",[e._v("thread-loader")])]),e._v(" "),a("h4",{attrs:{id:"_2-9-使用-dllplugin-和-dllreferenceplugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-使用-dllplugin-和-dllreferenceplugin"}},[e._v("#")]),e._v(" 2.9 使用 "),a("code",[e._v("DllPlugin")]),e._v(" 和 "),a("code",[e._v("DllReferencePlugin")])]),e._v(" "),a("p",[a("code",[e._v("DLLPlugin")]),e._v("和"),a("code",[e._v("DLLReferencePlugin")]),e._v("用某种方法实现了拆分"),a("code",[e._v("bundles")]),e._v("，同时还大大提升了构建的速度。")]),e._v(" "),a("p",[e._v("包含大量利用模块的动态链接库只需被编译一次，在之后的构建过程中被动态链接库包含的模块将不会重新编译，而是直接使用动态链接库中的代码，由动态链接库中大多数包含的是常用的第三方模块，例如 react、react-dom，所以只要不升级这些模块的版本，动态链接库就不用重新编译。")]),e._v(" "),a("p",[e._v("代码如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('module.exports = {\n    // mode: "development || "production",\n    plugins: [\n        new webpack.DllReferencePlugin({\n            context: path.join(__dirname, "..", "dll"),\n            manifest: require("../dll/dist/alpha-manifest.json") // eslint-disable-line\n        }),\n        new webpack.DllReferencePlugin({\n            scope: "beta",\n            manifest: require("../dll/dist/beta-manifest.json"), // eslint-disable-line\n            extensions: [".js", ".jsx"]\n        })\n    ]\n};\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])]),a("p",[e._v("与 "),a("code",[e._v("splitChunks")]),e._v("或"),a("code",[e._v("CommonsChunkPlugin")]),e._v("的区别")]),e._v(" "),a("ul",[a("li",[e._v("CommonsChunkPlugin 插件每次打包的时候还是会去处理一些第三方依赖库，只是它能把第三方库文件和我们的代码分开掉，生成一个独立的 js 文件，但它不能提高打包速度。")]),e._v(" "),a("li",[e._v("DLLPlugin 它能把第三方库代码分离开，并且每次文件更改的时候，它只会打包该项目自身的代码。所以打包速度会更快。")])]),e._v(" "),a("h4",{attrs:{id:"_2-10-使用paralleluglifyplugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-使用paralleluglifyplugin"}},[e._v("#")]),e._v(" 2.10 使用"),a("code",[e._v("ParallelUglifyPlugin")])]),e._v(" "),a("p",[a("code",[e._v("webpack")]),e._v("默认提供了"),a("code",[e._v("UglifyJS")]),e._v("插件来压缩 JS 代码，但是它使用的是单纯种压缩代码，也就是说多个"),a("code",[e._v("js")]),e._v("文件需要被压缩，它需要一个个文件进行压缩。所以说在正式环境打包压缩代码速度非常慢（因为压缩 JS 代码需要先把代码解析成用 Object 抽象表示的 AST 语法树，再去应用各种规则分析和处理 AST，导致这个过程耗时非常大）。")]),e._v(" "),a("p",[e._v("当 webpack 有多个 JS 文件需要输出和压缩时候，原来会使用 UglifyJS 去一个个压缩并且输出，但是 ParallelUglifyPlugin 插件则会开启多个子进程，把对多个文件压缩的工作分别给多个子进程并行处理多个子任务，效率会更加提高。")]),e._v(" "),a("h4",{attrs:{id:"_2-11-合理利用缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-合理利用缓存"}},[e._v("#")]),e._v(" 2.11 合理利用缓存")]),e._v(" "),a("p",[e._v("使用 webpack 缓存的方法有几种，例如使用"),a("code",[e._v("cache-loader")]),e._v("、"),a("code",[e._v("HardSourceWebpackPlugin")]),e._v("或"),a("code",[e._v("babel-loader")]),e._v("和"),a("code",[e._v("cacheDirectory")]),e._v("标志。所有这些缓存方法都有启动的开销。重新运行期间在本地节省了时间很大，但是初始（冷）运行实际上会更慢。")]),e._v(" "),a("p",[a("strong",[e._v("cache-loader")])]),e._v(" "),a("p",[e._v("使用"),a("code",[e._v("cache-loader")]),e._v("需要在一些性能开销较大的"),a("code",[e._v("loader")]),e._v("之前添加"),a("code",[e._v("cache-loader")]),e._v("，以将结果缓存到磁盘里，显著提升二次构建速度。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.ext$/,\n        use: ['cache-loader', ...loaders],\n        include: path.resolve('src'),\n      },\n    ],\n  },\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("p",[a("strong",[e._v("HardSourceWebpackPlugin")])]),e._v(" "),a("ul",[a("li",[e._v("第一次构建将花费正常的时间")]),e._v(" "),a("li",[e._v("第二次构建将显着加快（大概提升 90%的构建速度）。")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')\nconst clientWebpackConfig = {\n  // ...\n  plugins: [\n    new HardSourceWebpackPlugin({\n      // cacheDirectory是在高速缓存写入。默认情况下，将缓存存储在node_modules下的目录中\n      // 'node_modules/.cache/hard-source/[confighash]'\n      cacheDirectory: path.join(__dirname, './lib/.cache/hard-source/[confighash]'),\n      // configHash在启动webpack实例时转换webpack配置，\n      // 并用于cacheDirectory为不同的webpack配置构建不同的缓存\n      configHash: function(webpackConfig) {\n        // node-object-hash on npm can be used to build this.\n        return require('node-object-hash')({sort: false}).hash(webpackConfig);\n      },\n      // 当加载器、插件、其他构建时脚本或其他动态依赖项发生更改时，\n      // hard-source需要替换缓存以确保输出正确。\n      // environmentHash被用来确定这一点。如果散列与先前的构建不同，则将使用新的缓存\n      environmentHash: {\n        root: process.cwd(),\n        directories: [],\n        files: ['package-lock.json', 'yarn.lock'],\n      },\n      // An object. 控制来源\n      info: {\n        // 'none' or 'test'.\n        mode: 'none',\n        // 'debug', 'log', 'info', 'warn', or 'error'.\n        level: 'debug',\n      },\n      // Clean up large, old caches automatically.\n      cachePrune: {\n        // Caches younger than `maxAge` are not considered for deletion. They must\n        // be at least this (default: 2 days) old in milliseconds.\n        maxAge: 2 * 24 * 60 * 60 * 1000,\n        // All caches together must be larger than `sizeThreshold` before any\n        // caches will be deleted. Together they must be at least this\n        // (default: 50 MB) big in bytes.\n        sizeThreshold: 50 * 1024 * 1024\n      },\n    }),\n    new HardSourceWebpackPlugin.ExcludeModulePlugin([\n      {\n        test: /.*\\.DS_Store/\n      }\n    ]),\n  ]\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br"),a("span",{staticClass:"line-number"},[e._v("42")]),a("br"),a("span",{staticClass:"line-number"},[e._v("43")]),a("br"),a("span",{staticClass:"line-number"},[e._v("44")]),a("br"),a("span",{staticClass:"line-number"},[e._v("45")]),a("br"),a("span",{staticClass:"line-number"},[e._v("46")]),a("br"),a("span",{staticClass:"line-number"},[e._v("47")]),a("br")])]),a("p",[a("strong",[e._v("cacheDirectory")])]),e._v(" "),a("p",[e._v("主要 "),a("code",[e._v("loader")]),e._v(" 参数后面增加 "),a("code",[e._v("cacheDirectory")])]),e._v(" "),a("h3",{attrs:{id:"三、分析打包速度工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、分析打包速度工具"}},[e._v("#")]),e._v(" 三、分析打包速度工具")]),e._v(" "),a("ul",[a("li",[e._v("speed-measure-webpack-plugin")]),e._v(" "),a("li",[e._v("webpack-bundle-analyzer")])]),e._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI0MzIyMDM5Ng==&mid=2649825759&idx=1&sn=726279d3dfc2ea0b6ba34788517753ad&chksm=f175eb1cc602620a66821baedcb2663e393f7ae4857e8daf6d57e4c436f9a7297a555d0e4750&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack 性能优化总结大全"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/R9hyFWIvRlzHj9owa-aDjA",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack 优化——将你的构建效率提速翻倍"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/zy8GfmfM8tg6uiKAhItGIg",target:"_blank",rel:"noopener noreferrer"}},[e._v("【第 619 期】如何 10 倍提高你的 Webpack 构建效率"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/9v5S23tzGhpHPhLFY0V-rQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("【Webpack】538- 打包速度提升指南"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5ea6ea1bf265da7bba5094e2",target:"_blank",rel:"noopener noreferrer"}},[e._v("浅谈 Webpack 性能优化（内附巨详细 Webpack 学习笔记）"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[e._v("#")]),e._v(" 联系作者")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("p",[e._v("\n        平凡世界，贵在坚持。\n    ")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=r.exports}}]);