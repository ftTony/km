# vuex 学习及原理

## 前言

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。

## 内容

- Vuex 介绍
- 几大模块作用及使用方式

### 一、Vuex 介绍

### 二、几大模块作用及使用方式

主要包括以下几个模块：

- `State`：定义了应用状态的数据结构，可以在这里设置默认的初始状态。
- `Getter`：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。
- `Mutation`：是唯一更改 store 中状态的方法，且必须是同步函数。
- `Action`：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。
- `Module`：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。

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
