# 字符串扩展

## 前言

ES6 对字符串的改造和增强，介绍字符串对象的新增方法。

## 内容

- [字符串的遍历器接口](#一字符串的遍历器接口)
- [模板字符串](#二模板字符串)
- [字符串新增方法](#三字符串新增方法)

### 一、字符串的遍历器接口

ES6为字符串添加了遍历器接口，使得字符串可以被`for...of`循环遍历。

```
for(let codePoint of 'foo'){
    console.log(codePoint)
}
// 'f'
// 'o'
// 'o'
```

### 二、模板字符串

模板字符串是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。

```
// 普通字符串
`In JavaScript '\n' is a line-feed.`

// 多行字符串
`In JavaScript this is 
not legal.`

// 字符串中嵌入变量
var name = "Bob",time = "today";
`Hello ${name},how are you ${time}?`

```

### 三、字符串新增方法

- `String.fromCodePoint()`： 用于从码点返回对应字符，但是这个方法不能识别32位的UTF-16字符。
- `repeat()`：方法返回一个新字符串，表示将原字符串重复`n`次。
- `trimStart()，trimEnd()`：`trimStart()`消除字符串头部的空格，`trimEnd()`消除发问的空格。
- `includes()，startsWith()，endsWith()`：`includes()`返回布尔值，表示是否找到了参数字符串。`startsWidth()`返回布尔值，表示参数字符串是否在原字符串的头部。`endsWidth()`返回布尔值，表示参数字符串是否在原字符串的尾部。
- `padStart()，padEnd()`：用于头部补全和尾部补全。

### 参考资料

- [《ECMAScript 6 入门》 第三版](https://yjhenan.gitbooks.io/-ecmascript-6/content/docs/string.html)
- [ECMAScript 6 入门](http://es6.ruanyifeng.com/#docs/string)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>