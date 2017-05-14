# vue-router 源码分析

## 前言

关于 vue-router 原理及使用可以参考[上一篇文章](https://km.xiaowuzi.info/js/vue-router.html)

## 内容

- [源码目录设计](#一、源码目录设计)

### 一、源码目录设计

Vue-Router 的源码都在 src 目录下，其目录结构如下。

```
├─dist                   # 项目构建后的文件
├─scripts                # 与项目构建相关的脚本和配置文件
├─build                   # 构建配置文件webpack.config.js
├─src                    # 项目源代码
│    ├─compontents          # 与组件相关代码
│    │  ├─link        # <router-link>组件代码
│    │  ├─view           # <router-view>组件相关代码
│    ├─history            # 与服务端渲染相关的代码
│    ├─util         # 工具相关代码
│    ├─ create-matcher              # 创建匹配路由规则
│    ├─ create-route-map         # 创建路由映射表
│    ├─install.js           # vue-router安装
│    └─index.js            # 入口文件
└─test                   # 项目测试代码
```

### 参考资料

- [vue-router 的超神之路](https://mp.weixin.qq.com/s/a5yAusm9dCryQ61xZOCjnA)
- [深入了解 Vue | Vue-Router | Vuex 源码与架构](https://github.com/biaochenxuying/vue-family-mindmap)
- [VueRouter 源码深度解析](https://juejin.im/post/5b5697675188251b11097464)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
