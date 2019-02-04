# 正则表达式学习

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 正则表达式字符匹配攻略
- 正则表达式位置匹配攻略
- 正则表达式括号的作用
- 正则表达式回溯法原理
- 正则表达式的拆分
- 正则表达式的构建
- 正则表达式编程

### 一、正则表达式字符匹配攻略

正则表达式是匹配模式，要么匹配字符，要么匹配位置。请记住这句话。

然而关于正则如何匹配字符的学习，大部分人都觉得这块比较杂乱。

毕竟元字符太多了，看起来没有系统性，不好记。本章就解决这个问题。

内容包括：

- 两种模糊匹配
- 字符组
- 量词
- 分支结构
- 案例分析

#### 1.1 两种模糊匹配

```
var regex = /hello/;
console.log( regex.test("hello") );
// => true
```

```
var regex = /ab{2,5}c/g;
var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
console.log( string.match(regex) );
// => ["abbc", "abbbc", "abbbbc", "abbbbbc"]

```

```
var regex = /a[123]b/g;
var string = "a0b a1b a2b a3b a4b";
console.log( string.match(regex) );
// => ["a1b", "a2b", "a3b"]
```

### 二、正则表达式位置匹配攻略

```

```

### 三、正则表达式括号的作用

```

```

### 四、正则表达式回溯法原理

```

```

### 五、正则表达式的拆分

```

```

### 六、正则表达式的构建

```

```

### 七、正则表达式编程

```

```

### 参考资料

- [JS 正则表达式完整教程（略长）](https://juejin.im/post/5965943ff265da6c30653879)
- [正则表达式 30 分钟入门教程](https://deerchao.net/tutorials/regex/regex.htm)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
