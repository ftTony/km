# vue 源码分析

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [源码目录设计](#一、源码目录设计)
- [变化侦测篇](#二、变化侦测篇)
- [虚拟 DOM 篇](#三、虚拟-dom-篇)
- [模板编译篇](#四、模板编译篇)
- [生命周期篇](#五、生命周期篇)
- [实例方法](#六、实例方法)
- [全局 API 篇](#七、全局-api-篇)
- [过滤器篇](#八、过滤器篇)
- [指令篇](#九、指令篇)

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

- Object 的变化侦测
- Array 的变化侦测
- 变化侦测的 API 实现

#### 2.1 Object 的变化侦测

#### 2.2 Array 的变化侦测

#### 2.3 变化侦测的 API 实现

### 三、虚拟 DOM 篇

- Vue 中的虚拟 DOM
- Vue 中的 DOM-Diff
- 更新子节点
- 优化更新子节点

#### 3.1 Vue 中的虚拟 DOM

参考[Vue 虚拟 DOM](https://km.xiaowuzi.info/js/vue-dom.html)

#### 3.2 Vue 中的 DOM-Diff

参考[diff 算法](https://km.xiaowuzi.info/js/vue-diff.html)

#### 3.3 更新子节点

#### 3.4 优化更新子节点

### 四、模板编译篇

- 整体运行流程
- HTML 解析器
- 文本解析器
- 优化阶段
- 代码生成阶段

我们知道，在日常开发中，我们把写在`<template></template>`标签中的类似于原生`HTML`的内容称之为模板。这时你可能会问了，为什么说是“类似于原生`HTML`的内容”而不是“就是`HTML`的内容”？因为我们在开发中，在`<template></template>`标签中除了写一些原生`HTML`的标签，我们还会写一些亦是插值，如或者写一些`Vue`指令，如`v-on`、`v-if`等。而这些东西都是在原生`HTML`语法中不存在的，不被接受的。但事实上我们确实这么写了，也被正确识别了，页面也正常显示了，这又是为什么呢？

这就归功于`Vue`的模板编译了，`Vue`会把用户在`<template></template>`标签中写的类似于原生`HTML`的内容进行编译，把原生`HTML`的内容找出来，再把非原生`HTML`找出来，经过一系列的逻辑处理生成渲染函数，也就是`render`函数，而`redner`函数会将模板内容生成对应的`VNode`，而`VNode`再经过`patch`过程从而得到将要渲染的视图中的`VNode`，最后根据`VNode`创建真实的`DOM`节点并插入到视图中，最终完成视图的渲染更新。

而把用户在`<template></template>`标签中写的类似于原生`HTML`的内容进行编译，把原生`HTML`的内容找出来，再把非原生`HTML`找出来，经过一系列的逻辑处理成渲染函数，也就是`render`函数的这一段过程称之为模板编译过程。

#### 4.1 整体渲染流程

所谓渲染流程，就是把用户写的类似原生`HTML`的模板经过一系列处理最终反应到视图中称之为整个渲染流程。这个流程在上文中其实已经说到了，下面我们以流程图的形式宏观的了解一下，流程图如下：

![images](vue-code01.png)

从图中我们也可以看到，模板编译过程就是把用户写的模板经过一系列处理最终生成`render`函数的过程。

#### 4.1 整体运行流程

在模板解析阶段主要做的工作是把用户在`<template></template>`标签内写的模板使用正则等方式解析成抽象语法树（`AST`）。而这一阶段在源码中对应解析器（`parser`）模块。

解析器，顾名思义，就是把用户所写的模板根据一定的解析规则解析出有效的信息，最后用这些信息形成`AST`。我们知道在`<template></template>`模板内，除了有常规的`HTML`标签外，

#### 4.2 HTML 解析器

#### 4.3 文本解析器

#### 4.5 优化阶段

#### 4.5 代码生成阶段

### 五、生命周期篇

- 初始化阶段
- 模板编译阶段
- 挂载阶段
- 销毁阶段

#### 5.1 初始化阶段

- `new Vue`
- `initLifecycle`
- `initEvents`
- `initInjections`
- `initState`

#### 5.2 模板编译阶段

#### 5.3 挂载阶段

#### 5.4 销毁阶段

### 六、实例方法

- 数据相关的方法
- 事件相关的方法
- 生命周期相关的方法

#### 6.1 数据相关的方法

- `vm.$watch`
- `vm.$set`
- `vm.$delete`

#### 6.2 事件相关的方法

- `vm.$on`
- `vm.$emit`
- `vm.$off`
- `vm.$once`

#### 6.3 生命周期相关的方法

- `vm.$mount`
- `vm.$forceUpdate`
- `vm.$nextTick`
- `vm.$destory`

### 七、全局 API 篇

### 八、过滤器篇

### 九、指令篇

### 参考资料

- [vue 源码分析](https://github.com/muwoo/blogs)
- [Vue 技术内幕](http://hcysun.me/vue-design/art/)
- [Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)
- [Vue.js 源码解析](https://github.com/answershuto/learnVue)
- [你想要的 vue 源码分析](https://github.com/dirkhe1051931999/hjBlog/tree/master/blog-vue-sourcecode-study)
- [学习 Vue 源码的必要知识储备](https://juejin.im/post/5ce5565d6fb9a07ed2244513)
- [逐行剖析 Vue.js 源码](https://nlrx-wjc.github.io/Learn-Vue-Source-Code/start/)
- [渲染器](http://hcysun.me/vue-design/zh/)
- [深入 Vue 技术栈及源码系列](https://www.cnblogs.com/tugenhua0707/category/1577630.html)
- 《深入清出 Vue.js》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
