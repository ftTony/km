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

computed 是计算属性的；它会根据所依赖的数据动态显示新计算结果，该计算结果会被缓存起来。computed 的值在 getter 执行后会被缓存的。如果所依赖的数据发生改变时候，就会重新调用 getter 来计算最新的结果。

#### 1.1 computed 应用场景

- 适用于一些重复使用数据或复杂及费时的运算。我们可以把它放入 compute 中进行计算，然后会在 computed 中缓存起来，下次就可以直接获取了。
- 如果我们需要的数据依赖于其他的数据的话，我们可以把数据设计为 computed 中。

### 二、computed 和 methods 的区别

1. computed 是基于响应性依赖来进行缓存的。只有在响应式依赖发生改变时它们才会重新求值，也就是说，当 msg 属性值没有发生改变时，多次访问 reversedMsg 计算属性会立即返回之前缓存的计算结果，而不会再次执行 computed 中的函数。但是 methods 方法中是每次调用，都会执行函数的，methods 它不是响应式的。
2. computed 中的成员可以只定义一个函数作为只读属性，也可以定义成 get/set 变成可以读写属性，但是 methods 中的成员没有这样的。

示例如下：

```

```

执行后的结果如下所示：

如上代码我们可以看到，在 computed 中有属性 reversedMsg，然后在该方法中会打印 111；信息出来，在 methods 中的方法 reversedMsg1 也会打印 2222 信息出来，

### 二、Vue 中的 watch 的用法

watch 它是一个对 data 的数据监听回调，当依赖的 data 的数据变化时，会执行回调。在回调中会传入 newVal 和 oldVal 两个参数。

Vue 实例将会在实例化时调用\$watch()，他会遍历 watch 对象的每一个属性。

#### 2.1 watch 的使用场景

当在 data 的某个数据发生变化时，我们需要做一些操作，或者当需要在数据变化时执行异步或开销较大的操作时，我们就可以使用 watch 来进行监听。

#### 2.2 handler 方法及 immediate 属性

watch 有一个特点是：第一次寝化页面的时候，是不会去执行 age 这个属性监听的，只有当 age 值发生改变的时候才会执行监听计算。因此我们上面第一次初始化页面的时候，'basicMsg'属性默认为空字符串。那么我们现在想要第一次初始化页面的时候也希望它能够执行'age'进行监听，最后能把结果返回给

#### 2.3 理解 deep 属性

### 三、computed 和 watch 的区别

`computed`：是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值；

`watch`：更多的是「观察」的作用，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作；

### 四、运用的场景

- 当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；
- 当我们需要在数据变化时执行异步或开销圈套的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作（访问一个 API），限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算计算属性无法做到的。

### 五、computed 的基本原理及源码实现

### 参考资料

- [vue 系列---理解 Vue 中的 computed,watch,methods 的区别及源码实现(六)](https://www.cnblogs.com/tugenhua0707/p/11760466.html)
- [Vue 计算属性和侦听属性](https://github.com/ljianshu/Blog/issues/68)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
