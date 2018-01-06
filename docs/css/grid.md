# Grid 布局

## 前言

CSS Grid(网格)布局，是一个二维的基于风格的布局系统，它的目标是完全改变我们基于风格的用户界面的布局方式。案例源码放在[这里](https://github.com/ftTony/notes/tree/master/css/grid)

## 内容

- [相关属性](#一、相关属性)
- [基本术语](#二、基本术语)
- [浏览器支持](#三、浏览器支持)

### 一、相关属性

#### 1.1 网格容器(Grid Container) 属性

- **display**

将元素定义为网格容器，并为其内容建立新的，网格格式上下文。

值：

- `grid`：生成一个块级网格
- `inline-grid`：生成一个内联网格

- **grid-template-columns/grid-template-rows**

使用空格分隔的值列表，用来定义网格的列和行。这些值表示网格轨道大小，它们之间的空格表示网格线。

值：

- `<track-size>`：可以是长度值，百分比，或者等份网格容器中可用空间（使用`fr`单位）
- `<line-name>`：你可以选择的任意名称

CSS 代码:

```
.container {
  grid-template-columns: <track-size> ... | <line-name> <track-size> ...;
  grid-template-rows: <track-size> ... | <line-name> <track-size> ...;
}
```

- `none`：这个关键字表示不明确的网格。所有的列和其大小都将由`grid-auto-columns`属性隐式的指定。
- `<length>`：非负值的长度大小。
- `<percentage>`：非负值且相对于网格容器的`<百分比>`。
- `<flex>`：非负值，用单位`fr`来定义网格轨道大小的弹性系数。 每个定义了`<flex>`的网格轨道会按比例分配剩余的可用空间。当外层用一个`minmax()`表示时，它将是一个自动最小值
- `max-content`：是一个用来表示以网格项的最大的内容来占据网格轨道的关键字。
- `min-content`：是一个用来表示以网格项的最小内容来占据网格轨道的关键字。
- `minmax`：是一个来定义大小范围的属性，大于等于 min 值，并且小于等于 max 值。
- `auto`：如果该网格轨道为最大时，该属性等同于`<max-content>` ，为最小时，则等同于`<min-content>` 。
- `fit-content`：相当于公式`min(max-content, max(auto, argument))`，类似于 `auto` 的计算(即 minmax(auto, max-content))，除了网格轨道大小值是确定下来的，否则该值都大于 `auto` 的最小值。
- `repeat`：表示网格重复部分，以一种更简洁的方式去表示大量而且重复列的表达式。可值有`positive-integer`、`auto-fill`、`auto-fit`

- **grid-template-areas**

通过引用`grid-area`属性指定的风格区域名称来定义网格模板。重复网格区域的名称导致内容跨越这些单元格。

值：

- `<grid-area-name>`：由网格项的`grid-area`指定的网格区域名称
- `.`(点号)：代表一个空的风格单元
- `none`：不定义网格区域

- **grid-template**/**grid**

`grid-template`属性是`grid-template-columns`、`grid-template-rows` 和 `grid-template-areas` 这三个属性的合并简写形式。

- **grid-column-gap**/**grid-row-gap**/**grid-gap**

指定风格线的大小。你可以把它想象为设置列/行之间间距的宽度。

值：

- `<line-size>`：长度值

CSS 代码：

```
.container {
  grid-column-gap: <line-size>;
  grid-row-gap: <line-size>;
}
```

示例代码：

```
.container {
  grid-row-gap: 20px;
  grid-column-gap: 20px;
}
```

`grid-gap`是`grid-column-gap`和`grid-row-gap`的简写语法

值：

- `<grid-row-gap> <grid-column-gap>`：长度值

CSS 代码:

```
.container {
  grid-gap: <grid-row-gap> <grid-column-gap>;
}
```

示例代码：

```
.container {
  grid-gap: 20px 20px;
}
```

- **justify-items**/**align-items**/**place-items**

`justify-items`属性设置单元格内容的水平位置（左中右）

值：

- `start`：将网格项对齐到其单元格的左侧起始边缘（左侧对齐）
- `end`：将网格欺项对齐到其单元格的右侧结束边缘（右侧对齐）
- `center`：将风格项对齐到其单元格的水平中间位置（水平居中对齐）
- `stretch`：填满单元格的宽度（默认值）

CSS 代码：

```
.container {
  justify-items: start | end | center | stretch;
}
```

示例：

```
.container {
  justify-items: start;
}
```

`align-items`属性设置单元内容的垂直位置（上中下）。

值：

- `start`：将网格项对齐到其单元格的顶部起始边缘（顶部对齐）
- `end`：将网格项对齐到其单元格的底部结束边缘（底部对齐）
- `center`：将网格项对齐到其单元格的垂直中间位置（垂直居中对齐）
- `stretch`：填满单元格的宽度（默认值）

CSS 代码：

```
.container {
  align-items: start | end | center | stretch;
}
```

示例：

```
.container {
  align-items: start;
}
```

`place-items`是设置 `align-items` 和 `justify-items` 的简写形式。

值：

`<align-items> <justify-items>`：第一个值设置 `align-items` 属性，第二个值设置 `justify-items` 属性。如果省略第二个值，则将第一个值同时分配给这两个属性。

CSS 代码：

```
place-items: <align-items> <justify-items>;
```

示例：

```
place-items: start end;
```

- **justify-content**/**align-content**/**place-content**

`justify-content`属性是整个内容区域在容器里面的水平位置（左中右）。

值：

- `start`：将网格对齐到网格容器的左侧起始边缘（左侧对齐）
- `end`：将网格对齐到网格容器的右侧结束边缘（右侧对齐）
- `center`：将网格对齐到网格容器的水平中间位置（水平居中对齐）
- `stretch`：调整网格项的宽度，允许该网格填充满整个网格容器
- `space-around`：在每个网格项之间旋转一个均匀的空间，左右两端放置一半的空间。
- `space-between`：在每个网格项之间放置一个均匀的空间，左右两端没有空间
- `space-evenly`：在每个网格项目之间放置一个均匀的空间，左右两端放置一个均匀的空间

CSS 代码：

```
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
}
```

示例：

```
.container {
  justify-content: start;
}
```

`align-content`属性是整个内容区域的垂直位置（上中下）。

值：

- `start`：将网格对齐到 网格容器(grid container) 的顶部起始边缘（顶部对齐）
- `end`：将网格对齐到 网格容器 的底部结束边缘（底部对齐）
- `center`：将网格对齐到 网格容器 的垂直中间位置（垂直居中对齐）
- `stretch`：调整 网格项(grid items) 的高度，允许该网格填充满整个 网格容器 的高度
- `space-around`：在每个网格项之间放置一个均匀的空间，上下两端放置一半的空间
- `space-between`：在每个网格项之间放置一个均匀的空间，上下两端没有空间
- `space-evenly`：在每个网格项目之间放置一个均匀的空间，上下两端放置一个均匀的空间

CSS 代码：

```
.container {
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;
}
```

示例：

```
.container {
  align-content: start;
}
```

`place-content`属性是`align-content`属性和`justify-content`属性的合并简写形式。

值：

- `<align-content> <justify-content>`：第一个值设置`align-content`属性，第二个值设置 `justify-content`属性。如果省略第二个值，则将第一个值同时分配给这两个属性。

CSS 代码：

```
place-content: <align-content> <justify-content>
```

示例：

```
place-content: space-around space-evenly;
```

- **grid-auto-columns**/**grid-auto-rows**

`grid-auto-columns` 属性和 `grid-auto-rows` 属性用来设置，浏览器自动创建的多余网格的列宽和行高。

值：

- `<track-size>`：可以是长度值，百分比，或者等份网格容器中可用空间的分数（使用 fr 单位）

CSS 代码：

```
.container {
  grid-auto-columns: <track-size> ...;
  grid-auto-rows: <track-size> ...;
}
```

示例：

```
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-rows: 50px;
}
```

#### 1.2 网格项(Grid Items) 属性

- **grid-column-start**/**grid-column-end**/**grid-row-start**/**grid-row-end**

`grid-column-start`属性：左边框所在的垂直网格线；`grid-coloumn-end`属性：右边框所在的垂直网格线；`grid-row-start`属性：上边框所在的水平网格线；`grid-row-end`属性：下边框所在的水平网格线；

值：

- `<line>`：可以是一个数字引用一个编号的网格线，或者一个名字来引用一个命名的网格线
- `span <number>` ：该网格项将跨越所提供的网格轨道数量
- `span <name>`：该网格项将跨越到它与提供的名称位置
- `auto`：表示自动放置，自动跨度，默认会扩展一个网格轨道的宽度或者高度

CSS 代码:

```
.item {
  grid-column-start: <number> | <name> | span <number> | span <name> | auto
  grid-column-end: <number> | <name> | span <number> | span <name> | auto
  grid-row-start: <number> | <name> | span <number> | span <name> | auto
  grid-row-end: <number> | <name> | span <number> | span <name> | auto
}
```

示例代码：

```
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

- **grid-column**/**grid-row**

`grid-column` 属性是 `grid-column-start` 和 `grid-column-end` 的合并简写形式，`grid-row` 属性是 `grid-row-start` 属性和 `grid-row-end` 的合并简写形式。

值：

- `<start-line> / <end-line>`：每个网格项都接受所有相同的值，作为普通书写的版本，包括跨度

CSS 代码:

```
.item {
  grid-column:  / ;
  grid-row:  / ;
}
```

示例代码：

```
 .item-1 {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
```

- **grid-area**

`grid-area`属性指定项目放在哪一个区域。

值：

- `<name>`：你所选的名称
- `<row-start> / <column-start> / <row-end> / <column-end>`：数字或分隔线名称

CSS 代码:

```
.item {
  grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
}
```

示例代码：

```
#container {
  grid-template-areas:
    'a b c'
    'd e f'
    'g h i';
}
.item-1 {
      grid-area: e;
}
```

- **justify-self**/**align-self**/**place-self**

`justify-self`属性设置单元格内容的水平位置（左中右），跟`justify-items`属性的用法完全一致，但只作用于单个项目。；`align-self`属性设置单元格内容的垂直位置（上中下）跟 `align-items` 属性的用法完全一致，也是只作用于单个项目；
`place-self` 是设置`align-self` 和 `justify-self` 的简写形式。

值：

- `start`：对齐单元格的起始边缘；
- `end`：对齐单元格的结束边缘；
- `center`：单元格内部居中。
- `stretch`：拉伸，占满单元格的整个宽度（默认值）。

CSS 代码:

```
.item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
```

示例代码：

```
.item-1 {
    justify-self: end;
}
```

### 二、基本术语

- 网格容器
- 网格项
- 网格线
- 网格轨道
- 网格单元格
- 网格区域

#### 2.1 网格容器

应用 `display: grid` 的元素。这是所有 网格项（grid item）的直接父级元素。在这个例子中，`container` 就是**网格容器(Grid Container)**。

HTML 代码：

```
<div class="container">
  <div class="item item-1"></div>
  <div class="item item-2"></div>
  <div class="item item-3"></div>
</div>
```

#### 2.2 网格项

网格容器（Grid Container）的子元素（例如直接子元素）。这里`item`元素就是网格项(Grid Item)，但是`sub-item`不是。

HTML 代码:

```
<div class="container">
  <div class="item"></div>
  <div class="item">
    <p class="sub-item"></p>
  </div>
  <div class="item"></div>
</div>
```

#### 2.3 网格线

构成网格结构的分界线。它们既可以是垂直的（“列网格线(column grid lines)”），也可以是水平的（“行网格线(row grid lines)”），并位于行或列的任一侧。例如，这里的黄线就是一条列网格线。

![images](items-grid-line.svg)

#### 2.4 网格轨道

两条相邻网格线之间的空间。你可以把它们想象成网格的列或行。下图是第二条和第三条 行网格线 之间的 网格轨道(Grid Track)。

![images](terms-grid-track.svg)

#### 2.5 网格单元格

两个相邻的行和两个相邻的列网格线之间的空间。这是 Grid(网格) 系统的一个“单元”。下图是第 1 至第 2 条 行网格线 和第 2 至第 3 条 列网格线 交汇构成的 网格单元格(Grid Cell)。

![images](terms-grid-cell.svg)

#### 2.6 网格区域

4 条网格线包围的总空间。一个 网格区域(Grid Area) 可以由任意数量的 网格单元格(Grid Cell) 组成。下图是 行网格线 1 和 3，以及列网格线 1 和 3 之间的网格区域。

![images](terms-grid-area.svg)

### 三、浏览器支持

浏览器支持如下（数据来源[Caniuse](https://caniuse.com/#search=grid)）：

![images](grid.png)

### 参考资料

- [grid 学习](https://www.zcfy.cc/article/learn-css-grid-a-guide-to-learning-css-grid-jonathan-suh)
- [CSS Grid 网格布局教程](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
- [Grid 布局](https://juejin.im/entry/5894135c8fd9c5a19507f6a1)
- [CSS Grid 布局完全指南(图解 Grid 详细教程)](https://www.html.cn/archives/8510)
- [MDN Grid](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
```
