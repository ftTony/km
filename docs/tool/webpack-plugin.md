# webpack 插件及自定义插件

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 调用插件 apply 函数传入 compiler 对象
- 通过 compiler 对象监听

插件代码

```
//@file: plugins/myplugin.js
class myPlugin {
    constructor(options){
        //用户自定义配置
        this.options = options
        console.log(this.options)
    }
    apply(compiler) {
        console.log("This is my first plugin.")
    }
}

module.exports = myPlugin
```

webpack 代码

```
const MyPlugin = require('./plugins/myplugin-4.js')

module.exports = {
    ......,
    plugins: [
        new MyPlugin("Plugin is instancing.")
    ]
}
```

具体参数可以参考《深入浅出 webpack》

### 参考资料

- [【Webpack】513- Webpack 插件开发如此简单！](https://mp.weixin.qq.com/s/LTAlkoyS3C2yiLkFriu-Cw)
- [编写自定义 webpack plugin](https://github.com/jerryOnlyZRJ/webpack-loader/blob/master/docs/webpack-plugin.md)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
