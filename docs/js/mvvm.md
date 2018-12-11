# mvvm 框架介绍

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- MVVM 是什么?
- MVVM 的优缺点?

### 一、MVVM 是什么?

MVVM 模式，顾名思义即 Model-View-ViewModel 模式。它萌芽于 2005 年微软推出的基于 Windows 的用户界面框架 WPF，前端最早的 MVVM 框架 knockout 在 2010 年发布。

Model 层：对应数据层的域模型，它主要做域模型的同步。通过 Ajax/fetch 等 API 完成客户端和服务端业务 Model 的同步。在层间关系里，它主要用于抽象出 ViewModel 中视图的 Model。

View 层：作为视图模板存在，在 MVVM 里，整个 View 是一个动态模板。除了定义结构、布局外，它展示的是 ViewModel 层的数据和状态。View 层不负责处理状态，View 层做的是数据绑定的声明、指令的声明、事件绑定的声明。

ViewModel 层：把 View 需要的层数据暴露，并对 View 层的数据绑定绑定

### 二、MVVM 的优缺点?

**优点：**

1. 分享视图(View)和模型(Model，降低代码耦合，提高视图或者逻辑的重用性：比如视图(View)
2. 提高可测试性：ViewModel 的存在可以帮助开发者更好地编写测试代码
3. 自动更新 dom：利用双向绑定，数据更新后视图自动更新，让开发者从繁琐的手动 dom 中解放

**缺点：**

1. Bug 很

### 参考资料

- [你对 MVVM 的理解?](https://www.cxymsg.com/guide/vue.html#%E4%BD%A0%E5%AF%B9mvvm%E7%9A%84%E7%90%86%E8%A7%A3)
- [看完这篇关于 MVVM 的文章，面试通过率提升了 80%](https://juejin.im/post/5af8eb55f265da0b814ba766)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
