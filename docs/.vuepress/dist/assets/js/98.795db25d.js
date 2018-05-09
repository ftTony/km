(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{387:function(t,e,a){"use strict";a.r(e);var _=a(4),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dom与bom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom与bom","aria-hidden":"true"}},[t._v("#")]),t._v(" DOM与BOM")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),t._v(" "),a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%B8%80DOM"}},[t._v("DOM")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%8CBOM"}},[t._v("BOM")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%89%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE"}},[t._v("思维导图")])])]),t._v(" "),a("h3",{attrs:{id:"一、dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、dom","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、DOM")]),t._v(" "),a("p",[a("code",[t._v("DOM")]),t._v("（文档对象模型）是"),a("code",[t._v("HTML")]),t._v("和"),a("code",[t._v("XML")]),t._v("的应用程序接口（"),a("code",[t._v("API")]),t._v("）。")]),t._v(" "),a("p",[a("code",[t._v("DOM")]),t._v("树由节点构成，节点有以下种类：元素节点、文本节点和属性节点。")]),t._v(" "),a("ul",[a("li",[t._v("获取 DOM 节点")]),t._v(" "),a("li",[t._v("层次节点指针")]),t._v(" "),a("li",[t._v("节点操作")]),t._v(" "),a("li",[t._v("属性操作")]),t._v(" "),a("li",[t._v("文本操作")]),t._v(" "),a("li",[t._v("获取元素大小")])]),t._v(" "),a("h3",{attrs:{id:"_1-1-获取-dom-节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-获取-dom-节点","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 获取 DOM 节点")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("getElementById")]),t._v(" "),a("td",[t._v("获取特定 ID 元素的节点")]),t._v(" "),a("td",[t._v("获取单个节点对象")])]),t._v(" "),a("tr",[a("td",[t._v("getElementsByClassName")]),t._v(" "),a("td",[t._v("获取指定 class 类的节点列表")]),t._v(" "),a("td",[t._v("返回值为节点数组")])]),t._v(" "),a("tr",[a("td",[t._v("getElementsByTagName")]),t._v(" "),a("td",[t._v("获取相同元素的节点列表")]),t._v(" "),a("td",[t._v("返回值为节点数组")])]),t._v(" "),a("tr",[a("td",[t._v("getElementsByName")]),t._v(" "),a("td",[t._v("获取相同名称的节点列表")]),t._v(" "),a("td",[t._v("返回值为节点数组")])]),t._v(" "),a("tr",[a("td",[t._v("querySelector")]),t._v(" "),a("td",[t._v("获取 class 第一或 id 的节点")]),t._v(" "),a("td",[t._v("返回值为一个节点对象")])]),t._v(" "),a("tr",[a("td",[t._v("querySelectorAll")]),t._v(" "),a("td",[t._v("row 2 col 2")]),t._v(" "),a("td",[t._v("返回值为节点数组")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-2-层次节点指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-层次节点指针","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2 层次节点指针")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("childNodes")]),t._v(" "),a("td",[t._v("获取当前元素节点的所有节点")])]),t._v(" "),a("tr",[a("td",[t._v("firstChild")]),t._v(" "),a("td",[t._v("获取当前元素节点的第一个子节点")])]),t._v(" "),a("tr",[a("td",[t._v("lastChild")]),t._v(" "),a("td",[t._v("获取当前元素节点的最后一个子节点")])]),t._v(" "),a("tr",[a("td",[t._v("ownerDocument")]),t._v(" "),a("td",[t._v("获取该节点的文档根节点，相当与 document")])]),t._v(" "),a("tr",[a("td",[t._v("parentNode")]),t._v(" "),a("td",[t._v("获取当前节点的父节点")])]),t._v(" "),a("tr",[a("td",[t._v("previousSibling")]),t._v(" "),a("td",[t._v("获取当前节点的前一个同级节点")])]),t._v(" "),a("tr",[a("td",[t._v("nextSibling")]),t._v(" "),a("td",[t._v("获取当前节点的后一个同级节点")])]),t._v(" "),a("tr",[a("td",[t._v("attributes")]),t._v(" "),a("td",[t._v("获取当前元素节点的所有属性节点集合")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-3-节点操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-节点操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.3 节点操作")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("createElement")]),t._v(" "),a("td",[t._v("创建一个元素节点")])]),t._v(" "),a("tr",[a("td",[t._v("createAttribute")]),t._v(" "),a("td",[t._v("创建一个属性节点")])]),t._v(" "),a("tr",[a("td",[t._v("createTextNode")]),t._v(" "),a("td",[t._v("创建一个文本节点")])]),t._v(" "),a("tr",[a("td",[t._v("appendChild")]),t._v(" "),a("td",[t._v("向节点的子节点列表的末尾添加新的子节点")])]),t._v(" "),a("tr",[a("td",[t._v("insertBefore")]),t._v(" "),a("td",[t._v("在已知的子节点前插入一个新的子节点")])]),t._v(" "),a("tr",[a("td",[t._v("replaceChild")]),t._v(" "),a("td",[t._v("将某个子节点替换为另一个")])]),t._v(" "),a("tr",[a("td",[t._v("cloneNode")]),t._v(" "),a("td",[t._v("创建指定节点的副本，有一个参数，其值为 true 或 false，true 复制当前节点及其所有子节点，false 仅复制当前节点")])]),t._v(" "),a("tr",[a("td",[t._v("removeChild")]),t._v(" "),a("td",[t._v("删除指定的节点")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-4-属性操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-属性操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.4 属性操作")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("元素节点的 id 名称")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("元素节点的 title 属性值")])]),t._v(" "),a("tr",[a("td",[t._v("style")]),t._v(" "),a("td",[t._v("css 内联样式属性值")])]),t._v(" "),a("tr",[a("td",[t._v("className")]),t._v(" "),a("td",[t._v("CSS 元素的类")])]),t._v(" "),a("tr",[a("td",[t._v("getAttribute")]),t._v(" "),a("td",[t._v("获取特定元素节点属性的值")])]),t._v(" "),a("tr",[a("td",[t._v("setAttribute")]),t._v(" "),a("td",[t._v("设置特定元素节点属性的值")])]),t._v(" "),a("tr",[a("td",[t._v("removeAttribute")]),t._v(" "),a("td",[t._v("移除特定元素节点属性")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-5-文本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-文本操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.5 文本操作")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方法")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("insertData(offset,String)")]),t._v(" "),a("td",[t._v("从 offset 指定的位置插入 string")])]),t._v(" "),a("tr",[a("td",[t._v("appendData(string)")]),t._v(" "),a("td",[t._v("将 string 插入到文本节点的末尾处")])]),t._v(" "),a("tr",[a("td",[t._v("deleteDate(offset,count)")]),t._v(" "),a("td",[t._v("从 offset 起删除 count 个字符")])]),t._v(" "),a("tr",[a("td",[t._v("replaceData(off,count,string)")]),t._v(" "),a("td",[t._v("从 off 将 count 个字符用 string 替代")])]),t._v(" "),a("tr",[a("td",[t._v("splitData(offset)")]),t._v(" "),a("td",[t._v("从 offset 起将文本节点分成两个节点")])]),t._v(" "),a("tr",[a("td",[t._v("substring(offset,count)")]),t._v(" "),a("td",[t._v("返回由 offset 起的 count 个节点")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-6-获取元素大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-获取元素大小","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.6 获取元素大小")]),t._v(" "),a("h4",{attrs:{id:"_1-6-1-clientwidth-和-clientheight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-1-clientwidth-和-clientheight","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.6.1 clientWidth 和 clientHeight")]),t._v(" "),a("p",[t._v("这组属性可以获取元素可视区的大小，可以得到元素内容及内边距所占据的空间大小。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dom.clientWidth; //400\ndom.clientHeight //400\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("返回了元素大小，但没有单位，默认单位是px")]),t._v(" "),a("ol",[a("li",[t._v("增加边框，无变化")]),t._v(" "),a("li",[t._v("增加外边距，无变化")]),t._v(" "),a("li",[t._v("增加滚动条，最张值等于原本大小减去滚动条的大小")]),t._v(" "),a("li",[t._v("增加内边距，最终值等于原本大小加上内边距的大小")])]),t._v(" "),a("p",[a("img",{attrs:{src:"dom01.gif",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"_1-6-2-scrollwidth-和-scrollheight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-2-scrollwidth-和-scrollheight","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.6.2 scrollWidth 和 scrollHeight")]),t._v(" "),a("p",[t._v("这组属性可以获取滚动内容的元素大小")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dom.scrollWidth\ndom.scrollHeight\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ol",[a("li",[t._v("增加内边距，最终值会等于原本大小加上内边距大小")]),t._v(" "),a("li",[t._v("增加滚动条，最张值会等于原本大小送去滚动条大小")])]),t._v(" "),a("h4",{attrs:{id:"_1-6-3-scrolltop-和-scrollleft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-3-scrolltop-和-scrollleft","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.6.3 scrollTop 和 scrollLeft")]),t._v(" "),a("p",[t._v("这组属性可以获取滚动条被隐藏的区域大小，也可设置定位到该区域。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dom.scrollTop;  //获取滚动内容上方的位置\ndom.scrollLeft; //获取滚动内容左方的位置\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"dom03.gif",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"_1-6-4-offsetwidth-和-offsetheight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-4-offsetwidth-和-offsetheight","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.6.4 offsetWidth 和 offsetHeight")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dom.offsetWidth;  //400\ndom.offsetHeight; //400\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("返回了元素大小，默认单位是px。如果没有设置任何CSS的宽度和高度，他会得到计算后的宽度和高度。")]),t._v(" "),a("ol",[a("li",[t._v("offsetHeight元素在垂直方向上占用的空间大小，以像素计。包括元素的高度、（可见的）水平滚动条的高度、上边框高度和下边框高度。")]),t._v(" "),a("li",[t._v("offsetWidth元素在水平方向上占用的空间大小，以像素计。包括元素的宽度、（可见的）垂直滚动笨拙宽度、左边框宽度和右边框宽度。")])]),t._v(" "),a("h4",{attrs:{id:"_1-6-5-offsetleft-和-offsettop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-5-offsetleft-和-offsettop","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.6.5 offsetLeft 和 offsetTop")]),t._v(" "),a("p",[t._v("这组属性可以获取当前元素相对于父元素的位置。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dom.offsetLeft; //20\ndom.offsetTop;  //20\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:"dom02.gif",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"_1-6-6-获取元素位置的快速方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-6-获取元素位置的快速方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.6.6 获取元素位置的快速方法")]),t._v(" "),a("p",[t._v("除了上面的函数以外，还有一种快速方法，可以立刻获得网页元素的位置。")]),t._v(" "),a("p",[t._v("那就是使用getBoundingClientRect()方法。它返回一个对象，其中包含了left、right、top、bottom四个属性，分别对应了该元素的左上角和右下角相对于浏览器窗口（viewport）左上角的距离。")]),t._v(" "),a("p",[t._v("所以，网页元素的相对位置就是")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("　　var X= this.getBoundingClientRect().left;\n\n　　var Y =this.getBoundingClientRect().top;\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"二、bom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、bom","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、BOM")]),t._v(" "),a("p",[a("code",[t._v("BOM")]),t._v("浏览器对象模型（Browser Object Model）"),a("code",[t._v("BOM")]),t._v("对象是在Web中使用JavaScript的核心，该对象提供了与浏览器交互相关对象结构。"),a("code",[t._v("BOM")]),t._v("由多个子对象组成，其核心为window对象，它是"),a("code",[t._v("BOM")]),t._v("的顶层对象，表示在浏览器环境中的一个全局的顶级对象，所有在浏览器环境中使用的对象都是window对象的子对象。")]),t._v(" "),a("p",[a("code",[t._v("BOM")]),t._v("中的对象主要包括：DOM相关对象、frames对象、navigator对象、history对象、location对象、screen对象")]),t._v(" "),a("p",[a("img",{attrs:{src:"bom.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"三、思维导图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、思维导图","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、思维导图")]),t._v(" "),a("p",[a("img",{attrs:{src:"dom.gif",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[t._v("《高程第三版》")]),t._v(" "),a("li",[t._v("《权威第 6 版》")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000006623511",target:"_blank",rel:"noopener noreferrer"}},[t._v("温故js系列（6）-DOM"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"联系作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[t._v("#")]),t._v(" 联系作者")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("p",[t._v("\n        平凡世界，贵在坚持。\n    ")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);e.default=v.exports}}]);