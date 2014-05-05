(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{298:function(s,a,n){"use strict";n.r(a);var t=n(13),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"瀑布流布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#瀑布流布局"}},[s._v("#")]),s._v(" 瀑布流布局")]),s._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),n("p",[s._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),s._v(" "),n("h2",{attrs:{id:"内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E4%BB%80%E4%B9%88%E6%98%AF%E7%80%91%E5%B8%83%E6%B5%81%E5%B8%83%E5%B1%80"}},[s._v("什么是瀑布流布局")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E7%80%91%E5%B8%83%E6%B5%81%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86"}},[s._v("瀑布流的实现原理")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E7%80%91%E5%B8%83%E6%B5%81%E7%9A%84%E4%BC%98%E7%BC%BA%E7%82%B9"}},[s._v("瀑布流的优缺点")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E7%80%91%E5%B8%83%E6%B5%81%E7%9A%84%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF"}},[s._v("瀑布流的适用场景")])]),s._v(" "),n("li",[n("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E5%87%A0%E7%A7%8D%E5%B8%B8%E7%94%A8%E7%9A%84%E7%80%91%E5%B8%83%E6%B5%81%E5%B8%83%E5%B1%80"}},[s._v("几种常用的瀑布流布局")])])]),s._v(" "),n("h3",{attrs:{id:"一、什么是瀑布流布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是瀑布流布局"}},[s._v("#")]),s._v(" 一、什么是瀑布流布局")]),s._v(" "),n("p",[n("code",[s._v("瀑布流")]),s._v("又称瀑布流式布局，是一种比较流行的页面布局方式，专业的英文名称为"),n("code",[s._v("Masonry Layouts")]),s._v("。与传统的分页显示不同，视觉表现为"),n("code",[s._v("参差不齐")]),s._v("的多栏布局。")]),s._v(" "),n("p",[n("img",{attrs:{src:"column-layout-01.png",alt:"images"}})]),s._v(" "),n("h3",{attrs:{id:"二、瀑布流的实现原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、瀑布流的实现原理"}},[s._v("#")]),s._v(" 二、瀑布流的实现原理")]),s._v(" "),n("p",[s._v("瀑布流本质上就是寻找之中高度最小的一列，并将新的元素添加到该列后面，只要有新的元素需要排列，就继续寻找所有列中的高度最小列，把后来的元素添加到高度最小列上。")]),s._v(" "),n("h4",{attrs:{id:"_2-1-图解基础瀑布流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-图解基础瀑布流"}},[s._v("#")]),s._v(" 2.1 图解基础瀑布流")]),s._v(" "),n("p",[s._v("我们看下为什么要永远寻找最小列？")]),s._v(" "),n("p",[s._v("先看图 1 的排列顺序，第一排元素的顶部会处于同一个高度，依次排列在顶端，第一排排满之后，第二排从左往右排列。然而这种排列方式很容易出现其中一列过长或其中一列过短的情况。")]),s._v(" "),n("p",[s._v("​ 为了解决图 1 中列可能过长或者过短的问题，我们按照图 2 的方式将元素放在最短的一列进行排列。")]),s._v(" "),n("p",[n("img",{attrs:{src:"column-layout-03.png",alt:"images"}})]),s._v(" "),n("h3",{attrs:{id:"三、瀑布流的优缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、瀑布流的优缺点"}},[s._v("#")]),s._v(" 三、瀑布流的优缺点")]),s._v(" "),n("h4",{attrs:{id:"_3-1-优点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-优点"}},[s._v("#")]),s._v(" 3.1 优点")]),s._v(" "),n("ul",[n("li",[s._v("节省空间，外表美观，更有艺术性。")]),s._v(" "),n("li",[s._v("对于触屏设备非常友好，通过向上滑动浏览")]),s._v(" "),n("li",[s._v("用户浏览时的观赏和思维不容易被打断，留存更容易。")])]),s._v(" "),n("h4",{attrs:{id:"_3-2-缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-缺点"}},[s._v("#")]),s._v(" 3.2 缺点")]),s._v(" "),n("ul",[n("li",[s._v("用户无法了解内容总长度，对内容没有宏观掌控。")]),s._v(" "),n("li",[s._v("用户无法了解现在所处的具体位置，不知道离终点还有多远。")]),s._v(" "),n("li",[s._v("回溯时不容易定位到之前看到的内容。")]),s._v(" "),n("li",[s._v("容易造成页面加载的负荷。")]),s._v(" "),n("li",[s._v("容易造成用户浏览的疲劳，没有短暂的休息时间。")])]),s._v(" "),n("h3",{attrs:{id:"四、瀑布流的适用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、瀑布流的适用场景"}},[s._v("#")]),s._v(" 四、瀑布流的适用场景")]),s._v(" "),n("p",[s._v("根据瀑布流的优缺点，我们不难得出在什么情况下选择瀑布是合理的选择：")]),s._v(" "),n("ul",[n("li",[s._v("内容以图片为主的时候，瀑布流是更好的选择。图片占用空间比较大，并且大脑理解的速度相比理解文字要快，短时间内可以扫过的内容很多，所以如果用分页显示的话用户务必会频繁的翻页，影响沉浸式的体验，而瀑布流可以解决这个问题")]),s._v(" "),n("li",[s._v("信息与信息之间相对独立时，瀑布流是更好的选择。如果信息关联性强，用户务必会进行大量的回溯操作去查看之前或者之后的信息，相反，如果信息相对独立的话，可以使用瀑布流，让用户同时接受来自不同地方的信息。")]),s._v(" "),n("li",[s._v("信息与搜索匹配比较模糊时，瀑布流是更好的选择，瀑布流给人的直观印象，就是同时显示的信息与用户搜索的匹配度大致一样，而分页显示的直观印象则是越靠上的信息被认为与用户的搜索越匹配。因此，当信息与搜索匹配度没有明显区分度时，可以采用瀑布流。")]),s._v(" "),n("li",[s._v("用户目的不强的时候，瀑布流是更好的选择。如果用户有特定需要查找的信息，分页查找定位更方便，而当目的性较弱的时候，瀑布流可以增加用户停留的时间和意想不到的收获。")])]),s._v(" "),n("h3",{attrs:{id:"五、几种常用的瀑布流布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、几种常用的瀑布流布局"}},[s._v("#")]),s._v(" 五、几种常用的瀑布流布局")]),s._v(" "),n("ul",[n("li",[s._v("multi-column")]),s._v(" "),n("li",[s._v("grid 布局")]),s._v(" "),n("li",[s._v("Flexbox 布局")])]),s._v(" "),n("h4",{attrs:{id:"_5-1-multi-column"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-multi-column"}},[s._v("#")]),s._v(" 5.1 multi-column")]),s._v(" "),n("p",[n("code",[s._v("multi-column")]),s._v("实现瀑布流主要依赖以下几个属性：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("column-count")]),s._v("：设置共有几列")]),s._v(" "),n("li",[n("code",[s._v("column-width")]),s._v("：设置每列宽度，列数由"),n("code",[s._v("总宽度")]),s._v("与"),n("code",[s._v("每列宽度")]),s._v("计算得出")]),s._v(" "),n("li",[n("code",[s._v("colunm-gap")]),s._v("：设置列与列之间的间距")])]),s._v(" "),n("p",[n("code",[s._v("column-count")]),s._v("和"),n("code",[s._v("column-width")]),s._v("都可以用来定义分栏的数目，而且并没有明确的优先级之分。优先级的计算取决与具体的场景。")]),s._v(" "),n("p",[s._v("计算方式为：计算"),n("code",[s._v("column-count")]),s._v(" 和 "),n("code",[s._v("column-width")]),s._v(" 转换后具体的列数，哪个小就用哪个。")]),s._v(" "),n("p",[s._v("具体代码如下：")]),s._v(" "),n("p",[n("strong",[s._v("CSS 代码")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".masonry {\n    column-count: 3;\n    column-gap: 10px;\n    padding: 10px;\n}\n\n.masonry .item {\n    border: 1px solid #999;\n    margin-bottom: 10px;\n}\n\n.masonry .item img {\n    width: 100%;\n    vertical-align: middle;\n}\n\n.masonry .item .title {\n    display: block;\n    margin-left: 5px;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[n("strong",[s._v("HTML 代码")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<div class="masonry">\n        <div class="item"><img src="https://i.pinimg.com/236x/7f/24/8c/7f248c9e18abe79de0d6c79617e03361.jpg"><span\n                class="title">Consequatur in ipsa ab sapiente enim. Accusantium aut est voluptas sequi. Quibusdam neque\n                aperiam dolor. Excepturi sunt a minus fuga autem excepturi cupiditate. Fuga aspernatur incidunt\n                aliquid.</span></div>\n        <div class="item"><img src="https://i.pinimg.com/236x/a6/cd/0a/a6cd0a15d5b2909539dd7944201127d2.jpg"><span\n                class="title">Sit qui consequuntur vel quibusdam sit ea sint. Repellendus unde ducimus sed dolor sint\n                iste. Expedita voluptas iste adipisci eos. Impedit dignissimos ratione animi dolorem est.</span></div>\n        <div class="item"><img src="https://i.pinimg.com/236x/d7/fb/60/d7fb60b2321149a83ab5dbe94744ced6.jpg"><span\n                class="title">Fugiat deserunt doloremque molestiae veritatis beatae aut. Eveniet voluptas sunt\n                accusamus. Quis quos hic itaque. Eveniet est repellendus. Odit sed sint. Repellendus est et.</span>\n        </div>\n</div>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[n("strong",[s._v("效果")])]),s._v(" "),n("p",[n("img",{attrs:{src:"column-layout-02.png",alt:"images"}})]),s._v(" "),n("p",[s._v("我们可以看到，虽然实现了"),n("code",[s._v("瀑布流")]),s._v("的效果，但奇怪的是例子中前两列的最后一个元素的"),n("code",[s._v("文本内容")]),s._v("被"),n("code",[s._v("自动断开")]),s._v("，一部分在当前列尾，一部分在下一列的列头。")]),s._v(" "),n("p",[s._v("这种展示方式是我们不希望看到的，我们希望的是每个元素都是独立的，前后不断开，此时我们需要使用"),n("code",[s._v("break-inside")]),s._v("来实现。")]),s._v(" "),n("p",[s._v("break-inside:auto | avoid")]),s._v(" "),n("ul",[n("li",[s._v("auto：元素可以中断")]),s._v(" "),n("li",[s._v("avoid：元素不能中断")])]),s._v(" "),n("p",[s._v("效果实现了，但由于"),n("code",[s._v("multi-column")]),s._v("布局中子元素排列顺序是先"),n("code",[s._v("从上往下")]),s._v("再"),n("code",[s._v("从左至右")]),s._v("，所以这种方式仅适用于数据固定不变的情况，对于滚动加载更多等可动态添加数据的情况就并不适用了。")]),s._v(" "),n("h4",{attrs:{id:"_5-2-grid-布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-grid-布局"}},[s._v("#")]),s._v(" 5.2 grid 布局")]),s._v(" "),n("p",[n("code",[s._v("Grid布局")]),s._v("是最强大的 CSS 布局方案。关于"),n("code",[s._v("Grid布局")]),s._v("可以详情参考"),n("a",{attrs:{href:"https://km.xiaowuzi.info/css/grid.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Grid 布局"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("它将网页划分成一个个网格，可以做生意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了。")]),s._v(" "),n("p",[n("img",{attrs:{src:"column-layout-04.png",alt:"images"}})]),s._v(" "),n("p",[s._v("上图这样的布局，就是 Grid 布局的拿手好戏，因此，我们就可以用"),n("code",[s._v("Grid")]),s._v("来实现"),n("code",[s._v("瀑布流")]),s._v("。")]),s._v(" "),n("p",[s._v("为实现"),n("code",[s._v("瀑布流")]),s._v("先介绍以下几个属性：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("display")]),s._v("：设置为"),n("code",[s._v("grid")]),s._v("指明当前容器为"),n("code",[s._v("Grid布局")])]),s._v(" "),n("li",[n("code",[s._v("grid-template-columns")]),s._v("：定义每一列的列宽")]),s._v(" "),n("li",[n("code",[s._v("grid-template-rows")]),s._v("：定义每一行的行高")]),s._v(" "),n("li",[n("code",[s._v("column-gap")]),s._v("：用于设置画列间距")])]),s._v(" "),n("p",[n("code",[s._v("grid-template-columns")]),s._v("和"),n("code",[s._v("grid-template-rows")]),s._v("，可以使用绝对单位，也可以使用百分比。并且为了表示比例关系，"),n("code",[s._v("Grid")]),s._v("布局提供了"),n("code",[s._v("fr")]),s._v("关键字，如果设置"),n("code",[s._v("1fr")]),s._v("和"),n("code",[s._v("2fr")]),s._v("，表示后者是前者的两倍。")]),s._v(" "),n("p",[n("strong",[s._v("HTML 代码")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<div class="masonry">\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n    <div class="item">4</div>\n    <div class="item">5</div>\n    <div class="item">6</div>\n    <div class="item">7</div>\n    <div class="item">8</div>\n    <div class="item">9</div>\n</div>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[n("strong",[s._v("CSS 代码")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".masonry {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-columns: 1fr 1fr 1fr;\n    column-gap: 5px;\n    height: 540px;\n}\n\n.masonry .item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 3px;\n    border: 1px solid #999;\n    font-size: 40px;\n}\n\n.masonry .item:nth-child(1) {\n    height: 150px;\n    background-color: #ef3429;\n}\n\n.masonry .item:nth-child(2) {\n    height: 160px;\n    background-color: #f68f25;\n}\n\n.masonry .item:nth-child(3) {\n    height: 170px;\n    background-color: #4ba846;\n}\n\n.masonry .item:nth-child(4) {\n    height: 180px;\n    background-color: #0476c2;\n}\n\n.masonry .item:nth-child(5) {\n    height: 140px;\n    background-color: #c077af;\n}\n\n.masonry .item:nth-child(6) {\n    height: 155px;\n    background-color: #f8d29d;\n}\n\n.masonry .item:nth-child(7) {\n    height: 165px;\n    background-color: #b4a87f;\n}\n\n.masonry .item:nth-child(8) {\n    height: 180px;\n    background-color: #d0e4a8;\n}\n\n.masonry .item:nth-child(9) {\n    height: 175px;\n    background-color: #4dc7ec;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br")])]),n("p",[n("strong",[s._v("效果")])]),s._v(" "),n("p",[n("img",{attrs:{src:"column-layout-05.png",alt:"images"}})]),s._v(" "),n("p",[s._v("我们看到高度不同的 div 块分布在每一个单元格内，但没有实现"),n("code",[s._v("瀑布流")]),s._v("的效果。")]),s._v(" "),n("p",[s._v("为实现"),n("code",[s._v("瀑布流")]),s._v("再介绍几个属性：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("grid-row-start")]),s._v("：上边框所在的水平"),n("code",[s._v("网格线")])]),s._v(" "),n("li",[n("code",[s._v("grid-row-end")]),s._v("：下边框所在的水平"),n("code",[s._v("网格线")])]),s._v(" "),n("li",[n("code",[s._v("grid-column-start")]),s._v("：左边框所在的垂平"),n("code",[s._v("网格线")])]),s._v(" "),n("li",[n("code",[s._v("grid-column-end")]),s._v("：右边框所在的垂平"),n("code",[s._v("网格线")])])]),s._v(" "),n("p",[s._v("上面 4 个属性可接收如下值：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("auto")]),s._v("：表示自动放置")]),s._v(" "),n("li",[n("code",[s._v("自定义名称")]),s._v("：可以给予网格线一个名称，并在此处引用")]),s._v(" "),n("li",[n("code",[s._v("网格线索引")]),s._v("：代表第几条网格线")]),s._v(" "),n("li",[n("code",[s._v("span+数字")]),s._v("：表示上下边框或左右跨越多少网格")])]),s._v(" "),n("p",[s._v("实际情况中，"),n("code",[s._v("瀑布流")]),s._v("更多的是为图片展示而服务的，花前月下由于图片是异步请求加载，只有在加载完成后才能获取图片的真实宽高，所以不得不使用 JS 来动态将单元格高度进行拉伸。")]),s._v(" "),n("p",[s._v("伪代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("//  js 代码\nlet img = document.getElementsByTagName('img')[0];\n//image-dom 当前宽度\nlet width = img.width;\n\nlet image = new Image();\nimage.src = 'xxxx.img';\nimage.onload = function(){\n    //图片原宽\n    let w = image.width;\n    //图片原高\n    let h = image.height;\n    //image-dom的真实高度(依据当前宽度及图片真实宽高)\n    let height = Math.round(h * width / w)\n    //设置当前跨越几个网格(每个网格10px)\n    img.style.gridRowEnd = `span ${~~(height/10)}`\n}\n\n// css 代码\n.masonry{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;     //  分为3列\n    column-gap: 5px;    // 列间距5px\n    grid-auto-rows:10px;\n}\n.masonry .item{\n    grid-row-start: auto;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("h4",{attrs:{id:"_5-3-flexbox-布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-flexbox-布局"}},[s._v("#")]),s._v(" 5.3 Flexbox 布局")]),s._v(" "),n("p",[n("code",[s._v("FlexBox")]),s._v("布局到今天已经是使用非常广泛，具体使用参考"),n("a",{attrs:{href:"https://km.xiaowuzi.info/css/flex.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("flex 学习"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("code",[s._v("Flexbox")]),s._v("怎么实现瀑布流布局。")]),s._v(" "),n("p",[n("strong",[s._v("HTML 代码结构")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<div class="masonry">\n    <div class="colmun">\n    </div>\n    <div class="colmun">\n    </div>\n    <div class="colmun">\n    </div>\n</div>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("strong",[s._v("CSS 代码")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".masonry{\n    display:flex;       // 设置为Flex容器\n    flex-direction:row; //  主轴方向设置为水平方向\n}\n\n.masnory .column{\n    display: flex;      // 设置为Flex容器\n    flex-direction: column;     //  主轴方向设置为垂直方向\n    flex: 1;\n    padding: 0 2px;\n}\n.masnory .column .item{\n      margin-bottom: 5px;\n      width: 100%;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[n("strong",[s._v("JS 代码")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let data1 = [], //第一列\n      data2 = [], //第二列\n      data3 = [], //第三列\n      i = 0;\n\nwhile (i < data.length) {\n        data1.push(data[i++]);\n    if (i < data.length) {\n        data2.push(data[i++]);\n    }\n    if (i < data.length) {\n        data3.push(data[i++]);\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[n("strong",[s._v("效果")])]),s._v(" "),n("p",[n("img",{attrs:{src:"column-layout-06.gif",alt:"images"}})]),s._v(" "),n("h3",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("p",[s._v("做瀑布流需要考虑几方面大因素，图片质量，图片大小，加载速度，如果这些不同时满足，会大大降低用户体验。")]),s._v(" "),n("h3",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://juejin.im/post/5ddb7a7c51882573520fb185",target:"_blank",rel:"noopener noreferrer"}},[s._v("「前端进阶」深度解析瀑布流布局"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.im/post/5e05acf0f265da33d158a1b1",target:"_blank",rel:"noopener noreferrer"}},[s._v("蘑菇街 PC 首页瀑布流实践"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/ZweiZhao/p/9783930.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Grid 布局 20 行代码快速生成瀑布流"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"联系作者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[s._v("#")]),s._v(" 联系作者")]),s._v(" "),n("div",{attrs:{align:"center"}},[n("p",[s._v("\n        平凡世界，贵在坚持。\n    ")]),s._v(" "),n("img",{attrs:{src:s.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=e.exports}}]);