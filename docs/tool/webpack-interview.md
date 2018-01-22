# 面试必备！webpack 中那些最易混淆的 5 个知识点

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- `module`，`chunk`和`bundle`的区别是什么？
- `filename`和`chunkFilename`的区别
- `webpackPrefetch`、`webpackPreload` 和 `webpackChunkName` 到底是干什么的？
- `hash`、`chunkhash`、`contenthash`有什么不同？
- `sourse-map` 中 `eval`、`cheap`、`inline` 和 `module` 各是什么意思？

### 一、`module`，`chunk`和`bundle`的区别是什么？

我这里举个例子，给大家**形象化**的解释一下。

首先我们在`src`目录下写我们的业务代码，引入`index.js`、`utils.js`、`common.js`和`index.css`这 4 个文件，目录结构如下：

```
src/
├── index.css
├── index.html # 这个是 HTML 模板代码
├── index.js
├── common.js
└── utils.js
```

`index.css`写一点儿简单的样式：

```
body {
    background-color: red;
}
```

`utils.js`文件写个求平方的工具函数：

```
export function square(x) {
    return x * x;
}
```

`common.js`文件写个`log`工具函数：

```
module.exports = {
  log: (msg) => {
    console.log('hello ', msg)
  }
}
```

`index.js`文件做一些简单的修改，引入`css`文件和`common.js`：

```
import './index.css';
const { log } = require('./common');

log('webpack');
```

`webpack`的配置如下：

```
{
    entry: {
        index: "../src/index.js",
        utils: '../src/utils.js',
    },
    output: {
        filename: "[name].bundle.js", // 输出 index.js 和 utils.js
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // 创建一个 link 标签
                    'css-loader', // css-loader 负责解析 CSS 代码, 处理 CSS 中的依赖
                ],
            },
        ]
    }
    plugins: [
        // 用 MiniCssExtractPlugin 抽离出 css 文件，以 link 标签的形式引入样式文件
        new MiniCssExtractPlugin({
            filename: 'index.bundle.css' // 输出的 css 文件名为 index.css
        }),
    ]
}
```

我们运行一下 webpack，看一下打包的结果：

![images](webpack04.png)

我们可以看出，`index.css`和`common.js`在`index.js`中被引入，打包生成的`index.bundle.css`和`index.bundle.js` 都属于 `chunk 0`，`utils.js` 因为是独立打包的，它生成的 `utils.bundle.js` 属于 `chunk 1`。

感觉还有些绕？我做了一张图，你肯定一看就懂：

![images](webpack05.png)

看这个图就很明白了：

一般来说一个`chunk`对应一个`bundle`，比如上图中的`utils.js` -> `chunks 1` -> `utils.bundle.js`；但也有例外，比如说上图中，我就用 `MiniCssExtractPlugin` 从 `chunks 0` 中抽离出了 `index.bundle.css`文件。

#### 一句话总结

`module`，`chunk` 和 `bundle` 其实就是同一份逻辑代码在不同转换场景下的取了三个名字：我们直接写出来的是 module，webpack 处理时是 chunk，最后生成浏览器可以直接运行的 bundle。

### 二、`filename`和`chunkFilename`的区别

- filename
- chunkFilename

#### 2.1 filename

`filename`是一个很常见的配置，就是对应于`entry`里面的输入文件，经过 webpack 打包后输出文件的文件名。比如说经过下面的配置，生成出来的文件名为`index.min.js`。

```
{
    entry: {
        index: "../src/index.js"
    },
    output: {
        filename: "[name].min.js", // index.min.js
    }
}
```

![images](webpack06.png)

#### 2.2 chunkFilename

`chunkFilename`指未被列在`entry`中，却又需要被打包出来的`chunk`文件的名称。一般来说，这个`chunk`文件指的就是要**懒加载**的代码。

比如说我们业务代码中写了一份懒加载`lodash`的代码：

```
// 文件：index.js

// 创建一个 button
let btn = document.createElement("button");
btn.innerHTML = "click me";
document.body.appendChild(btn);

// 异步加载代码
async function getAsyncComponent() {
    var element = document.createElement('div');
    const { default: _ } = await import('lodash');

    element.innerHTML = _.join(['Hello!', 'dynamic', 'imports', 'async'], ' ');

    return element;
}

// 点击 button 时，懒加载 lodash，在网页上显示 Hello! dynamic imports async
btn.addEventListener('click', () => {
    getAsyncComponent().then(component => {
        document.body.appendChild(component);
    })
})
```

我们的`webpack`不做任何配置，还是原来的配置代码：

```
{
    entry: {
        index: "../src/index.js"
    },
    output: {
        filename: "[name].min.js", // index.min.js
    }
}
```

这时候的打包结果如下：

![images](webpack07.png)

