# CSS 简单的继承

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 属性的是否默认继承
- 默认继承的属性
- 默认不继承的属性
- 四个通用属性值

### 一、属性的是否默认继承

初始值是指当属性没有指定值时的默认值，如这些语句的值都是默认值：`background-coloe`、`transparent`、`left:auto`、`float:none`、`width:auto`等。

css 的继承很简单，分为默认继承的和默认不继承的，但所有属性都可以通过`inherit`实现继承。

当没有指定值时，默认继承的属性取父元素的同属性的计算值（相当于设置了`inherit`），默认不继承的属性取属性的初始值（相当于设置了`initial`）。

### 二、默认继承的属性

- 所有元素默认继承：visibility、cursor
- 文本属性默认继承：letter-spacing、word-spacing、white-space、line-height、color、font、 font-family、font-size、font-style、font-variant、font-weight、text-indent、text-align、text-shadow、text-transform、direction
- 列表元素默认继承：list-style、list-style-type、list-style-position、list-style-image
- 表格元素默认继承：border-collapse

### 三、默认不继承的属性

- 所有元素默认不继承：all、display、overflow、contain
- 文本属性默认不继承：vertical-align、text-decoration、text-overflow
- 盒子属性默认不继承：width、height、padding、margin、border、min-width、min-height、max-width、max-height
- 背景属性默认不继承：background、background-color、background-image、background-repeat、background-position、background-attachment
- 定位属性默认不继承：float、clear、position、top、right、bottom、left、z-index
- 内容属性默认不继承：content、counter-reset、counter-increment
- 轮廓属性默认不继承：outline-style、outline-width、outline-color、outline
- 页面属性默认不继承：size、page-break-before、page-break-after
- 声音属性默认不继承：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

### 四、四个通用属性值

css 为控制继承提供了四个特殊的通用属性值，每个 css 属性都能使用这些值。

- inherit

设置该属性会使子元素属性和父元素相同。实际上，就是“开启继承”。

- initial

将属性的初始值应用于元素。实际上，就是“重置为默认值”。

- unset

将属性重置为自然值，也就是如果属性是自然继承的那么就是`inherit`，否则和`initial`一样。

- revert

表示使用样式表中定义的元素属性的默认值。若用户定义样式表中显示设置，则按此设置；否则，按照浏览器定义样式表中的样式设置；否则，等价于 unset 。

### 参考资料

- [CSS 简单的继承](https://juejin.im/post/5dcb89186fb9a04a752ba034)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
