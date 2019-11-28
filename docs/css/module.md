# 样式模块化

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 预处理与后处理
- BEM

### 一、预处理与后处理

#### 1.1 预处理

比较流行的 CSS 预处理器有`Sass`，`Less`和`Stylus`，CSS 预处理器的出现主要针对于 CSS 缺少编程语言的灵活性而生的，是引入了一些编程概念而生的 DSL，开发者

#### 1.2 后处理

### 二、BEM

BEM 其实是一种命名的规范。或者说是一种 class 书写方式的方法论。BEM 的意思就是块(block)、元素(element)、修饰符(modifier)，是由 Yandex 团队提出的一种前端命名方法论。在具体 CSS 类选择器上的表现就像下面这样

```
.block {}
.block__element {}
.block--modifier {}
.block__element--modifier {}
```

### 参考资料

- [CSS 工程化演进](https://zhuanlan.zhihu.com/p/32117359)
- [使用 BEM 与命名空间来规范 CSS](https://github.com/alienzhou/blog/issues/14)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
