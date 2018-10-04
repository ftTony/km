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
.rotate {width:520px;height:280px;overflow:hidden;}
.rotate img:hover{
    -webkit-transform:rotate(90deg);
    -moz-transform:rotate(90deg);
    -o-transform:rotate(90deg);
    transform:rotate(90deg);
}
```

### 二、旋转 rotate

rotate(<angle>)：通过指定的角度参数对原元素指定一个 2D，需先有 transform-origin 属性的定义。transform-origin 定义的是旋转的基点，其中 angle 是指旋转角度，如果设置的值为正数表示顺时针旋转，如果设置的值为负数，则表示逆时针旋转。如：transform:rotate(30deg)；

![images](translate-x.png)

### 三、移动 translate

移动 translate 我们分为三种情况：translate(x,y)水平方向和垂直方向同时移动（也就是 X 轴和 Y 轴同时移动）；translateX(x)仅水平方向移动(X 轴移动)；translateY(Y)仅垂直方向移动（Y 轴移动），具体使用方法如下：

![images](translate-x-y.png)

### 四、缩放 scale

缩放 scale 和移动 translate 是极其相似，他也具有三种情况：scale(x,y)

### 五、扭曲 skew

扭曲 skew 和 translate、scale 一样同样具有三种情况：skew(x,y)使元素在水平和垂直方向

### 六、矩阵 matrix

### 参考资料

- [css3 动画功能介绍](https://www.cnblogs.com/tugenhua0707/p/4306760.html)
- [css3 中的变形（transform）、过渡(transtion)、动画(animation)](https://www.cnblogs.com/qianduanjingying/p/4937574.html)
- [CSS3 transform 属性](https://www.w3school.com.cn/cssref/pr_transform.asp)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
