# 背景

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [理解 background-size](#一、理解-background-size)
- [理解 background-position](#二、理解-background-position)
- [理解 background-origin](#三、理解-background-origin)
- [理解 background-clip](#四、理解-background-clip)

### 一、理解 background-size

`background-size`：定义背景图像的尺寸大小。相关源码部分在[这里](https://github.com/ftTony/notes/tree/master/css/background-size)

基本语法： length | percentage | cover | contain;

#### 1.1 length

该属性值是设置背景图像的宽度和高度的，第一个值是宽度，第二个值是设置高度的。如果只设置第一个值，那么第二个值会自动转换为“auto”。

#### 1.2 percentage

该属性是以父元素的百分比来设置图片的宽度和高度的，第一个值是宽度，第二个值是高度。如果只设置一个值，那么第二个值会被设置为“auto”。

#### 1.3 cover

把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。

#### 1.4 contain

把图像扩展到最大尺寸，以使宽度和高度完全适应内容区域。

### 二、理解 background-position

`background-position`：指定背景图像在元素中出现的位置

取值：

- `<percentage>`： 用百分比指定背景图像在元素中出现的位置。可以为负值。参考容器尺寸减去背景图尺寸进行换算。
- `<length>`： 用长度值指定背景图像在元素中出现的位置。可以为负值。
- `center`： 背景图像横向或纵向居中。
- `left`： 背景图像从元素左边开始出现。
- `right`： 背景图像从元素右边开始出现。
- `top`： 背景图像从元素顶部开始出现。
- `bottom`： 背景图像从元素底部开始出现。

### 三、理解 background-origin

指定的背景图像计算`background-position`时的参考原点(位置)。

### 四、理解 background-clip

`background-clip`：指定对象的背景图像向外裁剪的区域。

### 参考资料

- [理解 CSS3 中的 background－size(对响应性图片等比例缩放)](https://www.cnblogs.com/tugenhua0707/p/5260411.html)
- [你可能不是那么了解的 CSS Background](https://juejin.im/post/5e1adb826fb9a02fc160a2c1)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
