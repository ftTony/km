# 前端基础篇之 CSS 世界（转载）

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 基本概念
- 盒模型四大金刚
- 好基友`line-height`和`vertical-align`
- 流的破坏
- 层叠规则
- 文本控制
- 元素的显示与隐藏
- 弹性布局
- 网格布局

### 一、基本概念

- 流
- 块级元素和内联元素
- width: auto 和 height: auto
- 外在盒子和内在盒子

#### 1.1 流

**“流”又叫文档流，是 css 的一种基本定位和布局机制。**流是 html 的一种抽象概念，暗喻这种排列布局方式好像水流一样自然自动。“流体布局”是 html 默认的布局机制，如你写的 html 不用 css，默认自上而下（块级元素如`div`）从左到右（内联元素如`span`）堆砌的布局方式。

#### 1.2 块级元素和内联元素

块级元素是指单独撑满一行的元素，如 `div、ul、li、table、p、h1` 等元素。这些元素的 `display` 值默认是 `block、table、list-item` 等。

内联元素又叫行内元素，指只占据它对应标签的边框所包含的空间的元素，这些元素如果父元素宽度足够则并排在一行显示的，如 `span、a、em、i、img、td` 等。这些元素的 `display` 值默认是 `inline、inline-block、inline-table、table-cell` 等。

实际开发中，我们经常把 `display` 计算值为 `inline inline-block inline-table table-cell` 的元素叫做内联元素，而把 `display` 计算值为 `block` 的元素叫做块级元素。

#### 1.3 `width: auto` 和 `height: auto`

`width`、`height`的默认值都是`auto`。

对于块级元素，流体布局之下`width:auto`自适应撑满父元素宽度。这里的撑满并不同`width:100%`的固定宽度，而是像水一样能够根据`margin`不同而自适应父元素的宽度。

对于内联元素，`width:auto`则呈现出包裹性，即由子元素的宽度决定。

无论内联元素还是块级元素，`height:auto`都是呈现包裹性，即高度由子级元素撑开。

注意父元素`height: auto`会导致子元素`height: 100%`百分比失效。

css 的属性非常有意思，正常流下，如果块级元素的`width`是个固定值，`margin`是`auto`，则 `margin`会撑满剩下的空间；如果`margin`是固定值，`width` 是 `auto`，则 `width` 会撑满剩下的空间。这就是流体布局的根本所在。

#### 1.4 外在盒子和内在盒子

外在盒子是决定元素排列方式的盒子，即决定盒子具有块级特性还是内联特性的盒子。外在盒子负责结构布局。

内在盒子是决定元素内部一些忏悔是否生效的盒子。内在盒子负责内容显示。

如`display:inline-table;`外在盒子就是`inline`，内在盒子就是`table`。外在盒子决定了元素要像内联元素一样并排在一排显示，内在盒子则决定了元素可以设置宽高、垂直方向的 margin 等属性。如下图

![images](box01.png)

右侧的 table 和左侧的文字在一行排列（外在盒子 inline 的表现特征），同时有拥有自定义宽度 111px（内在盒子 table 可以设置宽高）。

#### 1.5 css 权重和超越`!important`

