# 移动端 H5 页面开发坑点指南

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

#### 1. 点击样式闪动

Q：当你点击一个链接或者通过 JavaScript 定义的可点击元素的时候，它就会出现一个半透明的灰色背景。

A：根本原因是`-webkit-tap-highlight-color`，这个属性是用于设定元素在移动设备（如 Adnroid、IOS）上被触发点击事件时，响应的背景框的颜色。建议写在样式初始化中以避免所以问题：div,input(selector){-webkit-tap-highlight-color:rgba(0,0,0,0);}另外出现蓝色边框：outline:none;

```
-webkit-tap-highlight-color:rgba(255,255,255,0);
// i.e . Nexus5/Chrome and Kindle Fire HD 7 ''
-webkit-tap-highlight-color : transparent ;
```

#### 2. 屏蔽用户选择

代码如下

```
-webkit-touh-callout:none;
-webkit-user-select:none;
-khtml-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
user-select:none;
```

#### 3. 移动端如何清除输入框内阴影

Q：在 IOS 上，输入框默认有内陪阴影，但无法使用 box-shadow 来清除，如果不需要阴影，可以这样关闭：
A：代码如下

```
-webkit-appearance:none;
```

#### 4. 禁止文本缩放

代码如下：

```
-webkit-text-size-adjust:100%;
```

#### 5. 如何禁止保存或拷贝图像

```
img{
    -webkit-touch-callout:none;
}
```

#### 6. 解决字体在移动端比例缩小后出现锯齿的问题

代码如下：

```
-webkit-font-smoothing:antialiased;
```

#### 7. 设置 input 里面 placeholder 字体大小

代码如下：

```
-webkit-input-placeholder{font-size:10pt;}
```

#### 8. audio 元素和 video 元素在 ios 和 andriod 中无法自动播放

代码如下：

```
$('html').one('touchstart',function(){
audio.play()
})
```

#### 9. 手机拍照和上传图片

代码如下：

```
<input type="file">的accept 属性
<!-- 选择照片 -->
<input type=file accept="image/*">
<!-- 选择视频 -->
<input type=file accept="video/*">
```

#### 10. 输入框自动填充颜色

Q：针对 input 标签已经输入过的，会针对曾经输入的内容填充黄色背景，这是 webkit 内核自动添加的，对应的属性是 autocomplete，默认是 on，另对应的样式是 input:-webkit-autofill 且是不可更改的。

A：方案如下 1 设置标签 autocomplete="off"，亲测无效可能 2 调置盒子的内阴影为你常态的颜色，代码如下：

```
 box-shadow:0 0  0 1000px  #fff inset ;
 -webkit-box-shadow: 0 0 0px 1000px #fff inset;
```

#### 11. 开启硬件加速

Q：优化渲染性能

代码如下：

```
-webkit-transform:translate3d(0,0,0);
-moz-transform:translate3d(0,0,0);
-ms-transform:translate3d(0,0,0);
transform:translate3d(0,0,0);
```

#### 12. 用户设置字号放大或者缩小导致页面布局错误

代码如下：

```
body{
    -webkit-text-size-adjust:100% !import;
    text-size-adjust:100% !import;
    -moz-text-size-adjust:100% !import;
}
```

#### 13. 移动端去除 type 为 number 的箭头

```
input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{
    -webkit-appearance:none !impotant;
    margin:0;
}
```

#### 14. 实现横屏竖屏的方案

- css 用 css3 媒体查询，缺点是宽度和高度不好控制

```
@media screen and (orientation:portrait){
    .main{
        -webkit-transform:rotate(-90deg);
        -moz-transform:rotate(-90deg);
        -ms-transform:rotate(-90deg);
        transform:rotate(-90deg);
        width:100vh;
        height:100vh;
        /*去掉overflow微信显示正常，但是浏览器有总是，竖屏时强制横屏缩小*/
        overflow:hidden;
    }
}

@media screen and (orientation:landscape){
    .main{
        -webkit-transform:rotate(0);
        -moz-transform:rotate(0);
        -ms-transform:rotate(0);
        transform:rotate(0);
    }
}
```

- js 判断屏幕的方向或者 resize 事件

```
var evt = "onorientationchange" in window ? "orientationchange":"resize";
window.addEventListener(evt,function(){
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    $print = $('#print');
    if(width>height){
        $print.width(width);
        $print.width(height);
        $print.css('top',0);
        $print.css('left',0);
        $print.css('transform','none');
        $print.css('transform','50% 50%');
    }else{
            $print.width(height);
            $print.height(width);
            $print.css('top',  (height-width)/2 );
            $print.css('left',  0-(height-width)/2 );
            $print.css('transform' , 'rotate(90deg)');
            $print.css('transform-origin' , '50% 50%');
    }
},false);
```

#### 15. canvas 在 retina 屏模糊

只需要将画笔根据像素比缩放即可

```
run(canvasEl){
    const canvas = canvasEl;
    const ctx = canvas.getContext('2d');
    const devicePixelRatio = window.devicePixelRatio || 1;
    const backingStorePixedRation = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixedRation || ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio || 1;

    const ratio = devicePixelRatio / backingStorePixelRatio;
}
```

#### 16. 用同等比例的图片在 PC 机上很清楚,但是手机上很模糊,原因是什么呢?

