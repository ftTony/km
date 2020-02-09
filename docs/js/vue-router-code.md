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

#### 3.1 index

```

```

#### 3.2 install

```

```

#### 3.3 match 匹配函数

```

```

#### 3.4 实例化 History

```

```

#### 3.5 transitionTo

```

```

#### 3.6 router-link 组件

```

```

#### 3.7 router-view 组件

```

```

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
