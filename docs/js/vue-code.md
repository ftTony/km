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

- [概述](#_4-1-概述)
- [整体运行流程](#_4-2-整体运行流程)
- [HTML 解析器](#_4-3-html-解析器)
- [文本解析器](#_4-4-文本解析器)
- [优化阶段](#_4-5-优化阶段)
- [代码生成阶段](#_4-5-代码生成阶段)

我们知道，在日常开发中，我们把写在`<template></template>`标签中的类似于原生`HTML`的内容称之为模板。这时你可能会问了，为什么说是“类似于原生`HTML`的内容”而不是“就是`HTML`的内容”？因为我们在开发中，在`<template></template>`标签中除了写一些原生`HTML`的标签，我们还会写一些亦是插值，如或者写一些`Vue`指令，如`v-on`、`v-if`等。而这些东西都是在原生`HTML`语法中不存在的，不被接受的。但事实上我们确实这么写了，也被正确识别了，页面也正常显示了，这又是为什么呢？

这就归功于`Vue`的模板编译了，`Vue`会把用户在`<template></template>`标签中写的类似于原生`HTML`的内容进行编译，把原生`HTML`的内容找出来，再把非原生`HTML`找出来，经过一系列的逻辑处理生成渲染函数，也就是`render`函数，而`redner`函数会将模板内容生成对应的`VNode`，而`VNode`再经过`patch`过程从而得到将要渲染的视图中的`VNode`，最后根据`VNode`创建真实的`DOM`节点并插入到视图中，最终完成视图的渲染更新。

而把用户在`<template></template>`标签中写的类似于原生`HTML`的内容进行编译，把原生`HTML`的内容找出来，再把非原生`HTML`找出来，经过一系列的逻辑处理成渲染函数，也就是`render`函数的这一段过程称之为模板编译过程。

#### 4.1 概述

**整体渲染流程**

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

当解析到开始标签时，会调用 4 个钩子函数中的`start`函数，而`start`函数需要传递 5 个参数，分别是标签名`tag`、标签属性`attrs`、标签是否自闭合`unary`、开始位置`start`、结束位置`end`。标签名通过与此同时的结果就可以拿到，即上面代码中的`start[1]`，而标签属性`attrs`以及标签是否自闭合`unary`需要进行一步解析。

1. 解析标签属性

我们知道，标签属性一般是写在开始标签的标签名之后的，如下：

```
<div class="a" id="b"></div>
```

另外，我们在上面匹配是否开始标签正则中已经可以拿到开始标签的标签名，即上面代码中的`start[0]`，那么我们可以将这一部分先从模板字符串裁掉，则剩下的部分如下：

```
 class="a" id="b"></div>
```

我们只需用剩下的这部分去匹配标签属性的正则，就可以将标签属性提取出来了，如下：

```
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
let html = 'class="a" id="b"></div>'
let attr = html.match(attribute)
console.log(attr)
// ["class="a"", "class", "=", "a", undefined, undefined, index: 0, input: "class="a" id="b"></div>", groups: undefined]
```

可以看到，第一个标签属性`class="a"`已经被拿到了。另外，标签属性有可能有多个也有可能没有，如果没有的话那好办，匹配标签属性的正则就会匹配失败，标签属性就为空数组；而如果标签属性有多个的话，那就需要循环匹配了，匹配出第一个标签属性后，就把该属性裁掉，用剩下的字符串继续匹配，走到不再满足正则为止，代码如下：

```
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
const startTagClose = /^\s*(\/?)>/
const match = {
 tagName: start[1],
 attrs: [],
 start: index
}
 while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
 advance(attr[0].length)
 match.attrs.push(attr)
}
```

在上面代码的`while`循环中，如果剩下的字符串不符合开始标签的结束特征（startTagClose）并且符合标签属性的特征的话，那就说明还有未提取出的标签属性，那就进入循环，继续提取，直到把所有标签属性都提取完毕。

所谓不符合开始标签的结束特征是指当前剩下的字符串不是以开始标签结束符开头的，我们知道一个开始标签的结束符有可能是一个`>`（非自闭合标签），也有可能是`/>`（自闭合标签），如果剩下的字符串（如`></div>`）以开始标签的结束符开头，那么就表示标签属性已经被提取完毕了。

2. 解析标签是否是自闭合

在`HTML`中，有自闭合标签（如`<img src="" />`）也有非自闭合标签（如`<div></div>`），这两种类型的标签在创建`AST`节点是处理方式是有区别的，所以我们需要解析出当前标签是否自闭合标签。

解析的方式很简单，我们知道，经过标签属性提取之后，那么剩下的字符串无非就两种，如下：

```
<!--非自闭合标签-->
></div>
```

或

```
<!--自闭合标签-->
/>
```

所以我们可以用剩下的字符串去切尔西开始标签结束符正则，如下：

```
const startTagClose = /^\s*(\/?)>/
let end = html.match(startTagClose)
'></div>'.match(startTagClose) // [">", "", index: 0, input: "></div>", groups: undefined]
'/>'.match(startTagClose) // ["/>", "/", index: 0, input: "/><div></div>", groups: undefined]
```

可以看到，非自闭合标签匹配结果中的`end[1]`为`""`，而自闭合标签匹配结果中的`end[1]`为`"/"`。所以根据匹配结果的`end[1]`是否是`""`我们即可判断出当前标签是否为自闭合标签，源码如下：

```
const startTagClose = /^\s*(\/?)>/
let end = html.match(startTagClose)
if (end) {
 match.unarySlash = end[1]
 advance(end[0].length)
 match.end = index
 return match
}
```

解析完毕后，就可以用解析得到的结果去调用`start`钩子函数去创建元素型的`AST`节点了。

`Vue`并没有直接去调`start`钩子函数去创建`AST`节点，而是调用了`handleStartTag`函数，在该函数内部才去调用的`start`钩子函数，这是因为虽然经过`parseStartTag`函数已经把创建`AST`节点必要信息提出来了，但是提取出来的标签属性数组还是需要处理一下。`handleStartTag`函数源码如下：

```
function handleStartTag (match) {
    const tagName = match.tagName
    const unarySlash = match.unarySlash

    if (expectHTML) {
      // ...
    }

    const unary = isUnaryTag(tagName) || !!unarySlash

    const l = match.attrs.length
    const attrs = new Array(l)
    for (let i = 0; i < l; i++) {
      const args = match.attrs[i]
      const value = args[3] || args[4] || args[5] || ''
      const shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs })
      lastTag = tagName
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end)
    }
  }

```

`handleStartTag`函数用来对`parseStartTag`函数的解析结果进行进一步处理，它接收`parseStartTag`函数的返回值作为参数。

`handleStartTag`函数的开始定义几个常量：

```
const tagName = match.tagName       // 开始标签的标签名
const unarySlash = match.unarySlash  // 是否为自闭合标签的标志，自闭合为"",非自闭合为"/"
const unary = isUnaryTag(tagName) || !!unarySlash  // 布尔值，标志是否为自闭合标签
const l = match.attrs.length    // match.attrs 数组的长度
const attrs = new Array(l)  // 一个与match.attrs数组长度相等的数组
```

接下来是循环处理提取出来的标签属性数组`match.attrs`，如下：

```
for (let i = 0; i < l; i++) {
    const args = match.attrs[i]
    const value = args[3] || args[4] || args[5] || ''
    const shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
    ? options.shouldDecodeNewlinesForHref
    : options.shouldDecodeNewlines
    attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
    }
}
```

首先定义了 `args` 常量，它是解析出来的标签属性数组中的每一个属性对象，即 `match.attrs` 数组中每个元素对象。 它长这样：

```
const args = ["class="a"", "class", "=", "a", undefined, undefined, index: 0, input: "class="a" id="b"></div>", groups: undefined]
```

接下来是循环处理提取出来的标签属性数组`match.attrs`，如下：

```
for (let i = 0; i < l; i++) {
    const args = match.attrs[i]
    const value = args[3] || args[4] || args[5] || ''
    const shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
    ? options.shouldDecodeNewlinesForHref
    : options.shouldDecodeNewlines
    attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
    }
}
```

首先定义了`args`常量，它是解析出来的标签属性数组中的每一个属性对象，即`match.attrs`数组中每个元素对象。 它长这样：

```
const args = ["class="a"", "class", "=", "a", undefined, undefined, index: 0, input: "class="a" id="b"></div>", groups: undefined]
```

接着定义了`value`，用于存储标签属性的属性值，我们可以看到，在代码中尝试取`args`的`args[3]`、`args[4]`、`args[5]`，如果都取不到，则给`value`复制为空

```
const value = args[3] || args[4] || args[5] || ''
```

接着定义了`shouldDecodeNewlines`，这个常量主要是做一些兼容性处理， 如果 `shouldDecodeNewlines` 为 `true`，意味着 `Vue` 在编译模板的时候，要对属性值中的换行符或制表符做兼容处理。而`shouldDecodeNewlinesForHref` 为 `true` 意味着 `Vue`在编译模板的时候，要对 `a` 标签的 `href` 属性值中的换行符或制表符做兼容处理。

```
const shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
    ? options.shouldDecodeNewlinesForHref
    : options.shouldDecodeNewlinesconst value = args[3] || args[4] || args[5] || ''
```

最后将处理好的结果存入之前定义好的与`match.attrs`数组长度相等的`attrs`数组中，如下：

```
attrs[i] = {
    name: args[1],    // 标签属性的属性名，如class
    value: decodeAttr(value, shouldDecodeNewlines) // 标签属性的属性值，如class对应的a
}
```

最后，如果该标签是非自闭合标签，则将标签推入栈中，如下：

```
if (!unary) {
    stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs })
    lastTag = tagName
}
```

如果该标签是自闭标签，现在就可以调用`start`钩子函数并传入处理好的参数来创建`AST`节点了，如下：

```
if (options.start) {
    options.start(tagName, attrs, unary, match.start, match.end)
}
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

如果模板字符串结束标签的特征，则会获得匹配结果数组；如果不合符，则得到 null。

接着再调用`end`钩子函数，如下：

```
if (endTagMatch) {
    const curIndex = index
    advance(endTagMatch[0].length)
    parseEndTag(endTagMatch[1], curIndex, index)
    continue
}
```

没有直接去调用 end 函数，而是调用了 parseEndTag 函数。

**解析文本**

在解析模板字符串之前，我们先查找一下第一个`<`出现在什么位置，如果第一个`<`在第一个位置，那么说明模板字符串是以其它 5 种类型开始的；如果第一个`<`不在第一个位置而在模板字符串中某个位置，那么说明模板字符串是以文本开头的，那么从开头到第一个`<`出现的位置就都是文本内容了；如果在整个模板字符串里面没有找到`<`，那说明整个模板字符串都是文本，源码如下：

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

如果`<` 不在第一个位置而在模板字符串间某个位置，那么说明模板字符串是以文本开头的，那么从开头到第一个`<`出现的位置就都是文本内容了，接着我们还要从第一个`<`的位置继续向后判断，因为还存在这样一种情况，那就是如果广西里面本来就包含一个`<`，例如`1<2</div>`。为了处理这种情况，我们把从第一个`<`的位置直到模板字符串结束都截取出来记作`rest`，如下：

```
let rest = html.slice(textEnd)
```

接着用`rest`去匹配以上 5 种类型的正则，如果都匹配不上，则表明这个`<`是属于文本本身的内容，如下：

```
while (
    !endTag.test(rest) &&
    !startTagOpen.test(rest) &&
    !comment.test(rest) &&
    !conditionalComment.test(rest)
) {

}
```

如果都匹配不上，则表明这个`<`是属于文本本身的内容，接着以这个`<`的位置继续向后查找，看是否还有`<`，如果没有了，则表示后面的都是文本；如果后面还有下一个`<`，那表明至少在这个`<`到下一个`<`中间的内容都是文本，至于下一个`<`以后的内容是什么，则还需要重复以上的逻辑继续判断。代码如下：

```
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
```

最后截取文本内容 `text` 并调用 4 个钩子函数中的 `chars` 函数创建文本型的`AST` 节点。

**如何保证 AST 节点层级关系**

`Vue`在`HTML`解析器的开头定义了一个栈`stack`，这个栈的作用就是用来维护`AST`节点层级的，`HTML`解析器在从前向后解析模板字符串时，每当遇到开始标签时就会调用`start`钩子函数，那么在`start`钩子函数内部我们可以将解析得到的开始标签推入栈中，而每当遇到结束标签时就会调用`end`钩子函数，那么我们也可以在`end`钩子函数内部将解析得到的结束标签所对应的开始标签从栈中弹出。

解析器`parseHTML`函数，函数定义如下：

```
function parseHTML(html, options) {
	var stack = [];
	var expectHTML = options.expectHTML;
	var isUnaryTag$$1 = options.isUnaryTag || no;
	var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
	var index = 0;
	var last, lastTag;

	// 开启一个 while 循环，循环结束的条件是 html 为空，即 html 被 parse 完毕
	while (html) {
		last = html;
		// 确保即将 parse 的内容不是在纯文本标签里 (script,style,textarea)
		if (!lastTag || !isPlainTextElement(lastTag)) {
		   let textEnd = html.indexOf('<')
              /**
               * 如果html字符串是以'<'开头,则有以下几种可能
               * 开始标签:<div>
               * 结束标签:</div>
               * 注释:<!-- 我是注释 -->
               * 条件注释:<!-- [if !IE] --> <!-- [endif] -->
               * DOCTYPE:<!DOCTYPE html>
               * 需要一一去匹配尝试
               */
            if (textEnd === 0) {
                // 解析是否是注释
        		if (comment.test(html)) {

                }
                // 解析是否是条件注释
                if (conditionalComment.test(html)) {

                }
                // 解析是否是DOCTYPE
                const doctypeMatch = html.match(doctype)
                if (doctypeMatch) {

                }
                // 解析是否是结束标签
                const endTagMatch = html.match(endTag)
                if (endTagMatch) {

                }
                // 匹配是否是开始标签
                const startTagMatch = parseStartTag()
                if (startTagMatch) {

                }
            }
            // 如果html字符串不是以'<'开头,则解析文本类型
            let text, rest, next
            if (textEnd >= 0) {

            }
            // 如果在html字符串中没有找到'<'，表示这一段html字符串都是纯文本
            if (textEnd < 0) {
                text = html
                html = ''
            }
            // 把截取出来的text转化成textAST
            if (options.chars && text) {
                options.chars(text)
            }
		} else {
			// 父元素为script、style、textarea时，其内部的内容全部当做纯文本处理
		}

		//将整个字符串作为文本对待
		if (html === last) {
			options.chars && options.chars(html);
			if (!stack.length && options.warn) {
				options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
			}
			break
		}
	}

	// Clean up any remaining tags
	parseEndTag();
	//parse 开始标签
	function parseStartTag() {

	}
	//处理 parseStartTag 的结果
	function handleStartTag(match) {

	}
	//parse 结束标签
	function parseEndTag(tagName, start, end) {

	}
}
```

上述代码中大致分为三部分：

- 定义的一些常量和变量
- while 循环
- 解析过程中用到的辅助函数

定义了几个常量，如下：

```
const stack = []       // 维护AST节点层级的栈
const expectHTML = options.expectHTML
const isUnaryTag = options.isUnaryTag || no
const canBeLeftOpenTag = options.canBeLeftOpenTag || no   //用来检测一个标签是否是可以省略闭合标签的非自闭合标签
let index = 0   //解析游标，标识当前从何处开始解析模板字符串
let last,   // 存储剩余还未解析的模板字符串
    lastTag  // 存储着位于 stack 栈顶的元素
```

接着开启 while 循环，循环的终止条件是 模板字符串 html 为空，即模板字符串被全部编译完毕。在每次 while 循环中， 先把 html 的值赋给变量 last，如`last = html`

这样做的目的是，如果经过上述所有处理逻辑处理过后，`html`字符串没有任何变化，即表示`html`字符串没有匹配上任何一条规则，那么就把`html`字符串当作纯文本对待，创建文本类型的`AST`节点并且如果抛出异常：模板字符串中标签格式有误。如下：

```
//将整个字符串作为文本对待
if (html === last) {
    options.chars && options.chars(html);
    if (!stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
    }
    break
}
```

接着，我们继续看`while`循环体内的代码：

```
while (html) {
  // 确保即将 parse 的内容不是在纯文本标签里 (script,style,textarea)
  if (!lastTag || !isPlainTextElement(lastTag)) {

  } else {
    // parse 的内容是在纯文本标签里 (script,style,textarea)
  }
}
```

在循环体内，首先判断了待解析的`html`字符串是否在纯文本标签里，如`script`，`style`，`textarea`，因为在这三个标签里的内容肯定不会有`HTML`标签，所以我们可直接当作文本处理，判断条件如下：

```
!lastTag || !isPlainTextElement(lastTag)
```

`lastTag`为栈顶元素，`!lastTag`即表示当前`html`字符串没有父节点，而`isPlainTextElement(lastTag)` 是检测 `lastTag` 是否为是那三个纯文本标签之一，是的话返回`true`，不是返回`fasle`

**parseEndTag 函数源码**

在解析结束标签时遗留的`parseEndTag`函数，该函数定义如下：

```
function parseEndTag (tagName, start, end) {
let pos, lowerCasedTagName
if (start == null) start = index
if (end == null) end = index

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase()
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (let i = stack.length - 1; i >= pos; i--) {
        if (process.env.NODE_ENV !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            `tag <${stack[i].tag}> has no matching end tag.`
          )
        }
        if (options.end) {
          options.end(stack[i].tag, start, end)
        }
      }

      // Remove the open elements from the stack
      stack.length = pos
      lastTag = pos && stack[pos - 1].tag
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end)
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end)
      }
      if (options.end) {
        options.end(tagName, start, end)
      }
    }

}
}

