# 常用 loader 及手写 loader

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

### 一、常用 loader

- `file-loader`：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件
- `url-loader`：和`file-loader`类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去
- `source-map-loader`：加载额外的 Source Map 文件，以方便断点调试
- `image-loader`：加载并且压缩图片文件
- `babel-loader`：把 ES6 转换成 ES5
- `css-loader`：加载 CSS，支持模块化、压缩、文件导入等特性
- `style-loader`：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。
- `eslint-loader`：通过 ESlint 检查 JavaScript 文件

### 二、自定义 loader

步骤：

1. 获得 loader 的 options，是通过`require (’ loader-utils ’);`
2. 返回其他结果，是调用`callback`
3. 缓存加速，调用 this.cacheable(false);

具体参数可以参考《深入浅出 webpack》

#### 1.1 loader 文件

```
const loaderUtils = require('loader-utils');

module.exports = function (content) {
    // 获取用户配置的options 同步
    const options=loaderUtils.getOptions(this);
    console.log('***options***',options);
    this.callback(null,'{}'+content);
    return '{};'+content;
}
```

#### 7.2 webpack 配置文件

```
{
    test: /\.js$/,
    exclude: /node_modules/,
       use: {
           //这里是我的自定义loader的存放路径
           loader: path.resolve('./loaders/index.js'),
           options: {
              test: 1
           }
       }
}
```

### 参考资料

- [编写自定义 webpack loader](https://github.com/jerryOnlyZRJ/webpack-loader/blob/master/docs/webpack-loader.md)
- [【webpack 进阶系列(八)】写个 loader](https://github.com/amandakelake/blog/issues/90)
- [简单实用的 webpack-html-include-loader（附开发详解）](https://mp.weixin.qq.com/s/KHXVIKXKdj4Wknbx-HaGxA)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
