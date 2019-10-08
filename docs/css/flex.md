# flex 学习

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [Flex介绍](#一、flex介绍)
- [基本概念](#二、基本概念)
- [CSS属性说明](#三、css属性说明)
- [Flex项目属性](#三、css属性说明)
- [兼容性](#四、兼容性)

### 一、Flex介绍

> Flex布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持。Flex是Flexible Box的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性。

### 二、基本概念

采用Flex布局的元素为，称为 **Flex容器**，容器的直接子元素称为 Flex项目，容器默认有两个轴心线，用于项目的对齐与排列，水平主轴为 `main axis`，垂直主轴为 `cross axis`，主轴的开始位置为 `start`， 结束位置为 `end`。

**主轴和交叉轴的判定：** 如果flex-direction为row，则主轴是水平方向，如果是column，则主轴是垂直方向

![1611cc8a90e05b23](flex.png)

### 三、CSS属性说明

将任意元素的`display`属性设置为`flex`，可将其转换为Flex容器 设为Flex容器后，子元素的 `float`、`clear` 和`vertical-align`属性将失效

- [容器的属性](#_3-1-容器的属性)
- [Flex项目属性](#_3-2-flex项目属性)

#### 3.1 容器的属性

```
主轴方向：水平排列（默认） | 水平反向排列 | 垂直排列 | 垂直反向排列
flex-direction: row | row-reverse | column | column-reverse;

换行：不换行（默认） | 换行 | 反向换行(第一行在最后面)
flex-wrap: nowrap | wrap | wrap-reverse;

flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
flex-flow: <flex-direction> || <flex-wrap>;

主轴对齐方式：起点对齐（默认） | 终点对齐 | 居中对齐 | 两端对齐 | 分散对齐
justify-content: flex-start | flex-end | center | space-between | space-around;

交叉轴对齐方式：拉伸对齐（默认） | 起点对齐 | 终点对齐 | 居中对齐 | 第一行文字的基线对齐
align-items: stretch | flex-start | flex-end | center | baseline;

多根轴线对齐方式：拉伸对齐（默认） | 起点对齐 | 终点对齐 | 居中对齐 | 两端对齐 | 分散对齐
align-content: stretch | flex-start | flex-end | center | space-between | space-around;

```

#### 3.2 Flex项目属性

```
顺序：数值越小越靠前，默认为0
order: <number>; 

放大比例：默认为0，如果有剩余空间也不放大，值为1则放大，2是1的双倍大小，以此类推
flex-grow: <number>; 

缩小比例：默认为1，如果空间不足则会缩小，值为0不缩小
flex-shrink: <number>;

项目自身大小：默认auto，为原来的大小，可设置固定值 50px/50%
flex-basis: <length> | auto;

flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto
两个快捷值：auto (1 1 auto) 和 none (0 0 auto)
flex:none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]

项目自身对齐：继承父元素（默认） | 起点对齐 | 终点对齐 | 居中对齐 | 基线对齐 | 拉伸对齐
align-self: auto | flex-start | flex-end | center | baseline | stretch;

```

### 四、兼容性

flex主要经历了三个版本更新导致有很多兼容性问题

- **2009 version标志：** `display: box; or a property that is box-{*} (eg. box-pack)`
- **2011 version标志：** `display: flexbox; or the flex() function or flex-pack property`
- **2012 version标志：** `display: flex/inline-flex; and flex-{*} properties`

```
/* 子元素-平均分栏 */
.flex1 {
    -webkit-box-flex: 1;      /* OLD - iOS 6-, Safari 3.1-6 */
    -moz-box-flex: 1;         /* OLD - Firefox 19- */
    /* width: 20%; */         /* For old syntax, otherwise collapses. */
                              /* 见本文底部评论@Lawrence */
    -webkit-flex: 1;          /* Chrome */
    -ms-flex: 1;              /* IE 10 */
    flex: 1;                  /* NEW, Spec - Opera 12.1, Firefox 20+ */
}
/* 父元素-横向排列（主轴） */
.flex-h {
    display: box;              /* OLD - Android 4.4- */

    display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;      /* TWEENER - IE 10 */
    display: -webkit-flex;     /* NEW - Chrome */
    display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */


    /* 09版 */
    -webkit-box-orient: horizontal;
    /* 12版 */
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    -o-flex-direction: row;
    flex-direction: row;
}
/* 父元素-横向换行 */
.flex-hw {
    /* 09版 */
    /*-webkit-box-lines: multiple;*/
    /* 12版 */
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -o-flex-wrap: wrap;
    flex-wrap: wrap;
}
/* 父元素-水平居中（主轴是横向才生效） */
.flex-hc {
    /* 09版 */
    -webkit-box-pack: center;
    /* 12版 */
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    -o-justify-content: center;
    justify-content: center;
    /* 其它取值如下：
        align-items     主轴原点方向对齐
        flex-end        主轴延伸方向对齐
        space-between   等间距排列，首尾不留白
        space-around    等间距排列，首尾留白
     */
}
/* 父元素-纵向排列（主轴） */
.flex-v {
    display: box;              /* OLD - Android 4.4- */

    display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;      /* TWEENER - IE 10 */
    display: -webkit-flex;     /* NEW - Chrome */
    display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */


    /* 09版 */
    -webkit-box-orient: vertical;
    /* 12版 */
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
}
/* 父元素-纵向换行 */
.flex-vw {
    /* 09版 */
    /*-webkit-box-lines: multiple;*/
    /* 12版 */
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -o-flex-wrap: wrap;
    flex-wrap: wrap;
}
/* 父元素-竖直居中（主轴是横向才生效） */
.flex-vc {
    /* 09版 */
    -webkit-box-align: center;
    /* 12版 */
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    -o-align-items: center;
    align-items: center;
}
/* 子元素-显示在从左向右（从上向下）第1个位置，用于改变源文档顺序显示 */
.flex-1 {
    -webkit-box-ordinal-group: 1;   /* OLD - iOS 6-, Safari 3.1-6 */
    -moz-box-ordinal-group: 1;      /* OLD - Firefox 19- */
    -ms-flex-order: 1;              /* TWEENER - IE 10 */
    -webkit-order: 1;               /* NEW - Chrome */
    order: 1;                       /* NEW, Spec - Opera 12.1, Firefox 20+ */
}
/* 子元素-显示在从左向右（从上向下）第2个位置，用于改变源文档顺序显示 */
.flex-2 {
    -webkit-box-ordinal-group: 2;   /* OLD - iOS 6-, Safari 3.1-6 */
    -moz-box-ordinal-group: 2;      /* OLD - Firefox 19- */
    -ms-flex-order: 2;              /* TWEENER - IE 10 */
    -webkit-order: 2;               /* NEW - Chrome */
    order: 2;                       /* NEW, Spec - Opera 12.1, Firefox 20+ */
}
```

### 参考资料

- [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [Flex 布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
- [flexbox布局的兼容性](http://www.ayqy.net/blog/flexbox%E5%B8%83%E5%B1%80%E7%9A%84%E5%85%BC%E5%AE%B9%E6%80%A7/)
- [使用Flexbox：新旧语法混用实现最佳浏览器兼容](https://www.w3cplus.com/css3/using-flexbox.html)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
