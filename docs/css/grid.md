# Grid 布局

## 前言

CSS Grid(网格)布局，是一个二维的基于风格的布局系统，它的目标是完全改变我们基于风格的用户界面的布局方式。

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

**repeat()**

- grid-template-areas
- grid-template
- grid-column-gap
- grid-row-gap
- grid-gap
- justify-items
- align-items
- place-items
- justify-content
- place-content
- grid-auto-columns
- grid-auto-rows
- grid

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
