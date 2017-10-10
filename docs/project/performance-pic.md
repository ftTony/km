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

对于大多数前端工程师来说，图片就是 UI 设计师（或者自己）切好的图，你要做的只是把图片丢进项目中，然后用以链接的方式呈现在页面上，而且我们也经常把精力放在项目的打包优化构建上，如何分包，如何抽取第三方库....有时我们会忘了，图片才是一个网站最大头的那块加载资源，虽然图片加载可以不阻碍页面渲染，但优化图片，绝对可以让网站的体验提升一个档次。

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

我们可以在 quanilty 一项决定压缩比率，65-80 貌似是一个在压缩率和质量之间实现平衡的数值，腾讯 AlloyTeam 出品的 gka 图片处理工具，同样使用到了 imagemin 库，他们黑夜也是使用 65-80 的选项：gka 代码

用它压缩一张 png 图片，我们看看效果如何：

压缩前的：

![images](performance09.jpg)

压缩后的：

![images](performance10.jpg)

从肉眼上几乎看不出区别，但实际上减少了百分之 77 的体积！

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

注意到我们使用 progressive:true 选项，这可以将图片转换为渐进式图片，关于渐进式图片，它允许在加载照片的时候，如果网速比较慢的话，先显示一个类似模糊有点小马赛克的质量比较差的照片，然后慢慢的变为清晰的照片：

![images](performance11.gif)

而相比之下，非渐进式的图片(Baseline JPEG)则会老老实实地从头到尾去加载：

![images](performance12.gif)

