# CSS3 效果一

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 画一个对话框
- 画一个平行四边形
- 用一个 div 画五角星
- 画一个爱心
- 画一个八卦阵
- 超级棒棒糖
- 跳动的字节
- 涟漪缓动效果
- 椭圆形
- 圆形
- 上三角
- 下三角
- 左三角
- 右三角
- 左上角
- 右上角
- 左下角
- 右下角
- 箭头
- 梯形
- 平行四边形
- 星星 (6 角)
- 星星 (5 角)
- 五边形
- 六边形
- 八边形
- 无穷大
- 菱形
- 钻石
- 钻戒
- 钻石 2
- 蛋蛋
- 吃豆人
- 对话泡泡
- 12 点 爆发
- 8 点 爆发
- 徽章丝带
- 太空入侵者（电脑游戏名）
- 电视
- 雪佛龙
- 放大镜
- Facebook 图标
- 月亮
- 旗
- 圆锥
- 十字架
- 根基
- 指示器
- 锁
- 卡券

### 1.画一个对话框

**HTML 代码**

```
    <div class="dialog">这是一个对话框！</div>
```

**CSS 代码**

```
.dialog{
    position:relative;
    margin-top:50px;
    margin-left:50px;
    padding-left:20px;
    line-height:2;
    background:lightblue;
    color:#fff;
}
```

### 2.画一个平行四边形

**HTML 代码**

```
<div class="parallel"></div>
```

**CSS 代码**

```
.parallel{
    width:200px;
    height:100px;
    margin-top:50px;
    margin-left:50px;
    background-color:lightblue;
    transform:skew(-20deg,0);
}
```

### 3.用一个 div 画五角星

**HTML 代码**

```
<div id="star"></div>
```

**CSS 代码**

```
#star {
    position: relative;
    margin: 200px auto;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent transparent red transparent;
    border-width: 70px 100px;
    transform: rotate(35deg);
}

#star::before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    top: -128px;
    left: -95px;
    border-style: solid;
    border-color: transparent transparent red transparent;
    border-width: 80px 30px;
    transform: rotate(-35deg);
}

#star::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    top: -45px;
    left: -140px;
    border-style: solid;
    border-color: transparent transparent red transparent;
    border-width: 70px 100px;
    transform: rotate(-70deg);
}
```

### 4.画一个爱心

**HTML 代码**

```
<div id="heart"></div>
```

**CSS 代码**

```
#heart {
    width: 100px;
    height: 90px;
    position: relative;
    margin: 100px auto;
}

#heart::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 90px;
    background: red;
    border-radius: 50px 45px 0 0;
    transform-origin: 0 100%;
    transform: rotate(-45deg);
}

#heart::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 90px;
    top: -35px;
    left: -35px;
    background: red;
    border-radius: 50px 45px 0 0;
    transform-origin: 0 100%;
    transform:rotate(45deg);
}
```

### 5.画一个八卦阵

**HTML 代码**

```
<div class="bagua"></div>
```

**CSS 代码**

```
body {
    background-color: #ccc;
}

.bagua {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 100px auto;
    border-radius: 50%;
    background-color: #000;
    background-image: linear-gradient(to right, transparent 50%, #fff 50%);
}

.bagua::before {
    content: '';
    position: absolute;
    left: 75px;
    width: 0;
    height: 0;
    padding: 25px;
    border-radius: 50%;
    border: 50px solid #000;
    background: #fff;
    background-clip: padding-box;
}

.bagua::after {
    content: '';
    position: absolute;
    top: 150px;
    left: 75px;
    width: 0;
    height: 0;
    padding: 25px;
    border-radius: 50%;
    border: 50px solid #fff;
    background: #000;
    background-clip: padding-box;
}
```

### 6.超级棒棒糖

**HTML 代码**

```
<div class="linear"></div>
```

**CSS 代码**

```
.linear {
    width: 300px;
    height: 300px;
    margin: 20px auto;
    border-radius: 50%;
    /* 重复性径向渐变 */
    background-image: repeating-radial-gradient(red 0px, green 30px, orange 40px);
    position: relative;
}

.linear::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    width: 10px;
    height: 500px;
    border-radius: 0 0 10px 10px;
    /* 线性渐变 */
    background-image: linear-gradient(to top, red 20%, orange 40%, lightblue 60%, green 80%);
}
```

### 7.跳动的字节

**HTML 代码**

```
<div class="spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

**CSS 代码**

```
.spinner {
  margin: 100px auto;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 10px;
}

