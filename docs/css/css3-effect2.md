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

```

**CSS 代码**

```

```

### 图片闪光

**HTML 代码**

```

```

**CSS 代码**

```

```

### 加载动画

**HTML 代码**

```

```

**CSS 代码**

```

```

### 弹簧动画

**HTML 代码**

```

```

**CSS 代码**

```

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
