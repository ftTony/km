# webpack 插件及自定义插件

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 常用的插件
- 自定义插件

### 一、常用的插件

- `CommonsChunkPlugin` 创建一个公用的 `chunk`，常用于将第三方 `lib` 抽取成公用 js，例如

```
entry:{
    vendor:['jquery','other-lib'],
    app:'./entry'
}

new CommonsChunkPlugin({
    name:'vendor',
    filename:'vendor.js',
    minChunks:infinity
})
```

- `define-plugin`：定义环境变量
- `html-webpack-plugin`：简化 html 文件创建
- `uglifyjs-webpack-plugin`：通过`UglifyES`压缩`ES6`代码
- `webpack-parallel-uglify-plugin`：多核压缩，提高压缩速度
- `webpack-bundle-analyzer`：可以视化 webpack 输出文件的体积
- `mini-css-extract-plugin`：CSS 提取到单独的文件中，支持按需加载 -`HotMouleReplacementPlugin` 启用 `module`热替换

### 二、自定义插件

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
