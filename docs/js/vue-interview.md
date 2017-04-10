# vue 相关面试题

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- v-show 与 v-if 有什么区别？
- Class 与 Style 如何动态绑定？
- 直接给一个数组项赋值，Vue 能检测到变化吗？
- 组件通讯
- 谈谈你对 Vue 生命周期的理解？
- 在什么阶段才能访问操作 DOM？
- v-model 的原理？
- 使用过 Vue SSR 吗？说说 SSR？

### 1. v-show 与 v-if 有什么区别？

- `v-if`：是**真正的条件渲染**，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是**惰性的**；如果在寝沉浸时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
- `v-show`：就简单得多——不管寝条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的"display"属性进行切换。

所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。

### 2. Class 与 Style 如何动态绑定？

### 3. 直接给一个数组项赋值，Vue 能检测到变化吗？

由于 JavaScript 的限制，Vue 不能检测到以下数组的变动：

- 当你利用索引直接设置一个数组项时，例如：`vm.items[indexOfItem]=newValue`
- 当你修改数组的长度时，例如：`vm.items.length=newLength`

为了解决第一个问题，Vue 提供了以下操作方法：

```
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
// vm.$set，Vue.set的一个别名
vm.$set(vm.items, indexOfItem, newValue)
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)

```

为了解决第二个问题，Vue 提供了以下操作方法：

```
// Array.prototype.splice
vm.items.splice(newLength)
```

### 4. 组件通讯

参考[vue 组件通信](https://km.xiaowuzi.info/js/vue-communication.html)

### 5. 谈谈你对 Vue 生命周期的理解？

参考[Vue 生命周期](https://km.xiaowuzi.info/js/vue-lifecycle.html)

### 6. 在什么阶段才能访问操作 DOM？

在钩子函数 mounted 被调用前，Vue 已经将编译好的模板挂载到页面上，所以在 mounted 中可以访问操作 DOM。

### 7. v-model 的原理？

指令`v-model`指令在表单 input、textarea、select 等元素上创建双向数据绑定，我们知道 v-model 本质上不过是语法糖，v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：

- text 和 textarea 元素使用 value 属性和 input 事件；
- checkbox 和 radio 使用 checked 属性和 change 事件；
- select 字段将 value 作为 prop 并将 change 作为事件；

以 input 表单元素为例：

```
<input v-model='something'>

相当于

<input v-bind:value="something" v-on:input="something = $event.target.value">
```

如果在自定义组件中，v-model 默认会利用名为 value 的 prop 和名为 input 的事件，如下所示：

```
父组件：
<ModelChild v-model="message"></ModelChild>

子组件：
<div>{{value}}</div>

props:{
    value: String
},
methods: {
  test1(){
     this.$emit('input', '小红')
  },
},
```

### 8. 使用过 Vue SSR 吗？说说 SSR？

参考[Vue 服务端渲染（SSR）](https://km.xiaowuzi.info/project/ssr.html)

### 9. 能说下 vue-router 中常用的 hash 和 history 路由模式实现原理吗？

参考[vue-router 学习及原理](https://km.xiaowuzi.info/js/vue-router.html)

### 10. Proxy 与 Object.defineProperty 优劣对比

**Proxy 的优势如下：**

- Proxy 可以直接监听对象而非属性；
- Proxy 可以直接监听数组的变化；
- Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；
- Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；
- Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；

**Object.defineProperty 的优势如下:**

- 兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题，而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本(c.0)才能用 Proxy 重写。

### 11. 虚拟 DOM 的实现原理及优缺点？

参考[Vue 虚拟 DOM](https://km.xiaowuzi.info/js/vue-dom.html)

### 12. 组件中 data 为什么是一个函数？

因为组件是用来复用的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一个被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；而`new Vue`的实例，是不会被利用的，因此不存在引用对象的问题。

### 13. computed 和 watch 的区别和运用的场景？

参考[Vue 中的 computed,watch,methods 理解与分析](https://km.xiaowuzi.info/js/vue-watch.html)

### 14. 谈谈你对 keep-alive 的了解？

`keep-alive`是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染，其有以下特性：

- 一般结合路由和动态组件一起使用，用于缓存组件；
- 提供 include 和 exclude 属性，
- 对应两个钩子函数`activated`和`deactivated`，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子 `deactivated`。

**原理**

1. 获取 keep-alive 包裹着的第一个子组件对象及其组件名
2. 根据设定的`include/exclude`（如果有）进行条件匹配决定是否缓存。不匹配，直接返回组件实例
3. 根据组件 `ID` 和 `tag` 生成缓存 `Key`，并在缓存对象中查找是否已缓存过该组件实例。如果存在，直接取出缓存值并更新该 key 在 this.keys 中的位置（**更新 key 的位置是实现 LRU 置换策略的关键**）
4. 在 this.cache 对象中存储该组件实例并保存 key 值，之后检查缓存的实例数量是否超过 max 的设置值，超过则根据 LRU 置换策略**删除最近最久未使用的实例**（即是下标为 0 的那个 key）
5. 最后组件实例的 keepAlive 属性设置为 true,这个在渲染和执行被包裹组件的钩子函数会用到,这里不细说

**LRU 缓存淘汰算法**

LRU（Least recently used）算法根据数据的历史访问记录来进行淘汰数据,其核心思想是“如果数据最近被访问过,那么将来被访问的几率也更高”。

![images](lru.png)

keep-alive 的实现正是用到了 LRU 策略,将最近访问的组件 push 到 this.keys 最后面,this.keys[0]也就是最久没被访问的组件,当缓存实例超过 max 设置值,删除 this.keys[0]

### 参考资料

- [公司要求会使用框架 vue，面试题会被问及哪些？](https://juejin.im/post/5cf495e96fb9a07ef5622025)
- [面试必备的 13 道可以举一反三的 Vue 面试题](https://juejin.im/post/5d41eec26fb9a06ae439d29f)
- [30 道 Vue 面试题，内含详细讲解（涵盖入门到精通，自测 Vue 掌握程度）](https://juejin.im/post/5d59f2a451882549be53b170)
- [Vue 开发必须知道的 36 个技巧【近 1W 字】](https://juejin.im/post/5d9d386fe51d45784d3f8637)
- [Vue 项目里戳中你痛点的问题及解决办法](https://juejin.im/post/5b174de8f265da6e410e0b4e)
- [VueRouter 源码深度解析](https://juejin.im/post/5b5697675188251b11097464)
- [12 道 vue 高频原理面试题,你能答出几道?](https://juejin.im/post/5e04411f6fb9a0166049a073)
- [吃透 Vue 项目开发实践｜ 16 个方面深入前端工程化开发技巧《上》](https://juejin.im/post/5e0202fc6fb9a0165721e39a)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
