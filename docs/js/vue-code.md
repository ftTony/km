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
// 源码位置：src/core/observer/index.js

/**
 *  Observer类会通过递归的方式把一个对象的所有属性都转化成可观测对象
 */
export class Observer {
  constructor (value: any) {
    this.value = value
    this.dep = new Dep()
    this.vmCount = 0
    // 给value新增一个__ob__属性，值为该value的Observer实例
    //
    def(value, '__ob__', this)
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods)
      } else {
        copyAugment(value, arrayMethods, arrayKeys)
      }
      this.observeArray(value)
    } else {
      this.walk(value)
    }
  }
  walk (obj: Object) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }
}


/**
 * 使一个对象转化成可观测对象
 * @param { Object } obj 对象
 * @param { String } key 对象的key
 * @param { Any } val 对象的某个key的值
 */
export function defineReactive (
  obj: Object,
  key: string,
  val: any,
  customSetter?: ?Function,
  shallow?: boolean
) {
  const dep = new Dep()

  const property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  const getter = property && property.get
  const setter = property && property.set
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key]
  }

    // 递归调用，判断属性值是否是对象
  let childOb = !shallow && observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
          if (Array.isArray(value)) {
            dependArray(value)
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter()
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) return
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb = !shallow && observe(newVal)
      dep.notify()
    }
  })
}

```

**什么是依赖收集**

视图里谁用到了这个数据就更新谁，我们换个优雅说法：我们把“谁用到了这个数据”称为“谁依赖了这个数据”，我们给每个数据都建一个依赖数组，谁依赖了这个数据我们就把谁放入这个依赖数组中，那么当这个数据发生变化的时候，我们就去它对应的依赖数据中，把每个依赖都通知一遍，告诉他们：“你们依赖的数据变啦，你们该更新啦！”。这个过程就是依赖收集。

**何时收集依赖？何时通知依赖更新？**

在 getter 中收集依赖，在 setter 中通知依赖更新。

**把依赖收集到哪里**

我们给每个数据都建一个依赖数组，谁依赖了这个数据我们就把谁放入这个依赖数组中。单单用一个数组来存放依赖的

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
  const dep = new Dep()

  const property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  const getter = property && property.get
  const setter = property && property.set
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key]
  }

  let childOb = !shallow && observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
          if (Array.isArray(value)) {
            dependArray(value)
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter()
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) return
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb = !shallow && observe(newVal)
      dep.notify()
    }
  })
}
```

在上述代码中，我们在`getter`中调用了`dep.depend()`方法收集依赖，在`setter`中调用`dep.notify()`方法通知所有依赖更新。

**依赖到底是谁**

上面我们明白了什么是依赖？何时收集依赖？以及收集的依赖存放到何处？那么我们收集的依赖到底是谁？

其实在`Vue`中还实现了一个叫做`Watcher`的类，而`Watcher`类的实例就是我们上面所说的那个“谁”。换句话说就是：谁用了数据，谁就是依赖，我们就为谁创建一个`Watcher`实例。在之后数据变化时，我们不直接去通知依赖更新，而通知依赖对应的`Watch`实例，由`Watcher`实例去通知真正的视图。

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

总结一下：`Watcher`先把自己设置到全局唯一的指定位置(`window.target`)，然后读取数据。因为读取了数据，所以会触发这个数据的`getter`。接着，在`getter`中就会从全局唯一的那个位置读取当前正在读取数据的`Watcher`，并把这个`wather`收集到`Dep`中去。收集好之后，当数据发生变化时，会向`Dep`中的每个`Wather`发送通知。通过这样的方式。`Wather`可以主动去订阅任意一个数据的变化。

**不足之处**

虽然我们通过`Object.defineProperty`方法实现了对`object`数据的可观测，但是这个方法仅仅只能观测到`object`数据的取值及设置值，当我们向`object`数据里添加一对新的`key/value`或删除一对已有的`key/value`时，它是无法观测到的，导致当我们对`object`数据添加或删除时，无法通知依赖，无法驱动视力进行响应式更新。

`Vue`也注意到了这一点，为了解决这一问题，`Vue`增加了两个全局 API：`Vue.set`和`Vue.delete`。

**总结**

我们通过`Object.defineProperty`方法实现了对`object`数据的可观测，并且封装了`Observer`类，让我们能够方便的把`object`数据中的所有属性（包括子属性）都转换成`getter/setter`的形式来侦测变化。

其整个流程大致如下：

1. `Data`通过`observer`转换成了`getter/setter`的形式来追踪变化。
2. 当外界通过`Watcher`读取数据时，会触发`getter`从而将`Watcher`添加到依赖中。
3. 当数据发生了变化时，会触发`setter`，从而向`Dep`'中的依赖（vcb 即 Watcher）发送通知。
4. `Watcher`接收到通知后，会向外界发送能知，变化通知到外界后可能会触发视图更新，也有可能触发某个回调数等。

#### 2.2 Array 的变化侦测

上一节文章中我们介绍了`Object`数据的变化侦测方式，本节我们来看一下对`Array`型数据的变化`Vue`是如何进行侦测的。

我们知道，`Object.defineProperty`监测`Object`型数据时是给`Object`型数据的每个`key/value`添加上了`getter`和`setter`，这样，对于`Object`型数据我们再通过`key`值取值或设置值时就可以被监测到。

数组并不是只能由索引值来操作数组，更常用的操作数组的方法是使用数组原型上的一些方法如`push`，`shift`等来操作数组，当使用这些数据原型方法来数组时，`Object.defineProperty`就监测不到了，所以`Vue`对`Array`型数据单独设计了数据监测方式。

```
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator (...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    // notify change
    ob.dep.notify()
    return result
  })
})
```

**数组方法拦截器**

在`Vue`中创建了一个数组方法拦截器，它拦截在数组实例与`Array.prototype`之间，在拦截器内重写了操作数组的一些方法，当数组实例使用操作数组方法时，其实使用的是拦截器中重写的方法，而不再使用`Array.prototype`上的原生方法。如下图所示：

![images](vue12.png)

经过整理，`Array`原型中可以改变数组自身内容的方法有 7 个，分别是：`push`、`pop`、`shift`、`unshift`、`splice`、`sort`、`reverse`。源码中的拦截器代码如下：

```
// 源码位置：/src/core/observer/array.js

const arrayProto = Array.prototype
// 创建一个对象作为拦截器
export const arrayMethods = Object.create(arrayProto)

// 改变数组自身内容的7个方法
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  const original = arrayProto[method]      // 缓存原生方法
  Object.defineProperty(arrayMethods, method, {
    enumerable: false,
    configurable: true,
    writable: true,
    value:function mutator(...args){
      const result = original.apply(this, args)
      return result
    }
  })
})
```

首先创建了继承自`Array`原型的空对象`arrayMethods`，接着在`arrayMethods`上使用`object.defineProperty`方法将那些可以改变数组自身的 7 个方法遍历逐个进行封装。最后，当我们使用`push`方法的时候，其实用的是`arrayMethods.push`，而`arrayMethods.push`就是封装的新函数`mutator`，也就是说，实际上执行的是函数`mutator`，而`mutator`函数的内部执行了`original`函数，这个`original`函数就是`Array.prototype`上对应的原生方法。那么，接下我们就可以在`mutator`函数中做一些其他的事，比如说发送变化通知。

**使用拦截器**

我们把撞拦截器做好还不够，还要把它挂载到数组实例与`Array.prototype`之间，这样拦截器才能够生效。

其实挂载不难，我们只需数据的`__proto__` 属性设置为拦截器`arrayMethods`即可，源码实现如下：

```
// 源码位置：/src/core/observer/index.js
export class Observer {
  constructor (value) {
    this.value = value
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods)
      } else {
        copyAugment(value, arrayMethods, arrayKeys)
      }
      this.observeArray(value)
    } else {
      this.walk(value)
    }
  }
}
// 能力检测：判断__proto__是否可用，因为有的浏览器不支持该属性
export const hasProto = '__proto__' in {}

const arrayKeys = Object.getOwnPropertyNames(arrayMethods)

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src: Object, keys: any) {
  target.__proto__ = src
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target: Object, src: Object, keys: Array<string>) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i]
    def(target, key, src[key])
  }
}
```

上面代码中首先判断了浏览器是否支持`__proto__`，如果支持，则调用`protoAugment`函数把`value__proto__ = arrayMethods`；如果不支持，则调用`copyAugment`函数把拦截器中重写的 7 个方法循环加入到`value`上。

拦截器生效以后，当数组数据再发生变化时，我们就可以在拦截器中通知变化了，也就是说现在我们就可以知道数组数据何时发生变化了。

**数组新增元素的侦测**

如果向数组里新增一个元素的话，我们可以也需要将新增的这个元素转化成可侦测的响应式数据。

这个实现起来也很容易，我们只需要拿到新增的这个元素，然后调用`observe`函数将其转化即可。我们知道，可以向数组内新增元素的方法有 3 个，分别是：`push`、`unshift`、`splice`。我们需对这 3 中方法分别处理，拿到新增的元素，再将其转化即可。

```
methodsToPatch.forEach(function (method) {
  // cache original method
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator (...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args   // 如果是push或unshift方法，那么传入参数就是新增的元素
        break
      case 'splice':
        inserted = args.slice(2) // 如果是splice方法，那么传入参数列表中下标为2的就是新增的元素
        break
    }
    if (inserted) ob.observeArray(inserted) // 调用observe函数将新增的元素转化成响应式
    // notify change
    ob.dep.notify()
    return result
  })
})
```

在上面拦截器定义代码中，如果是`push`或`unshift`方法，那么传入参数就是新增的元素；如果`splice`方法，那么传入参数列表中下标为 2 的就是新增的元素，拿到新增的元素后，就可以`observe`函数将新增的元素转化成响应的了。

**深度侦测**

在`Vue`中，不论是`Object`型数组据还是`Array`型数据所实现的数据变化侦测都是深度侦测，所谓深度侦测就是不但要侦测数据自身的变化，还要侦测数据中所有子数据的变化。举个例子：

```
let arr = [{
    name:'NLRX',
    age:'18'
}]
```

数组中包含了一个对象，如果该对象的某个属性发生了变化也应该被侦测到，这就是深度侦测。

对于`Array`型数据，调用了`observeArray()`方法，该方法内部会遍历数组中的每一个元素，然后通过调用`observe`函数将每一个元素都转化成可侦测的响应式数据。

**不足之处**

对于数组变化侦测是通过拦截器实现的，也就是说只要是通过数组原型上的方法对数组进行操作就都可以侦测到，但是别忘了，我们在日常开发中，还可以通过数组的下标来操作数据，如下：

```
let arr = [1,2,3]
arr[0] = 5;       // 通过数组下标修改数组中的数据
arr.length = 0    // 通过修改数组长度清空数组
```

而使用上述鸽子中的操作方式来修改数组是无法侦测到的。同样，`Vue`也注意到了这个问题，为了解决这一问题，`Vue`增加了两个全局 API：`Vue.set`和`Vue.delete`。

#### 2.3 变化侦测的 API 实现

- `vm.$watch`
- `vm.$set`
- `vm.$delete`

**`vm.$watch`**

```
vm.$watch(expOrFn, callback, [options]);
```

- 参数：
  - `{string | Function} expOrFn`
  - `{Function | Object} callback`
  - `{Object} [options]`
    - `{boolean} deep`
    - `{boolean} immediate`
- 返回值：`{Function} unwatch`
- 用法：

观察`Vue`实例变化的一个表达式或计算属性函数。回调函数得到的参数为新值和旧值。表达式只接受监督的键路径。对于更复杂的表达式，用一个函数取代。

注意：在变异（不是替换）对象或数组时，旧值将与新值相同，因为它们的引用指向同一个对象/数组。`Vue`不会保留变异之前值的副本。

- 示例：

