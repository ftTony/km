# CSS3 效果二

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 提示气泡
- 手风琴
- 悬停
- 图片闪光
- 加载动画
- 弹簧动画
- 粘性球
- 抛物线
- 涟漪
- 波浪
- 弹制横屏
- 纸面效果
- 彩色效果

### 1.提示气泡

**HTML 代码**

```
<div class="poptip btn" aria-controls="弹出气泡">poptip</div>
```

**CSS 代码**

```
.poptip {
    position: relative;
    z-index: 101;
    top: 50px;
}
.poptip::before,
.poptip::after {
    visibility: hidden;
    opacity: 0;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s ease 0.2s;
    box-sizing: border-box;
}
.poptip::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: #30363d transparent transparent transparent;
    left: calc(50% - 8px);
    top: 0px;
    transform: translateX(0%) translateY(-12px);
}
.poptip::after {
    font-size: 14px;
    color: #fff;
    content: attr(aria-controls);
    position: absolute;
    padding: 6px 12px;
    white-space: nowrap;
    z-index: -1;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%) translateY(-12px);
    background-color: #30363d;
    line-height: 1;
    border-radius: 2px;
}
.poptip:hover::before,
.poptip:hover::after {
    visibility: visible;
    opacity: 1;
}

.btn {
    width: 100px;
    line-height: 1.5;
    padding: 5px 10px;
    color: #fff;
    background-color: #00adb5;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
}
```

### 手风琴

**HTML 代码**

```
<ul class="accordion-container">
    <li
    class="accordion-item"
    style="background-image: url(https://qishaoxuan.github.io/css_tricks/assets/img/bg7.af68deb6.jpeg);"
    >
    <p class="accordion-title">背景1</p>
    </li>
    <li
    class="accordion-item"
    style="background-image: url(https://qishaoxuan.github.io/css_tricks/assets/img/bg10.eaa9de63.jpeg);"
    >
    <p class="accordion-title">背景2</p>
    </li>
    <li
    class="accordion-item"
    style="background-image: url(https://qishaoxuan.github.io/css_tricks/assets/img/bg9.aa9a9041.jpeg);"
    >
    <p class="accordion-title">背景3</p>
    </li>
    <li
    class="accordion-item"
    style="background-image: url(https://qishaoxuan.github.io/css_tricks/assets/img/bg7.af68deb6.jpeg);"
    >
    <p class="accordion-title">背景4</p>
    </li>
    <li
    class="accordion-item"
    style="background-image: url(https://qishaoxuan.github.io/css_tricks/assets/img/bg10.eaa9de63.jpeg);"
    >
    <p class="accordion-title">背景5</p>
    </li>
</ul>
```

**CSS 代码**

```
.accordion-container {
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.accordion-container .accordion-item {
    list-style: none;
    height: 500px;
    transition: width 0.5s;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.accordion-container .accordion-item:not(:hover) {
    width: 20%;
}
.accordion-container .accordion-item:hover {
    width: 800px;
}
.accordion-container .accordion-item:hover::after {
    opacity: 1;
}
.accordion-container .accordion-item::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.5s;
}
.accordion-container .accordion-item .accordion-title {
    color: #fff;
    font-size: 18px;
    z-index: 2;
}
```

### 边框动画

**HTML 代码**

```
<div class="button">
    <div class="button__content">hover me to change</div>
</div>
```

**CSS 代码**

```
.button {
    width: 200px;
    height: 60px;
    position: relative;
    background: #fff;
    margin: 30px auto;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    line-height: 60px;
}
.button::before {
    content: '';
    width: 0;
    height: 0;
    background: #00adb5;
    position: absolute;
    top: -1px;
    right: -1px;
    z-index: 0;
    transition: width 0.5s, height 0.5s;
}
.button::after {
    content: '';
    width: 0;
    height: 0;
    background: #00adb5;
    position: absolute;
    bottom: -1px;
    left: -1px;
    z-index: 0;
    transition: width 0.5s, height 0.5s;
}
.button:hover::before {
    width: calc(100% + 2px);
    height: calc(100% + 2px);
}
.button:hover::after {
    width: calc(100% + 2px);
    height: calc(100% + 2px);
}
.button__content {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    background: #fff;
}
```

