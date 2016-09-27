# vue-vuex 源码分析

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- Vuex 是什么？
- Vuex 源码解读
- 总结

### 一、Vuex 是什么？

Vuex 是什么及相关使用参考[vuex 学习及原理](https://km.xiaowuzi.info/js/vue-vuex.html)

### 二、Vuex 源码解读

- 入口文件
- install
- state
- mapState
- getter
- mapGetters
- mutation
- mapMutation
- action
- mapActions
- module

本文分析是基本 vuex 的`3.1.2`版本

#### 2.1 Vuex 目录

```
├── helpers.js
├── index.esm.js
├── index.js
├── mixin.js
├── module
│   ├── module-collection.js
│   └── module.js
├── plugins
│   ├── devtool.js
│   └── logger.js
├── store.js
└── util.js
```

Vuex 提供了非常强大的状态管理功能，源码代码数量不多，结构划分很清晰，各个目录文件的功能：

- module：提供 module 对象与 module 对象树的创建功能
- plugins：提供开发的辅助插件
- helpers.js：提供`mapGetters`，`mapGetions`等 API
- index.js/index.esm.js：源码主入口文件
- mixin.js：在 Vue 实例注入`store`
- util.js：提供`vuex`开发的一系列工具方法，如`forEachValue/assert`等

#### 2.2 入口文件

`vuex`提供了 UMD 和 ESM(ES module)两个构建入口，分别对应`src/index.js`和`src/index.esm.js`文件，在入口文件中，主要是导出`vuex`提供给 Vue 应用的 API：

```
import { Store, install } from './store'
import { mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers } from './helpers'

export default {
  Store,
  install,
  version: '__VERSION__',
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  createNamespacedHelpers
}
```

#### 2.3 install

`install`的相关代码在`./src/store.js`里，相关代码如下：

```
export function install (_Vue) {
    // 判断Vue是否存在
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      )
    }
    return
  }
  Vue = _Vue
  applyMixin(Vue)
}
```

`install`调用了`applyMixin`方法，`applyMixin`方法在``

```
export default function (Vue) {
  const version = Number(Vue.version.split('.')[0])

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit })
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    const _init = Vue.prototype._init
    Vue.prototype._init = function (options = {}) {
      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit
      _init.call(this, options)
    }
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    const options = this.$options
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store
    }
  }
}
```

#### 2.4 state

```

```

#### 2.5 mapState

```

```

#### 2.6 getter

```

```

#### 2.7 mapGetters

```

```

#### 2.8 mutation

```

```

#### 2.9 mapMutation

```

```

#### 2.10 action

```

```

#### 2.11 mapActions

```

```

#### 2.12 module-collection

```

```

### 三、总结

### 参考资料

- [vuex 原理及源码分析](https://github.com/dwqs/blog/issues/58)
- [vuex-analysis](https://github.com/wabish/vuex-analysis)
- [VUEX 源码学习笔记](https://github.com/DuLinRain/vuex-sourcecode-analysis)
- [Vue2.x 源码解析系列一：我的源码阅读心得](https://github.com/lihongxun945/myblog/issues/22)
- [Vuex 源码深度解析](https://juejin.im/post/5b8e3182e51d4538ae4dce87)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
