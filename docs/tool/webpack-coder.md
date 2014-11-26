# webpack 源码分析

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- Webpack 源码阅读技巧

### 一、Webpack 源码阅读技巧

#### 1.1 找到关键文件

**bin/webpack.js**

`node_modules\webpack\bin\webpack.js`，找到 webpack，Ctrl + 鼠标点击 ==> 就可以快速找到 webpack 的位置

**lib/webpack.js**

`node_modules\webpack\lib\webpack.js`，这是 webpack 的入口文件，可以从这里开始阅读源码

#### 1.2 debug 代码

在 vscode 中调试，设置配置文件

```
"version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "启动程序",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/node_modules/webpack-dev-server/bin/webpack-dev-server.js",
            "args": ["--progress", "--inline", "--config", "build/webpack.demo.js"]
        }
    ]
```

### 参考资料

- [webpack 打包原理 ? 看完这篇你就懂了 !](https://juejin.im/post/5e116fce6fb9a047ea7472a6)
- [Webpack 源码解析](https://github.com/lihongxun945/diving-into-webpack)
- [webpack 处理流程分析](https://mp.weixin.qq.com/s/1BH90Nn6rfcOfywGpvWwhA)
- [webpack 源码精读](https://mp.weixin.qq.com/s/BuCRMzfmjSZKWk_zhEeVag)
- [【webpack 进阶】使用 babel 避免 webpack 编译运行时模块依赖](https://github.com/alienzhou/blog/issues/18)
- [webpack 原理](https://segmentfault.com/a/1190000015088834)
- [急速 debug 实战三（Node - webpack 插件,babel 插件,vue 源码篇）](https://juejin.im/post/5c6b6defe51d45798b51e4b2)
- [窥探原理：手写一个 JavaScript 打包器](https://juejin.im/post/5e04c935e51d4557ea02c097)
- [从 0 到 1 实现一款简易版 Webpack](https://juejin.im/post/5da56e34f265da5b932e73fa)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