参考[css 选择器](https://km.xiaowuzi.info/css/select.html)

#### 1.6 盒模型（盒尺寸）

元素的内在盒子是由`margin box`、`border box`、`padding box`、`content box`组成的，这四个盒子由外到内构成了盒模型。

IE 模型：`box-sizing:border-box`此模式下，元素的宽度计算为`border+padding+content`的宽度总和。

W3C 标准模型：`box-sizing:content-box`此模式下，元素的宽度计算为`content`的宽度。

由于`content-box`在计算宽度的时候不包含`broder padding`很烦人，而且又是默认值，业内一般采用以下代码重置样式：

```
:root {
  box-sizing: border-box;
}
* {
  box-sizing: inherit;
}

```

#### 1.7 内联盒模型

内联元素是指外在盒子是内联盒子的元素。从表现来说，内联元素的典型特征就是可以和文字在一行显示。文字也是内联元素。图片、按钮、输入框、下拉框等替换元素也是内联元素。内联盒模型是指内联元素包含的几个盒子，理解记忆下面的几个概念对 css 的深入学习极其重要。

1. 内容区域：本质上就是字符盒子。在浏览器中，文字选中状态的背景色就是内容区域。
2. 内联盒子：内联盒子就是指元素的外在盒子是内联的，会和其他内联盒子排成一行。
3. 行框盒子：由内联元素组成的每一行都是一个行框盒子。如果一行里面没有内联元素如一个空的`div`标签，则不会形成行框盒子。行框盒子由一个个内联盒子组成，如果换行，那就是两个行框盒子。比如一个包含了很多字符的换行的的`p`标签，每一行都存在一个行框盒子。值得注意的是，如果给元素设置`display: inline-block`，则创建了一个独立的行框盒子。`line-height` 是作用在行框盒子上的，并最终决定高度。
4. 包含盒子：就是包含块。多行文字组成一个包含块，一个包含块有若干个行框盒子。
5. 幽灵空白节点：内联元素的每个行框盒子前面有一个“空白节点”，这个“空白节点”不占据任何宽度，无法选中获取，但是又实实在在存在，表现就如同文本节点一样（本文中大量例子会用字母 x 模拟幽灵空白节点）。

#### 1.8 替换元素

替换元素是指内容可以替换的元素，实际上就是`content box`可以被替换的元素。如存在`src=""`属性的`<img><audio><iframe>`元素和可以输入文本的`<input><select><textarea>`元素等。

所有替换元素都是内联元素，默认`display`属性是`inline`或`inline-block`(除了`input[type="hidden"]`默认`display:none;`)。

替换元素有自己默认的样式、尺寸（根据浏览器不同而不同），而且其`vertical-align`属性默认是`bottom`（非替换元素默认值是`baseline`）。

#### 1.9 css 的继承机制

参见

### 二、盒模型四大金刚

- content
- padding
- margin
- border

#### 2.1 content

对于非替换元素如`div`，其`content`就是 div 内部的元素。而对于替换元素，其`content`就是可替换部分的内容。

CSS 中的`content`属性主要用于伪元素`:before/:after`中，除了做字体库或少写个 div，对于一般开发来说并无卵用。

#### 2.2 padding

`padding`是四大金刚中最稳定的了，少见有什么异常。尽管如此还是有些需要注意的地方：

1. 大部分情况下我们会将元素重置为`box-sizing:border-box`，宽高的计算是包含了`padding`的，给人一种`padding`也是`content box`一部分的感觉，好像`line-height`属性也作用于`padding`上。但实际上，元素真正的内容的宽高只是`content box`的宽高，而`line-height`属性是不作用于`padding`的。

![images](padding.png)

2. `padding`不可为负值，但是可以为百分比值。为百分比时水平和垂直方向的`padding`都是相对于父级元素宽度计算的。将一个`div`设为`padding:100%`就能得到一个正方形，`padding:10% 50%`可以得到一个宽高比 5:1 的矩形。

```
body {
  width: 400px;
}
.box {
  padding: 10% 50%;
}

```

![images](padding01.png)

3. `padding`配合`background-clip`属性，可以制作一些特殊形状：

```
/*三道杠*/
.icon1 {
  box-sizing: border-box;
  display: inline-block;
  width: 12px;
  height: 10px;
  padding: 2px 0;
  border-top: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  background: currentColor; /*注意如果此处背景颜色属性用缩写的话，需要放到其他背景属性的前面，否则会覆盖前面的属性值（此处为background-clip）为默认值*/
  background-clip: content-box;
}
/*双层圆点*/
.icon2 {
  display: inline-block;
  width: 12px;
  height: 12px;
  padding: 2px;
  border: 2px solid currentColor;
  border-radius: 50%;
  background-color: currentColor;
  background-clip: content-box;
}
```

预览如下：

![images](padding02.png)

#### 2.3 margin

1. 作为外边距，`margin`属性并不会参与盒子宽度的计算，但通过设置`margin`为负值，却能改变元素水平方向的尺寸：

```
<div>asdf</div>
<style>
  div {
    margin: 0 -100px;
  }
</style>
```

此时`div`元素的宽度是比父级元素的宽度大`200px`的。但是这种情况咐发生元素是流布局的时候，即元素`width`是默认的`auto`并且可以撑满一行的时候。如果元素设定了宽度，或者元素设置了`float:left`/`position:absolute`这样的属性改变了流体布局，那么`margin`为负也无法改变元素的宽度了。

2. 块级元素的垂直方向会发生`margin`合并，存在以下三种场景：

- 相邻兄弟元素之间`margin`合并；
- 父元素`margin-top`和子元素`margin-top`，父元素`margin-bottom`和子元素`margin-bottom`;
- 空块元素自身的`margin-top`和`margin-bottom`合并

要阻止`margin`合并，可以使用以下方法

- 把元素放到`bfc`中；
- 设置`border`或`padding`阻隔`margin`;
- 用内联元素阻隔；
- 给父元素设定高度

3. `margin`的百分比值跟`padding`一样，

```
<div class="box">
  <div></div>
</div>
<style>
  .box{
    overflow: hidden;
    background-color: lightblue;
  }
  .box > div{
    margin: 50%;
  }
</style>
```

4. `margin: auto`能在块级元素设定宽高之后自动填充剩余宽高。

#### 2.4 border

`border`主要作用是做边框。`border-style`属性的值有`none/solid/dashed/dotted/double`等，效果如下：

![images](border01.png)

`border-width`属性的默认值是`3px`，值得注意的是，`border-color`默认是跟随字体的颜色，相当于默认设置了`border-color: currentColor`一样。

`border`另一广受欢迎的功能就是图形构建，特别是做应用广泛的三角形，其原理可看下图

```
div{
    float:left;
    margin:20px;
}
div:nth-child(1){
    width:20px;
    height:20px;
    border:20px solid;
    border-color:blue red orange green;
}
div:nth-child(2){
  width: 20px;
  height: 20px;
  border: 20px solid;
  border-color: blue transparent transparent transparent;
}
div:nth-child(3){
  border: 20px solid;
  border-color: blue transparent transparent transparent;
}
div:nth-child(4){
  border-style: solid;
  border-width: 40px 20px;
  border-color: blue transparent transparent transparent;
}
div:nth-child(5){
  border-style: solid;
  border-width: 40px 20px;
  border-color: blue red transparent transparent;
}
```

![images](border02.png)

其实就是将其他三个边框的颜色设置透明，并把宽高设为 0。是通过调整边框宽度和颜色调整三角形的形状，把最后一个图的红色改为蓝色，则是一个直角三解开了。

### 三、好基友`line-height`和`vertical-align`

- 字母 x 的角色
- line-height
- vertical-align

#### 3.1 字母 x 的角色

在内联元素的垂直方向对齐中，基线是最为重要的概念。`line-height`定义的就是两基线之间的距离，`vertical-align`的默认值就是基线。基线定义是字母 x 的下边缘。

css 中有个概念叫`x-height`，指的是小写字母 x 的高度。`vertical-align:middle`对齐的就是基线往上 1/2`x-height`高度的地方，可以理解为近似字母 x 的交叉点。

css 中除了`px/em/rem`等，还有个单位是`ex`。指的就是小写字母 x 的高度，即`x-height`。

#### 3.2 line-height

属性值：

- `normal`：默认值`normal`其实是类型为数值的变量，根据浏览器和字体`font-family`不同而不同，一般约为 1.2。
- 数值和百分比：最终会被计算为带单位的值，具体计算方法就是乘以字体大小`font-size`。
- 长度值：就是`100px`这样带单位的值。

这几类值的继承特性不同：`line-height`是数值的元素的子元素继承的就是这个数值，百分比/长度值继承的都是计算后得出的带单位的值（px）。

`line-height`的作用

`line-height`属性用于设置多行元素的空间量，如多行文本的间距。

对块级元素来说，`line-height`决定了**行框盒子**的最小高度。注意是行框盒子的最小高度，而不是块级元素的实际高度。（图中两个 `div` 行高一样，`div.one` 的背景色区域就是行框盒子的高度，而 `div.two` 的背景区域则是实际高度，其行框盒子高度和 `div.one` 是一样的。）

![images](line-height01.png)

对于非替代的 inline 元素，它用于计算行框盒子的高度。此时内联元素的行框盒子的高度完全由`line-height`决定，不受其他任何属性的影响。

![images](line-height02.png)

`line-height`实现垂直居中的本质：行距

行距是指一行文本和相邻文本之间的距离。行距=`line-height`-`font-size`。行距具有上下等分的机制：意思就是文字上下的行距是一样的，各占一半，这也是`line-height`能让内联元素垂直剧中的原因。下图中字线 x 上下行距各占一半，共同撑起了`div`。

![images](line-height03.png)

下图中和上图唯一不同之处就是多了个 `display: inline-block` 的 `span` 元素，但是此处的 `span` 元素并没有影响 `div` 元素的高度，而只是靠着 `vertical-align: middle` 属性将自身中心点对齐了字母 x 的交叉点实现垂直居中而已。`div` 元素的高度仍然和上图一模一样，由字母 x 和行距共同撑起。此时如果删除字母 x，`div` 的高度不变，因为 `span` 元素的行框盒子前会产生幽灵空白节点，而幽灵空白节点+行高也能撑起 `div`。

![images](line-height04.png)

内联元素的大值特性

无论内联元素的`line-height` 如何设置，最终父元素的高度都是数值大的那个 `line-height` 决定的。

#### 3.3 vertical-align

属性值：

- 线类：如`baseline(默认值)`、`top`、`middle`、`bottom`（`baseline`使元素的基线与父元素的基线对齐，`middle`使元素的中部与父元素的基线往上`x-height`的一半对齐。` top``bottom `使元素及其后代元素的询问与整行或整块的底部对齐。）
- 文本类：`text-top` `text-bottom`(使元素的顶部与父元素的字体顶部对齐。)
- 上标下标：` sub``super `（使元素的基线与父元素的下标基线对齐。）
- 数值：` 20px``2em `（默认值`basline`相当于数值的 0。使元素的基线对齐到父元素的基线之上的给定长度，数值正值是基线往上偏移，负值是往下偏移，借此可以实现元素垂直方向精确对齐。）
- 百分比：`20%`（使元素的基线对齐到父元素的基线之上的给定百分比。该百分比是 line-height 属性的百分比。）

`vertical-align`的作用前提

**vertical-align 属性起作用的前提必须是作用在内联元素上。**即`display`计算值为`inline`、`inline-block`、`inline-table`、`table-cell`的元素。所以如果元素设置了`float:left`或者`position:absolute`，则其`vertical-align`属性不能生效，因为此时元素的`display`计算值为`block`了。

好基友`line-height`、`vertical-align`和第三者幽灵空白节点的爱恨情仇

有时候会遇到下面这样的高度和设置不一致的情况：

![images](vertical-align.png)

`div`的实际高度比设定的行高大了，为什么呢？

内联元素的默认对齐方式是`baseline`，所以此时`span`元素的基线和父元素的基线相对齐的，而此时父元素的基线在哪呢？

父元素的基线其实就是行框盒子前的幽灵空白节点的基线，把幽灵空白节点具象化为字母`x`可能容易理解些：

由于`div`行高是`30px`，所以字母`x`和`span`元素的高度都是`30px`。但是字母 x 的`font-size`较小，`span`元素的`font-size`较大，而行高一样的情况下`font-size`越大基线的位置越偏下，所以两者的基线不在同一水平线上。如下图左边部分：

![images](vertical-align01.png)

由于内联元素默认基线对齐，所以字母`x`和`span`元素发生了位移以使得基线对齐，导致`div`高度变大。而此时字母`x`的半行距比`span`元素的半行距大，大出的部分就是`div`的高度增加的部分。

`display:inline-block`基线不同之处

一个设置了`display:inline-block`的元素：

1. 如果元素内部没有内联元素，则该元素基线就是该元素下边缘；
2. 如果元素设置了`overflow`为`hidden auto scroll`，则其基线就是该元素下边缘；
3. 如果元素内部还有一内联元素，则其基线就是内部最后一行内联元素的基线。

解决问题

间隙产生本质上是由基线对齐引发的错位造成的，源头上是`vertical-align`和`line-height`共同造成的，所以要想解决这个问题，只要直接或间接改造两个属性中的一个就行了：

1. 给元素设置块状化`display:block`使`vertical-align`属性失败；
2. 尝试不同的`vertical-align`值如`bottom/middle/top`;
3. 直接修改`line-height`值；
4. 如果`line-height`为相对值如`1.4`，设置`font-size:0`间接改变`line-height`。

### 四、流的破坏

现在 UI 框架横行的年代，我们的 css 写的越来越少了。这对于很多老鸟来说是件好事，但是对于初入前端的小白却未必。因为写的少了，就少了很多练手和总结的机会，对于很多样式理解就不透彻。本章介绍的`float`、`position` 和 `BFC` 对于前端页面布局非常重要，希望诸位看官们静下心来仔细研读

#### 4.1 `float`属性的特性

`float`属性应该是 css 世界最令人意外的属性了，倒不是因为他的表现，而是他的设计初衷竟然只是为了实现“文字环绕图片”的效果。只不过因为`float`属性的一些特性，才导致其被到处使用以致于产生了诸多不利于维护的页面。下面看看`float`属性的特性：

1. 包裹性：即此时元素`width`会像`height`一样由子元素决定，而不是默认撑满父元素。
2. 块状化并格式化上下文：这就是 BFC 特性。块状是指元素设置`float:left`之后，其`display`的计算值就成了`block`。格式化上下文是指会创建一个 BFC。
3. 没有任何`margin`合并；
4. 脱离文档流：`float`设计的初衷就是为了“文字环绕”效果，为了让文字环绕图片，就需要具备两个条件。第一是元素高度坍塌，第二是选框盒子不可与浮动元素重叠。而元素高度坍塌就是导致元素后面的非浮动块元素会和其重叠，于是他就像脱离文档流了。

前三个特性都是正能量满满，但是最后一个特性却给我们开发者带来了很多麻烦，需要用到 clear 来清除浮动。

#### 4.2 `clear` 的作用和不足

大家都知道`clear:boath`可以清除前面浮动元素的浮动，但实际上，他并不是真的清除了浮动。

`clear`的定义是：元素盒子的边不能与前面的浮动元素相邻。也就是虽然浮动元素高度坍塌，但是设置了`clear:both`的元素却将其高度视为仍然占据位置。

`clear`只能作用于块级元素，并且其并不能解决后面元素可能发生的文字环绕问题。

#### 4.3 BFC 块级格式化上下文

参考[BFC 原理](https://km.xiaowuzi.info/css/bfc.html)

#### 4.4 绝对定位`position: absolute`

和浮动元素一样，绝对定位也是具有块状化、BFC、包裹性、脱离文档流、没有`margin`合并的特性。

但和浮动不同的是，绝对定位是完全的脱离文档流。大家还刻浮动产生的目的就是为了实现文字环绕效果，所以浮动元素虽然脱离了文档流，但是后面的文字还是会环绕在浮动元素周围。而绝对定位一但产生，就不会再对周围元素产生任何影响。

而且两者包含块不同，浮动元素包含只能是父级元素，绝对定位的包含块则是距离最近的`position`不为`static`的祖先元素。

- 无依赖绝对定位

大多数乃至绝对定位的时候，都是存在包含块和`left/top`等方向属性的。但其实`position:absolute`是非常独立的 css 属性，其样式和行为表现不依赖任何 css 属性就可以完成。

无依赖的 `position: absolute` 元素定位的位置和其本身无定位属性时候的位置和 `display` 的值有关。如果元素在没有 `position` 的情况下是内联元素，则和内联元素在同一行显示；如果元素在没有 `position` 属性的情况下是块级元素，则换行显示。

- 绝对定位和`overflow:hidden`

其实一句话就是可以表示两者之间的关系：当`overflow:hidden`元素在绝对定位元素和其包含块之间的时候，绝对定位元素不会被剪裁。

以下两种绝对定位元素不会被剪裁:

```
<div style="overflow: hidden;">
  <img src="big.jpg" style="position: absolute;">
</div>
<div style="position: relative;">
  <div style="overflow: hidden;">
    <img src="big.jpg" style="position: absolute;">
  </div>
</div>
```

以下两种绝对定位元素会被剪裁：

```
<div style="overflow: hidden; position: relative;">
  <img src="big.jpg" style="position: absolute;">
</div>
<div style="overflow: hidden;">
  <div style="position: relative;">
    <img src="big.jpg" style="position: absolute;">
  </div>
</div>
```

- `postion:absolute`的流体特性

当绝对定位元素的水平方向(`left/right`)或垂直方向(`top/bottom`)的两个定位属性同时存在的时候，绝对元素在该方向上便具有了流体特性。此时的 `width/height` 属性具有自动撑满的特性，和一个正常流的 `div` 元素的 `width` 属性别无二致。如图，设置了固定 `margin` 值的元素，宽高 `auto` 能够自动适应剩余空间：

![images](position01.png)

同样的，设置了固定宽高的元素，如果 `margin: auto`，则 `margin` 平分剩余空间导致垂直水平居中：

![images](position02.png)

#### 4.5 固定定位 `position: fixed`

`position:fixed`是相对于屏幕视口的位置来指定元素位置，祖先元素设置`position:relative`并不会对其产生影响。

`position:fixed`只有一个要注意的点，那就是当元素祖先的`transform`属性非`none`时，容器由视口改为该祖先，代码如下：

```
body {
  border: 1px dashed;
}

main {
  height: 200px;
  margin: 50px;
  border: 1px solid;
  transform: scale(1);
}

div {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100px;
  height: 100px;
  background: cyan;
}

<main>main
    <div>div</div>
</main>
```

效果如下：

![images](fixed.png)

#### 4.6 粘性定位`position: sticky`

```
#one{position:sticky;top:10px;}
```

在 viewport 视口滚动到元素 top 距离小于 10px 之前，元素为相对定位。之后，元素将固定在与顶部距离 10px 的位置，直到 viewport 视口回滚到阈值以下。

需注意当`position:sticky`的父元素的`overflow`属性设置了默认值`visible`以外的值时，`position:sticky`将失效。

`position: sticky` 除了不兼容 ie 浏览器，其他还好。

### 五、层叠规则

参考：[结构与层叠](https://km.xiaowuzi.info/css/stack.html)

### 六、文本控制

#### 6.1 `::first-letter`应用实例

`first-letter`选中首个字符

```
<style>
p{
  font-weight: bold;
  font-size: 22px;
}
p::first-letter{
  font-size: 44px;
  color: red;
}
</style>

<p>￥ 1000</p>
```

#### 6.2 `text-transform` 应用

假设有个输入框只能输入大写字母，那么如下设置，输入小写字母出现的却是大写字母，可用于身份证输入框或验证码输入框等：

取值：

- `none：` 无转换
- `capitalize：` 将每个单词的第一个字母转换成大写
- `uppercase：` 将每个单词转换成大写
- `lowercase：` 将每个单词转换成小写
- `full-width：` 将所有字符转换成 fullwidth 形式。如果字符没有相应的 fullwidth 形式，将保留原样。这个值通常用于排版拉丁字符和数字等表意符号。

```
  input {
    text-transform: uppercase;
  }
```

#### 6.3 `word-spacing` 空格间隙

如果一段文字中没有空格，则该属性无效。下面代码设定空格间隙是`20px`，也就是说空格现在占据的宽度是原有的空格宽度+`20px`的宽度：

```
<p>我有空 格，我该死......</p>
<style>
  p {
    word-spacing: 20px;
  }
</style>

```

#### 6.4 `white-space` 空白处理

如果在 html 中输入多个空白符，默认会被当成一个空白符处理，实际上就是这个属性控制的：

- `normal`：合并空白符和换行符；
- `nowrap`：合并空白符，但不许换行；
- `pre`：不合并空白符，并且只在有换行地方换行；
- `pre-wrap`：不合并空白符，允许换行符换行和文本自动换行；

#### 6.5 `text-align: justify`

### 七、元素的显示与隐藏

元素的显示隐藏方法很多，不同方法的在不同的场景下页面效果不一，对页面的性能也有不同的影响。

#### 7.1 元素隐藏方法总结

1. 如果希望元素不可见、不占据空间、资源会加载、DOM 可访问：`display:none`;
2. 如果希望元素不可见、不能点击、但占据空间、资源会加载，可以使用：`visibility:hidden`;
3. 如果希望元素不可见、不占据空间、显隐时可以又 transition 淡入淡出效果

```
div{
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: opacity .5s linear;
  background: cyan;
}
div.active{
  visibility: visible;
  opacity: 1;
}
```

这里使用`visibility: hidden`而不是`display: none`，是因为`display: none`会影响 css3 的`transition`过渡效果。 但是`display: none`并不会影响 css`animation`动画的效果。

4. 如果希望元素不可见、可以点击、占据空间，可以使用：`opacity:0`;
5. 如果希望元素不可见、可以点击、不占据空间，可以使用：`opacity: 0; position: absolute;`;
6. 如果希望元素不可见、不能点击、占据空间，可以使用： `position: relative; z-index: -1;`；
7. 如果希望元素不可见、不能点击、不占据空间，可以使用：`position: absolute ; z-index: -1;`；

#### 7.2 `display: none` 与 `visibility: hidden` 的区别

1. `display:none`的元素不占据任何空间，`visibility:hidden`的元素空间保留；
2. `display:none`会影响 css3 的`transition`过渡效果，`visibility:hidden`不会；
3. `display: none` 隐藏产生重绘 ( repaint ) 和回流 ( relfow )，`visibility: hidden` 只会触发重绘；
4. 株连性：`display: none` 的节点和子孙节点元素全都不可见，`visibility: hidden` 的节点的子孙节点元素可以设置 `visibility: visible` 显示。`visibility: hidden` 属性值具有继承性，所以子孙元素默认继承了 `hidden` 而隐藏，但是当子孙元素重置为 `visibility: visible` 就不会被隐藏。

### 八、弹性布局

弹性布局是指 display: flex 或 display: inline-flex 的布局。注意，设为弹性布局以后，子元素的 float、clear、vertical-align 属性都会失效。

参考：[flex 学习](https://km.xiaowuzi.info/css/flex.html)

### 九、网格布局

参考：[grid 布局](https://km.xiaowuzi.info/css/grid.html)

### 参考资料

- [前端基础篇之 CSS 世界](https://juejin.im/post/5ce607a7e51d454f6f16eb3d)
- 《CSS 世界》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
