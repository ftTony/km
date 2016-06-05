# Vue 中的 computed,watch,methods 理解与分析

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [理解 Vue 中的 computed 用法](#一、理解-vue-中的-computed-用法)
- [Vue 中的 watch 的用法](#二、vue-中的-watch-的用法)
- [computed 和 watch 的区别](#三、computed-和-watch-的区别)
- [运用的场景](#四、运用的场景)
- [computed 的基本原理及源码实现](#五、computed-的基本原理及源码实现)

### 一、理解 Vue 中的 computed 用法

computed是计算属性的；它会根据所依赖的数据动态显示新计算结果，该计算结果会被缓存起来。computed的值在getter执行后会被缓存的。如果所依赖的数据发生改变时候，就会重新调用getter来计算最新的结果。

#### 1.1 computed应用场景

- 适用于一些重复使用数据或复杂及费时的运算。我们可以把它放入compute中进行计算，然后会在computed中缓存起来，下次就可以直接获取了。
- 如果我们需要的数据依赖于其他的数据的话，我们可以把数据设计为computed中。

### 二、Vue 中的 watch 的用法

watch它是一个对data的数据监听回调，当依赖的data的数据变化时，会执行回调。在回调中会传入newVal和oldVal两个参数。

Vue实例将会在实例化时调用$watch()，他会遍历watch对象的每一个属性。

#### 2.1 watch的使用场景

当在data的某个数据发生变化时，我们需要做一些操作，或者当需要在数据变化时执行异步或开销较大的操作时，我们就可以使用watch来进行监听。

#### 2.2 handler方法及immediate属性

watch有一个特点是：第一次寝化页面的时候，是不会去执行age这个属性监听的，只有当age值发生改变的时候才会执行监听计算。因此我们上面第一次初始化页面的时候，'basicMsg'属性默认为空字符串。那么我们现在想要第一次

#### 2.3 理解deep属性

### 三、computed 和 watch 的区别

`computed`：是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值；

`watch`：更多的是「观察」的作用，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作；

### 四、运用的场景

- 当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；
- 当我们需要在数据变化时执行异步或开销圈套的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作（访问一个 API），限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算计算属性无法做到的。

### 五、computed 的基本原理及源码实现

### 参考资料

- [vue 系列---理解 Vue 中的 computed,watch,methods 的区别及源码实现(六)](https://www.cnblogs.com/tugenhua0707/p/11760466.html)
- [Vue计算属性和侦听属性](https://github.com/ljianshu/Blog/issues/68)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
