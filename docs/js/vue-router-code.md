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
// ...
import { inBrowser } from './util/dom'

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

利用`Vue.js`提供的插件机制`.use(plugin)`来安装`VueRouter`，而这个插件机制则会调用该`plugin`对象的`install`方法

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
      // 注册 VueComponent，进行observer处理
      registerInstance(this, this)
    },
    destroyed () {
        // 取消 VueComponent的注册
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

    //  钩子的合并策略
  const strats = Vue.config.optionMergeStrategies
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created
}
```

#### 3.3 match 匹配函数

匹配函数是由`src/create-matcher.js`中的`createMatcher`创建的，内部进行路由地址路由对象的转换、路由记录的映射、路由参数处理等操作

路由匹配器`macther`是由`create-matcher`生成一个对象，其将传入 VueRouter 类的路由记录进行内部转换，对外提供根据 location 匹配路由方法——match、注册路由方法——addRoutes。

- match 方法：根据内部的路由映射匹配 location 对应的路由对象 route
- addRoutes 方法：将路由记录添加 matcher 实例的路由映射中

```
export function createMatcher (
  routes: Array<RouteConfig>,
  router: VueRouter
): Matcher {
  const { pathList, pathMap, nameMap } = createRouteMap(routes)

    // 添加路由函数
  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap)
  }

    //   路由匹配
  function match (
    raw: RawLocation,
    currentRoute?: Route,
    redirectedFrom?: Location
  ): Route {
    const location = normalizeLocation(raw, currentRoute, false, router)
    const { name } = location

    if (name) {
      const record = nameMap[name]
      if (process.env.NODE_ENV !== 'production') {
        warn(record, `Route with name '${name}' does not exist`)
      }
      if (!record) return _createRoute(null, location)
      const paramNames = record.regex.keys
        .filter(key => !key.optional)
        .map(key => key.name)

      if (typeof location.params !== 'object') {
        location.params = {}
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (const key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key]
          }
        }
      }

      location.path = fillParams(record.path, location.params, `named route "${name}"`)
      return _createRoute(record, location, redirectedFrom)
    } else if (location.path) {
      location.params = {}
      for (let i = 0; i < pathList.length; i++) {
        const path = pathList[i]
        const record = pathMap[path]
        if (matchRoute(record.regex, location.path, location.params)) {
          return _createRoute(record, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)

    // ...

    //  返回matcher对象
    return {
        match,
        addRoutes
    }
  }
```

具体逻辑后续再具体分析，现在只需要理解为根据传入的`routes`配置生成对应的路由`map`，然后直接返回了`match`匹配函数。

继续来看`src/create-route-map.js`中的`createRouteMap`函数：

```
export function createRouteMap (
  routes: Array<RouteConfig>,
  oldPathList?: Array<string>,
  oldPathMap?: Dictionary<RouteRecord>,
  oldNameMap?: Dictionary<RouteRecord>
): {
  pathList: Array<string>,
  pathMap: Dictionary<RouteRecord>,
  nameMap: Dictionary<RouteRecord>
} {
  // the path list is used to control path matching priority
  const pathList: Array<string> = oldPathList || []
  // $flow-disable-line
  const pathMap: Dictionary<RouteRecord> = oldPathMap || Object.create(null)
  // $flow-disable-line
  const nameMap: Dictionary<RouteRecord> = oldNameMap || Object.create(null)

  routes.forEach(route => {
    addRouteRecord(pathList, pathMap, nameMap, route)
  })

  // ensure wildcard routes are always at the end
  for (let i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0])
      l--
      i--
    }
  }

  if (process.env.NODE_ENV === 'development') {
    // warn if routes do not include leading slashes
    const found = pathList
    // check for missing leading slash
      .filter(path => path && path.charAt(0) !== '*' && path.charAt(0) !== '/')

    if (found.length > 0) {
      const pathNames = found.map(path => `- ${path}`).join('\n')
      warn(false, `Non-nested routes must include a leading slash character. Fix the following routes: \n${pathNames}`)
    }
  }

  return {
    pathList,
    pathMap,
    nameMap
  }
}

