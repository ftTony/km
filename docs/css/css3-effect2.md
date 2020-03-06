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

```

**CSS 代码**

```

```

#### 动画三

**HTML 代码**

```

```

**CSS 代码**

```

```

#### 动画四

**HTML 代码**

```

```

**CSS 代码**

```

```

#### 动画五

**HTML 代码**

```

```

**CSS 代码**

```

```

#### 动画六

**HTML 代码**

```

```

**CSS 代码**

```

```

#### 动画七

**HTML 代码**

```

```

**CSS 代码**

```

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

```

**CSS 代码**

```

```

### 抛物线

**HTML 代码**

```

```

**CSS 代码**

```

```

### 波浪

**HTML 代码**

```

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

- [《css 大法》之使用伪元素实现超实用的图标库](https://mp.weixin.qq.com/s/udMV3ocpdj7Ks9xmPV2xdg)
- [趣味 CSS3 效果挑战小汇总](https://juejin.im/post/5d3810fd6fb9a07ed13716d9)
- [请收下这 72 个炫酷的 CSS 技巧](https://juejin.im/post/5e033c946fb9a0164b4ef360)
- [45 个值得收藏的 CSS 形状](https://juejin.im/post/5cbd1f0ae51d456e5e035f45)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
