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
3. 使用HMR的过程中，通过Chrome开发者工具我知道浏览器是通过`websocket`和`webpack-dev-server`进行通信的，但是`websocket`的`message`中并没有发现新模块代码。打包后的新模块又是通过什么方式发送到浏览器端的呢？为什么新的模块不通过websocket随消息一起发送到浏览器端呢？为什么新的模块不通过websocket随消息一起发送到浏览器端呢？
4. 浏览器拿到最新的模块代码，HMR又是怎么将老的模块替换成新的模块，在替换的过程中怎样处理模块之间的依赖关系？
5. 当模块的热替换过程中，如果替换模块失败，有什么回退机制吗？

带着上面的问题，于是决定深入到 webpack 源码，寻找 HMR 底层的奥秘。

![images](webpack19.jpg)

图一：HMR工作流程图解

上图是webpack配合`webpack-dev-server`进行应用开发的模块热更新流程图。

- 上图底部红色框内是服务端，而上面的橙色框是浏览器端。
- 绿色的方框是webpack代码控制的区域。蓝色方框是`webpack-dev-server`代码控制的区域，洋红色的方框是文件系统，文件修改后的变化就发生在这，而青色的方框是应用本身。

上图显示了我们修改代码到模块热更新完成的一个周期，通过深绿色的阿拉伯数字符号已经将HMR的整个过程标识了出来。

1. 第一步，在webpack的watch模式下，文件系统中某一个文件发生修改，webpack监听到文件变化，根据配置文件对模块重新编译打包，并将打包后的代码通过简单的JavaScript对象保存在内存中。
2. 第二步是webpack-dev-server和webpack之间的接口交互，而在这一步，主要是dev-server的中间件webpack-dev-middleware和webpack之间的交互，webpack-dev-middleware调用webpack暴露的API对代码变化进行监控，并且告诉webpack，将代码打包到内存中。
3. 第三步是

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