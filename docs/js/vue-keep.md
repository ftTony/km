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

`<keep-alive>`组件的定义位于源码的`src/core/components/keep-alive.js`文件中，如下：

```
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
    const vnode: VNode = getFirstComponentChild(slot)
    const componentOptions: ?VNodeComponentOptions = vnode && vnode.componentOptions
    if (componentOptions) {
      // check pattern
      const name: ?string = getComponentName(componentOptions)
      const { include, exclude } = this
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      const { cache, keys } = this
      const key: ?string = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
        : vnode.key
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance
        // make current key freshest
        remove(keys, key)
        keys.push(key)
      } else {
        cache[key] = vnode
        keys.push(key)
        // prune oldest entry
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
