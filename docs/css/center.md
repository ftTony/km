# 16种方法实现水平居中垂直居中

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [水平居中](#一、水平居中)
- [垂直居中](#二、垂直居中)

### 一、水平居中

1. 若是行内元素，给其父元素设置`text-align:center`，即可实现行内元素水平居中。
2. 若是块元素，该元素设置`margin:0 auto`即可。
3. 若子元素包含`float:left`属性，为了让子元素水平居中，则可让父元素宽度设置为`fit-content`，并且配合`margin`，做如下设置：

```
.parent{
    width:-moz-fit-content;
    width:-webkit-fit-content;
    width:fit-content;
    margin:0 auto;
}
```

`fit-content`是CSS3中给width属性新加的一个属性值，它配合margin可以轻松实现水平居中，目前只支持Chrome和Firefox浏览器。

4. 使用flex 2012年版本布局，可以轻松的实现水平居中，子元素设置如下：

```
.son{
    display:flex;
    justify-content:center;
}
```

5. 使用flex 2009年版本，父元素`display:box;box-pack:center;`如下设置：

```
.parent{
    display:-webkit-box;
    -webkit-box-orient:horizontal;
    -webkit-box-pack:center;
    display:-moz-box;
    -moz-box-orient:horizontal;
    -moz-box-pack:center;
    display:-o-box;
    -o-box-orient:horizontal;
    -o-box-pack:center;
    display:-ms-box;
    -ms-box-orient:horizontal;
    -ms-box-pack:center;
    display:box;
    box-orient:horizontal;
    box-pack:center;
}
```

6. 使用CSS3中新增的`transform`属性，子元素设置如下：

```
.son{
    postion:absolute;
    left:50%;
    transform:translate(-50%,0);
}
```

7. 使用绝对定位方式，以及负值的`margin-left`,子元素设置如下：

```
.son{
    position:absolute;
    width:固定;
    left:50%;
    margin-left:-0.5宽度;
}
```

8. 使用绝对定位方式，以及`left:0,right:0;margin:0 auto;`子元素设置如下：

```
.son{
    postion:absolute;
    width:固定;
    left:0;
    right:0;
    margin:0 auto;
}
```

### 二、垂直居中

- [单行文本](#_2-1-单行文本)
- [行内块级元素](#_2-2-行内块级元素)
- [元素高度不定](#_2-3-元素高度不定)
- [元素高度固定](#_2-4-元素高度固定)

#### 2.1 单行文本

> 若元素是单行文本，则可设置`line-height`等于父元素高度

#### 2.2 行内块级元素

若元素是行内元素，基本思想是使用`display:inline-block;vertical-align:middle`和一个伪元素让内容块处于容器中央。

```
.parent::after,.son{
    display:inline-block;
    vertical-align:middle;
}
.parent::after{
    content:'';
    height:100%;
}
```

这是一种很流行的方法，也适应IE7.

#### 2.3 元素高度不定

1. 可用`vertical-align`属性，而`vertical-align`只有在父层为`td`或者`th`时，才会生效，对于其他块级元素，例如`div`、`p`等，默认情况是不支持的。为了使用`vertical-align`，我们需要设置父元素`display:table`，子元素`display:table-cell;vertical-align:middle;`，具体代码如下：

```
display: table;(父)
display: table-cell;(子)
vertical-align: middle;
```

- **优点：** 元素高度可以动态改变，不需再CSS中定义，如果父元素没有足够空间时，该元素内容也不会被截断。
- **缺点：** IE6~7，甚至IE8 beta中无效。

2. 可用**Flex 2012版**，这是CSS而已未来的趋势，Flexbox是CSS3新增属性，设计初衷是为了解决像垂直居中这样的常见布局问题

父元素做如下设置即可保证子元素垂直居中：

```
.parent {
  display: flex;
  align-items: center;
}
```

**优点**

- 内容块的宽度任意，优雅的溢出
- 可用于更复杂高级的布局技术中

**缺点**

- IE8/IE9不支持
- 需要浏览器厂商前缀
- 渲染上可能会有一些问题

3. 使用flex 2009版

```
.parent{
    display:box;
    box-orient:vertical;
    box-pack:center;
}
```

**优点** ：实现简单，扩展性强
**缺点** ：兼容性差，不支持IE

4. 可用`transform`，设置父元素相对定位(position:relative)，子元素如下css样式：

```
.son{
    position:absolute;
    top:50%;
}
```

**优点：** 代码量少
**缺点：** IE8不支持，属性需要追加浏览器厂商前缀，可能干扰其他`transform`效果，某些情形下会出现文本或元素边界渲染模糊的现象。

#### 2.4 元素高度固定

1. 设置父元素相对定位(position:relative)，子元素如下css样式：

```
.son{
    position:absolute;
    top:50%;
    height:固定;
    margin-top:-0.5高度;
}
```

- **优点：** 适用于所有浏览器。
- **缺点：** 父元素空间不够时，子元素可能不可见（当浏览器窗口缩小时，滚动条不出现时），如果子元素设置了`overflow:auto`，则高度不够时，会出现滚动条。

2. 设置父元素相对定位(position:relative)，子元素如下css样式：

```
.son{
    position:absolute;
    height:固定;
    top:0;
    bottom:0;
    margin:auto 0;
}
```

- **优点：** 简单
- **缺点：** 没有足够空间时，子元素会被截断，但不会有滚动条。

### 参考资料

- [16种方法实现水平居中垂直居中](https://juejin.im/post/58f818bbb123db006233ab2a)
- [六种实现元素水平居中_水平居中, 垂直居中 教程_大漠](https://www.w3cplus.com/css/elements-horizontally-center-with-css.html)
- [如何居中一个元素（终结版）](https://github.com/ljianshu/Blog/issues/29)
- [剖析一些经典的CSS布局问题，为前端开发+面试保驾护航](https://mp.weixin.qq.com/s/IgHNVEvK92TW2WZnWn_2BQ)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>