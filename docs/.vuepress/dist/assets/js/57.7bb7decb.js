(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{332:function(a,e,t){"use strict";t.r(e);var n=t(4),r=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"动画-animations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动画-animations","aria-hidden":"true"}},[a._v("#")]),a._v(" 动画(Animations)")]),a._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),a._v(" "),t("h2",{attrs:{id:"内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E4%B8%80%E3%80%81animations-%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D"}},[a._v("Animations 功能介绍")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%8C%E3%80%81name"}},[a._v("name")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%89%E3%80%81duration"}},[a._v("duration")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%9B%9B%E3%80%81timeing-function"}},[a._v("timeing-function")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%94%E3%80%81delay"}},[a._v("delay")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%85%AD%E3%80%81iterations-count"}},[a._v("iterations-count")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%83%E3%80%81direction"}},[a._v("direction")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%85%AB%E3%80%81play-state"}},[a._v("play-state")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B9%9D%E3%80%81fill-mode"}},[a._v("fill-mode")])])]),a._v(" "),t("h3",{attrs:{id:"一、animations-功能介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、animations-功能介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、Animations 功能介绍")]),a._v(" "),t("p",[a._v("Animations 功能与 Transitions 功能相同，都是通过改变元素的属性值来实现动画效果的，它们的区别在于：使用 Transitions 功能是只能通过指定属性开始值与结束值。然后在这两个属性值之间进行平滑过渡的方式来实现动画效果，因此不能实现复杂的动画效果；而 Animations 则通过定义多个关键帧以及定义每个关键帧中元素的属性值来实现更为复杂的动画效果。")]),a._v(" "),t("p",[t("strong",[a._v("语法：")]),a._v(" animations:name duration timing-function delay iterations-count direction play-state fill-mode;")]),a._v(" "),t("ul",[t("li",[a._v("name：定义使用的动画名称，需要和@keyframes 声明的动画名称一致")]),a._v(" "),t("li",[a._v("duration：用来指定元素播放动画所持续的时间长")]),a._v(" "),t("li",[a._v("timeing-function：动画的播放方式")]),a._v(" "),t("li",[a._v("delay：指定元素动画开始播放的时间")]),a._v(" "),t("li",[a._v("iterations-count：指定元素播放的循环次数")]),a._v(" "),t("li",[a._v("direction：指定元素动画播放的方向，包括单向循环和双向循环")]),a._v(" "),t("li",[a._v("play-state：用来控制元素动画的播放状态")]),a._v(" "),t("li",[a._v("fill-mode：动画结束之后，关键帧是否保留在结束状态的值")])]),a._v(" "),t("h4",{attrs:{id:"例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子","aria-hidden":"true"}},[a._v("#")]),a._v(" 例子")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@-webkit-keyframes mycolor {\n   0% {background-color:red;}\n   40% {background-color:darkblue;}\n   70% {background-color: yellow;}\n   100% {background-color:red;}\n}\n.animate:hover {\n   -webkit-animation-name: mycolor;\n   -webkit-animation-duration: 5s;\n   -webkit-animation-timing-function:linear;\n}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("h3",{attrs:{id:"二、name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、name","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、name")]),a._v(" "),t("h4",{attrs:{id:"_2-1-语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-语法","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.1 语法")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("animation-name: none | IDENT[,none | IDENT]*;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_2-2-取值说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-取值说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.2 取值说明")]),a._v(" "),t("p",[t("code",[a._v("animation-name")]),a._v("定义使用的动画名称，其主要有两个值：IDENT 是由 "),t("code",[a._v("@Keyframes")]),a._v(" 创建的动画名，换句话说此处的 IDENT 要和 "),t("code",[a._v("@Keyframes")]),a._v(" 中的 IDENT 一致，如果不一致，将不能实现任何动画效果；none 为默认值，当值为 none 时，将没有任何动画效果。")]),a._v(" "),t("h4",{attrs:{id:"_2-3-keyframes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-keyframes","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.3 @Keyframes")]),a._v(" "),t("p",[t("code",[a._v("@keyframes")]),a._v(" 规则通过在动画序列中定义关键帧（或 waypoints）的样式来控制 CSS 动画序列中的中间步骤。这比"),t("code",[a._v("transition")]),a._v("更能控制动画序列的中间步骤。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@keyframes slidein {\n  from {\n    margin-left: 100%;\n    width: 300%;\n  }\n\n  to {\n    margin-left: 0%;\n    width: 100%;\n  }\n}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("h3",{attrs:{id:"三、duration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、duration","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、duration")]),a._v(" "),t("h4",{attrs:{id:"_3-1-语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-语法","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.1 语法")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("animation-duration: <time>[,<time>]*\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_3-2-取值说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-取值说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.2 取值说明")]),a._v(" "),t("p",[t("code",[a._v("animation-duration")]),a._v("是用来指定元素播放动画所持续的时间长，取值:"),t("time",[a._v("为数值，单位为 s（秒）其默认值为“0”。")])]),a._v(" "),t("h3",{attrs:{id:"四、timeing-function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、timeing-function","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、timeing-function")]),a._v(" "),t("p",[t("code",[a._v("animation-timing-function")]),a._v("属性定义 CSS 动画在每一动画周期中执行的节奏。")]),a._v(" "),t("h4",{attrs:{id:"_4-1-语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-语法","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.1 语法")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("animation-timing-function:ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>) [, ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>)]*\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_4-2-取值说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-取值说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.2 取值说明")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("ease")]),a._v("：逐渐变慢（默认值），ease 函数等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0).")]),a._v(" "),t("li",[t("code",[a._v("linear")]),a._v("：匀速，linear 函数等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0).")]),a._v(" "),t("li",[t("code",[a._v("ease-in")]),a._v("：加速，ease-in 函数等同于贝塞尔曲线(0.42, 0, 1.0, 1.0).")]),a._v(" "),t("li",[t("code",[a._v("ease-out")]),a._v("：减速，ease-out 函数等同于贝塞尔曲线(0, 0, 0.58, 1.0).")]),a._v(" "),t("li",[t("code",[a._v("ease-in-out")]),a._v("：加速然后减速，ease-in-out 函数等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)")]),a._v(" "),t("li",[t("code",[a._v("cubic-bezier")]),a._v("：该值允许你去自定义一个时间曲线，可能的值是 0 至 1 之间的数值。")])]),a._v(" "),t("h3",{attrs:{id:"五、delay"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、delay","aria-hidden":"true"}},[a._v("#")]),a._v(" 五、delay")]),a._v(" "),t("p",[t("code",[a._v("animation-delay")]),a._v(":属性定义动画于何时开始，即从动画应用在元素上到动画开始的这段时间的长度。")]),a._v(" "),t("h4",{attrs:{id:"_5-1-语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-语法","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.1 语法")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("animation-delay: <time>[,<time>]*\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_5-2-取值说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-取值说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.2 取值说明")]),a._v(" "),t("p",[a._v("取值为"),t("code",[a._v("<time>")]),a._v("为数值，单位为 s(秒)，其默认值也是 0。这个属性和 "),t("code",[a._v("transition-delay")]),a._v(" 使用方法是一样的。")]),a._v(" "),t("h3",{attrs:{id:"六、iterations-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、iterations-count","aria-hidden":"true"}},[a._v("#")]),a._v(" 六、iterations-count")]),a._v(" "),t("p",[t("code",[a._v("animation-iteration-count")]),a._v("是用来指定元素播放动画的循环次数。")]),a._v(" "),t("h4",{attrs:{id:"_6-1-语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-语法","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.1 语法")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" animation-iteration-count:infinite | <number> [, infinite | <number>]*\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_6-2-取值说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-取值说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.2 取值说明")]),a._v(" "),t("p",[a._v("其可以取值"),t("code",[a._v("<number>")]),a._v("为数字，其默认值为“1”；"),t("code",[a._v("infinite")]),a._v("为无限次数循环。")]),a._v(" "),t("h3",{attrs:{id:"七、direction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、direction","aria-hidden":"true"}},[a._v("#")]),a._v(" 七、direction")]),a._v(" "),t("p",[t("code",[a._v("animation-direction")]),a._v("是用来指定元素动画播放的方向")]),a._v(" "),t("h4",{attrs:{id:"_7-1-语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-语法","aria-hidden":"true"}},[a._v("#")]),a._v(" 7.1 语法")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("animation-direction: normal | alternate [, normal | alternate]*\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_7-2-取值说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-取值说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 7.2 取值说明")]),a._v(" "),t("p",[a._v("其只有两个值，默认值为"),t("code",[a._v("normal")]),a._v("，如果设置为"),t("code",[a._v("normal")]),a._v("时，动画的每次循环都是向前播放；另一个值是"),t("code",[a._v("alternate")]),a._v("，他的作用是，动画播放在第偶数次向前播放，第奇数次向反方向播放。")]),a._v(" "),t("h3",{attrs:{id:"八、play-state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、play-state","aria-hidden":"true"}},[a._v("#")]),a._v(" 八、play-state")]),a._v(" "),t("p",[t("code",[a._v("animation-play-state")]),a._v("主要是用来控制元素动画的播放状态。")]),a._v(" "),t("h4",{attrs:{id:"_8-1-语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-语法","aria-hidden":"true"}},[a._v("#")]),a._v(" 8.1 语法")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("animation-play-state:running | paused [, running | paused]*\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_8-2-取值说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-取值说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 8.2 取值说明")]),a._v(" "),t("p",[a._v("其主要有两个值，running 和 paused 其中 running 为默认值。他们的作用就类似于我们的音乐播放器一样，可以通过 paused 将正在播放的动画停下了，也可以通过 running 将暂停的动画重新播放，我们这里的重新播放不一定是从元素动画的开始播放，而是从你暂停的那个位置开始播放。另外如果暂时了动画的播放，元素的样式将回到最原始设置状态。")]),a._v(" "),t("h3",{attrs:{id:"九、fill-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#九、fill-mode","aria-hidden":"true"}},[a._v("#")]),a._v(" 九、fill-mode")]),a._v(" "),t("p",[t("code",[a._v("animation-fill-mode")]),a._v("设置 CSS 动画在执行之前和之后如何将样式应用于其目标。")]),a._v(" "),t("h4",{attrs:{id:"_9-1-语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-语法","aria-hidden":"true"}},[a._v("#")]),a._v(" 9.1 语法")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("animation-fill-mode:none | backwards | both\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"_9-2-取值说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-取值说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 9.2 取值说明")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("none")]),a._v("：当动画未执行时，动画将不会将任何样式应用于目标，而是已经赋予给该元素的 CSS 规则来显示该元素。")]),a._v(" "),t("li",[t("code",[a._v("forwards")]),a._v("：目标将保留由执行期间遇到的最后一个关键帧计算值。")]),a._v(" "),t("li",[t("code",[a._v("backwards")]),a._v("：动画将在应用于目标时立即应用第一个关键帧中定义的值，并在"),t("code",[a._v("animation-delay")]),a._v("期间保留此值。")]),a._v(" "),t("li",[t("code",[a._v("both")]),a._v("：动画将遵循 "),t("code",[a._v("forwards")]),a._v(" 和 "),t("code",[a._v("backwards")]),a._v(" 的规则，从而在两个方向上扩展动画属性。")])]),a._v(" "),t("h3",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/qianduanjingying/p/4937574.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("css3 中的变形（transform）、过渡(transtion)、动画(animation)"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/tugenhua0707/p/5385261.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("css3 动画由浅入深总结"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5cdd178ee51d456e811d279b",target:"_blank",rel:"noopener noreferrer"}},[a._v("2019 年了，你还不会 CSS 动画？"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"联系作者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);e.default=r.exports}}]);