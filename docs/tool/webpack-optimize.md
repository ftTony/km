# webpack 打包优化

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [优化打包大小](l#一、优化打包大小)
- [优化打包速度](#二、优化打包速度)

### 一、优化打包大小

- 开启`production`模式
- 开启`tree shaking`模式
- 开启`production`模式

- 对于 Webpack4，打包项目使用 production 模式，这样会自动开启代码压缩
- 使用 ES6 模块来开启 tree shaking，这个技术可以移除没有使用的代码
- 优化图片，对于小图可以使用 base64 的方式写入文件中
- 按照路由拆分代码，实现按需加载
- 给打包出来的文件名添加哈希，实现浏览器缓存文件(主要采用 chunkFilename)

### 二、优化打包速度

- 优化`Loader`配置
- 优化`resolve.module`配置
- 优化`resolve.aslias`配置
- 优化`resolve.mainFields`配置
- 优化`resolve.extensions`配置
- 优化`module.noParse`配置
- 优化文件监听的性能

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

- 一套是采用`CommonJS`规范的模块化代码，这些文件都放在`lib`目录下，

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

示例代码：

```

```

#### 2.5 优化`resolve.extensions`配置

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

示例代码：

```

```

#### 2.5 `babel`使用缓存

示例代码：

```

```

#### 2.6 使用 `DllPlugin` 和 `DllReferencePlugin`

#### 2.7 使用`ParallelUglifyPlugin`

`webpack`默认提供了`UglifyJS`插件来压缩 JS 代码，但是它使用的是单纯种压缩代码，也就是说多个`js`文件需要被压缩，它需要一个个文件进行压缩。所以说在正式环境打包压缩代码速度非常慢（）。

#### 2.7 使用`CommonsChunkPlugin`和`SplitChunksPlugin`

- 减少文件搜索范围，比如通过另名，loader 的 test,include & exclude
- resolve.module，配置 webpack 去哪些目录下妙手第三方模块
- resolve.aslias 配置，通过另外来将原导入路径映射成一个新的导入路径
- Webpack4 默认压缩并行
- Happypack 并发调用
  - threads:开启几个子进程去处理这一类型的文件，默认是 3 个，必须整数
  - verbose:是否允许 happypack 输出日志，默认是 true
  - threadpool:代表共享进程池，即多个 happypack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多
- Babel 使用缓存编译，主要 loader 参数后面增加 cacheDirectory，关于[babel 编译原理](https://mp.weixin.qq.com/s/NRZQI-Md0dqNAGY96qsn-A)
- 使用 DllPlugin 和 DllReferencePlugin，这两个跟 CommonsChunkPlugin（webpack3 中的，webpack4 中使用 SplitChunksPlugin）有一些区别，主要区别如下
  - CommonsChunkPlugin 插件每次打包的时候还是会去处理一些第三方依赖库，只是它能把第三方库文件和我们的代码分开掉，生成一个独立的 js 文件，但它不能提高打包速度。
  - DLLPlugin 它能把第三方库代码分离开，并且每次文件更改的时候，它只会打包该项目自身的代码。所以打包速度会更快。

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
