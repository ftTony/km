# 常用 loader 及手写 loader

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

### loader 写法

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
