(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{495:function(s,n,e){"use strict";e.r(n);var a=e(13),r=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"webpack-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-配置"}},[s._v("#")]),s._v(" webpack 配置")]),s._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),s._v(" "),e("h2",{attrs:{id:"内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E4%BB%8B%E7%BB%8D%E3%80%81%E5%AE%89%E8%A3%85%E5%8F%8A%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4"}},[s._v("介绍、安装及常用命令")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E6%9C%80%E7%AE%80%E5%8D%95%E9%85%8D%E7%BD%AE"}},[s._v("webpack 基本配置说明")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#%E4%B8%89%E3%80%81webpack%E9%85%8D%E7%BD%AE"}},[s._v("webpack 配置")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#%E6%80%BB%E7%BB%93"}},[s._v("总结")])])]),s._v(" "),e("h3",{attrs:{id:"一、介绍、安装及常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、介绍、安装及常用命令"}},[s._v("#")]),s._v(" 一、介绍、安装及常用命令")]),s._v(" "),e("ul",[e("li",[s._v("什么是 webpack")]),s._v(" "),e("li",[s._v("webpack 特点")]),s._v(" "),e("li",[s._v("webpack 安装")]),s._v(" "),e("li",[s._v("常用命令")])]),s._v(" "),e("h4",{attrs:{id:"_1-1-什么是-webpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是-webpack"}},[s._v("#")]),s._v(" 1.1 什么是 webpack")]),s._v(" "),e("p",[s._v("自从出现模块化以后，大家可以将原本一坨代码分离到个个模块中，但是由此引发了一个问题。每个 JS 文件都需要从服务器去拿，由此会导致加载速度变慢。Webpack 最主要的目的就是为了解决这个问题，将所有小文件打包成一个或多个大文件，官网的图片很好的诠释了这个事情，除此之外，Webpack 也是一个能让你使用各种前端新技术的工具。")]),s._v(" "),e("p",[e("img",{attrs:{src:"webpack01.jpg",alt:"image"}})]),s._v(" "),e("p",[s._v("webpack 一共经历了 4 个版本，分别是 1、2、3、4，最新版本是 4，以下案例是基于 4 实践的")]),s._v(" "),e("h4",{attrs:{id:"_1-2-webpack-特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-webpack-特点"}},[s._v("#")]),s._v(" 1.2 webpack 特点")]),s._v(" "),e("ol",[e("li",[s._v("专注于处理模块化的项目，能做到开箱即用、一步到位；")]),s._v(" "),e("li",[s._v("可通过 Plugin 扩展，完整好用又不失灵活；")]),s._v(" "),e("li",[s._v("使用场景不局限于 web 开发；")]),s._v(" "),e("li",[s._v("社区庞大活跃，经常引入紧跟时代发展的新特性，能为大多数场景找到自己有的开源扩展；")]),s._v(" "),e("li",[s._v("良好的开发体验；")])]),s._v(" "),e("p",[s._v("——自来《深入浅出 webpack》")]),s._v(" "),e("h4",{attrs:{id:"_1-3-webpack-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-webpack-安装"}},[s._v("#")]),s._v(" 1.3 webpack 安装")]),s._v(" "),e("p",[s._v("全局安装 webpack")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm install -g webpack\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("局部安装 webpack")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm install --save-dev webpack\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"_1-4-常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-常用命令"}},[s._v("#")]),s._v(" 1.4 常用命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("webpack -p 执行一次生成环境的编译（压缩）\nwebpack --watch 在开发时持续监控增量编译（很快）\nwebpack -d 让他生成SourceMaps\nwebpack --progress 显示编译进度\nwebpack --colors 显示静态资源的颜色\nwebpack --sort-modules-by, --sort-chunks-by, --sort-assets-by 将modules/chunks/assets进行列表排序\nwebpack --display-chunks 展示编译后的分块\nwebpack --display-reasons 显示更多引用模块原因\nwebapck --display-error-details 显示更多报错信息\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h3",{attrs:{id:"二、最简单配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、最简单配置"}},[s._v("#")]),s._v(" 二、最简单配置")]),s._v(" "),e("h4",{attrs:{id:"_2-1-webpack-相关参数介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-webpack-相关参数介绍"}},[s._v("#")]),s._v(" 2.1 webpack 相关参数介绍")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("entry")])])]),s._v(" "),e("p",[s._v("配置模块的入口，Entry 参数说明，类型可以是以下三种中的一种或者相互组合")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("类型")]),s._v(" "),e("th",[s._v("例子")]),s._v(" "),e("th",[s._v("含义")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("string")]),s._v(" "),e("td",[s._v("'./app/entry'")]),s._v(" "),e("td",[s._v("入口模块的文件路径，可以相对路径")])]),s._v(" "),e("tr",[e("td",[s._v("array")]),s._v(" "),e("td",[s._v("['./app/entry1','./app/entry2']")]),s._v(" "),e("td",[s._v("入口模块的文件路径，可以是相对路径")])]),s._v(" "),e("tr",[e("td",[s._v("object")]),s._v(" "),e("td",[s._v("{a:['./app/entry-a'],b:['./app/entry-b1','./app/entry-b2']}")]),s._v(" "),e("td",[s._v("配置多个入口，每个入口生成一个 chunk")])])])]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("output")])])]),s._v(" "),e("p",[s._v("配置如何输出最终想要的代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("output是一个object,里面包含一系列配置项\n\noutput.filename:'[name].js'  //输出文件的名称\n也可以使用hash、chunkhash、contenthash来命名，关于hash、chunkhash、contenthash区别可以参考https://www.cnblogs.com/tugenhua0707/p/9615822.html#_labe1_2\n\noutput.chunkFilename://chunkFilename 和上面的 filename 非常类似，但 chunkFilename 只用于指定在运行过程中生成的 Chunk 在输出时的文件名称，vue按需加载就可以使用这个参数\n\noutput.path：path .resolve( dirname, ’ dist [hash]’) //path 配置输出文件存放在本地的目录\noutput.publicPath:'https://cdn.example.com/assets/' //配置发布到线上资源的 URL 前缀\noutput.libraryTarget://配置以何种方式导出库，可选值var、commonjs、commonjs2、this、window、global\noutput.library://配置导出库的名称。\noutput.libraryExport: 配置要导出的模块中哪些子模块需要被导出\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("ul",[e("li",[e("strong",[s._v("module")])])]),s._v(" "),e("p",[e("code",[s._v("rules")]),s._v("配置模块的读取和解析规则，通常用来配置 Loader。大致可以通过以下方式来完成")]),s._v(" "),e("ul",[e("li",[s._v("条件匹配:通过"),e("code",[s._v("test")]),s._v("、"),e("code",[s._v("include")]),s._v("、 "),e("code",[s._v("exclude")]),s._v("三个配置项来选中"),e("code",[s._v("Loader")]),s._v("要应用 规则的文件。")]),s._v(" "),e("li",[s._v("应用规则：对选中的文件通过 "),e("code",[s._v("use")]),s._v("配置项来应用"),e("code",[s._v("Loader")]),s._v("，可以只应用一个"),e("code",[s._v("Loader")]),s._v("或者按照从后往前的顺序应用一组 "),e("code",[s._v("Loader")]),s._v("，同时可以分别向"),e("code",[s._v("Loader")]),s._v("传入参数。")]),s._v(" "),e("li",[s._v("重置顺序:一组"),e("code",[s._v("Loader")]),s._v("的执行顺序默认是从右到左执行的，通过"),e("code",[s._v("enforce")]),s._v("选项可以将其中 一个"),e("code",[s._v("Loader")]),s._v("的执行顺序放到最前或者最后 。")])]),s._v(" "),e("p",[s._v("具体方法：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("module:{\n    rules:[\n        {\n            //命中 JavaScript 文件\n            test: /\\.js$/，\n            //用 babel-loader 转换 JavaScript 文件\n            //?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 的编译结果，\n            use : [’ babel-loader?cacheDirectory ’],\n            //只命中 src 目录里的 JavaScript 文件，加快 Webpack 的搜索速度\n            include: path.resolve( dirname, ’ src ’)\n        },\n        {\n            //命中scss文件\n            test:/\\.scss$/,\n            //使用一组loader去处理scss文件\n            //处理顺序为从后到前，即先交给 sass-loader处理，再将结果交给 css-loader,最后交给 style-loader\n            use:['style-loader','css-loader','sass-loader'],\n            //排除node_modules目录下的文件\n            exclude: path.resolve( dirname, ’ node modules ’)\n        },\n        {\n            //对非文件采用file-loader加载\n            test:/\\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,\n            use:['file-loader']\n        }\n    ]\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br")])]),e("ul",[e("li",[e("strong",[s._v("noParse")])])]),s._v(" "),e("p",[s._v("配置项可以让 Webpack 忽略对部分没采用模块化的文件的递归解析和处理，这样做的好处能提高构建性能。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    //使用正则表达式\nnoParse: /jquerylchartjs/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("注意，被忽略的文件里不应该包含"),e("code",[s._v("import")]),s._v("、"),e("code",[s._v("require")]),s._v("、"),e("code",[s._v("define")]),s._v("等模块化 语句，不 然会导致在构建出的代码中包含无法在浏览器环境下执行的模块化语句 。")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("parse")])])]),s._v(" "),e("p",[e("code",[s._v("parser")]),s._v("属性可以更细粒度地配置 哪些模块语法被解析、哪些不被解析。同"),e("code",[s._v("noParse")]),s._v("配置项的区别在于，"),e("code",[s._v("parser")]),s._v("可以精确到 语法层 面，而"),e("code",[s._v("noParse")]),s._v("只能控制哪些文件不被解析。")]),s._v(" "),e("p",[e("code",[s._v("parser")]),s._v("的使用方法如下:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("module: {\n    rules : [\n        {\n        test: /\\.js♀/，\n        use: [ ’ babel-loader ’],\n        parser: {\n            amd: false， //禁用AMD\n            commonjs : false , //禁用 CommonJS\n            system : false, //禁用 SystemJS\n            harmony: false， //禁用 ES6 import/export\n            requireinclude:false,   //禁用require.include\n            requireEnsure: false,   //禁用require.ensure\n            requireContext:false,   //禁用require.context\n            browserify: false, //禁用 browserify requireJs : false, //禁用 requirejs:false\n            requireJs : false, //禁用 requirejs\n            }\n        }\n    ]\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("ul",[e("li",[e("strong",[s._v("resolve")])])]),s._v(" "),e("p",[s._v("配置寻找模块的规则")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("配置项通过别名来将原导入路径映射成一个新的导入路径\n\nresolve:{\n    alias:{\n        components:'./src/components/'\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("ul",[e("li",[e("strong",[s._v("mainFields")])])]),s._v(" "),e("p",[s._v("会根据"),e("code",[s._v("mainFields")]),s._v("的配 置去决定 优先采用哪份代码，")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mainFields : [’jsnext:main’,’browser’,’main’]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[e("strong",[s._v("extensions")])])]),s._v(" "),e("p",[s._v("Webpack 会自动带上后缀后去尝试访问文件是否存在。 resolve.extensions 用于配置在尝试过程中用到的后缀列表")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("extensions:[’.ts’,’.j5 ’,’.json’]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[e("strong",[s._v("plugins")])])]),s._v(" "),e("p",[s._v("配置扩展插件")]),s._v(" "),e("p",[s._v("plugins 配置项接收一个数组，数组里的每一项都是一个要使用 的 Plugin 的实例， Plugin 需要的参数通过构造函数传入,"),e("code",[s._v("mini-css-extract-plugin")]),s._v("、"),e("code",[s._v("clean-webpack-plugin")]),s._v("、"),e("code",[s._v("DllReferencePlugin")]),s._v("、"),e("code",[s._v("html-webpack-plugin")]),s._v("、"),e("code",[s._v("happyPack")]),s._v("、"),e("code",[s._v("webpack-parallel-uglify-plugin")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const ClearWebpackPlugin = require('clean-webpack-plugin');\n\nmodule.exports=[\n    plugins:[\n        new ClearWebpackPlugin(['dist'])\n    ]\n];\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("ul",[e("li",[e("p",[e("strong",[s._v("DevServer")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("hot")]),s._v(",开启模块热替换功能后，将在不刷新整个页面的情况下通过用新模块替换老模块来做到实时预览")]),s._v(" "),e("li",[e("code",[s._v("inline")]),s._v(",依赖一个注入页面里的代理客户端，去接收来自 DevServer 的 命令并负责刷新网页的工作。")]),s._v(" "),e("li",[e("code",[s._v("contentBase")]),s._v(",配置 DevServerHTTP 服务器的文件根目录")])])])]),s._v(" "),e("h3",{attrs:{id:"三、webpack-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、webpack-配置"}},[s._v("#")]),s._v(" 三、webpack 配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const path = require('path');\nconst webpack = require('webpack');\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nconst MiniCssExtractPlugin = require(\"mini-css-extract-plugin\");\nconst ClearWebpackPlugin = require('clean-webpack-plugin');\nconst DllReferencePlugin = require('webpack/lib/DllReferencePlugin');\nconst ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');\nconst HappyPack = require('happypack');\nmodule.exports = {\n    entry: './app/index/app.js', //支持多个参数，string|array|object\n    output: {\n        filename: ' [name].js', //输出文件名称\n        path: path.resolve(__dirname, './dist'), //输出文件的目标路径\n        publicPath: '/' //构建文件的输出目录\n    },\n    devServer: { //DevServer相关的配置\n        contentBase: path.join(__dirname, 'dist'),\n        compress: true, //压缩\n        port: 8888, //端口号\n        open: true, //第一次打开浏览器\n        hot: true, //是否监听\n        publicPath: \"/\" //访问的目录\n    },\n    module: {\n        rules: [{\n                test: /\\.js$/,\n                use: [' babel-loader'],\n                parser: {\n                    amd: true, //禁用AMD\n                    commonjs: true, //禁用 CommonJS\n                    system: false, //禁用 SystemJS\n                    harmony: true, //禁用 ES6 import/export\n                    requireinclude: false, //禁用require.include\n                    requireEnsure: false, //禁用require.ensure\n                    requireContext: false, //禁用require.context\n                    browserify: false, //禁用 browserify requireJs : false, //禁用 requirejs:false\n                    requireJs: false, //禁用 requirejs\n                }\n            },\n            {\n                // 用正则去匹配要用该 loader 转换的 CSS 文件\n                test: /\\.css$/,\n                use: [{\n                    loader: MiniCssExtractPlugin.loader,\n                }, {\n                    loader: path.resolve('./loaders.js'),\n                    options: {\n                        test: 1\n                    }\n                }, {\n                    loader: 'css-loader?minimize',\n                }, {\n                    loader: 'postcss-loader',\n                    options: {\n                        ident: 'postcss',\n                        plugins: [\n                            require('postcss-cssnext')(),\n                            require('cssnano')(),\n                            require('postcss-sprites')()\n                        ]\n                    }\n                }],\n            }, {\n                //图片处理\n                test: /\\.(png|svg|jpg|gif)$/,\n                use: [{\n                    loader: 'url-loader',\n                    options: {\n                        limit: 10000,\n                        name: '[name].[ext]'\n                    }\n                }]\n            }\n        ]\n    },\n    resolve: {\n        modules: [\n            // 模块的查找目录\n            \"node_modules\",\n            path.resolve(__dirname, \"app\")\n        ],\n        extensions: ['.js', '.json', '.vue', '.css'],\n        alias: { //模块别名列表\n            'module': 'new-module'\n        }\n    },\n    devtool: 'source-map', //sourcemap\n    plugins: [ //插件部分\n        new ClearWebpackPlugin(['dist']),\n        new MiniCssExtractPlugin({\n            // Options similar to the same options in webpackOptions.output\n            // both options are optional\n            filename: `[name]_[contenthash:8].css`,\n            chunkFilename: '[name]_[contenthash:8].css'\n        }),\n        // 告诉webpack使用了哪些第三方库代码\n        new DllReferencePlugin({\n            // jquery 映射到json文件上去\n            manifest: require('./dill/jquery.manifest.json')\n        }),\n        new ParallelUglifyPlugin({\n            // 传递给 UglifyJS的参数如下：\n            uglifyJS: {\n                output: {\n                    /*\n                     是否输出可读性较强的代码，即会保留空格和制表符，默认为输出，为了达到更好的压缩效果，\n                     可以设置为false\n                    */\n                    beautify: false,\n                    /*\n                     是否保留代码中的注释，默认为保留，为了达到更好的压缩效果，可以设置为false\n                    */\n                    comments: false\n                },\n                compress: {\n                    /*\n                     是否在UglifyJS删除没有用到的代码时输出警告信息，默认为输出，可以设置为false关闭这些作用\n                     不大的警告\n                    */\n                    warnings: false,\n\n                    /*\n                     是否删除代码中所有的console语句，默认为不删除，开启后，会删除所有的console语句\n                    */\n                    drop_console: true,\n\n                    /*\n                     是否内嵌虽然已经定义了，但是只用到一次的变量，比如将 var x = 1; y = x, 转换成 y = 5, 默认为不\n                     转换，为了达到更好的压缩效果，可以设置为false\n                    */\n                    collapse_vars: true,\n\n                    /*\n                     是否提取出现了多次但是没有定义成变量去引用的静态值，比如将 x = 'xxx'; y = 'xxx'  转换成\n                     var a = 'xxxx'; x = a; y = a; 默认为不转换，为了达到更好的压缩效果，可以设置为false\n                    */\n                    reduce_vars: true\n                }\n            }\n        }),\n        //将js自动插入到html里\n        new HtmlWebpackPlugin({\n            template: './views/index.html',\n            filename: 'index.html',\n        }),\n        new webpack.HotModuleReplacementPlugin() //引入热更新插件\n    ]\n};\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br"),e("span",{staticClass:"line-number"},[s._v("87")]),e("br"),e("span",{staticClass:"line-number"},[s._v("88")]),e("br"),e("span",{staticClass:"line-number"},[s._v("89")]),e("br"),e("span",{staticClass:"line-number"},[s._v("90")]),e("br"),e("span",{staticClass:"line-number"},[s._v("91")]),e("br"),e("span",{staticClass:"line-number"},[s._v("92")]),e("br"),e("span",{staticClass:"line-number"},[s._v("93")]),e("br"),e("span",{staticClass:"line-number"},[s._v("94")]),e("br"),e("span",{staticClass:"line-number"},[s._v("95")]),e("br"),e("span",{staticClass:"line-number"},[s._v("96")]),e("br"),e("span",{staticClass:"line-number"},[s._v("97")]),e("br"),e("span",{staticClass:"line-number"},[s._v("98")]),e("br"),e("span",{staticClass:"line-number"},[s._v("99")]),e("br"),e("span",{staticClass:"line-number"},[s._v("100")]),e("br"),e("span",{staticClass:"line-number"},[s._v("101")]),e("br"),e("span",{staticClass:"line-number"},[s._v("102")]),e("br"),e("span",{staticClass:"line-number"},[s._v("103")]),e("br"),e("span",{staticClass:"line-number"},[s._v("104")]),e("br"),e("span",{staticClass:"line-number"},[s._v("105")]),e("br"),e("span",{staticClass:"line-number"},[s._v("106")]),e("br"),e("span",{staticClass:"line-number"},[s._v("107")]),e("br"),e("span",{staticClass:"line-number"},[s._v("108")]),e("br"),e("span",{staticClass:"line-number"},[s._v("109")]),e("br"),e("span",{staticClass:"line-number"},[s._v("110")]),e("br"),e("span",{staticClass:"line-number"},[s._v("111")]),e("br"),e("span",{staticClass:"line-number"},[s._v("112")]),e("br"),e("span",{staticClass:"line-number"},[s._v("113")]),e("br"),e("span",{staticClass:"line-number"},[s._v("114")]),e("br"),e("span",{staticClass:"line-number"},[s._v("115")]),e("br"),e("span",{staticClass:"line-number"},[s._v("116")]),e("br"),e("span",{staticClass:"line-number"},[s._v("117")]),e("br"),e("span",{staticClass:"line-number"},[s._v("118")]),e("br"),e("span",{staticClass:"line-number"},[s._v("119")]),e("br"),e("span",{staticClass:"line-number"},[s._v("120")]),e("br"),e("span",{staticClass:"line-number"},[s._v("121")]),e("br"),e("span",{staticClass:"line-number"},[s._v("122")]),e("br"),e("span",{staticClass:"line-number"},[s._v("123")]),e("br"),e("span",{staticClass:"line-number"},[s._v("124")]),e("br"),e("span",{staticClass:"line-number"},[s._v("125")]),e("br"),e("span",{staticClass:"line-number"},[s._v("126")]),e("br"),e("span",{staticClass:"line-number"},[s._v("127")]),e("br"),e("span",{staticClass:"line-number"},[s._v("128")]),e("br"),e("span",{staticClass:"line-number"},[s._v("129")]),e("br"),e("span",{staticClass:"line-number"},[s._v("130")]),e("br"),e("span",{staticClass:"line-number"},[s._v("131")]),e("br"),e("span",{staticClass:"line-number"},[s._v("132")]),e("br"),e("span",{staticClass:"line-number"},[s._v("133")]),e("br"),e("span",{staticClass:"line-number"},[s._v("134")]),e("br"),e("span",{staticClass:"line-number"},[s._v("135")]),e("br"),e("span",{staticClass:"line-number"},[s._v("136")]),e("br"),e("span",{staticClass:"line-number"},[s._v("137")]),e("br"),e("span",{staticClass:"line-number"},[s._v("138")]),e("br"),e("span",{staticClass:"line-number"},[s._v("139")]),e("br"),e("span",{staticClass:"line-number"},[s._v("140")]),e("br"),e("span",{staticClass:"line-number"},[s._v("141")]),e("br"),e("span",{staticClass:"line-number"},[s._v("142")]),e("br"),e("span",{staticClass:"line-number"},[s._v("143")]),e("br"),e("span",{staticClass:"line-number"},[s._v("144")]),e("br"),e("span",{staticClass:"line-number"},[s._v("145")]),e("br"),e("span",{staticClass:"line-number"},[s._v("146")]),e("br"),e("span",{staticClass:"line-number"},[s._v("147")]),e("br"),e("span",{staticClass:"line-number"},[s._v("148")]),e("br")])]),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("p",[s._v("webpack 打包配置相对比较复杂，目前介绍应该可以满常规需求。")]),s._v(" "),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),e("ul",[e("li",[s._v("《深入浅出 webpack》")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/yanlele/node-index/blob/master/book/11%E3%80%81%E6%B7%B1%E5%85%A5webpack%E5%B7%A5%E7%A8%8B%E5%8C%96/01%E3%80%81%E7%94%B1%E6%B5%85%E5%85%A5%E6%B7%B1Webpack/README.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("由浅入深 Webpack"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/webpack-china/awesome-webpack-cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("搜罗一切 webpack 的好文章好工具"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5cea1e1ae51d4510664d1652",target:"_blank",rel:"noopener noreferrer"}},[s._v("关于 webpack4 的 14 个知识点,童叟无欺"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/b45oLYScG8L40iVlg7qG7g",target:"_blank",rel:"noopener noreferrer"}},[s._v("一文搞懂 Webpack 多入口配置"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5de06aa851882572d672c1ad",target:"_blank",rel:"noopener noreferrer"}},[s._v("一步步从零开始用 webpack 搭建一个大型项目"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5d518b4de51d4561cc25f013",target:"_blank",rel:"noopener noreferrer"}},[s._v("【Cute-Webpack】Webpack4 入门手册（共 18 章）"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/luoxue-victor/webpack-box",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack 工程师的自我修养"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5df884ad6fb9a0164e7f979d",target:"_blank",rel:"noopener noreferrer"}},[s._v("Webpack 深入浅出之公司级分享总结(内附完整 ppt)"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5de87444518825124c50cd36",target:"_blank",rel:"noopener noreferrer"}},[s._v("2020 年了,再不会 webpack 敲得代码就不香了(近万字实战)"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/MT5Vpg4BFXMh_c91a515iA",target:"_blank",rel:"noopener noreferrer"}},[s._v("从构建进程间缓存设计 谈 Webpack5 优化和工作原理"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5bb8ef58f265da0a972e3434",target:"_blank",rel:"noopener noreferrer"}},[s._v("Webpack Tree shaking 深入探究"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/Array-Huang/webpack-seed",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack 的多页应用脚手架"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/23f64lu-qAEAK76lFYyzow",target:"_blank",rel:"noopener noreferrer"}},[s._v("利用 webpack 搭建脚手架一套完整流程"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"联系作者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),e("div",{attrs:{align:"center"}},[e("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),e("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);n.default=r.exports}}]);