# Vue.netTick 理解与分析

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 什么是 Vue.nextTick()？
- Vue.nextTick 的调用方式
- `vm.$nextTick` 与 `setTimeout` 的区别是什么？
- 理解 MutationObserver
- nextTick 源码分析

### 一、什么是 Vue.nextTick()？

> 官方解释：在下次 DOM 更新循环结束之后执行的延迟回调。在修改数据之后立即使用该方法，获取更新后的 DOM。

简单理解为：当页面中的数据发生改变了，就会把该任务放到一个异步队列中，只有在当前任务空闲时才会进行 DOM 渲染，当 DOM 渲染完成以后，该函数就会自动执行。

### 二、Vue.nextTick 的调用方式

调用方式主要有以下两种：Vue.nextTick([callback,context])和 `vm.$nextTick([callback])`;

1. Vue.nextTick([callback,context]);该方法是全局方法，该方法可能接收 2 个参数，分别为回调函数和执行回调函数的上下文环境。
2. vm.\$nextTick([callback]): 该方法是实列方法，执行时自动绑定 this 到当前的实列上。

### 三、`vm.$nextTick` 与 `setTimeout` 的区别是什么？

### 四、理解 MutationObserver

### 五、nextTick 源码分析

### 参考资料

- [Vue 系列---理解 Vue.nextTick 使用及源码分析(五)](https://www.cnblogs.com/tugenhua0707/p/11756584.html)
- [你真的理解\$nextTick 么](https://juejin.im/post/5cd9854b5188252035420a13)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
