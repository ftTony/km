# 结构与层叠

## 前言

屏幕是一个二维平面，然而 HTML 元素却是排列在三维坐标系中，x 为水平位置，y 为垂直位置，z 为屏幕由内向外方向的位置，我们在看屏幕的时候是沿着 z 轴方向从外向内的；由此，元素在用户视角就形成了层叠的关系，某个元素可能覆盖了其他元素也可能被其他元素覆盖；相关源码在[这里](https://github.com/ftTony/notes/tree/master/css/stacking)

![images](stacking01.png)

## 内容

- [什么是“层叠上下文”](#一、什么是“层叠上下文”)
- [什么是“层叠等级”](#二、什么是“层叠等级”)
- [如何产生“层叠上下文”](#三、如何产生“层叠上下文”)
- [什么是“层叠顺序”](#四、什么是“层叠顺序”)
- [z-index 的理解](#五、z-index-的理解)

### 一、什么是“层叠上下文”

层叠上下文(stacking context)，是 HTML 中一个三维的概念。在 CSS2.1 规范中，每个盒模型的位置是三维的，分别是平面画布上的`x轴`，`y轴`以及表示层叠的`z轴`。一般情况下，元素在页面上沿`x轴y轴`平铺，我们察觉不到它们在`z轴`上的层叠关系。而一旦元素发生堆叠，这时就能发现某个元素可能覆盖了另一个元素或者被另一个元素覆盖。

如果一个元素含有层叠上下文，(也就是说它是层叠上下文元素)，我们可以理解为这个元素在`Z轴`上就“高人一等”，最终表现就是它离屏幕观察者更近。

### 二、什么是“层叠等级”

**层叠等级**(层叠水平,Stacking Level)决定了同一个层叠上下文中元素在 z 轴上的显示顺序的**概念**；

- 普通元素的层叠等级优先由其所在的层叠上下文决定
- 层叠等级的比较只有在同一个层叠上下文元素中才有意义
- 在同一个层叠上下文中，层叠等级描述定义的是该层叠上下文中的元素在 Z 轴上的上下顺序

### 三、如何产生“层叠上下文”

层叠上下文也基本上是有一些特定的 CSS 属性创建的，一般有 3 种方法：

- 根元素`<html></html>`
- `position`值为`absolute | relative`，且`z-index`值不为`auto`
- `posistion`值为`fixed | sticky`
- `z-index`值不为`auto`的 flex 元素，即：父元素`display:flex | inline-flex`
- `opacity`属性值小于`1`的元素
- `transform`属性值不为`none`的元素
- `mix-blend-mode`属性值不`normal`的元素
- `filter`、`perspective`、`clip-path`、`mask`、`mask-image`、`mask-border`、`motion-path`值不为`none`的元素
- `isolation`属性被设置为`isolate`的元素
- `will-change`中指定了任意 CSS 属性，即便你没有直接指定这些属性的值
- `-webkit-overflow-scrolling`属性被设置`touch`的元素

### 四、什么是“层叠顺序”

**层叠顺序**(层叠次序，堆叠顺序，Stacking Order)描述的是元素在同一个层叠上下文中的顺序**规则**，从层叠的底部开始，共有七种层叠顺序：

- **背景和边框**：形成层叠上下文的元素的背景和边框。
- **负 z-index 值**：层叠上下文内有着负 z-index 值的定位子元素，负的越大层叠等级越低。
- **块级盒**：文档流中块级、非定位元素；
- **浮动盒**：非定位浮动元素；
- **行内盒**：文档流中行内、非定位子元素；
- **z-index:0**：z-index 为 0 或 auto 的定位元素，这些元素形成了新的层叠上下文。
- **正 z-index 值**：z-index 为正的定位元素，正的越大层叠等级越高；

![images](stacking02.png)

### 五、z-index 的理解

z-index 只适用于定位的元素，对非定位元素无效，它可以被设置为正整数、负整数、0、auto，如果一个定位元素没有设置 z-index，那么默认为 auto;

元素的 z-index 值只在同一个层叠上下文中有意义。如果父级层叠上下文的层叠等级低于另一个层叠上下文的，那么它 z-index 设的再高也没用。所以如果你遇到 z-index 值设了很大，但是不起作用的话，就去看看它的父级层叠上下文是否被其他层叠上下文盖住了。

### 参考资料

- [彻底搞懂 CSS 层叠上下文、层叠等级、层叠顺序、z-index](https://juejin.im/post/5b876f86518825431079ddd6)
- [CSS 中重要的层叠概念](https://juejin.im/post/5ba4efe36fb9a05cf52ac192)
- [深入理解 CSS 中的层叠上下文和层叠顺序](https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/)
- 《CSS 世界》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
