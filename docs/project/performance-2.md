# 执行性能

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 动画性能优化
- 大量数据性能优化

### 一、动画性能优化

动画性能不仅在前端，在任何客户端技术中心都是性能的重灾区，归根到底是需要大量的计算和渲染工作，远超普通的静态 UI

在前端实现动画有三种主流的方式：

- Canvas
- CSS3
- Dom

当然，DOM+JS 的这种方式由于极易引起浏览器或者回流，有非常的性能风险，对于这种动画的优化方法是不用 DOM 进行动画操作。

#### 1.1 CSS3 动画优化原理

要想进行 CSS 的动画优化必须了解一定的浏览器原理，浏览器原理的几个概念，图层、重绘、回流。

**图层**

浏览器在渲染一个页面时，会将页面分为很多个图层，图层有大有小，每个图层上有一个或多个节点。在渲染 DOM 的时候，浏览器所做的工作实际上是：

- 获取 DOM 后分割为多个图层
- 对每个图层的节点计算样式结果（Recalculate style--样式重计算）
- 为每个节点生成图形和位置（Layout--回流和重布局）
- 将每个节点绘制填充到图层位图中（Paint Setup 和 Paint--重绘）
- 图层作为纹理上传至 GPU
- 符合多个图层到页面上生成最终屏幕图像（Composite Layers--图层重组）

**回流**

有些节点，当你改变他时，会需要重新布局（这也意味着需要重新计算其他被影响的节点的位置和大小）。

这种情况下，被影响的 DOM 树越大（可见节点），重绘所需要的时间就会越长，而渲染一帧动画的时间也相应变长。所以需要尽力避免这些属性

一些常用的改变时会触发重布局的属性：

盒子模型相关属性会触发重布局：

- width
- height
- padding
- margin
- display
- border-width
- border
- min-height

定位属性及浮动也会触发重布局：

- top
- bottom
- left
- right
- position
- float
- clear

改变节点内部文字结构也会触发重布局：

- text-align
- overflow-y
- font-weight
- overflow
- font-family
- line-height
- vertival-align
- white-space
- font-size

**重绘**

修改时只触发重绘的属性有：

- color
- border-style
- border-radius
- visibility
- text-decoration
- background
- background-image
- background-position
- background-size
- outline-color
- outline
- outline-style
- outline-width
- box-shadow

这些属性都不会修改节点的大小和位置，自然不会触发重布局，但是节点内部的渲染效果进行了改变，所以只需要重绘就可以了

#### 1.2 CSS3 动画优化

经过上面的介绍，我们大致了解了浏览器的绘制原理，那么想进行 css 动画优化就要遵循以下原则：

1. 尽量将动画放在一个独立图层，这样可以避免动画效果影响其他渲染层的元素
2. 尽量避免回流和重绘
3. 尽量使用 GPU，速度更快

因此，我们需要创建独立的合成层，那么如何才能创建合成层呢？

直接原因（direct reason）：

- 硬件加速的 iframe 元素（比如 iframe 嵌入的页面中有合成层）demo
- video 元素
- 覆盖在 video 元素上的视频控制栏
- 3D 或者三件加速的 2D Canvas 元素
  - demo：普通 2D Canvas 不会提升为合成层
  - demo：3D Canvas 提升为合成层
- 硬件加速的插件，比如 flash 等等
- 在 DPI 较高的屏幕上，fix 定位的元素会自动地被提升到合成层中。
- 有 3D transform
- backface-visibility 为 hidden
- 对 opacity、transform、filter、backdropfilter 应用了 animation 或者 transition（需要是 active 的）
- will-change 设置为 opacity、transform、top、left、bottom、right（其中 top、left 等需要设置明确的定位属性，如 relative 等）demo
- 后代元素原因：
  - 有合成层后代同时本身有 transform、opacity（小于 1）、mask、filter、reflection 属性 demo
  - 有合成层后代同时本身 fixed 定位 demo
  - 有 3D transfrom 的合成层后代同时本身有 preserves-3d 属性 demo
  - 有 3D transfrom 的合成层后代同时本身有 perspective 属性 demo

提升合成层的最好方式是使用 CSS 的 will-change 属性。从上一节合成层产生原因中，可以知道 will-change 设置为 opacity、transform、top、left、bottom、right 可以将元素提升为合成层。

**那么如何避免重绘和回流？**

具体而言，就是多使用 transform 或者 opacity 来实现动画效果，上述方法在合成层使用不会引起重绘和回流。

**那么如何利用 GPU 加速呢？**

以下几个属性会获得 GPU 加速

- opacity
- translate
- rotate
- scale

#### 1.3 Canvas 动画优化

CSS 虽然更加简单也更加保证性能的下限，但是要想实现更加复杂可控的动画，那就必须用到 Canvas+JavaScript 这个组合了

### 二、大量数据性能优化

#### 2.1 虚拟列表

#### 2.2 Web Worker

大量数据的渲染环节我们可以采用虚拟列表或者虚拟表格的方式实现，但是大量数据的计算环节依然会产生浏览器假死或者卡顿的情况

通常情况下我们 CPU 密集型的任务都是交给后端计算的，但是有些时候我们需要处理一些离线场景或者解放后端压力，这个时候此方法就不奏效了

### 参考资料

- [(1.6w 字)浏览器与前端性能灵魂之问，请问你能接得住几个？（上）](https://juejin.im/post/5df5bcea6fb9a016091def69)
- [前端性能清单](https://github.com/JohnsenZhou/Front-End-Performance-Checklist)
- [嗨，送你一张 Web 性能优化地图](https://mp.weixin.qq.com/s?__biz=MzUxMTcwOTM4Mg==&mid=2247483962&idx=1&sn=f9337ad983c6303811eb43d07d9f23d5&chksm=f96edb93ce195285943211e645cc683989826abdaaa8ab0b073a20761369ed04843c835c50b7#rd)
- [2018 前端性能优化清单](https://juejin.im/post/5a966bd16fb9a0635172a50a)
- [前端性能(一)](https://github.com/ftTony/blog/issues/28)
- [前端性能(二)](https://github.com/ftTony/blog/issues/29)
- [性能优化三部曲之一——构建篇](https://github.com/lcxfs1991/blog/issues/4)
- [Web 性能](https://github.com/laoqiren/web-performance)
- [前端性能优化之旅](https://github.com/alienzhou/fe-performance-journey)
- [前端性能优化之白屏时间](https://mp.weixin.qq.com/s/N_6faORvlDSxFQMh1o2naA)
- [Web 性能领域常见的专业术语](https://mp.weixin.qq.com/s/GIpmZIY6yxGRBpkTDHuJuw)
- [如何使页面交互更流畅](https://mp.weixin.qq.com/s/eoZyeJahkBpaYxzC2n5NLQ)
- [从 8 道面试题看浏览器渲染过程与性能优化](https://juejin.im/post/5e143104e51d45414a4715f7)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
