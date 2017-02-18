(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{347:function(t,a,n){"use strict";n.r(a);var r=n(4),i=Object(r.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"过渡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#过渡","aria-hidden":"true"}},[t._v("#")]),t._v(" 过渡")]),t._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[t._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),t._v(" "),n("h2",{attrs:{id:"内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E4%B8%80%E3%80%81-transition-%E4%BB%8B%E7%BB%8D"}},[t._v("transition 介绍")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%8C%E3%80%81property"}},[t._v("property")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E4%B8%89%E3%80%81duration"}},[t._v("duration")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E5%9B%9B%E3%80%81timing-function"}},[t._v("timing-function")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%94%E3%80%81delay"}},[t._v("delay")])])]),t._v(" "),n("h3",{attrs:{id:"一、-transition-介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、-transition-介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、 transition 介绍")]),t._v(" "),n("p",[n("strong",[t._v("含义")]),t._v("：在 CSS3 中，Transitions 功能通过将元素的某个属性从一个属性值在指定的时间内平滑过渡到另一个属性值来实现动画功能。")]),t._v(" "),n("p",[n("strong",[t._v("语法")]),t._v("：transition:property | duration | timing-function | delay")]),t._v(" "),n("ul",[n("li",[t._v("property：表示对那个属性进行平滑过渡。")]),t._v(" "),n("li",[t._v("duration：表示在多长时间内完成属性值的平滑过渡。")]),t._v(" "),n("li",[t._v("timing-function：表示通过什么方法来进行平滑过渡。")]),t._v(" "),n("li",[t._v("delay：表示通过什么方法进行平滑过渡。")])]),t._v(" "),n("h4",{attrs:{id:"例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子","aria-hidden":"true"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),n("p",[t._v("HTML 代码如下：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<div class="transitions">transition过渡功能</div>\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("CSS 代码如下：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(".transitions {\n    -webkit-transition-property: background-color;\n    -webkit-transition-duration: 1s;\n    -webkit-transition-timing-function: linear;\n    -moz-transition-property: background-color;\n    -moz-transition-duration: 1s;\n    -moz-transition-timing-function: linear;\n\n    -o-transition-property: background-color;\n    -o-transition-duration: 1s;\n    -o-transition-timing-function: linear;\n}\n.transitions:hover {\n　　background-color: #00ffff;\n}\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])]),n("h3",{attrs:{id:"二、property"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、property","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、property")]),t._v(" "),n("p",[n("code",[t._v("transition-property")]),t._v("指定应用过渡属性的名称。其主要有以下几个值：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("none")]),t._v("：没有属性改变；")]),t._v(" "),n("li",[n("code",[t._v("all")]),t._v("：所有属性改变（默认值）；")]),t._v(" "),n("li",[n("code",[t._v("indent")]),t._v("：元素属性名；")])]),t._v(" "),n("p",[t._v("当其值为 none 时，transition 马上停止执行，当指定为 all 时，则元素产生任何属性值变化时都将执行 transition 效果，ident 是可以指定元素的某一个属性值。")]),t._v(" "),n("h4",{attrs:{id:"_2-1-例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-例子","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1 例子")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("transition-property: none;\ntransition-property: all;\ntransition-property: test_05;\ntransition-property: -specific;\ntransition-property: sliding-vertically;\n\ntransition-property: test1;\ntransition-property: test1, animation4;\ntransition-property: all, height, all;\ntransition-property: all, -moz-specific, sliding;\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("h3",{attrs:{id:"三、duration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、duration","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、duration")]),t._v(" "),n("p",[n("code",[t._v("transition-duration")]),t._v("属性以秒或毫秒为单位指定过渡动画所需的时间。")]),t._v(" "),n("h4",{attrs:{id:"_3-1-例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-例子","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.1 例子")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("transition-duration:6s;\ntransition-duration:120ms;\ntransition-duration:1s 15s;\ntransition-duration:10s,30s,230ms;\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("h3",{attrs:{id:"四、timing-function"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、timing-function","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、timing-function")]),t._v(" "),n("p",[n("code",[t._v("transition-timing-function")]),t._v(" 的值允许你根据时间的推进去改变属性值的变换速率，"),n("code",[t._v("transition-timing-function")]),t._v(" 有 6 个可能值：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("ease")]),t._v("：逐渐变慢（默认值），ease 函数等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0).")]),t._v(" "),n("li",[n("code",[t._v("linear")]),t._v("：匀速，linear 函数等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0).")]),t._v(" "),n("li",[n("code",[t._v("ease-in")]),t._v("：加速，ease-in 函数等同于贝塞尔曲线(0.42, 0, 1.0, 1.0).")]),t._v(" "),n("li",[n("code",[t._v("ease-out")]),t._v("：减速，ease-out 函数等同于贝塞尔曲线(0, 0, 0.58, 1.0).")]),t._v(" "),n("li",[n("code",[t._v("ease-in-out")]),t._v("：加速然后减速，ease-in-out 函数等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)")]),t._v(" "),n("li",[n("code",[t._v("cubic-bezier")]),t._v("：该值允许你去自定义一个时间曲线，可能的值是 0 至 1 之间的数值。")])]),t._v(" "),n("h3",{attrs:{id:"五、delay"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、delay","aria-hidden":"true"}},[t._v("#")]),t._v(" 五、delay")]),t._v(" "),n("p",[n("code",[t._v("transition-delay")]),t._v("是用来指定一个动画开始执行的时间，也就是说当改变元素属性值后多长时间开始执行"),n("code",[t._v("transition")]),t._v("效果，其取值："),n("code",[t._v("<time>")]),t._v('为数值，单位为 s（秒）或者 ms(毫秒)，其使用和 transition-duration 极其相似，也可以作用于所有元素，包括:before 和:after 伪元素。 默认大小是"0"，也就是变换立即执行，没有延迟。')]),t._v(" "),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/tugenhua0707/p/4306760.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("css3 动画功能介绍"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/qianduanjingying/p/4937574.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("css3 中的变形（transform）、过渡(transtion)、动画(animation)"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"联系作者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[t._v("#")]),t._v(" 联系作者")]),t._v(" "),n("div",{attrs:{align:"center"}},[n("p",[t._v("\n        平凡世界，贵在坚持。\n    ")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=i.exports}}]);