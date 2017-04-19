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
- `dispatch`：操作行为触发方法，是唯一能执行action的方法。
- `State`：页面状态管理容器对象。集中存储Vue components中data对象的零散数据，全局唯一，以进行统一的状态管理。页面显示所需的数据从该对象中进行读取，利用Vue的细粒度数据响应机制来进行高效的状态更新。
- `Getter`：state对象读取方法。图中没有单独列出该模块，应该被包含在了render中，Vue Components通过该方法读取全局state对象。
- `Mutation`：**状态改变操作方法，由actions中的commit('mutation 名称')来触发。**是Vuex修改state的唯一推荐方法。该方法只能进行同步操作，且方法名只能全局唯一。操作之中会有一些hook暴露出来，以进行state的监控等。
- `Action`：**操作行为处理模块,由组件中的`$store.dispatch('action 名称', data1)`来触发。然后由commit()来触发mutation的调用 , 间接更新 state。**负责处理Vue Components接收到的所有交互行为。包含同步/异步操作，支持多个同名方法，按照注册的顺序依次触发。向后台API请求的操作就在这个模块中进行，包括触发其他action以及提交mutation的操作。该模块提供了Promise的封装，以支持action的链式触发。

### 三、什么时候使用 Vuex

虽然 Vuex 可以帮助我们管理共享状态，但也附带了更多的概念和框架。这需要对短期和长期效益进行权衡。

如果您的应用够简单，您最好不要使用 Vuex,因为使用 Vuex 可能是繁琐冗余的。一个简单的`global event bus`就跢您所需了。但是，**如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。**

### 四、如何使用 Vuex

#### 4.1 创建一个`store.js`

```
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store
```

### 五、使用Vuex的注意点

#### 5.1 如何在Mutations里传递参数

#### 5.2 如何理解getters

#### 5.3 actions和mutations区别

actions和上面的Muations功能基本一样，不同点是，**actions是异步的改变state状态，而Mutation是同步改变状态。**

同步的意义在于这样每一个mutation执行完成后都可以对应到一个新的状态，这样devtools就可以打个snapshot存下来，然后就可以随便time-travel了。如果你开着devtool调用一个异步的action，你可以清楚地看到它所调用的mutation是何时被记录下来的，并且可以立刻查看它们对应的状态

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
