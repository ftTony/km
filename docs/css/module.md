# 样式模块化

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 预处理与后处理
- BEM

### 一、预处理与后处理

#### 1.1 预处理

比较流行的 CSS 预处理器有`Sass`，`Less`和`Stylus`，CSS 预处理器的出现主要针对于 CSS 缺少编程语言的灵活性而生的，是引入了一些编程概念而生的 DSL，开发者编写简介的语义化 DSL 代码，由预处理器编译成 CSS。

以`Sass`为例，该预处理器支持`.scss`，`.sass`文件类型，其语法支持变量、选择器嵌套、继承（extend）、混合（mixin）和一些逻辑语句，同时还支持跨文件的导入功能，因而使得开发者能够很好的使用编程思想书写样式。

#### 1.2 后处理

后处理器是对原生 CSS 进行处理并最终生成 CSS 的处理器，广义上还是个预处理器，与上面不同的是，它处理的对象是标准 CSS，比较典型的后处理工具有：

- clean-css——压缩 css
- `AutoPrefixer`--自动添加 CSS3 属性各浏览器的前缀
- Rework--取代 stylus 的插件化框架
- `PostCSS`

![images](module01.jpg)

**PostCSS**

`PostCSS`一开始是从`AutoPrefixer`项目中抽象出来的框架，它本身并不对 CSS 做具体的业务操作，只是将 CSS 解析成抽象语法树(AST)

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
