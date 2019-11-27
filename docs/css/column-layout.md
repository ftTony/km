# 几种常见的 CSS 布局（转载）

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 单列布局
- 两列自适应布局
- 三栏布局
- 等高布局
- 粘连布局

### 一、单列布局

![images](layout01.png)

常见的单列布局有两种：

- `header.content`和`footer`等宽的单列布局
- `header与`footer`等宽`content`略窄的单列布局

### 1.1 如何实现

```
<div class="header"></div>
<div class="content"></div>
<div class="footer"></div>
```

```
.header{
    margin:0 auto;
    max-width:960px;
    height:100px;
    background-color:blue;
}
.content{
    margin:0 auto;
    max-width:400px;
    height:400px;
    background-color:aquemarine;
}
.footer{
    margin:0 auto;
    max-width:960px;
    height:100px;
    background-color:aqua;
}
```

对于第二种，header、footer 的内容宽度不设置，块级元素充满整个屏幕，但 header、conter 和 footer 的内容区设置同一个 width，并通过 margin:auto 实现居中。

```
<div class="header">
    <div class="nav"></div>
</div>
<div class="content"></div>
<div class="footer"></div>
```

```
.header{
    margin:0 auto;
    max-width: 960px;
    height:100px;
    background-color: blue;
}
.nav{
    margin: 0 auto;
    max-width: 800px;
    background-color: darkgray;
    height: 50px;
}
.content{
    margin: 0 auto;
    max-width: 800px;
    height: 400px;
    background-color: aquamarine;
}
.footer{
    margin: 0 auto;
    max-width: 960px;
    height: 100px;
    background-color: aqua;
}
```

### 二、两列自适应布局

**两列自适应布局是指一列由内容撑开，另一列撑满剩余宽度的布局方式**

#### 2.1 float+overflow:hidden

如果是普通的两列布局，**浮动+普通元素的**margin 便可以实现，但如果是自适应的两列布局，利用`float+overflow:hidden`便可以实现，这种办法主要通过`overflow`触发`BFC`不会重叠浮动元素。由于设置`overflow:hidden`并不会触发 IE6-浏览的 haslayout 属性，所以需要调协`zoom:1`来兼容 IE6-浏览器。具体代码如下：

```
<div class="parent" style="background-color: lightgrey;">
    <div class="left" style="background-color: lightblue;">
        <p>left</p>
    </div>
    <div class="right"  style="background-color: lightgreen;">
        <p>right</p>
        <p>right</p>
    </div>
</div>
```

```
.parent {
  overflow: hidden;
  zoom: 1;
}
.left {
  float: left;
  margin-right: 20px;
}
.right {
  overflow: hidden;
  zoom: 1;
}
```

**注意点:如果侧边栏在右边时，注意渲染顺序。即在 HTML 中，先写侧边栏后写主内容**

#### 2.2 Flex 布局

Flex 布局，也叫弹性盒子布局，区区简单几行代码就可以实现各种页面的布局。

```
.parent{
    display:flex;
}
.right{
    margin-left:20px;
    flex:1;
}
```

#### 2.3 grid 布局

Grid 布局，是一个基于网格的二维布局系统，目的是用来优化用户界面设计。

```
.parent{
    display:grid;
    grid-template-columns:auto 1fr;
    grid-gap:20px;
}
```

### 三、三栏布局

**特征：中间列自适应宽度，旁边两侧固定宽度**

#### 3.1 圣怀布局

**特点**

**比较特殊的三栏布局，同样也是两固定宽度，中间自适应，唯一区别是 dom 结构必须是先写中间列部分，这样实现中间列可以优先加载。**

```
.container{
    padding-left:220px;     // 为左右拦腾出空间
    padding-right:220px;
}
.left{
    float:left;
    width:200px;
    height: 400px;
    background: red;
    margin-left:-100%;
    position:relative;
    left:-220px;
}
.center{
    float:left;
    width:100%;
    height: 500px;
    background: yellow;
}
.right{
    float:left;
    width:200px;
    height:400px;
    right:-220px;
    position:relative;
    background: blue;
    margin-left:-200px;
}
```

```
<article class="container">
    <div class="center">
        <h2>圣怀布局</h2>
    </div>
