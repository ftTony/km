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
```

2. `dispatch`：

```
dispatch (_type, _payload) {
    // check object-style dispatch
    const {type,payload} = unifyObjectStyle(_type, _payload)

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
```

3. `subscribe`：

```
subscribe (fn) {
    return genericSubscribe(fn, this._subscribers)
}

```

4. `subscribeAction`：

```
subscribeAction (fn) {
    const subs = typeof fn === 'function' ? { before: fn } : fn
    return genericSubscribe(subs, this._actionSubscribers)
}
```

5. `installModule`：接收 5 个参数`store`、`rootState`、`path`、`module`、`hot`、`store`表示当前`Store`实例，`rootState`表示根`state`，`path`表示当前嵌套模块的路径数组，`module`表示当前安装的模块，`hot`当动态改变`modules`或者热更新的时候为`true`

```
function installModule (store, rootState, path, module, hot) {
  const isRoot = !path.length
  const namespace = store._modules.getNamespace(path)

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && process.env.NODE_ENV !== 'production') {
      console.error(`[vuex] duplicate namespace ${namespace} for the namespaced module ${path.join('/')}`)
    }
    store._modulesNamespaceMap[namespace] = module
  }

  // set state
  if (!isRoot && !hot) {
    const parentState = getNestedState(rootState, path.slice(0, -1))
    const moduleName = path[path.length - 1]
    store._withCommit(() => {
      if (process.env.NODE_ENV !== 'production') {
        if (moduleName in parentState) {
          console.warn(
            `[vuex] state field "${moduleName}" was overridden by a module with the same name at "${path.join('.')}"`
          )
        }
      }
      Vue.set(parentState, moduleName, module.state)
    })
  }

  //  设置上下文环境
  const local = module.context = makeLocalContext(store, namespace, path)

    // 注册 mutations
  module.forEachMutation((mutation, key) => {
    const namespacedType = namespace + key
    registerMutation(store, namespacedType, mutation, local)
  })

    //  注册actions
  module.forEachAction((action, key) => {
    const type = action.root ? key : namespace + key
    const handler = action.handler || action
    registerAction(store, type, handler, local)
  })

    // 注册 getters
  module.forEachGetter((getter, key) => {
    const namespacedType = namespace + key
    registerGetter(store, namespacedType, getter, local)
  })

  module.forEachChild((child, key) => {
    installModule(store, rootState, path.concat(key), child, hot)
  })
}
```

6. resetStoreVM

```
function resetStoreVM (store, state, hot) {
    // 旧的 vm 实例
  const oldVm = store._vm

  // bind store public getters
  store.getters = {}
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null)
  const wrappedGetters = store._wrappedGetters
  const computed = {}
  forEachValue(wrappedGetters, (fn, key) => {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store)
    Object.defineProperty(store.getters, key, {
      get: () => store._vm[key],
      enumerable: true // for local getters
    })
  })

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  const silent = Vue.config.silent
  Vue.config.silent = true
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed
  })
  Vue.config.silent = silent

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store)
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(() => {
        oldVm._data.$$state = null
      })
    }
    Vue.nextTick(() => oldVm.$destroy())
  }
}
```

#### 2.5 Module 类

Module 类的代码位置在`./src/module/module.js`下

Module 类的成员属性有四个，分别是：

1. `runtime`：表示是否运行时，类型 Boolean；
2. `_children`：存储该模块的直接子模块，类型 Object；
3. `_rawModule`：存储该模块自身，类型 Object；
4. `state`：存储该模块的 state，类型 Object；

```
constructor (rawModule, runtime) {
    this.runtime = runtime
    // Store some children item
    this._children = Object.create(null)
    // Store the origin module object which passed by programmer
    this._rawModule = rawModule
    const rawState = rawModule.state

    // Store the origin module's state
    this.state = (typeof rawState === 'function' ? rawState() : rawState) || {}
}
```

Module 类的成员方法有以下几个：

1. 作`_children`属性的 addChild、removeChild、getChild、forEachChild 四个方法。

```
// 添加child
addChild (key, module) {
    this._children[key] = module
}

// 移除child
removeChild (key) {
delete this._children[key]
}

getChild (key) {
    return this._children[key]
}

// 遍历Mutation
forEachMutation (fn) {
    if (this._rawModule.mutations) {
        forEachValue(this._rawModule.mutations, fn)
    }
}
```

2. 操作`_rawModule`属性的 update、forEachGetter、forEachAction、forEachMutation 四个方法。

```
update (rawModule) {
    this._rawModule.namespaced = rawModule.namespaced
    if (rawModule.actions) {
        this._rawModule.actions = rawModule.actions
    }
    if (rawModule.mutations) {
        this._rawModule.mutations = rawModule.mutations
    }
    if (rawModule.getters) {
        this._rawModule.getters = rawModule.getters
    }
}

// 遍历child
forEachChild (fn) {
    forEachValue(this._children, fn)
}

// 遍历getter
forEachGetter (fn) {
    if (this._rawModule.getters) {
        forEachValue(this._rawModule.getters, fn)
    }
}

// 遍历action
forEachAction (fn) {
    if (this._rawModule.actions) {
        forEachValue(this._rawModule.actions, fn)
    }
}

