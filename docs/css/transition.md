# 过渡

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- transition 介绍
- property
- duration
- timing-function
- delay

### 一、 transition 介绍

**含义**：在 CSS3 中，Transitions 功能通过将元素的某个属性从一个属性值在指定的时间内平滑过渡到另一个属性值来实现动画功能。

**语法**：transition:property | duration | timing-function | delay

- property：表示对那个属性进行平滑过渡。
- duration：表示在多长时间内完成属性值的平滑过渡。
- timing-function：表示通过什么方法来进行平滑过渡。
- delay：表示通过什么方法进行平滑过渡。

#### 例子

HTML 代码如下：

```
<div class="transitions">transition过渡功能</div>
```

CSS 代码如下：

```
.transitions {
    -webkit-transition-property: background-color;
    -webkit-transition-duration: 1s;
    -webkit-transition-timing-function: linear;
    -moz-transition-property: background-color;
    -moz-transition-duration: 1s;
    -moz-transition-timing-function: linear;

    -o-transition-property: background-color;
    -o-transition-duration: 1s;
    -o-transition-timing-function: linear;
}
.transitions:hover {
　　background-color: #00ffff;
}
```

### 二、property

`transition-property`指定应用过渡属性的名称。其主要有以下几个值：

- `none`：没有属性改变；
- `all`：所有属性改变（默认值）；
- `indent`：元素属性名；

当其值为 none 时，transition 马上停止执行，当指定为 all 时，则元素产生任何属性值变化时都将执行 transition 效果，ident 是可以指定元素的某一个属性值。

#### 2.1 例子

```
transition-property: none;
transition-property: all;
transition-property: test_05;
transition-property: -specific;
transition-property: sliding-vertically;

transition-property: test1;
transition-property: test1, animation4;
transition-property: all, height, all;
transition-property: all, -moz-specific, sliding;
```

### 三、duration

`transition-duration`属性以秒或毫秒为单位指定过渡动画所需的时间。

#### 3.1 例子

```
transition-duration:6s;
transition-duration:120ms;
transition-duration:1s 15s;
transition-duration:10s,30s,230ms;
```

### 四、timing-function

`transition-timing-function` 的值允许你根据时间的推进去改变属性值的变换速率，`transition-timing-function` 有 6 个可能值：

- `ease`：逐渐变慢（默认值），ease 函数等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0).
- `linear`：匀速，linear 函数等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0).
- `ease-in`：加速，ease-in 函数等同于贝塞尔曲线(0.42, 0, 1.0, 1.0).
- `ease-out`：减速，ease-out 函数等同于贝塞尔曲线(0, 0, 0.58, 1.0).
- `ease-in-out`：加速然后减速，ease-in-out 函数等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
- `cubic-bezier`：该值允许你去自定义一个时间曲线，可能的值是 0 至 1 之间的数值。

### 五、delay

`transition-delay`是用来指定一个动画开始执行的时间，也就是说当改变元素属性值后多长时间开始执行`transition`效果，其取值：`<time>`为数值，单位为 s（秒）或者 ms(毫秒)，其使用和 transition-duration 极其相似，也可以作用于所有元素，包括:before 和:after 伪元素。 默认大小是"0"，也就是变换立即执行，没有延迟。

## 参考资料

- [css3 动画功能介绍](https://www.cnblogs.com/tugenhua0707/p/4306760.html)
- [css3 中的变形（transform）、过渡(transtion)、动画(animation)](https://www.cnblogs.com/qianduanjingying/p/4937574.html)
- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
