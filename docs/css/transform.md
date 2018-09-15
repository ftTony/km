# 转换(Transform)

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- Transform 功能介绍

### 一、Transform 功能介绍

Transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。

**语法：** transform: none | transform-functions，初始值是 none;

Transform-functions 的取值如下：

- matrix：定义距阵元素对象。
- translate：移动元素对象。
- scale：缩放元素对象。
- rotate：旋转元素对象。
- skew：倾斜元素对象。

#### 例子

HTML 代码：

```
<h2>transform属性</h2>
<div class="rotate">
    <img src="http://m1.img.srcdd.com/farm5/d/2015/0228/22/FD9886C5434AC71115812ED3DB6409B9_B500_900_500_269.jpeg"/>
</div>
```

CSS 代码如下：

```
.rotate img{
    -webkit-transform:rotate(0deg);
    -moz-transform:rotate(0deg);
    -o-transform:rotate(0deg);
    transition:1s all linear;
}
.rotate {}
.rotate img:hover{}
```

### 参考资料

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
