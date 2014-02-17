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

`this.keys`是一个数组，用来存储每个需要缓存的组件的`key`，即对应`this.cache`对象中的键值。

#### 2.4 destroyed

当`<keep-alive>`组件被销毁时，此时会调用`destroyed`钩子函数，在该钩子函数里会遍历`this.cache`对象，然后将那些被缓存的并且当前没有处于被渲染状态的组件都销毁掉并将其从`this.cache`对象中剔除。如下：

```
destroyed () {
    for (const key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys)
    }
}

// pruneCacheEntry函数
function pruneCacheEntry (cache,key,keys,current) {
  const cached = cache[key]
  /* 判断当前没有处于被渲染状态的组件，将其销毁*/
  if (cached && (!current || cached.tag !== current.tag)) {
    cached.componentInstance.$destroy()
  }
  cache[key] = null
  remove(keys, key)
}
```

#### 2.5 mounted

在`mounted`钩子函数中观测`include`和`exclude`的变化，如下：

```
this.$watch('include', val => {
    pruneCache(this, name => matches(val, name))
})
this.$watch('exclude', val => {
    pruneCache(this, name => !matches(val, name))
})
```

如果`include`或`exclude`发生了变化，即表示定义需要缓存的组件的规则或者不需要缓存的组件的规则发生了变化，那么就执行`pruneCache`函数，函数如下：

```
function pruneCache (keepAliveInstance, filter) {
  const { cache, keys, _vnode } = keepAliveInstance
  for (const key in cache) {
    const cachedNode = cache[key]
    if (cachedNode) {
      const name = getComponentName(cachedNode.componentOptions)
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode)
      }
    }
  }
}

function pruneCacheEntry (cache,key,keys,current) {
  const cached = cache[key]
  if (cached && (!current || cached.tag !== current.tag)) {
    cached.componentInstance.$destroy()
  }
  cache[key] = null
  remove(keys, key)
}
```

在该函数内对`this.cache`对象进行遍历，取出每一项的`name`值，用其与新的缓存规则进行匹配，如果匹配不上，则表示在新的缓存规则下该组件已经不需要被缓存，则调用`pruneCacheEntry`函数将这个已经不需要缓存的组件实例先销毁掉，然后再将其从`this.cache`对象中剔除。

#### 2.6 render

在`render`函数中首先获取第一个子组件节点的`vnode`：

```
const slot = this.$slots.default
const vnode: VNode = getFirstComponentChild(slot)
```

由于我们也是在`<keep-alive>`标签内部写

```
/* 获取该组件节点的名称 */
const name = getComponentName(componentOptions)

/* 优先获取组件的name字段，如果name不存在则获取组件的tag */
function getComponentName (opts: ?VNodeComponentOptions): ?string {
  return opts && (opts.Ctor.options.name || opts.tag)
}
```

然后用组件名称跟`include`、`exclude` 中的匹配规则去匹配：

```
const { include, exclude } = this
/* 如果name与include规则不匹配或者与exclude规则匹配则表示不缓存，直接返回vnode */
if (
    (include && (!name || !matches(include, name))) ||
    // excluded
    (exclude && name && matches(exclude, name))
) {
    return vnode
}
```

如果组件名称与`include`规则不匹配或者与`exclude`规则匹配，则表示不缓存该组件，直接返回这个组件的`vnode`，否则的话走下一步缓存：

```
const { cache, keys } = this
/* 获取组件的key */
const key = vnode.key == null
? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
: vnode.key

/* 如果命中缓存，则直接从缓存中拿 vnode 的组件实例 */
if (cache[key]) {
    vnode.componentInstance = cache[key].componentInstance
    /* 调整该组件key的顺序，将其从原来的地方删掉并重新放在最后一个 */
    remove(keys, key)
    keys.push(key)
}
/* 如果没有命中缓存，则将其设置进缓存 */
else {
    cache[key] = vnode
    keys.push(key)
    /* 如果配置了max并且缓存的长度超过了this.max，则从缓存中删除第一个 */
    if (this.max && keys.length > parseInt(this.max)) {
        pruneCacheEntry(cache, keys[0], keys, this._vnode)
    }
}
/* 最后设置keepAlive标记位 */
vnode.data.keepAlive = true
```

首先获取组件的`key`值：

```
const key = vnode.key == null?
componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
: vnode.key
```

拿到`key`值后去`this.cache`对象中去寻找是否有该值，如果有则表示该组件有缓存，即命中缓存：

```
/* 如果命中缓存，则直接从缓存中拿 vnode 的组件实例 */
if (cache[key]) {
    vnode.componentInstance = cache[key].componentInstance
    /* 调整该组件key的顺序，将其从原来的地方删掉并重新放在最后一个 */
    remove(keys, key)
    keys.push(key)
}
```

直接从缓存中拿`vnode`的组件实例，此时重新调整该组件 key 的顺序，将其从原来的地方删掉并重新放在`this.keys`中最后一个。

如果`this.cache`对象中没有该`key`值：

```
/* 如果没有命中缓存，则将其设置进缓存 */
else {
    cache[key] = vnode
    keys.push(key)
    /* 如果配置了max并且缓存的长度超过了this.max，则从缓存中删除第一个 */
    if (this.max && keys.length > parseInt(this.max)) {
        pruneCacheEntry(cache, keys[0], keys, this._vnode)
    }
}
```

表明该组件还没有被缓存过，则以该组件的`key`为键，组件`vnode`为值，将其存入`this.cache`中，并且把`key`存入`this.keys`中，此时再判断`this.keys`中缓存组件的数量是否超过了设置的最大缓存数量`this.max`，如果超过了，则把第一个缓存组件删掉。

### 三、缓存策略

缓存在计算机网络上随处可见，例如：当我们首次访问一个网页时，打开很慢，但当我们再次打开这个网页时，打开就很快。

这就涉及缓存在浏览器上的应用：浏览器缓存。当我们打开一个网页时，例如 `https://www.baidu.com` ，它会在发起真正的网络请求前，查询浏览器缓存，看是否有要请求的文件，如果有，浏览器将会拦截请求，返回缓存文件，并直接结束请求，不会再去服务器上下载。如果不存在，才会去服务器请求。

其实，浏览器中的缓存是一种在本地保存资源副本，它的大小是有限的，当我们请求数过多时，缓存空间会被用满，此时，继续进行网络请求就需要确定缓存中哪些数据被保留，哪些数据被移除，这就是浏览器缓存淘汰策略，最常见的淘汰策略有 FIFO（先进先出）、LFU（最少使用）、LRU（最近最少使用）。

LRU （ Least Recently Used ：最近最少使用 ）缓存淘汰策略，故名思义，就是根据数据的历史访问记录来进行淘汰数据，其核心思想是 如果数据最近被访问过，那么将来被访问的几率也更高 ，优先淘汰最近没有被访问到的数据。

画个图帮助我们理解：

![images](vue20.jpg)

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