```

#### 2.6 ModuleCollection 类

ModuleCollection 类的相关在`./src/module/module-collection.js`文件中

ModuleCollection 类有以下几个方法成员：

1. `register`：它主要是从根级别开始，逐级注册子模块，最终的模块链条

```
register (path, rawModule, runtime = true) {
    if (process.env.NODE_ENV !== 'production') {
        assertRawModule(path, rawModule)
    }

    const newModule = new Module(rawModule, runtime)
    if (path.length === 0) {
      this.root = newModule
    } else {
      const parent = this.get(path.slice(0, -1))
      parent.addChild(path[path.length - 1], newModule)
    }

    // register nested modules
    if (rawModule.modules) {
      forEachValue(rawModule.modules, (rawChildModule, key) => {
        this.register(path.concat(key), rawChildModule, runtime)
      })
    }
}

```

2. `unregister`：取消某个模块；

```
unregister (path) {
const parent = this.get(path.slice(0, -1))
const key = path[path.length - 1]
if (!parent.getChild(key).runtime) return
    parent.removeChild(key)
}

```

3. `update`：用于从根级别开始逐级更新模块的内容

```
function update (path, targetModule, newModule) {
if (process.env.NODE_ENV !== 'production') {
assertRawModule(path, newModule)
}

// update target module
targetModule.update(newModule)

// update nested modules
if (newModule.modules) {
    for (const key in newModule.modules) {
        if (!targetModule.getChild(key)) {
            if (process.env.NODE_ENV !== 'production') {
                console.warn(
                    `[vuex] trying to add a new module '${key}' on hot reloading,` +
                    'manual reload is needed'
                )
            }
        return
    }
    update(path.concat(key),targetModule.getChild(key),newModule.modules[key])
    }
    }
}
```

#### 2.7 辅助函数

辅助函数源码在`./src/helpers.js`文件中

辅助函数包含以下几个方法：

1. `mapState`：为了解决一个组件需要获取多个状态时候，将这些状态都声明为了计算属性会有些重复和冗余，我们可以使用`mapState`辅助函数帮助我们生成计算属性。

```
export const mapState = normalizeNamespace((namespace, states) => {
  const res = {}
  if (process.env.NODE_ENV !== 'production' && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object')
  }
  normalizeMap(states).forEach(({ key, val }) => {
    res[key] = function mappedState () {
      let state = this.$store.state
      let getters = this.$store.getters
      if (namespace) {
        const module = getModuleByNamespace(this.$store, 'mapState', namespace)
        if (!module) {
          return
        }
        state = module.context.state
        getters = module.context.getters
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    }
    // mark vuex getter for devtools
    res[key].vuex = true
  })
  return res
})
```

2. `mapMutations`：与 mapState 可以映射模块的 state 为计算属性类似，mapMutations 也可以将模块的 mutations 映射为 matchods

```
export const mapMutations = normalizeNamespace((namespace, mutations) => {
  const res = {}
  if (process.env.NODE_ENV !== 'production' && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object')
  }
  normalizeMap(mutations).forEach(({ key, val }) => {
    res[key] = function mappedMutation (...args) {
      // Get the commit method from store
      let commit = this.$store.commit
      if (namespace) {
        const module = getModuleByNamespace(this.$store, 'mapMutations', namespace)
        if (!module) {
          return
        }
        commit = module.context.commit
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    }
  })
  return res
})
```

3. `mapGetters`：与 mapState 可以映射模块的 state 为计算属性类似，mapGetters 也可以将模块的 getters 映射为计算属性

```
export const mapGetters = normalizeNamespace((namespace, getters) => {
  const res = {}
  if (process.env.NODE_ENV !== 'production' && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object')
  }
  normalizeMap(getters).forEach(({ key, val }) => {
    // The namespace has been mutated by normalizeNamespace
    val = namespace + val
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (process.env.NODE_ENV !== 'production' && !(val in this.$store.getters)) {
        console.error(`[vuex] unknown getter: ${val}`)
        return
      }
      return this.$store.getters[val]
    }
    // mark vuex getter for devtools
    res[key].vuex = true
  })
  return res
})
```

4. `mapActions`：与 mapMutations 可以映射模块的 mutation 为 methods 类似，mapActions 也可以将模块的 actions 映射为 methods

```
export const mapActions = normalizeNamespace((namespace, actions) => {
  const res = {}
  if (process.env.NODE_ENV !== 'production' && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object')
  }
  normalizeMap(actions).forEach(({ key, val }) => {
    res[key] = function mappedAction (...args) {
      // get dispatch function from store
      let dispatch = this.$store.dispatch
      if (namespace) {
        const module = getModuleByNamespace(this.$store, 'mapActions', namespace)
        if (!module) {
          return
        }
        dispatch = module.context.dispatch
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    }
  })
  return res
})
```

5. `createNamespacedHelpers`：主要是根据传递的命名空间产生对应模块的局部化 mapState、mapGetters、mapMutations、mapActions 映射函数

```
export const createNamespacedHelpers = (namespace) => ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
})
```

6. `normalizeNamespace`

```
function normalizeNamespace (fn) {
  return (namespace, map) => {
    if (typeof namespace !== 'string') {
      map = namespace
      namespace = ''
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/'
    }
    return fn(namespace, map)
  }
}
```

### 三、总结

vuex 代码主要使用了订阅者模式，保证了数据统一性

### 参考资料

- [vuex 原理及源码分析](https://github.com/dwqs/blog/issues/58)
- [vuex-analysis](https://github.com/wabish/vuex-analysis)
- [VUEX 源码学习笔记](https://github.com/DuLinRain/vuex-sourcecode-analysis)
- [Vuex 源码深度解析](https://juejin.im/post/5b8e3182e51d4538ae4dce87)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
```
