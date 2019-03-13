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
    
}
```

### 二、两列自适应布局

```
```

### 三、三栏布局

```
```

### 四、等高布局

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