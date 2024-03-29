# PWA 介绍

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [什么是 PWA](#一、什么是-pwa)
- [PWA 特性](#二、pwa-特性)
- [PWA 优、缺点](#三、pwa-优、缺点)
- [PWA 关键技术](#四、pwa-关键技术)
- [PWA 与其它 App 的对比](#五、pwa-与其它-app-的对比)

### 一、什么是 PWA

PWA 全称 Progressive Web App，直译是渐进式 WEB 应用，是 Google 在 2015 年提出，2016 年 6 月才推广的项目。是结合了一系列现代 Web 技术的组合，在网页应用中实现和原生应用相近的用户体验。

所谓的 P（Progressive）这里有两层含义，一方面是渐进增强，让 WEB APP 的体验和功能能够用渐进增强的方式来更接近原生 APP 的体验及功能；另一方面是指下一代 WEB 技术，PWA 并不是描述一个技术，而是一些技术的合集。

### 二、PWA 特性

- **渐进增强** - 能够让每一位用户使用，无论用户使用什么浏览器，因为它是始终以渐进增强为原则。
- **响应式用户界面** - 适应任何环境：桌面电脑，智能手机，笔记本电脑，或者其他设备。
- **不依赖网络连接** - 通过 service workers 可以在离线或者网速极差的环境下工作。
- **类原生应用** - 有像原生应用般的交互和导航给用户原生应用般的体验，因为它是建立在 app shell model 上的。
- **持续更新** - 受益于 service worker 的更新进程，应用能够始终保持更新。
- **安全** - 通过 HTTPS 来提供服务来防止网络窥探，保证内容不被篡改。
- **可发现** - 得益于 W3C manifests 元数据和 service worker 的登记，让搜索引擎能够找到 web 应用。
- **再次访问** - 通过消息推送等特性让用户再次访问变得容易。
- **可安装** - 允许用户保留对他们有用的应用在主屏幕上，不需要通过应用商店。
- **可连接性** - 通过 URL 可以轻松分享应用，不用复杂的安装即可运行。

### 三、PWA 优、缺点

#### 3.1 优点

- 上面提到的，所有这些现代 Web 特性。
- Web 最重要的意义在于开放和去中心化，这才是万维网的初衷

#### 3.2 缺点

- 门槛不低。部署的服务器要求 HTTPS，ServiceWorker 涉及 API 众多，需要单独学习
- 浏览器支持不够全面。苹果 Safari 短时间内不会支持，5 年计划里可能实施
- 用户体验习惯。网页应用替代原生应用的方式，用户短时间内不适应

### 四、PWA 关键技术

#### 4.1 Manifest（应用清单）

Web App Manifest 是一个 W3C 规范，定义了一个基于 JSON 的清单，为开发人员提供一个放置与 Web 应用程序关联的元数据的集中地点。manifest 就是 PWA 概念的一环，它给你了控制你的应用如何出现在用户期待出现的地方（比如用户手机主屏幕），这直接影响到用户能启动什么，以及更重要的，用户如何启动它。

使用 web 应用程序清单，你的应用可以：

- 能够真实存在于用户主屏幕上
- 在 Android 上能够全屏启动，不显示地址栏
- 控制屏幕方向已获得最佳效果
- 定义启动画面，为你的站点定义主题
- 追踪你的应用是从主屏幕还是 URL 启动的

例如：

```
{
  "lang": "en",
  "dir": "ltr",
  "name": "Donate App",
  "description": "This app helps you donate to worthy causes.",
  "short_name": "Donate",
  "icons": [{
    "src": "icon/lowres.webp",
    "sizes": "64x64",
    "type": "image/webp"
  },{
    "src": "icon/lowres.png",
    "sizes": "64x64"
  }, {
    "src": "icon/hd_hi",
    "sizes": "128x128"
  }],
  "scope": "/racer/",
  "start_url": "/racer/start.html",
  "display": "fullscreen",
  "orientation": "landscape",
  "theme_color": "aliceblue",
  "background_color": "red",
  "serviceworker": {
    "src": "sw.js",
    "scope": "/racer/",
    "use_cache": false
  },
  "screenshots": [{
    "src": "screenshots/in-game-1x.jpg",
    "sizes": "640x480",
    "type": "image/jpeg"
  },{
    "src": "screenshots/in-game-2x.jpg",
    "sizes": "1280x920",
    "type": "image/jpeg"
  }]
}
```

#### 4.2 Service Workers

参考[Service Workers 学习](https://km.xiaowuzi.info/html5/service-workers.html)

#### 4.3 Push Notification（推送通知）

Push 和 Notification 是两个不同的功能，涉及到两个 API，但是它们之前有依赖关系。

Notification 这块应该大家多少了解一些，属于浏览器发出的通知消息，之前需要浏览器一直开着才能实现这种通知，但是现在有了上面提到的 Service Worker，就可以驻留在进程里面操作了。

Push & Notification 关系：

- Push : 服务器端将更新的信息传递给 Service Worker
- Notification: Service Worker 将更新的信息推送给用户

### 五、PWA 与其它 App 的对比

#### 5.1 Native APP

Native APP，指原生 App，是一个完整的 App，可拓展性强，需要用户下载安装使用。

**优点**

- 可使用移动设备所有功能
- 速度快、性能高、用户体验好
- 离线使用

**缺点**

开发成本高、维护成本高
每个不通的平台都要重新开发
应用商店审核复杂，效率低

#### 5.2 Web App

Web App 指采用 Html5 语言写出的 App，生活在浏览器里的应用，不需要下载安装。

**优点**

- 跨平台开发、无需下载、无需安装,开发速度快
- 发布灵活，因为根本不需要应用商店的审核
- 较低的开发成本
- 可即时上线
- 用户可以直接使用最新版本
- 支持设备广泛

**缺点**

- 只能使用有限的移动设备 API
- 浏览器兼容问题
- 无法上传到应用商店
- 用户暂时不适用

#### 5.3 Hybrid App

Hybrid APP 指的是半原生半 Web 的混合类 App，需要下载安装。

**优点**

- 兼容多平台
- Web 前端工作人员就可快速构建
- 可以上传到应用商店
- 可以基于浏览器的方式进行页面调试
- 可使用的移动设备的 API 多

**缺点**

- 用户体验不如原生应用
- 为模拟原生样式，需要大量的 html 和 css
- 性能稍慢

### 参考资料

- [PWA 入门](https://zhuanlan.zhihu.com/p/32601560)
- [【PWA 学习与实践】(1) 2018，开始你的 PWA 学习之旅](https://github.com/alienzhou/blog/issues/2)
- [【PWA 学习与实践】(2) 使用 Manifest，让你的 WebApp 更“Native”](https://github.com/alienzhou/blog/issues/3)
- [27 | 渐进式网页应用（PWA）：它究竟解决了 Web 应用的哪些问题？](https://time.geekbang.org/column/article/144983)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