```
//  键路径
vm.$watch("a.b.c",function(newVal,oldVal){
    // 做点什么
})

// 函数
vm.$watch(
  function() {
    // 表达式 `this.a + this.b` 每次得出一个不同的结果时
    // 处理函数都会被调用。
    // 这就像监听一个未被定义的计算属性
    return this.a + this.b;
  },
  function(newVal, oldVal) {
    // 做点什么
  }
);
```

`vm.$watch`返回一个取消观察函数，用来停止触发回调

```
var unwatch = vm.$watch("a", cb);
// 之后取消观察
unwatch();
```

- 选项：deep

为了发现对象内部值的变化，可以在选项参数中指定`deep:true`。注意监听数组的变动不需要这么做。

```
vm.$watch("someObject", callback, {
  deep: true
});
vm.someObject.nestedValue = 123;
// callback is fired
```

- 选项：immediate

```
vm.$watch("a", callback, {
  immediate: true
});
// 立即以 `a` 的当前值触发回调
```

- 内部原理

`$watch`的定义位于源码的`src/core/instance/state.js`中，如下：

```
Vue.prototype.$watch = function (expOrFn,cb,options) {
    const vm: Component = this
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {}
    options.user = true
    const watcher = new Watcher(vm, expOrFn, cb, options)
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value)
      } catch (error) {
        handleError(error, vm, `callback for immediate watcher "${watcher.expression}"`)
      }
    }
    return function unwatchFn () {
      watcher.teardown()
    }
  }
}
```

在函数内部，首先判断传入的回调函数是否为一个对象，如果传入的回调函数是个对象，那就表明用户是把第二个参数回调函数`cb`和第三个参数选项`options`合起来传入的，此时调用`createWatcher`函数，该函数定义如下：

```
function createWatcher (vm,expOrFn,handler,options) {
  if (isPlainObject(handler)) {
    options = handler
    handler = handler.handler
  }
  if (typeof handler === 'string') {
    handler = vm[handler]
  }
  return vm.$watch(expOrFn, handler, options)
}
```

该函数内部其实就是从用户合起来传入的对象中把回调函数`cb`和参数`options`剥离出来，然后再以常规的方式调用`$watch`方法并将剥离出来的参数传进去。

接着获取到用户传入的`options`，如果用户没有传入则将其赋值为一个默认空对象，如下：

```
options = options || {};
```

`$watch`方法内部会创建一个`watcher`实例，由于该实例是用户手动调用`$watch`方法创建而来的，所以给`options`添加`user`属性并赋值为`true`，用于区分用户创建的`watcher`实例和`Vue`内部创建的`watcher`实例，如下：

```
options.user = true;
```

接着，传入参数创建一个 watcher 实例，如下：

```
const watcher = new Watcher(vm, expOrFn, cb, options);
```

接着判断如果用户在选项参数`options` 中指定的`immediate` 为`true`，则立即用被观察数据当前的值触发回调，如下：

```
if (options.immediate) {
  cb.call(vm, watcher.value);
}
```

最后返回一个取消观察函数`unwatchFn`，用来停止触发回调。如下：

```
return function unwatchFn() {
  watcher.teardown();
};
```

这个取消观察`unwatchFn`内部其实是调用了`watcher`实例的`teardown`方法，那和我们来看一下这个`teardown`方法是如何实现的。其代码如下：

```
export default class Watcher {
  constructor(/* ... */) {
    // ...
    this.deps = [];
  }
  teardown() {
    let i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
  }
}
```

创建`watcher`实例的时候会读取被观察的数据，读取了数据就表示依赖了数据，所以`watcher`实例就会存在于数据的依赖列表中，同时`watcher`实例也记录了自己依赖了哪些数据，另外我们还说过，每个数据都有一个自己的依赖管理器`dep`，`watcher`实例记录自己依赖了哪些数据其实就是把数据的依赖管理器`dep`存放在`watcher`实例的`this.deps=[]`属性中，当取消观察时即`watcher`实例不想依赖这些数据了，那么就遍历自己记录的这些数据的依赖管理器，告诉这些数据可以从你们依赖列表中把我删除了。

当选项参数`options`中的`deep`属性为`true`时，如何实现深度观察呢？

要实现这个功能也不难，我们知道，要想让数据变化时通知我们，那我们只需成为这个数据的依赖即可，因为数据变化时会通知它所有的依赖，那么如何成为数据的依赖呢，很简单，读取一下数据即可。也就是说我们只需在创建`watcher`实例的时候把`obj`对象内部所有的值都递归的读一遍，那么这个`watcher`实例就会被加入到对象内所有值的依赖列表中，之后当对象内任意某个值发生变化时就能够得到通知了。

`traverse`函数定义如下：

```
const seenObjects = new Set();

export function traverse(val: any) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse(val: any, seen: SimpleSet) {
  let i, keys;
  const isA = Array.isArray(val);
  if (
    (!isA && !isObject(val)) ||
    Object.isFrozen(val) ||
    val instanceof VNode
  ) {
    return;
  }
  if (val.__ob__) {
    const depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) _traverse(val[i], seen);
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) _traverse(val[keys[i]], seen);
  }
}
```

该函数其实就是个递归遍历的过程，把被观察数据的内部值都递归遍历读取一遍。

首先判断传入的`val`类型，如果它不是`Array`或`Object`，再或者已经被冻结，那么直接返回，退出程序。如下：

```
const isA = Array.isArray(val);
if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
  return;
}
```

然后拿到`val`的`dep.id`，存入创建好的集合`seen`中，因为集合相比数据而言它有天然的去重效果，以此来保证存入的`dep.id`没有重复，不会造成重复收集依赖，如下：

```
if (val.__ob__) {
  const depId = val.__ob__.dep.id;
  if (seen.has(depId)) {
    return;
  }
  seen.add(depId);
}
```

接下来判断如果是数组，则循环数组，将数组中每一项递归调用`_traverse`；如果是对象，则取出对象所有的`key`，然后执行读取操作，再递归内部值，如下：

```
if (isA) {
  i = val.length;
  while (i--) _traverse(val[i], seen);
} else {
  keys = Object.keys(val);
  i = keys.length;
  while (i--) _traverse(val[keys[i]], seen);
}
```

这样，把被观察数据内部所有的值都递归的读取一遍后，那么这个`watcher`实例就会被加入到对象内所有值的依赖列表中，之后当对象内任意某个值发生变化时就能够得到通知了。

**`vm.$set`**

`vm.$set`是全局`Vue.set`的**别名**，其用法相同。

```
vm.$set(target, propertyName / index, value);
```

- 参数：

  - `{Object | Array} target`

- 返回值：设置的值
- 用法：向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性，因为`Vue`无法探测普通的新增属性。
- 内部原理

对于`object`型数据，当我们向`object`数据里添加一对新的`key/value`或删除一对已有的`key/value`时，`vue`是无法观测到的；而对于`Array`弄数据，当我们通过数组下标个性数组中的数据时，`Vue`也是无法观测到的

正是因为存在这个问题，所以`Vue`设计了`set`和`delete`这两个方法来解决这一问题；

`set`方法的定义位于源码的`src/core/observer/index.js`中，如下：

```
export function set (target: Array<any> | Object, key: any, val: any): any {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(`Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`)
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val
    return val
  }
  const ob = (target: any).__ob__
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    )
    return val
  }
  if (!ob) {
    target[key] = val
    return val
  }
  defineReactive(ob.value, key, val)
  ob.dep.notify()
  return val
}
```

首先判断在非生产环境下如果传入的`target`是否为`undefined`、`null`或是原始类型，如果是原始类型，如果是，则抛出警告，如下：

```
if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(`Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`)
  }
```

接着判断如果传入的`target`是数组并且传入的`key`是有效索引的话，那么就取当前数组长度与`key`这两者的最大值作为数组的新长度，然后使用数组的`splice`方法将传入的索引`key`对应的`val`值添加进数组。这里注意一点，为什么要用`splice`方法呢？数组的`splice`方法已经被我们创建的拦截器重写了，也就是说，当使用`splice`方法向数组内添加元素时，该元素会自动被变成响应式的。如下：

```
if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
}
```

如果传入的`target`不是数组，那就当做对象来处理。

首先判断传入的`key`是否已经存在于`target`中，如果存在，表明这次操作不是新增属性，而对已有的属性进行简单的修改值，那么就只修改属性值即可，如下：

```
if (key in target && !(key in Object.prototype)) {
  target[key] = val;
  return val;
}
```

接下来获取到`target`的`__ob__`属性，我们说过，该属性是否为`true`标志着`target`是否为响应式对象，接着判断如果`target`是`Vue`实例，或者是`Vue`实例的根数据对象，则抛出警告并退出程序，如下：

```
const ob = (target: any).__ob__;
if (target._isVue || (ob && ob.vmCount)) {
  process.env.NODE_ENV !== "production" &&
    warn(
      "Avoid adding reactive properties to a Vue instance or its root $data " +
        "at runtime - declare it upfront in the data option."
    );
  return val;
}
```

接着判断如果`ob`属性为`false`，那么表明`target`不是一个响应式对象，那么我们只需简单给它添加上新的属性，不用将新属性转化成响应式，如下：

```
if (!ob) {
  target[key] = val;
  return val;
}
```

最后，如果`target`是对象，并且是响应式，那么就调用`defineReactive`方法将新属性添加到`target`上，`defineReactive`方法会将新属性添加完之后并将其转化成响应式，最后通知依赖更新，如下：

```
defineReactive(ob.value, key, val);
ob.dep.notify();
```

以上，就是`set`方法的内部原理。其逻辑流程图如下：

![images](vue14.jpg)

**`vm.$delete`**

`vm.$delete`是全局`Vue.delete`的**别名**，其用法相同

```
vm.$delete(target, propertyName / index);
```

- **参数**：

  - `{Object | Array} target`
  - `{string | number} propertyName/index`

- **用法**：

删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。这个方法主要用于避开`Vue`不检测到属性被删除的限制，但是你应该很少会使用它。

- **内部原理**：

`delete`方法是用来解决`Vue`不能检测到属性被删除的限制，该方法的定义位于源码的`src/core/observer/index.js`中，如下：

```
export function del (target: Array<any> | Object, key: any) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(`Cannot delete reactive property on undefined, null, or primitive value: ${(target: any)}`)
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1)
    return
  }
  const ob = (target: any).__ob__
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    )
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key]
  if (!ob) {
    return
  }
  ob.dep.notify()
}
```

该方法的内部原理与`set`方法有几分相似。

首先判断在非生产环境下如果传入的`target`不存在，或者`target`是原始值，则抛出警告，如下：

```
 if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(`Cannot delete reactive property on undefined, null, or primitive value: ${(target: any)}`)
  }
```

接着判断如果传入的`target`是数组并且传入的`key`是有效索引的话，就使用数组的`splice`方法将索引`key`对应的值删掉，数组的`splice`方法已经被我们创建的拦截器重写了，所以使用该方法会自动通知相关依赖。如下：

```
if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1)
    return
}
```

如果传入的`target`不是数组，那就当做对象来处理

接下来获取到`target`的`__ob__`属性，该属性是否为`true`标志着`target`是否为响应式对象，接着判断如果`target`是`Vue`实例，或者是`Vue`实例的根数据对象，则抛出警告并退出程序，如下：

```
const ob = (target: any).__ob__;
if (target._isVue || (ob && ob.vmCount)) {
  process.env.NODE_ENV !== "production" &&
    warn(
      "Avoid adding reactive properties to a Vue instance or its root $data " +
        "at runtime - declare it upfront in the data option."
    );
  return val;
}
```

接着判断传入的`key`是否存在于`target`中，如果`key`本来就不存在于`target`中，那就不用删除，直接退出程序即可，如下：

```
if (!hasOwn(target, key)) {
  return;
}
```

最后，如果`target`是对象，并且传入的`key`也存在于`target`中，那么就从`target`中将该属性删除，同时判断当前的`target`是否为响应式对象，如果是响应式对象，则通知依赖更新；如果不是，删除完后直接返回不通知更新，如下：