```

该函数接收三个参数，分别是结束标签名`tagName`、结束标签在`html`字符串中的起始和结束位置`start`和`end`。

这个三参数其实都是可选的，根据选参的不同其功能也不同。

- 第一种是三个参数都传递，用于处理普通的结束标签
- 第二种是只传递`tagName`
- 第三种是三参数都不传递，用于处理栈中剩余未处理的标签

如果`tagName`存在，那么就从后往前遍历栈，在栈中寻找与`tagName`相同的标签并记录其所在的位置`pos`，如果`tagName`不存在，则将`pos`置为 0。如下：

```
if (tagName) {
    for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break
        }
    }
} else {
    // If no tag name is provided, clean shop
    pos = 0
}
```

接着`pos>=0`时，开启一个`for`循环，从栈顶位置从后向前遍历直到`pos`处，如果发现`stack`栈中存在索引大于`pos`元素，那么该元素一定是缺少闭合标签的，这是因为在正常情况下，`stack`栈的栈顶元素应该和当前的结束标签`tagName`匹配，也就是说正常的`pos`应该是栈顶位置，后面不应该再有元素，如果后面还有元素，那么后面的元素就都缺少闭合标签那么这个时候如果是在非生产环境会抛出警告，告诉你缺少闭合标签。除此之外，还会调用`options.end(stack[i].tag, start, end)` 立即将其闭合，这是为了保证解析结果的正确性。

```
if (pos >= 0) {
	// Close all the open elements, up the stack
	for (var i = stack.length - 1; i >= pos; i--) {
		if (i > pos || !tagName ) {
			options.warn(
				("tag <" + (stack[i].tag) + "> has no matching end tag.")
			);
		}
		if (options.end) {
			options.end(stack[i].tag, start, end);
		}
	}

	// Remove the open elements from the stack
	stack.length = pos;
	lastTag = pos && stack[pos - 1].tag;
}
```

最后把`pos`位置以后的元素都从`stack`栈中弹出，以及把`lastTag`更新为栈顶元素

```
stack.length = pos;
lastTag = pos && stack[pos - 1].tag;
```

接着，如果`pos`没有大于等于 0，即当`tagName`没有在`stack`栈中找到对应的开始标签时，`pos`为-1。那么此时再判断`tagName`是否为`br`或`p`标签，为什么要单独判断这两个标签呢？这是因为在浏览器中如果我们写了如下`HTML`：

```
<div>
    </br>
    </p>
</div>
```

浏览器会自动把`</br>`标签解析为正常的`<br>`标签，而对于`</p>`浏览器则自动将其补全为`<p></p>`，所以 Vue 为了与浏览器对这两个标签的行为保持一致，故对这两个便签单独判断处理，如下：

```
if (lowerCasedTagName === 'br') {
    if (options.start) {
        options.start(tagName, [], true, start, end)  // 创建<br>AST节点
    }
}
// 补全p标签并创建AST节点
if (lowerCasedTagName === 'p') {
    if (options.start) {
        options.start(tagName, [], false, start, end)
    }
    if (options.end) {
        options.end(tagName, start, end)
    }
}
```

以上就是对结束标签的解析与处理。

另外，在`while`循环后面还有一行代码：

```
parseEndTag()
```

这行代码执行的时机是`html===last`，即`html`字符串中的标签格式有误时会跳出`while`循环，此时就会执行这行代码，这行代码是调用`parseEndTag`函数并不传递任何参数，如果`parseEndTag`函数不传递任何参数是用于处理栈中剩余未处理的标签。这是因为如果不传递任何函数，此时`parseEndTag`函数里的`pos`就为 0，那么`pos>=0`就会恒成立，那么就会逐个警告缺少闭合标签并调用`options.end`将其闭合。

**总结**

首先介绍了`HTML`解析器的工作流程，一句话概括就是：一边解析不同的内容一边调用对应的钩子对应的钩子函数生成对应的`AST`节点，最终完成将整个模板字符串转化成`AST`。

接着介绍了`HTML`解析器是如何解析用户所写的模板字符串中各种类型的内容的，把各种类型的解析方式都分别进行了介绍。

其次，介绍了在解析器内维护了一个栈，用来保证构建的`AST`节点层级与真正`DOM`层级一致。

#### 4.4 文本解析器

当`HTML`解析器解析到文本内容时会调用 4 个钩子函数中的`chars`函数来创建文本型的`AST`节点，并且也就说了在`chars`函数中会根据文本内容是否包含变量再细分为创建含有变量`AST`节点和不包含变量的`AST`节点，如下：

```
// 当解析到标签的文本时，触发chars
chars(text){
    if(res = parseText(text)){
       let element = {
           type: 2,
           expression: res.expression,
           tokens: res.tokens,
           text
       }
    } else {
       let element = {
           type: 3,
           text
       }
    }
}
```

创建含有变量的`AST`节点时节点的`type`属性为 2，并且相较于不包含变量的`AST`节点多了两个属性：`expression`和`tokens`。那么如何来判断文本里面是否包含变量以及多的那两个属性是什么呢？这就涉及到文本解析器了，当`Vue`用`HTML`解析器解析出文本时，再将解析出来的文本解析器，最后由文本解析器解析该段文本里面是否包含变量以及如果包含变量时再解析`expression`和`tokens`。

**结果分析**

从上面`chars`函数的代码中可以看到，把`HTML`解析器解析得到的文本内容`text`传给文本解析器`parseText`函数，根据`parseText`函数是否有返回值判断该文本是否包含变量，以及从返回值中取需要的`expression`和`tokens`。

假设现有由 `HTML` 解析器解析得到的文本内容如下：

```
let text = "我叫{{name}}，我今年{{age}}岁了"
```

经过文本解析器解析后得到：

```
let res = parseText(text)
res = {
    expression:"我叫"+_s(name)+"，我今年"+_s(age)+"岁了",
    tokens:[
        "我叫",
        {'@binding': name },
        "，我今年"
        {'@binding': age },
    	"岁了"
    ]
}
```

从上面的结果中我们看到到，`expression`属性就是把广西中的变量和非变量提出来，然后把变量用`_s()`包裹，最后按照文本里的顺序把它们用`+`连接起来。而`tokens`是个数组，数组内容也是文本中的变量和非变量，不一样的是把变量构造成`{'@binding': xxx}`。

这主要是为了给后面代码生成阶段的生成`render`函数时用的。

文本解析器内部就干了三件事：

- 判断传入的文本是否包含变量
- 构造 expression
- 构造 tokens

**源码分析**

文本解析器的源码位于`src/compiler/parser/text-parsre.js`中，代码如下：

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
/\*\*

- let lastIndex = tagRE.lastIndex = 0
- 上面这行代码等同于下面这两行代码:
- tagRE.lastIndex = 0
- let lastIndex = tagRE.lastIndex
  \*/
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
    // 取出'{{ }}'中间的变量 exp
  const exp = parseFilters(match[1].trim())
  // 把变量 exp 改成\_s(exp)形式也放入 tokens 中
  tokens.push(`_s(${exp})`)
  rawTokens.push({ '@binding': exp })
  // 设置 lastIndex 以保证下一轮循环时，只从'}}'后面再开始匹配正则
  lastIndex = index + match[0].length
  }
  // 当剩下的 text 不再被正则匹配上时，表示所有变量已经处理完毕
  // 此时如果 lastIndex < text.length，表示在最后一个变量后面还有文本
  // 最后将后面的文本再加入到 tokens 中
  if (lastIndex < text.length) {
  rawTokens.push(tokenValue = text.slice(lastIndex))
  tokens.push(JSON.stringify(tokenValue))
  }

// 最后把数组 tokens 中的所有元素用'+'拼接起来
return {
expression: tokens.join('+'),
tokens: rawTokens
}
}

```

我们看到，除开我们自己加的注释，代码其实不复杂，我们逐行分析。

`parseText`函数接收两个参数，一个是传入的待解析的文本内容`text`，一个包裹变量的符号`delimiters`。第一个参数好理解，那第二个参数是干什么的呢？

```
const tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE
```

函数体内首先定义了变量`tagRE`，表示一个正则表达式。这个正则表达式是用来检查广西是否包含变量的。我们知道，通常我们在模板中写变量时是这样写的：hello。这里用`{{}}`包裹的内容就是变量。所以我们就知道，`tagRE`是用来检测文本内是否有`{{}}`。而 `tagRE` 又是可变的，它是根据是否传入了 `delimiters` 参数从而又不同的值，也就是说如果没有传入 `delimiters` 参数，则是检测文本是否包含`{{}}`，如果传入了值，就会检测文本是否包含传入的值。换句话说在开发 Vue 项目中，用户可以自定义文本内包含变量所使用的符号，例如你可以使用`%`包裹变量如：`hello %name%`。

接下来用`tagRE`去匹配传入的文本内容，判断是否包含变量，若不包含，则直接返回，如下：

```
if (!tagRE.test(text)) {
    return
}
```

如果包含变量，那就继续往下看：

```
const tokens = []
const rawTokens = []
let lastIndex = tagRE.lastIndex = 0
let match, index, tokenValue
while ((match = tagRE.exec(text))) {

}
```

接下来会开启一个`while`循环，循环结束条件是`tagRE.exec(text)`的结果`match`是否为`null`，`exec()`方法是在一个字符串中执行切匹配检索，如果它没有找到任何切尔西就返回`null`，但如果它找到了一个匹配就返回一个数组，例如：

```
tagRE.exec("hello {{name}}，I am {{age}}")
//返回：["{{name}}", "name", index: 6, input: "hello {{name}}，I am {{age}}", groups: undefined]
tagRE.exec("hello")
//返回：null
```

当匹配上时，匹配结果的第一个元素是字符串中第一个完整的带有包裹的变量，第二个元素是第一个被包裹的变量名，第三个元素是第一个变量字符串中的起始位置。

接着往下循环体内：

```
while ((match = tagRE.exec(text))) {
    index = match.index
    if (index > lastIndex) {
      // 先把'{{'前面的文本放入tokens中
      rawTokens.push(tokenValue = text.slice(lastIndex, index))
      tokens.push(JSON.stringify(tokenValue))
    }
    // tag token
    // 取出'{{ }}'中间的变量exp
    const exp = match[1].trim()
    // 把变量exp改成_s(exp)形式也放入tokens中
    tokens.push(`_s(${exp})`)
    rawTokens.push({ '@binding': exp })
    // 设置lastIndex 以保证下一轮循环时，只从'}}'后面再开始匹配正则
    lastIndex = index + match[0].length
  }
```

首先取得字符串中第一个变量在字符串中的起始位置赋给`index`，然后比较`index`和`lastIndex`的大小，此时你可能有疑问了，这个`lastIndex`是什么呢？在上面定义变量中，定义了 `let lastIndex = tagRE.lastIndex = 0`,所以 `lastIndex` 就是 `tagRE.lastIndex`，而 `tagRE.lastIndex` 又是什么呢？当调用 `exec( )`的正则表达式对象具有修饰符 `g` 时，它将把当前正则表达式对象的 `lastIndex` 属性设置为紧挨着匹配子串的字符位置，当同一个正则表达式第二次调用 `exec( )`，它会将从 `lastIndex` 属性所指示的字符串处开始检索，如果 `exec( )`没有发现任何匹配结果，它会将 `lastIndex` 重置为 0。示例如下：

```
const tagRE = /\{\{((?:.|\n)+?)\}\}/g
tagRE.exec("hello {{name}}，I am {{age}}")
tagRE.lastIndex   // 14
```

`tagRE.lastIndex`就是第一个包裹变量最后一个`}`所在字符串中的位置。`lastIndex` 初始值为 0。

当`index>lastIndex`时，表示变量前面有纯文本，那么就把这段纯文本截取出来，存入`rawTokens`中，同时再调用`JSON.stringify`给这段文本包裹上双引号，存入`tokens`中，如下：

```
if (index > lastIndex) {
    // 先把'{{'前面的文本放入tokens中
    rawTokens.push(tokenValue = text.slice(lastIndex, index))
    tokens.push(JSON.stringify(tokenValue))
}
```

如果`index`不大于`lastIndex`，那说明`index`也为 0，即该文本一开始就是变量，例如：`hello`。那么此时变量前面没有纯文本，那就不用截取，直接取出匹配结果的第一个元素变量名，将其用`_s()`包裹存入`tokens`中，同时再把变量名构造成`{'@binding': exp}`存入 `rawTokens`中，如下：

```
// 取出'{{ }}'中间的变量exp
const exp = match[1].trim()
// 把变量exp改成_s(exp)形式也放入tokens中
tokens.push(`_s(${exp})`)
rawTokens.push({ '@binding': exp })
```

接着，更新 `lastIndex` 以保证下一轮循环时，只从`}}`后面再开始匹配正则，如下：

```
lastIndex = index + match[0].length
```

接着，当`while`循环完毕时，表明文本中所有变量已经被解析完毕，如果此时`lastIndex < text.length`，那就说明最后一个变量的后面还有纯文本，那就将其再存入`tokens`和`rawTokens`中，如下：

```
// 当剩下的text不再被正则匹配上时，表示所有变量已经处理完毕
// 此时如果lastIndex < text.length，表示在最后一个变量后面还有文本
// 最后将后面的文本再加入到tokens中
if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex))
    tokens.push(JSON.stringify(tokenValue))
}
```

最后，把`tokens`数组里的元素用`+`连接，和`rawTokens`一并返回，如下：

```
return {
    expression: tokens.join('+'),
    tokens: rawTokens
}
```

**总结**

文本解析器的作用就是将`HTML`解析器解析得到的文本内容进行二次解析，解析文本内容中是否包含变量，如果包含变量，则将变量提取出进行加工，为后续生产`render`函数做准备。

#### 4.5 优化阶段

模板编译的最终目的是用模板生成一个`render`函数，而用`render`函数就可以生成与模板对应的`VNode`，之后再进行`patch`算法，最后完成视图渲染。这中间的`patch`算法又是用来对比新旧`VNode`之间存在的差异。静态节点不管状态怎么变化它是不会变的，基于此，在`patch`过程中不用去对比这些静态节点了。

我们在模板编译的时候就先找出模板中所有的静态节点和静态根节点，然后给它们打上标记，用于告诉后面`patch`过程打了标记的这些节点是不需要对比的，你只要把它们克隆一份去用就好啦。这就是优化阶段存在的意义。

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

