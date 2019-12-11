(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{290:function(e,a,s){"use strict";s.r(a);var t=s(4),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"grid-布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grid-布局","aria-hidden":"true"}},[e._v("#")]),e._v(" Grid 布局")]),e._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),s("p",[e._v("CSS Grid(网格)布局，是一个二维的基于风格的布局系统，它的目标是完全改变我们基于风格的用户界面的布局方式。案例源码放在"),s("a",{attrs:{href:"https://github.com/ftTony/notes/tree/master/css/grid",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[e._v("#")]),e._v(" 内容")]),e._v(" "),s("ul",[s("li",[e._v("相关属性")]),e._v(" "),s("li",[e._v("基本术语")]),e._v(" "),s("li",[e._v("浏览器支持")])]),e._v(" "),s("h3",{attrs:{id:"一、相关属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、相关属性","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、相关属性")]),e._v(" "),s("h4",{attrs:{id:"_1-1-网格容器-grid-container-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-网格容器-grid-container-属性","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.1 网格容器(Grid Container) 属性")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("display")])])]),e._v(" "),s("p",[e._v("将元素定义为网格容器，并为其内容建立新的，网格格式上下文。")]),e._v(" "),s("p",[e._v("值：")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("grid")]),e._v("：生成一个块级网格")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("inline-grid")]),e._v("：生成一个内联网格")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("grid-template-columns/grid-template-rows")])])])]),e._v(" "),s("p",[e._v("使用空格分隔的值列表，用来定义网格的列和行。这些值表示网格轨道大小，它们之间的空格表示网格线。")]),e._v(" "),s("p",[e._v("值：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("<track-size>")]),e._v("：可以是长度值，百分比，或者等份网格容器中可用空间（使用"),s("code",[e._v("fr")]),e._v("单位）")]),e._v(" "),s("li",[s("code",[e._v("<line-name>")]),e._v("：你可以选择的任意名称")])]),e._v(" "),s("p",[e._v("CSS 代码:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".container {\n  grid-template-columns: <track-size> ... | <line-name> <track-size> ...;\n  grid-template-rows: <track-size> ... | <line-name> <track-size> ...;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("ul",[s("li",[s("p",[s("code",[e._v("none")]),e._v("：这个关键字表示不明确的网格。所有的列和其大小都将由"),s("code",[e._v("grid-auto-columns")]),e._v("属性隐式的指定。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("<length>")]),e._v("：非负值的长度大小。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("<percentage>")]),e._v("：非负值且相对于网格容器的"),s("code",[e._v("<百分比>")]),e._v("。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("<flex>")]),e._v("：非负值，用单位"),s("code",[e._v("fr")]),e._v("来定义网格轨道大小的弹性系数。 每个定义了"),s("code",[e._v("<flex>")]),e._v("的网格轨道会按比例分配剩余的可用空间。当外层用一个"),s("code",[e._v("minmax()")]),e._v("表示时，它将是一个自动最小值")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("max-content")]),e._v("：是一个用来表示以网格项的最大的内容来占据网格轨道的关键字。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("min-content")]),e._v("：是一个用来表示以网格项的最小内容来占据网格轨道的关键字。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("minmax")]),e._v("：是一个来定义大小范围的属性，大于等于 min 值，并且小于等于 max 值。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("auto")]),e._v("：如果该网格轨道为最大时，该属性等同于"),s("code",[e._v("<max-content>")]),e._v(" ，为最小时，则等同于"),s("code",[e._v("<min-content>")]),e._v(" 。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("fit-content")]),e._v("：相当于公式"),s("code",[e._v("min(max-content, max(auto, argument))")]),e._v("，类似于 "),s("code",[e._v("auto")]),e._v(" 的计算(即 minmax(auto, max-content))，除了网格轨道大小值是确定下来的，否则该值都大于 "),s("code",[e._v("auto")]),e._v(" 的最小值。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("repeat")]),e._v("：表示网格重复部分，以一种更简洁的方式去表示大量而且重复列的表达式。可值有"),s("code",[e._v("positive-integer")]),e._v("、"),s("code",[e._v("auto-fill")]),e._v("、"),s("code",[e._v("auto-fit")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("grid-template-areas")])])])]),e._v(" "),s("p",[e._v("通过引用"),s("code",[e._v("grid-area")]),e._v("属性指定的风格区域名称来定义网格模板。重复网格区域的名称导致内容跨越这些单元格。")]),e._v(" "),s("p",[e._v("值：")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("<grid-area-name>")]),e._v("：由网格项的"),s("code",[e._v("grid-area")]),e._v("指定的网格区域名称")])]),e._v(" "),s("li",[s("p",[s("code",[e._v(".")]),e._v("(点号)：代表一个空的风格单元")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("none")]),e._v("：不定义网格区域")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("grid-template")]),e._v("/"),s("strong",[e._v("grid")])])])]),e._v(" "),s("p",[s("code",[e._v("grid-template")]),e._v("属性是"),s("code",[e._v("grid-template-columns")]),e._v("、"),s("code",[e._v("grid-template-rows")]),e._v(" 和 "),s("code",[e._v("grid-template-areas")]),e._v(" 这三个属性的合并简写形式。")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("grid-column-gap")]),e._v("/"),s("strong",[e._v("grid-row-gap")]),e._v("/"),s("strong",[e._v("grid-gap")])])]),e._v(" "),s("p",[e._v("指定风格线的大小。你可以把它想象为设置列/行之间间距的宽度。")]),e._v(" "),s("p",[e._v("值：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("<line-size>")]),e._v("：长度值")])]),e._v(" "),s("p",[e._v("CSS 代码：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".container {\n  grid-column-gap: <line-size>;\n  grid-row-gap: <line-size>;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("示例代码：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".container {\n  grid-row-gap: 20px;\n  grid-column-gap: 20px;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[s("code",[e._v("grid-gap")]),e._v("是"),s("code",[e._v("grid-column-gap")]),e._v("和"),s("code",[e._v("grid-row-gap")]),e._v("的简写语法")]),e._v(" "),s("p",[e._v("值：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("<grid-row-gap> <grid-column-gap>")]),e._v("：长度值")])]),e._v(" "),s("p",[e._v("CSS 代码:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".container {\n  grid-gap: <grid-row-gap> <grid-column-gap>;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("示例代码：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".container {\n  grid-gap: 20px 20px;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("ul",[s("li",[s("strong",[e._v("justify-items")]),e._v("/"),s("strong",[e._v("align-items")]),e._v("/"),s("strong",[e._v("place-items")])])]),e._v(" "),s("p",[s("code",[e._v("justify-items")]),e._v("属性设置单元格内容的水平位置（左中右）")]),e._v(" "),s("p",[e._v("值：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("start")]),e._v("：将网格项对齐到其单元格的左侧起始边缘（左侧对齐）")]),e._v(" "),s("li",[s("code",[e._v("end")]),e._v("：将网格欺项对齐到其单元格的右侧结束边缘（右侧对齐）")]),e._v(" "),s("li",[s("code",[e._v("center")]),e._v("：将风格项对齐到其单元格的水平中间位置（水平居中对齐）")]),e._v(" "),s("li",[s("code",[e._v("stretch")]),e._v("：填满单元格的宽度（默认值）")])]),e._v(" "),s("p",[e._v("CSS 代码：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".container {\n  justify-items: start | end | center | stretch;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".container {\n  justify-items: start;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[s("code",[e._v("align-items")]),e._v("属性设置单元内容的垂直位置（上中下）。")]),e._v(" "),s("p",[e._v("值：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("start")]),e._v("：将网格项对齐到其单元格的顶部起始边缘（顶部对齐）")]),e._v(" "),s("li",[s("code",[e._v("end")]),e._v("：将网格项对齐到其单元格的底部结束边缘（底部对齐）")]),e._v(" "),s("li",[s("code",[e._v("center")]),e._v("：将网格项对齐到其单元格的垂直中间位置（垂直居中对齐）")]),e._v(" "),s("li",[s("code",[e._v("stretch")]),e._v("：填满单元格的宽度（默认值）")])]),e._v(" "),s("p",[e._v("CSS 代码：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".container {\n  align-items: start | end | center | stretch;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".container {\n  align-items: start;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[s("code",[e._v("place-items")]),e._v("是设置 "),s("code",[e._v("align-items")]),e._v(" 和 "),s("code",[e._v("justify-items")]),e._v(" 的简写形式。")]),e._v(" "),s("p",[e._v("值：")]),e._v(" "),s("p",[s("code",[e._v("<align-items> <justify-items>")]),e._v("：第一个值设置 "),s("code",[e._v("align-items")]),e._v(" 属性，第二个值设置 "),s("code",[e._v("justify-items")]),e._v(" 属性。如果省略第二个值，则将第一个值同时分配给这两个属性。")]),e._v(" "),s("p",[e._v("CSS 代码：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("place-items: <align-items> <justify-items>;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("place-items: start end;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[s("strong",[e._v("justify-content")]),e._v("/"),s("strong",[e._v("align-content")]),e._v("/"),s("strong",[e._v("place-content")])])]),e._v(" "),s("p",[s("code",[e._v("justify-content")]),e._v("属性是整个内容区域在容器里面的水平位置（左中右）。")]),e._v(" "),s("p",[e._v("值：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("start")]),e._v("：将网格对齐到网格容器的左侧起始边缘（左侧对齐）")]),e._v(" "),s("li",[s("code",[e._v("end")]),e._v("：将网格对齐到网格容器的右侧结束边缘（右侧对齐）")]),e._v(" "),s("li",[s("code",[e._v("center")]),e._v("：将网格对齐到网格容器的水平中间位置（水平居中对齐）")]),e._v(" "),s("li",[s("code",[e._v("stretch")]),e._v("：调整网格项的宽度，允许该网格填充满整个网格容器")]),e._v(" "),s("li",[s("code",[e._v("space-around")]),e._v("：在每个网格项之间旋转一个均匀的空间，左右两端放置一半的空间。")]),e._v(" "),s("li",[s("code",[e._v("space-between")]),e._v("：在每个网格项之间放置一个均匀的空间，左右两端没有空间")]),e._v(" "),s("li",[s("code",[e._v("space-evenly")]),e._v("：在每个网格项目之间放置一个均匀的空间，左右两端放置一个均匀的空间")])]),e._v(" "),s("p",[e._v("CSS 代码：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".container {\n  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".container {\n  justify-content: start;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[s("code",[e._v("align-content")]),e._v("属性是整个内容区域的垂直位置（上中下）。")]),e._v(" "),s("p",[e._v("值：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("start")]),e._v("：将网格对齐到 网格容器(grid container) 的顶部起始边缘（顶部对齐）")]),e._v(" "),s("li",[s("code",[e._v("end")]),e._v("：将网格对齐到 网格容器 的底部结束边缘（底部对齐）")]),e._v(" "),s("li",[s("code",[e._v("center")]),e._v("：将网格对齐到 网格容器 的垂直中间位置（垂直居中对齐）")]),e._v(" "),s("li",[s("code",[e._v("stretch")]),e._v("：调整 网格项(grid items) 的高度，允许该网格填充满整个 网格容器 的高度")]),e._v(" "),s("li",[s("code",[e._v("space-around")]),e._v("：在每个网格项之间放置一个均匀的空间，上下两端放置一半的空间")]),e._v(" "),s("li",[s("code",[e._v("space-between")]),e._v("：在每个网格项之间放置一个均匀的空间，上下两端没有空间")]),e._v(" "),s("li",[s("code",[e._v("space-evenly")]),e._v("：在每个网格项目之间放置一个均匀的空间，上下两端放置一个均匀的空间")])]),e._v(" "),s("p",[e._v("CSS 代码：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".container {\n  align-content: start | end | center | stretch | space-around | space-between | space-evenly;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".container {\n  align-content: start;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[s("code",[e._v("place-content")]),e._v("属性是"),s("code",[e._v("align-content")]),e._v("属性和"),s("code",[e._v("justify-content")]),e._v("属性的合并简写形式。")]),e._v(" "),s("p",[e._v("值：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("<align-content> <justify-content>")]),e._v("：第一个值设置"),s("code",[e._v("align-content")]),e._v("属性，第二个值设置 "),s("code",[e._v("justify-content")]),e._v("属性。如果省略第二个值，则将第一个值同时分配给这两个属性。")])]),e._v(" "),s("p",[e._v("CSS 代码：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("place-content: <align-content> <justify-content>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("place-content: space-around space-evenly;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[s("strong",[e._v("grid-auto-columns")]),e._v("/"),s("strong",[e._v("grid-auto-rows")])])]),e._v(" "),s("p",[s("code",[e._v("grid-auto-columns")]),e._v(" 属性和 "),s("code",[e._v("grid-auto-rows")]),e._v(" 属性用来设置，浏览器自动创建的多余网格的列宽和行高。")]),e._v(" "),s("p",[e._v("值：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("<track-size>")]),e._v("：可以是长度值，百分比，或者等份网格容器中可用空间的分数（使用 fr 单位）")])]),e._v(" "),s("p",[e._v("CSS 代码：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".container {\n  grid-auto-columns: <track-size> ...;\n  grid-auto-rows: <track-size> ...;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("示例：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".container {\n  display: grid;\n  grid-template-columns: 100px 100px 100px;\n  grid-template-rows: 100px 100px 100px;\n  grid-auto-rows: 50px;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h4",{attrs:{id:"_1-2-网格项-grid-items-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-网格项-grid-items-属性","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.2 网格项(Grid Items) 属性")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("grid-column-start")]),e._v("/"),s("strong",[e._v("grid-column-end")]),e._v("/"),s("strong",[e._v("grid-row-start")]),e._v("/"),s("strong",[e._v("grid-row-end")])])]),e._v(" "),s("p",[s("code",[e._v("grid-column-start")]),e._v("属性：左边框所在的垂直网格线；"),s("code",[e._v("grid-coloumn-end")]),e._v("属性：右边框所在的垂直网格线；"),s("code",[e._v("grid-row-start")]),e._v("属性：上边框所在的水平网格线；"),s("code",[e._v("grid-row-end")]),e._v("属性：下边框所在的水平网格线；")]),e._v(" "),s("p",[e._v("CSS 代码:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".item {\n  grid-column-start: <number> | <name> | span <number> | span <name> | auto\n  grid-column-end: <number> | <name> | span <number> | span <name> | auto\n  grid-row-start: <number> | <name> | span <number> | span <name> | auto\n  grid-row-end: <number> | <name> | span <number> | span <name> | auto\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("示例代码：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[s("strong",[e._v("grid-column")]),e._v("/"),s("strong",[e._v("grid-row")])])]),e._v(" "),s("p",[s("code",[e._v("grid-column")]),e._v(" 属性是 "),s("code",[e._v("grid-column-start")]),e._v(" 和 "),s("code",[e._v("grid-column-end")]),e._v(" 的合并简写形式，"),s("code",[e._v("grid-row")]),e._v(" 属性是 "),s("code",[e._v("grid-row-start")]),e._v(" 属性和 "),s("code",[e._v("grid-row-end")]),e._v(" 的合并简写形式。")]),e._v(" "),s("p",[e._v("CSS 代码:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".item {\n  grid-column:  / ;\n  grid-row:  / ;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("ul",[s("li",[s("strong",[e._v("grid-area")])]),e._v(" "),s("li",[s("strong",[e._v("justify-self")]),e._v("/"),s("strong",[e._v("align-self")]),e._v("/"),s("strong",[e._v("place-self")])])]),e._v(" "),s("h3",{attrs:{id:"二、基本术语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、基本术语","aria-hidden":"true"}},[e._v("#")]),e._v(" 二、基本术语")]),e._v(" "),s("ul",[s("li",[e._v("网格容器")]),e._v(" "),s("li",[e._v("网格项")]),e._v(" "),s("li",[e._v("网格线")]),e._v(" "),s("li",[e._v("网格轨道")]),e._v(" "),s("li",[e._v("网格单元格")]),e._v(" "),s("li",[e._v("网格区域")])]),e._v(" "),s("h4",{attrs:{id:"_2-1-网格容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-网格容器","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.1 网格容器")]),e._v(" "),s("h4",{attrs:{id:"_2-2-网格项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-网格项","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.2 网格项")]),e._v(" "),s("h4",{attrs:{id:"_2-3-网格线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-网格线","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.3 网格线")]),e._v(" "),s("h4",{attrs:{id:"_2-4-网格轨道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-网格轨道","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.4 网格轨道")]),e._v(" "),s("h4",{attrs:{id:"_2-5-网格单元格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-网格单元格","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.5 网格单元格")]),e._v(" "),s("h4",{attrs:{id:"_2-6-网格区域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-网格区域","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.6 网格区域")]),e._v(" "),s("h3",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.zcfy.cc/article/learn-css-grid-a-guide-to-learning-css-grid-jonathan-suh",target:"_blank",rel:"noopener noreferrer"}},[e._v("grid 学习"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS Grid 网格布局教程"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/entry/5894135c8fd9c5a19507f6a1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grid 布局"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.html.cn/archives/8510",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS Grid 布局完全指南(图解 Grid 详细教程)"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN Grid"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"联系作者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[e._v("#")]),e._v(" 联系作者")]),e._v(" "),s("div",{attrs:{align:"center"}},[s("p",[e._v("\n        平凡世界，贵在坚持。\n    ")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=n.exports}}]);