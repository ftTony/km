# vue-router 源码分析

## 前言

关于 vue-router 原理及使用可以参考[上一篇文章](https://km.xiaowuzi.info/js/vue-router.html)

## 内容

- [源码目录设计](#一、源码目录设计)
- [入口]()

### 一、源码目录设计

Vue-Router 的源码都在 src 目录下，其目录结构如下。

```
├── components  // 组件
│   ├── link.js   // route-link的实现
│   └── view.js   // route-view的实现
├── create-matcher.js  // 创建匹配
├── create-route-map.js  // 创建路由的映射
├── history  // 操作浏览器记录的一系列内容
│   ├── abstract.js  // 非浏览器的history
│   ├── base.js    // 基本的history
│   ├── hash.js    // hash模式的history
│   └── html5.js   // html5模式的history
├── index.js   // 入口文件
├── install.js  // 插件安装的方法
└── util   // 工具类库
    ├── async.js    // 异步操作的工具库
    ├── dom.js    // dom相关的函数
    ├── location.js     // 对location的处理
    ├── misc.js     // 一个工具方法
    ├── params.js   // 处理参数
    ├── path.js     // 处理路径
    ├── push-state.js  // 处理html模式的 pushState
    ├── query.js  //对query的处理
    ├── resolve-components.js  //异步加载组件
    ├── route.js  // 路由
    ├── scroll.js  //处理滚动
    └── warn.js  // 打印一些警告
```

### 二、Vue-router 整体流程图

![images](vue11.png)

### 三、官方案例

官方仓库下 `examples/basic` 基础例子

```
import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. 使用插件.
// 安装 <router-view> and <router-link>组件,
// 且给当前应用下所有的组件都注入 $router and $route 对象
Vue.use(VueRouter)

// 2. 定义各个路由下使用的组件，简称路由组件
const Home = {
  template: '<div>home</div>'
}
const Foo = {
  template: '<div>foo</div>'
}
const Bar = {
  template: '<div>bar</div>'
}
const Unicode = {
  template: '<div>unicode</div>'
}

// 3. 创建 VueRouter 实例router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/foo',
      component: Foo
    },
    {
      path: '/bar',
      component: Bar
    },
    {
      path: '/é',
      component: Unicode
    }
  ]
})

// 4. 创建 启动应用
// 一定要确认注入了router
// 在<router-view>中将会渲染路由组件
new Vue({
  router,
  data: () => ({
    n: 0
  }),
  template: `
    <div id="app">
      <h1>Basic</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/foo">/foo</router-link></li>
        <li><router-link to="/bar">/bar</router-link></li>
        <router-link tag="li" to="/bar" :event="['mousedown', 'touchstart']">
          <a>/bar</a>
        </router-link>
        <li><router-link to="/é">/é</router-link></li>
        <li><router-link to="/é?t=%25ñ">/é?t=%ñ</router-link></li>
        <li><router-link to="/é#%25ñ">/é#%25ñ</router-link></li>
        <router-link to="/foo" v-slot="props">
          <li :class="[props.isActive && 'active', props.isExactActive && 'exact-active']">
            <a :href="props.href" @click="props.navigate">{{ props.route.path }} (with v-slot).</a>
          </li>
        </router-link>
      </ul>
      <button id="navigate-btn" @click="navigateAndIncrement">On Success</button>
      <pre id="counter">{{ n }}</pre>
      <pre id="query-t">{{ $route.query.t }}</pre>
      <pre id="hash">{{ $route.hash }}</pre>
      <router-view class="view"></router-view>
    </div>
  `,

  methods: {
    navigateAndIncrement() {
      const increment = () => this.n++
      if (this.$route.path === '/') {
        this.$router.push('/foo', increment)
      } else {
        this.$router.push('/', increment)
      }
    }
  }
}).$mount('#app')
```

### 三、vueRouter 内部方法分析

#### 3.1 index 入口

利用 Vue.js 提供的插件机制`.use(plugin)`来安装`VueRouter`，而这个插件机制则会调用该`plugin`对象的`install`方法（当然如果该`plugin`没有该方法的话会把`plugin`自身作为函数来调用）；下边来看下 vue-router 这个插件具体的实现部分。

`VueRouter`对象是在`src/index.js`中暴露出来的，这个对象一个静态的`install`方法：

```

import { install } from './install'
i// ...
import { inBrowser } from './util/dom'
import { cleanPath } from './util/path'
import { createMatcher } from './create-matcher'
import { normalizeLocation } from './util/location'
import { supportsPushState } from './util/push-state'

import { HashHistory } from './history/hash'
import { HTML5History } from './history/html5'
import { AbstractHistory } from './history/abstract'

import type { Matcher } from './create-matcher'

export default class VueRouter {
  static install: () => void;
  static version: string;

  app: any;
  apps: Array<any>;
  ready: boolean;
  readyCbs: Array<Function>;
  options: RouterOptions;
  mode: string;
  history: HashHistory | HTML5History | AbstractHistory;
  matcher: Matcher;
  fallback: boolean;
  beforeHooks: Array<?NavigationGuard>;
  resolveHooks: Array<?NavigationGuard>;
  afterHooks: Array<?AfterNavigationHook>;

  constructor (options: RouterOptions = {}) {
    this.app = null
    this.apps = []
    this.options = options
    this.beforeHooks = []
    this.resolveHooks = []
    this.afterHooks = []
    //  创建match 匹配函数
    this.matcher = createMatcher(options.routes || [], this)

    // 根据 mode 实例化具体的 History
    let mode = options.mode || 'hash'
    this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false
    if (this.fallback) {
      mode = 'hash'
    }
    if (!inBrowser) {
      mode = 'abstract'
    }
    this.mode = mode

    //  判断mode模式，对不同模式做不同的处理
    switch (mode) {
      case 'history':
        this.history = new HTML5History(this, options.base)
        break
      case 'hash':
        this.history = new HashHistory(this, options.base, this.fallback)
        break
      case 'abstract':
        this.history = new AbstractHistory(this, options.base)
        break
      default:
        if (process.env.NODE_ENV !== 'production') {
          assert(false, `invalid mode: ${mode}`)
        }
    }
  }

 // 省略相关代码

VueRouter.install = install
VueRouter.version = '__VERSION__'

// 自动使用插件
if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter)
}

```

可以看到这是一个 Vue.js 插件的经典写法，给插件对象增加`install`方法用来安装插件具体逻辑，同时在最后判断下如果是在浏览器环境且存在`window.Vue`的话就会自动使用插件。

#### 3.2 install

```
// 引入router-view router-link 组件
import View from './components/view'
import Link from './components/link'

// export 一个Vue 引用
export let _Vue

// 安装函数
export function install (Vue) {
  if (install.installed && _Vue === Vue) return
  install.installed = true

  _Vue = Vue

  const isDef = v => v !== undefined

  const registerInstance = (vm, callVal) => {
    let i = vm.$options._parentVnode
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal)
    }
  }

  //  beforeCreate mixin
  Vue.mixin({
    beforeCreate () {
      // 判断是否有 router
      if (isDef(this.$options.router)) {
        this._routerRoot = this
        // 赋值_router
        this._router = this.$options.router
        //  初始化
        this._router.init(this)
        //  定义响应的_route对象
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
      registerInstance(this, this)
    },
    destroyed () {
      registerInstance(this)
    }
  })

  // 注入  $router $route
  Object.defineProperty(Vue.prototype, '$router', {
    get () { return this._routerRoot._router }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get () { return this._routerRoot._route }
  })

  //  注册组件
  Vue.component('RouterView', View)
  Vue.component('RouterLink', Link)

  const strats = Vue.config.optionMergeStrategies
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created
}
```

#### 3.3 match 匹配函数

匹配函数是由`src/create-matcher.js`中的`createMatcher`创建的

```

```

具体逻辑后续再具体分析，现在只需要理解为根据传入的`routes`配置生成对应的路由`map`，然后直接返回了`match`匹配函数。

继续来看`src/create-route-map.js`中的`createRouteMap`函数：

```

```

可以看出主要做的事情就是根据用户路由配置对象生成普通的根据`path`来对应的路由记录以及根据`name`来对应的路由记录的 map，方便后续匹配对应。

#### 3.4 实例化 History

```

```

#### 3.5 transitionTo

```

```

#### 3.6 router-view 组件

`router-view`组件比较简单，所以这里就先来分析它，他是在源码的`src/components/view.js`中定义的：

```
export default {
  name: 'router-view',
  functional: true,   //  功能组件，纯粹渲染
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render (_, { props, children, parent, data }) {
  }
}
```

从上面代码看，逻辑还是比较简单的，拿到匹配的组件进行渲染就可以了。

#### 3.7 router-link 组件

导航链接组件，他在源码的`src/components/link.js`中定义的：

```
import { createRoute, isSameRoute, isIncludedRoute } from '../util/route'
// ...
export default {
  name: 'router-link',
  props: {

  },
  render (h:Function){
    // 得到router 实例以及当前激活的route对象
    const router = this.$router
    const current = this.$route
  }
}

```

可以看出`router-link`组件就是在其点击的时候根据设置的`to`的值去调用`router`的`push`或者`replace`来更新路由的，同时呢，会检查自身是否和当前路由匹配（严格切尔西和包含匹配）来决定自身的`activeClass`是否添加。

### 参考资料

- [vue-router 的超神之路](https://mp.weixin.qq.com/s/a5yAusm9dCryQ61xZOCjnA)
- [深入了解 Vue | Vue-Router | Vuex 源码与架构](https://github.com/biaochenxuying/vue-family-mindmap)
- [VueRouter 源码深度解析](https://juejin.im/post/5b5697675188251b11097464)
- [vue-router 源码分析-整体流程](https://github.com/DDFE/DDFE-blog/issues/9)
- [vue-router 源码分析-整体流程](https://github.com/dwqs/blog/issues/53)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