function addRouteRecord (
  pathList: Array<string>,
  pathMap: Dictionary<RouteRecord>,
  nameMap: Dictionary<RouteRecord>,
  route: RouteConfig,
  parent?: RouteRecord,
  matchAs?: string
) {
  const { path, name } = route
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, `"path" is required in a route configuration.`)
    assert(
      typeof route.component !== 'string',
      `route config "component" for path: ${String(
        path || name
      )} cannot be a ` + `string id. Use an actual component instead.`
    )
  }

  const pathToRegexpOptions: PathToRegexpOptions =
    route.pathToRegexpOptions || {}
  const normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict)

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive
  }

  const record: RouteRecord = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name,
    parent,
    matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props:
      route.props == null
        ? {}
        : route.components
          ? route.props
          : { default: route.props }
  }

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (
        route.name &&
        !route.redirect &&
        route.children.some(child => /^\/?$/.test(child.path))
      ) {
        warn(
          false,
          `Named Route '${route.name}' has a default child route. ` +
            `When navigating to this named route (:to="{name: '${
              route.name
            }'"), ` +
            `the default child route will not be rendered. Remove the name from ` +
            `this route and use the name of the default child route for named ` +
            `links instead.`
        )
      }
    }
    route.children.forEach(child => {
      const childMatchAs = matchAs
        ? cleanPath(`${matchAs}/${child.path}`)
        : undefined
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs)
    })
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path)
    pathMap[record.path] = record
  }

  if (route.alias !== undefined) {
    const aliases = Array.isArray(route.alias) ? route.alias : [route.alias]
    for (let i = 0; i < aliases.length; ++i) {
      const alias = aliases[i]
      if (process.env.NODE_ENV !== 'production' && alias === path) {
        warn(
          false,
          `Found an alias with the same value as the path: "${path}". You have to remove that alias. It will be ignored in development.`
        )
        // skip in dev to make it work
        continue
      }

      const aliasRoute = {
        path: alias,
        children: route.children
      }
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      )
    }
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        `Duplicate named routes definition: ` +
          `{ name: "${name}", path: "${record.path}" }`
      )
    }
  }
}

function compileRouteRegex (
  path: string,
  pathToRegexpOptions: PathToRegexpOptions
): RouteRegExp {
  const regex = Regexp(path, [], pathToRegexpOptions)
  if (process.env.NODE_ENV !== 'production') {
    const keys: any = Object.create(null)
    regex.keys.forEach(key => {
      warn(
        !keys[key.name],
        `Duplicate param keys in route with path: "${path}"`
      )
      keys[key.name] = true
    })
  }
  return regex
}

function normalizePath (
  path: string,
  parent?: RouteRecord,
  strict?: boolean
): string {
  if (!strict) path = path.replace(/\/$/, '')
  if (path[0] === '/') return path
  if (parent == null) return path
  return cleanPath(`${parent.path}/${path}`)
}
```

可以看出主要做的事情就是根据用户路由配置对象生成普通的根据`path`来对应的路由记录以及根据`name`来对应的路由记录的 map，方便后续匹配对应。

#### 3.4 实例化 History

```
export class History {
  router: Router
  base: string
  current: Route
  pending: ?Route
  cb: (r: Route) => void
  ready: boolean
  readyCbs: Array<Function>
  readyErrorCbs: Array<Function>
  errorCbs: Array<Function>

  // implemented by sub-classes
  +go: (n: number) => void
  +push: (loc: RawLocation) => void
  +replace: (loc: RawLocation) => void
  +ensureURL: (push?: boolean) => void
  +getCurrentLocation: () => string

  constructor (router: Router, base: ?string) {
    this.router = router
    this.base = normalizeBase(base)
    // start with a route object that stands for "nowhere"
    this.current = START
    this.pending = null
    this.ready = false
    this.readyCbs = []
    this.readyErrorCbs = []
    this.errorCbs = []
  }

  listen (cb: Function) {
    this.cb = cb
  }

  onReady (cb: Function, errorCb: ?Function) {
    if (this.ready) {
      cb()
    } else {
      this.readyCbs.push(cb)
      if (errorCb) {
        this.readyErrorCbs.push(errorCb)
      }
    }
  }

// transitionTo  方法
// ...  看下面解释

// confirmTransition 方法
// ... 看下面解释

