# webpack配置

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 介绍、安装及常用命令
- webpack基本配置说明
- webpack配置
- 优化
- 原理
- 手写webpack插件
- 手写loader
- 总结

### 一、介绍、安装及常用命令

#### 1.1 什么是webpack

自从出现模块化以后，大家可以将原本一坨代码分离到个个模块中，但是由此引发了一个问题。每个 JS 文件都需要从服务器去拿，由此会导致加载速度变慢。Webpack 最主要的目的就是为了解决这个问题，将所有小文件打包成一个或多个大文件，官网的图片很好的诠释了这个事情，除此之外，Webpack 也是一个能让你使用各种前端新技术的工具。

![image](https://user-gold-cdn.xitu.io/2017/9/15/92a95decddcecb9e25304f3b6a9dfb9c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

webpack一共经历了4个版本，分别是1、2、3、4，最新版本是4，以下案例是基于4实践的

#### 1.2 webpack特点

1. 专注于处理模块化的项目，能做到开箱即用、一步到位；
2. 可通过Plugin扩展，完整好用又不失灵活；
3. 使用场景不局限于web开发；
4. 社区庞大活跃，经常引入紧跟时代发展的新特性，能为大多数场景找到自己有的开源扩展；
5. 良好的开发体验；

——自来《深入浅出webpack》

#### 1.3 webpack安装

全局安装webpack

```
npm install -g webpack
```

局部安装webpack

```
npm install --save-dev webpack
```

#### 1.4 常用命令

```
webpack -p 执行一次生成环境的编译（压缩）
webpack --watch 在开发时持续监控增量编译（很快）
webpack -d 让他生成SourceMaps
webpack --progress 显示编译进度
webpack --colors 显示静态资源的颜色
webpack --sort-modules-by, --sort-chunks-by, --sort-assets-by 将modules/chunks/assets进行列表排序
webpack --display-chunks 展示编译后的分块
webpack --display-reasons 显示更多引用模块原因
webapck --display-error-details 显示更多报错信息

```

### 二、最简单配置

#### 2.1 webpack相关参数介绍

- **entry**

配置模块的入口，Entry参数说明，类型可以是以下三种中的一种或者相互组合

| 类型   | 例子                                                        | 含义                                |
| ------ | ----------------------------------------------------------- | ----------------------------------- |
| string | './app/entry'                                               | 入口模块的文件路径，可以相对路径    |
| array  | ['./app/entry1','./app/entry2']                             | 入口模块的文件路径，可以是相对路径  |
| object | {a:['./app/entry-a'],b:['./app/entry-b1','./app/entry-b2']} | 配置多个入口，每个入口生成一个chunk |

- **output**

配置如何输出最终想要的代码

```
output是一个object,里面包含一系列配置项

output.filename:'[name].js'  //输出文件的名称
也可以使用hash、chunkhash、contenthash来命名，关于hash、chunkhash、contenthash区别可以参考https://www.cnblogs.com/tugenhua0707/p/9615822.html#_labe1_2

output.chunkFilename://chunkFilename 和上面的 filename 非常类似，但 chunkFilename 只用于指定在运行过程中生成的 Chunk 在输出时的文件名称，vue按需加载就可以使用这个参数

output.path：path .resolve( dirname, ’ dist [hash]’) //path 配置输出文件存放在本地的目录
output.publicPath:'https://cdn.example.com/assets/' //配置发布到线上资源的 URL 前缀
output.libraryTarget://配置以何种方式导出库，可选值var、commonjs、commonjs2、this、window、global
output.library://配置导出库的名称。
output.libraryExport: 配置要导出的模块中哪些子模块需要被导出 

```

##### 3. module

3.1 rules 

rules 配置模块的读取和解析规则，通常用来配置 Loader。大致可以通过以下方式来完成

条件匹配:通过 test、 include、 exclude 三个配置项来选中 Loader 要应用 规则的文件。

应用规则：对选中的文件通过 use 配置项来应用 Loader，可以只应用一个 Loader或者按照从后往前的顺序应用一组 Loader，同时可以分别向 Loader传入参数。

重置顺序:一组 Loader 的执行顺序默认是从右到左执行的，通过 enforce 选项可以将其中 一个 Loader 的执行顺序放到最前或者最后 。

具体方法：

```
module:{
    rules:[
        {
            //命中 JavaScript 文件
            test: /\.js$/，
            //用 babel-loader 转换 JavaScript 文件
            //?cacheDirectory 表示传给 babel-loader 的参数，用于缓存 babel 的编译结果，
            use : [’ babel-loader?cacheDirectory ’],
            //只命中 src 目录里的 JavaScript 文件，加快 Webpack 的搜索速度 
            include: path.resolve( dirname, ’ src ’)
        },
        {
            //命中scss文件
            test:/\.scss$/,
            //使用一组loader去处理scss文件
            //处理顺序为从后到前，即先交给 sass-loader处理，再将结果交给 css-loader,最后交给 style-loader
            use:['style-loader','css-loader','sass-loader'],
            //排除node_modules目录下的文件
            exclude: path.resolve( dirname, ’ node modules ’)
        },
        {
            //对非文件采用file-loader加载
            test:/\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
            use:['file-loader']
        }
    ]
    
}
```

3.2 noParse

配置项可以让Webpack忽略对部分没采用模块化的文件的递归解析和处理，这样做的好处能提高构建性能。

```
    //使用正则表达式
noParse: /jquerylchartjs/
```
注意，被忽略的文件里不应该包含 import、 require、 define 等模块化 语句，不 然会导致在构建出的代码中包含无法在浏览器环境下执行的模块化语句 。

3.3. parse

parser 属性可以更细粒度地配置 哪些模块语法被解析、哪些不被解析。同 noParse 配置项的区别在于， parser 可以精确到 语法层 面，而 noParse 只能控制哪些文件不被解析。

parser 的使用方法如下:

```
module: { 
    rules : [
        {
        test: /\.js♀/，
        use: [ ’ babel-loader ’],
        parser: {
            amd: false， //禁用AMD
            commonjs : false , //禁用 CommonJS
            system : false, //禁用 SystemJS
            harmony: false， //禁用 ES6 import/export
            requireinclude:false,   //禁用require.include
            requireEnsure: false,   //禁用require.ensure
            requireContext:false,   //禁用require.context
            browserify: false, //禁用 browserify requireJs : false, //禁用 requirejs:false
            requireJs : false, //禁用 requirejs
            }
        }
    ]
}
```

##### 4. resolve

配置寻找模块的规则

4.1. alias
```
配置项通过别名来将原导入路径映射成一个新的导入路径

resolve:{
    alias:{
        components:'./src/components/'
    }
}
```

4.2. mainFields

会根据 mainFields 的配 置去决定 优先采用哪份代码，

```
mainFields : [’jsnext:main’,’browser’,’main’]

```
4.3. extensions

Webpack 会自动带上后缀后去尝试访问文件是否存在。 resolve.extensions 用于配置在尝试过程中用到的后缀列表

```
extensions:[’.ts’,’.j5 ’,’.json’]

```

1. plugins

配置扩展插件

plugins配置项接收一个数组，数组里的每一项都是一个要使用 的 Plugin 的实例， Plugin 需要的参数通过构造函数传入,mini-css-extract-plugin、clean-webpack-plugin、DllReferencePlugin、html-webpack-plugin、happyPack、webpack-parallel-uglify-plugin

```
const ClearWebpackPlugin = require('clean-webpack-plugin');

module.exports=[
    plugins:[
        new ClearWebpackPlugin(['dist'])
    ]
];
```

6. DevServer

hot,开启模块热替换功能后，将在不刷新整个页面的情况下通过用新模块替换老模块来做到实时预览

inline,依赖一个注入页面里的代理客户端，去接收来自 DevServer的 命令并负责刷新网页的工作。

contentBase,配置 DevServerHTTP服务器的文件根目录

### webpack配置

```
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ClearWebpackPlugin = require('clean-webpack-plugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const HappyPack = require('happypack');
module.exports = {
    entry: './app/index/app.js', //支持多个参数，string|array|object
    output: {
        filename: ' [name].js', //输出文件名称
        path: path.resolve(__dirname, './dist'), //输出文件的目标路径
        publicPath: '/' //构建文件的输出目录
    },
    devServer: { //DevServer相关的配置
        contentBase: path.join(__dirname, 'dist'),
        compress: true, //压缩
        port: 8888, //端口号
        open: true, //第一次打开浏览器
        hot: true, //是否监听
        publicPath: "/" //访问的目录
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [' babel-loader'],
                parser: {
                    amd: true, //禁用AMD
                    commonjs: true, //禁用 CommonJS
                    system: false, //禁用 SystemJS
                    harmony: true, //禁用 ES6 import/export
                    requireinclude: false, //禁用require.include
                    requireEnsure: false, //禁用require.ensure
                    requireContext: false, //禁用require.context
                    browserify: false, //禁用 browserify requireJs : false, //禁用 requirejs:false
                    requireJs: false, //禁用 requirejs
                }
            },
            {
                // 用正则去匹配要用该 loader 转换的 CSS 文件
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: path.resolve('./loaders.js'),
                    options: {
                        test: 1
                    }
                }, {
                    loader: 'css-loader?minimize',
                }, {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: [
                            require('postcss-cssnext')(),
                            require('cssnano')(),
                            require('postcss-sprites')()
                        ]
                    }
                }],
            }, {
                //图片处理
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    resolve: {
        modules: [
            // 模块的查找目录
            "node_modules",
            path.resolve(__dirname, "app")
        ],
        extensions: ['.js', '.json', '.vue', '.css'],
        alias: { //模块别名列表
            'module': 'new-module'
        }
    },
    devtool: 'source-map', //sourcemap
    plugins: [ //插件部分
        new ClearWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: `[name]_[contenthash:8].css`,
            chunkFilename: '[name]_[contenthash:8].css'
        }),
        // 告诉webpack使用了哪些第三方库代码
        new DllReferencePlugin({
            // jquery 映射到json文件上去
            manifest: require('./dill/jquery.manifest.json')
        }),
        new ParallelUglifyPlugin({
            // 传递给 UglifyJS的参数如下：
            uglifyJS: {
                output: {
                    /*
                     是否输出可读性较强的代码，即会保留空格和制表符，默认为输出，为了达到更好的压缩效果，
                     可以设置为false
                    */
                    beautify: false,
                    /*
                     是否保留代码中的注释，默认为保留，为了达到更好的压缩效果，可以设置为false
                    */
                    comments: false
                },
                compress: {
                    /*
                     是否在UglifyJS删除没有用到的代码时输出警告信息，默认为输出，可以设置为false关闭这些作用
                     不大的警告
                    */
                    warnings: false,

                    /*
                     是否删除代码中所有的console语句，默认为不删除，开启后，会删除所有的console语句
                    */
                    drop_console: true,

                    /*
                     是否内嵌虽然已经定义了，但是只用到一次的变量，比如将 var x = 1; y = x, 转换成 y = 5, 默认为不
                     转换，为了达到更好的压缩效果，可以设置为false
                    */
                    collapse_vars: true,

                    /*
                     是否提取出现了多次但是没有定义成变量去引用的静态值，比如将 x = 'xxx'; y = 'xxx'  转换成
                     var a = 'xxxx'; x = a; y = a; 默认为不转换，为了达到更好的压缩效果，可以设置为false
                    */
                    reduce_vars: true
                }
            }
        }),
        //将js自动插入到html里
        new HtmlWebpackPlugin({
            template: './views/index.html',
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin() //引入热更新插件
    ]
};
```

### 优化

优化主要是针对打包速度跟打包大小优化，主要包含以下方面

1. 对于 Webpack4，打包项目使用 production 模式，这样会自动开启代码压缩
2. 使用 ES6 模块来开启 tree shaking，这个技术可以移除没有使用的代码
3. 优化图片，对于小图可以使用 base64 的方式写入文件中
4. 按照路由拆分代码，实现按需加载
5. 给打包出来的文件名添加哈希，实现浏览器缓存文件(主要采用chunkFilename)

#### 打包速度

1. 减少文件搜索范围，比如通过另名，loader的test,include & exclude
2. resolve.module，配置webpack去哪些目录下妙手第三方模块
3. resolve.aslias配置，通过另外来将原导入路径映射成一个新的导入路径
4. Webpack4默认压缩并行
5. Happypack并发调用
   - threads:开启几个子进程去处理这一类型的文件，默认是3个，必须整数
   - verbose:是否允许happypack输出日志，默认是true
   - threadpool:代表共享进程池，即多个happypack实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多
6. Babel使用缓存编译，主要loader参数后面增加cacheDirectory，关于[babel编译原理](https://mp.weixin.qq.com/s/NRZQI-Md0dqNAGY96qsn-A)
7. 使用DllPlugin和DllReferencePlugin，这两个跟CommonsChunkPlugin（webpack3中的，webpack4中使用SplitChunksPlugin）有一些区别，主要区别如下

- CommonsChunkPlugin 插件每次打包的时候还是会去处理一些第三方依赖库，只是它能把第三方库文件和我们的代码分开掉，生成一个独立的js文件，但它不能提高打包速度。
- DLLPlugin 它能把第三方库代码分离开，并且每次文件更改的时候，它只会==打包该项目自身==的代码。所以打包速度会更快。
    
介绍DllPlugin插件跟DllReferencePlugin插件

DllPlugin插件 : 用于打包出一个个单独的动态链接库文件 。
DllReferencePlugin 插件:用于在主要的配置文件中引入 DllP!ugin 插件打包好的动态链接库文件。

具体配置如下：

webpack.dll.config.js配置

```
const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');

module.exports = {
    // 入口文件
    entry: {
        // 项目中用到该两个依赖库文件
        jquery: ['./libs/jquery'],
        // echarts: ['echarts']
    },
    // 输出文件
    output: {
        // 文件名称
        filename: '[name].dll.js',
        // 将输出的文件放到dist目录下
        path: path.resolve(__dirname, 'dill'),
        /*
         存放相关的dll文件的全局变量名称，比如对于jquery来说的话就是 _dll_jquery, 在前面加 _dll
         是为了防止全局变量冲突。
        */
        library: '_dll_[name]'
    },
    plugins:[
        // 使用插件 DllPlugin
    new DllPlugin({
        /*
         该插件的name属性值需要和 output.library保存一致，该字段值，也就是输出的 manifest.json文件中name字段的值。
         比如在jquery.manifest文件中有 name: '_dll_jquery'
        */
        name: '_dll_[name]',
  
        /* 生成manifest文件输出的位置和文件名称 */
        path: path.join(__dirname, 'dill', '[name].manifest.json')
      })
    ]
};
```

webpack.config.js配置

```
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');

{
    plugins:
    [
        // 告诉webpack使用了哪些第三方库代码
		new DllReferencePlugin({
			// jquery 映射到json文件上去
			manifest: require('./dill/jquery.manifest.json')
		})
	]
}
```

### 原理

#### 1.webpack运行流程

1.1 webpack事件流

Webpack 就像一条生产线，要经过一系列处理流程后才能将源文件转换成输出结果。 这条生产线上的每个处理流程的职责都是单一的，多个流程之间有存在依赖关系，只有完成当前处理后才能交给下一个流程去处理。 插件就像是一个插入到生产线中的一个功能，在特定的时机对生产线上的资源做处理。 Webpack 通过 [Tapable](https://juejin.im/post/5abf33f16fb9a028e46ec352) 来组织这条复杂的生产线。 Webpack 在运行过程中会广播事件，插件只需要监听它所关心的事件，就能加入到这条生产线中，去改变生产线的运作。 Webpack 的事件流机制保证了插件的有序性，使得整个系统扩展性很好。

1.2 webpack运行流程详解

Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程。

- 初始化参数：从配置文件和Shell语句中读取与合并参数，得出最终的参数。
- 开始编译：用上一步得到的参数初始化Compiler对象，加载所有配置的插件，通过执行对象的run方法开始执行编译。
- 确定入口：根据配置中的entry找出所有入口文件。
- 编译模块：从入口文件出发，调用所有配置的loader对模块进行翻译，再找出该模块依赖的模块，再递归本步骤走到所有入口依赖的文件都经过了本步骤的处理。
- 完成模块编译：在经过第4步使用loader翻译完所有模块后，得到了每个模块被翻译后的最终内容及它们之间的依赖关系。
- 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的Chunk，再将每个Chunk转换成一个单独的文件加入输出列表中，这是可以修改输出内容的最后机会。
- 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，将文件的内容写入文件系统中。

流程图：

![01](https://user-images.githubusercontent.com/6395813/49738951-a31dcd00-fccb-11e8-8e30-277217990d2a.jpg)


2.3 抽象语法树（AST）

> 在计算机科学中，抽象语法树（Abstract Syntax Tree，AST），或简称语法树（Syntax tree），是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。之所以说语法是“抽象”的，是因为这里的语法并不会表示出真实语法中出现的每个细节。比如，嵌套括号被隐含在树的结构中，并没有以节点的形式呈现；而类似于 if-condition-then 这样的条件跳转语句，可以使用带有两个分支的节点来表示。

实际上一段代码经过编译器的词分析、语法分析等阶段之后，会生成一个树状结构的“抽象语法树（AST）”，该语法树的每一个节点都对应着代码当中不同含义片段。

解释器是将AST翻译成目标语言并运行的工具。

### 手写webpack插件

- 调用插件apply函数传入compiler对象
- 通过compiler对象监听

插件代码

```
//@file: plugins/myplugin.js
class myPlugin {
    constructor(options){
        //用户自定义配置
        this.options = options
        console.log(this.options)
    }
    apply(compiler) {
        console.log("This is my first plugin.")
    }
}

module.exports = myPlugin
```

webpack代码

```
const MyPlugin = require('./plugins/myplugin-4.js')

module.exports = {
    ......,
    plugins: [
        new MyPlugin("Plugin is instancing.")
    ]
}
```

具体参数可以参考《深入浅出webpack》

### 手写loader

1. 获得loader的options，是通过`require (’ loader-utils ’);`
1. 返回其他结果，是调用`callback`
1. 缓存加速，调用this.cacheable(false);

具体参数可以参考《深入浅出webpack》

#### loader文件

```
const loaderUtils = require('loader-utils');

module.exports = function (content) {
    // 获取用户配置的options 同步
    const options=loaderUtils.getOptions(this);
    console.log('***options***',options);
    this.callback(null,'{}'+content);
    return '{};'+content;
}
```

#### webpack配置文件

```
{
    test: /\.js$/,
    exclude: /node_modules/,
       use: {
           //这里是我的自定义loader的存放路径
           loader: path.resolve('./loaders/index.js'),
           options: {
              test: 1
           }
       }
}
```

### 总结

webpack打包配置相对比较复杂，目前介绍应该可以满常规需求。

### 参考资料

- 《深入浅出webpack》
- [Webpack运行机制](https://github.com/jerryOnlyZRJ/webpack-loader/blob/master/docs/webpack-principle.md)
- [编写自定义webpack plugin](https://github.com/jerryOnlyZRJ/webpack-loader/blob/master/docs/webpack-plugin.md)
- [编写自定义webpack loader](https://github.com/jerryOnlyZRJ/webpack-loader/blob/master/docs/webpack-loader.md)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>