</article>
```

**实现步骤**

- 三个部分都设定为左浮动，**否则左右两边内容上不去，就不可能与中间列同一行。**然后设置 center 的宽度为 100%(**实现中间列内容自适应**)，此时，left 和 right 部分会跳到下一行

![images](layout02.png)

- 通过设置`margin-left`为负值让`left`和`right`部分回到与`center`部分同一行

![images](layout03.png)

- 通过设置父容器的`padding-left`和`padding-right`，让左右两边留出间隙。

![images](layout04.png)

- 通过设置相对定位，让`left`和`right`部分移动到两边。

![images](layout05.png)

**缺点**

- center 部分的最小宽度不能小于 left 部分的宽度，否则会 left 总会掉到下一行
- 如果其中一列内容高度拉长(如下图)，其他两列的背景并不会自动填充。(借助等高布局正 padding+负 margin 可解决，下文会介绍)

![images](layout06.png)

#### 3.2 双飞翼布局

**特点**

**同样也是三栏布局，在圣杯布局基础上进一步优化，解决了圣杯布局错乱问题，实现了内容内容与布局的分离。而且任何一栏都可以是最高栏，不会出问题。**

```
.container{
    min-width:600px;    // 确保中间内容可以显示出来，两倍left宽+right宽
}
.left{
    float:left;
    width:200px;
    height:400px;
    background:red;
    margin-left:-100%;
}
.center{
    float:left;
    width:100%;
    height:500px;
    background:yellow;
}
.center .inner{
    margin: 0 200px;  //新增部分
}
.right{
    float:left;
    width:200px;
    height:400px;
    background:blue;
    margin-left:-200px;
}
```

```
<article class="container">
    <div class="center">
        <div class="inner">双飞翼布局</div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
</article>
```

**实现步骤（前两步与圣杯布局一样）**

- 三个部分都设定为浮动，然后设置 center 的高度为 100%，此时，left 和 right 部分会跳到下一行；
- 通过设置 margin-left 为负值让 left 和 right 部分回到与 center 部分同一行；
- center 部分增加一个内层 div，并设 margin: 0 200px；

**缺点**

**多加一层 dom 树节点，增加渲染树生成的计算量。**

#### 3.3 两种布局实现方式对比

- 两种布局方式都是把主列放在文档流最前面，使主列优先加载。
- 两种布局方式在实现上也有相同之处，都是让三列浮动，然后通过负外边距形成三列布局。
- 两种布局方式的不同之处在于如何处理中间主列的位置：
  - **圣杯布局是利用父容器的左、右内边距+两个从列相对定位；**
  - **双飞翼布局是把主列嵌套在一个新的父级块中利用主列的左、右外边距进行布局调整**

### 四、等高布局

等高布局是指子元素在父元素中高度相等的布局方式。接下来我们介绍常见几种实现方式:

#### 4.1 利用正 padding+负 margin

我们通过等布局便可以解决圣杯布局的第二点缺点，因为背景是在 padding 区域显示的，**设置一个大数值的 padding-bottom，并在所有列外面加上一个容器，并设置 overflow:hidden 把溢出背景切掉。**这种可能实现多列等高布局，并且也能实现列与列之间分隔线效果，结构简单，兼容所有浏览器。新增代码如下：

```
.center,
.left,
.right{
    padding-bottom: 10000px;
    margin-bottom: -10000px;
}
.container {
    padding-left: 220px;
    padding-right: 220px;
    overflow: hidden;//把溢出背景切掉
}
```

![images](layout07.png)

#### 4.2 利用背景图片

这种方法是我们实现等高列最早使用的一种方法，就是使用背景图片，在列的父元素上使用这个背景图进行 Y 轴的铺放，从而实现一种等高列的假象。实现方法简单，兼容性强，不需要太多的 css 样式就可以轻松实现,但此方法不适合流体布局等高列的布局。

在制作样式之前需要一张类似下面的背景图：

![images](layout08.gif)

```
<div class=”container clearfix”>
    <div class=”left”></div>
    <div  class=”content”></div>
    <div class=”right”></div>
