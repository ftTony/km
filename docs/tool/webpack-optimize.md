# webpack 打包优化

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 优化打包大小
- 优化打包速度

### 一、优化打包大小

- 对于 Webpack4，打包项目使用 production 模式，这样会自动开启代码压缩
- 使用 ES6 模块来开启 tree shaking，这个技术可以移除没有使用的代码
- 优化图片，对于小图可以使用 base64 的方式写入文件中
- 按照路由拆分代码，实现按需加载
- 给打包出来的文件名添加哈希，实现浏览器缓存文件(主要采用 chunkFilename)

### 二、优化打包速度

#### 2.1 减少文件搜索范围

#### 2.2 `resolve.module`

示例代码：

```

```

#### 2.3 `resolve.aslias`

示例代码：

```

```

#### 2.4 `happypack`并发

示例代码：

```

```

#### 2.5 `babel`使用缓存

#### 2.6 使用 `DllPlugin` 和 `DllReferencePlugin`

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
