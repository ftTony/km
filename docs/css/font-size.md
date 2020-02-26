# 文本控制

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [文本控制](#%e6%96%87%e6%9c%ac%e6%8e%a7%e5%88%b6)
  - [前言](#%e5%89%8d%e8%a8%80)
  - [内容](#%e5%86%85%e5%ae%b9)
    - [一、letter-spacing 与 word-spacing](#%e4%b8%80letter-spacing-%e4%b8%8e-word-spacing)
    - [二、text-tranfrom](#%e4%ba%8ctext-tranfrom)
    - [三、word-break 和 word-wrap](#%e4%b8%89word-break-%e5%92%8c-word-wrap)
    - [四、 white-space](#%e5%9b%9b-white-space)
    - [五、::first-letter/::first-line伪元素](#%e4%ba%94first-letterfirst-line%e4%bc%aa%e5%85%83%e7%b4%a0)
    - [六、text-align 与元素对齐](#%e5%85%adtext-align-%e4%b8%8e%e5%85%83%e7%b4%a0%e5%af%b9%e9%bd%90)
    - [参考资料](#%e5%8f%82%e8%80%83%e8%b5%84%e6%96%99)
  - [联系作者](#%e8%81%94%e7%b3%bb%e4%bd%9c%e8%80%85)

### 一、`letter-spacing` 与 `word-spacing`

`letter-spacing`可以用来控制字符之间的间距，这里说的“字符”包括英文字母、汉字以及空格等。例如：

```
.lt{
  letter-spacing:.5em;
}
```

`word-spacing`如果一段文字中没有空格，则该属性无效。下面代码设定空格间隙是`20px`，也就是说空格现在占据的宽度是原有的空格宽度+`20px`的宽度：

```
<p>我有空 格，我该死......</p>
<style>
  p {
    word-spacing: 20px;
  }
</style>

```

### 二、text-tranfrom

假设有个输入框只能输入大写字母，那么如下设置，输入小写字母出现的却是大写字母，可用于身份证输入框或验证码输入框等：

取值：

- `none：` 无转换
- `capitalize：` 将每个单词的第一个字母转换成大写
- `uppercase：` 将每个单词转换成大写
- `lowercase：` 将每个单词转换成小写
- `full-width：` 将所有字符转换成 fullwidth 形式。如果字符没有相应的 fullwidth 形式，将保留原样。这个值通常用于排版拉丁字符和数字等表意符号。

```
  input {
    text-transform: uppercase;
  }
```

### 三、`word-break` 和 `word-wrap`

- `word-wrap`：内容将在边界内换行，如果需要，单词内部允许断行。
- `word-wrap`： 对于 Non-CJK 文本允许在任意字符内发生换行。

### 四、 `white-space`

`white-space`属性声明了如何处理元素内的空白字符，这类空白字符包括 Space（空格）键、Enter(回车)键、Tab（制表符）键产生的空白。

其属性值包括下面这些：

- `normal`：合并空白字符和换行符。
- `nowrap`：合并空白符，但不许换行；
- `pre`：不合并空白符，并且只在有换行地方换行；
- `pre-wrap`：不合并空白符，允许换行符换行和文本自动换行；

### 五、`::first-letter`/`::first-line`伪元素

`first-letter`选中首个字符

```
<style>
p{
  font-weight: bold;
  font-size: 22px;
}
p::first-letter{
  font-size: 44px;
  color: red;
}
</style>

<p>￥ 1000</p>
```

### 六、text-align 与元素对齐

`text-align`：定义元素内容的水平对齐方式。

`text-align:justify`为两端对齐。除了实现文字的两端对齐，还能用来做一些两端对齐的布局。

### 参考资料

- [撸了这么多代码，你真的了解字体吗？](https://mp.weixin.qq.com/s/NHKSKMNEIjSY5Eo27-CI0Q)
- [彻底搞懂 word-break、word-wrap、white-space](https://mp.weixin.qq.com/s/revhs0WEGiew-OSNQVMZGw)
- [可能是最全的 “文本溢出截断省略” 方案合集](https://mp.weixin.qq.com/s/HhSdZ1RBSRZt9I84qZj6oA)
- [轻轻松松实现高难度懒加载、吸顶、触底](https://mp.weixin.qq.com/s?__biz=MzA4Nzg0MDM5Nw==&mid=2247484430&idx=1&sn=5014aee107292b56abc8d794df0c5fb4&=41#wechat_redirect)
- 《CSS 世界》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