经研究发现是 devicePixelRatio 作怪，因为手机分辨率太小，如果按照分辨率来显示网页字会非常小，所以苹果就把 iPhone 4 的 `960*640`

```
background:url(../images/icon/all.png) no-repeat center center;
-webkit-background-size:50px 50px;
background-size:50px 50px;
display:inline-block;
width:100%;
height:50px;
```

#### 17. 启动或禁用自动识别页面中的电话号码;

```
<meta name="format-detection" content="telephone=no">
```

#### 18. h5 网站 input 设置为 type=number 的问题

Q1：maxlength 属性不好用

```
<input type="number" oninput="checkTextLength(this,10)">
<script type="text/javascript">
</script>
```

Q2：form 提交的时候默认取整

```
<input type="number" step="0.01" /> // input中type=number一般会自动生成一个上下箭头，点击上箭头默认增加一个step,点击下箭头默认会减少一个step;number中默认step是1,也就是step=0.01可以允许输入2位小数,并且点击上下箭头分别增加0.01和减少0.01;step和min一起使用时数值必须在min和max之间
```

Q3：部分安卓手机出现样式问题

去除 input 默认样式的方法：

```
input,textarea{
    border:0;
   -webkit-appearance:none; //可同时屏蔽输入框怪异的内阴影，解决IOS下无法修改按钮样式，测试还发现，加了此属性后,iOS下默认还是有圆角的,不过可以用border-radius属性修改
}
```

#### 19. select 下拉选择设置问题

问题 1：右对齐实现

设置如下属性

```
select option{
    direction: rtl;
}
```

问题 2：禁用 select 默认箭头

```
::-ms-expand修改表单控件下拉箭头,设置隐藏并使用背景图片来修饰

select::-ms-expand { display:none; }
```

#### 21. CSS 动画页面闪白,动画卡顿,图片错乱的问题

> 尽可能地使用合成属性 transform 和 opacity 来设计 CSS3 动画,不使用 position 的 left 和 top 来定位

#### 22. html5 碰到上下拉动滚动条时卡顿/慢怎么解决

首先你可能会给页面的 html 和 body 增加了 height:100%，然后就可能造成 IOS 上页面没去的卡顿问题。

解决方案是：

1. 让 html 和 body 固定 100%（或者 100vh）
2. 然后再在内部放一个 height:100%的 div，设置 overflow-y:auto;和-webkit-overflow-scrolling:touch;

```
.scroll-box{
   /* 模态框之类的div不能放在这个容器中，否则关闭模态框有时候关闭不了*/
    height:100%;
    overflow-y:auto;
    -webkit-overflow-scrolling:touch;
    overflow-scrolling:touch;
}
```

#### 23. 浏览器后退不刷新

这种情况是以前遇到的，这里也说下；主要会发生在 webview 里多一点，当点击后退时页面以缓存形式出现，而不是刷新后的，很多情况下这不是你预期的效果，解决方法是用 js：

代码如下：

```
方法1：
window.addEventListener('pageshow',()=>{
    if(e.persisted || (window.performance && window.performance.navigation.type==2)){
        location.reload();
    }
},false);

window.history.replaceState(null,'',window.location.href+'?timestamp='+new Date().getTime());
```

onpageshow 每次页面加载都会触发，无论是从缓存中加载还是正常加载，这是他和 onload 的区别，persisted 判断页面是否从缓存中读出

页面通过历史记录和前进后退访问时。type 值为 2

#### 24. transition 清除闪屏

代码如下：

```
-webkit-transform-style:preseve-3d; //设置内嵌的元素在3D空间如何呈现：保留3D
-webkit-backface-visibility:hidden; //设置进行转换的元素的背面在面对用户时是否可见：隐藏
-webkit-perspective:1000;
```

#### 25. 解决 active 伪类失效

代码如下：

```
<body ontouchstart></body>
```

#### 26. 设置 input 文本框的 placeholder 的颜色

代码如下：

```
input::-webkit-input-placeholer{
    color:rgba(144,147,153,1);
}
```

#### 27. 一像素边框的问题

代码如下：

```
.row{
    position:relative;
    &:after{
        content:'';
        position:absolute;
        left:0;
        top:0;
        width:200%;
        border-bottom:1px solid #e6e6e6;
    }
}
```

#### 28. css 属性 touch-action:none;

```
该属性会导致安卓页面无法滚动，慎用!
```

#### 29. 去除 ios 手机端 input 输入框的内阴影

```
input{
    -webkit-appearance: none;
}
```

#### 30. 图片居中显示

```
object-fit: cover;
```

#### 31. 父元素设置了 border-radius，子元素应用了 transform，并且父元素设置了 overflow:hidden，但是却失效？

代码如下：

```
// 给父元素设置
{
    position:relative;
    z-index:1;
}

```

### 参考资料

- [移动端 H5 页面开发坑点指南](https://juejin.im/post/5dafc3df5188257a63539c64)
- [【建议收藏】90%的前端都会踩的坑，你中了吗？](https://juejin.im/post/5dfb3e73f265da33b12ea9d3)
- [移动端常见 bug 汇总](https://juejin.im/post/5af918636fb9a07ac5603ecb)
- [吃透移动端 H5 与 Hybrid](https://juejin.im/post/5dfadb91e51d45584006e486)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