```
delete target[key];
if (!ob) {
  return;
}
ob.dep.notify();
```

### 三、虚拟 DOM 篇

参考[Vue 虚拟 DOM](https://km.xiaowuzi.info/js/vue-dom.html)

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

其对应的源码如下：

```
// 源码位置：/src/complier/index.js

export const createCompiler = createCompilerCreator(function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  const ast = parse(template.trim(), options)
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})
```

可以看到`baseCompile`的代码非常的简短主要核心代码。

- **const ast = parse(template.trim(),options)**：`parse`会用与此同时等方式解析`template`模板中的指令、`class`、`style`等数据，形成`AST`。
- **optimize(ast,options)**：`optimize`的主要作用是标记静态节点，这是`Vue`在编译过程中的一处优化，档在进行`patch`的过程中，`DOM-Diff`算法会直接跳过静态节点，从而减少了比较的过程，优化了`patch`的性能。
- **const code = generate(ast,options)**：将`AST`转化成`render`函数字符串的过程，得到结果是`render`函数的字符串以及`staticRenderFns`字符串。

最终`baseCompile`的返回值

```
{
    ast:ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
}
```

最终返回了抽象语法树(ast)，渲染函数(render)，静态渲染函数(staticRenderFns)，且`render`的值为`code.render`，`staticRendreFns`的值为`code.staticRenderFns`，也就是说通过`generate`处理`ast`之后得到的返回值`code`是一个对象。

流程图如下：

![images](vue13.png)

#### 4.2 整体运行流程

在模板解析阶段主要做的工作是把用户在`<template></template>`标签内写的模板使用正则等方式解析成抽象语法树（`AST`）。而这一阶段在源码中对应解析器（`parser`）模块。

解析器，顾名思义，就是把用户所写的模板根据一定的解析规则解析出有效的信息，最后用这些信息形成`AST`。我们知道在`<template></template>`模板内，除了有常规的`HTML`标签外，用户还会一些文本信息以及在文本信息中包含过滤器。而这些不同的内容在解析起来肯定需要不同的解析规则，所以解析器不可能只有一个，它应该除了有解析常规`HTML`的 HTML 解析器，还应该有解析文本的文本解析器以及解析文本如果包含过滤器的过滤器解析器。

文本信息和标签属性信息却又是存在于 HTML 标签之内的，所以在解析整个模板的时候它的流程应该是这样子的

**回到源码**

解析器的源码位于`/src/complier/parser`文件夹下，其主线代码如下：

```
// 代码位置：/src/complier/parser/index.js

export function parse(template, options) {
   // ...
  parseHTML(template, {
    warn,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start (tag, attrs, unary) {

    },
    end () {

    },
    chars (text: string) {

    },
    comment (text: string) {

    }
  })
  return root
}
```

`parse`函数就是解析器的主函数，在`parse`函数内调用了`parseHTML`函数对象模板字符串进行解析，在`parseHTML`函数解析模板字符串的过程中，如果遇到广西信息，就会调用文本解析器`parseText`函数进行文本解析；如果遇到文本中包含过滤器，就会调用过滤器解析器`parseFilters`函数进行解析。

**总结**

模板解析其实就是根据被解析内容的特点使用正则等方式将有效信息解析提取出来，根据解析内容的不同分为 HTML 解析器，文本解析器和过滤器解析器。而文本信息与过滤器信息又存在于 HTML 标签中，所以在解析器主线函数`parse`中先调用 HTML 解析器`parseHTML`函数对模板字符串进行解析，如果在解析过程中遇到文本或过滤器信息则再调用相应的解析器进行解析，最终完成对整个模板字符串的解析。

#### 4.3 HTML 解析器

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

第一个参数是待转换的模板字符串，无需多言；重点看第二个参数，第二个参数提供了一些解析`HTML`模板时的一些参数，同时还定义了 4 个钩子函数。我们说了模板编译阶段主线函数`parse`会将`HTML`模板字符串转化成`AST`，而`parseHTML`是用来解析模板字符串的，把模板字符串中不同的内容解释出来之后，然后使用这个 4 个钩子函数提取出来的内容生成对应的`AST`。

把这 4 个钩子函数作为参数会给解析器`parseHTML`，当解析器解析出不同的内容时调用不同的钩子函数从而生成不同的`AST`。

- 当解析到开始标签时调用`start`函数生成元素类型的`AST`节点，代码如下；

```
// 当解析到标签的开始位置时，触发start
start (tag, attrs, unary, start, end) {
    let element = crateASTElement(tag,atrrs,currentParent)
}

export function crateASTElement(tag,attrs,parent){
    return {
        type: 1,
        tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        rawAttrsMap: {},
        parent,
        children: []
    }
}
```

从上面代码中我们可以看到，`start`函数接收五个参数，分别是标签名`tag`、标签属性`attrs`、标签是否自闭合`unary`、开始`start`、结束`end`。当调用该钩子函数时，内部会调用`createASTElement`函数来创建元素类型的`AST`节点

- 当解析到结束标签时调用`end`函数；
- 当解析到文本调用`chars`函数生成文本类型的`AST`节点；

```
// 当解析到标签的文本时，触发chars
chars (text, start, end) {
      if (!currentParent) {
        if (process.env.NODE_ENV !== 'production') {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start }
            )
          } else if ((text = text.trim())) {
            warnOnce(
              `text "${text}" outside root element will be ignored.`,
              { start }
            )
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      const children = currentParent.children
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text)
      } else if (!children.length) {
        text = ''
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          text = lineBreakRE.test(text) ? '' : ' '
        } else {
          text = ' '
        }
      } else {
        text = preserveWhitespace ? ' ' : ''
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          text = text.replace(whitespaceRE, ' ')
        }
        let res
        let child: ?ASTNode
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text
          }
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text
          }
        }
        if (child) {
          if (process.env.NODE_ENV !== 'production' && options.outputSourceRange) {
            child.start = start
            child.end = end
          }
          children.push(child)
        }
      }
    }
```

当解析到标签的文本时，触发`charts`钩子函数，在该钩子函数内部，首先会判断文本是不是一个带变量的动态文本，如“hello”。如果是动态文本，则创建动态文本类型的`AST`节点；如果不是动态文本，则创建纯静态文本类型的`AST`节点。

- 当解析到注释时调用`comment`函数生成注释类型的`AST`节点；

```
// 当解析到标签的注释时，触发comment
comment (text: string) {
  let element = {
    type: 3,
    text,
    isComment: true
  }
}
```

当解析到标签的注释时，触发`comment`钩子函数，该钩子函数会创建一个注释类型的`AST`节点。

一边解析不同的内容一边调用对应的钩子函数生成对应的`AST`节点，最终完成将整个模板字符串转化成`AST`，这就是`HTML`解析器所要做的工作。

**如何解析不同的内容**

要从模板字符串中解析出不同的内容，那

- 文本，例如“难凉热血”
- HTML 注释，例如`<!--我是注释-->`
- 条件注释，例如`<!--[if !IE] -->我是注释<![endif]-->`
- DOCTYPE，例如`<!DOCTYPE html>`
- 开始标签，例如`<div>`
- 结束标签，例如`</div>`

这几种内容都有其各自独有的特点，也就是说我们要根据不同内容所具有的不同的特点通过编写不同的表达式将这些内容从模板字符串中一一解析出来，然后再把不同的内容做不同的处理。

**解析 HTML 注释**

解析注释比较简单，我们知道`HTML`注释是以`<!--`开头，以`-->`结尾，这两者中间的内容，那么我们只需用正则判断待解析的模板字符串`html`是否以`<!--`开头，若是，那就继续向后寻找`-->`，如果找到了，OK，溈就解析出来了。代码如下：

```
const comment = /^<!\--/
if(comment.test(html)){
    // 若为注释，则继续查找是否存在'-->'
    const commentEnd = html.indexOf('-->')

    if(commentEnd >= 0){
        // 若存在 '-->'，继续判断options中是否保留注释
        if(options.shouldKeepComment){
            // 若保留注释，则把注释截取出来给options.comment，创建溈类型的AST节点
            options.comment(html,substring(4,commentEnd) index, index + commentEnd + 3)
        }
        // 若不保留注释，则将游标移动到'-->'之后，继续向后解析
        advance(commentEnd+3)
        continue
    }
}
```

如果模板字符串`html`符合注释开始的正则，那么就继续向后查找是否存在`-->`，若存在，则把`html`从第 4 位（`"<!--"`长度为 4）开始截取，直到`-->`处，截取得到的内容就是注释的真实内容，然后调用 4 个钩子函数中的 comment 函数，将真实的注释内容传进去，创建注释类型的 AST 节点。

在上面代码中，如果模板字符串`html`符合注释开始的正则，那么就继续向后查找是否存在`-->`，若存在，则把`html`从第 4 位（`"<!--"`长度为 4）开始截取，直到`-->`处，截取得到的内容就是注释的真实内容，然后调用 4 个钩子函数中的`comment`函数，将真实的注释内容传进去，创建溈类型的`AST`节点。

上面代码中有一处值得注意的地方，那就是我们平常在模板中可以在`<template></template>`标签上配置`comments`

`advance`函数是用来移动解析游标的，解析完一部分就把游标向后移动一部分，确保不会重复解析，其代码如下：

```
function advance(n){
    index +=n       // index为解析游标
    html = html.substring(n)
}
```

为了更加直观地说明`advance`的作用，请看下图：

![images](vue15.png)

调用`advance`函数：

```
advance(3)
```

得到结果：

![images](vue16.png)

从图中可以看到，解析游标`index`最开始在模板字符串的位置 0 处，当调用了`advance(3)`之后，解析游标到了位置 3 处，每次解析完一段内容就将游标向后移动一段，接着再从解析游标往后解析，这样就保证了解析过的内容不会被重复解析。

**解析条件注释**

解析条件注释也比较简单，其原理跟解析注释相同，都是先用与正则判断是否是以条件注释特有的开头标识开始，然后寻找其特有的结束标识，若找到，则说明是条件注释，将其截取出来即可，由于条件注释不存在于真正的`DOM`树中，所以不需要调用钩子函数创建`AST`节点。代码如下

```
// 解析是否是条件注释
const conditionalComment = /^<!\[/
if(conditionalComment.test(html)){
    // 若为条件注释，则继续查找是否存在']>'
    const conditionalEnd = html.indexOf(']>')

    if(conditionalEnd >=0){
        // 若存在  ']>',则从原本的html字符串中把条件注释裁掉
        // 把剩下的内容重新赋给html，继续向后匹配
        advance(conditionalEnd+2)
        continue
    }
}
```

**解析 DOCTYPE**

解析`DOCTYPE`的原理同解析条件注释完全相同，此处不再赘述，代码如下：

```
const doctype = /^<!DOCTYPE [^>]+>/i
// 解析是否是DOCTYPE
const doctypeMatch  = html.match(doctype)
if (doctypeMatch) {
  advance(doctypeMatch[0].length)
  continue
}
```

**解析开始标签**

相较于前三种内容的解析，解析开始标签会稍微复杂一点，但是万变不离其宗，它的原理还是想通的，都是使用正则去匹配提取。

首先使用开始标签的正则去匹配模板字符串，看模板字符串是否具有开始标签的特征，如下

```
/**
 *  匹配开始标签的正则
 */
const ncname = '[a-zA-Z_][\\w\\-\\.]*';
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
const startTagOpen = new RegExp(`^<${qnameCapture}`)

const start = html.match(startTagOpen)
if(start){
    const match = {
    tagName: start[1],
    attrs: [],
    start: index
  }
}

// 以开始标签开始的模板：
'<div></div>'.match(startTagOpen)  => ['<div','div',index:0,input:'<div></div>']
// 以结束标签开始的模板：
'</div><div></div>'.match(startTagOpen) => null
// 以文本开始的模板：
'我是文本</p>'.match(startTagOpen) => null
```

**解析结束标签**

结束标签的解析要比解析开始标签容易多了，因为它不需要解析什么属性，只需要判断剩下的模板字符串是否符合结束标签的特征，如果是，就将结束标签名提取出来，再调用 4 个钩子函数中的`end`函数就好了。

首先判断剩余的模板字符串是否符合结束标签的特征，如下：

```
const ncname = '[a-zA-Z_][\\w\\-\\.]*'
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`)
const endTagMatch = html.match(endTag)

