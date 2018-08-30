# 动画(Animations)

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- Animations 功能介绍

### 一、Animations 功能介绍

Animations 功能与 Transitions 功能相同，都是通过改变元素的属性值来实现动画效果的，它们的区别在于：使用 Transitions 功能是只能通过指定属性开始值与结束值。然后在这两个属性值之间进行平滑过渡的方式来实现动画效果，因此不能实现复杂的动画效果；而 Animations 则通过定义多个关键帧以及定义每个关键帧中元素的属性值来实现更为复杂的动画效果。

**语法：** animations:name duration timing-function delay iterations-count direction play-state fill-mode;

- name：定义使用的动画名称，需要和@keyframes 声明的动画名称一致
- duration：用来指定元素播放动画所持续的时间长
- timeing-function：动画的播放方式
- delay：指定元素动画开始播放的时间
- iterations-count：指定元素播放的循环次数
- direction：指定元素动画播放的方向，包括单向循环和双向循环
- play-state：用来控制元素动画的播放状态
- fill-mode：动画结束之后，关键帧是否保留在结束状态的值

#### 例子

```
@-webkit-keyframes mycolor {
   0% {background-color:red;}
   40% {background-color:darkblue;}
   70% {background-color: yellow;}
   100% {background-color:red;}
}
.animate:hover {
   -webkit-animation-name: mycolor;
   -webkit-animation-duration: 5s;
   -webkit-animation-timing-function:linear;
}
```

### 二、name

#### 2.1 语法

```
animation-name: none | IDENT[,none | IDENT]*;
```

#### 2.2 取值说明

`animation-name`定义使用的动画名称，其主要有两个值：IDENT 是由 `@Keyframes` 创建的动画名，换句话说此处的 IDENT 要和 `@Keyframes` 中的 IDENT 一致，如果不一致，将不能实现任何动画效果；none 为默认值，当值为 none 时，将没有任何动画效果。

#### 2.3 @Keyframes

`@keyframes` 规则通过在动画序列中定义关键帧（或 waypoints）的样式来控制 CSS 动画序列中的中间步骤。这比`transition`更能控制动画序列的中间步骤。

```
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

### 三、duration

#### 3.1 语法

```
animation-duration: <time>[,<time>]*
```

#### 3.2 取值说明

`animation-duration`是用来指定元素播放动画所持续的时间长，取值:<time>为数值，单位为 s（秒）其默认值为“0”。

### 四、timeing-function

`animation-timing-function`属性定义 CSS 动画在每一动画周期中执行的节奏。

#### 4.1 语法

```
animation-timing-function:ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>) [, ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>)]*
```

#### 4.2 取值说明

- `ease`：逐渐变慢（默认值），ease 函数等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0).
- `linear`：匀速，linear 函数等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0).
- `ease-in`：加速，ease-in 函数等同于贝塞尔曲线(0.42, 0, 1.0, 1.0).
- `ease-out`：减速，ease-out 函数等同于贝塞尔曲线(0, 0, 0.58, 1.0).
- `ease-in-out`：加速然后减速，ease-in-out 函数等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
- `cubic-bezier`：该值允许你去自定义一个时间曲线，可能的值是 0 至 1 之间的数值。

### 五、delay

`animation-delay`:属性定义动画于何时开始，即从动画应用在元素上到动画开始的这段时间的长度。

#### 5.1 语法

```
animation-delay: <time>[,<time>]*
```

#### 5.2 取值说明

取值为`<time>`为数值，单位为 s(秒)，其默认值也是 0。这个属性和 `transition-delay` 使用方法是一样的。

### 六、iterations-count

`animation-iteration-count`是用来指定元素播放动画的循环次数。

#### 6.1 语法

```
 animation-iteration-count:infinite | <number> [, infinite | <number>]*
```

#### 6.2 取值说明

其可以取值`<number>`为数字，其默认值为“1”；`infinite`为无限次数循环。

### 七、direction

`animation-direction`是用来指定元素动画播放的方向

#### 7.1 语法

```
animation-direction: normal | alternate [, normal | alternate]*
```

#### 7.2 取值说明

其只有两个值，默认值为`normal`，如果设置为`normal`时，动画的每次循环都是向前播放；另一个值是`alternate`，他的作用是，动画播放在第偶数次向前播放，第奇数次向反方向播放。

### 八、play-state

`animation-play-state`主要是用来控制元素动画的播放状态。

#### 8.1 语法

```
animation-play-state:running | paused [, running | paused]*
```

#### 8.2 取值说明

其主要有两个值，running 和 paused 其中 running 为默认值。他们的作用就类似于我们的音乐播放器一样，可以通过 paused 将正在播放的动画停下了，也可以通过 running 将暂停的动画重新播放，我们这里的重新播放不一定是从元素动画的开始播放，而是从你暂停的那个位置开始播放。另外如果暂时了动画的播放，元素的样式将回到最原始设置状态。

### 九、fill-mode

#### 9.1 语法

#### 9.2 取值说明

### 参考资料

- [css3 中的变形（transform）、过渡(transtion)、动画(animation)](https://www.cnblogs.com/qianduanjingying/p/4937574.html)
- [css3 动画由浅入深总结](https://www.cnblogs.com/tugenhua0707/p/5385261.html)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
