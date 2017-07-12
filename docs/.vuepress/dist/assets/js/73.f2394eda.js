(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{290:function(a,s,e){"use strict";e.r(s);var t=e(4),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"移动端-h5-页面开发坑点指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动端-h5-页面开发坑点指南","aria-hidden":"true"}},[a._v("#")]),a._v(" 移动端 H5 页面开发坑点指南")]),a._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("p",[a._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),a._v(" "),e("h2",{attrs:{id:"内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),e("h4",{attrs:{id:"_1-点击样式闪动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-点击样式闪动","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 点击样式闪动")]),a._v(" "),e("p",[a._v("Q：当你点击一个链接或者通过 JavaScript 定义的可点击元素的时候，它就会出现一个半透明的灰色背景。")]),a._v(" "),e("p",[a._v("A：根本原因是"),e("code",[a._v("-webkit-tap-highlight-color")]),a._v("，这个属性是用于设定元素在移动设备（如 Adnroid、IOS）上被触发点击事件时，响应的背景框的颜色。建议写在样式初始化中以避免所以问题：div,input(selector){-webkit-tap-highlight-color:rgba(0,0,0,0);}另外出现蓝色边框：outline:none;")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("-webkit-tap-highlight-color:rgba(255,255,255,0);\n// i.e . Nexus5/Chrome and Kindle Fire HD 7 ''\n-webkit-tap-highlight-color : transparent ;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h4",{attrs:{id:"_2-屏蔽用户选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-屏蔽用户选择","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 屏蔽用户选择")]),a._v(" "),e("p",[a._v("代码如下")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("-webkit-touh-callout:none;\n-webkit-user-select:none;\n-khtml-user-select:none;\n-moz-user-select:none;\n-ms-user-select:none;\nuser-select:none;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h4",{attrs:{id:"_3-移动端如何清除输入框内阴影"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-移动端如何清除输入框内阴影","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 移动端如何清除输入框内阴影")]),a._v(" "),e("p",[a._v("Q：在 IOS 上，输入框默认有内陪阴影，但无法使用 box-shadow 来清除，如果不需要阴影，可以这样关闭：\nA：代码如下")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("-webkit-appearance:none;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"_4-禁止文本缩放"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-禁止文本缩放","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. 禁止文本缩放")]),a._v(" "),e("p",[a._v("代码如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("-webkit-text-size-adjust:100%;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"_5-如何禁止保存或拷贝图像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-如何禁止保存或拷贝图像","aria-hidden":"true"}},[a._v("#")]),a._v(" 5. 如何禁止保存或拷贝图像")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("img{\n    -webkit-touch-callout:none;\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h4",{attrs:{id:"_6-解决字体在移动端比例缩小后出现锯齿的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-解决字体在移动端比例缩小后出现锯齿的问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 6. 解决字体在移动端比例缩小后出现锯齿的问题")]),a._v(" "),e("p",[a._v("代码如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("-webkit-font-smoothing:antialiased;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"_7-设置-input-里面-placeholder-字体大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-设置-input-里面-placeholder-字体大小","aria-hidden":"true"}},[a._v("#")]),a._v(" 7. 设置 input 里面 placeholder 字体大小")]),a._v(" "),e("p",[a._v("代码如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("-webkit-input-placeholder{font-size:10pt;}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"_8-audio-元素和-video-元素在-ios-和-andriod-中无法自动播放"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-audio-元素和-video-元素在-ios-和-andriod-中无法自动播放","aria-hidden":"true"}},[a._v("#")]),a._v(" 8. audio 元素和 video 元素在 ios 和 andriod 中无法自动播放")]),a._v(" "),e("p",[a._v("代码如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$('html').one('touchstart',function(){\naudio.play()\n})\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h4",{attrs:{id:"_9-手机拍照和上传图片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-手机拍照和上传图片","aria-hidden":"true"}},[a._v("#")]),a._v(" 9. 手机拍照和上传图片")]),a._v(" "),e("p",[a._v("代码如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<input type="file">的accept 属性\n\x3c!-- 选择照片 --\x3e\n<input type=file accept="image/*">\n\x3c!-- 选择视频 --\x3e\n<input type=file accept="video/*">\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h4",{attrs:{id:"_10-输入框自动填充颜色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-输入框自动填充颜色","aria-hidden":"true"}},[a._v("#")]),a._v(" 10. 输入框自动填充颜色")]),a._v(" "),e("p",[a._v("Q：针对 input 标签已经输入过的，会针对曾经输入的内容填充黄色背景，这是 webkit 内核自动添加的，对应的属性是 autocomplete，默认是 on，另对应的样式是 input:-webkit-autofill 且是不可更改的。")]),a._v(" "),e("p",[a._v('A：方案如下 1 设置标签 autocomplete="off"，亲测无效可能 2 调置盒子的内阴影为你常态的颜色，代码如下：')]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" box-shadow:0 0  0 1000px  #fff inset ;\n -webkit-box-shadow: 0 0 0px 1000px #fff inset;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h4",{attrs:{id:"_11-开启硬件加速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-开启硬件加速","aria-hidden":"true"}},[a._v("#")]),a._v(" 11. 开启硬件加速")]),a._v(" "),e("p",[a._v("Q：优化渲染性能")]),a._v(" "),e("p",[a._v("代码如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("-webkit-transform:translate3d(0,0,0);\n-moz-transform:translate3d(0,0,0);\n-ms-transform:translate3d(0,0,0);\ntransform:translate3d(0,0,0);\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h4",{attrs:{id:"_12-用户设置字号放大或者缩小导致页面布局错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-用户设置字号放大或者缩小导致页面布局错误","aria-hidden":"true"}},[a._v("#")]),a._v(" 12. 用户设置字号放大或者缩小导致页面布局错误")]),a._v(" "),e("p",[a._v("代码如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("body{\n    -webkit-text-size-adjust:100% !import;\n    text-size-adjust:100% !import;\n    -moz-text-size-adjust:100% !import;\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h4",{attrs:{id:"_13-移动端去除-type-为-number-的箭头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-移动端去除-type-为-number-的箭头","aria-hidden":"true"}},[a._v("#")]),a._v(" 13. 移动端去除 type 为 number 的箭头")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{\n    -webkit-appearance:none !impotant;\n    margin:0;\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h4",{attrs:{id:"_14-实现横屏竖屏的方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-实现横屏竖屏的方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 14. 实现横屏竖屏的方案")]),a._v(" "),e("ul",[e("li",[a._v("css 用 css3 媒体查询，缺点是宽度和高度不好控制")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("@media screen and (orientation:portrait){\n    .main{\n        -webkit-transform:rotate(-90deg);\n        -moz-transform:rotate(-90deg);\n        -ms-transform:rotate(-90deg);\n        transform:rotate(-90deg);\n        width:100vh;\n        height:100vh;\n        /*去掉overflow微信显示正常，但是浏览器有总是，竖屏时强制横屏缩小*/\n        overflow:hidden;\n    }\n}\n\n@media screen and (orientation:landscape){\n    .main{\n        -webkit-transform:rotate(0);\n        -moz-transform:rotate(0);\n        -ms-transform:rotate(0);\n        transform:rotate(0);\n    }\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br")])]),e("ul",[e("li",[a._v("js 判断屏幕的方向或者 resize 事件")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var evt = \"onorientationchange\" in window ? \"orientationchange\":\"resize\";\nwindow.addEventListener(evt,function(){\n    var width = document.documentElement.clientWidth;\n    var height = document.documentElement.clientHeight;\n    $print = $('#print');\n    if(width>height){\n        $print.width(width);\n        $print.width(height);\n        $print.css('top',0);\n        $print.css('left',0);\n        $print.css('transform','none');\n        $print.css('transform','50% 50%');\n    }else{\n            $print.width(height);\n            $print.height(width);\n            $print.css('top',  (height-width)/2 );\n            $print.css('left',  0-(height-width)/2 );\n            $print.css('transform' , 'rotate(90deg)');\n            $print.css('transform-origin' , '50% 50%');\n    }\n},false);\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br")])]),e("h4",{attrs:{id:"_15-canvas-在-retina-屏模糊"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_15-canvas-在-retina-屏模糊","aria-hidden":"true"}},[a._v("#")]),a._v(" 15. canvas 在 retina 屏模糊")]),a._v(" "),e("p",[a._v("只需要将画笔根据像素比缩放即可")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("run(canvasEl){\n    const canvas = canvasEl;\n    const ctx = canvas.getContext('2d');\n    const devicePixelRatio = window.devicePixelRatio || 1;\n    const backingStorePixedRation = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixedRation || ctx.msBackingStorePixelRatio ||\n    ctx.oBackingStorePixelRatio ||\n    ctx.backingStorePixelRatio || 1;\n\n    const ratio = devicePixelRatio / backingStorePixelRatio;\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br")])]),e("h4",{attrs:{id:"_16-用同等比例的图片在-pc-机上很清楚-但是手机上很模糊-原因是什么呢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-用同等比例的图片在-pc-机上很清楚-但是手机上很模糊-原因是什么呢","aria-hidden":"true"}},[a._v("#")]),a._v(" 16. 用同等比例的图片在 PC 机上很清楚,但是手机上很模糊,原因是什么呢?")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"_17-启动或禁用自动识别页面中的电话号码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_17-启动或禁用自动识别页面中的电话号码","aria-hidden":"true"}},[a._v("#")]),a._v(" 17. 启动或禁用自动识别页面中的电话号码;")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<meta name="format-detection" content="telephone=no">\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"_18-h5-网站-input-设置为-type-number-的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_18-h5-网站-input-设置为-type-number-的问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 18. h5 网站 input 设置为 type=number 的问题")]),a._v(" "),e("p",[a._v("Q1：maxlength 属性不好用")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<input type="number" oninput="checkTextLength(this,10)">\n<script type="text/javascript">\n<\/script>\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("Q2：form 提交的时候默认取整")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("Q3：部分安卓手机出现样式问题")]),a._v(" "),e("p",[a._v("去除 input 默认样式的方法：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("input,textarea{\n    border:0;\n   -webkit-appearance:none; //可同时屏蔽输入框怪异的内阴影，解决IOS下无法修改按钮样式，测试还发现，加了此属性后,iOS下默认还是有圆角的,不过可以用border-radius属性修改\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h4",{attrs:{id:"_19-select-下拉选择设置问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_19-select-下拉选择设置问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 19. select 下拉选择设置问题")]),a._v(" "),e("p",[a._v("问题 1：右对齐实现")]),a._v(" "),e("p",[a._v("设置如下属性")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("select option{\n    direction: rtl;\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("问题 2：禁用 select 默认箭头")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("::-ms-expand修改表单控件下拉箭头,设置隐藏并使用背景图片来修饰\n\nselect::-ms-expand { display:none; }\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h4",{attrs:{id:"_21-css-动画页面闪白-动画卡顿-图片错乱的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_21-css-动画页面闪白-动画卡顿-图片错乱的问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 21. CSS 动画页面闪白,动画卡顿,图片错乱的问题")]),a._v(" "),e("blockquote",[e("p",[a._v("尽可能地使用合成属性 transform 和 opacity 来设计 CSS3 动画,不使用 position 的 left 和 top 来定位")])]),a._v(" "),e("h4",{attrs:{id:"_22-html5-碰到上下拉动滚动条时卡顿-慢怎么解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_22-html5-碰到上下拉动滚动条时卡顿-慢怎么解决","aria-hidden":"true"}},[a._v("#")]),a._v(" 22. html5 碰到上下拉动滚动条时卡顿/慢怎么解决")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(".scroll-box{\n   /* 模态框之类的div不能放在这个容器中，否则关闭模态框有时候关闭不了*/\n    height:100%;\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h4",{attrs:{id:"_23-浏览器后退不刷新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_23-浏览器后退不刷新","aria-hidden":"true"}},[a._v("#")]),a._v(" 23. 浏览器后退不刷新")]),a._v(" "),e("p",[a._v("这种情况是以前遇到的，这里也说下；主要会发生在 webview 里多一点，当点击后退时页面以缓存形式出现，而不是刷新后的，很多情况下这不是你预期的效果，解决方法是用 js：")]),a._v(" "),e("p",[a._v("代码如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("方法1：\nwindow.addEventListener('pageshow',()=>{\n    if(e.persisted || (window.performance && window.performance.navigation.type==2)){\n        location.reload();\n    }\n},false);\n\nwindow.history.replaceState(null,'',window.location.href+'?timestamp='+new Date().getTime());\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])]),e("p",[a._v("onpageshow 每次页面加载都会触发，无论是从缓存中加载还是正常加载，这是他和 onload 的区别，persisted 判断页面是否从缓存中读出")]),a._v(" "),e("p",[a._v("页面通过历史记录和前进后退访问时。type 值为 2")]),a._v(" "),e("h4",{attrs:{id:"_24-transition-清除闪屏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_24-transition-清除闪屏","aria-hidden":"true"}},[a._v("#")]),a._v(" 24. transition 清除闪屏")]),a._v(" "),e("p",[a._v("代码如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("-webkit-transform-style:preseve-3d; //设置内嵌的元素在3D空间如何呈现：保留3D\n-webkit-backface-visibility:hidden; //设置进行转换的元素的背面在面对用户时是否可见：隐藏\n-webkit-perspective:1000;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h4",{attrs:{id:"_25-解决-active-伪类失效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_25-解决-active-伪类失效","aria-hidden":"true"}},[a._v("#")]),a._v(" 25. 解决 active 伪类失效")]),a._v(" "),e("p",[a._v("代码如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("<body ontouchstart></body>\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"_26-设置-input-文本框的-placeholder-的颜色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_26-设置-input-文本框的-placeholder-的颜色","aria-hidden":"true"}},[a._v("#")]),a._v(" 26. 设置 input 文本框的 placeholder 的颜色")]),a._v(" "),e("p",[a._v("代码如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("input::-webkit-input-placeholer{\n    color:rgba(144,147,153,1);\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h4",{attrs:{id:"_27-一像素边框的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_27-一像素边框的问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 27. 一像素边框的问题")]),a._v(" "),e("p",[a._v("代码如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(".row{\n    position:relative;\n    &:after{\n        content:'';\n        position:absolute;\n        left:0;\n        top:0;\n        width:200%;\n        border-bottom:1px solid #e6e6e6;\n    }\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br")])]),e("h4",{attrs:{id:"_28-css-属性-touch-action-none"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_28-css-属性-touch-action-none","aria-hidden":"true"}},[a._v("#")]),a._v(" 28. css 属性 touch-action:none;")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("该属性会导致安卓页面无法滚动，慎用!\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"_29-去除-ios-手机端-input-输入框的内阴影"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_29-去除-ios-手机端-input-输入框的内阴影","aria-hidden":"true"}},[a._v("#")]),a._v(" 29. 去除 ios 手机端 input 输入框的内阴影")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("input{\n    -webkit-appearance: none;\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h4",{attrs:{id:"_30-图片居中显示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_30-图片居中显示","aria-hidden":"true"}},[a._v("#")]),a._v(" 30. 图片居中显示")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("object-fit: cover;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"_31-父元素设置了-border-radius，子元素应用了-transform，并且父元素设置了-overflow-hidden，但是却失效？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_31-父元素设置了-border-radius，子元素应用了-transform，并且父元素设置了-overflow-hidden，但是却失效？","aria-hidden":"true"}},[a._v("#")]),a._v(" 31. 父元素设置了 border-radius，子元素应用了 transform，并且父元素设置了 overflow:hidden，但是却失效？")]),a._v(" "),e("p",[a._v("代码如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 给父元素设置\n{\n    position:relative;\n    z-index:1;\n}\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h3",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://juejin.im/post/5dafc3df5188257a63539c64",target:"_blank",rel:"noopener noreferrer"}},[a._v("移动端 H5 页面开发坑点指南"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5dfb3e73f265da33b12ea9d3",target:"_blank",rel:"noopener noreferrer"}},[a._v("【建议收藏】90%的前端都会踩的坑，你中了吗？"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5af918636fb9a07ac5603ecb",target:"_blank",rel:"noopener noreferrer"}},[a._v("移动端常见 bug 汇总"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5dfadb91e51d45584006e486",target:"_blank",rel:"noopener noreferrer"}},[a._v("吃透移动端 H5 与 Hybrid"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"联系作者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),e("div",{attrs:{align:"center"}},[e("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),e("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=n.exports}}]);