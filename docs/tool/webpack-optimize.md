# webpack 打包优化

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [优化打包大小](l#一、优化打包大小)
- [优化打包速度](#二、优化打包速度)
- 分析打包速度及包大小工具

### 一、优化打包大小

- 开启`tree shaking`模式
- 提取公共代码
- 分割代码以按需加载

#### 1.1 开启`tree shaking`模式

#### 1.2 提取公共代码

#### 1.3 分割代码以按需加载

### 二、优化打包速度

- 优化`Loader`配置
- 优化`resolve.module`配置
- 优化`resolve.aslias`配置
- 优化`resolve.mainFields`配置
- 优化`resolve.extensions`配置
- 优化`module.noParse`配置
- `happypack`并发
- 使用 `DllPlugin` 和 `DllReferencePlugin`
- 使用`ParallelUglifyPlugin`
- 合理利用缓存

#### 2.1 优化`Loader`配置

由于 Loader 对文件的转换操作很耗时，所以需要让尽可能少的文件被 Loader 处理。可以通过`test/include/exclude`三个配置项来命中 loader 要应用规则的文件。

示例代码：

```
module .exports = {
    module : {
        rules : [{
        //如果项目源码中只有 文件，就不要写成/\jsx?$/，以提升正则表达式的性能
        test: /\.js$/,
        //babel -loader 支持缓存转换出的结果，通过 cacheDirectory 选项开启
        use: ['babel-loader?cacheDirectory'] ,
        //只对项目根目录下 src 目录中的文件采用 babel-loader
        include: path.resolve(__dirname,'src'),
        }],
    }
}
```

#### 2.2 优化`resolve.module`配置

`resolve.modules`的默认值是`['node_modules']`，含义是先去当前目录的`node_modules`目录下去找我们想找的模块，如果没找到就去上一级目录`../node_modules`中找，再没有就去`../../node_modules`中找，以此类推。这和 Node.js 的模块寻找机制很相似。当安装的第三方模块都放在项目根目录的`node_modules`目录下时，就没有必要按照默认的方式去一层层地寻找，可以指明存放第三方模块的绝对路径，以减少寻找。

示例代码：

```
module.exports = {
    resolve: {
        modules: [path.resolve( __dirname,'node modules')]
    },
}
```

#### 2.3 优化`resolve.aslias`配置

`resolve.alias`配置项通过别名来将原导入路径映射成一个新的导入路径。在项目经常会依赖一些庞大的第三方模块，以`React`库为例，发布出去的`React`库中包含两套代码

- 一套是采用`CommonJS`规范的模块化代码，这些文件都放在`lib`目录下，以`package.json`中指定的入口文件`react.js`为模块的入口
- 一套是将`React`的所有相关代码打包好的完整代码放到一个单独的文件中， 这些代码没有采用模块化，可以直接执行。其中`dist/react.js`用于开发环境，里面包含检查和警告的代码。`dist/react.min.js` 用于线上环境，被最小化了。

在默认情况下，`Webpack`会从入口文件`./node_modules/react/react.js`开始递归解析和处理依赖的几十个文件，这会是一个耗时的操作通过配置`resolve.alias`，可以让`Webpack`在处理`React`库时，直接使用单独、完整的`react.min.js`文件，从而跳过耗时的递归解析操作

示例代码：

```
module.exports = {
    resolve: {
    //使用 alias 将导入 react 的语句换成直接使用单独、完整的 react.min.js 文件，
    //减少耗时的递归解析操作
        alias: {
            'react': path.resolve( __dirname ,'./node_modules/react/dist/react.min.js'),
        }
    }
}
```

#### 2.4 优化`resolve.mainFields`配置

在安装的第三方模块中都会有一个`package.json`文件，用于描述这个模块的属性，其中可以存在多个字段描述入口文件，原因是某些模块可以同时用于多个环境中，针对不同的运行环境需要使用不同的代码。

`resolve.mainFields`的默认值和当前的`target`配置有关系，对应的关系如下：

- `target web`或者`websorker`时，值是`［'browser','module','main']`。
- `target`为其他情况时，值是`［ 'module','main']`。

以 `target` 等于 `web` 为例， `Webpack` 会先采用第三方模块中的 `browser` 字段去寻找模块的入口文件，如果不存在，就采用 `module` 字段，以此类推。

为了减少搜索步骤，在明确第三方模块的入口文件描述字段时，我们可以将它设置得尽量少。由于大多数第三方模块都采用`main`字段去描述入口文件的位置，所以可以这样配置：

```
module.exports = {
    resolve: {
    //只采用 main 字段作为入口文件的描述字段，以减少搜索步骤
    mainFields: ['main']
    }
}
```

#### 2.5 优化`resolve.extensions`配置

在导入语句没带文件后缀时，Webpack 会自动带上后缀去尝试询问文件是否存在。如果这个列表越长，或者正确的后缀越往后，就会造成尝试的次数越多，所以`resolve.extensions`的配置也会影响到构建的性能在配置`resolve.extensions`时需要遵守以下几点，以做到尽可能地优化构建性能。

- 后缀尝试表要尽可能小，不要将项目中不可能存在的情况写到后缀尝试列表中。
- 频率出现最高的文件后缀要优先放在最前面，以做到尽快退出寻找过程。
- 在源码中写入语句时，要尽可能带上后缀从而可以避免寻找过程。例如在确定的情况下将 `require ( './data '）` 写成 `require （'./data.json'）`

示例配置：

```
module.exports = {
    resolve : {
        //尽可能减少后缀尝试的可能性
        extensions : ['js'],
    }
}
```

#### 2.6 优化`module.noParse`配置

`module.noParse`配置项可以让`Webpack`忽略对部分没采用模块化的文件的递归解析处理，这样做的好处是能提高构建性能。原因是一些库如 jQuery。

示例代码：

```
module.exports = {
    module: {
        noParse: /jquery/,
    }
}
```

#### 2.7 `happypack`并发

`WebPack`是单线程模型的，也就是说`WebPack`需要一个一个地处理任务，不能同时处理多个任务。`HappyPack`将任务分解给多个子进程去并发执行，子进程处理完后再将结果发送给主进程，从而发挥多核 CPU 电脑的威力。

示例代码：

```
const HappyPack = require('happypack')
const os = require('os')
const happThreadPool = HappyPack.ThreadPool({size:os.cpus().length})

{
    test:/\.js$/,
}

plugins:[
    new HappyPack({
        id:'happy-babel-js',
        loaders:['babel-loader?cacheDirectory=true],
        threadPool:happyThreadPool
    })
]
```

在整个`WebPack`构建流程中，最耗时的流程可能就是`Loader`对文件的转换操作了，因为要转换的文件数据量巨大，而且这些转换操作都只能一个一个地处理`HappyPack`的核心原理就是将这部分任务分解到多个进程中去并行处理，从而减少总的构建时间。

#### 2.8 优化文件监听的性能

在开启监听模式时，默认情况下会监听配置的`Entry`文件和所有`Entry`递归依赖的文件，在这些文件中会有很多存在于`node_modules`下，因为如今的`Web`项目会依赖大量的第三方模块，所以在大多数情况下我们都不可能去编辑`node_modules`下的文件，而是编辑自己建立的源码文件，而一个很大的优化点就是忽略`node_modules`下的文件，不监听它们。

示例代码：

```
module.export = {
    watchOptions : {
        //不监听的 node_modules 目录下的文件
        ignored : /node_modules/,
    }
}
```

采用这种方法优化后， Webpack 消耗的内存和 CPU 将会大大减少。推荐使用 `thread-loader`

#### 2.9 使用 `DllPlugin` 和 `DllReferencePlugin`

`DLLPlugin`和`DLLReferencePlugin`用某种方法实现了拆分`bundles`，同时还大大提升了构建的速度。

包含大量利用模块的动态链接库只需被编译一次，在之后的构建过程中被动态链接库包含的模块将不会重新编译，而是直接使用动态链接库中的代码，由动态链接库中大多数包含的是常用的第三方模块，例如 react、react-dom，所以只要不升级这些模块的版本，动态链接库就不用重新编译。

代码如下：

```
module.exports = {
    // mode: "development || "production",
    plugins: [
        new webpack.DllReferencePlugin({
            context: path.join(__dirname, "..", "dll"),
            manifest: require("../dll/dist/alpha-manifest.json") // eslint-disable-line
        }),
        new webpack.DllReferencePlugin({
            scope: "beta",
            manifest: require("../dll/dist/beta-manifest.json"), // eslint-disable-line
            extensions: [".js", ".jsx"]
        })
    ]
};
```

与 `splitChunks`或`CommonsChunkPlugin`的区别

- CommonsChunkPlugin 插件每次打包的时候还是会去处理一些第三方依赖库，只是它能把第三方库文件和我们的代码分开掉，生成一个独立的 js 文件，但它不能提高打包速度。
- DLLPlugin 它能把第三方库代码分离开，并且每次文件更改的时候，它只会打包该项目自身的代码。所以打包速度会更快。

#### 2.10 使用`ParallelUglifyPlugin`

`webpack`默认提供了`UglifyJS`插件来压缩 JS 代码，但是它使用的是单纯种压缩代码，也就是说多个`js`文件需要被压缩，它需要一个个文件进行压缩。所以说在正式环境打包压缩代码速度非常慢（因为压缩 JS 代码需要先把代码解析成用 Object 抽象表示的 AST 语法树，再去应用各种规则分析和处理 AST，导致这个过程耗时非常大）。

当 webpack 有多个 JS 文件需要输出和压缩时候，原来会使用 UglifyJS 去一个个压缩并且输出，但是 ParallelUglifyPlugin 插件则会开启多个子进程，把对多个文件压缩的工作分别给多个子进程并行处理多个子任务，效率会更加提高。

#### 2.11 合理利用缓存

使用 webpack 缓存的方法有几种，例如使用`cache-loader`、`HardSourceWebpackPlugin`或`babel-loader`和`cacheDirectory`标志。所有这些缓存

### 参考资料

- [Webpack 性能优化总结大全](https://mp.weixin.qq.com/s?__biz=MzI0MzIyMDM5Ng==&mid=2649825759&idx=1&sn=726279d3dfc2ea0b6ba34788517753ad&chksm=f175eb1cc602620a66821baedcb2663e393f7ae4857e8daf6d57e4c436f9a7297a555d0e4750&scene=21#wechat_redirect)
- [Webpack 优化——将你的构建效率提速翻倍](https://mp.weixin.qq.com/s/R9hyFWIvRlzHj9owa-aDjA)
- [【第 619 期】如何 10 倍提高你的 Webpack 构建效率](https://mp.weixin.qq.com/s/zy8GfmfM8tg6uiKAhItGIg)
- [【Webpack】538- 打包速度提升指南](https://mp.weixin.qq.com/s/9v5S23tzGhpHPhLFY0V-rQ)
- [浅谈 Webpack 性能优化（内附巨详细 Webpack 学习笔记）](https://juejin.im/post/5ea6ea1bf265da7bba5094e2)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
