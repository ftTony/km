# react 学习

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- jsx语法
- 组件的生命周期
- hook

### 一、jsx语法

### 二、组件的生命周期

组件的生命周期分成三个状态：

- Mounting：已插入真实DOM
- Updating：正在被重新渲染
- Unmounting：已移出真实DOM

React为每个状态都提供了两种处理函数，`will`函数在进入状态之前调用，`did`函数在进入状态之后调用，三状态共计五种函数

- componentWillMount()
- componentDidMount()
- componentWillUpdate(object nextProps, object nextState)
- componentDidUpdate(object prevProps, object prevState)
- componentWillUnmount()

React还提供两种特殊状态的处理函数

- componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
- shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用

### 三、hook

### 参考资料

- [详解 React 16 的 Diff 策略](https://mp.weixin.qq.com/s/_jAW4Z3VR-uW0AEnjHgAEw)
- [Deep In React 之浅谈 React Fiber 架构(一)](https://mp.weixin.qq.com/s/dONYc-Y96baiXBXpwh1w3A)
- [React 函数式组件性能优化指南](https://mp.weixin.qq.com/s/mpL1MxLjBqSO49TRijeyeg)
- [时间切片的实现和调度（原创 2.6 万字）](https://juejin.im/post/5ecdd66ff265da76d53c094a)
- [mobx教程](https://cn.mobx.js.org/intro/overview.html)
- [十分钟快速上手Recoil](https://juejin.cn/post/6898592963401056264)
- [Redux 中文网](https://www.reduxjs.cn/introduction/getting-started/)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
