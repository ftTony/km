# 理解盒模型

## 前言

CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括：边距 margin，边框 border，填充 padding，和实际内容 content。盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

![images](box03.png)

## 内容

- 块容器盒
- 块盒
- 行盒
- 盒子四大家族
- 理解 box-sizing

### 一、块容器盒

只包含其它块级盒，或生成一个行内格式化上下文(inline formatting context)，只包含行内盒的叫做**块容器盒子**。

### 二、块盒

同时是块容器盒的块级盒称为块盒。

### 三、行盒

行盒由行内格式化上下文产生的盒，用于表示一行。在块盒里面，行盒从块盒一边排版到另一边。当有浮动时，行盒从左浮动的最右边排版到右浮动的最左边。

### 四、盒子四大家族

- border
- padding
- content
- margin

#### 4.1 border

#### 4.2 padding

#### 4.3 content

#### 4.4 margin

### 五、理解 box-sizing

![images](box02.png)

box-sizing，顾名思义，其作用与设置 CSS box 的尺寸大小有关，而 CSS box 又可细分为:

- `content-box`(W3C 盒模型，又名标准盒模型)：content area
- `padding-box`(IE 盒模型，又名怪异盒模型)：content area + padding area
- border-box(=content area + padding area + border area)
- margin-box(=content area + padding area + border area + margin area)

### 参考资料

- 《CSS 世界》
- [【第 1234 期】前端布局基础概述](https://mp.weixin.qq.com/s/X9i_7BX-32EZlxsYP6MxEg)
- [谈谈一些有趣的 CSS 题目（11）-- IFC、BFC、GFC 与 FFC 知多少 ](https://github.com/chokcoco/iCSS/issues/56)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
