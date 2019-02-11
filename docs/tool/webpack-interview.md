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

`filename`是一个很常见的配置，就是对应于`entry`里面的输入文件，经过webpack打包后输出文件的文件名。比如说经过下面的配置，生成出来的文件名为`index.min.js`。

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

>`output.chunkFilename` 默认使用`[id].js`或从`output.filename`中推断出的值（`[name]`会被预先替换为 `[id]` 或 `[id]`.）

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

### 四、`hash`、`chunkhash`、`contenthash`有什么不同？

#### 4.4 总结

- `hash`计算与整个项目的构建相关；
- `chunkhash`计算与同一`chunk`内容相关；
- `contenthash`计算与文件内容本身相关。

### 五、`sourse-map` 中 `eval`、`cheap`、`inline` 和 `module` 各是什么意思？

`sourse-map`，里面都有个`map`了，肯定是映射的意思。`sourse-map`就是一份**源码和转换后代码的映射文件**。具体的原理内容较多，感兴趣的同学可以自行搜索，我这里就不多言了。

![images](webpack03.png)

如果再仔细看一下，就发现这 13 种大部分都是`eval`、`cheap`、`inline` 和 `module`这4个词排列组合的，我做了个简单的表格，比官网上直白多了：

| 参数   | 参数解释                                                            |
| ------ | ------------------------------------------------------------------- |
| eval   | 打包后的模块都使用`eval()`执行，行映射可能不准；不产生独立的map文件 |
| cheap  | map映射只显示行不显示列，忽略源自loader的source map                 |
| inline | 映射文件以base64格式编码，加在bundle文件最后，不产生独立的map文件   |
| module | 增加对 loader source map 和第三方模块的映射                         |


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