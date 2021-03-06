# Vue 中的 computed,watch,methods 理解与分析

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [理解 Vue 中的 computed 用法](#一、理解-vue-中的-computed-用法)
- [computed 和 methods 的区别](#二、computed-和-methods-的区别)
- [Vue 中的 watch 的用法](#三、vue-中的-watch-的用法)
- [computed 和 watch 的区别](#四、computed-和-watch-的区别)
- [运用的场景](#五、运用的场景)
- [computed 的基本原理及源码实现](#六、computed-的基本原理及源码实现)

### 一、理解 Vue 中的 computed 用法

computed 是计算属性的；它会根据所依赖的数据动态显示新计算结果，该计算结果会被缓存起来。computed 的值在 getter 执行后会被缓存的。如果所依赖的数据发生改变时候，就会重新调用 getter 来计算最新的结果。

#### 1.1 computed 应用场景

- 适用于一些重复使用数据或复杂及费时的运算。我们可以把它放入 compute 中进行计算，然后会在 computed 中缓存起来，下次就可以直接获取了。
- 如果我们需要的数据依赖于其他的数据的话，我们可以把数据设计为 computed 中。

### 二、computed 和 methods 的区别

1. computed 是基于响应性依赖来进行缓存的。只有在响应式依赖发生改变时它们才会重新求值，也就是说，当 msg 属性值没有发生改变时，多次访问 reversedMsg 计算属性会立即返回之前缓存的计算结果，而不会再次执行 computed 中的函数。但是 methods 方法中是每次调用，都会执行函数的，methods 它不是响应式的。
2. computed 中的成员可以只定义一个函数作为只读属性，也可以定义成 get/set 变成可以读写属性，但是 methods 中的成员没有这样的。

示例如下：

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>计算属性</title>
    <script type="text/javascript" src="https://cn.vuejs.org/js/vue.js"></script>
</head>

<body>
    <div id="app">
        <div>第一次调用computed属性：{{reversedMsg}}</div>
        <div>第二次调用computed属性：{{reversedMsg}}</div>
        <div>第三次调用computed属性：{{reversedMsg}}</div>
        <!-- 下面是methods调用 -->
        <div>第一次调用methods方法：{{reversedMsg1()}}</div>
        <div>第二次调用methods方法：{{reversedMsg1()}}</div>
        <div>第三次调用methods方法：{{reversedMsg1()}}</div>
    </div>
    <script type="text/javascript">
        var vm = new Vue({
            el: '#app',
            data: {
                msg: 'hello'
            },
            computed: {
                reversedMsg() {
                    console.log(1111)
                    // this 指向 vm实例
                    return this.msg.split('').reverse().join('');
                }
            },
            methods: {
                reversedMsg1() {
                    console.log(2222);
                    // this 指向vm实例
                    return this.msg.split('').reverse().join('')
                }
            }
        })
        console.log(vm);
    </script>
</body>

</html>
```

执行后的结果如下所示：

![images](vue-watch01.png)

如上代码我们可以看到，在 computed 中有属性 reversedMsg，然后在该方法中会打印 111；信息出来，在 methods 中的方法 reversedMsg1 也会打印 2222 信息出来，但是在 computed 中，我们除了第一次之后，再次获取 reversedMsg 值后拿得是缓存里面的数据，因此就不会再执行该 reversedMsg 函数了。但是在 methods 中，并没有缓存，每次执行 reversedMsg1()方法后，都会打印信息。

如上面代码, 我们调用了 computed 中的 reversedMsg 方法一共有三次，如果我们也有上百次调用或上千次调用的话, 如果依赖的数据没有改变, 那么每次调用都要去计算一遍, 那么肯定会造成很大的浪费。因此 computed 就是来优化这件事的。

### 三、Vue 中的 watch 的用法

watch 它是一个对 data 的数据监听回调，当依赖的 data 的数据变化时，会执行回调。在回调中会传入 newVal 和 oldVal 两个参数。

Vue 实例将会在实例化时调用`$watch()`，他会遍历 watch 对象的每一个属性。

#### 3.1 watch 的使用场景

当在 data 的某个数据发生变化时，我们需要做一些操作，或者当需要在数据变化时执行异步或开销较大的操作时，我们就可以使用 watch 来进行监听。

普通代码如下：

```
<!DOCTYPE html>
<html>
<head>
  <title>vue</title>
  <meta charset="utf-8">
  <script type="text/javascript" src="https://cn.vuejs.org/js/vue.js"></script>
</head>
<body>
  <div id="app">
    <p>空智个人信息情况: {{ basicMsg }}</p>
    <p>空智今年的年龄: <input type="text" v-model="age" /></p>
  </div>
  <script type="text/javascript">
    var vm = new Vue({
      el: '#app',
      data: {
        basicMsg: '',
        age: 31,
        single: '单身'
      },
      watch: {
        age(newVal, oldVal) {
          this.basicMsg = '今年' + newVal + '岁' + ' ' + this.single;
        }
      }
    });
  </script>
</body>
</html>
```

如上代码，当我们在 input 输入框中输入年龄后，比如 32，那么 watch 就能对'age'这个属性进行监听，当值发生改变的时候，就会把最新的计算结果赋值给'basicMsg'属性值，因此最后在页面上就会显示'basicMsg'属性值了。

#### 3.2 handler 方法及 immediate 属性

watch 有一个特点是：第一次寝化页面的时候，是不会去执行 age 这个属性监听的，只有当 age 值发生改变的时候才会执行监听计算。因此我们上面第一次初始化页面的时候，'basicMsg'属性默认为空字符串。那么我们现在想要第一次初始化页面的时候也希望它能够执行'age'进行监听，最后能把结果返回给'basicMsg'值来。因此我们需要修改下我们的 watch 的方法，需要引入 handler 方法和 immediate 属性，代码如下所示：

```
<!DOCTYPE html>
<html>
<head>
  <title>vue</title>
  <meta charset="utf-8">
  <script type="text/javascript" src="https://cn.vuejs.org/js/vue.js"></script>
</head>
<body>
  <div id="app">
    <p>空智个人信息情况: {{ basicMsg }}</p>
    <p>空智今年的年龄: <input type="text" v-model="age" /></p>
  </div>
  <script type="text/javascript">
    var vm = new Vue({
      el: '#app',
      data: {
        basicMsg: '',
        age: 31,
        single: '单身'
      },
      watch: {
        age: {
          handler(newVal, oldVal) {
            this.basicMsg = '今年' + newVal + '岁' + ' ' + this.single;
          },
          immediate: true
        }
      }
    });
  </script>
</body>
</html>
```

如上代码，我们给我们的 age 属性绑定了一个 handler 方法。其实我们之前的 watch 当中的方法默认就是这个 handler 方法。但是在这里我们使用了 immediate:true 属性，含义是：如果在 watch 里面声明了 age 的话，就会立即执行里面的 handler 方法。如果 immediate 值为 false 的话，那么效果就和之前的一样，就不会立即执行 handler 这个方法的。因此设置了 immediate:true 的话，第一次页面加载的时候也会执行该 handler 函数的。即第一次 basicMsg 有值。

#### 3.3 理解 deep 属性

deep 属性作用是否深度监听某个对象的值，该值默认为 false。代码如下：

```
<!DOCTYPE html>
<html>
<head>
  <title>vue</title>
  <meta charset="utf-8">
  <script type="text/javascript" src="https://cn.vuejs.org/js/vue.js"></script>
</head>
<body>
  <div id="app">
    <p>空智个人信息情况: {{ basicMsg }}</p>
    <p>空智今年的年龄: <input type="text" v-model="obj.age" /></p>
  </div>
  <script type="text/javascript">
    var vm = new Vue({
      el: '#app',
      data: {
        obj: {
          basicMsg: '',
          age: 31,
          single: '单身'
        }
      },
      watch: {
        'obj': {
          handler(newVal, oldVal) {
            this.basicMsg = '今年' + newVal.age + '岁' + ' ' + this.obj.single;
          },
          immediate: true,
          deep: true // 需要添加deep为true即可对obj进行深度监听
        }
      }
    });
  </script>
</body>
</html>
```

### 四、computed 和 watch 的区别

`computed`：是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值；

`watch`：更多的是「观察」的作用，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作；

### 五、运用的场景

- 当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；
- 当我们需要在数据变化时执行异步或开销圈套的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作（访问一个 API），限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算计算属性无法做到的。

### 六、computed 的基本原理及源码实现

#### 6.1 理解 Vue 源码中 computed 实现流程

`new Vue({})`入口，因此会调用`vue/src/core/instance/index.js`中的 init 函数代码，如下所示：

```
import { initMixin } from './init'
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
initMixin(Vue);

..... 更多代码省略

export default Vue;
```

上面代码，会执行`this._init(options);`方法内部，因此会调用`vue/src/core/instance/init.js` 文件中的\_init 方法, 基本代码如下所示:

```
import { initState } from './state';
export function initMixin (Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {
    .... 更多代码省略
    initState(vm);
    .... 更多代码省略
  }
}
```

继续执行 initState(vm);中的代码了，因此会调用`vue/src/core/instance/state.js`中的文件代码，基本代码如下：

```
import config from '../config'
import Watcher from '../observer/watcher'
import Dep, { pushTarget, popTarget } from '../observer/dep'

// ..... 更多代码省略

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

如上代码，我们这边最主要的要看`if (opts.computed) initComputed(vm, opts.computed)`这句代码；判断`vm.$options.computed`是否有，如果有的话，就执行`initComputed(vm,opts.computed);`函数。因此我们找到 initComputed 函数代码如下：

```
function initComputed (vm: Component, computed: Object) {
  // $flow-disable-line
  const watchers = vm._computedWatchers = Object.create(null)
  // computed properties are just getters during SSR
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
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      )
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
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

如上代码，首先使用`Object.create(null);`创建一个空对象，分别赋值给 watchers;和 vm.\_computedWatchers;接着执行代码：`const isSSR = isServerRendering();`判断是否是服务器端渲染，我们这边肯定不是服务器端渲染，因此`const isSSR = false;`,接着使用 for in 循环遍历 computed; 代码：`for (const key in computed) { const userDef = computed[key] };`，最后我们会根据 computed 中的 key 来实例化 watcher，因此我们可以理解为其实 computed 就是 watcher 的实现，通过一个发布订阅模式来监听的。

#### 6.2 Vue 源码中的 Watcher

```
//  初始化 Watch
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


// 创建Watcher
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

### 参考资料

- [vue 系列---理解 Vue 中的 computed,watch,methods 的区别及源码实现(六)](https://www.cnblogs.com/tugenhua0707/p/11760466.html)
- [Vue 计算属性和侦听属性](https://github.com/ljianshu/Blog/issues/68)
- [手把手带你实现一个最精简的响应式系统来学习 Vue 的 data、computed、watch 源码](https://juejin.im/post/5db6433b51882564912fc30f)
- [Vue 的计算属性如何实现缓存？（原理深入揭秘）](https://mp.weixin.qq.com/s/KVepdDX9Cs3eon5jcmP__w)
- [实现最精简的响应式系统来学习 Vue 的 data、computed、watch 源码](https://mp.weixin.qq.com/s/PNCXukFWp-DSgklRa_mARg)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
