# 背影

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 理解 background-size

### 一、理解 background-size

`background-size`：定义背景图像的尺寸大小。相关源码部分在[这里](https://github.com/ftTony/notes/tree/master/css/background-size)

基本语法： length | percentage | cover | contain;

#### 1.1 length

该属性值是设置背景图像的宽度和高度的，第一个值是宽度，第二个值是设置高度的。如果只设置第一个值，那么第二个值会自动转换为

#### 1.2 percentage

#### 1.3 cover

把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。

#### 1.4 contain

把图像扩展到最大尺寸，以使宽度和高度完全适应内容区域。

### 参考资料

- [理解 CSS3 中的 background－size(对响应性图片等比例缩放)](https://www.cnblogs.com/tugenhua0707/p/5260411.html)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
