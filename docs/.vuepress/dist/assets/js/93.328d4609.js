(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{324:function(a,e,t){"use strict";t.r(e);var r=t(4),v=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"canvas-学习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#canvas-学习","aria-hidden":"true"}},[a._v("#")]),a._v(" canvas 学习")]),a._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("本人平时学习及收集内容，欢迎参入一起讨论。相关代码在"),t("a",{attrs:{href:"https://github.com/ftTony/notes/tree/master/javascript/canvas",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E4%BB%8B%E7%BB%8D"}},[a._v("介绍")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E5%85%BC%E5%AE%B9%E6%80%A7%E5%A4%84%E7%90%86"}},[a._v("兼容性处理")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E7%BB%98%E5%88%B6%E5%BD%A2%E7%8A%B6"}},[a._v("绘制形状")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%92%8C%E9%A2%9C%E8%89%B2"}},[a._v("添加样式和颜色")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E7%BB%98%E5%88%B6%E6%96%87%E6%9C%AC"}},[a._v("绘制文本")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E5%85%AD%E3%80%81%E5%8F%98%E5%BD%A2"}},[a._v("变形")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%83%E3%80%81%E5%90%88%E6%88%90%E4%B8%8E%E8%A3%81%E5%89%AA"}},[a._v("合成与裁剪")])]),a._v(" "),t("li",[t("a",{attrs:{href:"%E5%85%AB%E3%80%81%E5%83%8F%E7%B4%A0%E6%93%8D%E4%BD%9C"}},[a._v("像素操作")])]),a._v(" "),t("li",[t("a",{attrs:{href:"%E4%B9%9D%E3%80%81%E4%BD%BF%E7%94%A8%E5%9B%BE%E7%89%87"}},[a._v("使用图片")])])]),a._v(" "),t("h3",{attrs:{id:"一、介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、介绍")]),a._v(" "),t("p",[t("code",[a._v("<canvas>")]),a._v("是一个可以使用脚本(通常为 JavaScript)来绘制图形的 HTML 元素.例如,它可以用于绘制图表、制作图片构图或者制作简单的(以及不那么简单的)动画.")]),a._v(" "),t("p",[t("code",[a._v("<canvas>")]),a._v(" 最早由 Apple 引入 WebKit，用于 Mac OS X 的 Dashboard，随后被各个浏览器实现。如今，所有主流的浏览器都支持它。")]),a._v(" "),t("h3",{attrs:{id:"二、兼容性处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、兼容性处理","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、兼容性处理")]),a._v(" "),t("h4",{attrs:{id:"_2-1-替换文本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-替换文本","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.1 替换文本")]),a._v(" "),t("p",[a._v("我们在"),t("code",[a._v("<canvas>")]),a._v("标签中提供了替换内容。不支持"),t("code",[a._v("<canvas>")]),a._v("的浏览器将忽略容器在中渲染后备内容。而支持"),t("code",[a._v("<canvas>")]),a._v("的浏览器将会忽略在容器中包含的内容，并且只是正常渲染 "),t("code",[a._v("canvas")]),a._v("。")]),a._v(" "),t("p",[a._v("代码如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('<canvas id="stockGraph" width="150" height="150">\n  current stock price: $3.15 +0.15\n</canvas>\n\n<canvas id="clock" width="150" height="150">\n  <img src="images/clock.png" width="150" height="150" alt=""/>\n</canvas>\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h4",{attrs:{id:"_2-2-检查支持性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-检查支持性","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.2 检查支持性")]),a._v(" "),t("p",[a._v("替换内容是用于在不支持"),t("code",[a._v("<canvas>")]),a._v("标签的浏览器中展示的。通过简单的测试"),t("code",[a._v("getContext()")]),a._v("方法的存在，脚本可以检查编程支持性。代码如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var canvas = document.getElementById('tutorial');\n\nif (canvas.getContext){\n  var ctx = canvas.getContext('2d');\n  // drawing code here\n} else {\n  // canvas-unsupported code here\n}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("h3",{attrs:{id:"三、绘制形状"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、绘制形状","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、绘制形状")]),a._v(" "),t("ul",[t("li",[a._v("绘制矩形")]),a._v(" "),t("li",[a._v("绘制路径")]),a._v(" "),t("li",[a._v("移动笔触")]),a._v(" "),t("li",[a._v("线")]),a._v(" "),t("li",[a._v("图弧")])]),a._v(" "),t("h4",{attrs:{id:"_3-1-绘制矩形"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-绘制矩形","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.1 绘制矩形")]),a._v(" "),t("p",[t("code",[a._v("HTML")]),a._v("中的元素"),t("code",[a._v("canvas")]),a._v("只支持一种原生的图形绘制：矩形。所有其他的图形的绘制都至少需要生成一条路径。")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("fillRect(x,y,width,height)")]),a._v("：绘制一个填充的矩形")]),a._v(" "),t("li",[t("code",[a._v("strokeRect(x,ywidth,height)")]),a._v("：绘制一个矩形的边框")]),a._v(" "),t("li",[t("code",[a._v("clearRect(x,ywidth,height)")]),a._v("：清除指定矩形区域，让清除部分完全透明。")]),a._v(" "),t("li",[t("code",[a._v("rect(x,y,width,height)")]),a._v("：将一个矩形路径增加到当前路径上。绘制一个左上角坐标为(x,y)，宽度为 width 以及 height 的矩形。注：当该方法执行的时候，"),t("code",[a._v("moveTo()")]),a._v("方法自动设置坐标参数"),t("code",[a._v("(0,0)")]),a._v("。也就是说，当前笔触自动重置回默认坐标。")])]),a._v(" "),t("h4",{attrs:{id:"_3-2-绘制路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-绘制路径","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.2 绘制路径")]),a._v(" "),t("p",[a._v("图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同开着的点的集合。一个路径，甚至一个子路径，都是闭合的。使用路径绘制图形需要一些额外的步骤。")]),a._v(" "),t("ol",[t("li",[a._v("首先，你需要创建路径起始点。")]),a._v(" "),t("li",[a._v("然后你使用画图命令去画出路径")]),a._v(" "),t("li",[a._v("之后你把路径封闭。")]),a._v(" "),t("li",[a._v("一旦路径生成，你就能通过搭边或填充路径区域来渲染图形。")])]),a._v(" "),t("p",[a._v("用到的函数：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("beginPath()")]),a._v("：新那一条路径，生成之后，图形绘制命令被指向到路径上生成路径。生成路径的第一步叫做"),t("code",[a._v("beginPath()")]),a._v("。本质上，路径是由很多子路径构成，这些子路径都是在一个列表中，所有的子路径（线、弧形等等）构成图形。而每次这个方法调用之后，列表清空重置，然后我们就可以重新绘制新的图形。")]),a._v(" "),t("li",[t("code",[a._v("closePath()")]),a._v("：闭合路径之后图形绘制命令又重新指向到上下文中。不是必需的。这个方法会通过绘制一条从当前点到开始点的直线来闭合图形。如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做。")]),a._v(" "),t("li",[t("code",[a._v("stroke()")]),a._v("：通过线条来绘制图形轮廓。")]),a._v(" "),t("li",[t("code",[a._v("fill()")]),a._v("：通过填充路径的内容区域生成实心的图形。")])]),a._v(" "),t("h4",{attrs:{id:"_3-3-移动笔触"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-移动笔触","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.3 移动笔触")]),a._v(" "),t("p",[t("code",[a._v("moveTo(x,y)")]),a._v("：将笔触移动到指定的坐标 x 以及 y 上。")]),a._v(" "),t("h4",{attrs:{id:"_3-4-线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-线","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.4 线")]),a._v(" "),t("p",[t("code",[a._v("lineTo(x,y)")]),a._v("：绘制一条从当前位置到指定 x 以及 y 位置的直线")]),a._v(" "),t("h4",{attrs:{id:"_3-5-图弧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-图弧","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.5 图弧")]),a._v(" "),t("p",[a._v("绘制圆弧或者圆，我们使用"),t("code",[a._v("arc()")]),a._v("方法。当然可以使用"),t("code",[a._v("arcTo()")]),a._v("。")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("arc(x,y,radius,startAngle,endAngle)")]),a._v("：画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），从 startAngle 开始到 endAngle 结束，按照 anticlockwise 给定的方向来生成")]),a._v(" "),t("li",[t("code",[a._v("arcTo(x1,y1,x2,y2,radius)")]),a._v("：根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。")])]),a._v(" "),t("h3",{attrs:{id:"四、添加样式和颜色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、添加样式和颜色","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、添加样式和颜色")]),a._v(" "),t("ul",[t("li",[a._v("色彩")]),a._v(" "),t("li",[a._v("透明度")]),a._v(" "),t("li",[a._v("线型样式")]),a._v(" "),t("li",[a._v("渐变")]),a._v(" "),t("li",[a._v("图案样式")]),a._v(" "),t("li",[a._v("阴影")])]),a._v(" "),t("h4",{attrs:{id:"_4-1-色彩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-色彩","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.1 色彩")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("fillStyle = color")]),a._v("：设置图形的填充颜色，需是符合 CSS3 颜色值标准的有效字符串：")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('  ctx.fillStyle = "orange";\n  ctx.fillStyle = "#FFA500";\n  ctx.fillStyle = "rgb(255,165,0)";\n  ctx.fillStyle = "rgba(255,165,0,1)";\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("ul",[t("li",[t("code",[a._v("strokeStyle = color")]),a._v("：设置图形轮廓的颜色。")])]),a._v(" "),t("h4",{attrs:{id:"_4-2-透明度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-透明度","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.2 透明度")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("globalAlpha = transparencyValue")]),a._v("：这个属性影响到"),t("code",[a._v("canvas")]),a._v("里所有图形的透明度，有效的值范围是 0.0（完全透明）到 1.0（完全不透明），默认是 1.0。"),t("code",[a._v("strokeStyle")]),a._v("和"),t("code",[a._v("fillStyle")]),a._v("属性接受符合 CSS3 规范的颜色值，那我们可以用下面的写法来设置具有透明度的颜色。")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('// 指定透明颜色，用于描边和填充样式\nctx.strokeStyle = "rgba(255,0,0,0.5)";\nctx.fillStyle = "rgba(255,0,0,0.5)";\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h4",{attrs:{id:"_4-3-线型样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-线型样式","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.3 线型样式")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("lineWidth = value")]),a._v("：设置线条宽度。")]),a._v(" "),t("li",[t("code",[a._v("lineCap = type")]),a._v("：设置线条末端样式。")]),a._v(" "),t("li",[t("code",[a._v("lineJoin = type")]),a._v("：设定线条与线条间接合处的样式。")]),a._v(" "),t("li",[t("code",[a._v("miterLimit = value")]),a._v("：限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。")]),a._v(" "),t("li",[t("code",[a._v("getLineDeash()")]),a._v("：返回一个饮食当前虚线样式，长度为非负偶数的数组。")]),a._v(" "),t("li",[t("code",[a._v("setLineDash(setgments)")]),a._v("：设置当前虚线样式。")]),a._v(" "),t("li",[t("code",[a._v("lineDashOffset = value")]),a._v("：设置虚线样式的起始移量。")])]),a._v(" "),t("h4",{attrs:{id:"_4-4-渐变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-渐变","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.4 渐变")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("crateLinearGradient(x1,y1,x2,y2)")]),a._v("：该方法接受 4 个参数，表示渐变的起点(x1,y1)与终点(x2,y2)。")]),a._v(" "),t("li",[t("code",[a._v("crateRadialGradient(x1,y1,r1,x2,y2,r2)")]),a._v("：该方法接受 6 个参数，前三个定义一个以(x1,y1)为原点，半径为 r1 的圆，后三个参数则定义另一个以(x2,y2)为原点，半径为 r2 的圆。")]),a._v(" "),t("li",[t("code",[a._v("gradient.addColorStop(position,color)")]),a._v("："),t("code",[a._v("addColorStop")]),a._v(" 方法 2 个参数，"),t("code",[a._v("position")]),a._v("参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置。")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var lineargradient = ctx.createLinearGradient(0,0,150,150);\nlineargradient.addColorStop(0,'white');\nlineargradient.addColorStop(1,'black');\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h4",{attrs:{id:"_4-5-图案样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-图案样式","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.5 图案样式")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("createPattern(image,type)")]),a._v("：该方法接受两个参数。Image 可以是一个 Image 对象的引用，或者另一个"),t("code",[a._v("canvas")]),a._v("对象。Type 必须是下面的字符串值之一：repeat，repeat-x，repeat-y 和 no-repeat。")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var img = new Image()\nimg.src = 'someimage.png'\nvar ptrn = ctx.createPattern(img,'repeat');\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h4",{attrs:{id:"_4-6-阴影"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-阴影","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.6 阴影")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("shadowOffsetX = float")]),a._v("和"),t("code",[a._v("shadowOffsetY = float")]),a._v("：shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y 轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0.")]),a._v(" "),t("li",[t("code",[a._v("shadowBlur = float")]),a._v("：用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也不受变换矩阵的影响，默认为 0.")]),a._v(" "),t("li",[t("code",[a._v("shadowColor = color")]),a._v("：是标准的 CSS 颜色值，用于设定阴影颜色效果，默认是全透明的黑色。")])]),a._v(" "),t("h3",{attrs:{id:"五、绘制文本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、绘制文本","aria-hidden":"true"}},[a._v("#")]),a._v(" 五、绘制文本")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("fillText(text,x,y[,maxWidth])")]),a._v("：在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的。")]),a._v(" "),t("li",[t("code",[a._v("strokeText(text, x, y [, maxWidth])")]),a._v("：在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的。")]),a._v(" "),t("li",[t("code",[a._v("font = value")]),a._v("：肖前我们用来绘制文本的样式，这个字符串使用和 CSS font 属性相同的语法，默认的字体是"),t("code",[a._v("10px sans-serif")]),a._v("。")]),a._v(" "),t("li",[t("code",[a._v("textAlign = value")]),a._v("：描述绘制文本时，文本的对齐方式的属性。可选的值包括："),t("code",[a._v("start")]),a._v(", "),t("code",[a._v("end")]),a._v(", "),t("code",[a._v("left")]),a._v(", "),t("code",[a._v("right")]),a._v(" or "),t("code",[a._v("center")]),a._v(". 默认值是 "),t("code",[a._v("start")]),a._v("。")]),a._v(" "),t("li",[t("code",[a._v("textBaseline = value")]),a._v("：基线对齐选项，可选的值包括："),t("code",[a._v("top")]),a._v("，"),t("code",[a._v("hanging")]),a._v("，"),t("code",[a._v("middle")]),a._v("，"),t("code",[a._v("alphabetic")]),a._v("，"),t("code",[a._v("ideographic")]),a._v("，"),t("code",[a._v("bottom")]),a._v("。默认值 "),t("code",[a._v("alphabetic")]),a._v("。")]),a._v(" "),t("li",[t("code",[a._v("direction = value")]),a._v("：文本方向。可能的值包括："),t("code",[a._v("ltr")]),a._v(","),t("code",[a._v("rtl")]),a._v(", "),t("code",[a._v("inherit")]),a._v("。默认值是 "),t("code",[a._v("inherit")]),a._v("。")])]),a._v(" "),t("h3",{attrs:{id:"六、变形"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、变形","aria-hidden":"true"}},[a._v("#")]),a._v(" 六、变形")]),a._v(" "),t("ul",[t("li",[a._v("状态的的保存和恢复")]),a._v(" "),t("li",[a._v("移动 Translating")]),a._v(" "),t("li",[a._v("旋转 Rotating")]),a._v(" "),t("li",[a._v("缩放 Scaling")]),a._v(" "),t("li",[a._v("变形 Transforms")])]),a._v(" "),t("h4",{attrs:{id:"_6-1-状态的的保存和恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-状态的的保存和恢复","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.1 状态的的保存和恢复")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("save()")]),a._v("：保存画布的所有状态")]),a._v(" "),t("li",[t("code",[a._v("restore()")]),a._v("：save 和 restore 方法是用来保存和恢复 canvas 状态的，都没有参数。Canvas 的状态就是当前画面应用的所有样式和变形的一个快照。")])]),a._v(" "),t("h4",{attrs:{id:"_6-2-移动-translating"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-移动-translating","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.2 移动 Translating")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("translate(x, y)")]),a._v(": "),t("code",[a._v("translate")]),a._v(" 方法接受两个参数。x 是左右偏移量，y 是上下偏移量，如右图所示。")])]),a._v(" "),t("h4",{attrs:{id:"_6-3-旋转-rotating"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-旋转-rotating","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.3 旋转 Rotating")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("rotate(angle)")]),a._v(": 这个方法只接受一个参数：旋转的角度(angle)，它是顺时针方向的，以弧度为单位的值。")])]),a._v(" "),t("h4",{attrs:{id:"_6-4-缩放-scaling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-缩放-scaling","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.4 缩放 Scaling")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("scale(x, y)")]),a._v(": scale 方法可以缩放画布的水平和垂直的单位。两个参数都是实数，可以为负数，x 为水平缩放因子，y 为垂直缩放因子，如果比 1 小，会比缩放图形， 如果比 1 大会放大图形。默认值为 1， 为实际大小。")])]),a._v(" "),t("h4",{attrs:{id:"_6-5-变形-transforms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-变形-transforms","aria-hidden":"true"}},[a._v("#")]),a._v(" 6.5 变形 Transforms")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("transform(m11, m12, m21, m22, dx, dy)")]),a._v(": 这个方法是将当前的变形矩阵乘上一个基于自身参数的矩阵，在这里我们用下面的矩阵：")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("m11 m21 dx\nm12 m22 dy\n0   0   1\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("任意一个参数是无限大，变形矩阵也必须被标记为无限大，否则会抛出异常。")]),a._v(" "),t("p",[a._v("参数各自代表如下：")]),a._v(" "),t("ol",[t("li",[t("code",[a._v("m11")]),a._v("：水平方向的缩放")]),a._v(" "),t("li",[t("code",[a._v("m12")]),a._v("：水平方向的倾斜偏移")]),a._v(" "),t("li",[t("code",[a._v("m21")]),a._v("：竖直方向的倾斜偏移")]),a._v(" "),t("li",[t("code",[a._v("m22")]),a._v("：竖直方向的缩放")]),a._v(" "),t("li",[t("code",[a._v("dx")]),a._v("：水平方向的移动")]),a._v(" "),t("li",[t("code",[a._v("dy")]),a._v("：竖直方向的移动")])]),a._v(" "),t("ul",[t("li",[t("code",[a._v("setTransform(m11, m12, m21, m22, dx, dy)")])]),a._v(" "),t("li",[t("code",[a._v("resetTransform")]),a._v(": 重置当前变形为单位矩阵")])]),a._v(" "),t("h3",{attrs:{id:"七、合成与裁剪"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、合成与裁剪","aria-hidden":"true"}},[a._v("#")]),a._v(" 七、合成与裁剪")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("globalCompositeOperation = type")]),a._v("：这个属性设定了在画新图形时采用的遮盖策略，其值是一个标识 12 种遮盖方式的字符串。")]),a._v(" "),t("li",[t("code",[a._v("clip()")]),a._v("：将当前正在构建的路径转换为当前的裁剪路径。")])]),a._v(" "),t("h3",{attrs:{id:"八、像素操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、像素操作","aria-hidden":"true"}},[a._v("#")]),a._v(" 八、像素操作")]),a._v(" "),t("ul",[t("li",[a._v("createImageData")]),a._v(" "),t("li",[a._v("getImageData")]),a._v(" "),t("li",[a._v("putImageData")]),a._v(" "),t("li",[a._v("保存图片")])]),a._v(" "),t("h4",{attrs:{id:"_8-1-createimagedata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-createimagedata","aria-hidden":"true"}},[a._v("#")]),a._v(" 8.1 createImageData")]),a._v(" "),t("p",[a._v("创建一个新的具体特定尺寸的 ImageData 对象。所有像素被预设为透明黑。你也可以创建一个被"),t("code",[a._v("anotherImageData")]),a._v("对象指定的相同像素的 ImageData 对象。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var myImageData = ctx.createImageData(width, height);\nvar myImageData = ctx.createImageData(anotherImageData)\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h4",{attrs:{id:"_8-2-getimagedata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-getimagedata","aria-hidden":"true"}},[a._v("#")]),a._v(" 8.2 getImageData")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var myImageData = ctx.getImageData(left, top, width, height);\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("这个方法会返回一个 ImageData 对象，它代表了画面区域的对象数据，此画面的四个角落分别表示为(left,top), (left + width, top), (left, top + height), 以及(left + width, top + height)四个点。这些坐标点被设定为画布坐标空间元素。")]),a._v(" "),t("h4",{attrs:{id:"_8-3-putimagedata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-putimagedata","aria-hidden":"true"}},[a._v("#")]),a._v(" 8.3 putImageData")]),a._v(" "),t("p",[t("code",[a._v("ctx.putImageData(myImageData, dx, dy);")]),a._v("： 你可以用 putImageData()方法去对场景进行像素数据的写入。dx 和 dy 参数表示你希望在场景内左上角绘制的像素数据所得到的设备坐标。")]),a._v(" "),t("h4",{attrs:{id:"_8-4-保存图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-保存图片","aria-hidden":"true"}},[a._v("#")]),a._v(" 8.4 保存图片")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("canvas.toDataURL('image/png')")]),a._v("： 默认设定。创建一个 PNG 图片")]),a._v(" "),t("li",[t("code",[a._v("canvas.toDataURL('image/jpeg', quality)")]),a._v("： 创建一个 JPG 图片。你可以有选择地提供从 0 到 1 的品质量，1 表示最好品质，0 基本不被辨析但有比较小的文件大小。当你从画布中生成了一个数据链接，例如，你可以将它用于任何"),t("code",[a._v("<image>")]),a._v("元素，或者将它放在一个有 download 属性的超链接里用于保存到本地。")]),a._v(" "),t("li",[t("code",[a._v("canvas.toBlob(callback, type, encoderOptions)")]),a._v(": 这个创建了一个在画布中的代表图片的 Blob 对像。")])]),a._v(" "),t("h3",{attrs:{id:"九、使用图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#九、使用图片","aria-hidden":"true"}},[a._v("#")]),a._v(" 九、使用图片")]),a._v(" "),t("p",[a._v("引入图像到 canvas 里需要以下两步基本操作：")]),a._v(" "),t("ol",[t("li",[a._v("获得一个指向"),t("code",[a._v("HTMLImageElement")]),a._v("的对象或者另一个 canvas 元素的引用作为源，也可以通过提供一个 URL 的方式来使用图片")]),a._v(" "),t("li",[a._v("使用"),t("code",[a._v("drawImage()")]),a._v("函数将图片绘制到图片上")])]),a._v(" "),t("ul",[t("li",[a._v("绘制图片")]),a._v(" "),t("li",[a._v("缩放图片")]),a._v(" "),t("li",[a._v("切片")])]),a._v(" "),t("h4",{attrs:{id:"_9-1-绘制图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-绘制图片","aria-hidden":"true"}},[a._v("#")]),a._v(" 9.1 绘制图片")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("drawImage(image, x, y)")]),a._v("：其中"),t("code",[a._v("images")]),a._v("是 image 或者 canvas 对象，"),t("code",[a._v("x")]),a._v("和"),t("code",[a._v("y")]),a._v("是其在目标"),t("code",[a._v("canvas")]),a._v("里的起始坐标。")])]),a._v(" "),t("h4",{attrs:{id:"_9-2-缩放图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-缩放图片","aria-hidden":"true"}},[a._v("#")]),a._v(" 9.2 缩放图片")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("drawImage(image, x, y, width, height)")]),a._v("：参数"),t("code",[a._v("width")]),a._v("和"),t("code",[a._v("height")]),a._v("，这两个参数用来控制当向 canvas 画入时应该缩放的大小")])]),a._v(" "),t("h4",{attrs:{id:"_9-3-切片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-切片","aria-hidden":"true"}},[a._v("#")]),a._v(" 9.3 切片")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)")]),a._v("：第一个参数是一个图像或另一个 canvas 的引用。其它 8 个参数最好是参照右边的图解，前 4 个是定义图像源的切片位置和大小，后 4 个则是定义切片的目标显示位置和大小。")])]),a._v(" "),t("p",[t("img",{attrs:{src:"canvas-img.jpg",alt:"images"}})]),a._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://juejin.im/post/5ba478136fb9a05d151ca173",target:"_blank",rel:"noopener noreferrer"}},[a._v("Canvas 性能优化"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/CodeLittlePrince/blog/issues/21",target:"_blank",rel:"noopener noreferrer"}},[a._v("canvas-应用大全"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/7tyqEWX0xJkDUJX_zYVLIw",target:"_blank",rel:"noopener noreferrer"}},[a._v("【第 513 期】Canvas 最佳实践（性能篇）"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5df2e8ab6fb9a0163770816d",target:"_blank",rel:"noopener noreferrer"}},[a._v("高质量前端快照方案：来自页面的「自拍」"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/81863157",target:"_blank",rel:"noopener noreferrer"}},[a._v("Canvas 超全教程"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_usage",target:"_blank",rel:"noopener noreferrer"}},[a._v("MDN 教程"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"联系作者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),t("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);e.default=v.exports}}]);