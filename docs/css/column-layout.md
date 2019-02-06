# 几种常见的CSS布局（转载）

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 单列布局
- 两列自适应布局
- 三栏布局
- 等高布局
- 粘连布局

### 一、单列布局

![images](layout01.png)

常见的单列布局有两种：

- `header.content`和`footer`等宽的单列布局
- `header与`footer`等宽`content`略窄的单列布局

### 1.1 如何实现

```
<div class="header"></div>
<div class="content"></div>
<div class="footer"></div>
```

```
.header{
    margin:0 auto;
    max-width:960px;
    height:100px;
    background-color:blue;
}
.content{
    margin:0 auto;
    max-width:400px;
    height:400px;
    background-color:aquemarine;
}
.footer{
    margin:0 auto;
    max-width:960px;
    height:100px;
    background-color:aqua;
}
```

对于第二种，header、footer的内容宽度不设置，块级元素充满整个屏幕，但header、conter和footer的内容区设置同一个width，并通过margin:auto实现居中。

```
<div class="header">
    <div class="nav"></div>
</div>
<div class="content"></div>
<div class="footer"></div>
```

```
.header{
    margin:0 auto;
    max-width: 960px;
    height:100px;
    background-color: blue;
}
.nav{
    margin: 0 auto;
    max-width: 800px;
    background-color: darkgray;
    height: 50px;
}
.content{
    margin: 0 auto;
    max-width: 800px;
    height: 400px;
    background-color: aquamarine;
}
.footer{
    margin: 0 auto;
    max-width: 960px;
    height: 100px;
    background-color: aqua;
}
```

### 二、两列自适应布局

**两列自适应布局是指一列由内容撑开，另一列撑满剩余宽度的布局方式**

#### 2.1 float+overflow:hidden

如果是普通的两列布局，**浮动+普通元素的**margin便可以实现，但如果是自适应的两列布局，利用`float+overflow:hidden`便可以实现，这种办法主要通过`overflow`触发`BFC`不会重叠浮动元素。由于设置`overflow:hidden`并不会触发IE6-浏览的haslayout属性，所以需要调协`zoom:1`来兼容IE6-浏览器。具体代码如下：

```
<div class="parent" style="background-color: lightgrey;">
    <div class="left" style="background-color: lightblue;">
        <p>left</p>
    </div>
    <div class="right"  style="background-color: lightgreen;">
        <p>right</p>
        <p>right</p>
    </div>        
</div>
```

```
.parent {
  overflow: hidden;
  zoom: 1;
}
.left {
  float: left;
  margin-right: 20px;
}
.right {
  overflow: hidden;
  zoom: 1;
}
```

**注意点:如果侧边栏在右边时，注意渲染顺序。即在HTML中，先写侧边栏后写主内容**

#### 2.2 Flex布局

Flex布局，也叫弹性盒子布局，区区简单几行代码就可以实现各种页面的布局。

```
.parent{
    display:flex;
}
.right{
    margin-left:20px;
    flex:1;
}
```

#### 2.3 grid布局

Grid布局，是一个基于网格的二维布局系统，目的是用来优化用户界面设计。

```
.parent{
    display:grid;
    grid-template-columns:auto 1fr;
    grid-gap:20px;
}
```

### 三、三栏布局

**特征：中间列自适应宽度，旁边两侧固定宽度**



```
```

### 四、等高布局

等高布局是指子元素在父元素中高度相等的布局方式。接下来我们介绍常见几种实现方式:

```
```

### 五、粘连布局

```
```

### 参考资料

- [几种常见的CSS布局](https://github.com/ljianshu/Blog/issues/40)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>