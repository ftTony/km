# webpack 源码分析

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

### webpack配置文件vscode调试配置文件

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

- [[webpack]源码解读：命令行输入 webpack 的时候都发生了什么？](https://github.com/DDFE/DDFE-blog/issues/12)
- [Webpack 源码解析](https://github.com/lihongxun945/diving-into-webpack)
- [webpack 处理流程分析](https://mp.weixin.qq.com/s/1BH90Nn6rfcOfywGpvWwhA)
- [webpack 源码精读](https://mp.weixin.qq.com/s/BuCRMzfmjSZKWk_zhEeVag)
- [【webpack 进阶】使用 babel 避免 webpack 编译运行时模块依赖](https://github.com/alienzhou/blog/issues/18)
- [webpack 原理](https://segmentfault.com/a/1190000015088834)
- [急速 debug 实战三（Node - webpack 插件,babel 插件,vue 源码篇）](https://juejin.im/post/5c6b6defe51d45798b51e4b2)
- [Webpack 运行机制](https://github.com/jerryOnlyZRJ/webpack-loader/blob/master/docs/webpack-principle.md)
- [窥探原理：手写一个 JavaScript 打包器](https://juejin.im/post/5e04c935e51d4557ea02c097)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