  updateRoute (route: Route) {
    const prev = this.current
    this.current = route
    this.cb && this.cb(route)
    this.router.afterHooks.forEach(hook => {
      hook && hook(route, prev)
    })
  }
}
```

#### 3.5 transitionTo

使用`transitionTo`触发路由变化

```
transitionTo (
    location: RawLocation,
    onComplete?: Function,
    onAbort?: Function
  ) {
      //  获取匹配的路上信息
    const route = this.router.match(location, this.current)
    // 确认切换路由
    this.confirmTransition(
      route,
      () => {

        this.updateRoute(route)
        onComplete && onComplete(route)
        this.ensureURL()

        // fire ready cbs once
        if (!this.ready) {
          this.ready = true
          this.readyCbs.forEach(cb => {
            cb(route)
          })
        }
      },
      err => {
        if (onAbort) {
          onAbort(err)
        }
        if (err && !this.ready) {
          this.ready = true
          this.readyErrorCbs.forEach(cb => {
            cb(err)
          })
        }
      }
    )
  }
```

#### 3.6 confirmTransition 方法

根据路由变化，更改相应视图

```
// 确认过滤
confirmTransition (route: Route, onComplete: Function, onAbort?: Function) {
    const current = this.current
    const abort = err => {
      // after merging https://github.com/vuejs/vue-router/pull/2771 we
      // When the user navigates through history through back/forward buttons
      // we do not want to throw the error. We only throw it if directly calling
      // push/replace. That's why it's not included in isError
      if (!isExtendedError(NavigationDuplicated, err) && isError(err)) {
        if (this.errorCbs.length) {
          this.errorCbs.forEach(cb => {
            cb(err)
          })
        } else {
          warn(false, 'uncaught error during route navigation:')
          console.error(err)
        }
      }
      onAbort && onAbort(err)
    }
    //  如果路由没有变化，则放弃视图变化
    if (
      isSameRoute(route, current) &&
      // in the case the route map has been dynamically appended to
      route.matched.length === current.matched.length
    ) {
      this.ensureURL()
      return abort(new NavigationDuplicated(route))
    }

    const { updated, deactivated, activated } = resolveQueue(
      this.current.matched,
      route.matched
    )

    //  整个切换周期的队列
    const queue: Array<?NavigationGuard> = [].concat(
      // in-component leave guards
      extractLeaveGuards(deactivated),
      // global before hooks
      this.router.beforeHooks,
      // in-component update hooks
      extractUpdateHooks(updated),
      // in-config enter guards
      activated.map(m => m.beforeEnter),
      // async components
      resolveAsyncComponents(activated)
    )

    this.pending = route
    // 迭代器，用于执行queue中的导航守卫钩子
    const iterator = (hook: NavigationGuard, next) => {
        // 路由不相等就不跳转路由
      if (this.pending !== route) {
        return abort()
      }
      try {
        // 执行钩子
        hook(route, current, (to: any) => {

          if (to === false || isError(to)) {
            // next(false) -> abort navigation, ensure current URL
            this.ensureURL(true)
            abort(to)
          } else if (
            typeof to === 'string' ||
            (typeof to === 'object' &&
              (typeof to.path === 'string' || typeof to.name === 'string'))
          ) {
            // next('/') or next({ path: '/' }) -> redirect
            abort()
            if (typeof to === 'object' && to.replace) {
              this.replace(to)
            } else {
              this.push(to)
            }
          } else {
            // confirm transition and pass on the value
            next(to)
          }
        })
      } catch (e) {
        abort(e)
      }
    }

    // 执行异步函数
    runQueue(queue, iterator, () => {
      const postEnterCbs = []
      const isValid = () => this.current === route
      // wait until async components are resolved before
      // extracting in-component enter guards
      const enterGuards = extractEnterGuards(activated, postEnterCbs, isValid)
      const queue = enterGuards.concat(this.router.resolveHooks)
      runQueue(queue, iterator, () => {
          // 跳转完成
        if (this.pending !== route) {
          return abort()
        }
        this.pending = null
        onComplete(route)
        if (this.router.app) {
          this.router.app.$nextTick(() => {
            postEnterCbs.forEach(cb => {
              cb()
            })
          })
        }
      })
    })

    // 更新当前 route 对象
    updateRoute (route: Route) {
        const prev = this.current
        this.current = route
        this.cb && this.cb(route)
        this.router.afterHooks.forEach(hook => {
        hook && hook(route, prev)
        })
    }
  }
