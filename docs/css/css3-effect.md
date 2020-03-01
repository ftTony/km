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

```

**CSS 代码**

```

```

### 7.跳动的字节

**HTML 代码**

```

```

**CSS 代码**

```

```

### 8.涟漪缓动效果

**HTML 代码**

```

```

**CSS 代码**

```

```

### 9.椭圆形

**HTML 代码**

```

```

**CSS 代码**

```

```

### 10. 圆形

**HTML 代码**

```

```

**CSS 代码**

```

```

### 11. 上三角

**HTML 代码**

```

```

**CSS 代码**

```

```

### 12.下三角

**HTML 代码**

```

```

**CSS 代码**

```

```

### 13. 左三角

**HTML 代码**

```

```

**CSS 代码**

```

```

### 14. 右三角

**HTML 代码**

```

```

**CSS 代码**

```

```

### 15. 左上角

**HTML 代码**

```

```

**CSS 代码**

```

```

### 15. 右上角

**HTML 代码**

```

```

**CSS 代码**

```

```

### 16. 左下角

**HTML 代码**

```

```

**CSS 代码**

```

```

### 17. 右下角

**HTML 代码**

```

```

**CSS 代码**

```

```

### 18. 箭头

**HTML 代码**

```

```

**CSS 代码**

```

```

### 19. 梯形

**HTML 代码**

```

```

**CSS 代码**

```

```

### 20. 平行四边形

**HTML 代码**

```

```

**CSS 代码**

```

```

### 21. 星星 (6 角)

**HTML 代码**

```

```

**CSS 代码**

```

```

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

### 参考资料

- [《css 大法》之使用伪元素实现超实用的图标库](https://mp.weixin.qq.com/s/udMV3ocpdj7Ks9xmPV2xdg)
- [《css 大法》之使用伪元素实现超实用的图标库](https://mp.weixin.qq.com/s/PxP62LlEl0jB7cVAPMjXyg)
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