从`AST`中找出所有静态节点并标记其实不难，我们只需从根节点开始，先标记点是否静态节点，然后看根节点如果是元素节点，那么就向下递归它的子节点，子节点如果还有子节点那就继续向下递归，直到标记完所有节点。代码如下：

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
if (node.type === 2) { // 包含变量的动态文本节点
return false
}
if (node.type === 3) { // 不包含变量的纯文本节点
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

在判断一个节点是否为静态节点时首先会根据`type`值

```

```

如果`type`值为 2，

```
if (node.type === 3) { // 不包含变量的纯文本节点
    return true
}
```

如果`type`值为 1

```
node.pre ||
(
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
)
```

如果元素节点是静态节点，那就必须满足以下几点要求：

- 如果节点使用`v-pre`指令，那就断定它是静态节点；
- 如果节点没有使用`v-pre`指令，那它要成为静态节点必须满足：
  - 不能使用动态绑定语法，即标签上不能有`v-`、`@`、`:`开头的属性；
  - 不能使用`v-if`、`v-else`、`v-for` 指令；
  - 不能是内置组件，即标签名不能是`slot`和`component`;
  - 标签名必须是平台保留标签，即不能是组件；
  - 当前节点的父节点不能是带有`v-for`和`template`标签；
  - 节点的所有属性的`key`都必须是静态节点才有的`key`，注：静态节点的`key`是有限的，它只能是`type`、`tag`、`attrsList`、`attrsMap`、`plain`、`parent`、`children`、`attrs`之一；

标记完当前节点是否为静态节点之后，如果该节点是元素节点，那么还要继续去递归判断它的子节点，如下：

```
for (let i = 0, l = node.children.length; i < l; i++) {
    const child = node.children[i]
    markStatic(child)
    if (!child.static) {
    node.static = false
    }
}
```

新增了一个判断：

```
if (!child.static) {
    node.static = false
}
```

如果当前节点的子节点有一个不是静态节点，那就把当前节点也标记为非静态节点。我们在判断的时候是从上往下判断的，也就是说先判断当前节点，再判断当前节点的子节点，如果当前在一开始被标记为了静态节点，但是通过判断子节点的时候发现有一个子节点却不是静态节点，这就有问题了，我们之前说过一旦标记为静态节点，就说明这个节点首次渲染之后不会再发生任何变化，但是它的一个子节点却又是可以变化的，就出现了自相矛盾，所以我们需要当发现它的子节点中有一个不是静态节点的时候，就得把当前节点重新设置为非静态节点。

循环`node.children`后还不算把所有子节点都遍历完，因为如果当前节点的子节点中有标签带有`v-if`、`v-else-if`、`v-else`等指令时，这些子节点在每次渲染时都只渲染一个，所以其余没有被渲染的肯定不在`node.children`中，而是存在于`node.ifConditions`，所以我们还要把`node.ifConditions`循环一遍，如下：

```
if (node.ifConditions) {
    for (let i = 1, l = node.ifConditions.length; i < l; i++) {
        const block = node.ifConditions[i].block
        markStatic(block)
        if (!block.static) {
            node.static = false
        }
    }
}
```

同理，如果当前节点的`node.ifConditions`中有一个子节点不是静态节点也要将当前节点设置为非静态节点。

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

`markStaticRoots`第二个参数是`isInFor`，对于已经是`static`的节点或者是`v-once`指令的节点，`node.staicInFor = isInFor`，如下：

```
if (node.static || node.once) {
    node.staticInFor = isInFor
}
```

接着判断该节点是否为静态根节点，如下：

```
if (node.static && node.children.length && !(
    node.children.length === 1 &&
    node.children[0].type === 3
)) {
    node.staticRoot = true
    return
} else {
    node.staticRoot = false
}
```

一个节点要想成为表态根节点，它必须满足以下要求：

- 节点本身必须是静态节点；
- 必须拥有子节点`children`；
- 子节点不能只是只有一个

否则的话，对它的优化成本将大于优化后带来的收益。

如果当前节点不是静态根节点，那就继续递归遍历它的子节点`node.children和node.ifConditions`，如下：

```
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
```

**总结**

首先，介绍了为什么要有优化阶段，是为了提高虚拟`DOM`中`patch`过程的性能。在优化阶段将所有表态节点都打上标记，这样在`patch`过程中就可以跳过对比这些节点。

接着，介绍了优化阶段主要干了两件事件，分别是从构建出的`AST`中找出并标记所有静态节点和所有表态根节点。

#### 4.6 代码生成阶段

`Vue`实例在挂载的时候会调用其自身的`render`函数来生成实例上的`template`选项所对应的`VNode`，简单的来说就是`Vue`只要调用了`render`函数，就可以把模板转换成对应的虚拟`DOM`。那么`Vue`要想调用`render`函数，那必须先有这个`render`函数，那这个`render`函数又是从哪来的呢？是用户手写的还是`Vue`自己生成的？答案是都有可能。我们在日常开发中是可以在`Vue`组件选项中手写一个`render`选项，其值对应一个函数，那这个函数就是`render`函数，当用户手写了`render`函数时，那么`Vue`在挂载该组件的时候就会调用用户手写的这个`render`函数。那如果用户没有写呢？那这个时候`Vue`就要自己根据模板内容生成一个`render`函数供组件挂载的时候调用。

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

生成元素节点的`render`函数就是生成一个`_c()`函数调用的字符串，上文提到了`_c()`函数接收三个参数，分别是节点的标签名`tagName`，节点属性`data`，节点的子节点列表`children`。我们只需将这三部分都填进去即可。

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

源码中`genData`虽然很长，但是其逻辑非常简单，就是在拼接字符串,先给`data`赋值为一个`{`，然后判断存在哪些属性数据，就将这些数据拼接到`data`中，最后再加一个`}`，最终得到节点全部属性`data`。

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

文本型的`VNode`可以调用`_v(text)`函数来创建，所以生成文本节点的`render`函数就是生成一个`_v(text)`函数调用的字符串。`_v()`函数接收文本内容作为参数，如果文本是动态文本，则使用动态文本`AST`节点的`expression`属性，如果是纯静态文本，则使用`text`属性，其生成代码如下：

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

**总结**

首先，介绍了为什么要有代码生成阶段以及代码生成阶段主要干什么。我们知道了，代码生成其实就是根据模板对应的抽象语法树`AST`生成一个函数供组件挂载时调用，通过调用这个函数就可以得到模板对应的虚拟`DOM`。

接着，我们通过一个简单的模板演示了把模板经过递归遍历最后生成`render`函数的过程。

最后，我们回归源码，通过分析源码了解了生成`render`函数的具体实现过程。

#### 4.7 整体流程

模板编译就是把模板转化成供`Vue`实例在挂载时可以调用的`render`函数。那么我们就从`Vue`实例挂载时入手，一步一步从后往前推。`Vue`实例在挂载时会调用全局实例方法——`$mount`方法。`$mount`方法，如下：

```
Vue.prototype.$mount = function(el) {
  const options = this.$options;
  // 如果用户没有手写render函数
  if (!options.render) {
    // 获取模板，先尝试获取内部模板，如果获取不到则获取外部模板
    let template = options.template;
    if (template) {
    } else {
      template = getOuterHTML(el);
    }
    const { render, staticRenderFns } = compileToFunctions(
      template,
      {
        shouldDecodeNewlines,
        shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      },
      this
    );
    options.render = render;
    options.staticRenderFns = staticRenderFns;
  }
};
```

首先从`Vue`实例的属性选项中获取`render`选项，如果没有获取到，说明用户没有手写`render`函数，那么此时，需要`Vue`自己将模板转化成`render`函数。接着获取模板，先尝试获取内部模板，如果获取不到则获取外部模板。最后，调用`compileToFunctions`函数将模板转化成 `render` 函数，再将 `render` 函数赋值给 `options.render`。

核心部分是调用 `compileToFunctions` 函数生成 `render` 函数的部分，如下：

```
const { render, staticRenderFns } = compileToFunctions(
  template,
  {
    shouldDecodeNewlines,
    shouldDecodeNewlinesForHref,
    delimiters: options.delimiters,
    comments: options.comments
  },
  this
);
```

将模板`template`传给`compileToFunctions`函数就可以得到`render`函数，那这个`compileToFunctions`函数是怎么来的呢？

通过代码跳转发现`compileToFunctions`函数的出处如下：

```
const { compile, compileToFunctions } = createCompiler(baseOptions);
```

`compileToFunctions`函数是`createCompiler`函数的返回值对象中的其中一个，`createCompiler`函数顾名思义他的作用就是创建一个编译器。

`createCompiler`函数出处位于源码的`src/complier/index.js`文件中，如下：

```
export const createCompiler = createCompilerCreator(function baseCompile(
  template: string,
  options: CompilerOptions
): CompiledResult {
  // 模板解析阶段：用正则等方式解析 template 模板中的指令、class、style等数据，形成AST
  const ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    // 优化阶段：遍历AST，找出其中的静态节点，并打上标记；
    optimize(ast, options);
  }
  // 代码生成阶段：将AST转换成渲染函数；
  const code = generate(ast, options);
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  };
});
```

`createCompiler`函数是又调用`createCompilerCreator`函数返回得到的，`createCompilerCreator`函数接收一个`baseCompile`函数作为参数。这个`baseCompile`函数，这个函数就是我们据说的模板编译三大阶段的主函数。这个函数传给`createCompilerCreator`函数就可以得到`createCompiler`函数，那么我们再往前推，看一下`createCompilerCreator`函数又是怎么定义的。

`createCompilerCreator`函数的定义位于源码的`src/complier/create-compiler.js`文件中，如下：

```
export function createCompilerCreator(baseCompile) {
  return function createCompiler(baseOptions) {};
}
```

调用`createCompilerCreator`函数会返回`createCompiler`函数，可以看到`createCompiler`函数的定义，如下：

```
function createCompiler(baseOptions) {
  function compile() {}
  return {
    compile,
    compileToFunctions: createCompileToFunctionFn(compile)
  };
}
```

在`createCompiler`函数的内部定义了一个子函数`compile`，同时返回一个对象，其中这个对象的第二个属性就是我们在开头看到的`compileToFunctions`，其值对应的是`createCompileToFunctionFn(compile)`函数的返回值。

`createCompileToFunctionFn(compile)`函数的出处位于源码的`src/complier/to-function.js`文件中，如下：

```
export function createCompileToFunctionFn(compile) {
  return function compileToFunctions() {
    // compile
    const res = {};
    const compiled = compile(template, options);
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(code => {
      return createFunction(code, fnGenErrors);
    });
    return res;
  };
}

function createFunction(code, errors) {
  try {
    return new Function(code);
  } catch (err) {
    errors.push({ err, code });
    return noop;
  }
}
```

调用`createCompileToFunctionFn`函数就可以得到

`compileToFunctions`函数内部会调用传入的`compile`函数，而这个`compile`函数是`createCompiler`函数内部定义的子函数，如下：

```
function compile(template, options) {
  const compiled = baseCompile(template, finalOptions);
  compiled.errors = errors;
  compiled.tips = tips;
  return compiled;
}
```

在`compile`函数内部又会调用传入的`baseCompile`函数，而这个`baseCompile`函数就是我们所说的模板编译三大阶段的主线函数，如下：

```
function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  // 模板解析阶段：用正则等方式解析 template 模板中的指令、class、style等数据，形成AST
  const ast = parse(template.trim(), options)
  if (options.optimize !== false) {
    // 优化阶段：遍历AST，找出其中的静态节点，并打上标记；
    optimize(ast, options)
  }
  // 代码生成阶段：将AST转换成渲染函数；
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
```

最开始调用的`compileToFunctions`函数内部调用了`compile`函数，在`compile`函数内部又调用了`baseCompile`函数，而`baseCompile`函数返回的是代码生成阶段生成好的`render` 函数字符串。所以在`compileToFunctions`函数内部调用`compile`函数就可以拿到生成好的`render`函数字符串，然后在`compileToFunctions`函数内部将`render`函数字符串传给`createFunction`函数从而变成真正的`render`函数返回出去，最后将其赋值给`options.render`。画出其上述过程的流程图。如下：

![images](vue18.jpg)

模板编译的整体流程。

**整体导图**

![images](vue19.jpg)

### 五、生命周期篇

- [初始化阶段](#_5-1-初始化阶段)
- [模板编译阶段](#_5-2-模板编译阶段)
- [挂载阶段](#_5-3-挂载阶段)
- [销毁阶段](#_5-4-销毁阶段)

`Vue`实例的生命周期大致可分为 4 个阶段：

- 初始化阶段：为`Vue`实例上初始化一些属性，事件以及响应式数据；
- 模板编译阶段：将模板编译成渲染函数；
- 挂载阶段：将实例挂载到指定的`DOM`上，即将模板渲染到真实`DOM`中；
- 销毁阶段：将实例自身从父组件中删除，并取消依赖追踪及事件监听器；

#### 5.1 初始化阶段

- `new Vue`
- `initLifecycle`
- `initEvents`
- `initInjections`
- `initState`

**new Vue 都干了什么**

初始化阶段所做的第一件事就是`new Vue()`创建一个`Vue`实例，那么`new Vue()`的内部都干了什么呢？我们知道，`new`关键字在`JS`中表示从一个类中实例化出一个对象来，由此可见，`Vue`实际上是一个类。所以`new Vue()`实际上是执行了`Vue`类的构造函数，`Vue`类的定义是在源码的`src/core/instance/index.js`中，如下：

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

调用原型上的`_init(options)`方法并把用户所写的选项`options`传入。在`Vue`类定义的下面还有几行代码，其中之一就是：

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

在`initMixin`函数内部就只干了一件事，那就是给`Vue`类的原型上绑定`_init`方法，同时`_init` 方法的定义也在该函数内部。`new Vue()` 会执行`Vue`类的构造函数，构造函数内部会执行`_init`方法，所以`new Vue()`所干的事情其实就是`_init`方法所干的事情。

首先，把`Vue`实例赋值给变量`vm`，并且把用户传递的`options`选项与当前构造函数的`options`属性及其父级构造函数的`options`属性进行合并，得到一个新的`options`选项赋值给\$options 属性，并将`$options`属性挂载到`Vue`实例上，如下：

```
vm.$options = mergeOptions(
    resolveConstructorOptions(vm.constructor),
    options || {},
    vm
)
```

接着，通过调用一些初始化函数来为`Vue`实例初始化一些属性，事件，响应式数据等，如下：

```
initLifecycle(vm)       // 初始化生命周期
initEvents(vm)        // 初始化事件
initRender(vm)         // 初始化渲染
callHook(vm, 'beforeCreate')  // 调用生命周期钩子函数
initInjections(vm)   //初始化injections
initState(vm)    // 初始化props,methods,data,computed,watch
initProvide(vm) // 初始化 provide
callHook(vm, 'created')  // 调用生命周期钩子函数
```

可以看到，除了调用初始化函数来进行相关数据的初始化之外，还在合适的时机调用了`callHook`函数来触发生命周期的钩子，关于`callHook`函数是如何触发生命周期的钩子会在下面介绍，我们先继续往下看：

```
if (vm.$options.el) {
    vm.$mount(vm.$options.el)
}
```

在所有的初始化工作都完成以后，最后，会判断用户是否传入了`el`选项，如果传入了则调用`$mount`函数进入模板编译与挂载阶段，如果没有传入 el 选项，则不进入下一个生命周期阶段，需要用户手动执行`vm.$mount`方法才进入下一个生命周期阶段。

以上就是`new Vue()`所做的所有事情，可以看到，整个初始化阶段都是在`new Vue()`里完成的，关于`new Vue()`里调用的一些初始化函数具体是如何进行初始化的，我们将在接下来的几篇文章里逐一介绍。下面我们先来看看上文中遗留的属性合并及`callHook`函数是如何触发生命周期的钩子的问题。

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

接着再遍历`child`，把存在于`child`里但又不在`parent`中的属性继续调用`mergeField`函数合并到空对象`options`里。

```
for (key in child) {
    if (!hasOwn(parent, key)) {
        mergeField(key)
    }
}
```

`options`就是最终合并后得到的结果，将其返回。

值得一提的是`mergeField`函数，它不是简单的把属性从一个对象里复制到另外一个对象里，而是根据被合并的不同的选项有着不同的合并策略。

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

它的合并策略是这样子的：如果`childVal`不存在，就返回`parentVal`；否则再判断是否存在`parentVal`，如果存在就把`childVal` 添加到 `parentVal` 后返回新数组；否则返回 `childVal` 的数组。所以回到 `mergeOptions` 函数，一旦 `parent`和 `child` 都定义了相同的钩子函数，那么它们会把 2 个钩子函数合并成一个数组。

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

可以看到，`callHook`函数逻辑非常简单。首先从实例的`$options`中获取到需要触发的钩子名称所对应的钩子函数数组`handlers`，每个生命周期钩子名称都对应一个钩子函数数组。然后遍历该数组，将数组中的每个钩子函数都执行一遍。

**总结**

首先，分析了`new Vue()`时其内部都干了些什么。其主要逻辑就是：合并配置，调用一些初始化函数，触发生命周期钩子函数，调用`$mount`开启下一个阶段。

接着，就合并属性进行了详细介绍，知道了对于不同的选项有着不同的合并策略，并挑出钩子函数的合并特事特办进行了分析。

最后，分析了`callHook`函数的源码，知道了`callHook`函数如何触发钩子函数的。

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

`initLifecycle`函数主要是给`Vue`实例上挂载了一 hxxf 属性并设置了默认值，值得一提的是挂载`$parent`属性和`$root`属性。

首先给实例上挂载`$parent`属性，代码如下：

```
let parent = options.parent
if (parent && !options.abstract) {
  while (parent.$options.abstract && parent.$parent) {
    parent = parent.$parent
  }
  parent.$children.push(vm)
}

vm.$parent = parent
```

如果当前组件不是抽象组件并且存在父级，那么就通过`while`循环来向上循环，如果当前组件的父级是抽象组件并且也存在父级，那那就继续向上查找当前组件父级的父级，直到找到第一个不是抽象类型的父级时，将其赋值`vm.$parent`，同时把该实例自身添加进找到的父级的`$children`属性中。这样就确保了在子组件的`$parent`属性上能访问到父组件实例，在父组件的`$children`属性上也能访问子组件的实例。

```
vm.$root = parent ? parent.$root : vm
```

实例的`$root`属性表示当前实例的根实例，挂载该属性时，首先会判断如果当前实例存在父级，那么当前实例的根实例`$root`属性就是其父级的根实例`$root`属性，如果不存在，那么根实例`$root`属性就是它自己。这很好理解，举个例子：假如有一个人，他如果有父亲，那么他父亲的祖先肯定也是他的祖先，同理，他的儿子的祖先也肯定是他的祖先，我们不需要真正的一层一层的向上递归查找到他祖先本人，只需要知道他父亲的祖先是谁然后告诉他即可。如果他没有父亲，那说明他自己就是祖先，那么他后面的儿子、孙子的`$root`属性就是他自己了。

这就是一个自上到下将根实例的`$root`属性依次传递给每一个子实例的过程。

最后，再初始化了一些其它属性，因为都是简单的赋初始值，这里就不再一一介绍，等后面内容涉及到的时候再介绍。

```
vm.$children = []
vm.$refs = {}

vm._watcher = null
vm._inactive = null
vm._directInactive = false
vm._isMounted = false
vm._isDestroyed = false
vm._isBeingDestroyed = false
```

**总结**

`initLifecycle`函数，就是给实例初始化了一些属性，包括以`$`开头的供用户使用的外部属性，也包括以`_`开头的供内部使用的内部属性。

**解析事件**

在`Vue`中，当我们在父组件中使用子组件时可以给子组件上注册一些事件，这些事件包括使用`v-on`或`@`注册的自定义事件，也包括注册的浏览器原生事件，如下：

```
<child @select="selectHandler" @click.native="clickHandler"></child>
```

上面代码，我们先从解析事件开始说起，当遇到开始标签的时候，除了会解析开始标签，还会调用`processAttrs`方法解析标签中的属性，`processAttrs`方法位于源码的`src/compiler/parser/index.js`中，如下：

```
export const onRE = /^@|^v-on:/
export const dirRE = /^v-|^@|^:/

function processAttrs (el) {
  const list = el.attrsList
  let i, l, name, value, modifiers
  for (i = 0, l = list.length; i < l; i++) {
    name  = list[i].name
    value = list[i].value
    if (dirRE.test(name)) {
      // 解析修饰符
      modifiers = parseModifiers(name)
      if (modifiers) {
        name = name.replace(modifierRE, '')
      }
      if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '')
        addHandler(el, name, value, modifiers, false, warn)
      }
    }
  }
}

```

在对标签属性进行解析时，判断如果属性是指令，首先通过`parseModifiers`解析出属性的修饰符，然后判断如果是事件的指令，则执行`addHandler(el, name, value, modifiers, false, warn)`方法，该方法在`src/compiler/helpers.js`中，如下：

```
export function addHandler (el,name,value,modifiers) {
  modifiers = modifiers || emptyObject

  // check capture modifier 判断是否有capture修饰符
  if (modifiers.capture) {
    delete modifiers.capture
    name = '!' + name // 给事件名前加'!'用以标记capture修饰符
  }
  // 判断是否有once修饰符
  if (modifiers.once) {
    delete modifiers.once
    name = '~' + name // 给事件名前加'~'用以标记once修饰符
  }
  // 判断是否有passive修饰符
  if (modifiers.passive) {
    delete modifiers.passive
    name = '&' + name // 给事件名前加'&'用以标记passive修饰符
  }

  let events
  if (modifiers.native) {
    delete modifiers.native
    events = el.nativeEvents || (el.nativeEvents = {})
  } else {
    events = el.events || (el.events = {})
  }

  const newHandler: any = {
    value: value.trim()
  }
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers
  }

  const handlers = events[name]
  if (Array.isArray(handlers)) {
    handlers.push(newHandler)
  } else if (handlers) {
    events[name] = [handlers, newHandler]
  } else {
    events[name] = newHandler
  }

  el.plain = false
}
```

在`addHandler`函数里做了 3 件事件，首先根据`modifier`修饰符对事件名`name`做处理，接着根据`modifier.native`判断事件是一件浏览器原生事件还是自定义事件，分别对应`el.nativeEvents`和`el.events`，最后按照`name`对事件做归类，并把回调函数的字符串保留到对应的事件中。

父组件的`child` 节点生成的 `el.events` 和 `el.nativeEvents` 如下：

```
el.events = {
  select: {
    value: 'selectHandler'
  }
}

el.nativeEvents = {
  click: {
    value: 'clickHandler'
  }
}
```

然后在模板编译的代码生成阶段，会在`genData`函数中根据`AST`元素节点上的`events`和`naitveEvents`生成`_c(tagName,data,children)`函数中所需要的`data`数据，它的定义在 `src/compiler/codegen/index.js` 中：

```
export function genData (el state) {
  let data = '{'
  // ...
  if (el.events) {
    data += `${genHandlers(el.events, false,state.warn)},`
  }
  if (el.nativeEvents) {
    data += `${genHandlers(el.nativeEvents, true, state.warn)},`
  }
  // ...
  return data
}
```

生成的`data`数据如下：

```
{
  // ...
  on: {"select": selectHandler},
  nativeOn: {"click": function($event) {
      return clickHandler($event)
    }
  }
  // ...
}
```

最开始的模板中标签上注册的事件最终会被解析成用于创建元素型`VNode`的`_c(tagName,data,children)`函数中`data`数据中的两个对象，自定义事件对象`on`，浏览器原生事件`nativeOn`。

模板编译的最终目的是创建`render`函数供挂载的时候调用生成虚拟`DOM`，那么在挂载阶段，如果被挂载的节点是一个组件节点，则通过`createComponent`函数创建一个组件`vnode`，该函数位于源码的 `src/core/vdom/create-component.js` 中， 如下：

```
export function createComponent (
  Ctor: Class<Component> | Function | Object | void,
  data: ?VNodeData,
  context: Component,
  children: ?Array<VNode>,
  tag?: string
): VNode | Array<VNode> | void {
  // ...
  const listeners = data.on

  data.on = data.nativeOn

  // ...
  const name = Ctor.options.name || tag
  const vnode = new VNode(
    `vue-component-${Ctor.cid}${name ? `-${name}` : ''}`,
    data, undefined, undefined, undefined, context,
    { Ctor, propsData, listeners, tag, children },
    asyncFactory
  )

  return vnode
}
```

把自定义事件`data.on`赋值给了`listeners`，把浏览器原生事件`data.nativeOn`赋值给了`data.on`，这说明所有的原生浏览器事件处理是在当前父组件环境中处理的。而对于自定义事件，会把`listeners` 作为`vnode` 的 `componentOptions` 传入，放在子组件初始化阶段中处理， 在子组件的初始化的时候， 拿到了父组件传入的`listeners`，然后在执行 `initEvents` 的过程中，会处理这个 `listeners`。

父组件给子组件的注册事件中，把自定义事件传给子组件，在子组件实例化的时候进行初始化；而

换句话说：实例初始化阶段调用的初始化事件函数 initEvents 实际上初始化的是父组件在模板中使用`v-on` 或`@`注册的监听子组件内触发的事件

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

`initEvents`函数首先在`vm`上新增`_events`属性并将其赋值为空对象，用来存储事件。

```
vm._events = Object.create(null)
```

接着，获取父组件注册的事件赋给`listeners`，如果`listeners`不为空，则调用`updateComponentListeners`函数，将父组件向子组件注册的事件到子组件的实例中，如下：

```
const listeners = vm.$options._parentListeners
if (listeners) {
  updateComponentListeners(vm, listeners)
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

可以看到，`updateComponentListeners`其实也没有干什么，只是调用了`updateListeners`函数并把`listeners`以及`add`和`remove`这两个函数传入，`updateListeners`函数位于源码的`src/vdom/helpers/update-listeners.js`中，如下：

```
export function updateListeners (
  on: Object,
  oldOn: Object,
  add: Function,
  remove: Function,
  vm: Component
) {
  let name, def, cur, old, event
  for (name in on) {
    def = cur = on[name]
    old = oldOn[name]
    event = normalizeEvent(name)
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        `Invalid handler for event "${event.name}": got ` + String(cur),
        vm
      )
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur)
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params)
    } else if (cur !== old) {
      old.fns = cur
      on[name] = old
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name)
      remove(event.name, oldOn[name], event.capture)
    }
  }
}
```

该函数的作用是对比`listeners` 和 `oldListeners`的不同，并调用参数中提供的`add` 和`remove`进行相应的注册事件和卸载事件。其思想是：如果`listeners`对象中存在某个`key`（即事件名）而`oldListeners`中不存在，则说明这个事件是需要新增的；反之，如果`oldListeners`对象中存在某个`key`（即事件名）而`listeners`中不存在，则说明这个事件是需要从事件系统中卸载的；

该函数接收 5 个参数，分别是`on`、`oldOn`、`add`、`remove`、`vm`，其中`on`对应`listeners`，`oldOn`对应`oldListeners`。

首先对`on`进行遍历，获得每一个事件名，然后调用`normalizeEvent`函数处理，处理完事件名后，判断事件就把值是否存在，如果不存在则抛出警告，如下：

```
for (name in on) {
  def = cur = on[name]
  old = oldOn[name]
  event = normalizeEvent(name)
  if (isUndef(cur)) {
    process.env.NODE_ENV !== 'production' && warn(
      `Invalid handler for event "${event.name}": got ` + String(cur),
      vm
    )
  }
}
```

如果存在，则继续判断该事件名在`oldOn`中是否存在，如果不存在，则调用`add`注册事件，如下：

```
if (isUndef(old)) {
  if (isUndef(cur.fns)) {
    cur = on[name] = createFnInvoker(cur)
  }
  add(event.name, cur, event.once, event.capture, event.passive, event.params)
}
```

这里定义了`createFnInvoker`方法并返回`invoker`函数：

```
export function createFnInvoker (fns) {
  function invoker () {
    const fns = invoker.fns
    if (Array.isArray(fns)) {
      const cloned = fns.slice()
      for (let i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments)
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns
  return invoker
}
```

由于一个事件可能会对应多个回调函数，所以这里做了数组的判断，

```
if (cur !== old) {
  old.fns = cur
  on[name] = old
}
```

最后遍历`oldOn`，获得每一个事件名，判断如果事件名在`on`中不存在，则表示该事件是需要从事件系统中卸载事件，则调用`remove`方法卸载该事件。

`updateListeners`函数遗留了一个`normalizeEvent`函数是干什么用的？我们在解析事件的时候，当事件上有修饰符的时候，我们会根据不同的修饰符给事件名前面添加不同的符号以作标识，其实这个`normalizeEvent`函数就是个反向操作，根据事件名前面的不同标识反向解析出该事件所带的何种修饰符，其代码如下：

```
const normalizeEvent = cached((name: string): {
  name: string,
  once: boolean,
  capture: boolean,
  passive: boolean,
  handler?: Function,
  params?: Array<any>
} => {
  const passive = name.charAt(0) === '&'
  name = passive ? name.slice(1) : name
  const once = name.charAt(0) === '~'
  name = once ? name.slice(1) : name
  const capture = name.charAt(0) === '!'
  name = capture ? name.slice(1) : name
  return {
    name,
    once,
    capture,
    passive
  }
})
```

判断事件名的第一个字符是何种标识进而判断出事件带有何种修饰符，最终将真实事件名及所带的修饰符返回。

**总结**

首先从模板编译时对组件标签上的事件解析入手分析，父组件既可以给既可以给子组件上绑定自定义事件，也可以绑定浏览器原生事件。这两种事件有着不同的处理时机，浏览器原生事件是由父组件处理，而自定义事件是在子组件初始化时候由父组件父给子组件，再由子组件注册到实例的事件系统中。

初始化事件函数`initEvents`实际上初始化的是父组件在模板中使用`v-on`或`@`注册的监听子组件内触发的事件。

最后分析了`initEvents`函数的具体实现过程，该函数内部首先在实例上新增了`_events`属性并将其赋值为空对象，用来存储事件。接着通过调用`updateComponentListeners`函数，将父组件向子组件注册的事件注册到子组件实例中的`_events`对象里。

**initInjections 函数分析**

从函数名字上来看，该函数是用来初始化实例中的`inject`选项的。说到`inject`选项，那必然离不开`provide`选项，这两个选项都是成对出现的，它们的作用是：鸡毛一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间始终生效。

`provide`选项应该是一个对象或返回一个对象的函数。该对象包含可注入其子孙的属性。在该对象中你可以使用 ES 2015 Symbols 作为 key，但是只在原生支持`Symbol`和`Reflect.ownKeys`的环境下可工作。

`inject`选项应该是：

- 一个字符串数组或
- 一个对象，对象的 key 是本地的绑定名，value 是：
  - 在可用的注入内容中搜索用的 key，或
  - 一个对象，该对象的：
    - `from`属性是在可用的注入
    - `default`属性是降级情况下使用的 value

官方文档使用示例，如下：

```
/ 父级组件提供 'foo'
var Parent = {
  provide: {
    foo: 'bar'
  },
  // ...
}

// 子组件注入 'foo'
var Child = {
  inject: ['foo'],
  created () {
    console.log(this.foo) // => "bar"
  }
  // ...
}
```

利用 ES2015 Symbols、函数`provide`和对象`inject`：

```
const s = Symbol()

const Provider = {
  provide () {
    return {
      [s]: 'foo'
    }
  }
}

const Child = {
  inject: { s },
  // ...
}
```

使用一个注入的值作为一个属性的默认值：

```
const Child = {
  inject: ['foo'],
  props: {
    bar: {
      default () {
        return this.foo
      }
    }
  }
}
```

使用一个注入的值作为数据入口：

```
const Child = {
  inject: ['foo'],
  data () {
    return {
      bar: this.foo
    }
  }
}
```

> 在 2.5.0+ 的注入可以通过设置默认值使其变成可选项：

```
const Child = {
  inject: {
    foo: { default: 'foo' }
  }
}
```

如果它需要从一个不同名字的属性注入，则使用 from 来表示其源属性：

```
const Child = {
  inject: {
    foo: {
      from: 'bar',
      default: 'foo'
    }
  }
}
```

与 prop 的默认值类似，你需要对非原始值使用一个工厂方法：

```
const Child = {
  inject: {
    foo: {
      from: 'bar',
      default: () => [1, 2, 3]
    }
  }
}
```

父组件可以使用`provide`选项给自己的下游子孙组件内注入一些数据，在下游子孙组件中可以使用`inject`选项来接收这些数据以便为自己所用。

需要注意：`provide` 和 `inject` 选项绑定的数据不是响应式的。

**initInjections 函数分析**

`provide`选项注入的值作为数据入口，如下：

```
const Child = {
  inject: ['foo'],
  data () {
    return {
      bar: this.foo
    }
  }
}
```

数据就是我们通常所写`data`、`props`、`watch`、`computed`及`method`，所以`inject`选项接收到注入的值有可能被以上这些数据所使用到，所以在初始化完`inject`后需要先初始化这些数据，然后才能再初始化`provide`，所以在调用`initInjections`函数对`inject`初始化完之后需要先调用`initState`函数对数据进行初始化，最后再调用`initProvide`函数对`provide`进行初始化。

`initInjections`函数的具体原理，该函数定义在位于源码的`src/core/instance/inject.js`中，如下：

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

`initInjections`函数首先调用`resolveInject`把`inject`选项中的数据转化成键值对的形式赋给`result`，`result`样子如下：

```
// 父级组件提供 'foo'
var Parent = {
  provide: {
    foo: 'bar'
  }
}

// 子组件注入 'foo'
var Child = {
  inject: ['foo'],
}

// result
result = {
    'foo':'bar'
}
```

然后遍历`result`中的每一对键值，调用`defineReactive`函数将其添加当前实例上，如下：

```
if (result) {
    toggleObserving(false)
    Object.keys(result).forEach(key => {
        defineReactive(vm, key, result[key])
    }
    toggleObserving(true)
}
```

在把`result`中的键值添加到当前实例上之前，会先调用`toggleObserving(false)`，而这个函数内部是把`shouldObserve = false`，这是为了告诉`defineReactive`函数仅仅是把键值添加到当前实例上而不需要将其转换成响应式。

**resolveInject 函数分析**

`inject`选项中的每一个数据`key` 都是由其上游父级组件提供的，所以我们应该把每一个数据`key`从当前组件起，不断的向上游父级组件中查找该数据`key`对应的值，直到找到为止。如果在上游所有父级组件中没找到，那么就看在`inject`选项是否为该数据`key`设置了默认值，如果设置了就使用默认值，如果没有设置，则抛出异常。

`resolveInject`函数的源码如下：

```
export function resolveInject (inject: any, vm: Component): ?Object {
  if (inject) {
    const result = Object.create(null)
    const keys =  Object.keys(inject)

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const provideKey = inject[key].from
      let source = vm
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey]
          break
        }
        source = source.$parent
      }
      if (!source) {
        if ('default' in inject[key]) {
          const provideDefault = inject[key].default
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault
        } else if (process.env.NODE_ENV !== 'production') {
          warn(`Injection "${key}" not found`, vm)
        }
      }
    }
    return result
  }
}
```

在分析函数源码之前，我们对照着官网给出的示例，这样会比较好理解一些。

```
var Parent = {
  provide: {
    foo: 'bar'
  },
  // ...
}
const Child = {
  inject: {
    foo: {
      from: 'bar',
      default: () => [1, 2, 3]
    }
  }
}
```

首先创建一个空对象`result`，用来存储`inject`选项中的数据`key`及其对应的值，作为最后的返回结果。

然后获取当前`inject`选项中的所有`key`，然后遍历每一个`key`，拿到每一个`key`的`from`属性记作`provideKey`，`provideKey`就是上游父组件提供的源属性，然后开启一个`while`循环，从当前组件起，不断的向上游父组件的`_provided`属性中查找，直到查找到源属性的对应的值，将其存入`result`中，如下：

```
for (let i = 0; i < keys.length; i++) {
  const key = keys[i]
  const provideKey = inject[key].from
  let source = vm
  while (source) {
    if (source._provided && hasOwn(source._provided, provideKey)) {
      result[key] = source._provided[provideKey]
      break
    }
    source = source.$parent
  }
}
```

如果没有找到，那么就看`inject`选项中当前的数据`key`是否设置了默认值，即是否有`default`属性，如果有的话，则拿到这个默认值，默认值可以为一个工厂函数，所以当默认值是函数的时候，就去该函数的时候，就去该函数的返回值，否则就取默认值本身。如果没有设置默认值，则抛出异常。如下：

```
if (!source) {
  if ('default' in inject[key]) {
    const provideDefault = inject[key].default
    result[key] = typeof provideDefault === 'function'
        ? provideDefault.call(vm)
    : provideDefault
  } else if (process.env.NODE_ENV !== 'production') {
    warn(`Injection "${key}" not found`, vm)
  }
}
```

最后将`result`返回。

其实在初始化阶段`_init`函数在合并属性的时候还调用了一个将`inject`选项数据规范化的函数`normalizeInject`，该函数的作用是将以下这三种写法：

```
// 写法一
var Child = {
  inject: ['foo']
}

