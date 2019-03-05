# 面试必备！webpack 中那些最易混淆的 5 个知识点

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- `module`，`chunk`和`bundle`的区别是什么？
- `filename`和`chunkFilename`的区别
- `webpackPrefetch`、`webpackPreload` 和 `webpackChunkName` 到底是干什么的？
- `hash`、`chunkhash`、`contenthash`有什么不同？
- `sourse-map` 中 `eval`、`cheap`、`inline` 和 `module` 各是什么意思？

### 一、`module`，`chunk`和`bundle`的区别是什么？

#### 一句话总结

`module`，`chunk` 和 `bundle` 其实就是同一份逻辑代码在不同转换场景下的取了三个名字：我们直接写出来的是 module，webpack 处理时是 chunk，最后生成浏览器可以直接运行的 bundle。

### 二、`filename`和`chunkFilename`的区别

### 三、`webpackPrefetch`、`webpackPreload` 和 `webpackChunkName` 到底是干什么的？

### 四、`hash`、`chunkhash`、`contenthash`有什么不同？

#### 4.4 总结

- `hash`计算与整个项目的构建相关；
- `chunkhash`计算与同一`chunk`内容相关；
- `contenthash`计算与文件内容本身相关。

### 五、`sourse-map` 中 `eval`、`cheap`、`inline` 和 `module` 各是什么意思？

`sourse-map`，里面都有个`map`了，肯定是映射的意思。`sourse-map`就是一份**源码和转换后代码的映射文件**。具体的原理内容较多，感兴趣的同学可以自行搜索，我这里就不多言了。

![images](webpack03.png)

如果再仔细看一下，就发现这 13 种大部分都是`eval`、`cheap`、`inline` 和 `module`这4个词排列组合的，我做了个简单的表格，比官网上直白多了：

| 参数   | 参数解释                                                            |
| ------ | ------------------------------------------------------------------- |
| eval   | 打包后的模块都使用`eval()`执行，行映射可能不准；不产生独立的map文件 |
| cheap  | map映射只显示行不显示列，忽略源自loader的source map                 |
| inline | 映射文件以base64格式编码，加在bundle文件最后，不产生独立的map文件   |
| module | 增加对 loader source map 和第三方模块的映射                         |


### 参考资料

- [面试必备！webpack 中那些最易混淆的 5 个知识点](https://juejin.im/post/5cede821f265da1bbd4b5630)
- [【webpack 进阶】你真的掌握了 loader 么？- loader 十问](https://github.com/alienzhou/blog/issues/21)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>