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

#### 2.2 border-image

#### 2.3 background-image

#### 2.4 伪类 + transform

#### 2.5 svg

#### 2.6 设置 viewport

### 三、适配 iPhonX

#### 3.1 安全区域

#### 3.2 viewport-fit

#### 3.3 env、constant

### 四、横屏适配

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

#### 6.2 解决方案

为了保证图片质量，我们应该尽可能让一个屏幕像素来渲染一个图片像素，所以，针对不同`DPR`的屏幕，我们需要展示不同分辨的图片。

#### 6.3 media 查询

#### 6.4 image-set

#### 6.5 srcset

#### 6.6 JavaScript 拼接图片 url

#### 6.7 使用 svg

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
