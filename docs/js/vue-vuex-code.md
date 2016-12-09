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
- Store 类
- Module 类
- ModuleCollection 类
- 辅助函数

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
  // Vue 变量赋值
  Vue = _Vue
  applyMixin(Vue)
}
```

`install`调用了`applyMixin`方法，`applyMixin`方法在`./src/mixin.js`中，相关代码如下：

```
export default function (Vue) {
  const version = Number(Vue.version.split('.')[0])

    // 判断Vue的版本，如果Vue版本大于2，则通过 hook 的方式注入
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
    // store 注入
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store
    } else if (options.parent && options.parent.$store) {
        // 子组件从其父组件引用 $store属性
      this.$store = options.parent.$store
    }
  }
}
```

#### 2.4 Store 类

Store 类的成员属性主要有下面几个：

1. `_commiting`：标识是否正提交，类型 Boolean；
2. `_actions`：储存 actions，类型 Object；
3. `_actionSubscribers`：存储 actions 的订阅者，类型 Array；
4. `_mutations`：存储 mutations，类型 Object；
5. `_wrappedGetters`：存储 wrapped 后的 Getters，类型 Object；
6. `_modules`：存储模块链，是一个 ModuleCollection 实例；
7. `_modulesNamespaceMap`：存储带全名空间的 modules，类型 Object；
8. `_subscribers`：存储订阅者，类型 Object
9. `_watcherVM`：存储 Vue 实例；
10. `strict`：标识是否 strict 模式，类型 Boolean；

```
constructor (options = {}) {

    //  省略部分代码

    const {
      plugins = [],
      strict = false
    } = options

    // store internal state
    this._committing = false
    this._actions = Object.create(null)
    this._actionSubscribers = []
    this._mutations = Object.create(null)
    this._wrappedGetters = Object.create(null)
    this._modules = new ModuleCollection(options)
    this._modulesNamespaceMap = Object.create(null)
    this._subscribers = []
    this._watcherVM = new Vue()
    // 本地缓存
    this._makeLocalGettersCache = Object.create(null)

    // bind commit and dispatch to self
    const store = this
    const { dispatch, commit } = this
    this.dispatch = function boundDispatch (type, payload) {
      return dispatch.call(store, type, payload)
    }
    this.commit = function boundCommit (type, payload, options) {
      return commit.call(store, type, payload, options)
    }

    // strict mode
    this.strict = strict

    const state = this._modules.root.state

    // init root module.
    // this also recursively registers all sub-modules
    // and collects all module getters inside this._wrappedGetters
    installModule(this, state, [], this._modules.root)

    // initialize the store vm, which is responsible for the reactivity
    // (also registers _wrappedGetters as computed properties)
    resetStoreVM(this, state)

    // apply plugins
    plugins.forEach(plugin => plugin(this))

    const useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools
    if (useDevtools) {
      devtoolPlugin(this)
    }
  }
```

Store 类的成员方法有下面几个：

1. `commit`：
2. `dispatch`：
3. `subscribe`：

```
commit (_type, _payload, _options) {
    // check object-style commit
    const {
      type,
      payload,
      options
    } = unifyObjectStyle(_type, _payload, _options)

    const mutation = { type, payload }
    const entry = this._mutations[type]
    if (!entry) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(`[vuex] unknown mutation type: ${type}`)
      }
      return
    }
    this._withCommit(() => {
      entry.forEach(function commitIterator (handler) {
        handler(payload)
      })
    })

    this._subscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .forEach(sub => sub(mutation, this.state))

    if (
      process.env.NODE_ENV !== 'production' &&
      options && options.silent
    ) {
      console.warn(
        `[vuex] mutation type: ${type}. Silent option has been removed. ` +
        'Use the filter functionality in the vue-devtools'
      )
    }
  }

  dispatch (_type, _payload) {
    // check object-style dispatch
    const {
      type,
      payload
    } = unifyObjectStyle(_type, _payload)

    const action = { type, payload }
    const entry = this._actions[type]
    if (!entry) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(`[vuex] unknown action type: ${type}`)
      }
      return
    }

    try {
      this._actionSubscribers
        .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
        .filter(sub => sub.before)
        .forEach(sub => sub.before(action, this.state))
    } catch (e) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`[vuex] error in before action subscribers: `)
        console.error(e)
      }
    }

    const result = entry.length > 1
      ? Promise.all(entry.map(handler => handler(payload)))
      : entry[0](payload)

    return result.then(res => {
      try {
        this._actionSubscribers
          .filter(sub => sub.after)
          .forEach(sub => sub.after(action, this.state))
      } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(`[vuex] error in after action subscribers: `)
          console.error(e)
        }
      }
      return res
    })
  }

  subscribe (fn) {
    return genericSubscribe(fn, this._subscribers)
  }

  subscribeAction (fn) {
    const subs = typeof fn === 'function' ? { before: fn } : fn
    return genericSubscribe(subs, this._actionSubscribers)
  }
```

#### 2.5 Module 类

Module 类的代码位置在`./src/module/module.js`下

Module 类的成员属性有四个，分别是：

1. `runtime`：
2. `_children`：
3. `_rawModule`：
4. `state`：

```

```

Module 类的成员方法有以下几个：

1. `addChild`：
2. `removeChild`：
3. `getChild`：
4. `update`：
5. `forEachChild`、`forEachGetter`、`forEachAction`、`forEachMutation`：

#### 2.6 ModuleCollection 类

ModuleCollection 类的相关在`./src/module/module-collection.js`文件中

ModuleCollection 类有以下几个方法成员：

1. `register`：
2. `unregister`：
3. `update`：

```

```

#### 2.7 辅助函数

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
