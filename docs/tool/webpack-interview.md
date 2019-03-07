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