'</div>'.match(endTag)  // ["</div>", "div", index: 0, input: "</div>", groups: undefined]
'<div>'.match(endTag)  // null
```

**解析文本**

解析文本也比较容易，在解析模板字符串之前，我们先查找一下第一个`<`出现在什么位置，如果第一个`<`在第一个位置，那么说明模板字符串是以其它 5 种类型开始的；

```
let textEnd = html.indexOf('<')
// '<' 在第一个位置，为其余5种类型
if (textEnd === 0) {
    // ...
}
// '<' 不在第一个位置，文本开头
if (textEnd >= 0) {
    // 如果html字符串不是以'<'开头,说明'<'前面的都是纯文本，无需处理
    // 那就把'<'以后的内容拿出来赋给rest
    rest = html.slice(textEnd)
    while (
        !endTag.test(rest) &&
        !startTagOpen.test(rest) &&
        !comment.test(rest) &&
        !conditionalComment.test(rest)
    ) {
        // < in plain text, be forgiving and treat it as text
        /**
           * 用'<'以后的内容rest去匹配endTag、startTagOpen、comment、conditionalComment
           * 如果都匹配不上，表示'<'是属于文本本身的内容
           */
        // 在'<'之后查找是否还有'<'
        next = rest.indexOf('<', 1)
        // 如果没有了，表示'<'后面也是文本
        if (next < 0) break
        // 如果还有，表示'<'是文本中的一个字符
        textEnd += next
        // 那就把next之后的内容截出来继续下一轮循环匹配
        rest = html.slice(textEnd)
    }
    // '<'是结束标签的开始 ,说明从开始到'<'都是文本，截取出来
    text = html.substring(0, textEnd)
    advance(textEnd)
}
// 整个模板字符串里没有找到`<`,说明整个模板字符串都是文本
if (textEnd < 0) {
    text = html
    html = ''
}
// 把截取出来的text转化成textAST
if (options.chars && text) {
    options.chars(text)
}
```

#### 4.4 文本解析器

文本菜板器的源码位于`src/compiler/parser/text-parsre.js`中，代码如下：

```
const defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g
const buildRegex = cached(delimiters => {
  const open = delimiters[0].replace(regexEscapeRE, '\\$&')
  const close = delimiters[1].replace(regexEscapeRE, '\\$&')
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
})
export function parseText (text,delimiters) {
  const tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE
  if (!tagRE.test(text)) {
    return
  }
  const tokens = []
  const rawTokens = []
  /**
   * let lastIndex = tagRE.lastIndex = 0
   * 上面这行代码等同于下面这两行代码:
   * tagRE.lastIndex = 0
   * let lastIndex = tagRE.lastIndex
   */
  let lastIndex = tagRE.lastIndex = 0
  let match, index, tokenValue
  while ((match = tagRE.exec(text))) {
    index = match.index
    // push text token
    if (index > lastIndex) {
      // 先把'{{'前面的文本放入tokens中
      rawTokens.push(tokenValue = text.slice(lastIndex, index))
      tokens.push(JSON.stringify(tokenValue))
    }
    // tag token
    // 取出'{{ }}'中间的变量exp
    const exp = parseFilters(match[1].trim())
    // 把变量exp改成_s(exp)形式也放入tokens中
    tokens.push(`_s(${exp})`)
    rawTokens.push({ '@binding': exp })
    // 设置lastIndex 以保证下一轮循环时，只从'}}'后面再开始匹配正则
    lastIndex = index + match[0].length
  }
  // 当剩下的text不再被正则匹配上时，表示所有变量已经处理完毕
  // 此时如果lastIndex < text.length，表示在最后一个变量后面还有文本
  // 最后将后面的文本再加入到tokens中
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex))
    tokens.push(JSON.stringify(tokenValue))
  }

  // 最后把数组tokens中的所有元素用'+'拼接起来
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}
```

我们看到，除开我们自己加的注释，代码其实不复杂，我们逐行分析。

`parseText`函数接收两个参数，一个是传入的待解析的文本内容`text`，一个包裹变量的符号`delimiters`。第一个参数好理解，那第二个参数是干什么的呢？

函数体内首先定义了变量`tagRE`，表示一个正则表达式。这个正则表达式是用来检查广西是否包含变量的。

#### 4.5 优化阶段

优化阶段其实干了两件事：

1. 在`AST`中找出所有静态节点并打上标记；
2. 在`AST`中找出所有表态根节点并打上标记；

优化阶段的源码位于`src/compiler/optimizer.js`中，如下：

```
export function optimize (root: ?ASTElement, options: CompilerOptions) {
    if (!root) return
    isStaticKey = genStaticKeysCached(options.staticKeys || '')
    isPlatformReservedTag = options.isReservedTag || no
    // 标记静态节点
    markStatic(root)
    // 标记静态根节点
    markStaticRoots(root, false)
}
```

**标记静态节点**

从`AST`中找出所有静态节点并标记其实不难，我们只需从根节点开始，先标记点是否静态节点，然后看根节点如果是元素节点，那么就向下递归它的子节点，子节点如果还有子节点那就继续向下递归，直到票房完所有节点。代码如下：

```

function markStatic (node: ASTNode) {
node.static = isStatic(node)
if (node.type === 1) {
// do not make component slot content static. this avoids
// 1. components not able to mutate slot nodes
// 2. static slot content fails for hot-reloading
if (
!isPlatformReservedTag(node.tag) &&
node.tag !== 'slot' &&
node.attrsMap['inline-template'] == null
) {
return
}
for (let i = 0, l = node.children.length; i < l; i++) {
const child = node.children[i]
markStatic(child)
if (!child.static) {
node.static = false
}
}
if (node.ifConditions) {
for (let i = 1, l = node.ifConditions.length; i < l; i++) {
const block = node.ifConditions[i].block
markStatic(block)
if (!block.static) {
node.static = false
}
}
}
}
}

```

上面代码中，首先调用`isStatic`函数标记节点是否为静态节点，该函数若返回`true`表示该节点是静态节点，若返回`false`表示该节点不是静态节点，函数实现如下：

```

function isStatic (node: ASTNode): boolean {
if (node.type === 2) { // expression
return false
}
if (node.type === 3) { // text
return true
}
return !!(node.pre || (
!node.hasBindings && // no dynamic bindings
!node.if && !node.for && // not v-if or v-for or v-else
!isBuiltInTag(node.tag) && // not a built-in
isPlatformReservedTag(node.tag) && // not a component
!isDirectChildOfTemplateFor(node) &&
Object.keys(node).every(isStaticKey)
))
}

```

该函数的实现过程其实也说明了如何判断一个节点是否为静态节点。还记得在`HTML`解析器在调用钩子函数创建`AST`节点时会根据节点类型的不同为节点加上不同的`type`属性，用`type`属性来标记`AST`节点的节点类型，其对应关系如下：

| type 取值 | 对应的 AST 节点类型    |
| --------- | ---------------------- |
| 1         | 元素节点               |
| 2         | 包含变量的动态文本节点 |
| 3         | 不包含变量的纯文本节点 |

如果元素节点是静态节点，那就必须满足以下几点要求：

- 如果节点使用`v-pre`指令，那就断定它是静态节点；
- 如果节点没有使用`v-pre`指令，那它要成为静态节点必须满足：
  - 不能使用动态绑定语法，即标签上不能有`v-`、`@`、`:`开头的属性；
  - 不能使用`v-if`、`v-else`、`v-for` 指令；
  - 不能是内置组件，即标签名不能是`slot`和`component`;
  - 标签名必须是平台保留标签，即不能是组件；
  - 当前节点的父节点不能是带有`v-for`和`template`标签；
  - 节点的所有属性的`key`都必须是静态节点才有的`key`，注：静态节点的`key`是有限的，它只能是`type`、`tag`、`attrsList`、`attrsMap`、`plain`、`parent`、`children`、`attrs`之一；

**标记静态根节点**

寻找表态根节点找静态节点的逻辑类似，都是从`AST`根节点递归向上遍历寻找，其代码如下：

```

function markStaticRoots (node: ASTNode, isInFor: boolean) {
if (node.type === 1) {
if (node.static || node.once) {
node.staticInFor = isInFor
}
// For a node to qualify as a static root, it should have children that
// are not just static text. Otherwise the cost of hoisting out will
// outweigh the benefits and it's better off to just always render it fresh.
if (node.static && node.children.length && !(
node.children.length === 1 &&
node.children[0].type === 3
)) {
node.staticRoot = true
return
} else {
node.staticRoot = false
}
if (node.children) {
for (let i = 0, l = node.children.length; i < l; i++) {
markStaticRoots(node.children[i], isInFor || !!node.for)
}
}
if (node.ifConditions) {
for (let i = 1, l = node.ifConditions.length; i < l; i++) {
markStaticRoots(node.ifConditions[i].block, isInFor)
}
}
}
}

```

一个节点要想成为表态根节点，它必须满足以下要求：

- 节点本身必须是静态节点；
- 必须拥有子节点`children`；
- 子节点不能只是只有一个

#### 4.5 代码生成阶段

`Vue`实例在挂载的时候会调用其自身的`render`函数来生成实例上的`template`选项所对应的`VNode`，简单的来说就是`Vue`只要调用了`render`函数，就可以把模板转换成对应的虚拟`DOM`。那么`Vue`要想调用`render`函数，那必须先有这个`render`函数

**如何根据 AST 生成 render 函数**

代码生成阶段主要的工作就是根据已有的`AST`生成对应的`render`函数供组件挂载时调用，组件只要调用的这个`render`函数就可以得到`AST`对应的虚拟`DOM`的`VNode`。那么如何根据`AST`生成`render`函数呢？

假设现有如下模板：

```
<div id="NLRX"><p>Hello {{name}}</p></div>
```

该模板经过解析并优化后对应的`AST`如下：

```
ast = {
    'type':1,
    'tag':'div',
    'attrsList':[
        {
            'name':'id',
            'value':'NLRX'
        }
    ],
    'attrsMap':{
        'id':'NLRX'
    },
    'static':false,
    'parent':undefined,
    'plain':false,
    'children':[{
        'type':1,
        'tag':'p',
        'plain':false,
        'static':false,
        'children':[
            {
                'type': 2,
                'expression': '"Hello "+_s(name)',
                'text': 'Hello {{name}}',
                'static':false,
            }
        ]
    }]
}
```

根据已有的这个`AST`来生成对应的`render`函数。生成`render`函数的过程其实就是一个递归的过程，从顶向下依次递归`AST`中的每一个节点，根据不同的`AST`节点类型创建不同的`VNode`类型。接下来我们就来照已有的模板和`AST`实际演示了一下生成`render`函数的过程。

1. 首先，根节点`div`是一个元素型`AST`节点，那么我们就要创建一个元素型`VNode`，我们把创建元素型`VNode`的方法叫做`_c(tagName,data,children)`。我们暂且不管`_c()`是什么，只需知道调用`_c()`就可以创建一个元素型`VNode`。那么就可以生成如下代码：

```
_c('div',{attrs:{"id":"NLRX"}},[/*子节点列表*/])
```

2. 根节点`div`有子节点，那么我们进入子节点列表`children`里遍历子节点，发现子节点`p`也是元素型的，那就继续创建元素型`VNode`并将其放入上述代码中根节点的子节点列表中，如下：

```
_c('div',{attrs:{"id":"NLRX"}},[_c('p',{attrs:{}},[/*子节点列表*/])])
```

3. 同理，继续遍历`p`节点的子节点，发现是一个文本型节点，那就创建一个文本型`VNode`并将其插入到`p`节点的子节点列表中，同理，创建文本型`VNode`我们调用`_v()`方法，如下：

```
_c('div',{attrs:{"id":"NLRX"}},[_c('p',{attrs:{}},[_v("Hello "+_s(name))])])
```

4. 到此，整个`AST`就遍历完毕了，我们将得到的代码再包装一下，如下：

```
 with(this){
   reurn _c(
     'div',
     {
       attrs:{"id":"NLRX"},
     },
     [
       _c(
         'p',
         {
           attrs:{}
         },
         [
           _v("Hello "+_s(name))
         ]
       )
     ]
   )
 }