```

#### 3.6 router-view 组件

router-view 是一个函数式组件不存在自己的组件实例，只负责调用父组组件上存储的`keepAlive`、`$route.match`等相关的属性/方法来控制路由对应的组件的渲染情况。

router-view 组件可以嵌套来配合实现嵌套路由，其自身所在的页面位置最终是其匹配上的路由组件所挂载的位置。

相关代码如下：

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

#### 3.7 router-link 组件

router-link 是一个普通组件，内部取消了`a标签`的默认跳转行为，并控制了组件与`control`、`meta`等按键同时存在的兼容性问题，提供了当前激活路由切尔西的样式类；

通过`to`来决定点击事件跳转的目标路由，通过` append``replace `等属性改变默认路由跳转的行为。

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
    const { location, route, href } = router.resolve(
        this.to,
        current,
        this.append
        )

    const classes = {}
    const globalActiveClass = router.options.linkActiveClass
    const globalExactActiveClass = router.options.linkExactActiveClass
    // Support global empty active class
    const activeClassFallback =
      globalActiveClass == null ? 'router-link-active' : globalActiveClass
    const exactActiveClassFallback =
      globalExactActiveClass == null
        ? 'router-link-exact-active'
        : globalExactActiveClass
    const activeClass =
      this.activeClass == null ? activeClassFallback : this.activeClass
    const exactActiveClass =
      this.exactActiveClass == null
        ? exactActiveClassFallback
        : this.exactActiveClass

    const compareTarget = route.redirectedFrom
      ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router)
      : route

    classes[exactActiveClass] = isSameRoute(current, compareTarget)
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget)

    const handler = e => {
      if (guardEvent(e)) {
        if (this.replace) {
          router.replace(location, noop)
        } else {
          router.push(location, noop)
        }
      }
    }

    //  事件注册
    const on = { click: guardEvent }
    if (Array.isArray(this.event)) {
      this.event.forEach(e => {
        on[e] = handler
      })
    } else {
      on[this.event] = handler
    }

    const data: any = { class: classes }

    const scopedSlot =
      !this.$scopedSlots.$hasNormal &&
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        href,
        route,
        navigate: handler,
        isActive: classes[activeClass],
        isExactActive: classes[exactActiveClass]
      })

    if (scopedSlot) {
      if (scopedSlot.length === 1) {
        return scopedSlot[0]
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
        if (process.env.NODE_ENV !== 'production') {
          warn(
            false,
            `RouterLink with to="${
              this.props.to
            }" is trying to use a scoped slot but it didn't provide exactly one child.`
          )
        }
        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot)
      }
    }

    if (this.tag === 'a') {
      data.on = on
      data.attrs = { href }
    } else {
      // find the first <a> child and apply listener and href
      const a = findAnchor(this.$slots.default)
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false
        const aData = (a.data = extend({}, a.data))
        aData.on = aData.on || {}
        // transform existing events in both objects into arrays so we can push later
        for (const event in aData.on) {
          const handler = aData.on[event]
          if (event in on) {
            aData.on[event] = Array.isArray(handler) ? handler : [handler]
          }
        }
        // append new listeners for router-link
        for (const event in on) {
          if (event in aData.on) {
            // on[event] is always a function
            aData.on[event].push(on[event])
          } else {
            aData.on[event] = handler
          }
        }

        const aAttrs = (a.data.attrs = extend({}, a.data.attrs))
        aAttrs.href = href
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on
      }
    }
        // 创建元素
        return h(this.tag, data, this.$slots.default)
    }
  }
}

// 统一处理事件

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return
  // don't redirect when preventDefault called
  if (e.defaultPrevented) return
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) return
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    const target = e.currentTarget.getAttribute('target')
    if (/\b_blank\b/i.test(target)) return
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault()
  }
  return true
}

```

可以看出`router-link`组件就是在其点击的时候根据设置的`to`的值去调用`router`的`push`或者`replace`来更新路由的，同时呢，会检查自身是否和当前路由匹配（严格切尔西和包含匹配）来决定自身的`activeClass`是否添加。

### 参考资料

- [vue-router 的超神之路](https://mp.weixin.qq.com/s/a5yAusm9dCryQ61xZOCjnA)
- [深入了解 Vue | Vue-Router | Vuex 源码与架构](https://github.com/biaochenxuying/vue-family-mindmap)
- [VueRouter 源码深度解析](https://juejin.im/post/5b5697675188251b11097464)
- [vue-router 源码分析-整体流程](https://github.com/DDFE/DDFE-blog/issues/9)
- [vue-router 源码分析-整体流程](https://github.com/dwqs/blog/issues/53)
- [带你全面分析 vue-router 源码（万字长文）](https://juejin.im/post/5e456513f265da573c0c6d4b)
- [从 vue-router 看前端路由的两种实现](https://zhuanlan.zhihu.com/p/27588422)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
