# webpack 插件及自定义插件

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [常用的插件](#一、常用的插件)
- [自定义插件](#二、自定义插件)

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

- webpack 插件组成
- Webpack 插件基本架构
- 插件触发时机
- 插件运行机制
- 写一个自定义插件

#### 2.1 webpack 插件组成

构成如下：

- 一个具名 JavaScript 函数
- 在它的原型上定义 apply 方法
- 指定一个触及到 webpack 本身的事件钩子
- 操作 Webpack 内部的实例特定数据
- 在实现功能后调用 Webpack 提供的 callback

#### 2.2 Webpack 插件基本架构

```
class HelloWorldPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('Hello World Plugin', (
      stats /* 在 hook 被触及时，会将 stats 作为参数传入。*/
    ) => {
      console.log('Hello World!');
    });
  }
}
module.exports = HelloWorldPlugin;
```

使用插件

```
// webpack.config.js
var HelloWorldPlugin = require('hello-world');

module.exports = {
  // ... 这里是其他配置 ...
  plugins: [new HelloWorldPlugin({ options: true })]
};
```

#### 2.3 插件触发时机

插件触发时机，其实是选择插件触发的 compiler 钩子。Webpack 提供钩子有很多，这里简单介绍几个（完整具体可参考文档《[Compiler Hooks](https://webpack.js.org/api/compiler-hooks/)》）：

- `entryOption`：在 webpack 选项中的`entry`配置项处理过之后，执行插件。
- `afterPlugins`：设置完初始插件之后，执行插件。
- `compilation`：编译创建之后，生成文件之前，执行插件。
- `emit`：生成资源到`output`目录之前
- `done`：编译完成

在`compiler.hooks`下指定**事件钩子函数**，便会触发钩子时，执行回调函数。Webpack 提供三种触发钩子的方法：

- `tap`：以**同步方式**触发钩子
- `tapAsync`：以**异步方式**触发钩子
- `tapPromise`：以**异步方式**触发钩子，返回 Promise

#### 2.4 插件运行机制

![images](webpack-plguin.jpeg)

#### 2.5 写一个自定义插件

```
创建一个名称为SetScriptTimestampPlugin.js

class SetScriptTimestampPlugin{
    apply(compiler){
        compiler.hooks.compilation.tap('SetScriptTimestampPlugin',
        (compilation, callback) => {
            // 插件逻辑 调用compilation提供的plugin方法
        compilation.plugin(
          "html-webpack-plugin-before-html-processing",
          function(htmlPluginData, callback) {
            // 读取并修改 script 上 src 列表
            let jsScr = htmlPluginData.assets.js[0];
            htmlPluginData.assets.js = [];
            let result = `
                <script>
                    let scriptDOM = document.createElement("script");
                    let jsScr = "./${jsScr}";
                    scriptDOM.src = jsScr + "?" + new Date().getTime();
                    document.body.appendChild(scriptDOM)
                </script>
            `;
            let resultHTML = htmlPluginData.html.replace(
              "<!--SetScriptTimestampPlugin inset script-->", result
            );
            // 返回修改后的结果
            htmlPluginData.html = resultHTML;
          }
        );
        })
    }
}
```

使用插件

```
const SetScriptTimestampPlugin = require("./SetScriptTimestampPlugin.js");
module.exports = {
  plugins: [
    new SetScriptTimestampPlugin()
  ]
}
```

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
