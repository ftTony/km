(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{322:function(s,a,n){"use strict";n.r(a);var e=n(4),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"几种常见的-css-布局（转载）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#几种常见的-css-布局（转载）","aria-hidden":"true"}},[s._v("#")]),s._v(" 几种常见的 CSS 布局（转载）")]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。相关代码在"),n("a",{attrs:{href:"https://github.com/ftTony/notes/tree/master/css/layout",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E5%8D%95%E5%88%97%E5%B8%83%E5%B1%80"}},[s._v("单列布局")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E4%B8%A4%E5%88%97%E8%87%AA%E9%80%82%E5%BA%94%E5%B8%83%E5%B1%80"}},[s._v("两列自适应布局")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80"}},[s._v("三栏布局")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E7%AD%89%E9%AB%98%E5%B8%83%E5%B1%80"}},[s._v("等高布局")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E7%B2%98%E8%BF%9E%E5%B8%83%E5%B1%80"}},[s._v("粘连布局")])])]),s._v(" "),n("h3",{attrs:{id:"一、单列布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、单列布局","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、单列布局")]),s._v(" "),n("p",[n("img",{attrs:{src:"layout01.png",alt:"images"}})]),s._v(" "),n("p",[s._v("常见的单列布局有两种：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("header.content")]),s._v("和"),n("code",[s._v("footer")]),s._v("等宽的单列布局")]),s._v(" "),n("li",[n("code",[s._v("header与")]),s._v("footer"),n("code",[s._v("等宽")]),s._v("content`略窄的单列布局")])]),s._v(" "),n("h3",{attrs:{id:"_1-1-如何实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-如何实现","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.1 如何实现")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<div class="header"></div>\n<div class="content"></div>\n<div class="footer"></div>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".header{\n    margin:0 auto;\n    max-width:960px;\n    height:100px;\n    background-color:blue;\n}\n.content{\n    margin:0 auto;\n    max-width:400px;\n    height:400px;\n    background-color:aquemarine;\n}\n.footer{\n    margin:0 auto;\n    max-width:960px;\n    height:100px;\n    background-color:aqua;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("对于第二种，header、footer 的内容宽度不设置，块级元素充满整个屏幕，但 header、conter 和 footer 的内容区设置同一个 width，并通过 margin:auto 实现居中。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<div class="header">\n    <div class="nav"></div>\n</div>\n<div class="content"></div>\n<div class="footer"></div>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".header{\n    margin:0 auto;\n    max-width: 960px;\n    height:100px;\n    background-color: blue;\n}\n.nav{\n    margin: 0 auto;\n    max-width: 800px;\n    background-color: darkgray;\n    height: 50px;\n}\n.content{\n    margin: 0 auto;\n    max-width: 800px;\n    height: 400px;\n    background-color: aquamarine;\n}\n.footer{\n    margin: 0 auto;\n    max-width: 960px;\n    height: 100px;\n    background-color: aqua;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h3",{attrs:{id:"二、两列自适应布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、两列自适应布局","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、两列自适应布局")]),s._v(" "),n("p",[n("strong",[s._v("两列自适应布局是指一列由内容撑开，另一列撑满剩余宽度的布局方式")])]),s._v(" "),n("h4",{attrs:{id:"_2-1-float-overflow-hidden"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-float-overflow-hidden","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.1 float+overflow:hidden")]),s._v(" "),n("p",[s._v("如果是普通的两列布局，"),n("strong",[s._v("浮动+普通元素的")]),s._v("margin 便可以实现，但如果是自适应的两列布局，利用"),n("code",[s._v("float+overflow:hidden")]),s._v("便可以实现，这种办法主要通过"),n("code",[s._v("overflow")]),s._v("触发"),n("code",[s._v("BFC")]),s._v("不会重叠浮动元素。由于设置"),n("code",[s._v("overflow:hidden")]),s._v("并不会触发 IE6-浏览的 haslayout 属性，所以需要调协"),n("code",[s._v("zoom:1")]),s._v("来兼容 IE6-浏览器。具体代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<div class="parent" style="background-color: lightgrey;">\n    <div class="left" style="background-color: lightblue;">\n        <p>left</p>\n    </div>\n    <div class="right"  style="background-color: lightgreen;">\n        <p>right</p>\n        <p>right</p>\n    </div>\n</div>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".parent {\n  overflow: hidden;\n  zoom: 1;\n}\n.left {\n  float: left;\n  margin-right: 20px;\n}\n.right {\n  overflow: hidden;\n  zoom: 1;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[n("strong",[s._v("注意点:如果侧边栏在右边时，注意渲染顺序。即在 HTML 中，先写侧边栏后写主内容")])]),s._v(" "),n("h4",{attrs:{id:"_2-2-flex-布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-flex-布局","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.2 Flex 布局")]),s._v(" "),n("p",[s._v("Flex 布局，也叫弹性盒子布局，区区简单几行代码就可以实现各种页面的布局。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".parent{\n    display:flex;\n}\n.right{\n    margin-left:20px;\n    flex:1;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h4",{attrs:{id:"_2-3-grid-布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-grid-布局","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.3 grid 布局")]),s._v(" "),n("p",[s._v("Grid 布局，是一个基于网格的二维布局系统，目的是用来优化用户界面设计。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".parent{\n    display:grid;\n    grid-template-columns:auto 1fr;\n    grid-gap:20px;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"三、三栏布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、三栏布局","aria-hidden":"true"}},[s._v("#")]),s._v(" 三、三栏布局")]),s._v(" "),n("p",[n("strong",[s._v("特征：中间列自适应宽度，旁边两侧固定宽度")])]),s._v(" "),n("h4",{attrs:{id:"_3-1-圣怀布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-圣怀布局","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1 圣怀布局")]),s._v(" "),n("p",[n("strong",[s._v("特点")])]),s._v(" "),n("p",[n("strong",[s._v("比较特殊的三栏布局，同样也是两固定宽度，中间自适应，唯一区别是 dom 结构必须是先写中间列部分，这样实现中间列可以优先加载。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".container{\n    padding-left:220px;     // 为左右拦腾出空间\n    padding-right:220px;\n}\n.left{\n    float:left;\n    width:200px;\n    height: 400px;\n    background: red;\n    margin-left:-100%;\n    position:relative;\n    left:-220px;\n}\n.center{\n    float:left;\n    width:100%;\n    height: 500px;\n    background: yellow;\n}\n.right{\n    float:left;\n    width:200px;\n    height:400px;\n    right:-220px;\n    position:relative;\n    background: blue;\n    margin-left:-200px;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<article class="container">\n    <div class="center">\n        <h2>圣怀布局</h2>\n    </div>\n</article>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[s._v("实现步骤")])]),s._v(" "),n("ul",[n("li",[s._v("三个部分都设定为左浮动，**否则左右两边内容上不去，就不可能与中间列同一行。**然后设置 center 的宽度为 100%("),n("strong",[s._v("实现中间列内容自适应")]),s._v(")，此时，left 和 right 部分会跳到下一行")])]),s._v(" "),n("p",[n("img",{attrs:{src:"layout02.png",alt:"images"}})]),s._v(" "),n("ul",[n("li",[s._v("通过设置"),n("code",[s._v("margin-left")]),s._v("为负值让"),n("code",[s._v("left")]),s._v("和"),n("code",[s._v("right")]),s._v("部分回到与"),n("code",[s._v("center")]),s._v("部分同一行")])]),s._v(" "),n("p",[n("img",{attrs:{src:"layout03.png",alt:"images"}})]),s._v(" "),n("ul",[n("li",[s._v("通过设置父容器的"),n("code",[s._v("padding-left")]),s._v("和"),n("code",[s._v("padding-right")]),s._v("，让左右两边留出间隙。")])]),s._v(" "),n("p",[n("img",{attrs:{src:"layout04.png",alt:"images"}})]),s._v(" "),n("ul",[n("li",[s._v("通过设置相对定位，让"),n("code",[s._v("left")]),s._v("和"),n("code",[s._v("right")]),s._v("部分移动到两边。")])]),s._v(" "),n("p",[n("img",{attrs:{src:"layout05.png",alt:"images"}})]),s._v(" "),n("p",[n("strong",[s._v("缺点")])]),s._v(" "),n("ul",[n("li",[s._v("center 部分的最小宽度不能小于 left 部分的宽度，否则会 left 总会掉到下一行")]),s._v(" "),n("li",[s._v("如果其中一列内容高度拉长(如下图)，其他两列的背景并不会自动填充。(借助等高布局正 padding+负 margin 可解决，下文会介绍)")])]),s._v(" "),n("p",[n("img",{attrs:{src:"layout06.png",alt:"images"}})]),s._v(" "),n("h4",{attrs:{id:"_3-2-双飞翼布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-双飞翼布局","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.2 双飞翼布局")]),s._v(" "),n("p",[n("strong",[s._v("特点")])]),s._v(" "),n("p",[n("strong",[s._v("同样也是三栏布局，在圣杯布局基础上进一步优化，解决了圣杯布局错乱问题，实现了内容内容与布局的分离。而且任何一栏都可以是最高栏，不会出问题。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".container{\n    min-width:600px;    // 确保中间内容可以显示出来，两倍left宽+right宽\n}\n.left{\n    float:left;\n    width:200px;\n    height:400px;\n    background:red;\n    margin-left:-100%;\n}\n.center{\n    float:left;\n    width:100%;\n    height:500px;\n    background:yellow;\n}\n.center .inner{\n    margin: 0 200px;  //新增部分\n}\n.right{\n    float:left;\n    width:200px;\n    height:400px;\n    background:blue;\n    margin-left:-200px;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<article class="container">\n    <div class="center">\n        <div class="inner">双飞翼布局</div>\n    </div>\n    <div class="left"></div>\n    <div class="right"></div>\n</article>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("strong",[s._v("实现步骤（前两步与圣杯布局一样）")])]),s._v(" "),n("ul",[n("li",[s._v("三个部分都设定为浮动，然后设置 center 的宽度为 100%，此时，left 和 right 部分会跳到下一行；")]),s._v(" "),n("li",[s._v("通过设置 margin-left 为负值让 left 和 right 部分回到与 center 部分同一行；")]),s._v(" "),n("li",[s._v("center 部分增加一个内层 div，并设 margin: 0 200px；")])]),s._v(" "),n("p",[n("strong",[s._v("缺点")])]),s._v(" "),n("p",[n("strong",[s._v("多加一层 dom 树节点，增加渲染树生成的计算量。")])]),s._v(" "),n("h4",{attrs:{id:"_3-3-两种布局实现方式对比"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-两种布局实现方式对比","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.3 两种布局实现方式对比")]),s._v(" "),n("ul",[n("li",[s._v("两种布局方式都是把主列放在文档流最前面，使主列优先加载。")]),s._v(" "),n("li",[s._v("两种布局方式在实现上也有相同之处，都是让三列浮动，然后通过负外边距形成三列布局。")]),s._v(" "),n("li",[s._v("两种布局方式的不同之处在于如何处理中间主列的位置：\n"),n("ul",[n("li",[n("strong",[s._v("圣杯布局是利用父容器的左、右内边距+两个从列相对定位；")])]),s._v(" "),n("li",[n("strong",[s._v("双飞翼布局是把主列嵌套在一个新的父级块中利用主列的左、右外边距进行布局调整")])])])])]),s._v(" "),n("h3",{attrs:{id:"四、等高布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、等高布局","aria-hidden":"true"}},[s._v("#")]),s._v(" 四、等高布局")]),s._v(" "),n("p",[s._v("等高布局是指子元素在父元素中高度相等的布局方式。接下来我们介绍常见几种实现方式:")]),s._v(" "),n("h4",{attrs:{id:"_4-1-利用正-padding-负-margin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-利用正-padding-负-margin","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.1 利用正 padding+负 margin")]),s._v(" "),n("p",[s._v("我们通过等布局便可以解决圣杯布局的第二点缺点，因为背景是在 padding 区域显示的，**设置一个大数值的 padding-bottom，并在所有列外面加上一个容器，并设置 overflow:hidden 把溢出背景切掉。**这种可能实现多列等高布局，并且也能实现列与列之间分隔线效果，结构简单，兼容所有浏览器。新增代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".center,\n.left,\n.right{\n    padding-bottom: 10000px;\n    margin-bottom: -10000px;\n}\n.container {\n    padding-left: 220px;\n    padding-right: 220px;\n    overflow: hidden;//把溢出背景切掉\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[n("img",{attrs:{src:"layout07.png",alt:"images"}})]),s._v(" "),n("h4",{attrs:{id:"_4-2-利用背景图片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-利用背景图片","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.2 利用背景图片")]),s._v(" "),n("p",[s._v("这种方法是我们实现等高列最早使用的一种方法，就是使用背景图片，在列的父元素上使用这个背景图进行 Y 轴的铺放，从而实现一种等高列的假象。实现方法简单，兼容性强，不需要太多的 css 样式就可以轻松实现,但此方法不适合流体布局等高列的布局。")]),s._v(" "),n("p",[s._v("在制作样式之前需要一张类似下面的背景图：")]),s._v(" "),n("p",[n("img",{attrs:{src:"layout08.gif",alt:"images"}})]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<div class=”container clearfix”>\n    <div class=”left”></div>\n    <div  class=”content”></div>\n    <div class=”right”></div>\n</div>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('.container{\n    background:url("column.png") repeat-y;\n    width:960px;\n    margin:0 auto;\n}\n.left{\n    float:left;\n    width:220px;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h4",{attrs:{id:"_4-3-模仿表格布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-模仿表格布局","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.3 模仿表格布局")]),s._v(" "),n("p",[s._v("这是一种非常简单，易于实现的方法。不过兼容性不好，在 ie6-7 无法正常运行。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('   <div class="container table">\n      <div class="containerInner tableRow">\n        <div class="column tableCell cell1">\n          <div class="left aside">\n            ....\n          </div>\n        </div>\n        <div class="column tableCell cell2">\n          <div class="content section">\n            ...\n          </div>\n        </div>\n        <div class="column tableCell cell3">\n          <div class="right aside">\n            ...\n          </div>\n        </div>\n      </div>\n    </div>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".table{\n    width: auto;\n    min-width:1000px;\n    margin:0 auto;\n    padding:0;\n    display:table;\n}\n.tableRow{\n    display:table-row;\n}\n.tableCell{\n    background:#f00;\n    height:800px;\n}\n.cell2{\n    background:#0f0;\n}\n.cell3{\n    background:#00f;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h4",{attrs:{id:"_4-4-使用边框和定位"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-使用边框和定位","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.4 使用边框和定位")]),s._v(" "),n("p",[s._v("这种方法是使用边框和绝对定位来实现一个假的高度相等列的效果。结构简单，兼容各浏览器，容易掌握。假设你需要实现一个两列等高布局，侧栏高度要和主内容高度相等。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#wrapper{\n    width:960px;\n    margin:0 auto;\n}\n#mainContent{\n    border-right:220px solid #dfdfdf;\n    position:absolute;\n    width:740px;\n    height:800px;\n    background:green;\n}\n#sidebar{\n    background:#dfdfdf;\n    margin-left:740px;\n    position:absolute;\n    height:800px;\n   width:220px;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<div id="wrapper">\n    <div id="mainContent">...</div>\n    <div id="sidebar">...</div>\n</div>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"五、粘连布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、粘连布局","aria-hidden":"true"}},[s._v("#")]),s._v(" 五、粘连布局")]),s._v(" "),n("h4",{attrs:{id:"_5-1-特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-特点","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.1 特点")]),s._v(" "),n("ul",[n("li",[s._v("有一块内容"),n("code",[s._v("<main>")]),s._v("，当"),n("code",[s._v("<main>")]),s._v("的高度足够长的时候，紧跟在"),n("code",[s._v("<main>")]),s._v("后面的元素"),n("code",[s._v("<footer>")]),s._v("会跟在"),n("code",[s._v("<main>")]),s._v("元素的后面。")]),s._v(" "),n("li",[s._v("当"),n("code",[s._v("<main>")]),s._v("元素比较短的时候（比如小于屏幕的高度），我们期望这个"),n("code",[s._v("<footer>")]),s._v("元素能够“粘连”在屏幕的底部")])]),s._v(" "),n("p",[n("img",{attrs:{src:"layout09.png",alt:"images"}})]),s._v(" "),n("p",[s._v("具体代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<div id="wrap">\n    <div class="main">\n        main <br/>\n        main <br/>\n        main <br/>\n    </div>\n</div>\n<div id="footer">footer</div>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("*{\n    margin:0;\n    padding:0;\n}\nhtml,\nbody{\n    height:100%;\n}\n#wrap{\n    min-height:100%;\n    background:pink;\n    text-align:center;\n    overflow:hidden;\n}\n#wrap .main{\n    padding-bottom:50px;\n}\n#footer{\n    height:50px;\n    line-height:50px;\n    background:deeppink;\n    text-align:center;\n    margin-top:50px;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h4",{attrs:{id:"_5-2-实现步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-实现步骤","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.2 实现步骤")]),s._v(" "),n("ul",[n("li",[s._v("footer 必须是一个独立的结构，与 wrap 没有任何嵌套关系")]),s._v(" "),n("li",[s._v("wrap 区域的高度通过设置 min-height，变为视口高度")]),s._v(" "),n("li",[s._v("footer 要使用 margin 为负来确定自己的位置")]),s._v(" "),n("li",[s._v("在 main 区域需要调协 padding-bottom。这也为了防止负 margin 导致 footer 覆盖任何实际内容。")])]),s._v(" "),n("h3",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/ljianshu/Blog/issues/40",target:"_blank",rel:"noopener noreferrer"}},[s._v("几种常见的 CSS 布局"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/bPfdwdF1SR9Pt03zNhNebw",target:"_blank",rel:"noopener noreferrer"}},[s._v("面试必考点：前端布局知识"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5ddb7a7c51882573520fb185",target:"_blank",rel:"noopener noreferrer"}},[s._v("「前端进阶」深度解析瀑布流布局"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"联系作者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),n("div",{attrs:{align:"center"}},[n("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),n("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=t.exports}}]);