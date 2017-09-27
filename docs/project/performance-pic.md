# 图片优化

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 为什么要对图片进行优化
- 从图片大小开始优化
- 通过图片按需加载减少请求压力
- 响应式图片的实践
- 安全地使用 WebP 图片
- 对 Base64Url 的反思

### 一、为什么要对图片进行优化

### 二、从图片大小开始优化

压缩图片可以使用统一的压缩工具—imagemin，它是一款可以集成多个压缩库的工具，支持 jpg、png、webp 等等格式的图片压缩，比如 pngquant，mozjpeg 等等，作为测试用途，我们可以直接安装 imagemin-pngquant 来尝试 png 图片的压缩

#### 2.1 PNG 压缩

```
npm install imagemin
npm install imagemin-pngquant
```

这里先安装 imagemin 库，再安装对应的 png 压缩库

```
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
        await imagemin(['images/*.png'], 'build/images', {
            plugins: [
                imageminPngquant({ quality: '65-80' })
            ]
        });

        console.log('Images optimized');
})();
```

#### 2.2 JPG/JPEG 压缩与渐进式图片

压缩 jpg/jpeg 图片的方式与 png 类似,imagemin 提供了一两个插件：jpegtrain 和 mozjpeg 供我们使用。一般我们选择 mozjpeg，它拥有更丰富的压缩选项：

```
npm install imagemin-mozjpeg
```

```
 const imagemin = require('imagemin');
    const imageminMozjpeg = require('imagemin-mozjpeg');

    (async () => {
        await imagemin(['images/*.jpg'], 'build/images', {
            use: [
                imageminMozjpeg({ quality: 65, progressive: true })
            ]
        });

        console.log('Images optimized');
    })();
```

#### 2.3 在真实项目中如何操作？

实际项目中，总不能 UI 丢一个图过来你就跑一遍压缩代码吧？幸好 imagemin 有对应的 webpack 插件，在 webpack 遍地使用的今天，我们可以轻松指压缩：

```
npm install imagemin-webpack-plugin
```

先安装 imagemin-webpack-plugin

```
 import ImageminPlugin from 'imagemin-webpack-plugin'
    import imageminMozjpeg from 'imagemin-mozjpeg'

    module.exports = {
      plugins: [
        new ImageminPlugin({
          plugins: [
            imageminMozjpeg({
              quality: 100,
              progressive: true
            })
          ]
        })
      ]
    }
```

### 三、通过图片按需加载减少请求压力

图片按需加载是个老生常谈的话题，传统做法自然是通过监听页面的滚动位置，符合条件了再去资源加载，我们看看如今还有什么方法可以做到按需加载。

#### 3.1 使用强大的 IntersectionObserver

#### 3.2 还是 Chrome 的黑科技——loading 属性

### 四、响应式图片的实践

我们经常会遇到这种情况：一张在普通笔记本上显示清晰的图片，到了苹果的 Retina 屏幕或是其他高清晰度的屏幕上，就变得模糊了。

这是因为，在同样尺寸的屏幕上，高清屏可以展示的物理像素点比普通屏多，比如 Retina 屏，同样

### 五、安全地使用 WebP 图片

### 六、对 Base64Url 的反思

#### 6.1 让 css 文件的体积失去控制

#### 6.2 让浏览器的资源缓存策略功亏一篑

#### 6.3 低版本浏览器的兼容问题

这是比较次要的问题，dataurl 在低版本 IE 浏览器，比如 IE8 及以下的浏览器，会有兼容性问题

#### 6.4 不利于开发者工具调试与查看

## 参考资料

- [Web 性能优化：图片优化](http://www.cnblogs.com/wizcabbit/p/web-image-optimization.html)
- [图像优化自动化实用指南](https://mp.weixin.qq.com/s/3aosOSPut-zkqJDhBfVQ1Q)
- [你必须知道的图片优化技巧](https://mp.weixin.qq.com/s/oJy2fncLjtlt9XmPRWnqVw)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
