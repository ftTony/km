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

`animation-name`属性为`@keyframes` 动画规定名称。

### 三、duration

### 四、timeing-function

### 五、delay

### 六、iterations-count

### 七、direction

### 八、play-state

### 九、fill-mode

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
