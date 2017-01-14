# vue 源码分析

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 源码目录设计
- 变化侦测篇
- 虚拟 DOM 篇
- 模板编译篇
- 生命周期篇
- 全局 API 篇
- 过滤器篇
- 指令篇

### 一、源码目录设计

Vue.js 的源码都在 src 目录下，其目录结构如下。

```
├─dist                   # 项目构建后的文件
├─scripts                # 与项目构建相关的脚本和配置文件
├─flow                   # flow的类型声明文件
├─src                    # 项目源代码
│    ├─complier          # 与模板编译相关的代码
│    ├─core              # 通用的、与运行平台无关的运行时代码
│    │  ├─observe        # 实现变化侦测的代码
│    │  ├─vdom           # 实现virtual dom的代码
│    │  ├─instance       # Vue.js实例的构造函数和原型方法
│    │  ├─global-api     # 全局api的代码
│    │  └─components     # 内置组件的代码
│    ├─server            # 与服务端渲染相关的代码
│    ├─platforms         # 特定运行平台的代码，如weex
│    ├─sfc               # 单文件组件的解析代码
│    └─shared            # 项目公用的工具代码
└─test                   # 项目测试代码
```

- compiler
- core
- platform
- server
- sfc
- shared

#### 1.1 compiler

`compiler`目录包含`Vue.js`所有编译相关的代码。它包括把模板解析成 ast 语法树、ast 语法树优化，代码生成等功能。

编译的工作可以在构建时做（借助`webpack`、`vue-loader`等辅助插件）；也可以在运行时做，使用包含构建功能的`vue.js`。显然，编译是一项耗性能的工作，所以更推荐前者——离线编译。

#### 1.2 core

`core`目录包含了`Vue.js`的核心代码，包括内置组件、全局 API 封装，Vue 实例化、观察者、虚拟 DOM、工具函数等等。

这里的代码可谓是 Vue.js 的灵魂，也是我们之后需要重点分析的地方

#### 1.3 platform

`Vue.js`是一个跨平台的`MVVM`框架，它可以跑在`web`上，也可以配合`weex`跑在`native`客户端上。`platform`是 `Vue.js`的入口，2 个目录代表 2 个主要入口，分别打包成运行在`web`上和`weex`上的`Vue.js`。

我们会重点分析`web`入口打包后的`Vue.js`，对于`weex`入口打包的`Vue.js`，感兴趣的同学可以自行研究。

#### 1.4 server

`Vue.js 2.0`支持了服务端渲染，所有服务端渲染相关的逻辑都在这个目录下。注意：这部分代码是跑在服务端的`Node.js`，不要和跑在浏览器端的`Vue.js`混为一谈。

服务端渲染主要的工作是把组件渲染为服务器端的`HTML`字符串，将它们直接发送到浏览器，最后将静态标记"混合"为客户端上完全交互的应用程序。

#### 1.5 sfc

通常我们开发`Vue.js`都会借助`webpack`构建， 然后通过`.vue`单文件来编写组件。

这个目录下的代码逻辑会把`.vue`文件内容解析成一个`JavaScript`的对象。

#### 1.6 shared

`Vue.js`会定义一些工具方法，这里定义的工具方法都是会被浏览器端的`Vue.js`和服务端的`Vue.js`所共享的。

### 二、变化侦测篇

### 三、虚拟 DOM 篇

### 四、模板编译篇

### 五、生命周期篇

### 六、全局 API 篇

### 七、过滤器篇

### 八、指令篇

### 参考资料

- [vue 源码分析](https://github.com/muwoo/blogs)
- [Vue 技术内幕](http://hcysun.me/vue-design/art/)
- [Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)
- [Vue.js 源码解析](https://github.com/answershuto/learnVue)
- [你想要的 vue 源码分析](https://github.com/dirkhe1051931999/hjBlog/tree/master/blog-vue-sourcecode-study)
- [学习 Vue 源码的必要知识储备](https://juejin.im/post/5ce5565d6fb9a07ed2244513)
- [逐行剖析 Vue.js 源码](https://nlrx-wjc.github.io/Learn-Vue-Source-Code/start/)
- [渲染器](http://hcysun.me/vue-design/zh/)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