张鑫旭大神的这篇文章，可以帮你更好地了解两者的区别：[渐进式 jpeg(progressive jpeg)图片及其相关](https://www.zhangxinxu.com/wordpress/2013/01/progressive-jpeg-image-and-so-on/)

简单来说，渐进式图片一开始就决定了大小，而不像 Baseline 图片一样，不断地从上往下加载，从而造成多次回流，但渐进式图片需要消耗 CPU 去多次计算渲染，这是其主要缺点。

当然，交错式 png 也可以实现相应的效果，但目前 pngquant 没有实现转换功能，但是 ps 中导出 png 时是可以设置为交错式的。

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

接着在 webpack 配置文件中，引入自己需要的插件，使用方法完全相同。

### 三、通过图片按需加载减少请求压力

图片按需加载是个老生常谈的话题，传统做法自然是通过监听页面的滚动位置，符合条件了再去资源加载，我们看看如今还有什么方法可以做到按需加载。

#### 3.1 使用强大的 IntersectionObserver

IntersectionObserver 提供给我们一项能力：可以用来监听元素是否进入了设备的可视区域之内，这意味着：我们等待图片元素进入可视区域后，再决定是否加载它，毕竟用户没有看到图片前，根本不关心它是否已经加载了。

这是 Chrome51 率先提出和支持的 API，而在 2019 年的今天，各大浏览器对它的支持度已经有所改善(除了 IE，全线崩~)：

![images](performance13.jpg)

废话不多说，上代码：首先假设我们有一个图片列表，它们的 src 属性我们暂不设置，而用 data-src 来替代：

```
<li>
  <img class="list-item-img" alt="loading" data-src='a.jpg'/>
</li>
<li>
  <img class="list-item-img" alt="loading" data-src='b.jpg'/>
</li>
<li>
  <img class="list-item-img" alt="loading" data-src='c.jpg'/>
</li>
<li>
  <img class="list-item-img" alt="loading" data-src='d.jpg'/>
</li>
```

这样会导致图片无法加载，这当然不是我们的目的，我们想做的是，当 IntersectionObserver 监听到图片元素进入可视区域时，将 data-src“还给”src 属性，这样我们就可以实现图片加载了：

```
const observer = new IntersectionObserver(function(changes){
    changes.forEach(function(element,index){
        // 当这个值大于0，说明满足我们的加载条件了，这个值可通过rootMargin手动设置
        if(element.intersectionRatio>0){
            // 放弃监听，防止性能浪费，并加载图片
            observer.unobserve(element.target);
            element.target.src=element.target.dataset.src;
        }
    });
});
function initObserver(){
    const listItems = document.querySelectorAll('.list-item-img');
    listItems.forEach(function(item){
        // 对每个list元素进行监听
        observer.observe(item);
    });
}

initObserver();
```

运行代码并观察控制台的 Network，会发现图片随着可视区域的移动而加载，我们的目的达到了。

#### 3.2 还是 Chrome 的黑科技——loading 属性

### 四、响应式图片的实践

我们经常会遇到这种情况：一张在普通笔记本上显示清晰的图片，到了苹果的 Retina 屏幕或是其他高清晰度的屏幕上，就变得模糊了。

这是因为，在同样尺寸的屏幕上，高清屏可以展示的物理像素点比普通屏多，比如 Retina 屏，同样的屏幕尺寸下，它的物理像素点的个数是普通屏的 4 倍(`2*2`)，所以普通屏上显示清晰的图片，在高清屏上就像是被放大了，自然就变得模糊了，要从图片资源上解决这个问题，就需要在设备像素密度为 2 的高清屏中，对应地展示一张两倍大小的图。

而通常来讲，对于背影图片，我们可以使用 css 的@media 进行媒体查询，以决定不同像素密度下该用哪张倍图，例如：

```
.bg{
    background-image:url("bg.png");
    width:100px;
    height:100px;
    background-size:100% 100%;
}
@media(-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
    .bg {
            background-image: url("bg@2x.png") // 尺寸为200 * 200的图
        }
}
```

这么做有两个好处，一是保证高像素密度的设备下，图片仍能保持应有的清晰度，二是防止在低像素密度的设备下加载大尺寸图片造成浪费。

那么如何处理 img 标签呢？

我们可以使用 HTML5 中 img 标签的 srcset 来达到这个效果，代码如下：

```
<img width="320" src="bg@2x.png" srcset="bg.png 1x;bg@2x.png 2x" />>
```

这段代码的作用是：当设备像素密度，也就是 dpr(devicePixelRatio)为 1 时，使用 bg.png，为 2 时使用二倍图 bg@2x.png，依此类推，你可以根据需要设置多种精度下要加载的图片，如果没有命中，浏览器会选择最邻近的一个精度对应的图片进行加载。

要注意：老旧的浏览器不支持 srcset 的特性，它会继续正常加载 src 属性引用的图像。

### 五、安全地使用 WebP 图片

### 六、对 Base64Url 的反思

Base64 就是一种基于 64 个可打印字符来表示二进制数据的方法，编码过程是从二进制数据到字符串的过程，在 web 应用中我们经常用它来做啥呢——传输图片数据。HTML 中，img 的 src 和 css 样式的 background-image 都可以都可以接受 base64 字符串，

#### 6.1 让 css 文件的体积失去控制

#### 6.2 让浏览器的资源缓存策略功亏一篑

假设你的 base64Url 会被你的应用多次利用，本来浏览器可以直接从本地缓存取出的图片，换成 base64Url，将造成应用中多个页面重复下载 1.3 倍大小的文本，假设一张图片是 100kb 大小，被你的应用使用了 10 次，那么造成的流量浪费将是(100 1.3 10) - 100 = 1200kb。

#### 6.3 低版本浏览器的兼容问题

这是比较次要的问题，dataurl 在低版本 IE 浏览器，比如 IE8 及以下的浏览器，会有兼容性问题

#### 6.4 不利于开发者工具调试与查看

无论哪张图片，看上去都是一堆没有意义的字符串，光看代码无法知道原图是哪张，不利于某些情况下的比对。

说了这么多，有人可能不服气，既然这种方案缺点这么多，为啥它会从以前就被广泛使用呢？

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
