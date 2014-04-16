# 移动端适配

## 前言

- **静态布局**：直接使用 px 作为单位
- **流式布局**：宽度使用%百分比，高度使用 px 作为单位
- **自适应布局**：创建多个静态布局，每个静态布局对应一个屏幕分辨率范围。使用 @media 媒体查询来切换多个布局
- **响应式布局**：通常是糅合了流式布局+弹性布局，再搭配媒体查询技术使用
- **弹性布局**：通常指的是 rem 或 em 布局。rem 是相对于 html 元素的 font-size 大小而言的，而 em 是相对于其父元素（非 font-size 的是相对于自身的 font-size）

[布局概念](https://www.cnblogs.com/zhuzhenwei918/p/7147303.html)

## 内容

- 基本概念
- 1px 问题
- 适配 iPhonX
- 横屏适配
- 移动适配
- 图片模糊问题

### 一、基本概念

- 尺寸
- 分辨率
- 设备独立像素
- 视口

#### 1.1 尺寸

参考[单位与值](https://km.xiaowuzi.info/css/px.html)

#### 1.2 分辨率

- **物理像素(physical pixel)**：物理像素又称为设备像素。每个像素可以根据操作系统设置自己的颜色和亮度。正是这些设备像素的微小距离欺骗了我们肉眼看到的图像效果。
- **设备独立像素**：设备独立像素也称为密度无关像素，可以认为是计算机坐标系统中的一个点，这个点代表一个可以由程序使用的虚拟像素(比如说 CSS 像素)，然后由相关系统转换为物理像素。 - **CSS 像素**：CSS 像素是一个抽像的单位，主要使用在浏览器上，用来精确度量 Web 页面上的内容。一般情况之下，CSS 像素称为与设备无关的像素，简称 DIP。
- **屏幕密度**：屏幕密度是指一个设备表面上存在的像素数量，它通常以每英寸有多少像素来计算(PPI)。
- **设备像素比**：设备像素比简称为 dpr，其定义了物理像素和设备独立像素的对应关系。它的值可以按下面的公式计算得到：

```
设备像素比 ＝ 物理像素 / 设备独立像素
```

在 JavaScript 中，可以通过`window.devicePixelRatio`获取到当前设备的 dpr。

在 css 中，可以通过`-webkit-device-pixel-ratio`、`-webkit-min-device-pixel-ratio`和`-webkit-max-device-pixel-ratio`进行媒体查询，对不同 dpr 的设备，做一些样式适配。或者使用 resolution|min-resolution|max-resolution 比较新的标准方式

#### 1.3 设备独立像素

- **位图像素**：一个位图像素是栅格图像最小的数据单元。每一个位图像素都包含着一些自身的显示信息。
- **视窗 viewport**：viewport 是严格等于浏览器的窗口。在桌面浏览器中，viewport 就是浏览器窗口的宽度高度。但在移动端设备上就有点复杂。移动端的 viewport 太窄，为了能更好为 CSS 布局服务，所以提供了两个 viewport:虚拟的 visualviewport 和布局的 layoutviewport。
- **视窗缩放 viewport scale**：可以设置`meta`标签的 viewport scale 来对视窗的大小进行缩放定义

#### 1.4 视口

### 二、1px 问题

#### 2.1 1px 产生的原因

- 我们写代码时一般使用设备独立像素来对页面进行布局。而在设备像素比大于`1`的屏幕上，我们写的`1px`实际上是被多个物理像素渲染，这就会出现`1px`在有些屏幕上看起来很粗的现象。
- 在`retina`屏的手机上，`dpr`为`2`或`3`，`css`里写的`1px`宽度映射到物理像素上就有`2px`或`3px`宽度。
- 例如：`iPhone6`的`dpr`为`2`，物理像素是`750`（`x`轴），它的逻辑像素为`375`。也就是说，1 个逻辑像素，在`x`軕和`y`轴方向，需要 2 个物理像素来显示，即：dpr=2 时，表示 1 个 CSS 像素由 4 个物理像素点组成，如下图表示：

![image](responsive10.jpg)

#### 2.2 border-image

基于`media`查询判断不同的设备像素比给定不同的`border-image`：

```
.border_1px{
    border-bottom: 1px solid #000;
}
@media only screen and (-webkit-min-device-pixel-ratio:2){
    .border_1px{
        border-bottom: none;
        border-width: 0 0 1px 0;
        border-image: url(../img/1pxline.png) 0 0 2 0 stretch;
    }
}
```

#### 2.3 background-image

和`border-image`类似，准备一张符合条件的边框背影图，模拟在背影上。

```
.border_1px{
    border-bottom: 1px solid #000;
}
@media only screen and (-webkit-min-device-pixel-ratio:2){
    .border_1px{
        background: url(../img/1pxline.png) repeat-x left bottom;
        background-size: 100% 1px;
    }
}
```

上面两种都需要单独准备图片，而且圆角不是很好处理，但是可以应对大部分场景。

#### 2.4 伪类 + transform

```
.border_1px:before{
    content: '';
    position: absolute;
    top: 0;
    height: 1px;
    width: 100%;
    background-color: #000;
    transform-origin: 50% 0%;
}
@media only screen and (-webkit-min-device-pixel-ratio:2){
    .border_1px:before{
        transform: scaleY(0.5);
    }
}
@media only screen and (-webkit-min-device-pixel-ratio:3){
    .border_1px:before{
        transform: scaleY(0.33);
    }
}
```

这种方式可以满足各种场景，如果需要满足圆角，只需要给伪类也加上`border-radius` 即可。

#### 2.5 svg

上面我们`border-image`和`background-image`都可以模拟`1px`边框，但是使用的都是位图，还需要外部引入。

借助`PostCSS`的`postcss-write-svg`我们能直接使用`border-image`和`background-image`创建`svg`的`1px`边框：

```
@svg border_1px {
  height: 2px;
  @rect {
    fill: var(--color, black);
    width: 100%;
    height: 50%;
    }
  }
.example { border: 1px solid transparent; border-image: svg(border_1px param(--color #00b1ff)) 2 2 stretch; }
```

编译后：

```
.example { border: 1px solid transparent; border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='2px'%3E%3Crect fill='%2300b1ff' width='100%25' height='50%25'/%3E%3C/svg%3E") 2 2 stretch; }
```

上面的方案是大漠在他的文章中推荐使用的，基本可以满足所有场景，而且不需要外部引入，这是我个人比较喜欢的一种方案。

#### 2.6 设置 viewport

通过设置缩放，让`CSS`像素等于真正的物理像素。

例如：当设备像素比为`3`时，我们将页面缩放`1/3`倍，这时`1px`等于一个真正的屏幕像素。

```
const scale = 1 / window.devicePixelRatio;
const viewport = document.querySelector('meta[name="viewport"]');
if (!viewport) {
    viewport = document.createElement('meta');
    viewport.setAttribute('name', 'viewport');
    window.document.head.appendChild(viewport);
}
viewport.setAttribute('content', 'width=device-width,user-scalable=no,initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale);
```

实际上，上面这种方案是早先`flexible`采用的方案。

当然，这样做是要付出代价的，这意味着你页面上所有的布局都要按照物理像素来写。这显然是不现实的，这时，我们可以借助 `flexible`或 `vw`、`vh` 来帮助我们进行适配。

更多资料参考[温故而知新：移动端 1px 问题](https://mp.weixin.qq.com/s/BZtfCAYvtEHf-ZKq4eB62g)

### 三、适配 iPhonX

`iPhoneX`的出现将手机的首付带上了一个新的高度，它取消了物理按键，改成了底部的小黑条，但是这样的改动给开发者适配移动端双增加了难度。

#### 3.1 安全区域

在`iPhoneX`发布后，许多厂商相继推出了具有边缘屏幕的手机。

![images](responsive12.jpg)

这些手机和普通手机在外观上无外乎做了三个改动：圆角（`corners`）、刘海（`sensor housing`）和小黑条（`Home Indicator`）。为了适配这些手机，安全区域这个变诞生了：安全区域就是一个不受上面三个效果的可视窗口的范围。

为了保证页面的显示效果，我们必须把页面限制在安全范围内，但是不影响整体效果。

#### 3.2 viewport-fit

`viewport-fit`是专门为了适配`iPhoneX`而诞生的一个属性，它用于限制网页如何在安全区域内进行展示。

![images](responsive11.jpg)

- `contain`：可视窗口完全包含网页内容
- `covert`：网页内容完全覆盖可视窗口

默认情况下或者设置为`auto`和`contain`效果相同。

#### 3.3 env、constant

![images](responsive07.jpg)

### 四、横屏适配

![images](responsive06.jpg)

很多视口我们要对横屏和竖屏显示不同的布局，所以我们需要检测在不同的场景下给定不同的样式

#### 4.1 JavaScript 检测横屏

`window.orientation`获取屏幕旋转方向

```
window.addEventListener("resize", ()=>{
    if (window.orientation === 180 || window.orientation === 0) {
      // 正常方向或屏幕旋转180度
        console.log('竖屏');
    };
    if (window.orientation === 90 || window.orientation === -90 ){
       // 屏幕顺时钟旋转90度或屏幕逆时针旋转90度
        console.log('横屏');
    }
});
```

#### 4.2 CSS 检测横屏

```
@media screen and (orientation: portrait) {
  /*竖屏...*/
}
@media screen and (orientation: landscape) {
  /*横屏...*/
}
```

### 五、移动端适配

#### 5.1 REM 适配

`rem`适配的本质是布局等比例的缩放，通过动态设置`html`的`font-size`来改变`rem` 的大小。

**vieport 配置**

```
<meta name="viewport" content="width=device-width; initial-scale=1; maximum-scale=1; minimum-scale=1; user-scalable=no;">
```

上面把`scale`设置成固定 1 倍的视口的大，也可以根据`dpr`的值缩放`viewport`，如下：

```
//下面是根据设备dpr设置viewport
 var dpr = window.devicePixelRatio || 1
 var scale = 1 / dpr

 viewport.setAttribute("content", "width=device-width" + ",initial-scale=" + scale + ", maximum-scale=" + scale + ", minimum-scale=" + scale + ",user-scalable=no")
```

有几点要注意

- `viewport`标签只对移动端浏览器有效，对`PC`端浏览器是无效的。
- 当缩放比例为`100%`时，`逻辑像素 = CSS 像素宽度 = 理想视口的宽度 = 布局视口的宽度`。
- 单独设置`initial-scale`或`width`都会有兼容性问题，所以设置布局视口为理想视口的最佳方法是同时设置这个属性。
- 即使设置了`user-scalable = no`，在`Android Chrome`浏览器中也可以强制启用手动缩放。

**设置 rem 基准值**

代码为如下

```
(function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'

  function recalc() {
    var designWidth = 750
    var clientWidth = docEl.clientWidth
    if (!clientWidth || clientWidth > designWidth) return
    docEl.style.fontSize = (100 * clientWidth / designWidth) + 'px'
  }

  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
```

- 将 html 节点的 font-size 设置为页面 clientWidth(布局视口)的 1/100，即：`1rem`=布局视口的`1/100`
- 在 iphone6 下：`docEl.clientWidth`=设备独立像素（逻辑像素）= 布局视口宽度 = 理想窗口宽度 = 375。此时：`1rem = 375/10 +px = 37.5px`

使用`postcss-pxtorem`将单位转化为 rem

```
module.exports = {
  plugins: {
      'autoprefixer': {
       browsers: ['Android >= 4.0', 'iOS >= 7']
   },
  'postcss-pxtorem': {
       rootValue: 37.5,
       propList: ['*', '!font-size'],
       selectorBlackList: ['van-circle__layer', 'ignore'],
    }
  }
}
```

- `rootValue`是转换`px`的基准值，参考设备`iPhone6`，设备宽度`375px`规则：基准值=当前设备宽度的 1/10
- 基准值设置代码中，在`iPhone6`设备设置的`html`,`font-size`也为`37.5px`
- 但是设计稿尺寸`750px`大小，所以量取设计稿量尺寸的时候需要除以`2`

**rem 布局的缺点**

在响应式布局中，必须通过 js 来动态控制根元素`font-size`的大小，也就是说 css 样式和 js 代码有一定的耦合性，且必须将改变 font-size 的代码放在`css`样式之前。

#### 5.2 VW 布局

`vw`是基于 Viewport 视窗的长度单位，指的就是浏览器可视化的区域，而这个可视区域是`window.innerWidth/window.innerHeight`的大小，用图简单的示意如下：

```
{
    loader: 'postcss-loader',
    options: {
        plugins: ()=>{
            require('autoprefixer')({
                browsers: ['last 5 versions']
            }),
            require('postcss-px-to-viewport')({
                viewportWidth: 375,     // 视口宽度（数字）
                viewportHeight: 1334,       // 视口高度（数字）
                unitPrecision: 3,       // 设置的保留小数位数（数字）
                viewportUnit: 'vw',     // 设置要转换的单位（字符）
                selectorBlackList: ['.ingore','.hairlines'],    // 不需要进行转换的类名（数组）
                minPixelValue:1,    // 设置要替换的最小像素值（数字）
                mediaQuery: false       // 允许在媒体查询中转换px（true/false）
            })
        }
    }
}
```

#### 5.3 REM+VW 布局

- `vw`和`rem`适配的本质是等比例缩放，让页面在不同屏幕尺寸下有类似于矢量图片缩放的效果的效果，保证了页面元素之间的尺寸缩放比例和位置。
- 给元素大小设置随着视口变化而变化的 vw 单位，这样就可以实现动态改变其大小。
- 限制根元素字体大小的最大最小值，配合 body 加上最大宽度和最小宽度。

```
// rem 单位换算：定为 75px
$vm_fontsize:75;        // iPhone 6尺寸的根元素大小基准值
@function rem($px){
    @return ($px/$vm_fontsize)*1rem;
}
// 根元素大小使用vm单位
$vm_design:750;
html{
    font-size:($vm_fontsize/($vm_design/2))*100vw;
    // 同时，通过Media Queries 限制根元素最大最小
    @media screen and (max-width:320px){
        font-size:64px;
    }
    @media screen and (min-width:540px){
        font-size: 108px;
    }
}
// body 也增加最大最小宽度限制，避免默认100%宽度的block元素跟随body而过大过小
body{
    max-width:540px;
    min-width:320px;
}
```

#### 5.4 flexible 适配

### 六、图片模糊问题

#### 6.1 产生原因

我们平时使用的图片大多数都是属于位图（`png、jpg...`），位图帖一个个像素点构成的，每个像素都具有特定的位置和颜色值：

![images](responsive03.png)

理论上，位图的每个像素对应在屏幕上使用的一个物理像素来渲染，才达到最佳的显示效果。

而在`dpr>1`的屏幕上，位图的一个像素可能由多个物理像素来渲染，然而这些物理像素点并不能被准确的分配上对应位图像素的颜色，只能取近似值，所以相同的图片在`dpr>1`的屏幕上就会模糊：

![images](responsive04.png)

#### 6.2 解决方案

为了保证图片质量，我们应该尽可能让一个屏幕像素来渲染一个图片像素，所以，针对不同`DPR`的屏幕，我们需要展示不同分辨的图片。

如：在`dpr=2`的屏幕上展示两倍图`(@2x)`，在`dpr=3`的屏幕上展示三倍图`(@3x)`。

![images](responsive05.png)

#### 6.3 media 查询

使用`media`查询判断不同的设备像素比来显示不同精度的图片：

```
.avatar{
    background-image: url(conardLi_1x.png);
}
@media only screen and (-webkit-min-device-pixel-ratio:2){
    .avatar{
        background-image: url(conardLi_2x.png);
    }
}
@media only screen and (-webkit-min-device-pixel-ratio:3){
    .avatar{
        background-image: url(conardLi_3x.png);
    }
}
```

只适用于背景图

#### 6.4 image-set

使用`image-set`：

```
.avatar {
    background-image: -webkit-image-set( "conardLi_1x.png" 1x, "conardLi_2x.png" 2x );
}
```

只适用于背景图

#### 6.5 srcset

使用`img`标签的`srcset`属性，浏览器会自动根据像素密度匹配最佳显示图片：

```
<img src="conardLi_1x.png"
     srcset=" conardLi_2x.png 2x, conardLi_3x.png 3x">
```

#### 6.6 JavaScript 拼接图片 url

使用`window.devicePixelRatio`获取设备像素比，遍历所有图片，替换图片地址：

```
const dpr = window.devicePixelRatio;
const images =  document.querySelectorAll('img');
images.forEach((img)=>{
  img.src.replace(".", `@${dpr}x.`);
})
```

#### 6.7 使用 svg

`SVG`的全称是可缩放矢量图（Scalable Vector Graphics）。不同于位图的基于像素，`SVG` 则是属于对图像的形状描述，所以它本质上是文本文件，体积较小，且不管放大多少倍都不会失真。

除了我们手动在代码中绘制`svg`，我们还可以像使用位图一样使用`svg`图片：

```
<img src="conardLi.svg">

<img src="data:image/svg+xml;base64,[data]">

.avatar {
  background: url(conardLi.svg);
}
```

### 参考资料

- [前端自适应布局你需要知道的所有事](https://mp.weixin.qq.com/s/Z4sxXGxMqdqtPTcNyvRRLA)
- [响应式布局](https://github.com/ljianshu/Blog/issues/38)
- [使用 Flexible 实现手淘 H5 页面的终端适配](https://github.com/amfe/article/issues/17)
- [flexible.js 布局详解](http://caibaojian.com/flexible-js.html)
- [用 vw、vh ＋媒体查询打造最完美的移动端适配方案](https://juejin.im/post/5cf0d8fb6fb9a07ee9585681)
- [前端响应式布局原理与方案（详细版）](https://juejin.im/post/5caaa230e51d452b672f9703)
- [吃透移动端 H5 响应式布局 ｜深入原理到目前最佳实践方案](https://juejin.im/post/5df59139518825123e7af459)
- [移动端适配 - 基础知识篇](https://juejin.im/post/5e36c4fce51d450268661344)
- [设计体系的响应式设计](https://zhuanlan.zhihu.com/p/109781992)
- [关于移动端适配，你必须要知道的](https://juejin.im/post/5cddf289f265da038f77696c)
- [彻底搞懂移动 Web 开发中的 viewport 与跨屏适配](https://mp.weixin.qq.com/s/aaXgFw4isWq1RrHkv75zLA)
- [深入浅出 Viewport 设计原理](https://www.cnblogs.com/onepixel/p/12144364.html)
- [前端基础知识概述 -- 移动端开发的屏幕、图像、字体与布局的兼容适配](https://mp.weixin.qq.com/s/-N6EVSye4n78h5wLTo65OQ)
- [面试官：你了解过移动端适配吗？](https://juejin.im/post/5e6caf55e51d4526ff026a71)
- [大厂是怎么做移动端适配的](https://mp.weixin.qq.com/s/ijLhb5WJwp9q0Ni6IhCIiQ)
- [细说移动端 经典的 REM 布局 与 新秀 VW 布局](https://www.cnblogs.com/imwtr/p/9648233.html)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
