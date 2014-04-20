# keep-alive 学习

## 前言

## 内容

- 用法
- 实现原理
- 缓存策略

### 一、用法

官方文档中`keep-alive`的用法。

```
<keep-alive>
  <component :is="view"></component>
</keep-alive>
```

#### 1.1 props

- includes：只有名称匹配的组件才会被缓存
- excludes：任何名称匹配的组件都不会被缓存
- max：最多可以缓存多少组件实例

`include`和`exlude`属性允许组件有条件地缓存。二者都可以用逗号分隔字符串，正则表达式或一个数组来表示：

```
<!-- 逗号分隔字符串 -->
<keep-alive include="a,b">
  <component :is="view"></component>
</keep-alive>

<!-- 正则表达式 (使用 `v-bind`) -->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>

<!-- 数组 (使用 `v-bind`) -->
<keep-alive :include="['a', 'b']">
  <component :is="view"></component>
</keep-alive>
```

#### 1.2 用法

- `keep-alive` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁他们。
- 当组件在`kepp-alive`内被切换，它的`activated`和`deactivated`两个生命周期钩子函数将会被执行。

### 二、原理

#### 2.1 源码

`<keep-alive>`组件的定义位于源码的`src/core/components/keep-alive.js`文件中，如下：

```
const patternTypes: Array<Function> = [String, RegExp, Array]

export default {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created () {
    this.cache = Object.create(null)
    this.keys = []
  },

  destroyed () {
    for (const key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys)
    }
  },

  mounted () {
    this.$watch('include', val => {
      pruneCache(this, name => matches(val, name))
    })
    this.$watch('exclude', val => {
      pruneCache(this, name => !matches(val, name))
    })
  },

  render () {
    const slot = this.$slots.default
    const vnode = getFirstComponentChild(slot)
    const componentOptions  = vnode && vnode.componentOptions
    if (componentOptions) {
      // check pattern
      const name = getComponentName(componentOptions)
      const { include, exclude } = this
      if ((include && (!name || !matches(include, name))) || (exclude && name && matches(exclude, name))) {
        return vnode
      }

      const { cache, keys } = this
      const key = vnode.key == null
        ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
        : vnode.key
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance
        remove(keys, key)
        keys.push(key)
      } else {
        cache[key] = vnode
        keys.push(key)
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode)
        }
      }

      vnode.data.keepAlive = true
    }
    return vnode || (slot && slot[0])
  }
}
```

组件内没有常规的`<template></template>`标签，取而代之的`render`函数，所以它不是一个常规的模板组件，而是一个函数式组件。执行`<keep-alive>`组件渲染的时候，就会执行这个`render`函数。

#### 2.2 props

在`props`选项内接收传进来的三个属性：`include`、`exclude`和`max`。如下：

```
props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
}
```

`include`表示只有匹配到的组件被缓存，而`exclude`表示任何匹配到的组件都不会被缓存，`max`表示缓存组件的数量，因为我们是缓存的`vnode`对象，它也会持有 DOM，当我们缓存的组件很多的时候，会比较占用内存，所以该配置允许我们指定缓存组件的数量。

#### 2.3 created

在`created`钩子函数里定义并初始化了两个属性：`this.cache`和`this.keys`。

```
created () {
    this.cache = Object.create(null)
    this.keys = []
}
```

`this.cache`是一个对象，用来存储需要缓存的组件，它将以如下形式存储：

```
this.cache = {
    'key1':'组件1',
    'key2':'组件2',
    // ...
}
```

#### 2.4 destroyed

```
destroyed () {
    for (const key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys)
    }
}
```

#### 2.5 mounted

```
this.$watch('include', val => {
    pruneCache(this, name => matches(val, name))
})
this.$watch('exclude', val => {
    pruneCache(this, name => !matches(val, name))
})
```

#### 2.6 render

```

```

### 三、缓存策略

### 参考资料

- [前端进阶算法 3：从浏览器缓存淘汰策略和 Vue 的 keep-alive 学习 LRU 算法](https://juejin.im/post/5e8b3085f265da47c15cb8bb)
- [keep-alive 的实现原理及 LRU 缓存策略](https://juejin.im/post/5e859fe1e51d4546f27fe2bf)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
