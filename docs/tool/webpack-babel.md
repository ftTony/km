# babel学习

## 前言

Babel是JavaScript编译器，更确切地说是源码到源码的编译器，通常也叫做“转换编译器”。意思是说你为Babel提供一些JavaScript代码，Babel更改这些代码，然后返回给你新生成的代码。

## 内容

- 抽象语法树
- Babel 的处理步骤
- 其他配套工具
- Babel 7.x

### 一、抽象语法树

### 二、Babel 的处理步骤

Babel的三个主要处理步骤分别是：**解析(parse)**，**转换(transform)**，**生成(generate)**。

#### 2.1 解析

**解析**步骤接收代码并输出AST。这个步骤分为两个阶段：**词法分析**和**语法分析**。

**词法分析**

词法分析阶段把字符串形式的代码转换为**令牌**流。

你可以把令牌看作是一个扁平的语法片段数组：

```
n * n;
```

```
[
  { type: { ... }, value: "n", start: 0, end: 1, loc: { ... } },
  { type: { ... }, value: "*", start: 2, end: 3, loc: { ... } },
  { type: { ... }, value: "n", start: 4, end: 5, loc: { ... } },
  ...
]
```

每一个`type`有一组属性来描述该令牌：

```
{
  type: {
    label: 'name',
    keyword: undefined,
    beforeExpr: false,
    startsExpr: true,
    rightAssociative: false,
    isLoop: false,
    isAssign: false,
    prefix: false,
    postfix: false,
    binop: null,
    updateContext: null
  },
  ...
}
```

和AST节点一样它们也有`start`、`end`、`loc`属性。

**语法分析**

语法分析阶段会把一个令牌流转换成AST的形式。这个阶段会使用令牌中的信息把它们转换成一个AST的表述结构，这样更易于后续的操作。

#### 2.2 转换

转换步骤接收AST并对其进行遍历，在此过程中对节点进行添加、更新及移除等操作。这是Babel或是其他编译器中最复杂的过程同时也是插件将要介入工作的部分。

#### 2.3 生成

代码生成步骤把最终（经过一系列转换之后）的AST转换成字符串形式的代码，同时还会创建源码映射。

代码生成其实很简单：深度优先遍历整个 AST，然后构建可以表示转换后代码的字符串。

### 三、其他配套工具

### 四、Babel 7.x

## 参考资料

- [一口(很长的)气了解 babel](https://juejin.im/post/5c19c5e0e51d4502a232c1c6)
- [深入Babel，这一篇就够了](https://juejin.im/post/5c21b584e51d4548ac6f6c99)
- [前端中的编译原理 - 从零打造一个实用的 Babel 插件](https://mp.weixin.qq.com/s/XSzQ5nkLI369CDhMZtF-MQ)
- [前端工程师需要了解的 Babel 知识](https://mp.weixin.qq.com/s/HdIvS75nJ0JFStoNPIl7Iw)
- [深入浅出 Babel 上篇：架构和原理 + 实战](https://juejin.im/post/5d94bfbf5188256db95589be)
- [深入浅出 Babel 下篇：既生 Plugin 何生 Macros](https://juejin.im/post/5da12397e51d4578364f6ffa)
- [Babel 插件手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>