这个`1.min.js`就是异步加载的`chunk`文件。[文档](https://webpack.docschina.org/configuration/output/#output-chunkfilename)里这么解释：

> `output.chunkFilename` 默认使用`[id].js`或从`output.filename`中推断出的值（`[name]`会被预先替换为 `[id]` 或 `[id]`.）

文档写的太抽象，我们不如结合上面的例子来看：

`output.filename`的输出文件名是`[name].min.js`，`[name]` 根据`entry`的配置推断为`index`，所以输出为 `index.min.js`；

由于`output.chunkFilename`没有显示指定，就会把`[name]`替换为`chunk`文件的`id`号，这里文件的`id`号是`1`，所以文件名就是`1.min.js`。

如果我们显式配置`chunkFilename`，就会按配置的名字生成文件：

```
{
    entry: {
        index: "../src/index.js"
    },
    output: {
        filename: "[name].min.js",  // index.min.js
        chunkFilename: 'bundle.js', // bundle.js
    }
}
```

![images](webpack08.png)

#### 2.3 总结

- `filename`指列在`entry`中，打包后输出的文件的名称。
- `chunkFilename`指未列在`entry`中，却又需要被打包出来的文件的名称。

### 三、`webpackPrefetch`、`webpackPreload` 和 `webpackChunkName` 到底是干什么的？

这几个名词其实都是 webpack [魔法注释（magic comments）](https://webpack.docschina.org/api/module-methods/#magic-comments)里的，文档中说了 6 个配置，配置都可以组合起来用。我们说说最常用的三个配置。

**webpackChunkName**

```
{
    entry: {
        index: "../src/index.js"
    },
    output: {
        filename: "[name].min.js",  // index.min.js
        chunkFilename: '[name].bundle.js', // 1.bundle.js，chunk id 为 1，辨识度不高
    }
}

```

![images](webpack09.png)

这时候`webpackChunkName`就可以派上用场了。我们可以在`import`文件时，在`import`里以注释的形式为`chunk`文件取别名：

```
async function getAsyncComponent() {
    var element = document.createElement('div');

    // 在 import 的括号里 加注释 /* webpackChunkName: "lodash" */ ，为引入的文件取别名
    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

    element.innerHTML = _.join(['Hello!', 'dynamic', 'imports', 'async'], ' ');

    return element;
}
```

这时候打包生成的文件是这样的：

![images](webpack10.png)

现在问题来了，`lodash`是我们取的名字，按道理来说应该生成`lodash.bundle.js`啊，前面的 `vendors~` 是什么玩意？

其实`webpack`懒加载是用内置的一个插件[SplitChunksPlugin](https://webpack.docschina.org/plugins/split-chunks-plugin)实现的，这个插件里面有些默认配置项，比如说`automaticNameDelimiter`，默认的分割符就是`~`，所以最后的文件名才会出现这个符号，这块儿内容我就不引申了，感兴趣的同学可以自己研究一下。

**webpackPrefetch 和 webpackPreload**

这两个配置一个叫预拉取（Prefetch），一个叫预加载（Preload），两者有些细微的不同，我们先说说 `webpackPrefetch`。

在上面的懒加载代码里，我们是点击按钮时，才会触发异步加载`lodash`的动作，这时候会动态的生成一个`script`标签，加载到`head`头里：

![images](webpack11.png)

如果我们`import`的时候添加`webpackPrefetch`：

```
...

const { default: _ } = await import(/* webpackChunkName: "lodash" */ /* webpackPrefetch: true */ 'lodash');

...
```

就会以`<link rel="prefetch" as="script">`的形式预拉取`lodash`代码：

![images](webpack12.png)

这个异步加载的代码不需要手动点击 button 触发，webpack 会在父 chunk 完成加载后，闲时加载`lodash`文件。

`webpackPreload`是预加载当前导航下可能需要资源，他和`webpackPrefetch`的主要区别是：

- `preload chunk`会在父`chunk`加载时，以并行方式开始加载。`prefetch chunk`会在父`chunk`加载结束后开始加载。
- `preload chunk`具有中等优先级，并立即下载。`prefetch chunk`在浏览器闲置时下载。
- `preload chunk`会在父`chunk`中立即请求，用于当下时刻。`prefetch chunk`会用于未来的某个时刻

#### 总结

- `webpackChunkName`是为预加载的文件取别名
- `webpackPrefetch`会在浏览器闲置下载文件
- `webpackPreload`会在父 chunk 加载时并行下载文件

### 四、`hash`、`chunkhash`、`contenthash`有什么不同？

首先来个背景介绍，哈希一般是结合 CDN 缓存来使用的。如果文件内容改变的话，那么对应文件哈希值也会改变，对应的 HTML 引用的 URL 地址也会改变，触发 CDN 服务器从源服务器上拉取对应数据，进而更新本地缓存。

- hash
- chunkhash
- contenthash

#### 4.1 hash

hash 计算是跟整个项目的构建相关，我们做一个简单的 demo。

沿用案例 1 的 demo 代码，文件目录如下：

```
src/
├── index.css
├── index.html
├── index.js
└── utils.js
```

`webpack`的核心配置如下（省略了一些`module`配置信息）：

```
{
    entry: {
        index: "../src/index.js",
        utils: '../src/utils.js',
    },
    output: {
        filename: "[name].[hash].js",  // 改为 hash
    },

    ......

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.[hash].css' // 改为 hash
        }),
    ]
}
```

生成的文件名如下：

![images](webpack13.png)

我们可以发现，生成文件的`hash`和项目的构建`hash`都是一模一样的。

#### 4.2 chunkhash

因为`hash`是项目构建的哈希值，项目中如果有些变动，`hash`一定会变，比如说我改动了`utils.js`的代码，`index.js`里的代码虽然没有改变，但是大家都是用的同一份`hash`。`hash`一变，缓存一定失效了，这样子是没办法实现 `CDN`和浏览器缓存的。

`chunkhash`就是解决这个问题的，它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的`chunk`，生成对应的哈希值。

我们再举个例子，我们对`utils.js`里文件进行改动：

```
export function square(x) {
    return x * x;
}

// 增加 cube() 求立方函数
export function cube(x) {
    return x * x * x;
}
```

然后把`webpack`里的所有`hash`改为`chunkhash`：

```
{
    entry: {
        index: "../src/index.js",
        utils: '../src/utils.js',
    },
    output: {
        filename: "[name].[chunkhash].js", // 改为 chunkhash
    },

    ......

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.[chunkhash].css' // // 改为 chunkhash
        }),
    ]
}
```

构建结果如下：

![images](webpack14.png)

我们可以看出，`chunk 0`的`hash`都是一样的，`chunk 1`的`hash`和上面的不一样。

假设我又把`utils.js`里的`cube()`函数去掉，再打包：

![images](webpack15.png)

对比可以发现，只有`chunk 1`的`hash`发生变化，`chunk 0`的`hash`还是原来的。

#### 4.3 contenthash

我们更近一步，`index.js`和`index.css`同为一个`chunk`，如果`index.js`内容发生变化，但是 `index.css`没有变化，打包后他们的`hash`都发生变化，这对`css`文件来说是一种浪费。如何解决这个问题呢？

`contenthash`将根据资源内容创建出唯一`hash`，也就是说文件内容不变，`hash`就不变。
我们修改一下`webpack`的配置：

```
{
    entry: {
        index: "../src/index.js",
        utils: '../src/utils.js',
    },
    output: {
        filename: "[name].[chunkhash].js",
    },

    ......

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.[contenthash].css' // 这里改为 contenthash
        }),
    ]
}
```

我们对`index.js`文件做了`3`次修改（就是改了改`log`函数的输出内容，过于简单就先不写了），然后分别构建，结果截图如下：

![images](webpack16.png)

![images](webpack17.png)

![images](webpack18.png)

我们可以发现，`css`文件的`hash`都没有发生改变。

#### 4.4 总结

- `hash`计算与整个项目的构建相关；
- `chunkhash`计算与同一`chunk`内容相关；
- `contenthash`计算与文件内容本身相关。

### 五、`sourse-map` 中 `eval`、`cheap`、`inline` 和 `module` 各是什么意思？

`sourse-map`，里面都有个`map`了，肯定是映射的意思。`sourse-map`就是一份**源码和转换后代码的映射文件**。具体的原理内容较多，感兴趣的同学可以自行搜索，我这里就不多言了。

![images](webpack03.png)

如果再仔细看一下，就发现这 13 种大部分都是`eval`、`cheap`、`inline` 和 `module`这 4 个词排列组合的，我做了个简单的表格，比官网上直白多了：

| 参数   | 参数解释                                                                |
| ------ | ----------------------------------------------------------------------- |
| eval   | 打包后的模块都使用`eval()`执行，行映射可能不准；不产生独立的 map 文件   |
| cheap  | map 映射只显示行不显示列，忽略源自 loader 的 source map                 |
| inline | 映射文件以 base64 格式编码，加在 bundle 文件最后，不产生独立的 map 文件 |
| module | 增加对 loader source map 和第三方模块的映射                             |

### 六、loader 和 plugin 的区别

- 主要区别
- 常用的 plugin
- 常用的 loader

### 6.1 主要区别

- `loader`用于加载某些资源文件。因为 webpack 本身只能打包`commonjs`规范的 js 文件，对于其他资源例如 css，图片，或者其他的语法集，比如 jsx，coffee，是没有办法加载的。这就是需要对应的 loader 将资源转化，加载进来。从字面意思也能看出，loader 是用于加载的，它作用于一个个文件上。
- `plugin`用于扩展 webpack 的功能。它直接作用 webpack，扩展了它的功能。当然 loader 也时变相的扩展了 webpack，但是它只专注于文件（transform）这一个领域。而 plugin 的功能更加的丰富，而不仅局限于资源的加载。

### 6.2 常用的 plugin

- CommonsChunkPlugin 创建一个公用的 chunk，常用于将第三方 lib 抽取成公用 js，例如

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

### 6.3 常用的 loader

### 参考资料

- [面试必备！webpack 中那些最易混淆的 5 个知识点](https://juejin.im/post/5cede821f265da1bbd4b5630)
- [【webpack 进阶】你真的掌握了 loader 么？- loader 十问](https://github.com/alienzhou/blog/issues/21)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
