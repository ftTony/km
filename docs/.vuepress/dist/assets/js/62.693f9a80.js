(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{295:function(a,n,r){"use strict";r.r(n);var s=r(4),e=Object(s.a)({},(function(){var a=this,n=a.$createElement,r=a._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"理解盒模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#理解盒模型","aria-hidden":"true"}},[a._v("#")]),a._v(" 理解盒模型")]),a._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),r("p",[a._v("CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括：边距 margin，边框 border，填充 padding，和实际内容 content。盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。")]),a._v(" "),r("p",[r("img",{attrs:{src:"box03.png",alt:"images"}})]),a._v(" "),r("h2",{attrs:{id:"内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E5%9D%97%E5%AE%B9%E5%99%A8%E7%9B%92"}},[a._v("块容器盒")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E5%9D%97%E7%9B%92"}},[a._v("块盒")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E8%A1%8C%E7%9B%92"}},[a._v("行盒")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E7%9B%92%E5%AD%90%E5%9B%9B%E5%A4%A7%E5%AE%B6%E6%97%8F"}},[a._v("盒子四大家族")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E7%90%86%E8%A7%A3-box-sizing"}},[a._v("理解 box-sizing")])])]),a._v(" "),r("h3",{attrs:{id:"一、块容器盒"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、块容器盒","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、块容器盒")]),a._v(" "),r("p",[a._v("只包含其它块级盒，或生成一个行内格式化上下文(inline formatting context)，只包含行内盒的叫做"),r("strong",[a._v("块容器盒子")]),a._v("。")]),a._v(" "),r("h3",{attrs:{id:"二、块盒"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、块盒","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、块盒")]),a._v(" "),r("p",[a._v("同时是块容器盒的块级盒称为块盒。")]),a._v(" "),r("h3",{attrs:{id:"三、行盒"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、行盒","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、行盒")]),a._v(" "),r("p",[a._v("行盒由行内格式化上下文产生的盒，用于表示一行。在块盒里面，行盒从块盒一边排版到另一边。当有浮动时，行盒从左浮动的最右边排版到右浮动的最左边。")]),a._v(" "),r("h3",{attrs:{id:"四、盒子四大家族"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、盒子四大家族","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、盒子四大家族")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#_4-1-content"}},[a._v("content")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#_4-2-padding"}},[a._v("padding")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#_4-3-margin"}},[a._v("margin")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#_4-4-border"}},[a._v("border")])])]),a._v(" "),r("h4",{attrs:{id:"_4-1-content"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-content","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.1 content")]),a._v(" "),r("p",[a._v("对于非替换元素如"),r("code",[a._v("div")]),a._v("，其"),r("code",[a._v("content")]),a._v("就是 div 内部的元素。而对于替换元素，其"),r("code",[a._v("content")]),a._v("就是可替换部分的内容。")]),a._v(" "),r("p",[a._v("CSS 中的"),r("code",[a._v("content")]),a._v("属性主要用于伪元素"),r("code",[a._v(":before/:after")]),a._v("中，除了做字体库或少写个 div，对于一般开发来说并无卵用。")]),a._v(" "),r("h4",{attrs:{id:"_4-2-padding"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-padding","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.2 padding")]),a._v(" "),r("p",[r("code",[a._v("padding")]),a._v("是四大金刚中最稳定的了，少见有什么异常。尽管如此还是有些需要注意的地方：")]),a._v(" "),r("p",[a._v("4.2.1 大部分情况下我们会将元素重置为"),r("code",[a._v("box-sizing:border-box")]),a._v("，宽高的计算是包含了"),r("code",[a._v("padding")]),a._v("的，给人一种"),r("code",[a._v("padding")]),a._v("也是"),r("code",[a._v("content box")]),a._v("一部分的感觉，好像"),r("code",[a._v("line-height")]),a._v("属性也作用于"),r("code",[a._v("padding")]),a._v("上。但实际上，元素真正的内容的宽高只是"),r("code",[a._v("content box")]),a._v("的宽高，而"),r("code",[a._v("line-height")]),a._v("属性是不作用于"),r("code",[a._v("padding")]),a._v("的。")]),a._v(" "),r("p",[r("img",{attrs:{src:"padding.png",alt:"images"}})]),a._v(" "),r("p",[a._v("4.2.2 "),r("code",[a._v("padding")]),a._v("不可为负值，但是可以为百分比值。为百分比时水平和垂直方向的"),r("code",[a._v("padding")]),a._v("都是相对于父级元素宽度计算的。将一个"),r("code",[a._v("div")]),a._v("设为"),r("code",[a._v("padding:100%")]),a._v("就能得到一个正方形，"),r("code",[a._v("padding:10% 50%")]),a._v("可以得到一个宽高比 5:1 的矩形。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("body {\n  width: 400px;\n}\n.box {\n  padding: 10% 50%;\n}\n\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br")])]),r("p",[r("img",{attrs:{src:"padding01.png",alt:"images"}})]),a._v(" "),r("p",[a._v("4.2.3 "),r("code",[a._v("padding")]),a._v("配合"),r("code",[a._v("background-clip")]),a._v("属性，可以制作一些特殊形状：")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("/*三道杠*/\n.icon1 {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 12px;\n  height: 10px;\n  padding: 2px 0;\n  border-top: 2px solid currentColor;\n  border-bottom: 2px solid currentColor;\n  background: currentColor; /*注意如果此处背景颜色属性用缩写的话，需要放到其他背景属性的前面，否则会覆盖前面的属性值（此处为background-clip）为默认值*/\n  background-clip: content-box;\n}\n/*双层圆点*/\n.icon2 {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  padding: 2px;\n  border: 2px solid currentColor;\n  border-radius: 50%;\n  background-color: currentColor;\n  background-clip: content-box;\n}\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br"),r("span",{staticClass:"line-number"},[a._v("14")]),r("br"),r("span",{staticClass:"line-number"},[a._v("15")]),r("br"),r("span",{staticClass:"line-number"},[a._v("16")]),r("br"),r("span",{staticClass:"line-number"},[a._v("17")]),r("br"),r("span",{staticClass:"line-number"},[a._v("18")]),r("br"),r("span",{staticClass:"line-number"},[a._v("19")]),r("br"),r("span",{staticClass:"line-number"},[a._v("20")]),r("br"),r("span",{staticClass:"line-number"},[a._v("21")]),r("br"),r("span",{staticClass:"line-number"},[a._v("22")]),r("br"),r("span",{staticClass:"line-number"},[a._v("23")]),r("br")])]),r("p",[a._v("预览如下：")]),a._v(" "),r("p",[r("img",{attrs:{src:"padding02.png",alt:"images"}})]),a._v(" "),r("h4",{attrs:{id:"_4-3-margin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-margin","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.3 margin")]),a._v(" "),r("p",[a._v("4.3.1 作为外边距，"),r("code",[a._v("margin")]),a._v("属性并不会参与盒子宽度的计算，但通过设置"),r("code",[a._v("margin")]),a._v("为负值，却能改变元素水平方向的尺寸：")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("<div>asdf</div>\n<style>\n  div {\n    margin: 0 -100px;\n  }\n</style>\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br")])]),r("p",[a._v("此时"),r("code",[a._v("div")]),a._v("元素的宽度是比父级元素的宽度大"),r("code",[a._v("200px")]),a._v("的。但是这种情况咐发生元素是流布局的时候，即元素"),r("code",[a._v("width")]),a._v("是默认的"),r("code",[a._v("auto")]),a._v("并且可以撑满一行的时候。如果元素设定了宽度，或者元素设置了"),r("code",[a._v("float:left")]),a._v("/"),r("code",[a._v("position:absolute")]),a._v("这样的属性改变了流体布局，那么"),r("code",[a._v("margin")]),a._v("为负也无法改变元素的宽度了。")]),a._v(" "),r("p",[a._v("4.3.2 块级元素的垂直方向会发生"),r("code",[a._v("margin")]),a._v("合并，存在以下三种场景：")]),a._v(" "),r("ul",[r("li",[a._v("相邻兄弟元素之间"),r("code",[a._v("margin")]),a._v("合并；")]),a._v(" "),r("li",[a._v("父元素"),r("code",[a._v("margin-top")]),a._v("和子元素"),r("code",[a._v("margin-top")]),a._v("，父元素"),r("code",[a._v("margin-bottom")]),a._v("和子元素"),r("code",[a._v("margin-bottom")]),a._v(";")]),a._v(" "),r("li",[a._v("空块元素自身的"),r("code",[a._v("margin-top")]),a._v("和"),r("code",[a._v("margin-bottom")]),a._v("合并")])]),a._v(" "),r("p",[a._v("要阻止"),r("code",[a._v("margin")]),a._v("合并，可以使用以下方法")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("把元素放到"),r("code",[a._v("bfc")]),a._v("中；")])]),a._v(" "),r("li",[r("p",[a._v("设置"),r("code",[a._v("border")]),a._v("或"),r("code",[a._v("padding")]),a._v("阻隔"),r("code",[a._v("margin")]),a._v(";")])]),a._v(" "),r("li",[r("p",[a._v("用内联元素阻隔；")])]),a._v(" "),r("li",[r("p",[a._v("给父元素设定高度")]),a._v(" "),r("p",[a._v("4.3.3 "),r("code",[a._v("margin")]),a._v("的百分比值跟"),r("code",[a._v("padding")]),a._v("一样，")])])]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('<div class="box">\n  <div></div>\n</div>\n<style>\n  .box{\n    overflow: hidden;\n    background-color: lightblue;\n  }\n  .box > div{\n    margin: 50%;\n  }\n</style>\n')])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br")])]),r("p",[a._v("4.3.4 能在块级元素设定宽高之后自动填充剩余宽高。margin: auto 自动填充触发的前提条件是元素在对应的水平或垂直方向具有自动填充特性，显然默认情况下块级元素的高度是不具备这个条件的。典型应用是块级元素水平局中的实现：")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("display: block;\nwidth: 200px;\nmargin: 0 auto;\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br")])]),r("p",[a._v("auto 的特性是，如果两侧都是 auto，则两侧均分剩余宽度；如果一侧 margin 是固定的，另一侧是 auto，则这一侧 auto 为剩余宽度。栗子：")]),a._v(" "),r("h4",{attrs:{id:"_4-4-border"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-border","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.4 border")]),a._v(" "),r("p",[r("code",[a._v("border")]),a._v("主要作用是做边框。"),r("code",[a._v("border-style")]),a._v("属性的值有"),r("code",[a._v("none/solid/dashed/dotted/double")]),a._v("等，效果如下：")]),a._v(" "),r("p",[r("img",{attrs:{src:"border01.png",alt:"images"}})]),a._v(" "),r("p",[r("code",[a._v("border-width")]),a._v("属性的默认值是"),r("code",[a._v("3px")]),a._v("，值得注意的是，"),r("code",[a._v("border-color")]),a._v("默认是跟随字体的颜色，相当于默认设置了"),r("code",[a._v("border-color: currentColor")]),a._v("一样。")]),a._v(" "),r("p",[r("code",[a._v("border")]),a._v("另一广受欢迎的功能就是图形构建，特别是做应用广泛的三角形，其原理可看下图")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("div{\n    float:left;\n    margin:20px;\n}\ndiv:nth-child(1){\n    width:20px;\n    height:20px;\n    border:20px solid;\n    border-color:blue red orange green;\n}\ndiv:nth-child(2){\n  width: 20px;\n  height: 20px;\n  border: 20px solid;\n  border-color: blue transparent transparent transparent;\n}\ndiv:nth-child(3){\n  border: 20px solid;\n  border-color: blue transparent transparent transparent;\n}\ndiv:nth-child(4){\n  border-style: solid;\n  border-width: 40px 20px;\n  border-color: blue transparent transparent transparent;\n}\ndiv:nth-child(5){\n  border-style: solid;\n  border-width: 40px 20px;\n  border-color: blue red transparent transparent;\n}\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br"),r("span",{staticClass:"line-number"},[a._v("14")]),r("br"),r("span",{staticClass:"line-number"},[a._v("15")]),r("br"),r("span",{staticClass:"line-number"},[a._v("16")]),r("br"),r("span",{staticClass:"line-number"},[a._v("17")]),r("br"),r("span",{staticClass:"line-number"},[a._v("18")]),r("br"),r("span",{staticClass:"line-number"},[a._v("19")]),r("br"),r("span",{staticClass:"line-number"},[a._v("20")]),r("br"),r("span",{staticClass:"line-number"},[a._v("21")]),r("br"),r("span",{staticClass:"line-number"},[a._v("22")]),r("br"),r("span",{staticClass:"line-number"},[a._v("23")]),r("br"),r("span",{staticClass:"line-number"},[a._v("24")]),r("br"),r("span",{staticClass:"line-number"},[a._v("25")]),r("br"),r("span",{staticClass:"line-number"},[a._v("26")]),r("br"),r("span",{staticClass:"line-number"},[a._v("27")]),r("br"),r("span",{staticClass:"line-number"},[a._v("28")]),r("br"),r("span",{staticClass:"line-number"},[a._v("29")]),r("br"),r("span",{staticClass:"line-number"},[a._v("30")]),r("br")])]),r("p",[r("img",{attrs:{src:"border02.png",alt:"images"}})]),a._v(" "),r("p",[a._v("其实就是将其他三个边框的颜色设置透明，并把宽高设为 0。是通过调整边框宽度和颜色调整三角形的形状，把最后一个图的红色改为蓝色，则是一个直角三解开了。")]),a._v(" "),r("h3",{attrs:{id:"五、理解-box-sizing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、理解-box-sizing","aria-hidden":"true"}},[a._v("#")]),a._v(" 五、理解 box-sizing")]),a._v(" "),r("p",[r("img",{attrs:{src:"box02.png",alt:"images"}})]),a._v(" "),r("p",[a._v("box-sizing，顾名思义，其作用与设置 CSS box 的尺寸大小有关，而 CSS box 又可细分为:")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("content-box")]),a._v("(W3C 盒模型，又名标准盒模型)：content area")]),a._v(" "),r("li",[r("code",[a._v("padding-box")]),a._v("(IE 盒模型，又名怪异盒模型)：content area + padding area")]),a._v(" "),r("li",[a._v("border-box(=content area + padding area + border area)")]),a._v(" "),r("li",[a._v("margin-box(=content area + padding area + border area + margin area)")])]),a._v(" "),r("h4",{attrs:{id:"_5-1-box-sizing-应用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-box-sizing-应用场景","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.1 box-sizing 应用场景")]),a._v(" "),r("ul",[r("li",[a._v("border-box 属性在 form 上的使用")])]),a._v(" "),r("p",[a._v("当我们在要做一个登陆页面的时候，这时候就需要表单和按钮这些元素\n首先我们在 div 中设置两个表单，一个用来输入用户名，一个用来输入密码，同时还有一个登录按钮，\n当我们想让这两个表单和一个登录按钮的长度相同时，我们试着把她们三个的 width 的值设置为 100%\n但她们的长度并不一致，表单和按钮的 padding，border 值不统一，这时我们给表单的属性中添加一个 box-sizing：border-box，此时表单和按钮的长度保持一致\n当不给表单添加 box-sizing：border-box 时，而是添加一个 padding 值会发现表单的长度都有所增加\n当给按钮添加 padding 时，她的长度并不会改变，由此可以看出表单默认为 content-box，按钮 submit 默认为 border-box，button 的默认值也为 border-box")]),a._v(" "),r("ul",[r("li",[a._v("border-box 属性在盒子中的使用")])]),a._v(" "),r("p",[a._v("当我们设置一个宽度为 500px 的盒子，在里面放入四个盒子，分别为上(width:100%)，中左(width:60%)，中右(width:40%)，下(width: 100%)，此时在大盒子里面四个盒子排列的很整齐\n这是我们给上盒子设置一个 padding 或者 border 为 5px，这时上盒子的长度就会超出大盒子的宽度，此时我们给上盒子添加 box-sizing：border-box，就可以使他的宽度不超出")]),a._v(" "),r("h3",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),r("ul",[r("li",[a._v("《CSS 世界》")]),a._v(" "),r("li",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/X9i_7BX-32EZlxsYP6MxEg",target:"_blank",rel:"noopener noreferrer"}},[a._v("【第 1234 期】前端布局基础概述"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/chokcoco/iCSS/issues/56",target:"_blank",rel:"noopener noreferrer"}},[a._v("谈谈一些有趣的 CSS 题目（11）-- IFC、BFC、GFC 与 FFC 知多少 "),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/tugenhua0707/p/4161716.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("尖刀出鞘的 display 常用属性及 css 盒模型深入研究"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/tugenhua0707/p/7266165.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("理解 boxsizing"),r("OutboundLink")],1)])]),a._v(" "),r("h2",{attrs:{id:"联系作者"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),r("div",{attrs:{align:"center"}},[r("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),r("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);n.default=e.exports}}]);