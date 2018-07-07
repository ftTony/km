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

| 权重值  | 选择器                                                                           |
| ------- | -------------------------------------------------------------------------------- |
| 1,0,0,0 | 内联样式：`style=""`                                                             |
| 0,1,0,0 | ID 选择器：`#idName{...}`                                                        |
| 0,0,1,0 | 类、伪类、属性选择器：`.className{...}` / `:hover{...}` / `[type="text"] ={...}` |
| 0,0,0,1 | 标签、伪元素选择器：`div{...}` / `:after{...}`                                   |
| 0,0,0,0 |                                                                                  | 通用选择器`（*）`、子选择器`（>）`、相邻选择器`（+）`、同胞选择器`（~）` |

> 当两个权值进行比较的时候，是从高到低逐级等级位上的权重值来进行比较的，而不 1000 个数 + 100 个数 + 10 个数 + 1 个数 的总和来进行比较的，换句话说，低等级的选择器个数再多也不会超过高等级的选择器的优先级的。

正确规则：

1. 先从高等级进行比较，高等级相同时，再比较低等级的，以此类推；
2. 完全相同的话，就采用 后者优先 原则；

在 css 中，`!important` 的权重相当的高。如果出现了`!important`，则不管权重如何都取有`!important` 的属性值。但是宽高有例外情况，由于宽高会被 `max-width/min-width` 覆盖，所以`!important` 会失效。

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

在内联元素的垂直方向对齐中，基线是最为重要的概念。`line-height`

#### 3.2 line-height

属性值：

- `normal`：默认值`normal`

#### 3.3 vertical-align

属性值：

- 线类：
- 文本类：
- 上标下标：
- 数值：
- 百分比：

### 四、流的破坏

现在 UI 框架横行的年代，我们的 css 写的越来越少了。这对于很多老鸟来说是件好事，但是对于初入前端的小白却未必。因为写的少了，就少了很多练手和总结的机会，对于很多样式理解就不透彻。本章介绍的`float`、`position` 和 `BFC` 对于前端页面布局非常重要，希望诸位看官们静下心来仔细研读

- `float`属性的特性

#### 4.1 `float`属性的特性

### 五、层叠规则

层叠规则是指当网页中的元素发生层叠时侯的遵循的规则。

### 六、文本控制

### 七、元素的显示与隐藏

### 八、弹性布局

弹性布局是指 display: flex 或 display: inline-flex 的布局。注意，设为弹性布局以后，子元素的 float、clear、vertical-align 属性都会失效。

### 九、网格布局

### 参考资料

- [前端基础篇之 CSS 世界](https://juejin.im/post/5ce607a7e51d454f6f16eb3d)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