### 图片闪光

**HTML 代码**

```
<div class="flash-container">
    <img
    src="https://qishaoxuan.github.io/css_tricks/assets/img/bg7.af68deb6.jpeg"
    alt=""
    />
</div>
```

**CSS 代码**

```
.flash-container {
    width: 300px;
    height: 500px;
    background-color: #333333;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}
.flash-container::after {
    content: '';
    height: 150%;
    width: 25px;
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    opacity: 0.6;
    filter: blur(6px);
    animation: move 1s infinite ease-out;
}
.flash-container img {
    max-width: 100%;
}
@keyframes move {
    0% {
        transform: translate(-200px, -200px) rotate(45deg);
    }
    100% {
        transform: translate(200px, 200px) rotate(45deg);
    }
}
```

### 加载动画

#### 动画一

**HTML 代码**

```
<div class="load-container">
    <div class="boxLoading"></div>
</div>
```

**CSS 代码**

```
.load-container {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto;
}
.load-container .boxLoading {
    width: 50px;
    height: 50px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.load-container .boxLoading::before {
    content: '';
    width: 50px;
    height: 5px;
    background-color: #000;
    opacity: 0.1;
    position: absolute;
    top: 59px;
    left: 0;
    border-radius: 50%;
    animation: shadow 0.5s linear infinite;
}
.load-container .boxLoading::after {
    content: '';
    width: 50px;
    height: 50px;
    background-color: #00adb5;
    animation: animate 0.5s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;
}
@keyframes animate {
    17% {
        border-bottom-right-radius: 3px;
    }
    25% {
        transform: translateY(9px) rotate(22.5deg);
    }
    50% {
        transform: translateY(18px) scale(1, 0.9) rotate(45deg);
        border-bottom-right-radius: 40px;
    }
    75% {
        transform: translateY(9px) rotate(67.5deg);
    }
    100% {
        transform: translateY(0) rotate(90deg);
    }
}
@keyframes shadow {
    0%,
    100% {
        transform: scale(1, 1);
    }
    50% {
        transform: scale(1.2, 1);
    }
}
```

#### 动画二

**HTML 代码**

```
<div class="loading-bro">
    <h1>Loading</h1>
    <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
    <circle id="loading-inner" cx="75" cy="75" r="60" />
    </svg>
</div>
```

**CSS 代码**

```
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300);
body {
  background: #f1f1f1;
  font-family: 'Roboto', sans-serif;
}

.loading-bro {
  margin: 50px auto;
  width: 150px;
}
.loading-bro > h1 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 1em;
  font-weight: 300;
  color: #8E8E8E;
}

#load {
  width: 150px;
  animation: loading 3s linear infinite;
}
#load #loading-inner {
  stroke-dashoffset: 0;
  stroke-dasharray: 300;
  stroke-width: 10;
  stroke-miterlimit: 10;
  stroke-linecap: round;
  animation: loading-circle 2s linear infinite;
  stroke: #51BBA7;
  fill: transparent;
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loading-circle {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -600;
  }
}
```

#### 动画三

**HTML 代码**

```
<div class="load"></div>
```

**CSS 代码**

```
.load {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgba(0, 169, 178, 0.2);
}
.load::before {
    content: '';
    width: 70px;
    height: 70px;
    background-color: #00adb5;
    position: absolute;
    left: 50%;
    bottom: 50%;
    z-index: 1;
    transform-origin: left bottom;
    animation: rotate 1.5s infinite linear;
}
.load::after {
    content: '';
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    z-index: 2;
    border-radius: 50%;
}
@keyframes rotate {
    0% {
        transform: rotate(0);
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
```

#### 动画四

**HTML 代码**

```

```

**CSS 代码**

