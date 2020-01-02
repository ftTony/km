# vuex 学习及原理

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [Vuex 介绍](#一、vuex-介绍)
- [Vuex 的原理是什么](#二、vuex-的原理是什么)
- [什么时候使用 Vuex](#三、什么时候使用-vuex)
- [如何使用 Vuex](#四、如何使用-vuex)

### 一、Vuex 介绍

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

### 二、Vuex 的原理是什么

![images](vuex.png)

Vuex 实现了一个单向数据流，在全局拥有一个 State 存放数据，当组件要更改 State 中的数据时，必须通过 Mutation 进行，Mutation 同时提供了订阅者模式供外部插件调用获取 State 数据的更新。而当所有异步操作(常见调用后端接口异步获取更新数据)或批量的同步操作需要走 Action，但 Action 也是无法直接修改 State 的，还是需要通过 Mutation 来修改 State 的数据。最后，根据 State 的变化，渲染到视图上。

vuex 主要包括以下几个模块：

- `Vue Components`：Vue 组件。HTML 页面上，负责接收用户操作等交互行为，执行 dispatch 方法触发对应 action 进行回应。
- `State`：定义了应用状态的数据结构，可以在这里设置默认的初始状态。
- `Getter`：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。
- `Mutation`：是唯一更改 store 中状态的方法，且必须是同步函数。
- `Action`：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。
- `Module`：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。

### 三、什么时候使用 Vuex

虽然 Vuex 可以帮助我们管理共享状态，但也附带了更多的概念和框架。这需要对短期和长期效益进行权衡。

如果您的应用够简单，您最好不要使用 Vuex,因为使用 Vuex 可能是繁琐冗余的。一个简单的`global event bus`就跢您所需了。但是，**如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。**

### 四、如何使用 Vuex

### 参考资料

- [从头开始学习 Vuex](https://github.com/ljianshu/Blog/issues/36)
- [学习 vuex 源码整体架构，打造属于自己的状态管理库](https://mp.weixin.qq.com/s/qQxUCbPBYSq9vU7dvDOCzg)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