```

5. 最后，我们将上面得到的这个函数字符串传递给`createFunction`函数，`createFunction`函数会帮我们把得到的函数字符串转换成真正的函数，赋给组件中的`render`选项，从而就是`render`选项，从而就是`render`函数了。如下：

```
res.render = createFunction(compiled.render, fnGenErrors)

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err, code })
    return noop
  }
}
```

**源码分析**

代码生成阶段的源码位于`src/compiler/codegen/index.js`中，源码虽然很长，但是逻辑不复杂，核心逻辑如下：

```
export function generate (ast,option) {
  const state = new CodegenState(options)
  const code = ast ? genElement(ast, state) : '_c("div")'
  return {
    render: `with(this){return ${code}}`,
    staticRenderFns: state.staticRenderFns
  }
}
```

调用`generate`函数并传入优化后得到的`ast`，在`generate`函数内部先判断`ast`是否为空，不为空则调用`genElement(ast, state)`函数创建`VNode`，为空则创建一上空的元素型`div`的`VNode`。然后将得到的结果用`with(this){return ${code}}`包裹返回。可以看出，真正起作用的是`genElement`函数。

`genElement`函数定义如下：

```
function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    let code
    if (el.component) {
      code = genComponent(el.component, el, state)
    } else {
      let data
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData(el, state)
      }

      const children = el.inlineTemplate ? null : genChildren(el, state, true)
      code = `_c('${el.tag}'${
        data ? `,${data}` : '' // data
      }${
        children ? `,${children}` : '' // children
      })`
    }
    // module transforms
    for (let i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code)
    }
    return code
  }
}
```

`genElement`函数逻辑很清晰，就是根据当前`AST`元素节点属性不同从而执行不同的代码生成函数。虽然元素节点属性的情况有很多种，但是最后真正创建出来的`VNode`无非就三种，分别是元素节点，文本节点，注释节点。

**元素节点**

生成元素型节点的`render`函数代码如下：

```
const data = el.plain ? undefined : genData(el, state)

const children = el.inlineTemplate ? null : genChildren(el, state, true)
code = `_c('${el.tag}'${
data ? `,${data}` : '' // data
}${
children ? `,${children}` : '' // children
})`
```

生成元素节点的`render`函数就是生成一个`_c()`函数调用的字符串，上文提到了`_c()`函数接收三个参数，分别是节点的标签名`tagName`，节点属性`data`，节点的子节点列表`children`。

1. 获取节点属性 data

首先判断`plain`属性是否为`true`，若为`true`则表示节点没有属性，将`data`赋值为`undefined`；如果不为`true`则调用`genData`函数获取节点属性`data`数据。`genData`函数定义如下：

```
export function genData (el: ASTElement, state: CodegenState): string {
  let data = '{'
  const dirs = genDirectives(el, state)
  if (dirs) data += dirs + ','

    // key
    if (el.key) {
        data += `key:${el.key},`
    }
    // ref
    if (el.ref) {
        data += `ref:${el.ref},`
    }
    if (el.refInFor) {
        data += `refInFor:true,`
    }
    // pre
    if (el.pre) {
        data += `pre:true,`
    }
    // 篇幅所限，省略其他情况的判断
    data = data.replace(/,$/, '') + '}'
    return data
}
```

2. 获取子节点列表 children

获取子节点列表`children`其实就是遍历`AST`的`children`属性中的元素，然后根据元素属性的不同生成不同的`VNode`创建函数调用字符串，如下：

```
export function genChildren (el):  {
    if (children.length) {
        return `[${children.map(c => genNode(c, state)).join(',')}]`
    }
}
function genNode (node: ASTNode, state: CodegenState): string {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}
```

3. 上面两步完成之后，生成`_c()`函数调用字符串，如下：

```
code = `_c('${el.tag}'${
    data ? `,${data}` : '' // data
}${
    children ? `,${children}` : '' // children
})`
```

**文本节点**

文本型的`VNode`可以调用`_v(text)`函数来创建，所以生成文本

```
export function genText (text: ASTText | ASTExpression): string {
  return `_v(${text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))
  })`
}
```

**注释节点**

注释型的`VNode`可以调用`_e(text)`函数来创建，所以生成注释节点的`render`函数就是生成一个`_e(text)`函数调用的字符串。`_e()`函数接收注释内容作为参数，其生成代码如下：

```
export function genComment (comment: ASTText): string {
  return `_e(${JSON.stringify(comment.text)})`
}
```

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

可以看到，`Vue`类的定义非常简单，其构造函数核心就一行代码：

```
this._init(options)
```

调用原型上的`_init(options)`方法并把用户所写的

```
initMixin(Vue)
```

这一行代码执行了`initMixin`函数，那`initMixin`函数又是从哪儿来的呢？该函数定义位于源码的``中，如下：

```
export function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    const vm = this
    vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
    )
    vm._self = vm
    initLifecycle(vm)
    initEvents(vm)
    initRender(vm)
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    initState(vm)
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created')

    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
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
// Only merged options has the \_base property.
if (!child.\_base) {
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
 const extendsFrom = child.extends
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm)
  }
  if (child.mixins) {
    for (let i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm)
    }
  }
```

然后创建一个空对象`options`，遍历`parent`，把`parent`中的每一项通过调用`mergeField`函数合并到空对象`options`里

```
const options = {}
let key
for (key in parent) {
    mergeField(key)
}
```

值得一提的是`mergeField`函数，它不是简单的把属性从一个对象里复制到另外一个对象里，而是根据被合并的不同的选项有着不同的合并策略。生命周期钩子函数的合并策略如下：

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

这里定义了所有钩子函数名称，所以对于钩子函数的合并策略都是`mergeHook`函数。`mergeHook`函数的实现了一个多层嵌套的三元运算符，如果嵌套太不好理解的话我们可以将其展开，如下：

```
function mergeHook (parentVal,childVal):  {
 if (childVal) {
   if (parentVal) {
     return parentVal.concat(childVal)
   } else {
     if (Array.isArray(childVal)) {
       return childVal
     } else {
       return [childVal]
     }
   }
 } else {
   return parentVal
 }
}
```

**callHook 函数如何触发钩子函数**

关于`callHook`函数如何触发钩子函数的问题，我们只需看一下该函数的实现源码即可，该函数的源码位于`src/core/instance/lifecycle.js`中，如下：

```

export function callHook(vm,hook){
const handlers = vm.\$options[hook]
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

export function initLifecycle (vm: Component) {
const options = vm.$options

// locate first non-abstract parent
let parent = options.parent
if (parent && !options.abstract) {
while (parent.$options.abstract && parent.$parent) {
parent = parent.$parent
    }
    parent.$children.push(vm)
}

vm.$parent = parent
  vm.$root = parent ? parent.\$root : vm

vm.$children = []
  vm.$refs = {}

vm._watcher = null
vm._inactive = null
vm._directInactive = false
vm._isMounted = false
vm._isDestroyed = false
vm._isBeingDestroyed = false
}

```

**解析事件**

在`Vue`中，当我们在父组件中使用子组件时可以给子组件上注册一些事件，这些事件包括使用`v-on`或`@`注册的自定义事件，也包括注册的浏览器原生事件，如下：

```
<child @select="selectHandler" @click.native="clickHandler"></child>
```

上面代码，首先要从解析事件开始说起，当遇到开始标签的时候，除了会解析开始标签，还会调用`processAttrs`方法解析标签中的属性，`processAttrs`方法位于源码的`src/compiler/parser/index.js`中，如下：

```

function processAttrs (el) {
const list = el.attrsList
let i, l, name, rawName, value, modifiers, syncGen, isDynamic
for (i = 0, l = list.length; i < l; i++) {
name = rawName = list[i].name
value = list[i].value
if (dirRE.test(name)) {
// mark element as dynamic
el.hasBindings = true
// modifiers
modifiers = parseModifiers(name.replace(dirRE, ''))
// support .foo shorthand syntax for the .prop modifier
if (process.env.VBIND_PROP_SHORTHAND && propBindRE.test(name)) {
(modifiers || (modifiers = {})).prop = true
name = `.` + name.slice(1).replace(modifierRE, '')
} else if (modifiers) {
name = name.replace(modifierRE, '')
}
if (bindRE.test(name)) { // v-bind
name = name.replace(bindRE, '')
value = parseFilters(value)
isDynamic = dynamicArgRE.test(name)
if (isDynamic) {
name = name.slice(1, -1)
}
if (
process.env.NODE_ENV !== 'production' &&
value.trim().length === 0
) {
warn(
`The value for a v-bind expression cannot be empty. Found in "v-bind:${name}"`
)
}
if (modifiers) {
if (modifiers.prop && !isDynamic) {
name = camelize(name)
if (name === 'innerHtml') name = 'innerHTML'
}
if (modifiers.camel && !isDynamic) {
name = camelize(name)
}
if (modifiers.sync) {
syncGen = genAssignmentCode(value, `$event`)
if (!isDynamic) {
addHandler(
el,
`update:${camelize(name)}`,
syncGen,
null,
false,
warn,
list[i]
)
if (hyphenate(name) !== camelize(name)) {
addHandler(
el,
`update:${hyphenate(name)}`,
syncGen,
null,
false,
warn,
list[i]
)
}
} else {
// handler w/ dynamic event name
addHandler(
el,
`"update:"+(${name})`,
syncGen,
null,
false,
warn,
list[i],
true // dynamic
)
}
}
}
if ((modifiers && modifiers.prop) || (
!el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
)) {
addProp(el, name, value, list[i], isDynamic)
} else {
addAttr(el, name, value, list[i], isDynamic)
}
} else if (onRE.test(name)) { // v-on
name = name.replace(onRE, '')
isDynamic = dynamicArgRE.test(name)
if (isDynamic) {
name = name.slice(1, -1)
}
addHandler(el, name, value, modifiers, false, warn, list[i], isDynamic)
} else { // normal directives
name = name.replace(dirRE, '')
// parse arg
const argMatch = name.match(argRE)
let arg = argMatch && argMatch[1]
isDynamic = false
if (arg) {
name = name.slice(0, -(arg.length + 1))
if (dynamicArgRE.test(arg)) {
arg = arg.slice(1, -1)
isDynamic = true
}
}
addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i])
if (process.env.NODE_ENV !== 'production' && name === 'model') {
checkForAliasModel(el, value)
}
}
} else {
// literal attribute
if (process.env.NODE_ENV !== 'production') {
const res = parseText(value, delimiters)
if (res) {
warn(
`${name}="${value}":` +
'Interpolation inside attributes has been removed. ' +
'Use v-bind or the colon shorthand instead. For example, ' +
'instead of <div id="{{ val }}">, use <div :id="val">.',
list[i]
)
}
}
addAttr(el, name, JSON.stringify(value), list[i])
if (!el.component &&
name === 'muted' &&
platformMustUseProp(el.tag, el.attrsMap.type, name)) {
addProp(el, name, 'true', list[i])
}
}
}
}

```

**initEvents 函数分析**

了解了以上过程之后，开始分析`initEvents`函数，该函数位于源码的`src/instance/events.js`中，如下：

```

export function initEvents (vm: Component) {
    vm._events = Object.create(null)
    vm._hasHookEvent = false
    const listeners = vm.$options._parentListeners
    if (listeners) {
        updateComponentListeners(vm, listeners)
    }
}