```
.load-container {
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.load-container .container {
    width: 50px;
    height: 60px;
    text-align: center;
    font-size: 10px;
}
.load-container .container .boxLoading {
    background-color: #00adb5;
    height: 100%;
    width: 6px;
    display: inline-block;
    animation: stretchdelay 1.2s infinite ease-in-out;
}
.load-container .container .boxLoading2 {
    animation-delay: -1.1s;
}
.load-container .container .boxLoading3 {
    animation-delay: -1s;
}
.load-container .container .boxLoading4 {
    animation-delay: -0.9s;
}
.load-container .container .boxLoading5 {
    animation-delay: -0.8s;
}
@keyframes stretchdelay {
    0%,
    40%,
    100% {
        transform: scaleY(0.4);
    }
    20% {
        transform: scaleY(1);
    }
}
```

#### 动画五

**HTML 代码**

```
<div class="load-container"></div>
```

**CSS 代码**

```
.load-container {
    width: 60px;
    height: 60px;
    background-color: #00adb5;
    margin: 50px auto;
    animation: rotateplane 1.2s infinite ease-in-out;
}
@keyframes rotateplane {
    0% {
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
        -webkit-transform: perspective(120px) rotateX(-180deg)
        rotateY(-179.9deg);
    }
}
```

#### 动画六

**HTML 代码**

```
<div class="load-container">
    <div class="load load1"></div>
    <div class="load load2"></div>
    <div class="load"></div>
</div>
```

**CSS 代码**

```
.load-container {
    margin: 50px auto;
    width: 150px;
    text-align: center;
}
.load-container .load {
    width: 20px;
    height: 20px;
    background-color: #00adb5;
    border-radius: 100%;
    display: inline-block;
    animation: bouncedelay 1.4s infinite ease-in-out;
    animation-fill-mode: both;
}
.load-container .load1 {
    animation-delay: -0.32s;
}
.load-container .load2 {
    animation-delay: -0.16s;
}

@keyframes bouncedelay {
    0%,
    80%,
    100% {
        transform: scale(0);
    }
    40% {
        transform: scale(1);
    }
}
```

#### 动画七

**HTML 代码**

```
<div class="load-container">
    <div class="container container1">
        <div class="circle circle1"></div>
        <div class="circle circle2"></div>
        <div class="circle circle3"></div>
        <div class="circle circle4"></div>
    </div>
    <div class="container container2">
        <div class="circle circle1"></div>
        <div class="circle circle2"></div>
        <div class="circle circle3"></div>
        <div class="circle circle4"></div>
    </div>
</div>
```

**CSS 代码**

```
.load-container {
    margin: 50px auto;
    width: 48px;
    height: 48px;
    position: relative;
}
.load-container .container {
    position: absolute;
    width: 100%;
    height: 100%;
}
.load-container .container .circle {
    width: 12px;
    height: 12px;
    background-color: #00adb5;
    border-radius: 100%;
    position: absolute;
    animation: bouncedelay 1.2s infinite ease-in-out;
    animation-fill-mode: both;
}
.load-container .container .circle1 {
    top: 0;
    left: 0;
}
.load-container .container .circle2 {
    right: 0;
    top: 0;
}
.load-container .container .circle3 {
    right: 0;
    bottom: 0;
}
.load-container .container .circle4 {
    bottom: 0;
    left: 0;
}
.load-container .container1 .circle2 {
    animation-delay: -0.9s;
}
.load-container .container1 .circle3 {
    animation-delay: -0.6s;
}
.load-container .container1 .circle4 {
    animation-delay: -0.3s;
}
.load-container .container2 {
    transform: rotateZ(45deg);
}
.load-container .container2 .circle1 {
    animation-delay: -1.1s;
}
.load-container .container2 .circle2 {
    animation-delay: -0.8s;
}
.load-container .container2 .circle3 {
    animation-delay: -0.5s;
}
.load-container .container2 .circle4 {
    animation-delay: -0.2s;
}
.load-container .container3 {
    transform: rotateZ(90deg);
}
.load-container .container3 .circle1 {
    animation-delay: -1s;
}
.load-container .container3 .circle2 {
    animation-delay: -0.7s;
}
.load-container .container3 .circle3 {
    animation-delay: -0.4s;
}
.load-container .container3 .circle4 {
    animation-delay: -0.1s;
}
@keyframes bouncedelay {
    0%,
    80%,
    100% {
        transform: scale(0);
    }
    40% {
        transform: scale(1);
    }
}
```

