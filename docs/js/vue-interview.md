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

### 2. Class 与 Style 如何动态绑定？

### 3. 直接给一个数组项赋值，Vue 能检测到变化吗？

### 4. 组件通讯

### 5. 谈谈你对 Vue 生命周期的理解？

### 6. 在什么阶段才能访问操作 DOM？

### 7. v-model 的原理？

### 8. 使用过 Vue SSR 吗？说说 SSR？

参考[Vue 服务端渲染（SSR）](https://km.xiaowuzi.info/project/ssr.html)

**服务端渲染 SSR 的优缺点如下：**

**1. 服务端渲染的优点：**

**2. 服务端渲染的缺点：**

### 9. 能说下 vue-router 中常用的 hash 和 history 路由模式实现原理吗？

#### hash 模式的实现原理

早期的前端路由的实现就是基于`location.hash`来实现的。其实原理很简单，`location.hash`的值就是 URL 中`#`后面的内容。比如下面这个网站，它的`location.hash`的值为`#search`：

```
https://www.word.com#search
```

hash 路由模式的实现主要是基于下面几个特性：

- URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送；
- hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制 hash 的切换；
- 可以通过 a 标签，并设置 href 属性，当用户点击这个标签后，URL 的 hash 值会发生改变；或者使用 JavaScript 来对 location.hash 进

#### history 模式的实现原理

HTML5 提供了 History API 来实现 URL 的变化。其中做最主要的 API 有以下两个：`history.pushState()`和`history.replaceState()`。这两个 API 可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录，如下所示：

```
window.history.pushState(null,null,path);
window.history.replaceState(null,null,path);
```

history 路由模式的实现主要基于存在下面几个特性：

- `pushState`和`replaceState`两个 API 来操作实现 URL 的变化；
- 我们可以使用 popstate 事件来监听 url 的变化，从而对页面进行跳转（渲染）；
- `history.pushState()`或`history.replaceState()`不会触发`popstate`事件，这时我们需要手动触发页面跳转（渲染）。

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

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