```

这个`updateComponentListeners`函数是什么呢？该函数定义如下：

```

export function updateComponentListeners (
vm: Component,
listeners: Object,
oldListeners: ?Object
) {
target = vm
updateListeners(listeners, oldListeners || {}, add, remove, createOnceHandler, vm)
target = undefined
}

```

**initInjections 函数分析**

从函数名字上来看，该函数是用来初始化实例中的`inject`选项的。说到`inject`选项，那必然离不开`provide`选项，这两个选项都是成对出现的，它们的作用是：鸡毛一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间始终生效。

`provide`选项应该是一个对象或返回一个对象的函数。该对象包含可注入其子孙的属性。在该对象中你可以使用 ES 2015 Symbols 作为 key，但是只在原生支持`Symbol`和`Reflect.ownKeys`的环境下可工作。

`inject`选项应该是：

- 一个字符串数组或
- 一个对象，对象的 key 是本地的绑定名，value 是：
  - 在可用的注入

`initInjections`函数的具体原理，该函数定义在位于源码的``中，如下：

```

export function initInjections (vm: Component) {
const result = resolveInject(vm.\$options.inject, vm)
if (result) {
toggleObserving(false)
Object.keys(result).forEach(key => {
/\* istanbul ignore else \*/
if (process.env.NODE_ENV !== 'production') {
defineReactive(vm, key, result[key], () => {
warn(
`Avoid mutating an injected value directly since the changes will be` +
`overwritten whenever the provided component re-renders.` +
`injection being mutated: "${key}"`,
vm
)
})
} else {
defineReactive(vm, key, result[key])
}
})
toggleObserving(true)
}
}

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
        observe(vm._data = {}, true)
    }
    if (opts.computed) initComputed(vm, opts.computed)
    if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch)
    }
}

```

首先，给实例上新增了一个属性`_watchers`，用来存储当前实例中所有的`watcher`实例，无论是使用`vm.$watch`注册的`watcher`实例还是使用`watch`选项注册的`watcher`实例，都会被保存到该属性中。

`Vue`中对数据变化的侦测是使用属性拦截的方式实现的，但是`Vue`并不是对所有数据使用属性拦截的方式侦测变化，这是因为数据越多，数据上所绑定的依赖就会多，从而造成依赖追踪的内存开销就会很大，所以从`Vue 2.0`版本起，`Vue`不再对所有数据都进行侦测，而是将侦测粒度提高到组件层面，对每个组件进行侦测，所以在每个组件上新增了`vm._watchers`属性，用来存放这个组件内用到的所有状态的依赖，当其中一个状态发生变化时，就会通知到组件，然后由组件内部使用虚拟`DOM`进行数据比对，从而降低内存开销，提高性能。

先判断实例中是否有`props`选项，如果有，就调用`props`选项初始化函数`initProps`去初始`props`选项；

再判断实例中是否有`methods`选项，如果有，就调用`methods`选项初始函数`initMethods`去初始化`methods`选项；

接着再判断实例中是否有`data`选项，如果有，就调用`data`选项寝化函数`initData`去初始化`data`选项；如果没有，就把`data`当作空对象并将其转换成响应式；

接着再判断实例中是否有`computed`选项，如果有，就调用`computed`选项初始化函数`initComputed`去初始化`computed`选项；

最后判断实例中是否有`watch`选项，如果有，就调用`watch`选项初始化函数`initWatch`去初始化`watch`选项；

**初始化 props**

`props`选项通常是由当前组件的父级组件传入的，当父组件在调用子组件的时候，通常会把`props`属性值作为标签属性添加在子组件的标签上，如下：

```
<Child prop1="xxx" prop2="yyy"></Child>
```

在模板编译的时候，当解析到组件标签时会将所有的标签属性都解析出来然后在子组件实例化的时候传给子组件。

在子组件内部，通过`props`选项来接收父组件传来的数据，在接收的时候可以这样写：

```
// 写法一
props: ['name']

// 写法二
props: {
    name: String, // [String, Number]
}

// 写法三
props: {
    name:{
		type: String
    }
}

