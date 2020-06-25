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

#### 32. IOS 点击 input 不聚焦问题

IOS 系统中点击 Input 输入框点击事件，没有反应，无法聚集光标，调不起键盘。

代码如下：

```
clickTextarea(){
    document.getElementsByClassName('cont-inp')[0].focus();
}
```

#### 33. 上传图片，iPhone7 iPhone7p 在上传图片的时候，传不过去图片的 name

解决方案：手动添加图片 name

```
let data = new FormData();
data.append('fileName',file[0],file[0].name);
```

#### 34. IOS 中对 input 键盘事件 keyup/keydown/keypress 等支持不好的问题

经查发现，IOS 的输入法(不管是第三方还是自带)能检测到英文或数字的 keyup,但检测不到中文 keyup，在输入中文后需要点回退键才开始搜索；解决办法是用 html5 的 oninput 事件去代替 keyup，通过如下代码达到类似 keyup 的效果；

1. 修改了 input:checkbox 或 input:radio 元素的选择中状态，checked 属性发生变化
2. 修改了 input:text 或 textarea 元素的值，value 属性发生变化
3. 修改了 select 元素的选中项，selectedIndex 属性发生变化统一使用 input 监听

```
<input type="text" id="testInput">
<script type="text/javascript">
    document.getElementById('testInput').addEventListener('input',function(e){
        var value = e.target.value;
    })
</script>
```

#### 35. iOS 下取消 input 在输入的时候英文首字母的默认大写

代码如下：

```
<input type="text" autocapitalize="none">
```

#### 36. 什么是 Retina 显示屏，带来了什么问题

retina:一种具备超高像素密度的液晶屏，同样大小的屏幕上显示的像素点由 1 个变为多个，如在同样带下的屏幕上，苹果设备的 retina 显示屏中，像素点 1 个变为 4 个

在高清显示屏中的位图被放大，图片会变得模糊，因此移动端的视觉稿通常会设计为传统 PC 的 2 倍

那么，前端的应对方案是：

设计稿切出来的图片长宽保证为偶数，并使用 background-size 把图片缩小为原来的 1/2

```
//例如图片宽高为：200px*200px，那么写法如下
.css{width:100px;height:100px;background-size:100px 100px;}
```

其它元素的取值为原来的 1/2，例如视觉稿 40px 的字体，使用样式的写法为 20px

```
.css{font-size:20px}
```

#### 37. 移动端 click 屏幕产生 200-300 ms 的延迟响应

移动设备上的 web 网页是有 300ms 延迟的，玩玩会造成按钮点击延迟甚至是点击失败。

2007 年苹果发布首款 iphone 上 IOS 系统搭载的 safari 为了将适应于 PC 端上大屏幕的见面能比较好的展示在手机端上，使用了双击缩放(double tap to zoom)的方案，比如你在手机上用浏览器打开一个 PC 上的网页，你可能在看到页面内容虽然可以撑满整个屏幕，但是字体、图片都很小看不清，此时可以快速双击屏幕上的某一部分，你就能看清该部分放大后的内容，再次双击后能回到原始状态。

双击缩放是指用手指在屏幕上快速点击两次，iOS 自带的 Safari 浏览器会将网页缩放至原始比例。

原因就出在浏览器需要如何判断快速点击上，当用户在屏幕上单击某一个元素时候，例如跳转链接`<a href="#"></a>`，此处浏览器会先捕获该次单击，但浏览器不能决定用户是单纯要点击链接还是要双击该部分区域进行缩放操作，所以，捕获第一次单击后，浏览器会先 Hold 一段时间 t，如果在 t 时间区间里用户未进行下一次点击，则浏览器会做单击跳转链接的处理，如果 t 时间里用户进行了第二次单击操作，则浏览器会禁止跳转，转而进行对该部分区域页面的缩放操作。那么这个时间区间 t 有多少呢？在 IOS safari 下，大概为 300 毫秒。这就是延迟的由来。造成的后果用户纯粹单击页面，页面需要过一段时间才响应，给用户慢体验感觉，对于 web 开发者来说是，页面 js 捕获 click 事件的回调函数处理，需要 300ms 后才生效，也就间接导致影响其他业务逻辑的处理。

解决方案：

- fastclick 可以解决在手机上点击事件的 300ms 延迟
- zepto 的 touch 模块，tap 事件也是为了解决在 click 的延迟问题

#### 38. 微信浏览器用户调整字体大小后页面矬了，怎么阻止用户调整

原因

- android 侧是复写了 layoutinflater 对 textview 做了统一处理
- ios 侧是修改了 body.style.webkitTextSizeAjust 值

解决方案：

- android 使用以下代码，该接口只在微信浏览器下有效

```
(function(){
    if (typeof(WeixinJSBridge) == "undefined") {
        document.addEventListener("WeixinJSBridgeReady", function (e) {
            setTimeout(function(){
                WeixinJSBridge.invoke('setFontSizeCallback',{"fontSize":0}, function(res) {
                    alert(JSON.stringify(res));
                });
            },0);
        });
    } else {
        setTimeout(function(){
            WeixinJSBridge.invoke('setFontSizeCallback',{"fontSize":0}, function(res) {
                alert(JSON.stringify(res));
            });
        },0);
    }
})();
```

