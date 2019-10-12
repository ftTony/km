# BFC 原理

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [BFC 是什么？](#一、bfc-是什么？)
- [哪些元素会生成 BFC？](#二、哪些元素会生成-bfc？)
- [BFC 的作用及原理](#三、bfc-的作用及原理)
- [总结](#四、总结)

### 一、BFC 是什么？

> BFC 直译为“块级格式化上下文”。它是一个独立的渲染区域，只有 Block-level box 参与，它规定了内部的 Block-level Box 如何布局，并且与这个区域外部毫不相干。

1. 内部的 Box 会在垂直方向，一个接一个地放置。
2. Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
3. 每个元素的 margin box 的左边，与包含块 border box 的左边相接触（对于从左往右的格式化，否则相反）。即使存在浮动也是如此。
4. BFC 的区域不会与 float box 重叠。
5. BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
6. 计算 BFC 的高度时，浮动元素也参与计算

### 二、哪些元素会生成 BFC？

- 根元素
- float 属性不为 none
- position 为 absolute 或 fixed
- display 为 inline-block，table-cell,table-caption,flex,inline-flex
- overflow 不为 visible

### 三、BFC 的作用及原理

- [自适应的两栏布局](#_3-1-自适应的两栏布局)
- [清除内部浮动](#_3-2-清除内部浮动)
- [防止 margin 重叠](#_3-3-防止-margin-重叠)

#### 3.1 自适应的两栏布局

代码：

```
<style>
    body {
        width: 300px;
        position: relative;
    }
    .aside {
        width: 100px;
        height: 150px;
        float: left;
        background: #f66;
    }
    .main {
        height: 200px;
        background: #fcc;
    }
</style>
<body>
    <div class="aside"></div>
    <div class="main"></div>
</body>
```

页面：

![01](bfc01.png)

根据 BFC 布局规则第 3 条：

> 每个元素的 margin-box 的左边， 与包含块 border-box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。

因此，虽然存在浮动的元素 aslide，但 main 的左边依然会与包含块的左边相接触。

根据 BFC 布局规则第四条：

> BFC 的区域不会与 float box 重叠。

我们可以通过通过触发 main 生成 BFC， 来实现自适应两栏布局。

```
.main {
    overflow: hidden;
}
```

当触发 main 生成 BFC 后，这个新的 BFC 不会与浮动的 aside 重叠。因此会根据包含块的宽度，和 aside 的宽度，自动变窄。

页面：

![02](bfc02.png)

**对比**：实现布局的另一种方式利用块状元素流体特性实现的自适应布局

```
常用方法：浮动或者定位+margin撑开

不足之处：我们需要知道浮动或绝对定位内容的尺寸。然后，流体内容才能有对应的margin或padding或border值进行位置修正。
```

#### 3.2 清除内部浮动

代码：

```
<style>
    .par {
        border: 5px solid #fcc;
        width: 300px;
    }

    .child {
        border: 5px solid #f66;
        width:100px;
        height: 100px;
        float: left;
    }
</style>
<body>
    <div class="par">
        <div class="child"></div>
        <div class="child"></div>
    </div>
</body>
```

页面：

![03](bfc03.png)

> 计算 BFC 的高度时，浮动元素也参与计算

为达到清除内部浮动，我们可以触发 par 生成 BFC，那么 par 在计算高度时，par 内部的浮动元素 child 也会参与计算。

```
.par {
    overflow: hidden;
}
```

效果如下：

![04](bfc04.png)

#### 3.3 防止 margin 重叠

代码：

```
<style>
    p {
        color: #f55;
        background: #fcc;
        width: 200px;
        line-height: 100px;
        text-align:center;
        margin: 100px;
    }
</style>
<body>
    <p>Haha</p>
    <p>Hehe</p>
</body>
```

页面：

![05](bfc05.png)

两个 p 之间的距离为 100px，发送了 margin 重叠。

> Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠

我们可以在 p 外面包裹一层容器，并触发该容器生成一个 BFC。那么两个 P 便不属于同一个 BFC，就不会发生 margin 重叠了。

代码：

```
<style>
    .wrap {
        overflow: hidden;
    }
    p {
        color: #f55;
        background: #fcc;
        width: 200px;
        line-height: 100px;
        text-align:center;
        margin: 100px;
    }
</style>
<body>
    <p>Haha</p>
    <div class="wrap">
        <p>Hehe</p>
    </div>
</body>
```

效果:

![06](bfc06.png)

### 四、总结

> BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

因为 BFC 内部的元素和外部的元素绝对不会互相影响，因此，当 BFC 外部存在浮云时，它不应该影响 BFC 内容 box 的布局，BFC 会通过变窄，而不与浮动有重叠。同样的，当 BFC 内部有浮动时，为了不影响外部元素的布局，BFC 计算高度时会包括浮动高度。避免 margin 重叠也是这样的一个道理。

## 参考资料

- [深入理解 BFC](https://github.com/ljianshu/Blog/issues/15)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>