</div>
```

```
.container{
    background:url("column.png") repeat-y;
    width:960px;
    margin:0 auto;
}
.left{
    float:left;
    width:220px;
}
```

#### 4.3 模仿表格布局

这是一种非常简单，易于实现的方法。不过兼容性不好，在 ie6-7 无法正常运行。

```
   <div class="container table">
      <div class="containerInner tableRow">
        <div class="column tableCell cell1">
          <div class="left aside">
            ....
          </div>
        </div>
        <div class="column tableCell cell2">
          <div class="content section">
            ...
          </div>
        </div>
        <div class="column tableCell cell3">
          <div class="right aside">
            ...
          </div>
        </div>
      </div>
    </div>
```

```
.table{
    width: auto;
    min-width:1000px;
    margin:0 auto;
    padding:0;
    display:table;
}
.tableRow{
    display:table-row;
}
.tableCell{
    background:#f00;
    height:800px;
}
.cell2{
    background:#0f0;
}
.cell3{
    background:#00f;
}
```

#### 4.4 使用边框和定位

这种方法是使用边框和绝对定位来实现一个假的高度相等列的效果。结构简单，兼容各浏览器，容易掌握。假设你需要实现一个两列等高布局，侧栏高度要和主内容高度相等。

```
#wrapper{
    width:960px;
    margin:0 auto;
}
#mainContent{
    border-right:220px solid #dfdfdf;
    position:absolute;
    width:740px;
    height:800px;
    background:green;
}
#sidebar{
    background:#dfdfdf;
    margin-left:740px;
    position:absolute;
    height:800px;
   width:220px;
}
```

```
<div id="wrapper">
    <div id="mainContent">...</div>
    <div id="sidebar">...</div>
</div>
```

### 五、粘连布局

#### 5.1 特点

- 有一块内容`<main>`，当`<main>`的高度足够长的时候，紧跟在`<main>`后面的元素`<footer>`会跟在`<main>`元素的后面。
- 当`<main>`元素比较短的时候（比如小于屏幕的高度），我们期望这个`<footer>`元素能够“粘连”在屏幕的底部

![images](layout09.png)

具体代码如下：

```
<div id="wrap">
    <div class="main">
        main <br/>
        main <br/>
        main <br/>
    </div>
</div>
<div id="footer">footer</div>
```

```
*{
    margin:0;
    padding:0;
}
html,
body{
    height:100%;
}
#wrap{
    min-height:100%;
    background:pink;
    text-align:center;
    overflow:hidden;
}
#wrap .main{
    padding-bottom:50px;
}
#footer{
    height:50px;
    line-height:50px;
    background:deeppink;
    text-align:center;
    margin-top:50px;
}
```

#### 5.2 实现步骤

- footer 必须是一个独立的结构，与 wrap 没有任何嵌套关系
- wrap 区域的高度通过设置 min-height，变为视口高度
- footer 要使用 margin 为负来确定自己的位置
- 在 main 区域需要调协 padding-bottom。这也为了防止负 margin 导致 footer 覆盖任何实际内容。

### 参考资料

- [几种常见的 CSS 布局](https://github.com/ljianshu/Blog/issues/40)
- [面试必考点：前端布局知识](https://mp.weixin.qq.com/s/bPfdwdF1SR9Pt03zNhNebw)
- [「前端进阶」深度解析瀑布流布局](https://juejin.im/post/5ddb7a7c51882573520fb185)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