- ios 使用-webkit-text-size-adjust 禁止调整字体大小

```
body{-webkit-text-size-adjust: 100%!important;}
```

最好的解决方案：

- 整个页面用 rem 或者百分比布局

#### 39. 软键盘问题

**IOS 键盘弹起挡住原来的视图**

- 可以通过监听移动端软键盘弹起 Element.scrolltoViewlfNeeded（Boolean）方法用来将不在浏览器窗口的可见域内的元素滚动到浏览器窗口的可见区域。如果该元素已经在浏览器窗口的可见区域内，则不会发生滚动。
- true，则元素将在其所在滚动以区可视域中剧中对齐。
- false，则元素将与其所在滚动区的可视区域最近的边缘对齐。根据可见区域最靠近元素的哪个边缘，元素的顶部将与可见区域的顶部边缘对准，或者元素的底部边缘将与可见区域的底部边缘对准。

```
window.addEventListener('resize',function(){
    if(document.activeElement.tagName ==='INPUT' || document.activeElement.tagName === 'TEXTAREA'){
        window.setTimeout(function(){
            if('scrollIntoView' in document.activeElement){
                document.activeElement.scrollIntoView(false)
            }else{
                document.activeElement.scrollIntoViewIfNeeded(false)
            }
        },0)
    }
},false)
```

**onkeyUp 和 onKeydown 兼容性问题**

IOS 中 input 键盘事件 keyup、keydown 等支持不是很好，用 input 监听键盘 keyup 事件，在安卓手机浏览器中没有问题，但是在 IOS 手机浏览器中用输入法输入之后，并未立刻相应 keyup 事件

**IOS12 输入框难以点击获取焦点，弹不出软键盘**

定位找到问题是 fastclick.js 对 IOS12 的兼容性，可在 fastclick.js 源码或者 main.js 做以下修改

```
FastClick.prototype.focus = function(targetElement){
    var length
    if(deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !==0 && targetElement.type !=='time' && targetElement.type !=='month'){
        length = targetElement.value.length
        targetElement.setSelectionRange(length,length)
        targetElement.focus()
    }else{
        targetElement.focus();
    }
}
```

**IOS 键盘收起时页面没用回落，底部会留白**

通过监听键盘回落时间滚动到原来位置

```
window.addEventListener('focusout',function(){
    window.scrollTo(0,0);
})

// input 输入框弹起软键盘的解决方案
var bfscrolltop = document.body.scrollTop
$('input').focus(function(){
    document.body.scrollTop = document.body.scrollHeight
}).blur(function(){
    document.body.scrollTop = bfscrolltop
})
```

**IOS 下 fixed 失效的原因**

软键盘唤起后，页面的 fixed 元素将失效，变成了 absolute，所以当页面超过一屏且滚动时，失效的 fixed 元素就会跟随滚动了。不仅限于 type=text 的输入框，凡是软键盘，（比如时间日期选择、select 选择等等）被唤起，都会遇到同样地问题。

解决方法：不让页面滚动，而是让主体部分自己滚动，主体部分高度设为 100%，overflow:scroll

```
<body>
    <div class="warper">
        <div class="main"></div>
    </div>
    <div class="fix-bottom"></div>
</body>
```

```
.warper{
    position:absolute;
    width:100%;
    left:0;
    right:0;
    top:0;
    bottom:0;
    overflow-y:scroll;
    -webkit-overflow-scrolling:touch;       /*解决ios滑动不流畅问题*/
}
.fix-bottom{
    postion:fixed;
    bottom:0;
    width:100%;
}
```

#### 40. IOS 上拉边界下拉出现空白

手指按住屏幕下拉，屏幕顶部会多出一块白色区域。手指按住屏幕上拉，底部多出一声白色区域。

在 IOS 中，手指按住屏幕上下拖动，会触发 touchmove 事件。这个事件触发的对象是整个 webview 容器，容器自然会被拖动，剩下的部分会成空白。

**解决方案**

```
document.body.addEventListener(
    'touchmove',
    function(e){
        if(e._isScroller) return
        // 阻止事件
        e.preventDefault()
    },
    {
        passive:false
    }
)
```

### 参考资料

- [移动端 H5 页面开发坑点指南](https://juejin.im/post/5dafc3df5188257a63539c64)
- [【建议收藏】90%的前端都会踩的坑，你中了吗？](https://juejin.im/post/5dfb3e73f265da33b12ea9d3)
- [移动端常见 bug 汇总](https://juejin.im/post/5af918636fb9a07ac5603ecb)
- [吃透移动端 H5 与 Hybrid](https://juejin.im/post/5dfadb91e51d45584006e486)
- [【第 1891 期】iOS 键盘难题与可见视口（VisualViewport）API](https://mp.weixin.qq.com/s/ERBxrGXYfcAHdlZTWWw0Aw)
- [（小技巧）h5 手机键盘弹出收起的处理](https://mp.weixin.qq.com/s/ZoP6845tm6OUvcF_4lEUkQ)


## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