```

`Vue`给用户提供了`props`选项写法非常自由，根据`Vue`的惯例，写法虽多但最终处理的时候肯定只处理一种写法，此时你肯定会想到，处理之前先对数据进行规范化，将所有写法都转化成一种写法。

**规范化数据**

`props`数据规范化函数的定义位于源码的`src/core/util/options.js`中，如下：

```
function normalizeProps (options: Object, vm: ?Component) {
  const props = options.props
  if (!props) return
  const res = {}
  let i, val, name
  if (Array.isArray(props)) {
    i = props.length
    while (i--) {
      val = props[i]
      if (typeof val === 'string') {
        name = camelize(val)
        res[name] = { type: null }
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.')
      }
    }
  } else if (isPlainObject(props)) {
    for (const key in props) {
      val = props[key]
      name = camelize(key)
      res[name] = isPlainObject(val)
        ? val
        : { type: val }
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      `Invalid value for option "props": expected an Array or an Object, ` +
      `but got ${toRawType(props)}.`,
      vm
    )
  }
  options.props = res
}
```

`initProps`函数的定义位于源码的`src/core/instance/state.js`中，如下：

```
function initProps (vm: Component, propsOptions: Object) {
const propsData = vm.$options.propsData || {}
  const props = vm._props = {}
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  const keys = vm.$options.\_propKeys = []
const isRoot = !vm.\$parent
// root instance props should be converted
if (!isRoot) {
toggleObserving(false)
}
for (const key in propsOptions) {
keys.push(key)
const value = validateProp(key, propsOptions, propsData, vm)
if (process.env.NODE_ENV !== 'production') {
const hyphenatedKey = hyphenate(key)
if (isReservedAttribute(hyphenatedKey) ||
config.isReservedAttr(hyphenatedKey)) {
warn(`"${hyphenatedKey}" is a reserved attribute and cannot be used as component prop.`,vm)
}
defineReactive(props, key, value, () => {
if (!isRoot && !isUpdatingChildComponent) {
warn(
`Avoid mutating a prop directly since the value will be` +
`overwritten whenever the parent component re-renders.` +
`Instead, use a data or computed property based on the prop's` +
`value. Prop being mutated: "${key}"`,
vm
)
}
})
} else {
defineReactive(props, key, value)
}
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

初始化`methods`相较而言就比较简单了，它的初始函数定义位于源码的`src/core/instance/state.js`中，如下：

```

function initMethods (vm: Component, methods: Object) {
    const props = vm.$options.props
    for (const key in methods) {
        if (process.env.NODE_ENV !== 'production') {
            if (typeof methods[key] !== 'function') {
                warn(
                    `Method "${key}" has type "${typeof methods[key]}" in the component definition.` +
                    `Did you reference the function correctly?`,vm
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
                `Method "${key}" conflicts with an existing Vue instance method.` +
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

export function initState (vm: Component) {
    vm._watchers = []
    const opts = vm.$options
    if (opts.props) initProps(vm, opts.props)
    if (opts.methods) initMethods(vm, opts.methods)
    if (opts.data) {
        initData(vm)
    } else {
        observe(vm._data = {}, true)
    }
    if (opts.computed) initComputed(vm, opts.computed)
    if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch)
    }
}
```

初始化`initComputed`的内部原理是怎样的。`initComputed`函数的定义位于源码的`src/core/instance/state.js`中，如下：

```

function initComputed (vm: Component, computed: Object) {
    const watchers = vm._computedWatchers = Object.create(null)
    const isSSR = isServerRendering()
    for (const key in computed) {
        const userDef = computed[key]
        const getter = typeof userDef === 'function' ? userDef : userDef.get
        if (process.env.NODE_ENV !== 'production' && getter == null) {
            warn(
            `Getter is missing for computed property "${key}".`,
            vm
            )
        }

        if (!isSSR) {
            watchers[key] = new Watcher(
                vm,
                getter || noop,
                noop,
                computedWatcherOptions
            )
        }

        if (!(key in vm)) {
            defineComputed(vm, key, userDef)
        } else if (process.env.NODE_ENV !== 'production') {
            if (key in vm.$data) {
                warn(`The computed property "${key}" is already defined in data.`, vm)
            } else if (vm.$options.props && key in vm.$options.props) {
                warn(`The computed property "${key}" is already defined as a prop.`, vm)
            }
        }
    }
}

```

初始化`watch`选项，在日常开发中`watch`选项也经常会使用到，它可以用来侦听某个已有的数据，当该数据发生变化时执行对应的回调函数。

```

function initWatch (vm: Component, watch: Object) {
    for (const key in watch) {
        const handler = watch[key]
        if (Array.isArray(handler)) {
            for (let i = 0; i < handler.length; i++) {
                createWatcher(vm, key, handler[i])
            }
        } else {
            createWatcher(vm, key, handler)
        }
    }
}

```

#### 5.2 模板编译阶段

#### 5.3 挂载阶段

挂载阶段所做的主要工作是创建`Vue`实例并用其替换`el`选项对应的`DOM`元素，同时还要开启对模板中数据（状态）的监控，当数据（状态）发生变化时通知其依赖进行视图更新。

![images](vue17.jpg)

#### 5.4 销毁阶段

### 六、实例方法

- 数据相关的方法
- 事件相关的方法
- 生命周期相关的方法

#### 6.1 数据相关的方法

参考小节[变化侦测的 API 实现](#2.3-变化侦测的-API-实现)

#### 6.2 事件相关的方法

与事件相关的实例方法有 4 个，分别是`vm.$on`、`vm.$emit`、`vm.$off`和`vm.$once`。它们是在`eventsMixin`函数中挂载到`Vue`原型上的，代码如下：

```
export function eventsMixin (Vue) {
    Vue.prototype.$on = function (event, fn) {}
    Vue.prototype.$once = function (event, fn) {}
    Vue.prototype.$off = function (event, fn) {}
    Vue.prototype.$emit = function (event) {}
}
```

当执行`eventsMixin`函数后，会向`Vue`原型上挂载上述 4 个实例方法。

- `vm.$on`
- `vm.$emit`
- `vm.$off`
- `vm.$once`

**`vm.$on`**

```
vm.$on( event, callback )
```

- **参数：**

  - `{string | Array<string>} event`(数组只在 2.2.0+中支持)
  - `{Function} callback`

- **作用：**

监听当前实例上的自定义事件。事件可以由`vm.$emit`触发。回调函数会接收所有传入事件触发函数的额外参数

示例：

```
vm.$on('test', function (msg) {
  console.log(msg)
})
vm.$emit('test', 'hi')
// => "hi"
```

- **内部原理：**

`$on`和`$emit`这两个方法的内部原理是设计模式中最典型的发布订阅模式，首先定义一个事件中心，通过`$on`订阅事件，将事件存储在事件中心里面，然后通过`$emit`触发事件中心里面存储的订阅事件。

该方法的定义位于源码的`src/core/instance/event.js`中，如下：

```
Vue.prototype.$on = function (event, fn) {
    const vm: Component = this
    if (Array.isArray(event)) {
        for (let i = 0, l = event.length; i < l; i++) {
            this.$on(event[i], fn)
        }
    } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn)
    }
    return vm
}
```

`$on`方法接收两个参数，第一个参数是订阅的事件名，可以是数组，表示订阅多个事件。第二个参数是回调函数，当触发所订阅的事件时会执行该回调函数。

首先，判断传入的事件名是否是一个数组，如果是数组，就表示需要一次性订阅多个事件，就遍历该数组，将数组中的每一个事件都递归调用`$on` 方法将其作为单个事件订阅。如下：

```
if (Array.isArray(event)) {
    for (let i = 0, l = event.length; i < l; i++) {
        this.$on(event[i], fn)
    }
}
```

如果不是数组，那就当做单个事件名来处理，以该事件名作为 `key`，先尝试在当前实例的`_events` 属性中获取其对应的事件列表，如果获取不到就给其赋空数组为默认值，并将第二个参数回调函数添加进去。如下：

```
else {
    (vm._events[event] || (vm._events[event] = [])).push(fn)
}
```

当前实例的`_events`属性是干嘛的呢？

生命周期初始化阶段的初始化事件 `initEvents` 函数中，在该函数中，首先在当前实例上绑定了`_events` 属性并给其赋值为空对象，如下：

```
export function initEvents (vm: Component) {
    vm._events = Object.create(null)
    // ...

}
```

这个`_events`属性就是用来作为当前实例的事件中心，所有绑定在这个实例上的事件都会存储在事件中心`_events`属性中。

**`vm.$emit`**

`vm.$emit`用法

```
vm.$emit( eventName, […args] )
```

- **内部原理**

```
Vue.prototype.$emit = function (event: string): Component {
    const vm: Component = this
    let cbs = vm._events[event]
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs
      const args = toArray(arguments, 1)
      for (let i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args)
        } catch (e) {
          handleError(e, vm, `event handler for "${event}"`)
        }
      }
    }
    return vm
  }
}
```

**`vm.$off`**

该函数的用法

```
vm.$off( [event, callback] )
```

- **参数**

  - `{string | Array<string>} event`
  - `{Function} [callback]`

- **作用**

  移除自定义事件监听器。

  - 如果没有提供参数，则移除所有的事件监听器；
  - 如果只提供了事件，则移除该事件所有的监听器；
  - 如果同时提供了事件与回调，则只移除这个回调的监听器。

- **内部原理**

该方法的定义位于源码的`src/core/instance/event.js`中，如下：

```
Vue.prototype.$off = function (event, fn) {
    const vm: Component = this
    // all
    if (!arguments.length) {
        vm._events = Object.create(null)
        return vm
    }
    // array of events
    if (Array.isArray(event)) {
        for (let i = 0, l = event.length; i < l; i++) {
            this.$off(event[i], fn)
        }
        return vm
    }
    // specific event
    const cbs = vm._events[event]
    if (!cbs) {
        return vm
    }
    if (!fn) {
        vm._events[event] = null
        return vm
    }
    if (fn) {
        // specific handler
        let cb
        let i = cbs.length
        while (i--) {
            cb = cbs[i]
            if (cb === fn || cb.fn === fn) {
                cbs.splice(i, 1)
                break
            }
        }
    }
    return vm
}
```

该方法内部就是通过不断判断所传参数的情况进而不同的逻辑处理。

首先，判断如果没有传入任何参数，这就是第一种情况：如果没有提供参数，则移除所有的事件监听器。我们

```
if (!arguments.length) {
    vm._events = Object.create(null)
    return vm
}
```

接着，判断如果传入的需要移除的事件名是一个数组，就表示需要一次性移除多个事件，那么我们只需订阅多个事件一样，遍历该数组，然后将数组中的每一个事件都递归调用`$off`方法进行移除即可。

```
if (Array.isArray(event)) {
    for (let i = 0, l = event.length; i < l; i++) {
        this.$off(event[i], fn)
    }
    return vm
}
```

**`vm.$once`**

官方文档用法：

```
vm.$once( event, callback )
```

- **参数：**

  - `{string} event`
  - `{Function} callback`

- **作用：**

监听一个自定义事件，但是只触发一次。一旦触发之后，监听器就会被移除。

- **内部原理**

该方法的作用是先订阅事件，但是该事件只能触发一次，也就是说当该事件被触发后会立即移除。要实现这个功能也不难，我们可以定义一个子函数，用这个子函数来替换原本订阅的事件所对应的回调，也就是当触发订阅事件时，其实执行的是这个子函数，然后再子函数内部先把订阅移除，再执行原本的回调。

该方法的定义位于源码的`src/core/instance/event.js`中，如下：

```
Vue.prototype.$once = function (event, fn) {
    const vm: Component = this
    function on () {
        vm.$off(event, on)
        fn.apply(vm, arguments)
    }
    on.fn = fn
    vm.$on(event, on)
    return vm
}
```

#### 6.3 生命周期相关的方法

与生命周期想着的实例方法有 4 个，分别是`vm.$mount`、`vm.$forceUpdate`、`vm.$nextTick`和`vm.$destory`。

- `vm.$mount`
- `vm.$forceUpdate`
- `vm.$nextTick`
- `vm.$destory`

**`vm.$mount`**

官方使用如下：

```
vm.$mount( [elementOrSelector] )
```

- **参数**
  - `{Element | string} [elementOrSelector]`
  - `{boolean} [hydrating]`
- **返回值**：`vm`- 实例自身
- **作用**
  如果`Vue`实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用`vm.$mount()`手动地挂载一个未挂载的实例。

  如果没有提供`elementOrSelector`参数，模板将被渲染为文档之外的元素，并且你必须使用原生`DOM API`把它插入文档中。

- **内部原理**

该方法的内部原理在介绍**生命周期篇的模板编译阶段**中已经详细分析过，此处不再重复。

**`vm.$forceUpdate`**

用法如下：

```
vm.$forceUpdate()
```

- **作用：** 迫使`Vue`实例重新渲染

- **内部原理**

关于该方法的内部原理在介绍**生命周期篇的模板编译阶段**中已经详细分析过，此处不再重复。

**`vm.$forceUpdate`**

其使用如下：

```
vm.$forceUpdate()
```

- **作用：**

迫使`Vue`实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。

- **内部原理**

当实例依赖的数据发生变化时，变化的数据会通知其收集的依赖列表中的依赖进行更新，收集依赖就是收集`watcher`，依赖更新就是`watcher`调用`update`方法更新，所以实例依赖的数据发生变化时，就会通知实例`watcher`去执行`update`方法进行更新。

代码如下：

```
Vue.prototype.$forceUpdate = function () {
    const vm: Component = this
    if (vm._watcher) {
        vm._watcher.update()
    }
}
```

**`vm.$nextTick`**

参考[Vue.netTick 理解与分析](https://km.xiaowuzi.info/js/vue-nexttick.html)

**`vm.$destory`**

其官方用法：

```
vm.$destroy()
```

- **用法：**

完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。

触发 `beforeDestroy` 和 `destroyed` 的钩子。

### 七、全局 API 篇

与实例方法不同，实例方法是将方法挂载到`Vue`的原型上，而全局 API 是直接在`Vue`上挂载方法。在`Vue`中，全局 API 一共有 12 个，分别是`Vue.extend`、`Vue.nextTick`、`Vue.set`、`Vue.delete`、`Vue.directive`、`Vue.filter`、`Vue.component`、`Vue.use`、`Vue.mixin`、`Vue.observable`、`Vue.version`。这 12 个 API 中有的是我们在日常业务开发中经常会用到的，有的是对 Vue 内部或外部插件提供的，我们在日常业务开发中几乎用不到。

1. Vue.extend
2. Vue.nextTick
3. Vue.set
4. Vue.delete
5. Vue.directive
6. Vue.filter
7. Vue.component
8. directive、filter、component 小结
9. Vue.use
10. Vue.mixin
11. Vue.compile
12. Vue.observable
13. Vue.version

#### 7.1 Vue.extend

既然是`Vue`类的子类，那么除了它本身独有的一些属性方法，还有一些是从`Vue`类中继承而来，所以创建子类的过程其实就是一边给子类上添加上独有的属性，一边将父类的公共属性到子类上。接下来，我们就来看看源码是如何实现这个过程的。

该 API 的定义位于源码的`src/core/global-api/extend.js`中，如下：

```

Vue.extend = function (extendOptions: Object): Function {
extendOptions = extendOptions || {}
const Super = this
const SuperId = Super.cid
const cachedCtors = extendOptions.\_Ctor || (extendOptions.\_Ctor = {})
if (cachedCtors[SuperId]) {
return cachedCtors[SuperId]
}

    const name = extendOptions.name || Super.options.name
    if (process.env.NODE_ENV !== 'production' && name) {
        validateComponentName(name)
    }

    const Sub = function VueComponent (options) {
        this._init(options)
    }
    Sub.prototype = Object.create(Super.prototype)
    Sub.prototype.constructor = Sub
    Sub.cid = cid++
    Sub.options = mergeOptions(
        Super.options,
        extendOptions
    )
    Sub['super'] = Super

    if (Sub.options.props) {
        initProps(Sub)
    }
    if (Sub.options.computed) {
        initComputed(Sub)
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend
    Sub.mixin = Super.mixin
    Sub.use = Super.use

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type]
    })
    // enable recursive self-lookup
    if (name) {
        Sub.options.components[name] = Sub
    }

    Sub.superOptions = Super.options
    Sub.extendOptions = extendOptions
    Sub.sealedOptions = extend({}, Sub.options)

    // cache constructor
    cachedCtors[SuperId] = Sub
    return Sub

}

```

#### 7.2 Vue.nextTick

全局 nextTick 方法同实例 nextTick 方法一样

#### 7.3 Vue.set

全局 set 方法同实例 set 方法一样

#### 7.4 Vue.delete

全局 delete 方法同实例 delete 方法一样

#### 7.5 Vue.directive

其用法如下：

```
Vue.directive( id, [definition] )
```

- **参数：**

  - `{string} id`
  - `{Function | Object} [definition]`

- **作用：**

  注册或获取全局指令。

```

```

- **原理分析**

#### 7.6 Vue.filter

其用法如下：

```
Vue.filter( id, [definition] )
```

- **参数：**
  - `{string} id`
  - `{Function} [definition]`
- **作用**

注册或获取全局过滤器。

```
// 注册
Vue.filter('my-filter', function (value) {
  // 返回处理后的值
})

// getter，返回已注册的过滤器
var myFilter = Vue.filter('my-filter')
```

- **原理分析**

该 API 是用来注册或获取全局过滤器的，接收两个参数：过滤器`id`和过滤的定义。同全局指令一样，注册过滤器是将定义好的过滤器存放在某个位置，获取过滤器是根据过滤器`id`从存放过滤器的位置来读取过滤器。

其代码如下：

```
Vue.options = Object.create(null)
Vue.options['filters'] = Object.create(null)

Vue.filter= function (id,definition) {
    if (!definition) {
        return this.options['filters'][id]
    } else {
        this.options['filters'][id] = definition
        return definition
    }
}
```

跟全局指令一样，`Vue.options['filters']`是用来存放全局过滤器的地方。还是根据是否传入了`definition`参数来决定本次操作是注册过滤器还是获取过滤器。如果没有传入`definition`参数，则表示本次操作为获取过滤器，那么就从存放过滤器的地方根据过滤器`id`来读取过滤器并返回；如果传入了`definition`参数，则表示本次操作为注册过滤器，那就直接将其保存在`this.options['filters']`中。

#### 7.7 Vue.component

其用法如下：

```
Vue.component( id, [definition] )
```

- **参数：**

  - `{string} id`
  - `{Function | Object} [definition]`

- **作用：**

  注册或获取全局组件。注册还会自动使用给定的`id`设置组件的名称

```
// 注册组件，传入一个扩展过的构造器
Vue.component('my-component', Vue.extend({ /* ... */ }))

// 注册组件，传入一个选项对象 (自动调用 Vue.extend)
Vue.component('my-component', { /* ... */ })

// 获取注册的组件 (始终返回构造器)
var MyComponent = Vue.component('my-component')
```

#### 7.8 directive、filter、component 小结

通过对`Vue.directive`、`Vue.filter`和`Vue.component`这三个 API 的分析，细心的你肯定会发现这三个 API 的代码实现非常的相似，是的，这是我们为了便于理解故意拆开的，其实在源码中这三个 API 的实现是写在一起的，

```
export const ASSET_TYPES = [
  'component',
  'directive',
  'filter'
]

Vue.options = Object.create(null)
ASSET_TYPES.forEach(type => {
    Vue.options[type + 's'] = Object.create(null)
})

ASSET_TYPES.forEach(type => {
    Vue[type] = function (id,definition) {
        if (!definition) {
            return this.options[type + 's'][id]
        } else {
            if (process.env.NODE_ENV !== 'production' && type === 'component') {
                validateComponentName(id)
            }
            if (type === 'component' && isPlainObject(definition)) {
                definition.name = definition.name || id
                definition = this.options._base.extend(definition)
            }
            if (type === 'directive' && typeof definition === 'function') {
                definition = { bind: definition, update: definition }
            }
            this.options[type + 's'][id] = definition
            return definition
        }
    }
})
```

#### 7.9 Vue.use

其用法如下：

```
Vue.use( plugin )
```

- **参数：**

  - `{Object | Function} plugin`

- **作用：**

安装 Vue.js 插件。如果插件是一个对象，必须提供`install`方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将`Vue`作为参数传入。

- **原理分析：**

该 API 的定义位于源码的`src/core/global-api/use.js`中，代码如下：

```

Vue.use = function (plugin) {
const installedPlugins = (this.\_installedPlugins || (this.\_installedPlugins = []))
if (installedPlugins.indexOf(plugin) > -1) {
return this
}

    // additional parameters
    const args = toArray(arguments, 1)
    args.unshift(this)
    if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
        plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this

}

```

在该函数内部，首先定义了一个变量`installedPlugins`，该变量初始值是一个空数组，用来存储已安装过的插件。首先判断传入的插件是否存在于`installedPlugins`数组中（即已经被安装过），如果存在的话，则直接返回，防止重复安装。如下：

```
const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
if (installedPlugins.indexOf(plugin) > -1) {
    return this
}
```

接下来获取到传入的其余参数，并且使用`toArray`方法将其转换成数组，同时将 `Vue` 插入到该数组的第一个位置，这是因为在后续调用 `install` 方法时，`Vue` 必须作为第一个参数传入。如下：

```
const args = toArray(arguments, 1)
args.unshift(this)
```

首先，判断传入的插件如果是一个提供了`install`方法的对象，那么就执行该对象中提供的`install`方法并传入参数完成插件安装。如下：

```
if (typeof plugin.install === 'function') {
    plugin.install.apply(plugin, args)
}
```

如果传入的插件是一个函数，那么就把这个函数当作`install`方法执行，同时传入参数完成插件安装。如下：

```
else if (typeof plugin === 'function') {
    plugin.apply(null, args)
}
```

如果传入的插件是一个函数，那么就把这个函数当作`install`方法执行，同时传入参数完成插件安装。如下：

```
else if (typeof plugin === 'function') {
    plugin.apply(null, args)
}
```

插件安装完成之后，将该插件添加进已安装插件列表中，防止重复安装。如下：

```
installedPlugins.push(plugin)
```

#### 7.10 Vue.mixin

其用法如下：

```
Vue.mixin( mixin )
```

- **参数：**

  - `{Object} mixin`

- **作用：**

全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。插件作者可以使用混入，向组件注入自定义的行为。

- **原理分析**

该 API 的定义位于源码的 `src/core/global-api/mixin.js` 中，代码如下：

```
Vue.mixin = function (mixin: Object) {
    this.options = mergeOptions(this.options, mixin)
    return this
}
```

### 八、过滤器篇

#### 8.1 resolveFilter 函数分析

`resolveFilter`函数的定义位于源码的`src/core/instance/render-helper.js`中，如下：

```
import { identity, resolveAsset } from 'core/util/index'

export function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}
```

可以盾到，`resolveFilter`函数内部只有一行代码，就是调用`resolveAsset`函数并获取其返回值，如果返回值不存在，则返回`identity`，而`identity`是一个返回同参数一样的值，如下：

```
/**
 * Return same value
 */
export const identity = _ => _
```

`resolveAsset`函数，该函数的定义位于源码的`src/core/util/options.js`中，如下：

```
export function resolveAsset (options,type,id,warnMissing) {
  if (typeof id !== 'string') {
    return
  }
  const assets = options[type]
  // 先从本地注册中查找
  if (hasOwn(assets, id)) return assets[id]
  const camelizedId = camelize(id)
  if (hasOwn(assets, camelizedId)) return assets[camelizedId]
  const PascalCaseId = capitalize(camelizedId)
  if (hasOwn(assets, PascalCaseId)) return assets[PascalCaseId]
  // 再从原型链中查找
  const res = assets[id] || assets[camelizedId] || assets[PascalCaseId]
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    )
  }
  return res
}
```

调用该函数时传入了 4 个参数，分别是当前实例的`$options`属性，`type`为`filters`，`id`为当前过滤器的`id`。

#### 8.2 parseFilters 函数分析

`parseFilters`函数的定义位于源码的`src/complier/parser/filter-parser.js`文件中，其代码如下：

```
export function parseFilters (exp) {
  let inSingle = false                     // exp是否在 '' 中
  let inDouble = false                     // exp是否在 "" 中
  let inTemplateString = false             // exp是否在 `` 中
  let inRegex = false                      // exp是否在 \\ 中
  let curly = 0                            // 在exp中发现一个 { 则curly加1，发现一个 } 则curly减1，直到culy为0 说明 { ... }闭合
  let square = 0                           // 在exp中发现一个 [ 则curly加1，发现一个 ] 则curly减1，直到culy为0 说明 [ ... ]闭合
  let paren = 0                            // 在exp中发现一个 ( 则curly加1，发现一个 ) 则curly减1，直到culy为0 说明 ( ... )闭合
  let lastFilterIndex = 0
  let c, prev, i, expression, filters


  for (i = 0; i < exp.length; i++) {
    prev = c
    c = exp.charCodeAt(i)
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) inSingle = false
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) inDouble = false
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) inTemplateString = false
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) inRegex = false
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1
        expression = exp.slice(0, i).trim()
      } else {
        pushFilter()
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        let j = i - 1
        let p
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j)
          if (p !== ' ') break
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim()
  } else if (lastFilterIndex !== 0) {
    pushFilter()
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim())
    lastFilterIndex = i + 1
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i])
    }
  }

  return expression
}

function wrapFilter (exp: string, filter: string): string {
  const i = filter.indexOf('(')
  if (i < 0) {
    // _f: resolveFilter
    return `_f("${filter}")(${exp})`
  } else {
    const name = filter.slice(0, i)
    const args = filter.slice(i + 1)
    return `_f("${name}")(${exp}${args !== ')' ? ',' + args : args}`
  }
}
```

该函数的作用的是将传入的形如`'message | capitalize'`这样的过滤器字符串转化成`_f("capitalize")(message)`，接下来我们就来分析一下其内部逻辑。

在该函数内部，首先定义了一些变量，如下：

```
let inSingle = false
let inDouble = false
let inTemplateString = false
let inRegex = false
let curly = 0
let square = 0
let paren = 0
let lastFilterIndex = 0
```

- inSingle：标志 exp 是否在'...'中；
- inDouble：标志 exp 是否在"..."中；
- inTemplateString：标志 exp 是否在\`...\`中；
- inRegex：标志 exp 是否在\\...\中；
- curly = 0：；

### 九、指令篇

在`Vue`中，除了`Vue`本身为我们提供的一些内置指令之外，`Vue`还支持用户自定义指令。并且用户有两种定义的方式：一种是使用全局 API——`Vue.directive`来定义全局指令，这种方式定义的指令会被存放在`Vue.options['directives']`中；另一种是在组件内的`directive`选项专为该组件使用的局部指令，这种方式定义的指令会被存放在`vm.$options['directives']`中。

#### 9.1 何时生效

在虚拟`DOM`渲染更新的时候，它在执行相关操作的同时，还会在每个阶段触发相应的钩子函数，我们只需监听不同的钩子函数，就可以在虚拟`DOM`渲染更新的不同阶段做一些额外的事情。下表给出了虚拟`DOM` 在渲染更新的不同阶段所触发的不同的钩子函数及其触发时机：

| 钩子函数名称 | 触发时机                                            | 回调参数               |
| ------------ | --------------------------------------------------- | ---------------------- |
| init         | 已创建 VNode，在 patch 期间发现新的虚拟节点时被触发 | VNode                  |
| create       | 已基于 VNode 创建了 DOM 元素                        | emptyNode 和 VNode     |
| activate     | keep-alive 组件被创建                               | emptyNode 和 innerNode |
| insert       | VNode 对应的                                        | VNode                  |
| prepatch     | 已创建 VNode，在 patch 期间发现新的虚拟节点时被触发 | VNode                  |
| update       | 已创建 VNode，在 patch 期间发现新的虚拟节点时被触发 | VNode                  |
| postpatch    | 已创建 VNode，在 patch 期间发现新的虚拟节点时被触发 | VNode                  |
| destory      | 已创建 VNode，在 patch 期间发现新的虚拟节点时被触发 | VNode                  |
| remove       | 已创建 VNode，在 patch 期间发现新的虚拟节点时被触发 | VNode                  |

#### 9.2 指令钩子函数

`Vue`对于自定义指令定义对象提供了几个钩子函数，这几个钩子函数分别对应着指令的几种状态，一个指令从第一次被绑定到元素上到最终与被绑定的元素解绑，它会经过以下几种状态：

- bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- inserted：被绑定元素插入父节点时调用（仅保证父节点存在，但不一定已被插入文档中）。
- update：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**
- componentUpdated：指令所在组件的 VNode**及其子 VNode**全部更新后调用。
- unbind：只调用一次，指令与元素解绑时调用。

#### 9.3 如何生效

当虚拟`DOM`渲染更新的时候会触发`create`、`update`、`destory`这三个钩子函数，从而就会执行`updateDirectives`函数来处理指令的想着逻辑，执行指令函数，让指令生效。

`updateDirectives`函数的定义位于源码的`src/core/vdom/modules/directives.js`文件中，如下：

```
function updateDirectives (oldVnode: VNodeWithData, vnode: VNodeWithData) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode)
  }
}
```

`_update`方法定义如下：

```
function _update (oldVnode, vnode) {
  const isCreate = oldVnode === emptyNode
  const isDestroy = vnode === emptyNode
  const oldDirs = normalizeDirectives(oldVnode.data.directives, oldVnode.context)
  const newDirs = normalizeDirectives(vnode.data.directives, vnode.context)

  const dirsWithInsert = []
  const dirsWithPostpatch = []

  let key, oldDir, dir
  for (key in newDirs) {
    oldDir = oldDirs[key]
    dir = newDirs[key]
    if (!oldDir) {
      // new directive, bind
      callHook(dir, 'bind', vnode, oldVnode)
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir)
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value
      dir.oldArg = oldDir.arg
      callHook(dir, 'update', vnode, oldVnode)
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir)
      }
    }
  }

  if (dirsWithInsert.length) {
    const callInsert = () => {
      for (let i = 0; i < dirsWithInsert.length; i++) {
        callHook(dirsWithInsert[i], 'inserted', vnode, oldVnode)
      }
    }
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert)
    } else {
      callInsert()
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', () => {
      for (let i = 0; i < dirsWithPostpatch.length; i++) {
        callHook(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode)
      }
    })
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy)
      }
    }
  }
}
```

可以看到，该方法内首先定义了一些变量，如下：

```
const isCreate = oldVnode === emptyNode
const isDestroy = vnode === emptyNode
const oldDirs = normalizeDirectives(oldVnode.data.directives, oldVnode.context)
const newDirs = normalizeDirectives(vnode.data.directives, vnode.context)

const dirsWithInsert = []
const dirsWithPostpatch = []
```

- isCreate：判断当前节点`vnode`对应的旧节点`oldVnode`是不是一个空节点，如果是的话，表明当前节点是一个新创建的节点。
- isDestroy：判断当前节点`vnode`是不是一个空节点，如果是的话，表明当前节点对应的旧节点将要被销毁。
- oldDirs：旧的指令集合，即`oldVnode`中保存的指令。
- newDirs：新的指令集合，即`vnode`中保存的指令。
- dirsWithInsert：保存需要触发`inserted`指令钩子函数的指令列表。
- dirsWidthPostpatch：保存需要触发`componentUpdated`指令钩子函数的指令列表。

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
- 《深入浅出 Vue.js》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
```