// 写法二
const Child = {
  inject: {
    foo: { default: 'xxx' }
  }
}

// 写法三
const Child = {
  inject: {
    foo
  }
}
```

统统转换成以下规范化格式：

```
const Child = {
  inject: {
    foo: {
      from: 'foo',
      default: 'xxx'  //如果有默认的值就有default属性
    }
  }
}
```

不管用户使用了何种写法，统统将其转化成一种便于集中处理的写法。

该函数的定义位于源码的`src/core/util/options.js`中，如下：

```
function normalizeInject (options: Object, vm: ?Component) {
  const inject = options.inject
  if (!inject) return
  const normalized = options.inject = {}
  if (Array.isArray(inject)) {
    for (let i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] }
    }
  } else if (isPlainObject(inject)) {
    for (const key in inject) {
      const val = inject[key]
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val }
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      `Invalid value for option "inject": expected an Array or an Object, ` +
      `but got ${toRawType(inject)}.`,
      vm
    )
  }
}
```

该函数的逻辑并不复杂，如果用户的`inject`选项传入的是一个字符串数组，那么就遍历该数组，把数组的每一项变成

```
inject:{
  foo:{
    from:'foo'
  }
}
```

如果给`inject`选项传入的是一个对象，那就遍历对象中的每一个`key`，给写法二形式的`key`对应的值扩展`{from:key}`，变成：

```
inject:{
  foo:{
    from: 'foo',
    default: 'xxx'
  }
}
```

将写法三形式的`key`对应的值变成：

```
inject:{
  foo:{
    from: 'foo'
  }
}
```

**总结**

首先我们先根据官方文档回顾了该选项的作用及使用方法。

接着，我们分析了`initInjections`函数的内部实现原理，分析了是根据`inject`选项中的数据`key`是如何自底向上查找上游父级组件所注入的对应的值。

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

```
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
```

先判断实例中是否有`props`选项，如果有，就调用`props`选项初始化函数`initProps`去初始`props`选项；

再判断实例中是否有`methods`选项，如果有，就调用`methods`选项初始函数`initMethods`去初始化`methods`选项；

接着再判断实例中是否有`data`选项，如果有，就调用`data`选项寝化函数`initData`去初始化`data`选项；如果没有，就把`data`当作空对象并将其转换成响应式；

接着再判断实例中是否有`computed`选项，如果有，就调用`computed`选项初始化函数`initComputed`去初始化`computed`选项；

最后判断实例中是否有`watch`选项，如果有，就调用`watch`选项初始化函数`initWatch`去初始化`watch`选项；

`iniState`函数的所有逻辑，其实你会发现，在函数内部初始人这 5 个选项的时候它的顺序是有意安排的，不是毫无章法的。如果你在开发中有注意到我们在`data`中可以使用`props`，在`watch`中可以观察`data`和`props`，之所以可以这样做，就是因为在初始化的时候遵循了这种顺序，先初始化`props`，接着初始化`data`，最后初始化`watch`。

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

首先拿到实例中的`props`选项，如果不存在，则直接返回。

```
const props = options.props
if (!props) return
```

如果存在，则定义一个空对象`res`，用来存储最终的结果。接着判断如果`props`选项是一个数组（写法一），则遍历该数组中的每一项元素，如果该元素是字符串，那么先将该元素统一转化成驼峰式命名，然后将该元素作为`key`，将`{type:null}`作为`value`存入`res`中；如果不是字符串，则抛出异常，如下：

```
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
}
```

如果`props`选项不是数组那就判断是不是一个对象，如果是一个对象，那就是遍历对象中的每一对键值，拿到每一对键值后，先将键名统一转化成驼峰式命名，然后判断值是否还是一个对象，如果值是对象（写法三），那么就将该键值对存入`res`中；如果值不是对象（写法二），那么就将键名作为`key`，将`{type:null}`作为`value`存入`res`中。如下：

```
if (isPlainObject(props)) {
    for (const key in props) {
        val = props[key]
        name = camelize(key)
        res[name] = isPlainObject(val)
            ? val
        : { type: val }
    }
}
```

如果`props`选项既不是数组也不是对象，那么如果在非生产环境下就抛出异常，最后将`res`作为规范化后的结果重新赋值给实例的`props`选项。如下：

```
if (process.env.NODE_ENV !== 'production') {
    warn(
        `Invalid value for option "props": expected an Array or an Object, ` +
        `but got ${toRawType(props)}.`,
        vm
    )
}
options.props = res
```

无论是三种写法的哪一种，最终都会被转化成如下写法：

```
props: {
    name:{
        type: xxx
    }
}
```

**initProps 函数分析**

将`props`选项规范化完成之后，接下来我们就可以真正的初始化`props`选项了，`initProps`函数的定义位于源码的`src/core/instance/state.js`中，如下：

```
function initProps (vm: Component, propsOptions: Object) {
    const propsData = vm.$options.propsData || {}
    const props = vm._props = {}
    const keys = vm.$options._propKeys = []
    const isRoot = !vm.$parent
    // root instance props should be converted
    if (!isRoot) {
        toggleObserving(false)
    }
for (const key in propsOptions) {
    keys.push(key)
    const value = validateProp(key, propsOptions, propsData, vm)
    if (process.env.NODE_ENV !== 'production') {
        const hyphenatedKey = hyphenate(key)
        if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
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
- props：指向`vm._props`指针，所有设置到`props`变量中的变量中的属性都会保存到`vm._props`中。
- keys：指向`vm.$options._propKeys`的指针，缓存`props`对象中的`key`，将来更新`props`时只需遍历`vm.$options._propKeys`数组即可得到所有的`props`的`key`。
- isRoot：当前组件是否为根组件。

接着，判断当前组件是否为根组件，如果不是，那么不需要将`props`数组转换为响应式的，`toggleObserving(false)`用来控制是否将数据转换成响应式。如下：

```
if (!isRoot) {
    toggleObserving(false)
}
```

接着，遍历`props`选项拿到每一对键值，先将键名添加到`keys`中，然后调用`validateProp`函数校验父组件传入的`props`数据类型是否切尔西并获取到传入的值`value`，然后将键和值通过`defineReactive`函数添加到`props`中，如下：

```
for (const key in propsOptions) {
    keys.push(key)
    const value = validateProp(key, propsOptions, propsData, vm)
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
        if (vm.$parent && !isUpdatingChildComponent) {
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
  }
```

添加完之后再判断这个`key`在当前实例`vm`中是否存在，如果不存在，则调用`proxy`函数在`vm`上设置一个以`key`为属性的代码，当使用`vm[key]`访问数据时，其实访问的是`vm._props[key]`，如下：

```
if (!(key in vm)) {
    proxy(vm, `_props`, key)
}
```

**validateProp 函数分析**

`validateProp`函数的定义位于源码的`src/core/util/props.js`中，如下：

```
export function validateProp (key,propOptions,propsData,vm) {
  const prop = propOptions[key]
  const absent = !hasOwn(propsData, key)
  let value = propsData[key]
  // boolean casting
  const booleanIndex = getTypeIndex(Boolean, prop.type)
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      const stringIndex = getTypeIndex(String, prop.type)
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key)
    // since the default value is a fresh copy,
    // make sure to observe it.
    const prevShouldObserve = shouldObserve
    toggleObserving(true)
    observe(value)
    toggleObserving(prevShouldObserve)
  }
  if (process.env.NODE_ENV !== 'production') {
    assertProp(prop, key, value, vm, absent)
  }
  return value
}
```

该函数接收 4 个参数，分别是：

- `key`:遍历`propOptions`时拿到的每个属性名。
- `propOptions`：当前实例规范化后的`props`选项。
- `propsData`：父组件传入的真实的`props`数据。
- `vm`：当前实例

在函数内部首先定义了 3 个变量，分别是：

```
const prop = propOptions[key]
const absent = !hasOwn(propsData, key)
let value = propsData[key]
```

- prop：当前`key`在`propOptions`中对应的值。
- absent：当前`key`是否在`propsData`中存在，即父组件是否传入了该属性。
- value：当前`key`在`propsData`中对应的值，即父组件对于该属性传入的真实值。

接着，判断`prop`的`type`属性是否是布尔类型（Boolean），`getTypeIndex`函数用于判断`prop`的`type`属性中是否存在某种类型，如果存在，则返回该类型在`type`属性中的索引（因为`type`属性可以是数组），如果不存在则返回 -1。

如果是布尔类型的话，那么有两种边界情况需要单独处理：

1. 如果`absent`为`true`，即父组件没有传入该`props`属性并且该属性也没有默认值的时候，将该属性值设置为`false`，如下：

```
if (absent && !hasOwn(prop, 'default')) {
    value = false
}
```

2. 如果父组件传入了该`prop`属性，那么需要满足以下几点：

- 该属性值为空字符串串或者属性值与属性名相等；
- `prop`和`type`属性中不存在`String`类型；
- 如果`prop`的`type`属性中存在`String`类型，那么`Boolean`类型在`type`属性中的索引必须小于`String`类型的索引，即`Boolean`类型的优先级更高。

```
if (value === '' || value === hyphenate(key)) {
    const stringIndex = getTypeIndex(String, prop.type)
    if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true
    }
}
```

另外，在判断属性值与属性名相等的时候，是先将属性名由驼峰转换成用`-`连接的字符串，下面的这几种写法，子组件的`prop`都将被设置为`true`：

```
<Child name></Child>
<Child name="name"></Child>
<Child userName="user-name"></Child>
```

如果不是布尔类型，是其它类型的话，那就只需判断父组件是否传入该属性即可，如果没有传入，则该属性值为`undefined` ，此时调用`getPropDefaultValue`函数获取该属性的默认值，并将其转换成响应式，如下：

```
if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key)
    // since the default value is a fresh copy,
    // make sure to observe it.
    const prevShouldObserve = shouldObserve
    toggleObserving(true)
    observe(value)
    toggleObserving(prevShouldObserve)
}
```

如果父组件传入了该属性并且也有对应的真实值，那么在非生产环境下会调用`assertProp`函数校验该属性值是否与要求的类型匹配。如下：

```
if (process.env.NODE_ENV !== 'production' ) {
    assertProp(prop, key, value, vm, absent)
}
```

最后将父组件传入的该属性的真实值返回。

**getPropDefaultValue 函数分析**

`getPropDefaultValue`函数的定义位于源码的`src/core/util/props.js`中，如下：

```
function getPropDefaultValue (vm, prop, key){
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  const def = prop.default
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    )
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}
```

该函数接收三个参数，分别是：

- `vm`：当前实例；
- `prop`：子组件`props`选项中的每个`key`对应的值；
- `key`：子组件`props`选项中的每个`key`;

其作用是根据子组件`props`选项中的`key`获取其对应的默认值。

首先判断`prop`中是否有`default`属性，如果没有，则表示没有默认值，直接返回，如下：

```
if (!hasOwn(prop, 'default')) {
    return undefined
}
```

如果有则取出`default`属性，赋给变量`def`。接着判断在非生产环境下`def`是否一个对象，如果是，则抛出警告：对象或数组默认值必须从一个工厂函数获取。如下：

```
const def = prop.default
// warn against non-factory defaults for Object & Array
if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
        'Invalid default value for prop "' + key + '": ' +
        'Props with type Object/Array must use a factory function ' +
        'to return the default value.',
        vm
    )
}
```

接着，再判断如果父组件没有传入该`props`属性，但是在`vm._props`中有该属性值，这说明`vm._props`中的该属性值就是默认值，如下：

```
if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
   ) {
    return vm._props[key]
}
```

最后，判断`def`是否为函数并且`prop.type`不为`Function`，如果是的话表明`def`是一个返回对象或数组的工厂函数，那么将函数的返回值作为默认值返回；如果`def`不是函数，那么则将`def`作为默认值返回。如下：

```
return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
	: def
```

**assertProp 函数分析**

`assertProp`函数的定义位于源码的`src/core/util/props.js`中，如下：

```
function assertProp (prop,name,value,vm,absent) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    )
    return
  }
  if (value == null && !prop.required) {
    return
  }
  let type = prop.type
  let valid = !type || type === true
  const expectedTypes = []
  if (type) {
    if (!Array.isArray(type)) {
      type = [type]
    }
    for (let i = 0; i < type.length && !valid; i++) {
      const assertedType = assertType(value, type[i])
      expectedTypes.push(assertedType.expectedType || '')
      valid = assertedType.valid
    }
  }
  if (!valid) {
    warn(
      `Invalid prop: type check failed for prop "${name}".` +
      ` Expected ${expectedTypes.map(capitalize).join(', ')}` +
      `, got ${toRawType(value)}.`,
      vm
    )
    return
  }
  const validator = prop.validator
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      )
    }
  }
}
```

该函数接收 5 个参数，分别是：

- `prop`:prop 选项;
- `name`:props 中 prop 选项的 key;
- `value`:父组件传入的 propsData 中 key 对应的真实数据；
- `vm`:当前实例；
- `absent`:当前 key 是否在 propsData 中存在，即父组件是否传入了该属性。

其作用是校验父组件传来的真实值是否与`prop`的`type`类型相匹配，如果不切尔西则在非生产环境下抛出警告。

函数内部首先判断`prop`中如果设置了必须项（即`prop.required`为`true`）并且父组件又没有传入该属性，此时则抛出警告：提示该项必须。如下：

```
if (prop.required && absent) {
    warn(
        'Missing required prop: "' + name + '"',
        vm
    )
    return
}
```

接着判断如果该项不是必填的并且该项的值`value`不存在，那么此时是合法的，直接返回，如下：

```
if (value == null && !prop.required) {
    return
}
```

接下来定义了 3 个变量，分别是：

```
let type = prop.type
let valid = !type || type === true
const expectedTypes = []
```

- type:`prop`中的`thpe`类型;
- valid:校验是否成功；
- expectedTypes:保存期望类型的数组，当校验失败抛出警告时，会提示用户该属性所期望的类型是什么；

通常情况下，`type`可以是一个原生构造函数，也可以是一个包含多种类型的数组，还可以不设置该属性。如果用户设置的是原生构造函数或数组，那么此时`vaild`默认为`false`（`!type`），如果用户没有设置该属性，表示不需要校验，那么此时`vaild`默认为`true`，即校验成功。

另外，当`type`等于`true`时，即出现这样的写法：`props:{name:true}`，这说明`prop`一定会校验成功。所以当出现这种语法的时候，此时`type===true`，所以`vaild`默认为`true`。

接下来开始校验类型，如果用户设置了`type`属性，则判断该属性是不是数组，如果不是，则统一转化为数组，方便后续处理，如下：

```
if (type) {
    if (!Array.isArray(type)) {
        type = [type]
    }
}
```

接下来遍历`type`数组，并调用`assertType`函数校验`value`。`assertType`函数校验后会返回一个对象，如下：

```
{
    vaild:true,       // 表示是否校验成功
    expectedType：'Boolean'   // 表示被校验的类型
}
```

然后将被校验的类型添加到`expectedTypes`中，并将`valid`变量设置为`assertedType.valid`，如下：

```
for (let i = 0; i < type.length && !valid; i++) {
    const assertedType = assertType(value, type[i])
    expectedTypes.push(assertedType.expectedType || '')
    valid = assertedType.valid
}
```

循环中的条件语句有这样一个条件：`!vaild`，即`type`数组中还要有一个校验成功，循环立即结束，表示校验通过。

接下来，如果循环完毕后`vaild`为`false`，即表示校验未通过，则招聘警告。如下：

```
if (!valid) {
    warn(
        `Invalid prop: type check failed for prop "${name}".` +
        ` Expected ${expectedTypes.map(capitalize).join(', ')}` +
        `, got ${toRawType(value)}.`,
        vm
    )
    return
}
```

另外，`prop`选项还支持自定义校验函数，如下：

```
props:{
   // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
}
```

所以还需要使用用户传入的自定义校验数据。首先获取到用户传入的校验函数，调用该函数并将待校验的数据传入，如果校验失败，则抛出警告。如下：

```
const validator = prop.validator
if (validator) {
    if (!validator(value)) {
        warn(
            'Invalid prop: custom validator check failed for prop "' + name + '".',
            vm
        )
    }
}
```

**初始化 methods**

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

初始化`methods`干了三件事：判断`method`有没有？`method`的命名符不符合命名规范？如果`method`既有又符合规范那就把它挂载到`vm`实例上。

首先，遍历`methods`选项中的每一个对象，在非生产环境下判断如果`methods`中某个方法只有`key`而没有`value`，即只有方法没有方法体时，抛出异常：提示用户方法未定义。如下：

```
if (methods[key] == null) {
    warn(
        `Method "${key}" has an undefined value in the component definition. ` +
        `Did you reference the function correctly?`,
        vm
    )
}
```

接着判断如果`methods`中某个方法名与`props`中某个属性名重复了，就抛出异常：提示用户方法名重复了。如下：

```
if (props && hasOwn(props, key)) {
    warn(
        `Method "${key}" has already been defined as a prop.`,
        vm
    )
}
```

其中，`isReserved`函数是用来判断字符串是否以`_`或`$`开头。

最后，如果上述判断都没问题，那就`method`绑定到实例`vm`上，这样，我们就可以通过`this.xxx`来访问`methods`选项中的`xxx`方法了，如下：

```
vm[key] = methods[key] == null ? noop : bind(methods[key], vm)
```

**初始化 data**

初始化`data`也比较简单，它的初始化函数定义位于源码的`src/core/instance/state.js`中，如下：

```
function initData (vm) {
    let data = vm.$options.data
    data = vm._data = typeof data === 'function'
        ? getData(data, vm)
    : data || {}
    if (!isPlainObject(data)) {
        data = {}
        process.env.NODE_ENV !== 'production' && warn(
            'data functions should return an object:\n' +
            'https://vuejs.org/v2/guide/components.html##data-Must-Be-a-Function',
            vm
        )
    }
    // proxy data on instance
    const keys = Object.keys(data)
    const props = vm.$options.props
    const methods = vm.$options.methods
    let i = keys.length
    while (i--) {
        const key = keys[i]
        if (process.env.NODE_ENV !== 'production') {
            if (methods && hasOwn(methods, key)) {
                warn(
                    `Method "${key}" has already been defined as a data property.`,
                    vm
                )
            }
        }
        if (props && hasOwn(props, key)) {
            process.env.NODE_ENV !== 'production' && warn(
                `The data property "${key}" is already declared as a prop. ` +
                `Use prop default value instead.`,
                vm
            )
        } else if (!isReserved(key)) {
            proxy(vm, `_data`, key)
        }
    }
    // observe data
    observe(data, true /* asRootData */)
}
```

`initData`通过一系列条件判断用户传入的`data`选项是否合法，最后将`data`转换成响应式并绑定到实例`vm`上。

首先获取到用户传入的`data`选项，赋给变量`data`，同时将变量`data`作为指针指向`vm._data`，然后判断`data`是不是一个函数，如果是就调用`getData`函数获取其返回值，将其保存到`vm._data`中。如果不是，就将其本身保存到`vm._data`中，如下：

```
let data = vm.$options.data
data = vm._data = typeof data === 'function'
    ? getData(data, vm)
	: data || {}
```

无论传入的`data`选项是不是一个函数，它最终的值都应该是一个对象，如果不是对象的话，就抛出警告：提示用户`data`应该是一个对象，如下：

```
if (!isPlainObject(data)) {
    data = {}
    process.env.NODE_ENV !== 'production' && warn(
        'data functions should return an object:\n' +
        'https://vuejs.org/v2/guide/components.html##data-Must-Be-a-Function',
        vm
    )
}
```

接下来遍历`data`对象中的每一项，在非生产环境下判断`data`对象中是否存在某一项`key`与`methods`中某个属性名重复，如果存在重复，就抛出警告：提示用户属性名重复。如下：

```
if (process.env.NODE_ENV !== 'production') {
    if (methods && hasOwn(methods, key)) {
        warn(
            `Method "${key}" has already been defined as a data property.`,
            vm
        )
    }
}
```

接下来遍历`data`对象中的每一项，在非生产环境判断`data`对象中是否存在某一项的`key`与`methods`中某个属性名重复，如果存在重复，就抛出警告：提示用户属性名重复。如下：

```
if (props && hasOwn(props, key)) {
    process.env.NODE_ENV !== 'production' && warn(
        `The data property "${key}" is already declared as a prop. ` +
        `Use prop default value instead.`,
        vm
    )
}
```

如果没有重复，则调用`proxy`函数将`data`对象中`key`不以`_`或`$`开头的属性代理到实例`vm`上，这样，我们就可以通过`this.xxx`来访问`data`选项中的`xxx`数据了。如下：

```
if (!isReserved(key)) {
    proxy(vm, `_data`, key)
}
```

最后，调用`observe`函数将`data`中的数据转化成响应式，如下：

```
observe(data, true /* asRootData */)
```

**初始化 computed**

计算属性`computed`有一个很大的特点就是：计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。

**用法**

计算属性的用法，如下：

```
var vm = new Vue({
  data: { a: 1 },
  computed: {
    // 仅读取
    aDouble: function () {
      return this.a * 2
    },
    // 读取和设置
    aPlus: {
      get: function () {
        return this.a + 1
      },
      set: function (v) {
        this.a = v - 1
      }
    }
  }
})
vm.aPlus   // => 2
vm.aPlus = 3
vm.a       // => 2
vm.aDouble // => 4
```

`computed`选项中的属性值可以是一个函数，那该函数默认为取值器`getter`，用于仅读取数据；还可以是一个对象，对象里面有取值器`getter`和存值器`setter`，用于读取和设置数据。

**initComputed 函数分析**

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

函数内部，首先定义了一个变量`watchers`并将其赋值为空对象，同时将其作为指针指向`vm._computedWatchers`，如下：

```
const watchers = vm._computedWatchers = Object.create(null)
```

接着，遍历用户写的`computed`选项中的每一项属性，首先获取到每一项的属性值，记作`userDef`，然后判断`userDef`是不是一个函数，如果是函数，则将该函数默认为取值器`getter`，将其赋值给变量`getter`;如果不是函数，则说明是一个对象，则取对象中的`get`属性作为取值器赋给变量`getter`。如下：

```
const userDef = computed[key]
const getter = typeof userDef === 'function' ? userDef : userDef.get
```

接着判断在非生产环境下如果上面两种情况取到的取值不存在，则抛出警告：提示用户计算属性必须有取值器。如下：

```
if (process.env.NODE_ENV !== 'production' && getter == null) {
    warn(
        `Getter is missing for computed property "${key}".`,
        vm
    )
}
```

接着判断如果不是在服务端渲染环境下，则为`computed`选项中的每一项属性创建一个`watcher`实例，并将当前循环的属性名作为键，创建的`watcher`实例作为值，存入`watchers`对象中，如下：

```
if (!isSSR) {
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
    )
}
```

其中，上面代码中创建`watcher`实例时所传入的`getter`就是取到用户所写的该计算属性的取值器。而`computedWatcherOptions`参数如下：

```
const computedWatcherOptions = { lazy: true }
```

这个参数是用来标记当前所创建的`watcher`实例是一个计算属性的`watcher`实例，给它一个`{lazy:true}`的配置，这是为将来计算属性值缓存做准备。计算属性有个特点就是它可以缓存当前的计算结果，也就是说如果某个计算属性所依赖的数据没有发生变化，那么该计算属性就不会去重复计算，会直接获取上一次的计算结果。这个 `{ lazy: true }`就是给计算属性做缓存时用的。

最后，判断当前循环到的的属性名是否存在于当前实例 `vm` 上，如果存在，则在非生产环境下抛出警告；如果不存在，则调用 `defineComputed` 函数为实例 `vm` 上设置计算属性。

**defineComputed 函数分析**

`defineComputed`函数的定义位于源码的`src/core/instance/state.js`中，如下：

```
const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}

export function defineComputed (target,key,userDef) {
  const shouldCache = !isServerRendering()
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef
    sharedPropertyDefinition.set = noop
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        `Computed property "${key}" was assigned to but it has no setter.`,
        this
      )
    }
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}
```

该函数接受 3 个参数，分别是：`target`、`key`和`userDef` 。其作用是为`target`上定义一个属性`key`，并且属性`key`的`getter`和`setter`根据`userDef`的值来设置。

首先定义了变量`sharedPropertyDefinition`，它是一个默认值的属性描述符，如下：

```
const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}
```

接着，在函数内部定义了变量`shouldCache`，用于标识计算属性是否应该有缓存。该变量的值是当前环境是否为非服务端环境，如果非服务端渲染环境则该变量为`true`。也就是说，只有在非服务端渲染环境下计算属性才应该有缓存。如下：

```
const shouldCache = !isServerRendering()
```

接着，判断如果`userDef`是一个函数，则该函数默认为取值器`getter`，此处在非服务端渲染环境下并没有直接使用`userDef`作为`getter`，而调用`createComputedGetter`函数创建一个`getter`，这是因为`userDef`只是一个普通的`getter`，它并没有缓存功能，所以我们需要额外创建一个具有缓存功能的`getter`。由于用户没有调用`setter`函数，所以将`sharedPropertyDefinition.set`设置为`noop`。如下：

```
/*创建计算属性的getter*/
if (typeof userDef === 'function') {
  sharedPropertyDefinition.get = shouldCache
    ? createComputedGetter(key)
    : createGetterInvoker(userDef)
  /*
    当userDef是一个function的时候是不需要setter的，所以这边给它设置成了空函数。
    因为计算属性默认是一个function，只设置getter。
    当需要设置setter的时候，会将计算属性设置成一个对象。
  */
  sharedPropertyDefinition.set = noop
}
```

如果`userDef`不是一个函数，那么就将它当作对象处理。在设置`sharedPropertyDefinition.get`的时候先判断`userDef.get`是否存在，如果不存在，则将其设置为`noop`，如果存在，则同上面一样，在非服务端渲染环境下并且用户没有明确的将`userDef.cache`设置为`false`时调用`createComputedGetter`函数创建一个`getter`赋给 `sharedPropertyDefinition.get` 。然后设置 `sharedPropertyDefinition.set` 为 `userDef.set` 函数。如下：

```
sharedPropertyDefinition.get = userDef.get
  ? shouldCache && userDef.cache !== false
    ? createComputedGetter(key)
    : createGetterInvoker(userDef.get)
  : noop
/*如果有设置set方法则直接使用，否则赋值空函数*/
sharedPropertyDefinition.set = userDef.set || noop
```

接着，再判断在非生产环境下如果用户没有设置`setter`的话，那么就给`setter`一个默认函数，这是为防止用户在没有设置`setter`的情况下修改计算属性，从而为其抛出警告，如下：

```
if (process.env.NODE_ENV !== 'production' &&
    sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
        warn(
            `Computed property "${key}" was assigned to but it has no setter.`,
            this
        )
    }
}
```

最后调用`Object.defineProperty`方法将属性`key`绑定到`target`上，其中的属性描述符就是上面设置的`sharedPropertyDefinition`。如此以来，就将计算属性绑定到实例`vm`上了。

计算属性有没有缓存及其响应式貌似主要在于是否将`getter`设置为`createComputedGetter`函数的返回结果。

**createComputedGetter 函数分析**

`createComputedGetter`函数的定义在位于源码的`src/core/instance/state.js`中，如下：

```
function createComputedGetter (key) {
  return function computedGetter () {
    const watcher = this._computedWatchers && this._computedWatchers[key]
    if (watcher) {
      /*实际是脏检查，在计算属性中的依赖发生改变的时候dirty会变成true，
      在get的时候重新计算计算属性的输出值*/
      if (watcher.dirty) {
        watcher.evaluate()
      }
      /*依赖收集*/
      if (Dep.target) {
        watcher.depend()
      }
      return watcher.value
    }
  }
}
```

该函数是一个高阶函数，其内部返回一个叫做`computedGetter`的函数，所以其实是将`computedGetter`函数赋给了`sharedPropertyDefinition.get`。当获取计算属性的值时会执行属性的`getter`，而属性的`getter`就是`sharedPropertyDefinition.get`，也就是说最终执行的`computedGetter`函数。

在`computedGetter`函数内部，首先获取之前创建好的存储在实例上`_computedWatchers`属性中当前计算属性名`key`所对应的`watcher`实例，如下：

```
const watcher = this._computedWatchers && this._computedWatchers[key]
```

如果`watcher`实例存在，则判断该实例上的`dirty`属性是否为`true`，如果为`true`，即表明当前计算属性的计算结果发生了变化，则立即调用实例上的`evaluate`方法获取最新的计算结果，在`evaluate`方法内部会将最新的计算结果赋值给实例上的`value`属性，如下：

```
if (watcher.dirty) {
  watcher.evaluate()
}
```

如果当前有需要收集的依赖，则调用实例上的`depend`方法进行依赖收集，如下：

```
if (Dep.target) {
  watcher.depend()
}
```

最后，返回实例上的`value`属性，该属性即为当前计算属性的最终计算结果。

在实例化`Watcher`类的时候，第四个参数传入了一个对象`computedWatcherOptions = { lazy: true }`，该对象中的`lazy`属性标志着这个`watcher`实例是计算的`watcher`实例，同时类中还定义了`this.dirty`属性用于标志计算属性的返回值是否有变化，计算属性的缓存就是通过这个属性来判断的，每当计算属性依赖的数据发生变化时，会将`this.dirty`属性设置为`true`，这样下一次读取计算属性时，会重新计算结果返回，否则直接返回之前的计算结果。

如果计算属性中用到的数据没有发生变化，那么计算属性的`watcher`实例的`watcher.update`方法就不会执行，那么`watcher.dirty`就不会被变化为`true`，依然为`false`，那么当视图获取`name`时，就不会调用`watcher.evaluate`方法，直接返回已有的`watcher.value`，即上一次的计算结果。

其内部原理如图所示：

![images](vue21.jpg)

**初始化 watch**

初始化`watch`选项，在日常开发中`watch`选项也经常会使用到，它可以用来侦听某个已有的数据，当该数据发生变化时执行对应的回调函数。

**initWatch 函数分析**

`initWatch`函数的定义位于源码的`src/core/instance/state.js`中，如下：

```
function initWatch (vm, watch) {
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

在函数内部会遍历`watch`选项，拿到每一项的`key`和对应的值`handler`。然后判断`handler`是否为数组，如果是数组则循环该数组并将数组中的每一项依次调用`createWatcher`函数来创建`watcher`；如果不是数组，则直接调用`createWatcher`函数来创建`watcher`。

**createWatcher 函数分析**

`createWatcher`函数的定义位于源码的`src/core/instance/state.js`中，如下：

```
function createWatcher (
  vm: Component,
  expOrFn: string | Function,
  handler: any,
  options?: Object
) {
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

可以看到，该函数接收 4 个参数，分别是：

- vm：当前实例
- expOrFn：被侦听的属性表达式
- handler：`watch`选项中每一项的值
- options：用于传递给`vm.$watch`的选项对象

在该函数的内部，首先会判断传入的`handler`是否为一个对象，如果是一个对象，那么就认为用户使用的是这种写法：

```
watch: {
    c: {
        handler: function (val, oldVal) { /* ... */ },
		deep: true
    }
}
```

即带有侦听选项的写法，此时就将`handler`对象整体记作`options`，把`handler`对象中的`handler`属性作为真正的回调函数记作`handler`，如下：

```
if (isPlainObject(handler)) {
    options = handler
    handler = handler.handler
}
```

接着判断传入的`handler`是否为一个字符串，如果是一个字符串，那么就认为用户使用的是这种写法：

```
watch: {
    // methods选项中的方法名
    b: 'someMethod',
}
```

即回调函数是`methods`选项中的一个方法名，我们知道，在初始化`methods`选项的时候会将选项中的每一个方法都绑定到当前实例上，所以此此时我们只需从当前实例上取出该方法作为真正的回调函数记作`handler`，如下：

```
if (typeof handler === 'string') {
    handler = vm[handler]
}
```

如果既不是对象又不是字符串，那么我们就认为它是一个函数，就不做任何处理。

针对不同类型的值处理完毕后，`expOrFn`是被侦听的属性表达式，`handler`亦是是回调函数，`options`变量为侦听选项，最后，调用`vm.$watcher`方法并传入以上三个参数完成初始化`watch`。

#### 5.2 模板编译阶段

模板编译阶段主要工作是获取到用户传入的模板内容并将其编译成渲染函数。

模板编译阶段并不是存在于`Vue`的所有构建版本中，它只存在于完整版中。在只包含运行时版本中并不存在该阶段，这是因为当使用`vue-loader`或`vueify`时，`*.vue`文件内部的模板会在构建时预编译成渲染函数，所以是不需要编译的，从而不存在模板编译阶段，由上一步的初始化阶段直接进入下一阶段的挂载阶段。

`vue`基于源码构建的有两个版本，一个是`runtime only`（一个只包含运行时的版本），另一个是`runtime+compiler`（一个同时包含编译器和运行时的完整版本）。而两个版本的区别仅在于后者包含了一个编译器。

- 完整版本

一个完整的 `Vue`版本是包含编译器的，我们可以使用`template`选项进行模板编写。编译器会自动将`template`选项中的模板字符串编译成渲染函数的代码，源码中就是`render`函数。如果你需要在客户端编译模板（比如传入一个字符串给`template`选项，或挂载到一个元素上并以其 `DOM`内部的`HTML`作为模板），就需要一个包含编译器的版本，如下：

```
//  需要编译器的版本
new Vue({
    template:'<div>{{hi}}</div>'
})
```

- 只包含运行时版本

只包含运行时的版本拥有创建`Vue`实例、渲染并处理`Virtual DOM`等功能，基本上就是除去编译器外的完整代码。该版本的适用场景有两种：

1. 我们在选项中通过手写`render`函数去定义渲染过程，这个时候并不需要包含编译器的版本便可完整执行。

```
// 不需要编译器
new Vue({
    render(h){
        return h('div',this.hi)
    }
})
```

2. 借助`vue-loader`这样的编译工具进行编译，当我们利用`wepback`进行`vue`的工程化开发时，常常会利用`vue-loader`对`*.vue`文件进行编译，尽管我们也是利用`template`模板标签去书写代码，但是此时的`Vue`已经不需要利用编译器去负责模板的编译工作了，这个过程交给了插件去实现。

编译过程对性能会造成一定的损耗，并且由于加入了编译的流程代码，`Vue`代码的总体积也更加庞大（运行时版本相比完整版体积要小大约 30%）。因此在实际开发中，我们需要借助像`webpack`的`vue-loader`这类工具进行编译，将`vue`对模板的编译阶段合并到`webpack`的构建流程中，这样不仅减少了生产环境代码的体积，也大大提高了运行时的性能，一举两得。

**模板编译阶段分析**

完整版本和只包含运行时版之间的差异主要在于是否有模板编译阶段，而是否有模板编译阶段主要表现在`vm.$mount`方法的实现上。实现上`$mount`也有两个版本。

**两种`$mount`方法对比**

只包含运行时版本的`$mount`代码如下：

```
Vue.prototype.$mount = function(el,hydrating){
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating)
}
```

在该版本中的`$mount`方法内部获取到`el`选项对应的`DOM`元素后直接调用`mountComponent`函数进行挂载操作，关于该函数我们会在挂载阶段详细介绍。

而完整版本的`$mount`代码如下：

```
var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (el,hydrating) {
  // 省略获取模板及编译代码

  return mount.call(this, el, hydrating)
}
```

在完整版本的`$mount`定义之前，先将`Vue`原型上的`$mount`方法先缓存起来，记作变量`mount`。

其实在源码中，是先定义史包含运行时版本的`$mount`方法，再定义完整版本的`$mount`方法，所以此时缓存的`mount`变量就是只包含运行时版本的`$mount`方法。

完整版本和只包含运行时版本之间的差异主要在于是否有模板编译阶段，只包含运行时版本没有模板编译阶段，初始化阶段完成后直接进入挂载阶段，而完整版本是初始化阶段完成后进入模板编译阶段，然后再进入挂载阶段。也就是说，这两个版本最终都会进入挂载阶段。所以在完整版本的`$mount`方法中将模板编译完成后需要回头去调只包含运行时版本的`$mount`方法以进入挂载阶段。

**完整版的`vm.$mount`方法分析**

完整版的`vm.$mount`方法定义位于源码的`src/platforms/web/entry-runtime-with-compiler.js`中，如下：

```
const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && query(el)

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      `Do not mount Vue to <html> or <body> - mount to normal elements instead.`
    )
    return this
  }

  const options = this.$options
  // resolve template/el and convert to render function
  if (!options.render) {
    let template = options.template
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template)
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn(
              `Template element not found or is empty: ${options.template}`,
              this
            )
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this)
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el)
    }
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile')
      }

      const { render, staticRenderFns } = compileToFunctions(template, {
        outputSourceRange: process.env.NODE_ENV !== 'production',
        shouldDecodeNewlines,
        shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this)
      options.render = render
      options.staticRenderFns = staticRenderFns

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end')
        measure(`vue ${this._name} compile`, 'compile', 'compile end')
      }
    }
  }
  return mount.call(this, el, hydrating)
}
```

从代码中可以看到，该函数可以大致分为三部分：

- 根据传入的`el`参数获取`DOM`元素
- 在用户没有手写`render`函数的情况下获取传入的模板`template`；
- 将获取到的`template`编译成`render`函数；

首先，根据传入的`el`参数获取`DOM`元素。如下：

```
el = el && query(el);

function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}
```

由于`el`参数可以是元素，也可以是字符串类型的元素选择器，所以调用`query`函数来获取到`el`对应的`DOM`元素。由于`query`函数比较简单，就是根据传入的`el`参数是否为字符串从而以不同方式获取到对应的`DOM`元素。

另外，这里还多了一个判断，就是判断获取到`el`对应的`DOM`元素如果是`body`或`html`元素时，将会抛出警告。这是因为`Vue`会将模板中的内容替换`el`对应的`DOM`元素，如果是`body`或`html`元素时，替换之后将会破坏整个`DOM`文档，所以不允许`el`是`body`或`html`。如下：

```
if (el === document.body || el === document.documentElement) {
  warn(
    "Do not mount Vue to <html> or <body> - mount to normal elements instead."
  );
  return this
}
```

接着，在用户没有手写`render`函数的情况下获取传入的模板`template`；如下：

```
if (!options.render) {
  var template = options.template;
  if (template) {
    if (typeof template === 'string') {
      if (template.charAt(0) === '#') {
        template = idToTemplate(template);
        /* istanbul ignore if */
        if (!template) {
          warn(
            ("Template element not found or is empty: " + (options.template)),
            this
          );
        }
      }
    } else if (template.nodeType) {
        template = template.innerHTML;
    } else {
      {
        warn('invalid template option:' + template, this);
      }
      return this
    }
  } else if (el) {
    template = getOuterHTML(el);
  }
}
```

首先获取用户传入的`template`选项赋给变量`template`，如果变量`template`存在，则接着判断如果`template`字符串并且以`#`开头，则认为`template`是`id`选择符，则调用`idToTemplate`函数获取到选择符对应的`DOM`元素的`innerHTML`作为模板，如下：

```
if (template) {
  if (typeof template === 'string') {
    if (template.charAt(0) === '#') {
      template = idToTemplate(template);
    }
  }
}

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});
```

如果`template`不是字符串，那就判断它是不是一个`DOM`元素，如果是，则使用该`DOM`元素的`innerHTML`作为模板，如下：

```
if (template.nodeType) {
  template = template.innerHTML;
}
```

如果既不是字符串，也不是`DOM`元素，此时会抛出警告：提示用户`template`选项无效。如下：

```
else {
  {
    warn('invalid template option:' + template, this);
  }
  return this
}
```

如果变量`template`不存在，表明用户没有传入`template`选项，则根据传入的`el`参数调用`getOuterhTML`函数获取外部模板，如下：

```
if (el) {
  template = getOuterHTML(el);
}

function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}
```

不管是从内部的`template`选项中获取模板，还是从外部获取模板，总之就是要获取到用户传入的模板内容，有了模板内容接下才能装饰模板编译成渲染函数。

获取到模板之后，接下来要做的事就是将其编译成渲染函数，如下：

```
if (template) {
  var ref = compileToFunctions(template, {
    outputSourceRange: "development" !== 'production',
    shouldDecodeNewlines: shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
    delimiters: options.delimiters,
    comments: options.comments
  }, this);
  var render = ref.render;
  var staticRenderFns = ref.staticRenderFns;
  options.render = render;
  options.staticRenderFns = staticRenderFns;
}
```

把模板编译成渲染函数是在`compileToFunctions`函数中进行的，该函数接收待编译的模板字符串和编译选项作为参数，返回一个对象，对象里面的`render`属性即是编译好的渲染函数，最后将渲染函数设置到`$options`上。

**总结**

介绍了`Vue`源码构建的两种版本：完整版本和只包含运行时版本。并且我们知道了模板编译阶段只存在于完整版中，在只包含运行时版本中不存在该阶段，这是因为在只包含运行时版本中，当使用`vue-loader`或`vueify`时，`*.vue`文件内部的模板会在构建时预编译成渲染函数，所以是不需要编译的，从而不存在模板编译阶段。

然后对比了两种版本`$mount`方法的区别。它们的区别在于在`$mount`方法中是否进行了模板编译。在只包含运行时版本的`$mount`方法中获取到`DOM`元素后直接进入挂载阶段，而在完整的`$mount`方法中是先将模板进行编译，然后回过头调用只包含运行时版本的`$mount`方法进入挂载阶段。

最后，我们知道了分析模板编译阶段其实就是分析完整版本的`vm.$mount`方法的实现，我们将完整版本的`vm.$mount`方法源码进行了逐行分析。知道了在该阶段所做的工作就是：从用户传入的`el`选项和`template`选项中获取到用户传入的内部或外部模板，然后将获取到的模板编译成渲染函数。

#### 5.3 挂载阶段

挂载阶段所做的主要工作是创建`Vue`实例并用其替换`el`选项对应的`DOM`元素，同时还要开启对模板中数据（状态）的监控，当数据（状态）发生变化时通知其依赖进行视图更新。

![images](vue17.jpg)

**挂载阶段分析**

在完整版本的`$mount`方法中将模板编译完成之后，会回过头去调只包含运行时版本的`$mount`方法进入挂载阶段，要想分析挂载阶段我们必须从只包含运行时版本的`$mount`方法入手。

只包含运行时版本的`$mount`代码如下：

```
Vue.prototype.$mount = function (el,hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};
```

在该函数内部首先获取到`el`选项对应的`DOM`元素，然后调用`mountComponent`函数并将`el`选项对应的`DOM`元素传入，进入挂载阶段。

`mountComponent`函数的定义位于源码的`src/core/instance/lifecycle.js`中，如下：

```
export function mountComponent (vm,el,hydrating) {
    vm.$el = el
    if (!vm.$options.render) {
        vm.$options.render = createEmptyVNode
    }
    callHook(vm, 'beforeMount')

    let updateComponent

    updateComponent = () => {
        vm._update(vm._render(), hydrating)
    }
    new Watcher(vm, updateComponent, noop, {
        before () {
            if (vm._isMounted) {
                callHook(vm, 'beforeUpdate')
            }
        }
    }, true /* isRenderWatcher */)
    hydrating = false

    if (vm.$vnode == null) {
        vm._isMounted = true
        callHook(vm, 'mounted')
    }
    return vm
}
```

可以看到，在该函数中，首先会判断实例上是否存在渲染函数，如果不存在，则设置一个默认的渲染函数`createEmptyVNode`，该渲染函数会创建一个注释类型的`VNode`节点。如下：

```
vm.$el = el
if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode
}
```

然后调用`callHook`函数来触发`beforeMount`生命同期钩子函数，如下：

```
callHook(vm, 'beforeMount')
```

该钩子函数触发后标志着正式开始执行挂载操作。

接下来定义了一个`updateComponent`函数，如下：

```
updateComponent = () => {
    vm._update(vm._render(), hydrating)
}
```

在该函数内部，首先执行渲染函数`vm._render()`得到一份最新的`VNode`节点树，然后执行`vm._update()`方法对最新的`VNode`节点树与上一次渲染的旧`VNode`节点树进行对比并更新`DOM`节点（即`patch`操作），完成一次渲染。

如果调用了`updateComponent`函数，就会将最新的模板内容渲染到视图页面中，这样就完成了挂载操作的一半工作。即图中的上半部分：

![images](vue22.jpg)

这是因为在挂载阶段不但要将模板渲染到视图中，同时还要开启对模板中数据（状态）的监控，当数据（状态）发生变化时通知其依赖进行视图更新。即图中的下半部分：

![images](vue23.jpg)

接下来创建了一个`Watcher`实例，并将定义好的`updateComponent`函数传入。要想开启对模板中数据（状态）的监控，这一段代码是关键，如下：

```
new Watcher(
    vm,                    // 第一个参数
    updateComponent,       // 第二个参数
    noop,                  // 第三个参数
    {                      // 第四个参数
        before () {
          if (vm._isMounted) {
            callHook(vm, 'beforeUpdate')
          }
        }
	},
    true                    // 第五个参数
)
```

在创建`Watcher`实例的时候，传入的第二个参数是`updateComponent`函数。Watcher 类构造函数的第二个参数支持两种类型：函数和数据路径（如`a.b.c`）。如果是数据路径，会根据路径去读取这个数据；如果是函数，会执行这个函数。一旦读取了数据或者执行了函数，就会触发数据或者函数内数据的`getter`方法，而在`getter`方法中会将`watcher`实例添加到该数据的依赖列表中，当该数据发生变化时就会通知依赖列表中所有的依赖，依赖接收到通知后就会调用第四个参数回调函数去更新视图。

换句话说，上面代码中把`updateComponent`函数作为第二个参数传给`Watcher`类从而创建了`watcher`实例，那么`updateComponent`函数中读取的所有数据都将被`watcher`所监控，这些数据中只要有任何一个发生了变化，那么`watcher`都将会得到通知，从而会去调用第四个参数回调函数去更新视图，如此反复，直到实例被销毁。

**总结**

在该阶段中所做的主要工作是创建`Vue`实例并且用其替换`el` 选项对应的`DOM`元素，同时还要开启对模板中数据（状态）的监控，当数据（状态）发生变化时通知其依赖进行视图更新。

我们将挂载阶段所做的工作分成两部分进行了分析，第一部分是将模板渲染到视图上，第二部分是开启对模板中数据（状态）的监控。两部分工作都完成以后挂载阶段才算真正的完成了。

#### 5.4 销毁阶段

销毁阶段所做的主要工作是将当前的`Vue`实例从其父级实例中删除，取消当前实例上的所有依赖追踪并且移除实例上的所有事件监听器。

**销毁阶段分析**

当调用了实例的`$destroy`方法之后，当前实例就进入了销毁阶段。所以分析销毁阶段就是分析`$destroy`方法的内部实现。该方法的定义位于源码的`src/core/instance.lifecycle.js`中，如下：

```
Vue.prototype.$destroy = function () {
    const vm: Component = this
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy')
    vm._isBeingDestroyed = true
    // remove self from parent
    const parent = vm.$parent
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm)
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown()
    }
    let i = vm._watchers.length
    while (i--) {
      vm._watchers[i].teardown()
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--
    }
    // call the last hook...
    vm._isDestroyed = true
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null)
    // fire destroyed hook
    callHook(vm, 'destroyed')
    // turn off all instance listeners.
    vm.$off()
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null
    }
  }
}
```

首先判断当前实例的`_isBeingDestroyed`属性是否为`true`，因为该属性标志着当前实例是否处于正在被销毁的状态，如果它为`true`，则直接`return`退出函数，防止反复执行销毁逻辑。如下：

```
const vm: Component = this
if (vm._isBeingDestroyed) {
  return
}
```

接着，触发生命周期钩子函数`beforeDestroy`，该钩子函数的调用标志着当前实例正式开始销毁。如下：

```
callHook(vm, 'beforeDestroy')
```

接下来，就进入了当前实例销毁的真正逻辑。

首先，需要将当前的`vue`实例从其父级实例中删除，如下：

```
const parent = vm.$parent
if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
  remove(parent.$children, vm)
}
```

如果当前实例有父级实例，同时该父级实例没有被销毁并且不是抽象组件，那么就将当前实例从其父级实例的`$children`属性中删除，即将自己从父级实例的子实例列表中删除。

把自己从父级实例的子实例列表中删除之后，接下来就开始将自己身上的依赖追踪和事件监听移除。

实例身上的依赖包含两部分：一部分是实例自身依赖其他数据，需要将实例自身从其他数据的依赖列表中删除；另一部分是实例内的数据对其他数据的依赖（如用户使用`$watch`创建的依赖），也需要从其他数据的依赖列表中删除实例内数据。所以删除依赖的时候需要将这两部分依赖都删除掉。如下：

```
// teardown watchers
if (vm._watcher) {
  vm._watcher.teardown()
}
let i = vm._watchers.length
while (i--) {
  vm._watchers[i].teardown()
}
```

首先执行`vm._watcher.teardown()`将实例自身从其他数据的依赖列表中删除，`teardown`方法的作用是从所有依赖向的`Dep`列表中将自己删除。然后，介绍`initState`函数时我们知道，所有实例内的数据对其他数据的依赖都会存放在实例的`_watchers`属性中，所以我们只需遍历`_watchers`，将其中的每一个`watcher`都调用`teardown`方法，从而实现移除实例内数据对其他数据的依赖。

接下来移除实例内响应式数据的引用、给当前实例上添加`_isDestroyed`属性来表示当前实例已经被销毁，同时将实例的`VNode`树设置为`null`，如下：

```
if (vm._data.__ob__) {
  vm._data.__ob__.vmCount--
}
vm._isDestroyed = true
vm.__patch__(vm._vnode, null)
```

接着，触发生命周期钩子函数`destroyed`，如下：

```
callHook(vm, 'destroyed')
```

最后，调用实例的`vm.$off`方法，移除实例上的所有事件监听器。如下：

```
vm.$off()
```

**总结**

当调用了实例上的`vm.$destory`方法后，实例就进入了销毁阶段，在该阶段所做的主要工作是将当前的 Vue 实例从其父级实例中删除，取消当前实例上的所有依赖追踪并且移除实例上的所有事件监听器。

### 六、实例方法

- [数据相关的方法](#_6-1-数据相关的方法)
- [事件相关的方法](#_6-2-事件相关的方法)
- [生命周期相关的方法](#_6-3-生命周期相关的方法)

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

- **参数**

  - `{string} eventName`
  - `[…args]`

- **作用**： 触发当前实例上的事件。附加参数都会传给监听器回调。

- **内部原理**

该方法接收的第一个参数是要触发的事件名，之后的附加参数都会会给触发事件的回调函数。该方法的定义位于源码的`src/core/instance/event.js`中，如下：

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

该方法传入的事件名从当前实例的`_events`属性（即事件中心）中获取到该事件名所对应的回调函数`cbs`，如下：

```
let cbs = vm._events[event]
```

然后再获取传入的附加参数`args`，如下：

```
const args = toArray(arguments, 1)
```

由于`cbs`是一个数组，所以遍历该数组，拿到每一个回调函数，执行回调函数并将附加参数`args`传给该回调。如下：

```
for (let i = 0, l = cbs.length; i < l; i++) {
    try {
        cbs[i].apply(vm, args)
    } catch (e) {
        handleError(e, vm, `event handler for "${event}"`)
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

首先，判断如果没有传入任何参数，这就是第一种情况：如果没有提供参数，则移除所有的事件监听器。我们知道，当前实例上的所有事件都存储在事件中心`_events`属性中，要想移除所有的事件，那么只需把`_events`属性重新置为空对象即可。如下：

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

接着，获取到需要移除的事件名在事件中心中对应的回调函数`cbs`。如下：

```
const cbs = vm._events[event]
```

接着，判断如果`cbs`不存在，那表明在事件中心从来没有订阅过该事件，那就谈不上移除该事件，直接返回，退出程序即可。如下：

```
if (!cbs) {
    return vm
}
```

接着，如果`cbs`存在，但是没有传入回调函数`fn`，这就是第二种情况：如果只提供了事件，则移除该事件所有的监听器。一个事件名对应的回调函数是一个数组，要想移除所有的回调函数我们只需把它对应的数组设置为`null`即可。如下：

```
if (!fn) {
    vm._events[event] = null
    return vm
}
```

接着，如果既传入了事件名，又传入了回调函数，`cbs`也存在，那这就是第三种情况：如果同时提供了事件与回调，则只移除这个回调的监听器。那么我们只需遍历所有回调函数数组`cbs`，如果`cbs`中某一项与`fn`相同，或者某一项的`fn`属性与`fn`相同，那么就将其从数组中删除即可。如下：

```
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

被监听的事件是`event`，其原本对应的回调是`fn`，然后定义了一个子函数`on`。

在该函数内部，先通过`$on`方法订阅事件，同时所使用的回调函数并不是原本的`fn`而是子函数`on`，如下：

```
vm.$on(event, on)
```

当事件`event`被触发时，会执行子函数`on`。

然后在子函数内部先通过`$off`方法移除订阅的事件，这样确保该事件不会被再次触发，接着执行原本的回调`fn`，如下：

```
function on () {
    vm.$off(event, on)
    fn.apply(vm, arguments)
}
```

我们用子函数`on`替换了原本的订阅事件所对应的回调`fn`，那么在事件中心`_events`属性中存储的该事件名就会变成如下这个样子：

```
vm._events = {
    'xxx':[on]
}
```

但是用户自己却不知道传入的`fn`被替换了，当用户在触发该事件之前想用`$off`方法移除该事件时：

```
vm.$off('xxx',fn)
```

此时就会出现问题，因为在`_events`属性中的事件名`xxx`对应的回调函数列表中没有 `fn`，那么就会移除失败。这就让用户费解了，用户明明给 `xxx` 事件传入的回调函数是 `fn`，现在反而找不到 `fn` 导致事件移除不了了。

所以，为了解决这一问题，我们需要给 `on` 上绑定一个 `fn` 属性，属性值为用户传入的回调 `fn`，这样在使用\$off 移除事件的时候，`$off` 内部会判断如果回调函数列表中某一项的 `fn` 属性与 `fn` 相同时，就可以成功移除事件了。

#### 6.3 生命周期相关的方法

与生命周期想着的实例方法有 4 个，分别是`vm.$mount`、`vm.$forceUpdate`、`vm.$nextTick`和`vm.$destory`。其中，`$forceUpdate`和`$destroy`方法是在`lifecycleMixin`函数中挂载到`Vue`原型上的，`$nextTick`方法是在`renderMixin`函数中挂载到`Vue`原型上的，而`$mount`方法是在跨平台的代码中挂载到`Vue`原型上的。

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

- **作用：**

迫使`Vue`实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。

- **内部原理**

当实例依赖的数据发生变化时，变化的数据会通知其收集的依赖列表中的依赖进行更新，收集依赖就是收集`watcher`，依赖更新就是`watcher`调用`update`方法更新，所以实例依赖的数据发生变化时，就会通知实例`watcher`去执行`update`方法进行更新。

实例的重新渲染其实就是实例`watcher`执行了`update`方法。

`$forceUpdate`源码实现，代码如下：

```
Vue.prototype.$forceUpdate = function () {
    const vm: Component = this
    if (vm._watcher) {
        vm._watcher.update()
    }
}
```

当前实例的`_watcher`属性就是该实例的`watcher`，所以要想让实例重新渲染，我们只需手动的去执行一下实例`watcher`的`update`方法即可。

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

**用法**：

```
Vue.extend( options )
```

**参数**：

- `{Object} options`

**作用**：

使用基础`Vue`构造器，创建一个“子类”。参数是一个包含组件选项的对象。

**原理分析**：

`Vue.extend`的作用是创建一个继承自`Vue`类的子类，可接收的参数是一个包含组件选项的对象。

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

首先，该函数内部定义了几个变量，如下：

```
extendOptions = extendOptions || {}
const Super = this
const SuperId = Super.cid
const cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})
```

- `extendOptions`：用户传入的一个饮食组件选项的对象参数；
- `Super`：指向父类，即基础`Vue`类；
- `SuperId`：父类的`cid`属性，无论是基础`Vue`类继承而来的类，都有一个`cid`属性，作为该类的唯一标识；
- `cachedCtors`：缓存池，用于缓存创建出来的类；

接着，在缓存池中先尝试获取是否之前已经创建过的该子类，如果之前创建过，则直接返回之前创建的。之所以有这一步，是因为`Vue`为了性能考虑，反复调用`Vue.extend`其实应该返回同一个结果，只要返回结果是固定的，就可以将结果缓存，再次调用时，只需从缓存中取出结果即可。在 API 方法定义的最后，当创建完子类后，会使用父类的`cid`作为`key`，创建好的子类作为`value`，存入缓存池`cachedCtors`中。如下：

```
if (cachedCtors[SuperId]) {
    return cachedCtors[SuperId]
}
```

接着，获取到传入的选项参数中的`name`字段，并且在开发环境下校验`name`字段是否合法，如下：

```
const name = extendOptions.name || Super.options.name
if (process.env.NODE_ENV !== 'production' && name) {
    validateComponentName(name)
}
```

接着，创建一个类`Sub`，这个类就是将要继承基础`Vue`类的子类，如下：

```
const Sub = function VueComponent (options) {
    this._init(options)
}
```

到这里，我们已经把类创建好了，接下来的工作就是让该类去继承基础`Vue`类，让其具备一些基础 `Vue` 类的能力。

首先，将父类的原型继承到子类中，并且为子类添加唯一标识 `cid`，如下：

```
Sub.prototype = Object.create(Super.prototype)
Sub.prototype.constructor = Sub
Sub.cid = cid++
```

接着，将父类的`options`与子类的`options`进行合并，将合并结果赋给子类的`options`属性，如下：

```
Sub.options = mergeOptions(
    Super.options,
    extendOptions
)
```

接着，将父类保存到子类的`super`属性中，以确保在子类中能够拿到父类，如下：

```
Sub['super'] = Super
```

接着，如果选项中存在`props`属性，则初始化它，如下：

```
if (Sub.options.props) {
    initProps(Sub)
}

function initProps (Comp) {
  const props = Comp.options.props
  for (const key in props) {
    proxy(Comp.prototype, `_props`, key)
  }
}
```

初始化`props`属性其实就是把参数中传入的`props`选项代理到原型的`_props`中。

接着，如果选项中存在`computed`属性，则初始化它，如下：

```
if (Sub.options.computed) {
    initComputed(Sub)
}

function initComputed (Comp) {
  const computed = Comp.options.computed
  for (const key in computed) {
    defineComputed(Comp.prototype, key, computed[key])
  }
}
```

初始化`props`属性就是遍历参数中传入的`computed`选项，将每一项都调用`defineComputed`函数定义到子类原型上。此处的`defineComputed`函数与我们之前在生命周期初始化阶段`initState`中所介绍的`defineComputed`函数是一样的。

接着，将父类中的一些属性复制到子类中，如下：

```
Sub.extend = Super.extend
Sub.mixin = Super.mixin
Sub.use = Super.use

export const ASSET_TYPES = [
  'component',
  'directive',
  'filter'
]
// create asset registers, so extended classes
// can have their private assets too.
ASSET_TYPES.forEach(function (type) {
    Sub[type] = Super[type]
})
// enable recursive self-lookup
if (name) {
    Sub.options.components[name] = Sub
}
```

接着，给子类新增三个独有的属性，如下：

```
Sub.superOptions = Super.options
Sub.extendOptions = extendOptions
Sub.sealedOptions = extend({}, Sub.options)
```

最后，使用父类的`cid`作为`key`，创建好的子类`Sub`作为`value`，存入缓存池`cachedCtors`中。如下：

```
// cache constructor
cachedCtors[SuperId] = Sub
```

最终将创建好的子类 Sub 返回。

整个过程就是先创建一个类`Sub`，接着通过原型继承的方式将该类继承基础`Vue`类，然后给 `Sub` 类添加一些属性以及将父类的某些属性复制到 `Sub` 类上，最后将 `Sub` 类返回。

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

该 API 是用来注册或获取全局指令的，接收两个参数：指令`id`和指令的定义。这里需要注意一点的是：注册指令是将定义好的指令存放在某个位置，获取指令是根据指令`id`从存放指令的位置读取指令。

该 API 的内部实现原理，其代码如下：

```
Vue.options = Object.create(null)
Vue.options['directives'] = Object.create(null)

Vue.directive= function (id,definition) {
    if (!definition) {
        return this.options['directives'][id]
    } else {
        if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition }
        }
        this.options['directives'][id] = definition
        return definition
    }
}
```

可以看到，我们在`Vue`类上创建了`options`属性，其属性值为一个空对象，并且在`options`属性中添加了`directives`属性，其值也是一个空对象，这个`directives`属性就是用来存放指令的位置。如下：

```
Vue.options = Object.create(null)
Vue.options['directives'] = Object.create(null)
```

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

指令是作为标签属性写在模板中的 HTML 标签上的，那么又回到那句老话了，既然是写在模板中的，那它必然会经过模板编译，编译之后会产生虚拟 DOM，在虚拟 DOM 渲染更新时，除了更新节点的内容之外，节点上的一些指令、事件等内容也需要更新。另外，我们还知道，虚拟 DOM 节点的更新不只是更新一个已有的节点，也有可能是创建一个新的节点，还有可能是删除一个节点等等，这些都叫做虚拟 DOM 节点的更新。

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

```

```

```

```

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
