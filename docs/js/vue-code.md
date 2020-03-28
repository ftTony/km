# vue 源码分析

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [源码目录设计](#一、源码目录设计)
- [变化侦测篇](#二、变化侦测篇)
- [虚拟 DOM 篇](#三、虚拟-dom-篇)
- [模板编译篇](#四、模板编译篇)
- [生命周期篇](#五、生命周期篇)
- [实例方法](#六、实例方法)
- [全局 API 篇](#七、全局-api-篇)
- [过滤器篇](#八、过滤器篇)
- [指令篇](#九、指令篇)

### 一、源码目录设计

Vue.js 的源码都在 src 目录下，其目录结构如下。

```
├─dist                   # 项目构建后的文件
├─scripts                # 与项目构建相关的脚本和配置文件
├─flow                   # flow的类型声明文件
├─src                    # 项目源代码
│    ├─complier          # 与模板编译相关的代码
│    ├─core              # 通用的、与运行平台无关的运行时代码
│    │  ├─observe        # 实现变化侦测的代码
│    │  ├─vdom           # 实现virtual dom的代码
│    │  ├─instance       # Vue.js实例的构造函数和原型方法
│    │  ├─global-api     # 全局api的代码
│    │  └─components     # 内置组件的代码
│    ├─server            # 与服务端渲染相关的代码
│    ├─platforms         # 特定运行平台的代码，如weex
│    ├─sfc               # 单文件组件的解析代码
│    └─shared            # 项目公用的工具代码
└─test                   # 项目测试代码
```

- compiler
- core
- platform
- server
- sfc
- shared

#### 1.1 compiler

`compiler`目录包含`Vue.js`所有编译相关的代码。它包括把模板解析成 ast 语法树、ast 语法树优化，代码生成等功能。

编译的工作可以在构建时做（借助`webpack`、`vue-loader`等辅助插件）；也可以在运行时做，使用包含构建功能的`vue.js`。显然，编译是一项耗性能的工作，所以更推荐前者——离线编译。

#### 1.2 core

`core`目录包含了`Vue.js`的核心代码，包括内置组件、全局 API 封装，Vue 实例化、观察者、虚拟 DOM、工具函数等等。

这里的代码可谓是 Vue.js 的灵魂，也是我们之后需要重点分析的地方

#### 1.3 platform

`Vue.js`是一个跨平台的`MVVM`框架，它可以跑在`web`上，也可以配合`weex`跑在`native`客户端上。`platform`是 `Vue.js`的入口，2 个目录代表 2 个主要入口，分别打包成运行在`web`上和`weex`上的`Vue.js`。

我们会重点分析`web`入口打包后的`Vue.js`，对于`weex`入口打包的`Vue.js`，感兴趣的同学可以自行研究。

#### 1.4 server

`Vue.js 2.0`支持了服务端渲染，所有服务端渲染相关的逻辑都在这个目录下。注意：这部分代码是跑在服务端的`Node.js`，不要和跑在浏览器端的`Vue.js`混为一谈。

服务端渲染主要的工作是把组件渲染为服务器端的`HTML`字符串，将它们直接发送到浏览器，最后将静态标记"混合"为客户端上完全交互的应用程序。

#### 1.5 sfc

通常我们开发`Vue.js`都会借助`webpack`构建， 然后通过`.vue`单文件来编写组件。

这个目录下的代码逻辑会把`.vue`文件内容解析成一个`JavaScript`的对象。

#### 1.6 shared

`Vue.js`会定义一些工具方法，这里定义的工具方法都是会被浏览器端的`Vue.js`和服务端的`Vue.js`所共享的。

### 二、变化侦测篇

- Object 的变化侦测
- Array 的变化侦测
- 变化侦测的 API 实现

#### 2.1 Object 的变化侦测

**使用 Object 数据变得“可观测”**

数据的每次读和写能够被我们看的见，即我们能够知道数据什么时候被读取了或数据什么时候被改写了，我们将其称为数据变的“可观测”。

```

```

**什么是依赖收集**

视图里谁用到了这个数据就更新谁，我们换个优雅说法：我们把“谁用到了这个数据”称为“谁依赖了这个数据”，我们给每个数据都建一个依赖数组，谁依赖了这个数据我们就把谁放入这个依赖数组中，那么当这个数据发生变化的时候，我们就去它对应的依赖数据中，把每个依赖都通知一遍，告诉他们：“你们依赖的数据变啦，你们该更新啦！”。这个过程就是依赖收集。

**何时收集依赖？何时通知依赖更新？**

在 getter 中收集依赖，在 setter 中通知依赖更新。

**把依赖收集到哪里**

我们给每个数据都建一个依赖数组

```
export default class Dep {
  static target: ?Watcher;
  id: number;
  subs: Array<Watcher>;

  constructor () {
    this.id = uid++
    this.subs = []
  }

  addSub (sub: Watcher) {
    this.subs.push(sub)
  }

  removeSub (sub: Watcher) {
    remove(this.subs, sub)
  }

    // 订阅
  depend () {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }
    // 通知更新
  notify () {
    // 转化成数组
    const subs = this.subs.slice()
    if (process.env.NODE_ENV !== 'production' && !config.async) {
      subs.sort((a, b) => a.id - b.id)
    }
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}
```

有了依赖管理器后，我们就可以在 getter 中收集依赖，在 setter 中通知依赖更新了，代码如下：

```
function defineReactive (obj,key,val){

}
```

在上述代码中，我们在`getter`中调用了`dep.depend()`方法收集依赖，在`setter`中调用`dep.notify()`方法通知所有依赖更新。

**依赖到底是谁**

上面我们明白了什么是依赖？何时收集依赖？以及收集的依赖存放到何处？那么我们收集的依赖到底是谁？

虽然我们一直在说“谁用到了这个数据谁”

`Watcher`类的具体实现如下：

```
export default class Watcher {
  constructor (vm,expOrFn,cb) {
    this.vm = vm;
    this.cb = cb;
    this.getter = parsePath(expOrFn)
    this.value = this.get()
  }
  get () {
    window.target = this;
    const vm = this.vm
    let value = this.getter.call(vm, vm)
    window.target = undefined;
    return value
  }
  update () {
    const oldValue = this.value
    this.value = this.get()
    this.cb.call(this.vm, this.value, oldValue)
  }
}
```

`Watcher`类的代码实现逻辑：

1. 当实例化`Watcher`类时，会先执行其构造函数；
2. 在构造函数中调用了`this.get()`实例方法；
3. 在`get()`方法中，首先通过`window.target = this`把实例自身赋给了全局的一个唯一对象`window.target`上，然后通过`let value = this.getter.call(vm,vm)`获取一下被依赖的数据，获取被依赖数据的目的是触发该数据上面的`getter`，上文我们说过，在`getter`里会调用`dep.depend()`收集依赖，而在`dep.depend()`中取到挂载`window.target`上的值并将其存入依赖数组中，在`get()`方法最后将`window.target`释放掉。
4. 而当数据变化时，会触发数据的`setter`，在`setter`中调用了`dep.notify()`方法，在`dep.notify()`方法中，遍历所有依赖(即 watcher 实例)，执行依赖的`update()`方法，也就是`Watcher`类中的`update()`实例方法，在`update()`方法中调用数据变化的更新回调函数，从而更新视图

#### 2.2 Array 的变化侦测

上一节文章中我们介绍了`Object`数据的变化侦测方式，本节我们来看一下对`Array`型数据的变化`Vue`是如何进行侦测的。

#### 2.3 变化侦测的 API 实现

### 三、虚拟 DOM 篇

- Vue 中的虚拟 DOM
- Vue 中的 DOM-Diff
- 更新子节点
- 优化更新子节点

#### 3.1 Vue 中的虚拟 DOM

参考[Vue 虚拟 DOM](https://km.xiaowuzi.info/js/vue-dom.html)

#### 3.2 Vue 中的 DOM-Diff

参考[diff 算法](https://km.xiaowuzi.info/js/vue-diff.html)

#### 3.3 更新子节点

#### 3.4 优化更新子节点

### 四、模板编译篇

- 整体运行流程
- HTML 解析器
- 文本解析器
- 优化阶段
- 代码生成阶段

我们知道，在日常开发中，我们把写在`<template></template>`标签中的类似于原生`HTML`的内容称之为模板。这时你可能会问了，为什么说是“类似于原生`HTML`的内容”而不是“就是`HTML`的内容”？因为我们在开发中，在`<template></template>`标签中除了写一些原生`HTML`的标签，我们还会写一些亦是插值，如或者写一些`Vue`指令，如`v-on`、`v-if`等。而这些东西都是在原生`HTML`语法中不存在的，不被接受的。但事实上我们确实这么写了，也被正确识别了，页面也正常显示了，这又是为什么呢？

这就归功于`Vue`的模板编译了，`Vue`会把用户在`<template></template>`标签中写的类似于原生`HTML`的内容进行编译，把原生`HTML`的内容找出来，再把非原生`HTML`找出来，经过一系列的逻辑处理生成渲染函数，也就是`render`函数，而`redner`函数会将模板内容生成对应的`VNode`，而`VNode`再经过`patch`过程从而得到将要渲染的视图中的`VNode`，最后根据`VNode`创建真实的`DOM`节点并插入到视图中，最终完成视图的渲染更新。

而把用户在`<template></template>`标签中写的类似于原生`HTML`的内容进行编译，把原生`HTML`的内容找出来，再把非原生`HTML`找出来，经过一系列的逻辑处理成渲染函数，也就是`render`函数的这一段过程称之为模板编译过程。

#### 4.1 整体渲染流程

所谓渲染流程，就是把用户写的类似原生`HTML`的模板经过一系列处理最终反应到视图中称之为整个渲染流程。这个流程在上文中其实已经说到了，下面我们以流程图的形式宏观的了解一下，流程图如下：

![images](vue-code01.png)

从图中我们也可以看到，模板编译过程就是把用户写的模板经过一系列处理最终生成`render`函数的过程。

将一堆字符串模板解析成抽象语法树`AST`后，我们就可以对其进行各种操作处理了，处理完后用处理后的`AST`来生成`render`函数。其具体流程可大致分为三个阶段：

1. 模板解析阶段：将一堆模板字符串用正则等方式解析成抽象语法树`AST`；
2. 优化阶段：遍历`AST`，找出其中的静态节点，并打上标记；
3. 代码生成阶段：将`AST`转换成渲染函数；

这三个阶段在源码中分别对应三个模块，下面给出三个模块的源代码在源码中的路径：

1. 模板解析段——解析器——源码路径：`src/compiler/parser/index.js`
2. 优化阶段——优化器——源码路径：`src/compiler/optimizer.js`
3. 代码生成阶段——代码生成器——源码路径：`src/compiler/codegen/index.js`

#### 4.1 整体运行流程

在模板解析阶段主要做的工作是把用户在`<template></template>`标签内写的模板使用正则等方式解析成抽象语法树（`AST`）。而这一阶段在源码中对应解析器（`parser`）模块。

解析器，顾名思义，就是把用户所写的模板根据一定的解析规则解析出有效的信息，最后用这些信息形成`AST`。我们知道在`<template></template>`模板内，除了有常规的`HTML`标签外，

#### 4.2 HTML 解析器

**HTML 解析器内部运行流程**

```
//  代码位置：/src/complier/parser/index.js

/**
 *  Convert HTML string to AST.
 *  将HTML模板字符串转化为AST
 */
export function parse(template,options){
    // ...
    parseHTML(template,{
        warn,
        expectHTML: options.expectHTML,
        isUnaryTag: options.isUnaryTag,
        canBeLeftOpenTag: options.canBeLeftOpenTag,
        shouldDecodeNewlines: options.shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
        shouldKeepComment: options.comments,
        // 当解析到开始标签时，调用该函数
        start(tag,attrs,unary){

        },
        // 当解析到结束标签时，调用该函数
        end(){

        },
        // 当解析到文本时，调用该函数
        chars(text){

        },
        // 当解析到注释时，调用该函数
        comment(text){

        }
    })
    return root
}
```

从代码中我们可以看到，调用`parseHTML`函数时为其传入的两个参数分别是：

- template 待转换的模板字符串；
- options 转换时所需的选项；

**如何解析不同的内容**

要从模板字符串中解析出不同的内容，那

#### 4.3 文本解析器

#### 4.5 优化阶段

#### 4.5 代码生成阶段

### 五、生命周期篇

- 初始化阶段
- 模板编译阶段
- 挂载阶段
- 销毁阶段

#### 5.1 初始化阶段

- `new Vue`
- `initLifecycle`
- `initEvents`
- `initInjections`
- `initState`

**new Vue 都干了什么**

初始化阶段所做的第一件事就是`new Vue()`创建一个`Vue`实例，那么`new Vue()`的内部都干了什么呢？我们知道，`new`关键字在`JS`中表示从一个类中实例化出一个对象来，由此可见，`Vue`实际上是一个类。所以`new Vue()`实际上是执行了`Vue`类的构造函数

```
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
```

**合并属性**

在上文中，`_init`方法里首先会调用`mergeOptions`函数来进行属性合并，如下：

```
vm.$options = mergeOptions(
    resolveConstructorOptions(vm.constructor),
    options || {},
    vm
)
```

它实际上就是把 `resolveConstructorOptions(vm.constructor)` 的返回值和 `options` 做合并，返回`vm.constructor.options`，相当于`Vue.options`，那么这个`Vue.options`又是什么呢，其实在`initGlobalAPI(Vue)`的时候定义了这个值，代码在`src/core/global-api/index.js`中：

```
export function initGlobalAPI (Vue: GlobalAPI) {
  // ...
  Vue.options = Object.create(null)
  ASSET_TYPES.forEach(type => {
    Vue.options[type + 's'] = Object.create(null)
  })

  extend(Vue.options.components, builtInComponents)
  // ...
}
```

首先通过`Vue.options = Object.create(null)`创建一个空对象，然后遍历`ASSET_TYPES`，`ASSET_TYPES`的定义在`src/shared/contstants.js`中：

```
export const ASSET_TYPES = [
  'component',
  'directive',
  'filter'
]
```

上面遍历`ASSET_TYPES`后代码相当于：

```
Vue.options.components = {}
Vue.options.directives = {}
Vue.options.filters = {}
```

最后通过`extend(Vue.options.components,builtInCompontents)`把一些内置组件扩展到`Vue.options.components`上，`Vue`的内置组件目前有`<keep-alive>`、`<transition>`和`<transition-group>`组件，这也就是为什么我们在其它组件中使用这些组件不需要注册的原因。

`mergeOptions`这个函数，它的定义在`src/core/util/options.js`中：

```
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
export function mergeOptions (
  parent: Object,
  child: Object,
  vm?: Component
): Object {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child)
  }

  if (typeof child === 'function') {
    child = child.options
  }

  normalizeProps(child, vm)
  normalizeInject(child, vm)
  normalizeDirectives(child)

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm)
    }
    if (child.mixins) {
      for (let i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm)
      }
    }
  }

  const options = {}
  let key
  for (key in parent) {
    mergeField(key)
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key)
    }
  }
  function mergeField (key) {
    const strat = strats[key] || defaultStrat
    options[key] = strat(parent[key], child[key], vm, key)
  }
  return options
}
```

可以看出，`mergeOptions`函数的主要功能是把`parent`和`child`这两个对象根据一些合并策略，合并成一个新对象并返回。首先递归把`extends`和`mixins`合并到`parent`上

```

```

生命周期钩子函数的合并策略如下：

```
function mergeHook(parentVal,childVal){
    return childVal? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal
}

LIFECYCLE_HOOKS.forEach(hook => {
  strats[hook] = mergeHook
})
```

这其中的`LIFECYCLE_HOOKS`的定义在`src/shared/constants.js`中：

```
export const LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
]
```

**callHook 函数如何触发钩子函数**

关于`callHook`函数如何触发钩子函数的问题，我们只需看一下该函数的实现源码即可，该函数的源码位于`src/core/instance/lifecycle.js`中，如下：

```
export function callHook(vm,hook){
    const handlers = vm.$options[hook]
    if(handlers){
        for(let i = 0,j = handlers.length;i<j;i++){
            try{
                hanlders[i].call(vm)
            }catch(e){
                handleError(e,vm,`${hook} hook`)
            }
        }
    }
}
```

可以看到，`callHook`函数逻辑非常简单。首先从实例的`$options`中获取到需要触发的钩子名称所对应的钩子函数数组`handlers`，我们说过，每个生命周期钩子名称都对应一个钩子函数数组。然后遍历该数组，将数组中的每个钩子函数都执行一遍。

**initLifecycle 函数分析**

`initLifecycle`函数的定义的位于源码的`src/core/instance/lifecycle.js`中，其代码如下：

```

```

**解析事件**

```

```

**initInjections 函数分析**

```

```

**initState 函数分析**

这个函数是用来初始化实例状态的，主要包括`props`、`data`、`methods`、`computed`、`watch`，我们把这些选项称为实例的状态选项。也就是说，`initState`函数就是用来初始化这些状态的。

首先我们先来分析`initState`函数，该函数的定义位于源码的`src/core/instance/state.js`中，如下：

```
export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}
```

首先，给实例上新增了一个属性`_watchers`，用来存储当前实例中所有的`watcher`实例，无论是使用`vm.$watch`注册的`watcher`实例还是使用`watch`选项注册的`watcher`实例，都会被保存到该属性中。

`initProps`函数的定义位于源码的`src/core/instance/state.js`中，如下：

```
function initProps (vm: Component, propsOptions: Object) {
  const propsData = vm.$options.propsData || {}
  const props = vm._props = {}
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  const keys = vm.$options._propKeys = []
  const isRoot = !vm.$parent
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false)
  }
  for (const key in propsOptions) {
    keys.push(key)
    const value = validateProp(key, propsOptions, propsData, vm)
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      const hyphenatedKey = hyphenate(key)
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          `"${hyphenatedKey}" is a reserved attribute and cannot be used as component prop.`,
          vm
        )
      }
      defineReactive(props, key, value, () => {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            `Avoid mutating a prop directly since the value will be ` +
            `overwritten whenever the parent component re-renders. ` +
            `Instead, use a data or computed property based on the prop's ` +
            `value. Prop being mutated: "${key}"`,
            vm
          )
        }
      })
    } else {
      defineReactive(props, key, value)
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, `_props`, key)
    }
  }
  toggleObserving(true)
}
```

可以看到，该函数接收两个参数：当前`Vue`实例和当前实例规范化后的`props`选项。

在函数内部首先定义了 4 个变量，分别是：

```
const propsData = vm.$options.propsData || {}
const props = vm._props = {}
const keys = vm.$options._propKeys = []
const isRoot = !vm.$parent
```

- propsData：父组件传入的真实`props`数据。
- props：指向`vm._props`指针，所有设置到
- keys：指向`vm.$options._propKeys`的指针，缓存
- isRoot：当前组件是否为根组件。

初始化`methods`相较而言就比较简单了，它的初始函数定义位于源码的``中，如下：

```
function initMethods (vm: Component, methods: Object) {
  const props = vm.$options.props
  for (const key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (typeof methods[key] !== 'function') {
        warn(
          `Method "${key}" has type "${typeof methods[key]}" in the component definition. ` +
          `Did you reference the function correctly?`,
          vm
        )
      }
      if (props && hasOwn(props, key)) {
        warn(
          `Method "${key}" has already been defined as a prop.`,
          vm
        )
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          `Method "${key}" conflicts with an existing Vue instance method. ` +
          `Avoid defining component methods that start with _ or $.`
        )
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm)
  }
}
```

初始化`data`也比较简单，它的初始化函数定义位于源码的`src/core/instance/state.js`中，如下：

```

```

初始化`initComputed`的内部原理是怎样的。`initComputed`函数的定义位于源码的`src/core/instance/state.js`中，如下：

```

```

初始化`watch`选项，在日常开发中`watch`选项也经常会使用到，它可以用来侦听某个已有的数据，当该数据发生变化时执行对应的回调函数。

```

```

#### 5.2 模板编译阶段

#### 5.3 挂载阶段

#### 5.4 销毁阶段

### 六、实例方法

- 数据相关的方法
- 事件相关的方法
- 生命周期相关的方法

#### 6.1 数据相关的方法

- `vm.$watch`
- `vm.$set`
- `vm.$delete`

#### 6.2 事件相关的方法

- `vm.$on`
- `vm.$emit`
- `vm.$off`
- `vm.$once`

#### 6.3 生命周期相关的方法

- `vm.$mount`
- `vm.$forceUpdate`
- `vm.$nextTick`
- `vm.$destory`

### 七、全局 API 篇

### 八、过滤器篇

### 九、指令篇

### 十、总结

![images](vue-code.png)

### 参考资料

- [vue 源码分析](https://github.com/muwoo/blogs)
- [Vue 技术内幕](http://hcysun.me/vue-design/art/)
- [Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)
- [Vue.js 源码解析](https://github.com/answershuto/learnVue)
- [你想要的 vue 源码分析](https://github.com/dirkhe1051931999/hjBlog/tree/master/blog-vue-sourcecode-study)
- [学习 Vue 源码的必要知识储备](https://juejin.im/post/5ce5565d6fb9a07ed2244513)
- [逐行剖析 Vue.js 源码](https://nlrx-wjc.github.io/Learn-Vue-Source-Code/start/)
- [渲染器](http://hcysun.me/vue-design/zh/)
- [深入 Vue 技术栈及源码系列](https://www.cnblogs.com/tugenhua0707/category/1577630.html)
- [Vue 原理剖析](http://www.zhufengpeixun.cn/train/vue-info/source.html)
- [Vue2.x 源码解析系列一：我的源码阅读心得](https://github.com/lihongxun945/myblog/issues/22)
- 《深入清出 Vue.js》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