### 弹簧动画

**HTML 代码**

```
<div class="container">
  <section>
    <h1>弹簧动画</h1>
  </section>
  <section>
    <div class="moveBox"></div>
  </section>
</div>
```

**CSS 代码**

```
// Stylues

// 弹跳函数
spring-wobbly(t)
  return -0.5 * (2.71828 ** (-6 * t)) * (-2 * (2.71828 ** (6 * t)) + sin(12 * t) + 2 * cos(12 * t))

// 线性函数
lerp($a, $b, $p)
  return $a + $p * ($b - $a)

@keyframes moveLeft {
  for i in (0 .. 100) {
    {i + '%'} {
      left: lerp(0, 200px, spring-wobbly(i / 100))
    }
  }
}

@keyframes scale {
  for i in (0 .. 100) {
    {i + '%'} {
      transform: scale(lerp(.3, 1, spring-wobbly(i / 100)),lerp(.3, 1, spring-wobbly(i / 100)));
    }
  }
}

h1
  text-align:center;
  font-size:40px;
  margin:0;
  line-height:50px;
  animation scale 1.5s linear infinite

.moveBox
  animation: 2s moveLeft linear infinite;
  width: 30px;
  height: 30px;
  background-color: #00adb5;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin:auto;

section
  margin-bottom: 30px;
  height: 50px;
  position: relative;

.container
  width:500px;
  margin: 0 auto;
```

### 粘性球

**HTML 代码**

```
<div class="sticky-container">
    <div class="blurfield">
    <div class="ball1"></div>
    <div class="ball2"></div>
    </div>
</div>
```

**CSS 代码**

```
.sticky-container {
    background-color: #000;
    overflow: hidden;
}
.sticky-container .blurfield {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    filter: blur(10px) contrast(30);
}
.sticky-container .ball1,
.sticky-container .ball2 {
    width: 80px;
    height: 80px;
    background-color: #fff;
    position: absolute;
    animation: ball 10s infinite;
    border-radius: 100%;
}
.sticky-container .ball2 {
    animation-delay: -2s;
}

@keyframes ball {
    0%,
    100% {
        transform: translateX(-100px);
    }

    50% {
        transform: translateX(100px);
    }
}
```

**CSS 代码**

```

```

### 弹制横屏

**HTML 代码**

```

```

**CSS 代码**

```

```

### 纸面效果

**HTML 代码**

```

```

**CSS 代码**

```

```

### 彩色效果

**HTML 代码**

```

```

**CSS 代码**

```

```

### 伪元素实现悬停时按钮填充和边界浮动动画

**HTML 代码**

```

```

**CSS 代码**

```

```

### 伪类实现盒子阴影

**HTML 代码**

```

```

**CSS 代码**

```

```

### 参考资料

- [css-tricks](http://css-tricks.neatbang.com/)
- [《css 大法》之使用伪元素实现超实用的图标库](https://mp.weixin.qq.com/s/udMV3ocpdj7Ks9xmPV2xdg)
- [趣味 CSS3 效果挑战小汇总](https://juejin.im/post/5d3810fd6fb9a07ed13716d9)
- [请收下这 72 个炫酷的 CSS 技巧](https://juejin.im/post/5e033c946fb9a0164b4ef360)
- [45 个值得收藏的 CSS 形状](https://juejin.im/post/5cbd1f0ae51d456e5e035f45)
- [epicmax](https://epic-spinners.epicmax.co/#/)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