.spinner>div {
  display: inline-block;
  background-color: rgb(43, 128, 226);
  height: 100%;
  width: 5px;
  margin-left: 1px;
  animation: bytedance 1s infinite;
}

.spinner>div:nth-child(2) {
  background-color: rgb(49, 84, 124);
  animation-delay: -0.9s;
}

.spinner>div:nth-child(3) {
  background-color: rgb(88, 128, 173);
  animation-delay: -0.8s;
}

.spinner>div:nth-child(4) {
  background-color: rgb(88, 128, 173);
  animation-delay: -0.7s;
}

.spinner>div:nth-child(5) {
  background-color: rgb(142, 187, 240);
  animation-delay: -0.6s;
}

@keyframes bytedance {

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

### 8.涟漪缓动效果

**HTML 代码**

```
<div class="spinner">
  <div></div>
  <div></div>
</div>
```

**CSS 代码**

```
.spinner {
    width: 60px;
    height: 60px;
    position: relative;
    margin: 100px auto;
}

.spinner>div {
    width: 100%;
    height: 100%;
    opacity: 0.6;
    border-radius: 50%;
    background-color: lightblue;
    position: absolute;
    top: 0;
    left: 0;
    animation: loading 1.4s infinite ease-in;
}

.spinner>div:nth-child(2) {
    animation-delay: -0.7s;
}

@keyframes loading {

    0%,
    100% {
        transform: scale(0.0);
    }

    50% {
        transform: scale(1.0);
    }
}
```

### 9.椭圆形

**HTML 代码**

```
<div id="oval"></div>
```

**CSS 代码**

```
#oval {
    width: 200px;
    height: 100px;
    background: red;
    border-radius: 100px / 50px;
}
```

### 10. 圆形

**HTML 代码**

```
<div id="circle"></div>
```

**CSS 代码**

```
 #circle {
    width: 100px;
    height: 100px;
    background: red;
    border-radius: 50%;
}
```

### 11. 上三角

**HTML 代码**

```
<div id="triangle-top"></div>
```

**CSS 代码**

```
#triangle-bottom{
  width:0;
  height:0;
  border:50px solid;
  border-color:  transparent transparent red transparent;
}
```

### 12.下三角

**HTML 代码**

```
<div id="triangle-bottom"></div>
```

**CSS 代码**

```
#triangle-bottom{
  width:0;
  height:0;
  border:50px solid;
  border-color: red transparent transparent transparent;
}
```

### 13. 左三角

**HTML 代码**

```
<div id="triangle-left"></div>
```

**CSS 代码**

```
#triangle-left{
  width:0;
  height:0;
  border:50px solid;
  border-color:transparent red transparent transparent;
}
```

### 14. 右三角

**HTML 代码**

```
<div id="triangle-right"></div>
```

**CSS 代码**

```
#triangle-right{
  width:0;
  height:0;
  border:50px solid;
  border-color:transparent transparent transparent red;
}
```

### 15. 左上角

**HTML 代码**

```
<div id="triangle-topleft"></div>
```

**CSS 代码**

```
 #triangle-topleft{
    width:0;
    height:0;
    border-right:50px solid;
    border-top: 50px solid;
    border-color: red transparent transparent;
}
```

### 16. 右上角

**HTML 代码**

```
<div id="triangle-topright"></div>
```

**CSS 代码**

```
#triangle-topright{
    width:0;
    height:0;
    border-left:50px solid;
    border-top: 50px solid;
    border-color: red transparent transparent;
}
```

### 17. 左下角

**HTML 代码**

```
<div id="triangle-bottomleft"></div>
```

**CSS 代码**

```
#triangle-bottomleft{
  width:0;
  height:0;
  border-bottom:50px solid;
  border-right:50px solid;
  border-color:transparent transparent red transparent;
}
```

### 18. 右下角

**HTML 代码**

```
<div id="triangle-topright"></div>
```

**CSS 代码**

```
#triangle-topright{
    width:0;
    height:0;
    border-left:50px solid;
    border-top: 50px solid;
    border-color: red transparent transparent;
}
```

### 19. 箭头

**HTML 代码**

```
<div id="curvedarrow"></div>
```

**CSS 代码**

```
#curvedarrow {
    position: relative;
    width: 0;
    height: 0;
    border-top: 9px solid transparent;
    border-right: 9px solid red;
    transform: rotate(10deg);
}
#curvedarrow::after {
    content: '';
    position: absolute;
    border: 0 solid transparent;
    border-top: 3px solid red;
    border-radius: 20px 0 0 0;
    top: -12px;
    left: -9px;
    width: 12px;
    height: 12px;
    transform: rotate(45deg);
}
```

### 20. 梯形

**HTML 代码**

```
<div id="trapezoid"></div>
```

**CSS 代码**

```
#trapezoid {
    border-bottom: 100px solid red;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    height: 0;
    width: 100px;
}
```

### 21. 平行四边形

**HTML 代码**

```
<div class="parallel"></div>
```

**CSS 代码**

```
.parallel {
    margin-top: 50px;
    margin-left: 50px;
    width: 200px;
    height: 100px;
    background: lightblue;
    transform: skew(-20deg, 0);
}
```

### 22. 星星 (6 角)

**HTML 代码**

```
<div id="star-six"></div>
```

**CSS 代码**

```
#star-six{
    width:0;
    height: 0;
    border-left:50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
    position: relative;
}
#star-six::after{
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 100px solid red;
    position: absolute;
    content: '';
    top: 30px;
    left: -50px;
}
```

### 23. 五边形

**HTML 代码**

```
<div id="pentagon"></div>
```

**CSS 代码**

```
#pentagon {
    position: relative;
    width: 54px;
    box-sizing: content-box;
    border-width: 50px 18px 0;
    border-style: solid;
    top: 50px;
    border-color: red transparent;
}
#pentagon:before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    top: -85px;
    left: -18px;
    border-width: 0 45px 35px;
    border-style: solid;
    border-color: transparent transparent red;
}
```

### 24. 六边形

**HTML 代码**

```
<div id="hexagon"></div>
```

**CSS 代码**

```
#hexagon{
    width: 100px;
    height: 55px;
    background-color: red;
    position: relative;
    top:50px;
}
#hexagon::before{
    content: '';
    position: absolute;
    top: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 25px solid red;
}
#hexagon::after{
    content: '';
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 25px solid red;
}
```

### 25. 八边形

**HTML 代码**

```
<div id="octagon"></div>
```

**CSS 代码**

```
#octagon {
    width: 100px;
    height: 100px;
    background: red;
    position: relative;
}
#octagon:before {
    content: "";
    width: 42px;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 29px solid red;
    border-left: 29px solid #eee;
    border-right: 29px solid #eee;
}
#octagon:after {
    content: "";
    width: 42px;
    height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 29px solid red;
    border-left: 29px solid #eee;
    border-right: 29px solid #eee;
}
```

### 26. 无穷大

**HTML 代码**

```
<div id="infinity"></div>
```

**CSS 代码**

```
#infinity{
    position: relative;
    width: 212px;
    height: 100px;
    box-sizing: content-box;
}

#infinity::before,#infinity::after{
    content: '';
    box-sizing: content-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    border:20px solid red;
    border-radius: 50px 50px 0 50px;
    transform: rotate(-45deg);
}

#infinity::after{
    left: auto;
    right: 0;
    border-radius: 50px 50px 50px 0;
    transform: rotate(45deg);
}
```

### 27. 菱形

**HTML 代码**

```
<div id="diamond"></div>
```

**CSS 代码**

```
#diamond{
    width: 0;
    height: 0;
    border:50px solid transparent;
    border-bottom-color: red;
    position: relative;
    top: -50px;
}
#diamond::after{
    content: '';
    position: absolute;
    left: -50px;
    top: 50px;
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-top-color: red;
}
```

### 28. 钻石

**HTML 代码**

```
<div id="diamond-shield"></div>
```

**CSS 代码**

```
#diamond-shield{
    width: 0;
    height: 0;
    border:50px solid transparent;
    border-bottom:20px solid red;
    position: relative;
    top: -50px;
}
#diamond-shield::after{
    content: '';
    position: absolute;
    left: -50px;
    top: 20px;
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-top: 70px solid red;
}
```

### 29. 钻戒

**HTML 代码**

```
<div id="diamond-narrow"></div>
```

**CSS 代码**

```
#diamond-narrow {
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom: 70px solid red;
    position: relative;
    top: -50px;
}
#diamond-narrow:after {
    content: '';
    position: absolute;
    left: -50px;
    top: 70px;
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-top: 70px solid red;
}
```

### 30. 钻石 2

**HTML 代码**

```
<div id="cut-diamond"></div>
```

**CSS 代码**

```
#cut-diamond{
    border-style: solid;
    border-color: transparent transparent red transparent;
    border-width: 0 25px 25px 25px;
    height: 0;
    width: 50px;
    box-sizing: content-box;
    position: relative;
    margin: 20px 0 50px 0;
}
#cut-diamond:after {
    content: "";
    position: absolute;
    top: 25px;
    left: -25px;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: red transparent transparent transparent;
    border-width: 70px 50px 0 50px;
}
```

### 32. 蛋蛋

**HTML 代码**

```
<div id="egg"></div>
```

**CSS 代码**

```
#egg{
    display: block;
    width: 126px;
    height: 180px;
    background-color: red;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
```

### 33. 吃豆人

**HTML 代码**

```
<div id="pacman"></div>
```

**CSS 代码**

```
#pacman{
  width:0px;
  height:0px;
  border-right:60px solid transparent;
  border-top:60px solid red;
  border-left:60px solid red;
  border-bottom:60px solid red;
  border-top-left-radius:60px;
  border-top-right-radius:60px;
  border-bottom-left-radius:60px;
  border-bottom-right-radius:60px;
}
```

### 34. 对话泡泡

**HTML 代码**

```
<div id="talkbubble"></div>
```

**CSS 代码**

```
#talkbubble{
    width:120px;
    height: 80px;
    background-color: red;
    position: relative;
    border-radius: 10px;
    left: 50px;
}
#talkbubble::before{
    content: '';
    position: absolute;
    right: 100%;
    top: 26px;
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-right: 26px solid red;
    border-bottom: 13px solid transparent;
}
```

### 35. 12 点 爆发

**HTML 代码**

```
<div id="burst-12"></div>
```

**CSS 代码**

```
#burst-12{
  background:red;
  width:80px;
  height:80px;
  position:relative;
  text-align:center;
  top:20px;
  left:20px;
}
#burst-12::before,
#burst-12::after{
  content:'';
  position:absolute;
  top:0;
  left:0;
  height:80px;
  width:80px;
  background:red;
}
#burst-12::before {
  transform: rotate(30deg);
}
#burst-12::after {
  transform: rotate(60deg);
}
```

### 36. 8 点 爆发

**HTML 代码**

```
<div id="burst-8"></div>
```

**CSS 代码**

```
#burst-8{
    background:red;
    width: 80px;
    height: 80px;
    position: relative;
    top:20px;
    left: 20px;
    text-align: center;
    transform: rotate(20deg);
}
#burst-8::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 80px;
    width: 80px;
    background: red;
    transform: rotate(135deg);
}
```

### 37. 徽章丝带

**HTML 代码**

```
<div id="badge-ribbon"></div>
```

**CSS 代码**

```
#badge-ribbon{
    position: relative;
    background: red;
    height: 100px;
    width: 100px;
    border-radius: 50px;
}
#badge-ribbon::before,#badge-ribbon::after{
    content: '';
    position: absolute;
    border-bottom: 70px solid red;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    top: 70px;
    left: -10px;
    transform: rotate(-140deg);
}
#badge-ribbon::after{
    left: auto;
    right: -10px;
    transform: rotate(140deg);
}
```

### 38. 太空入侵者（电脑游戏名）

**HTML 代码**

```
<div id="space-invader"></div>
```

**CSS 代码**

```
#space-invader{
    box-shadow: 0 0 0 1em red,
    0 1em 0 1em red,
    -2.5em 1.5em 0 .5em red,
    2.5em 1.5em 0 .5em red,
    -3em -3em 0 0 red,
    3em -3em 0 0 red,
    -2em -2em 0 0 red,
    2em -2em 0 0 red,
    -3em -1em 0 0 red,
    -2em -1em 0 0 red,
    2em -1em 0 0 red,
    3em -1em 0 0 red,
    -4em 0 0 0 red,
    -3em 0 0 0 red,
    3em 0 0 0 red,
    4em 0 0 0 red,
    -5em 1em 0 0 red,
    -4em 1em 0 0 red,
    4em 1em 0 0 red,
    5em 1em 0 0 red,
    -5em 2em 0 0 red,
    5em 2em 0 0 red,
    -5em 3em 0 0 red,
    -3em 3em 0 0 red,
    3em 3em 0 0 red,
    5em 3em 0 0 red,
    -2em 4em 0 0 red,
    -1em 4em 0 0 red,
    1em 4em 0 0 red,
    2em 4em 0 0 red;
    background: red;
    width: 1em;
    height: 1em;
    overflow: hidden;
    margin: 50px 0 70px 65px;
}
```

### 39. 电视

**HTML 代码**

```
<div id="tv"></div>
```

**CSS 代码**

```
#tv{
    position: relative;
    width: 200px;
    height: 150px;
    margin: 20px 0;
    background: red;
    border-radius: 50%/10%;
    color: white;
    text-align: center;
    text-indent: .1em;
    left: 20px;
}
#tv::before{
    content:'';
    position: absolute;
    top:10%;
    bottom: 10%;
    right: -5%;
    left: -5%;
    background: inherit;
    border-radius: 5% /50%;
}
```

### 40. 雪佛龙

**HTML 代码**

```
<div id="chevron"></div>
```

**CSS 代码**

```
#chevron{
    position: relative;
    text-align: center;
    padding: 12px;
    margin-bottom: 6px;
    height: 60px;
    width: 200px;
}
#chevron::before{
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 51%;
    background:red;
    transform: skew(0deg,6deg);
}
#chevron::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background: red;
    transform: skew(0deg,-6deg);
}
```

### 41. 放大镜

**HTML 代码**

```
<div id="magnifying-glass"></div>
```

**CSS 代码**

```
#magnifying-glass{
    font-size: 10em;
    display: inline-block;
    width: 0.4em;
    box-sizing: content-box;
    height: 0.4em;
    border:0.1em solid red;
    position: relative;
    border-radius:0.35em;
}
#magnifying-glass::before{
    content:'';
    display: inline-block;
    position: absolute;
    right: -0.25em;
    bottom: -0.1em;
    border-width: 0;
    background: red;
    width: 0.35em;
    height: 0.08em;
    transform: rotate(45deg);
}
```

### 42. Facebook 图标

**HTML 代码**

```
<div id="facebook-icon"></div>
```

**CSS 代码**

```
#facebook-icon{
    background:red;
    text-indent: -999em;
    width: 100px;
    height: 110px;
    box-sizing: content-box;
    border-radius: 5px;
    position: relative;
    overflow:hidden;
    border:15px solid red;
    border-bottom: 0;
}

#facebook-icon::before{
    content: "/20";
    position: absolute;
    background: red;
    width: 40px;
    height: 90px;
    bottom:-30px;
    right: -37px;
    border:20px solid #eee;
    border-radius: 25px;
    box-sizing: content-box;
}

#facebook-icon::after{
    content: "/20";
    position: absolute;
    width: 55px;
    top: 50px;
    height: 20px;
    background: #eee;
    right: 5px;
    box-sizing: content-box;
}
```

### 43. 月亮

**HTML 代码**

```
<div id="moon"></div>
```

**CSS 代码**

```
#moon{
    height: 80px;
    width: 80px;
    border-radius: 50%;
    box-shadow: 15px 15px 0 0 red;
}
```

### 44. 旗

**HTML 代码**

```
<div id="flag"></div>
```

**CSS 代码**

```
#flag{
    width: 110px;
    height: 56px;
    box-sizing: content-box;
    padding-top: 15px;
    position: relative;
    background-color: red;
    color: white;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-align: center;
    text-transform: uppercase;
}
#flag::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-bottom: 13px solid #fff;
    border-left: 55px solid transparent;
    border-right: 55px solid transparent;
}
```

### 45. 圆锥

**HTML 代码**

```
<div id="cone"></div>
```

**CSS 代码**

```
#cone{
    width: 0;
    height: 0;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
    border-top: 100px solid red;
    border-radius: 50%;
}
```

### 46. 十字架

**HTML 代码**

```
<div id="cross"></div>
```

**CSS 代码**

```
#cross{
    background-color: red;
    height: 100px;
    position: relative;
    width: 20px;
    left: 40px;
}
#cross::after{
    background-color: red;
    content: '';
    height: 20px;
    left: -40px;
    position: absolute;
    top: 40px;
    width: 100px;
}
```

### 47. 根基

**HTML 代码**

```
```

**CSS 代码**

```
```

### 48. 指示器

**HTML 代码**

```
```

**CSS 代码**

```
```

### 49. 锁

**HTML 代码**

```
```

**CSS 代码**

```
```

### 50. 卡券

**HTML 代码**

```
<div class="hollow-one-circle"></div>
```

**CSS 代码**

```
.hollow-one-circle {
  width: 100px;
  height: 100px;
  position: relative;
  background:radial-gradient(circle at 0 50px,transparent 10px,#00abd5 0) top left/100px 100% no-repeat;
}
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
