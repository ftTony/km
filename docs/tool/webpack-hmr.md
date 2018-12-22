# Webpack HMR 原理解析（转载）

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

Hot Module Replacement（以下简称 HMR）是 webpack 发展至今引入的最令人兴奋的特性之一 ，当你对代码进行修改并保存后，webpack 将对代码重新打包，并将新的模块发送到浏览器端，浏览器通过新的模块替换老的模块，这样在不刷新浏览器的前提下就能够对应用进行更新。例如，在开发 Web 页面过程中，当你点击按钮，出现一个弹窗的时候，发现弹窗标题没有对齐，这时候你修改 CSS 样式，然后保存，在浏览器没有刷新的前提下，标题样式发生了改变。感觉就像在 Chrome 的开发者工具中直接修改元素样式一样。

本篇文章不是告诉你怎么使用 HMR，如果你对 HMR 依然感觉到陌生，建议先阅读[官网 HMR 指南](https://doc.webpack-china.org/guides/hot-module-replacement/#-hmr)，上面有 HMR 最简单的用例，我会等着你回来的。

### 为什么需要HMR

### HMR 的工作原理图解

初识HMR的时候觉得其很神奇，一直有一些疑问萦绕在脑海。

1. webpack可以将不同的模块打包成`bundle`文件或者几个`chunk`文件，但是当我通过`webpack HMR`进行开发的过程中，我并没有在我的dist目录中找到webpack打包好的文件，它们去哪呢？
2. 通过查看[webpack-dev-server](https://link.zhihu.com/?target=https%3A//github.com/webpack/webpack-dev-server)的package.json文件，我们知道其依赖于[webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)库，那webpack-dev-middleware在HMR过程中扮演什么角色？
3. 使用HMR的过程中，通过Chrome开发者工具我知道浏览器是通过`websocket`和`webpack-dev-server`进行通信的，但是`websocket`的`message`中并没有发现新模块代码。打包后的新模块又是通过什么方式发送到浏览器端的呢？为什么新的模块不

### 运用 HMR 的简单例子

### 参考资料

- [Webpack HMR 原理解析](https://zhuanlan.zhihu.com/p/30669007)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>