(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{287:function(a,s,n){"use strict";n.r(s);var e=n(4),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"bfc-原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bfc-原理","aria-hidden":"true"}},[a._v("#")]),a._v(" BFC 原理")]),a._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),n("p",[a._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),a._v(" "),n("h2",{attrs:{id:"内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E4%B8%80%E3%80%81bfc-%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F"}},[a._v("BFC 是什么？")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E5%93%AA%E4%BA%9B%E5%85%83%E7%B4%A0%E4%BC%9A%E7%94%9F%E6%88%90-bfc%EF%BC%9F"}},[a._v("哪些元素会生成 BFC？")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#%E4%B8%89%E3%80%81bfc-%E7%9A%84%E4%BD%9C%E7%94%A8%E5%8F%8A%E5%8E%9F%E7%90%86"}},[a._v("BFC 的作用及原理")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E6%80%BB%E7%BB%93"}},[a._v("总结")])])]),a._v(" "),n("h3",{attrs:{id:"一、bfc-是什么？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、bfc-是什么？","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、BFC 是什么？")]),a._v(" "),n("blockquote",[n("p",[a._v("BFC 直译为“块级格式化上下文”。它是一个独立的渲染区域，只有 Block-level box 参与，它规定了内部的 Block-level Box 如何布局，并且与这个区域外部毫不相干。")])]),a._v(" "),n("ol",[n("li",[a._v("内部的 Box 会在垂直方向，一个接一个地放置。")]),a._v(" "),n("li",[a._v("Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠")]),a._v(" "),n("li",[a._v("每个元素的 margin box 的左边，与包含块 border box 的左边相接触（对于从左往右的格式化，否则相反）。即使存在浮动也是如此。")]),a._v(" "),n("li",[a._v("BFC 的区域不会与 float box 重叠。")]),a._v(" "),n("li",[a._v("BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。")]),a._v(" "),n("li",[a._v("计算 BFC 的高度时，浮动元素也参与计算")])]),a._v(" "),n("h3",{attrs:{id:"二、哪些元素会生成-bfc？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、哪些元素会生成-bfc？","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、哪些元素会生成 BFC？")]),a._v(" "),n("ul",[n("li",[a._v("根元素")]),a._v(" "),n("li",[a._v("float 属性不为 none")]),a._v(" "),n("li",[a._v("position 的值不为 relative 和 static")]),a._v(" "),n("li",[a._v("display 为 inline-block，table-cell,table-caption,flex,inline-flex")]),a._v(" "),n("li",[a._v("overflow 不为 visible")])]),a._v(" "),n("h3",{attrs:{id:"三、bfc-的作用及原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、bfc-的作用及原理","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、BFC 的作用及原理")]),a._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#_3-1-%E8%87%AA%E9%80%82%E5%BA%94%E7%9A%84%E4%B8%A4%E6%A0%8F%E5%B8%83%E5%B1%80"}},[a._v("自适应的两栏布局")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#_3-2-%E6%B8%85%E9%99%A4%E5%86%85%E9%83%A8%E6%B5%AE%E5%8A%A8"}},[a._v("清除内部浮动")])]),a._v(" "),n("li",[n("a",{attrs:{href:"#_3-3-%E9%98%B2%E6%AD%A2-margin-%E9%87%8D%E5%8F%A0"}},[a._v("防止 margin 重叠")])])]),a._v(" "),n("h4",{attrs:{id:"_3-1-自适应的两栏布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-自适应的两栏布局","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.1 自适应的两栏布局")]),a._v(" "),n("p",[a._v("代码：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<style>\n    body {\n        width: 300px;\n        position: relative;\n    }\n    .aside {\n        width: 100px;\n        height: 150px;\n        float: left;\n        background: #f66;\n    }\n    .main {\n        height: 200px;\n        background: #fcc;\n    }\n</style>\n<body>\n    <div class="aside"></div>\n    <div class="main"></div>\n</body>\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br")])]),n("p",[a._v("页面：")]),a._v(" "),n("p",[n("img",{attrs:{src:"bfc01.png",alt:"01"}})]),a._v(" "),n("p",[a._v("根据 BFC 布局规则第 3 条：")]),a._v(" "),n("blockquote",[n("p",[a._v("每个元素的 margin-box 的左边， 与包含块 border-box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。")])]),a._v(" "),n("p",[a._v("因此，虽然存在浮动的元素 aslide，但 main 的左边依然会与包含块的左边相接触。")]),a._v(" "),n("p",[a._v("根据 BFC 布局规则第四条：")]),a._v(" "),n("blockquote",[n("p",[a._v("BFC 的区域不会与 float box 重叠。")])]),a._v(" "),n("p",[a._v("我们可以通过通过触发 main 生成 BFC， 来实现自适应两栏布局。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(".main {\n    overflow: hidden;\n}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br")])]),n("p",[a._v("当触发 main 生成 BFC 后，这个新的 BFC 不会与浮动的 aside 重叠。因此会根据包含块的宽度，和 aside 的宽度，自动变窄。")]),a._v(" "),n("p",[a._v("页面：")]),a._v(" "),n("p",[n("img",{attrs:{src:"bfc02.png",alt:"02"}})]),a._v(" "),n("p",[n("strong",[a._v("对比")]),a._v("：实现布局的另一种方式利用块状元素流体特性实现的自适应布局")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("常用方法：浮动或者定位+margin撑开\n\n不足之处：我们需要知道浮动或绝对定位内容的尺寸。然后，流体内容才能有对应的margin或padding或border值进行位置修正。\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br")])]),n("h4",{attrs:{id:"_3-2-清除内部浮动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-清除内部浮动","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.2 清除内部浮动")]),a._v(" "),n("p",[a._v("代码：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<style>\n    .par {\n        border: 5px solid #fcc;\n        width: 300px;\n    }\n\n    .child {\n        border: 5px solid #f66;\n        width:100px;\n        height: 100px;\n        float: left;\n    }\n</style>\n<body>\n    <div class="par">\n        <div class="child"></div>\n        <div class="child"></div>\n    </div>\n</body>\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br")])]),n("p",[a._v("页面：")]),a._v(" "),n("p",[n("img",{attrs:{src:"bfc03.png",alt:"03"}})]),a._v(" "),n("blockquote",[n("p",[a._v("计算 BFC 的高度时，浮动元素也参与计算")])]),a._v(" "),n("p",[a._v("为达到清除内部浮动，我们可以触发 par 生成 BFC，那么 par 在计算高度时，par 内部的浮动元素 child 也会参与计算。")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(".par {\n    overflow: hidden;\n}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br")])]),n("p",[a._v("效果如下：")]),a._v(" "),n("p",[n("img",{attrs:{src:"bfc04.png",alt:"04"}})]),a._v(" "),n("h4",{attrs:{id:"_3-3-防止-margin-重叠"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-防止-margin-重叠","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.3 防止 margin 重叠")]),a._v(" "),n("p",[a._v("代码：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("<style>\n    p {\n        color: #f55;\n        background: #fcc;\n        width: 200px;\n        line-height: 100px;\n        text-align:center;\n        margin: 100px;\n    }\n</style>\n<body>\n    <p>Haha</p>\n    <p>Hehe</p>\n</body>\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br")])]),n("p",[a._v("页面：")]),a._v(" "),n("p",[n("img",{attrs:{src:"bfc05.png",alt:"05"}})]),a._v(" "),n("p",[a._v("两个 p 之间的距离为 100px，发送了 margin 重叠。")]),a._v(" "),n("blockquote",[n("p",[a._v("Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠")])]),a._v(" "),n("p",[a._v("我们可以在 p 外面包裹一层容器，并触发该容器生成一个 BFC。那么两个 P 便不属于同一个 BFC，就不会发生 margin 重叠了。")]),a._v(" "),n("p",[a._v("代码：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<style>\n    .wrap {\n        overflow: hidden;\n    }\n    p {\n        color: #f55;\n        background: #fcc;\n        width: 200px;\n        line-height: 100px;\n        text-align:center;\n        margin: 100px;\n    }\n</style>\n<body>\n    <p>Haha</p>\n    <div class="wrap">\n        <p>Hehe</p>\n    </div>\n</body>\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br")])]),n("p",[a._v("效果:")]),a._v(" "),n("p",[n("img",{attrs:{src:"bfc06.png",alt:"06"}})]),a._v(" "),n("h3",{attrs:{id:"四、总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、总结","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、总结")]),a._v(" "),n("blockquote",[n("p",[a._v("BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。")])]),a._v(" "),n("p",[a._v("因为 BFC 内部的元素和外部的元素绝对不会互相影响，因此，当 BFC 外部存在浮云时，它不应该影响 BFC 内容 box 的布局，BFC 会通过变窄，而不与浮动有重叠。同样的，当 BFC 内部有浮动时，为了不影响外部元素的布局，BFC 计算高度时会包括浮动高度。避免 margin 重叠也是这样的一个道理。")]),a._v(" "),n("h3",{attrs:{id:"五、其它格式化上下文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、其它格式化上下文","aria-hidden":"true"}},[a._v("#")]),a._v(" 五、其它格式化上下文")]),a._v(" "),n("ul",[n("li",[a._v("行内级格式化上下文(IFC)")]),a._v(" "),n("li",[a._v("栅格格式化上下文(GFC)")]),a._v(" "),n("li",[a._v("Flex 格式化上下文(FFC)")])]),a._v(" "),n("h4",{attrs:{id:"_5-1-行内级格式化上下文-ifc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-行内级格式化上下文-ifc","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.1 行内级格式化上下文(IFC)")]),a._v(" "),n("p",[a._v("行内级格式化上下文用来规定行内级盒子的格式化规则。")]),a._v(" "),n("p",[a._v("IFC 只有在一个块级元素中"),n("strong",[a._v("仅包含")]),a._v("内联级别元素时才会生成。")]),a._v(" "),n("p",[n("strong",[a._v("布局规则")])]),a._v(" "),n("ol",[n("li",[a._v("内部的盒子会在水平方向，一个接一个地放置。")]),a._v(" "),n("li",[a._v("这些盒子垂直方向的起点从包含块盒子的顶部开始。")]),a._v(" "),n("li",[a._v("摆放这些盒子的时候，它们在水平方向上 padding、border、margin 所占用空间都会被考虑内。")]),a._v(" "),n("li",[a._v("在垂直方向上，这些框可能会以不同形式来对齐(vertical-align)：它们可能会使用底部或顶部对齐，也可能通过其内部的文本基线对齐。")]),a._v(" "),n("li",[a._v("能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框(line box)。行框的宽度是由包含块（containing box）和存在的浮动来决定。")]),a._v(" "),n("li",[a._v("IFC 中的"),n("code",[a._v("line box")]),a._v(" 一般左右边都是贴紧其包含块，但是会因为 float 元素的存在发生变化。float 元素会位于 IFC 与 "),n("code",[a._v("line box")]),a._v(" 之间，便得 "),n("code",[a._v("line box")]),a._v(" 宽度缩短。")]),a._v(" "),n("li",[a._v("IFC 中的"),n("code",[a._v("line box")]),a._v(" 高度由 CSS 行高计算规则来确定，同个 IFC 下的多个 line box 高度可能会不同（比如一行包含了较高的图片，而另一行只有文本）")]),a._v(" "),n("li",[a._v("当 inline-level boxes 的总宽度少于包含它们的 line box 时，其水平渲染规则由"),n("code",[a._v("text-align")]),a._v("属性来确定，如果取值为"),n("code",[a._v("justify")]),a._v("，那么浏览器会对 inline-boxes（注意不是 inline-table 和 inline-block boxes）中的文字和空格做出拉伸。")]),a._v(" "),n("li",[a._v("当一个 inline box 超过 line box 的宽度时，它会被分割成多个 boxes，这些 boxes 被分布在多个 line box 里。如果一个 inline box 不能被分割（比如只包含单个字符，或 word-breaking 机制被禁用，或该行内框受 white-space 属性值为 nowrap 或 pre 的影响），那么这个 inline box 将溢出这个 line box。")])]),a._v(" "),n("p",[n("strong",[a._v("作用")])]),a._v(" "),n("ul",[n("li",[a._v("水平居中：当一个块要在环境水平居中时，设置其为"),n("code",[a._v("inline-block")]),a._v("则会在外层产生 IFC，通过设置父容器"),n("code",[a._v("text-align:center")]),a._v("则可以使其水平居中。\n"),n("blockquote",[n("p",[a._v("值得注意的是，设置一个块为"),n("code",[a._v("inline-block")]),a._v("，以单个封闭块来参与外部的 IFC，而内部则生成了一个 BFC。")])])]),a._v(" "),n("li",[a._v("垂直居中：创建一个 IFC，用其中一个元素撑开父元素的高度，然后设置其"),n("code",[a._v("vertical-align:middle")]),a._v("，其他行内元素则可以在此父元素下垂直居中。")])]),a._v(" "),n("h4",{attrs:{id:"_5-2-栅格格式化上下文-gfc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-栅格格式化上下文-gfc","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.2 栅格格式化上下文(GFC)")]),a._v(" "),n("p",[a._v("flex 教程可查看"),n("a",{attrs:{href:"https://km.xiaowuzi.info/css/grid.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里"),n("OutboundLink")],1)]),a._v(" "),n("h4",{attrs:{id:"_5-3-flex-格式化上下文-ffc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-flex-格式化上下文-ffc","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.3 Flex 格式化上下文(FFC)")]),a._v(" "),n("p",[a._v("一个弹性容器为其内容建立了一个新的弹性格式化上下文环境（FFC）。")]),a._v(" "),n("p",[a._v("值得注意的是，弹性容器不是块容器，下列适用于块布局的属性不适用于弹性布局：")]),a._v(" "),n("ol",[n("li",[a._v("在 CSS3 多列布局模块中定义的"),n("code",[a._v("column-*")]),a._v("属性不适用于弹性容器。")]),a._v(" "),n("li",[a._v("float 和 clear 属性对于弹性项没有作用，并不会把它带离文档流（或相反）。然而，浮动属性仍然会通过影响 display 属性的计算值而影响 box 的生成。")]),a._v(" "),n("li",[n("code",[a._v("vertical-align")]),a._v(" 属性对于弹性项没有作用")]),a._v(" "),n("li",[n("code",[a._v("::fist-line")]),a._v("和"),n("code",[a._v("::first-letter")]),a._v("伪元素不适用于弹性容器，而且弹性容器不为他们的祖先提供第一个格式化的行或第一个字母。")])]),a._v(" "),n("p",[a._v("flex 教程可查看"),n("a",{attrs:{href:"https://km.xiaowuzi.info/css/flex.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里"),n("OutboundLink")],1)]),a._v(" "),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000013023485",target:"_blank",rel:"noopener noreferrer"}},[a._v("CSS 中重要的 BFC"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/chen-cong/p/7862832.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("CSS 中的 BFC 详解"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/ljianshu/Blog/issues/15",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入理解 BFC"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5df1e312f265da33d039d06d#heading-4",target:"_blank",rel:"noopener noreferrer"}},[a._v("BFC 理解"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/chokcoco/iCSS/issues/56",target:"_blank",rel:"noopener noreferrer"}},[a._v("IFC、BFC、GFC 与 FFC 知多少"),n("OutboundLink")],1)])]),a._v(" "),n("h2",{attrs:{id:"联系作者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),n("div",{attrs:{align:"center"}},[n("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),n("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=t.exports}}]);