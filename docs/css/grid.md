# Grid 布局

## 前言

CSS Grid(网格)布局，是一个二维的基于风格的布局系统，它的目标是完全改变我们基于风格的用户界面的布局方式。案例源码放在[这里](https://github.com/ftTony/notes/tree/master/css/grid)

## 内容

- 相关属性
- 基本术语
- 浏览器支持

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

CSS 代码：

```

```

示例：

```

```

`align-content`属性是整个内容区域的垂直位置（上中下）。

值：

CSS 代码：

```

```

示例：

```

```

`place-content`属性是`align-content`属性和`justify-content`属性的合并简写形式。

值：

CSS 代码：

```

```

示例：

```

```

- **grid-auto-columns**/**grid-auto-rows**

#### 1.2 网格项(Grid Items) 属性

- grid-column-start
- grid-column-end
- grid-row-start
- grid-row-end
- grid-column
- grid-row
- grid-area
- justify-self
- align-self
- place-self

### 二、基本术语

- 网格容器
- 网格项
- 网格线
- 网格轨道
- 网格单元格
- 网格区域

#### 2.1 网格容器

#### 2.2 网格项

#### 2.3 网格线

#### 2.4 网格轨道

#### 2.5 网格单元格

#### 2.6 网格区域

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
