# 响应式布局

## 前言

- **静态布局**：直接使用 px 作为单位
- **流式布局**：宽度使用%百分比，高度使用 px 作为单位
- **自适应布局**：创建多个静态布局，每个静态布局对应一个屏幕分辨率范围。使用 @media 媒体查询来切换多个布局
- **响应式布局**：通常是糅合了流式布局+弹性布局，再搭配媒体查询技术使用
- **弹性布局**：通常指的是 rem 或 em 布局。rem 是相对于 html 元素的 font-size 大小而言的，而 em 是相对于其父元素（非 font-size 的是相对于自身的 font-size）

[布局概念](https://www.cnblogs.com/zhuzhenwei918/p/7147303.html)

## 内容

- 基本概念
- 自适应布局与响应式布局
- REM 布局

### 一、基本概念

- **物理像素(physical pixel)**：物理像素又称为设备像素。每个像素可以根据操作系统设置自己的颜色和亮度。正是这些设备像素的微小距离欺骗了我们肉眼看到的图像效果。
- **设备独立**：设备独立像素也称为密度无关像素，可以认为是计算机坐标系统中的一个点，这个点代表一个可以由程序使用的虚拟像素(比如说 CSS 像素)，然后由相关系统转换为物理像素。
- **CSS 像素**：CSS 像素是一个抽像的单位，主要使用在浏览器上，用来精确度量 Web 页面上的内容。一般情况之下，CSS 像素称为与设备无关的像素，简称 DIP。
- **屏幕密度**：屏幕密度是指一个设备表面上存在的像素数量，它通常以每英寸有多少像素来计算(PPI)。
- **设备像素比**：设备像素比简称为 dpr，其定义了物理像素和设备独立像素的对应关系。它的值可以按下面的公式计算得到：

```
设备像素比 ＝ 物理像素 / 设备独立像素
```

在 JavaScript 中，可以通过`window.devicePixelRatio`获取到当前设备的 dpr。

在 css 中，可以通过`-webkit-device-pixel-ratio`、`-webkit-min-device-pixel-ratio`和`-webkit-max-device-pixel-ratio`进行媒体查询，对不同 dpr 的设备，做一些样式适配。或者使用 resolution|min-resolution|max-resolution 比较新的标准方式

- **位图像素**：一个位图像素是栅格图像最小的数据单元。每一个位图像素都包含着一些自身的显示信息。
- **视窗 viewport**：viewport 是严格等于浏览器的窗口。在桌面浏览器中，viewport 就是浏览器窗口的宽度高度。但在移动端设备上就有点复杂。移动端的 viewport 太窄，为了能更好为 CSS 布局服务，所以提供了两个 viewport:虚拟的 visualviewport 和布局的 layoutviewport。
- **视窗缩放 viewport scale**：可以设置`meta`标签的 viewport scale 来对视窗的大小进行缩放定义
- **rem 单位**：就是相对于根元素`<html>`的`font-size`来做计算
- **视窗单位**

  - vw：1vw 等于视窗宽度的 1%
  - vh：1vh 等于视窗高度的 1%
  - vmin：选取 vw 和 vh 中最小的那个
  - vmax：选取 vw 和 vh 中最大的那个

#### 常用的 midea

```
/* 横屏 */
@media screen and (orientation:landscape){

}
/* 竖屏 */
@media screen and (orientation:portrait){

}
/* 窗口宽度<960,设计宽度=768 */
@media screen and (max-width:959px){

}
/* 窗口宽度<768,设计宽度=640 */
@media screen and (max-width:767px){

}
/* 窗口宽度<640,设计宽度=480 */
@media screen and (max-width:639px){

}
/* 窗口宽度<480,设计宽度=320 */
@media screen and (max-width:479px){

}
/* 设备像素比为2 */
/* 常用于1px边框，还应规定 3dppx 的情况 */
@media (min-resolution: 2dppx) {

}
/* windows UI 贴靠 */
@media screen and (-ms-view-state:snapped){

}
/* 打印 */
@media print{

}
```

#### dpi 设置

```
(function () {
  var width = parseInt(window.screen.width)
  var designWidth = 450
  var scale = width / designWidth
  var userAgent = navigator.userAgent.toLowerCase()
  var metaHead = '<meta name="viewport" content="width=' + designWidth + ','
  if (/android (\d+\.\d+)/.test(userAgent)) {
    if (parseFloat(RegExp.$1) > 2.3) metaHead += 'minimum-scale=' + scale + ',maximum-scale=' + scale + ','
  } else {
    metaHead += 'user-scalable=no,';
  }
  metaHead += 'target-densitydpi=device-dpi">';
  document.write(metaHead);
})()
```

### 二、自适应布局与响应式布局

### 1.1 什么是自适应布局

自适应布局就是宽度自适用布局，在不同大小设备上，网页以等比例的形式绽放宽度，呈现同样的主体内容和排版布局

**自适应布局演示图：**

![images](responsive01.gif)

随着屏幕宽度缩放，网页内容也以等比例缩放，不管屏幕宽度为多少，网页主体排版布局总是一样的

**自适应布局出现的背景**

在 PC 时代初期，网页设计者都会设计固定宽度的宽度，最开始的电脑显示器分辨率种类不多，因为当时电脑本来就少。后来随着显示器种类越来越多，以及笔记本、平板电脑的普及，这种固定宽度的页面出现了问题，于是出现了一种新的布局方式，宽度自适应布局。我们平时谈论的自适应布局，大多指的就是宽度自适应布局，再到后来，互联网大战从 PC 到手机，还有 HTML5 标准的发布，自适应布局也从 PC 延伸到手机，自适布局也因此了起来，成为网页设计的必要需求

#### 2.2 什么是响应式布局

响应式布局就是根据屏幕大小变化，页面的内容排版布局会自动调整变动，已呈现更好的用户体验

**响应式布局演示图：**

![images](responsive02.gif)

随着屏幕宽度的缩放，页面做出相应调整，布局和展示的内容会有所变动

**响应式布局出现的背景**

自适应虽然成为网页设计的必要需求，但还是暴露出一个问题，如果屏幕太小，即使见面内容能够根据屏幕大小进行适配，但是在小屏幕上查看，会感觉内容过于拥挤，降低了用户体验。此时，为了解决这个总是而衍生出来的概念就是响应式布局。它可以自动识别屏幕宽度、并做出相应调整。网页的排版布局和展示的内容会有所变动。

### 三、REM 布局

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

### 四、REM+VW 布局

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
