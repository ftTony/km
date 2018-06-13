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

对于内联元素，`width:auto`

#### 1.4 外在盒子和内在盒子

外在盒子是决定元素排列方式的盒子，即决定盒子具有块级特性还是内联特性的盒子。外在盒子负责结构布局。

内在盒子是决定元素内部一些忏悔是否生效的盒子。内在盒子负责内容显示。

#### 1.5 css 权重和超越`!important`

| 权重值  | 选择器                                                                           |
| ------- | -------------------------------------------------------------------------------- |
| 1,0,0,0 | 内联样式：`style=""`                                                             |
| 0,1,0,0 | ID 选择器：`#idName{...}`                                                        |
| 0,0,1,0 | 类、伪类、属性选择器：`.className{...}` / `:hover{...}` / `[type="text"] ={...}` |
| 0,0,0,1 | 标签、伪元素选择器：`div{...}` / `:after{...}`                                   |
| 0,0,0,0 |                                                                                  | 通用选择器`（*）`、子选择器`（>）`、相邻选择器`（+）`、同胞选择器`（~）` |

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

#### 2.3 margin

#### 2.4 border

### 三、好基友`line-height`和`vertical-align`

- 字母 x 的角色
- line-height
- vertical-align

#### 3.1 字母 x 的角色

#### 3.2 line-height

#### 3.3 vertical-align

### 四、流的破坏

### 五、层叠规则

### 六、文本控制

### 七、元素的显示与隐藏

### 八、弹性布局

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
