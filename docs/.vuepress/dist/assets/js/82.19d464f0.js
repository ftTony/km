(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{323:function(e,s,a){"use strict";a.r(s);var t=a(13),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"移动端适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端适配"}},[e._v("#")]),e._v(" 移动端适配")]),e._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("静态布局")]),e._v("：直接使用 px 作为单位")]),e._v(" "),a("li",[a("strong",[e._v("流式布局")]),e._v("：宽度使用%百分比，高度使用 px 作为单位")]),e._v(" "),a("li",[a("strong",[e._v("自适应布局")]),e._v("：创建多个静态布局，每个静态布局对应一个屏幕分辨率范围。使用 @media 媒体查询来切换多个布局")]),e._v(" "),a("li",[a("strong",[e._v("响应式布局")]),e._v("：通常是糅合了流式布局+弹性布局，再搭配媒体查询技术使用")]),e._v(" "),a("li",[a("strong",[e._v("弹性布局")]),e._v("：通常指的是 rem 或 em 布局。rem 是相对于 html 元素的 font-size 大小而言的，而 em 是相对于其父元素（非 font-size 的是相对于自身的 font-size）")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/zhuzhenwei918/p/7147303.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("布局概念"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[e._v("#")]),e._v(" 内容")]),e._v(" "),a("ul",[a("li",[e._v("基本概念")]),e._v(" "),a("li",[e._v("1px 问题")]),e._v(" "),a("li",[e._v("适配 iPhonX")]),e._v(" "),a("li",[e._v("横屏适配")]),e._v(" "),a("li",[e._v("移动适配")]),e._v(" "),a("li",[e._v("图片模糊问题")])]),e._v(" "),a("h3",{attrs:{id:"一、基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、基本概念"}},[e._v("#")]),e._v(" 一、基本概念")]),e._v(" "),a("ul",[a("li",[e._v("尺寸")]),e._v(" "),a("li",[e._v("分辨率")]),e._v(" "),a("li",[e._v("设备独立像素")]),e._v(" "),a("li",[e._v("视口")])]),e._v(" "),a("h4",{attrs:{id:"_1-1-尺寸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-尺寸"}},[e._v("#")]),e._v(" 1.1 尺寸")]),e._v(" "),a("p",[e._v("参考"),a("a",{attrs:{href:"https://km.xiaowuzi.info/css/px.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("单位与值"),a("OutboundLink")],1)]),e._v(" "),a("h4",{attrs:{id:"_1-2-分辨率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-分辨率"}},[e._v("#")]),e._v(" 1.2 分辨率")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("物理像素(physical pixel)")]),e._v("：物理像素又称为设备像素。每个像素可以根据操作系统设置自己的颜色和亮度。正是这些设备像素的微小距离欺骗了我们肉眼看到的图像效果。")]),e._v(" "),a("li",[a("strong",[e._v("设备独立像素")]),e._v("：设备独立像素也称为密度无关像素，可以认为是计算机坐标系统中的一个点，这个点代表一个可以由程序使用的虚拟像素(比如说 CSS 像素)，然后由相关系统转换为物理像素。 - "),a("strong",[e._v("CSS 像素")]),e._v("：CSS 像素是一个抽像的单位，主要使用在浏览器上，用来精确度量 Web 页面上的内容。一般情况之下，CSS 像素称为与设备无关的像素，简称 DIP。")]),e._v(" "),a("li",[a("strong",[e._v("屏幕密度")]),e._v("：屏幕密度是指一个设备表面上存在的像素数量，它通常以每英寸有多少像素来计算(PPI)。")]),e._v(" "),a("li",[a("strong",[e._v("设备像素比")]),e._v("：设备像素比简称为 dpr，其定义了物理像素和设备独立像素的对应关系。它的值可以按下面的公式计算得到：")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("设备像素比 ＝ 物理像素 / 设备独立像素\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("在 JavaScript 中，可以通过"),a("code",[e._v("window.devicePixelRatio")]),e._v("获取到当前设备的 dpr。")]),e._v(" "),a("p",[e._v("在 css 中，可以通过"),a("code",[e._v("-webkit-device-pixel-ratio")]),e._v("、"),a("code",[e._v("-webkit-min-device-pixel-ratio")]),e._v("和"),a("code",[e._v("-webkit-max-device-pixel-ratio")]),e._v("进行媒体查询，对不同 dpr 的设备，做一些样式适配。或者使用 resolution|min-resolution|max-resolution 比较新的标准方式")]),e._v(" "),a("h4",{attrs:{id:"_1-3-设备独立像素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-设备独立像素"}},[e._v("#")]),e._v(" 1.3 设备独立像素")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("位图像素")]),e._v("：一个位图像素是栅格图像最小的数据单元。每一个位图像素都包含着一些自身的显示信息。")]),e._v(" "),a("li",[a("strong",[e._v("视窗 viewport")]),e._v("：viewport 是严格等于浏览器的窗口。在桌面浏览器中，viewport 就是浏览器窗口的宽度高度。但在移动端设备上就有点复杂。移动端的 viewport 太窄，为了能更好为 CSS 布局服务，所以提供了两个 viewport:虚拟的 visualviewport 和布局的 layoutviewport。")]),e._v(" "),a("li",[a("strong",[e._v("视窗缩放 viewport scale")]),e._v("：可以设置"),a("code",[e._v("meta")]),e._v("标签的 viewport scale 来对视窗的大小进行缩放定义")])]),e._v(" "),a("h4",{attrs:{id:"_1-4-视口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-视口"}},[e._v("#")]),e._v(" 1.4 视口")]),e._v(" "),a("h3",{attrs:{id:"二、1px-问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、1px-问题"}},[e._v("#")]),e._v(" 二、1px 问题")]),e._v(" "),a("h4",{attrs:{id:"_2-1-1px-产生的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1px-产生的原因"}},[e._v("#")]),e._v(" 2.1 1px 产生的原因")]),e._v(" "),a("h4",{attrs:{id:"_2-2-border-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-border-image"}},[e._v("#")]),e._v(" 2.2 border-image")]),e._v(" "),a("p",[e._v("基于"),a("code",[e._v("media")]),e._v("查询判断不同的设备像素比给定不同的"),a("code",[e._v("border-image")]),e._v("：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".border_1px{\n    border-bottom: 1px solid #000;\n}\n@media only screen and (-webkit-min-device-pixel-ratio:2){\n    .border_1px{\n        border-bottom: none;\n        border-width: 0 0 1px 0;\n        border-image: url(../img/1pxline.png) 0 0 2 0 stretch;\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("h4",{attrs:{id:"_2-3-background-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-background-image"}},[e._v("#")]),e._v(" 2.3 background-image")]),e._v(" "),a("p",[e._v("和"),a("code",[e._v("border-image")]),e._v("类似，准备一张符合条件的边框背影图，模拟在背影上。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".border_1px{\n    border-bottom: 1px solid #000;\n}\n@media only screen and (-webkit-min-device-pixel-ratio:2){\n    .border_1px{\n        background: url(../img/1pxline.png) repeat-x left bottom;\n        background-size: 100% 1px;\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h4",{attrs:{id:"_2-4-伪类-transform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-伪类-transform"}},[e._v("#")]),e._v(" 2.4 伪类 + transform")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".border_1px:before{\n    content: '';\n    position: absolute;\n    top: 0;\n    height: 1px;\n    width: 100%;\n    background-color: #000;\n    transform-origin: 50% 0%;\n}\n@media only screen and (-webkit-min-device-pixel-ratio:2){\n    .border_1px:before{\n        transform: scaleY(0.5);\n    }\n}\n@media only screen and (-webkit-min-device-pixel-ratio:3){\n    .border_1px:before{\n        transform: scaleY(0.33);\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br")])]),a("h4",{attrs:{id:"_2-5-svg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-svg"}},[e._v("#")]),e._v(" 2.5 svg")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@svg border_1px {\n  height: 2px;\n  @rect {\n    fill: var(--color, black);\n    width: 100%;\n    height: 50%;\n    }\n  }\n.example { border: 1px solid transparent; border-image: svg(border_1px param(--color #00b1ff)) 2 2 stretch; }\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h4",{attrs:{id:"_2-6-设置-viewport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-设置-viewport"}},[e._v("#")]),e._v(" 2.6 设置 viewport")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const scale = 1 / window.devicePixelRatio;\nconst viewport = document.querySelector('meta[name=\"viewport\"]');\nif (!viewport) {\n    viewport = document.createElement('meta');\n    viewport.setAttribute('name', 'viewport');\n    window.document.head.appendChild(viewport);\n}\nviewport.setAttribute('content', 'width=device-width,user-scalable=no,initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h3",{attrs:{id:"三、适配-iphonx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、适配-iphonx"}},[e._v("#")]),e._v(" 三、适配 iPhonX")]),e._v(" "),a("h4",{attrs:{id:"_3-1-安全区域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-安全区域"}},[e._v("#")]),e._v(" 3.1 安全区域")]),e._v(" "),a("h4",{attrs:{id:"_3-2-viewport-fit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-viewport-fit"}},[e._v("#")]),e._v(" 3.2 viewport-fit")]),e._v(" "),a("h4",{attrs:{id:"_3-3-env、constant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-env、constant"}},[e._v("#")]),e._v(" 3.3 env、constant")]),e._v(" "),a("h3",{attrs:{id:"四、横屏适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、横屏适配"}},[e._v("#")]),e._v(" 四、横屏适配")]),e._v(" "),a("h3",{attrs:{id:"五、移动端适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、移动端适配"}},[e._v("#")]),e._v(" 五、移动端适配")]),e._v(" "),a("h4",{attrs:{id:"_5-1-rem-适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-rem-适配"}},[e._v("#")]),e._v(" 5.1 REM 适配")]),e._v(" "),a("p",[a("code",[e._v("rem")]),e._v("适配的本质是布局等比例的缩放，通过动态设置"),a("code",[e._v("html")]),e._v("的"),a("code",[e._v("font-size")]),e._v("来改变"),a("code",[e._v("rem")]),e._v(" 的大小。")]),e._v(" "),a("p",[a("strong",[e._v("vieport 配置")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<meta name="viewport" content="width=device-width; initial-scale=1; maximum-scale=1; minimum-scale=1; user-scalable=no;">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("上面把"),a("code",[e._v("scale")]),e._v("设置成固定 1 倍的视口的大，也可以根据"),a("code",[e._v("dpr")]),e._v("的值缩放"),a("code",[e._v("viewport")]),e._v("，如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//下面是根据设备dpr设置viewport\n var dpr = window.devicePixelRatio || 1\n var scale = 1 / dpr\n\n viewport.setAttribute("content", "width=device-width" + ",initial-scale=" + scale + ", maximum-scale=" + scale + ", minimum-scale=" + scale + ",user-scalable=no")\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("有几点要注意")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("viewport")]),e._v("标签只对移动端浏览器有效，对"),a("code",[e._v("PC")]),e._v("端浏览器是无效的。")]),e._v(" "),a("li",[e._v("当缩放比例为"),a("code",[e._v("100%")]),e._v("时，"),a("code",[e._v("逻辑像素 = CSS 像素宽度 = 理想视口的宽度 = 布局视口的宽度")]),e._v("。")]),e._v(" "),a("li",[e._v("单独设置"),a("code",[e._v("initial-scale")]),e._v("或"),a("code",[e._v("width")]),e._v("都会有兼容性问题，所以设置布局视口为理想视口的最佳方法是同时设置这个属性。")]),e._v(" "),a("li",[e._v("即使设置了"),a("code",[e._v("user-scalable = no")]),e._v("，在"),a("code",[e._v("Android Chrome")]),e._v("浏览器中也可以强制启用手动缩放。")])]),e._v(" "),a("p",[a("strong",[e._v("设置 rem 基准值")])]),e._v(" "),a("p",[e._v("代码为如下")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(function (doc, win) {\n  var docEl = doc.documentElement\n  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'\n\n  function recalc() {\n    var designWidth = 750\n    var clientWidth = docEl.clientWidth\n    if (!clientWidth || clientWidth > designWidth) return\n    docEl.style.fontSize = (100 * clientWidth / designWidth) + 'px'\n  }\n\n  if (!doc.addEventListener) return\n  win.addEventListener(resizeEvt, recalc, false)\n  doc.addEventListener('DOMContentLoaded', recalc, false)\n})(document, window)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br")])]),a("ul",[a("li",[e._v("将 html 节点的 font-size 设置为页面 clientWidth(布局视口)的 1/100，即："),a("code",[e._v("1rem")]),e._v("=布局视口的"),a("code",[e._v("1/100")])]),e._v(" "),a("li",[e._v("在 iphone6 下："),a("code",[e._v("docEl.clientWidth")]),e._v("=设备独立像素（逻辑像素）= 布局视口宽度 = 理想窗口宽度 = 375。此时："),a("code",[e._v("1rem = 375/10 +px = 37.5px")])])]),e._v(" "),a("p",[e._v("使用"),a("code",[e._v("postcss-pxtorem")]),e._v("将单位转化为 rem")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = {\n  plugins: {\n      'autoprefixer': {\n       browsers: ['Android >= 4.0', 'iOS >= 7']\n   },\n  'postcss-pxtorem': {\n       rootValue: 37.5,\n       propList: ['*', '!font-size'],\n       selectorBlackList: ['van-circle__layer', 'ignore'],\n    }\n  }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("rootValue")]),e._v("是转换"),a("code",[e._v("px")]),e._v("的基准值，参考设备"),a("code",[e._v("iPhone6")]),e._v("，设备宽度"),a("code",[e._v("375px")]),e._v("规则：基准值=当前设备宽度的 1/10")]),e._v(" "),a("li",[e._v("基准值设置代码中，在"),a("code",[e._v("iPhone6")]),e._v("设备设置的"),a("code",[e._v("html")]),e._v(","),a("code",[e._v("font-size")]),e._v("也为"),a("code",[e._v("37.5px")])]),e._v(" "),a("li",[e._v("但是设计稿尺寸"),a("code",[e._v("750px")]),e._v("大小，所以量取设计稿量尺寸的时候需要除以"),a("code",[e._v("2")])])]),e._v(" "),a("p",[a("strong",[e._v("rem 布局的缺点")])]),e._v(" "),a("p",[e._v("在响应式布局中，必须通过 js 来动态控制根元素"),a("code",[e._v("font-size")]),e._v("的大小，也就是说 css 样式和 js 代码有一定的耦合性，且必须将改变 font-size 的代码放在"),a("code",[e._v("css")]),e._v("样式之前。")]),e._v(" "),a("h4",{attrs:{id:"_5-2-vw-布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-vw-布局"}},[e._v("#")]),e._v(" 5.2 VW 布局")]),e._v(" "),a("p",[a("code",[e._v("vw")]),e._v("是基于 Viewport 视窗的长度单位，指的就是浏览器可视化的区域，而这个可视区域是"),a("code",[e._v("window.innerWidth/window.innerHeight")]),e._v("的大小，用图简单的示意如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{\n    loader: 'postcss-loader',\n    options: {\n        plugins: ()=>{\n            require('autoprefixer')({\n                browsers: ['last 5 versions']\n            }),\n            require('postcss-px-to-viewport')({\n                viewportWidth: 375,     // 视口宽度（数字）\n                viewportHeight: 1334,       // 视口高度（数字）\n                unitPrecision: 3,       // 设置的保留小数位数（数字）\n                viewportUnit: 'vw',     // 设置要转换的单位（字符）\n                selectorBlackList: ['.ingore','.hairlines'],    // 不需要进行转换的类名（数组）\n                minPixelValue:1,    // 设置要替换的最小像素值（数字）\n                mediaQuery: false       // 允许在媒体查询中转换px（true/false）\n            })\n        }\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br")])]),a("h4",{attrs:{id:"_5-3-rem-vw-布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-rem-vw-布局"}},[e._v("#")]),e._v(" 5.3 REM+VW 布局")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("vw")]),e._v("和"),a("code",[e._v("rem")]),e._v("适配的本质是等比例缩放，让页面在不同屏幕尺寸下有类似于矢量图片缩放的效果的效果，保证了页面元素之间的尺寸缩放比例和位置。")]),e._v(" "),a("li",[e._v("给元素大小设置随着视口变化而变化的 vw 单位，这样就可以实现动态改变其大小。")]),e._v(" "),a("li",[e._v("限制根元素字体大小的最大最小值，配合 body 加上最大宽度和最小宽度。")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// rem 单位换算：定为 75px\n$vm_fontsize:75;        // iPhone 6尺寸的根元素大小基准值\n@function rem($px){\n    @return ($px/$vm_fontsize)*1rem;\n}\n// 根元素大小使用vm单位\n$vm_design:750;\nhtml{\n    font-size:($vm_fontsize/($vm_design/2))*100vw;\n    // 同时，通过Media Queries 限制根元素最大最小\n    @media screen and (max-width:320px){\n        font-size:64px;\n    }\n    @media screen and (min-width:540px){\n        font-size: 108px;\n    }\n}\n// body 也增加最大最小宽度限制，避免默认100%宽度的block元素跟随body而过大过小\nbody{\n    max-width:540px;\n    min-width:320px;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br")])]),a("h4",{attrs:{id:"_5-4-flexible-适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-flexible-适配"}},[e._v("#")]),e._v(" 5.4 flexible 适配")]),e._v(" "),a("h3",{attrs:{id:"六、图片模糊问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、图片模糊问题"}},[e._v("#")]),e._v(" 六、图片模糊问题")]),e._v(" "),a("h4",{attrs:{id:"_6-1-产生原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-产生原因"}},[e._v("#")]),e._v(" 6.1 产生原因")]),e._v(" "),a("p",[e._v("我们平时使用的图片大多数都是属于位图（"),a("code",[e._v("png、jpg...")]),e._v("），位图帖一个个像素点构成的，每个像素都具有特定的位置和颜色值：")]),e._v(" "),a("h4",{attrs:{id:"_6-2-解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-解决方案"}},[e._v("#")]),e._v(" 6.2 解决方案")]),e._v(" "),a("p",[e._v("为了保证图片质量，我们应该尽可能让一个屏幕像素来渲染一个图片像素，所以，针对不同"),a("code",[e._v("DPR")]),e._v("的屏幕，我们需要展示不同分辨的图片。")]),e._v(" "),a("h4",{attrs:{id:"_6-3-media-查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-media-查询"}},[e._v("#")]),e._v(" 6.3 media 查询")]),e._v(" "),a("h4",{attrs:{id:"_6-4-image-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-image-set"}},[e._v("#")]),e._v(" 6.4 image-set")]),e._v(" "),a("h4",{attrs:{id:"_6-5-srcset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-srcset"}},[e._v("#")]),e._v(" 6.5 srcset")]),e._v(" "),a("h4",{attrs:{id:"_6-6-javascript-拼接图片-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-javascript-拼接图片-url"}},[e._v("#")]),e._v(" 6.6 JavaScript 拼接图片 url")]),e._v(" "),a("h4",{attrs:{id:"_6-7-使用-svg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-7-使用-svg"}},[e._v("#")]),e._v(" 6.7 使用 svg")]),e._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/Z4sxXGxMqdqtPTcNyvRRLA",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端自适应布局你需要知道的所有事"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ljianshu/Blog/issues/38",target:"_blank",rel:"noopener noreferrer"}},[e._v("响应式布局"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/amfe/article/issues/17",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 Flexible 实现手淘 H5 页面的终端适配"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://caibaojian.com/flexible-js.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("flexible.js 布局详解"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5cf0d8fb6fb9a07ee9585681",target:"_blank",rel:"noopener noreferrer"}},[e._v("用 vw、vh ＋媒体查询打造最完美的移动端适配方案"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5caaa230e51d452b672f9703",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端响应式布局原理与方案（详细版）"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5df59139518825123e7af459",target:"_blank",rel:"noopener noreferrer"}},[e._v("吃透移动端 H5 响应式布局 ｜深入原理到目前最佳实践方案"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5e36c4fce51d450268661344",target:"_blank",rel:"noopener noreferrer"}},[e._v("移动端适配 - 基础知识篇"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/109781992",target:"_blank",rel:"noopener noreferrer"}},[e._v("设计体系的响应式设计"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5cddf289f265da038f77696c",target:"_blank",rel:"noopener noreferrer"}},[e._v("关于移动端适配，你必须要知道的"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/aaXgFw4isWq1RrHkv75zLA",target:"_blank",rel:"noopener noreferrer"}},[e._v("彻底搞懂移动 Web 开发中的 viewport 与跨屏适配"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/onepixel/p/12144364.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入浅出 Viewport 设计原理"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/-N6EVSye4n78h5wLTo65OQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端基础知识概述 -- 移动端开发的屏幕、图像、字体与布局的兼容适配"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5e6caf55e51d4526ff026a71",target:"_blank",rel:"noopener noreferrer"}},[e._v("面试官：你了解过移动端适配吗？"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/ijLhb5WJwp9q0Ni6IhCIiQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("大厂是怎么做移动端适配的"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/imwtr/p/9648233.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("细说移动端 经典的 REM 布局 与 新秀 VW 布局"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[e._v("#")]),e._v(" 联系作者")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("p",[e._v("\n        平凡世界，贵在坚持。\n    ")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=n.exports}}]);