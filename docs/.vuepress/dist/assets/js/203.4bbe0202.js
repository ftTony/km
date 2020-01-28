(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{263:function(v,_,e){"use strict";e.r(_);var t=e(4),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"执行性能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行性能","aria-hidden":"true"}},[v._v("#")]),v._v(" 执行性能")]),v._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),e("p",[v._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),v._v(" "),e("h2",{attrs:{id:"内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[v._v("#")]),v._v(" 内容")]),v._v(" "),e("ul",[e("li",[v._v("动画性能优化")]),v._v(" "),e("li",[v._v("大量数据性能优化")])]),v._v(" "),e("h3",{attrs:{id:"一、动画性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、动画性能优化","aria-hidden":"true"}},[v._v("#")]),v._v(" 一、动画性能优化")]),v._v(" "),e("p",[v._v("动画性能不仅在前端，在任何客户端技术中心都是性能的重灾区，归根到底是需要大量的计算和渲染工作，远超普通的静态 UI")]),v._v(" "),e("p",[v._v("在前端实现动画有三种主流的方式：")]),v._v(" "),e("ul",[e("li",[v._v("Canvas")]),v._v(" "),e("li",[v._v("CSS3")]),v._v(" "),e("li",[v._v("Dom")])]),v._v(" "),e("p",[v._v("当然，DOM+JS 的这种方式由于极易引起浏览器或者回流，有非常的性能风险，对于这种动画的优化方法是不用 DOM 进行动画操作。")]),v._v(" "),e("h4",{attrs:{id:"_1-1-css3-动画优化原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-css3-动画优化原理","aria-hidden":"true"}},[v._v("#")]),v._v(" 1.1 CSS3 动画优化原理")]),v._v(" "),e("p",[v._v("要想进行 CSS 的动画优化必须了解一定的浏览器原理，浏览器原理的几个概念，图层、重绘、回流。")]),v._v(" "),e("p",[e("strong",[v._v("图层")])]),v._v(" "),e("p",[v._v("浏览器在渲染一个页面时，会将页面分为很多个图层，图层有大有小，每个图层上有一个或多个节点。在渲染 DOM 的时候，浏览器所做的工作实际上是：")]),v._v(" "),e("ul",[e("li",[v._v("获取 DOM 后分割为多个图层")]),v._v(" "),e("li",[v._v("对每个图层的节点计算样式结果（Recalculate style--样式重计算）")]),v._v(" "),e("li",[v._v("为每个节点生成图形和位置（Layout--回流和重布局）")]),v._v(" "),e("li",[v._v("将每个节点绘制填充到图层位图中（Paint Setup 和 Paint--重绘）")]),v._v(" "),e("li",[v._v("图层作为纹理上传至 GPU")]),v._v(" "),e("li",[v._v("符合多个图层到页面上生成最终屏幕图像（Composite Layers--图层重组）")])]),v._v(" "),e("p",[e("strong",[v._v("回流")])]),v._v(" "),e("p",[v._v("有些节点，当你改变他时，会需要重新布局（这也意味着需要重新计算其他被影响的节点的位置和大小）。")]),v._v(" "),e("p",[v._v("这种情况下，被影响的 DOM 树越大（可见节点），重绘所需要的时间就会越长，而渲染一帧动画的时间也相应变长。所以需要尽力避免这些属性")]),v._v(" "),e("p",[v._v("一些常用的改变时会触发重布局的属性：")]),v._v(" "),e("p",[v._v("盒子模型相关属性会触发重布局：")]),v._v(" "),e("ul",[e("li",[v._v("width")]),v._v(" "),e("li",[v._v("height")]),v._v(" "),e("li",[v._v("padding")]),v._v(" "),e("li",[v._v("margin")]),v._v(" "),e("li",[v._v("display")]),v._v(" "),e("li",[v._v("border-width")]),v._v(" "),e("li",[v._v("border")]),v._v(" "),e("li",[v._v("min-height")])]),v._v(" "),e("p",[v._v("定位属性及浮动也会触发重布局：")]),v._v(" "),e("ul",[e("li",[v._v("top")]),v._v(" "),e("li",[v._v("bottom")]),v._v(" "),e("li",[v._v("left")]),v._v(" "),e("li",[v._v("right")]),v._v(" "),e("li",[v._v("position")]),v._v(" "),e("li",[v._v("float")]),v._v(" "),e("li",[v._v("clear")])]),v._v(" "),e("p",[v._v("改变节点内部文字结构也会触发重布局：")]),v._v(" "),e("ul",[e("li",[v._v("text-align")]),v._v(" "),e("li",[v._v("overflow-y")]),v._v(" "),e("li",[v._v("font-weight")]),v._v(" "),e("li",[v._v("overflow")]),v._v(" "),e("li",[v._v("font-family")]),v._v(" "),e("li",[v._v("line-height")]),v._v(" "),e("li",[v._v("vertival-align")]),v._v(" "),e("li",[v._v("white-space")]),v._v(" "),e("li",[v._v("font-size")])]),v._v(" "),e("p",[e("strong",[v._v("重绘")])]),v._v(" "),e("p",[v._v("修改时只触发重绘的属性有：")]),v._v(" "),e("ul",[e("li",[v._v("color")]),v._v(" "),e("li",[v._v("border-style")]),v._v(" "),e("li",[v._v("border-radius")]),v._v(" "),e("li",[v._v("visibility")]),v._v(" "),e("li",[v._v("text-decoration")]),v._v(" "),e("li",[v._v("background")]),v._v(" "),e("li",[v._v("background-image")]),v._v(" "),e("li",[v._v("background-position")]),v._v(" "),e("li",[v._v("background-size")]),v._v(" "),e("li",[v._v("outline-color")]),v._v(" "),e("li",[v._v("outline")]),v._v(" "),e("li",[v._v("outline-style")]),v._v(" "),e("li",[v._v("outline-width")]),v._v(" "),e("li",[v._v("box-shadow")])]),v._v(" "),e("p",[v._v("这些属性都不会修改节点的大小和位置，自然不会触发重布局，但是节点内部的渲染效果进行了改变，所以只需要重绘就可以了")]),v._v(" "),e("h4",{attrs:{id:"_1-2-css3-动画优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-css3-动画优化","aria-hidden":"true"}},[v._v("#")]),v._v(" 1.2 CSS3 动画优化")]),v._v(" "),e("p",[v._v("经过上面的介绍，我们大致了解了浏览器的绘制原理，那么想进行 css 动画优化就要遵循以下原则：")]),v._v(" "),e("ol",[e("li",[v._v("尽量将动画放在一个独立图层，这样可以避免动画效果影响其他渲染层的元素")]),v._v(" "),e("li",[v._v("尽量避免回流和重绘")]),v._v(" "),e("li",[v._v("尽量使用 GPU，速度更快")])]),v._v(" "),e("p",[v._v("因此，我们需要创建独立的合成层，那么如何才能创建合成层呢？")]),v._v(" "),e("p",[v._v("直接原因（direct reason）：")]),v._v(" "),e("ul",[e("li",[v._v("硬件加速的 iframe 元素（比如 iframe 嵌入的页面中有合成层）demo")]),v._v(" "),e("li",[v._v("video 元素")]),v._v(" "),e("li",[v._v("覆盖在 video 元素上的视频控制栏")]),v._v(" "),e("li",[v._v("3D 或者三件加速的 2D Canvas 元素\n"),e("ul",[e("li",[v._v("demo：普通 2D Canvas 不会提升为合成层")]),v._v(" "),e("li",[v._v("demo：3D Canvas 提升为合成层")])])]),v._v(" "),e("li",[v._v("硬件加速的插件，比如 flash 等等")]),v._v(" "),e("li",[v._v("在 DPI 较高的屏幕上，fix 定位的元素会自动地被提升到合成层中。")]),v._v(" "),e("li",[v._v("有 3D transform")]),v._v(" "),e("li",[v._v("backface-visibility 为 hidden")]),v._v(" "),e("li",[v._v("对 opacity、transform、filter、backdropfilter 应用了 animation 或者 transition（需要是 active 的）")]),v._v(" "),e("li",[v._v("will-change 设置为 opacity、transform、top、left、bottom、right（其中 top、left 等需要设置明确的定位属性，如 relative 等）demo")]),v._v(" "),e("li",[v._v("后代元素原因：\n"),e("ul",[e("li",[v._v("有合成层后代同时本身有 transform、opacity（小于 1）、mask、filter、reflection 属性 demo")]),v._v(" "),e("li",[v._v("有合成层后代同时本身 fixed 定位 demo")]),v._v(" "),e("li",[v._v("有 3D transfrom 的合成层后代同时本身有 preserves-3d 属性 demo")]),v._v(" "),e("li",[v._v("有 3D transfrom 的合成层后代同时本身有 perspective 属性 demo")])])])]),v._v(" "),e("p",[v._v("提升合成层的最好方式是使用 CSS 的 will-change 属性。从上一节合成层产生原因中，可以知道 will-change 设置为 opacity、transform、top、left、bottom、right 可以将元素提升为合成层。")]),v._v(" "),e("p",[e("strong",[v._v("那么如何避免重绘和回流？")])]),v._v(" "),e("p",[v._v("具体而言，就是多使用 transform 或者 opacity 来实现动画效果，上述方法在合成层使用不会引起重绘和回流。")]),v._v(" "),e("p",[e("strong",[v._v("那么如何利用 GPU 加速呢？")])]),v._v(" "),e("p",[v._v("以下几个属性会获得 GPU 加速")]),v._v(" "),e("ul",[e("li",[v._v("opacity")]),v._v(" "),e("li",[v._v("translate")]),v._v(" "),e("li",[v._v("rotate")]),v._v(" "),e("li",[v._v("scale")])]),v._v(" "),e("h4",{attrs:{id:"_1-3-canvas-动画优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-canvas-动画优化","aria-hidden":"true"}},[v._v("#")]),v._v(" 1.3 Canvas 动画优化")]),v._v(" "),e("p",[v._v("CSS 虽然更加简单也更加保证性能的下限，但是要想实现更加复杂可控的动画，那就必须用到 Canvas+JavaScript 这个组合了")]),v._v(" "),e("p",[v._v("Canvas 作为浏览器提供的 2D 图形绘制 API 本身有一定的复杂度，优化的方法非常多，我们仅仅介绍几种比较主流的优化方式")]),v._v(" "),e("p",[e("strong",[v._v("运用"),e("code",[v._v("requestAnimationFrame")])])]),v._v(" "),e("p",[v._v("很多时候我们会使用"),e("code",[v._v("setInterval")]),v._v("这种定时器来完成 js 动画循环，但是定时器在单线程 js 环境下并不可靠，并不是能保证严格按照开发者的设置来进行动画循环，因此很多时候"),e("code",[v._v("setInterval")]),v._v("会引起掉帧的情况。")]),v._v(" "),e("p",[v._v("因此"),e("code",[v._v("requestAnimationFrame")]),v._v("的优势就体现出来了：")]),v._v(" "),e("ul",[e("li",[v._v("性能更好：优点是它能够将所有的动画都放到一个浏览器重绘周期里去做，这样能保存你的 CPU 的循环次数，提高性能")]),v._v(" "),e("li",[v._v("开销更小："),e("code",[v._v("requestAnimationFrame")]),v._v("是由浏览器专门为动画提供的 API，在运行时浏览器会自动优化方法的调用，并且如果页面不激活状态下的话，动画会自动暂停，有效节省了 CPU 开销")])]),v._v(" "),e("p",[e("strong",[v._v("离屏 canvas")])]),v._v(" "),e("p",[v._v("离屏渲染的原理是把离习 canvas 当成一个缓存区。把需要重复绘制的画面数据进行缓存起来，减少调用 canvas 的 API 的消耗：")]),v._v(" "),e("ol",[e("li",[v._v("创建离屏 canvas;")]),v._v(" "),e("li",[v._v("设置离屏 canvas 的宽度;")]),v._v(" "),e("li",[v._v("在离屏 canvas 中进行绘制;")]),v._v(" "),e("li",[v._v("在离屏 canvas 的全部或部分绘制到正在显示的 canvas 上")])]),v._v(" "),e("p",[e("strong",[v._v("避免浮点运算")])]),v._v(" "),e("p",[v._v("利用 canvas 进行动画绘制时，如果计算出来的坐标是浮点数，那么可能会出现 CSS Sub-pixel 的问题，也就是会自动将浮点数四舍五入转为整数，那么在动画的过程中，由于元素实际运动的轨迹并不是严格按照计算公式得到，那么就可能出现抖动的情况，同时也可能让元素的边缘出现抗锯齿失真这也是可能影响性能的一方面，因为一直在做不必要的取证运算。")]),v._v(" "),e("p",[e("strong",[v._v("减少调用 Canvas API")])]),v._v(" "),e("p",[v._v("canvas 也是通过操纵 js 来绘制的，但是相比于正常的 js 操作，调用 canvas API 将更加消耗资源，所以在绘制之前请做好规划，通过适量 js 原生计算减少 canvas API 的调用是一件比较划算的事情")]),v._v(" "),e("p",[v._v("比如作粒子效果时，尽量少使用圆，最好使用方形，因为粒子太小，所以方形看上去也跟圆差不多。至于原因，很容易理解，我们画一个圆需要三个步骤：先 beginPath，然后用 arc 画弧，再用 fill 进行填充才能产生一个圆。但是画方形，只需要一个 fillRect 就可以了。虽然只是差了两个调用，当粒子对象数量达到一定时，这性能差距就会显示出来了。")]),v._v(" "),e("p",[e("strong",[v._v("web worker")])]),v._v(" "),e("p",[v._v("在进行某些耗时操作，例如计算大量数据，一帧中包含了太多的绘制状态，大规模的 DOM 操作等，可能会导致页面卡顿，影响用户体验")]),v._v(" "),e("p",[v._v("web worker 最常用的场景就是大量的频繁计算，减轻主线程压力，如果遇到大规模的计算，可以通过此 API 分担主线程压力，此 API 兼容性已经很不错了，既然 canvas 可以用，那 web worker 也就完全可以考虑使用。")]),v._v(" "),e("h3",{attrs:{id:"二、大量数据性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、大量数据性能优化","aria-hidden":"true"}},[v._v("#")]),v._v(" 二、大量数据性能优化")]),v._v(" "),e("h4",{attrs:{id:"_2-1-虚拟列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-虚拟列表","aria-hidden":"true"}},[v._v("#")]),v._v(" 2.1 虚拟列表")]),v._v(" "),e("p",[v._v("我们在实际开发过程中会碰到一种场景，前端需要渲染大量数据（几千行数万行数据不等），而且还不允许分页，这种情况下网页会出现掉帧、卡顿甚至假死的情况。")]),v._v(" "),e("p",[v._v("这是典型的大量数据渲染的场景，在不能使用分页的情况下通常采用虚拟列表的方式来解决此问题。")]),v._v(" "),e("p",[v._v("因为 DOM 元素的创建和渲染需要的时间成本很高，在大数据的情况下，完整渲染列表所需要的时间不可接收。其中一个解决思路就是在任何情况下只对"),e("strong",[v._v("可见区域")]),v._v("进行渲染，可以达到极高的被盗渲染性能。")]),v._v(" "),e("p",[v._v("虚拟列表指的就是"),e("strong",[v._v("可视区域渲染")]),v._v("的列表，重要的基本就是两个概念：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("可滚动区域：假设有 1000 条数据，每个列表项的高度是 30，那么可滚动的区域的高度就是 "),e("code",[v._v("1000*30")]),v._v("。当用户改变列表的滚动条的当前滚动值的时候，会造成可见区域的内容的变更。")])]),v._v(" "),e("li",[e("p",[v._v("可见区域：比如列表的高度是 300，右侧有纵向滚动条可以滚动，那么视觉可见的区域就是可见区域。实现虚拟列表就是处理滚动后的可见区域的变更，其中具体步骤如下：")])]),v._v(" "),e("li",[e("p",[v._v("计算当前可见区域起始数据的 startIndex")])]),v._v(" "),e("li",[e("p",[v._v("计算当前可见区域结束数据的 endindex")])]),v._v(" "),e("li",[e("p",[v._v("计算当前可见区域的数据，并渲染到页面中")])]),v._v(" "),e("li",[e("p",[v._v("计算 startIndex 对应的数据在整个列表中的偏移位置 startOffset，并设置到列表上建议参考下图理解一下上面的步骤：")])])]),v._v(" "),e("p",[e("img",{attrs:{src:"performance08.png",alt:"images"}})]),v._v(" "),e("blockquote",[e("p",[v._v("虚拟滚动的具体实现原理可以参看饿了么前端的文章"),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/34585166",target:"_blank",rel:"noopener noreferrer"}},[v._v("再谈前端虚拟列表的实现"),e("OutboundLink")],1)])]),v._v(" "),e("h4",{attrs:{id:"_2-2-web-worker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-web-worker","aria-hidden":"true"}},[v._v("#")]),v._v(" 2.2 Web Worker")]),v._v(" "),e("p",[v._v("大量数据的渲染环节我们可以采用虚拟列表或者虚拟表格的方式实现，但是大量数据的计算环节依然会产生浏览器假死或者卡顿的情况")]),v._v(" "),e("p",[v._v("通常情况下我们 CPU 密集型的任务都是交给后端计算的，但是有些时候我们需要处理一些离线场景或者解放后端压力，这个时候此方法就不奏效了")]),v._v(" "),e("p",[v._v("还有一种方法是计算切片，使用 setTimeout 拆分密集型任务，但是有一些计算无法利用此方法拆解，同时还可能产生副作用，这个方法需要视具体场景而动.")]),v._v(" "),e("p",[v._v("最后一种方法也是目前比较奏效的方法就是利用 Web Worker 进行多线程编程")]),v._v(" "),e("p",[v._v("Web Worker 是一种独立的线程（独立的执行环境），这就意味它可以完全和 UI 线程（主线程）并行的执行 js 代码，从而不会阻塞 UI，它和主线程是通过 onmessage 和 postMessage 接口进行通信的。")]),v._v(" "),e("p",[v._v("Web Worker 使得网页中进行多线程编程成为可能。当主线程在处理界面事件时，worker 可以在后台运行，帮你处理大量的数据计算，当计算完成，将计算结果返回给主线程，由主线程更新 DOM 元素。")]),v._v(" "),e("blockquote",[e("p",[v._v("Web Worker 的具体实现原理可以参看石墨前端的文章"),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29165800",target:"_blank",rel:"noopener noreferrer"}},[v._v("再谈前端虚拟列表的实现"),e("OutboundLink")],1)])]),v._v(" "),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[v._v("#")]),v._v(" 参考资料")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://juejin.im/post/5df5bcea6fb9a016091def69",target:"_blank",rel:"noopener noreferrer"}},[v._v("(1.6w 字)浏览器与前端性能灵魂之问，请问你能接得住几个？（上）"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/JohnsenZhou/Front-End-Performance-Checklist",target:"_blank",rel:"noopener noreferrer"}},[v._v("前端性能清单"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzUxMTcwOTM4Mg==&mid=2247483962&idx=1&sn=f9337ad983c6303811eb43d07d9f23d5&chksm=f96edb93ce195285943211e645cc683989826abdaaa8ab0b073a20761369ed04843c835c50b7#rd",target:"_blank",rel:"noopener noreferrer"}},[v._v("嗨，送你一张 Web 性能优化地图"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5a966bd16fb9a0635172a50a",target:"_blank",rel:"noopener noreferrer"}},[v._v("2018 前端性能优化清单"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/lcxfs1991/blog/issues/4",target:"_blank",rel:"noopener noreferrer"}},[v._v("性能优化三部曲之一——构建篇"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/laoqiren/web-performance",target:"_blank",rel:"noopener noreferrer"}},[v._v("Web 性能"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/alienzhou/fe-performance-journey",target:"_blank",rel:"noopener noreferrer"}},[v._v("前端性能优化之旅"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/GIpmZIY6yxGRBpkTDHuJuw",target:"_blank",rel:"noopener noreferrer"}},[v._v("Web 性能领域常见的专业术语"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/eoZyeJahkBpaYxzC2n5NLQ",target:"_blank",rel:"noopener noreferrer"}},[v._v("如何使页面交互更流畅"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5e143104e51d45414a4715f7",target:"_blank",rel:"noopener noreferrer"}},[v._v("从 8 道面试题看浏览器渲染过程与性能优化"),e("OutboundLink")],1)])]),v._v(" "),e("h2",{attrs:{id:"联系作者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[v._v("#")]),v._v(" 联系作者")]),v._v(" "),e("div",{attrs:{align:"center"}},[e("p",[v._v("\n        平凡世界，贵在坚持。\n    ")]),v._v(" "),e("img",{attrs:{src:v.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);_.default=r.exports}}]);