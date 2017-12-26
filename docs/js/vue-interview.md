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

> Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记“激活”为客户端上完全可交互的应用程序。
>
> 即：SSR 大致意思是 vue 在客户端将标签渲染成的整个 html 片段的工作在服务端完成，服务端形成的 html 片段直接返回给客户端这个过程就叫做服务端渲染。

**服务端渲染 SSR 的优缺点如下：**

**1. 服务端渲染的优点：**

- 更好的 SEO：
- 更快的内容到达时间（首屏加载更快）：

**2. 服务端渲染的缺点：**

- 更多的开发条件限制：
- 更多的服务器负载：

### 9. 能说下 vue-router 中常用的 hash 和 history 路由模式实现原理吗？

### 10. Proxy 与 Object.defineProperty 优劣对比

**Proxy 的优势如下：**

- Proxy 可以直接监听对象而非属性；
- Proxy 可以直接监听数组的变化；
- Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；
- Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；
- Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；

**Object.defineProperty 的优势如下:**

- 兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题，而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本(c.0)才能用 Proxy 重写。

### 11. 虚拟 DOM 的优缺点？

**优点：**

**缺点：**

### 12. 虚拟 DOM 实现原理？

### 参考资料

- [公司要求会使用框架 vue，面试题会被问及哪些？](https://juejin.im/post/5cf495e96fb9a07ef5622025)
- [面试必备的 13 道可以举一反三的 Vue 面试题](https://juejin.im/post/5d41eec26fb9a06ae439d29f)
- [30 道 Vue 面试题，内含详细讲解（涵盖入门到精通，自测 Vue 掌握程度）](https://juejin.im/post/5d59f2a451882549be53b170)
- [Vue 开发必须知道的 36 个技巧【近 1W 字】](https://juejin.im/post/5d9d386fe51d45784d3f8637)
- [Vue 项目里戳中你痛点的问题及解决办法](https://juejin.im/post/5b174de8f265da6e410e0b4e)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
