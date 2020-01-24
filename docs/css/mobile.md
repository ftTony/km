# 移动 Web 开发

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- meta 基础知识

### 一、meta 基础知识

#### 1.1 H5 页面窗口自动调整到设备宽度，并禁止用户缩放页面

```
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" />
```

#### 1.2 忽略 Android 平台中对邮箱地址的识别

```
<meta name="format-detection" content="email=no"/>
```

#### 1.3 当网站添加到主屏幕快速启动方式，可隐藏地址栏，仅针对 ios 的 safari

```
<meta name="apple-mobile-web-app-capable" content="yes" />
```

#### 1.4 viewport 模板

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta content="wdith=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport" target-densitydpi=device-dpi">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<meta content="email=no" name="format-detection">
<title>标题</title>
<link rel="stylesheet" href="index.css">
</head>
<body>
这里开始内容
</body>
</html>
```

#### 1.5 重力感应事件

```
// 运用HTML5的deviceMotion，调用重力感应事件
if(window.DeviceMotionEvent){
    document.addEventListener('devicemotion',deviceMotionHandler,false);
}

var speed = 30;
var x=y=z-lastX=lastY=lastZ=0;
function deviceMotionHandler(eventData){

}
```

#### 1.6 根据屏幕尺寸修改 viewpoint 来实现自适应

```
<script>
var docEl = window.document.documentElement;
var width = docEl.getBoundingClientRect().width;
// 根据屏幕尺寸进行缩放
if(width!==750){
    var rate = width / 750;
    var content = 'width=750,minimum-scale=' + rate +',maximum-scale=' + rate + ',initial-scale=' + rate + ',initial-scale=' + rate + ,user-scalable=no'
    document.getElementById('viewport').setAttribute('content',content);
}
</script>
```

#### 1.7 根据设备尺寸尺寸来修改 rem 的值以达到自适应

```
<!--动态计算rem-->
<script type="text/javascript">
(function(doc,win){
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function(){
        var clientWidth = docEl.clientWidth;
        if(!clientWidth) return;
        if(clientWidth>750){
            clientWidth = 750;
        }
        docEl.style.fontSize = 100 * (clientWidth/750)+'px';
        adjustRem(docEl,clientWidth);
    };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMContentLoaded',recalc,false);
    recalc();
    function adjustRem(docElE, clientWidth) {
            if (!clientWidth || clientWidth >= 750) return;
            var div = document.createElement('div');
            div.style.width = '1.4rem';
            div.style.height = '0';

            if(!document.body){
                return;
            }

            document.body.appendChild(div);
            var expectWidth = 140 * clientWidth / 750;
            var fitRadio = (div.clientWidth / expectWidth);
            if (fitRadio > 1.1 || fitRadio < 0.9) {
                docElE.style.fontSize = 100 * (clientWidth / 750) / fitRadio + 'px';
            }
            document.body.removeChild(div);
        }
})(document,window);
</script>
```

#### 1.8 滚动条 CSS 样式

```
// 去掉webkit的滚动条—display:none;
// 其他参数，目前在IOS上测试无效
::-webkit-scrollbar      // 滚动条整体部分
::-webkit-scrollbar-thumb   // 滚动条内的小方块
::-webkit-scrollbar-track   // 滚动条轨道
::-webkit-scrollbar-button  // 滚动条轨道两端按钮
::-webkit-scrollbar-track-piece // 滚动条中间部分，内置轨道
::-webkit-scrollbar-corner  // 边角，两个滚动条交汇处
::-webkit-resizer   // 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件

/* ----------重写chrome滚动条--begin*/
::-webkit-scrollbar{width:6px;height:6px;}
::-webkit-scrollbar-track-piece{background-color:#cccccc;-webkit-border-radius:6px;}
::-webkit-scrollbar-thumb:vertical{height:5px;backgroun-color:#999999;-webkit-border-radius:6px;}
::-webkit-scrollbar-thumb:horizontal{width:5px;background-color:#cccccc;-webkit-border-radius:6px;}
/* ----------重写chrome滚动条--end*/
```

#### 1.9 屏幕旋转的事件和样式

```
// JS处理
function orientInit(){
    var orientChk = document.documentElement.clientWidth > document.documentElement.clientHeight?'landscape':'portrait';
    if(orientChk =='lapdscape'){
		//这里是横屏下需要执行的事件
	}else{
		//这里是竖屏下需要执行的事件
	}
}

orientInit();
window.addEventListener('onorientationchange' in window?'orientationchange':'resize',function(){
    setTimeout(orientInit,100);
},false);
//CSS处理
//竖屏时样式
@media all and (orientation:portrait){   }
//横屏时样式
@media all and (orientation:landscape){   }
```

#### 1.20 获取电池状态

`navigator.getBattery()`：这个 API 可以将你手机电池状态的情况暴露给需要知道的人知道。

> 这个`api`返回的是一个`promise`对象，会给出一个`BatteryManager`对象，对象中包含了以下信息：

| key                     | 描述                     | 备注     |
| ----------------------- | ------------------------ | -------- |
| charging                | 是否在充电               | 可读属性 |
| chargingTime            | 若在充电，还需充电时间   | 可读属性 |
| dischargingTime         | 剩余电量                 | 可读属性 |
| level                   | 剩余电量百分数           | 可读属性 |
| onchargingchange        | 监听充电状态改变         | 可读属性 |
| ondischargingtimechange | 监听电池可用时间的改变   | 可读属性 |
| onlevelchange           | 监听剩余电量百分数的改变 | 可读属性 |

代码如下：

```
function getBatteryInfo(){

}
```

#### 1.21 手机震动

`window.navigator.vibrate(200)`：这个`API`可以让你的手机按你的想法震动。

震动效果会在很多游戏使用。比如欢乐斗地主中，地主打完王炸后手机都会有震动的效果，以此来表达地主嘚瑟的心情也很是合理。

代码如下：

```
function vibrateFun(){
    let self = this;
    if(navigator.vibrate){
        navigator.vibrate([500,500,500,500,500,500,500,500,500]);
    }else{
        self.vibrateInfo = '您的设备不支持震动';
    }
    // 清除震动
    navigator.vibrate(0);
    // 持续震动
    setInterval(function(){
        navigator.vibrate(200);
    },500);
}
```

#### 1.22 联网状态

`navigator.onLine`：这个`API`可以告诉让你知道你的设备的网络状态是否连接着。

相关代码：

```
let onLineinfo='';
window.addEventListener('online',onlineStatus,true)
window.addEventListener('offline',onlineStatus,true)

function onlineStatus(){
    onLineinfo = navigator.onLine ? 'online':'offline';
}
```

> 注意：navigator.onLine 只会在机器未连接到局域网或路由器时返回 false，其他情况下均返回 true。也就是说，机器连接上路由器后，即使这个路由器没联通网络， navigator.onLine 仍然返回 true。

#### 1.23 浏览器活跃窗口监听

`window.onblur & window.onfocus`：这两个 API 分别表示窗口失去焦点和窗口牌活跃状态。

> 浏览其他窗口、浏览器最小化、点击其他程序等，window.onblur 事件就会触发； 回到该窗口，window.onfocus 事件就会触发。

代码如下：

```
let timer = null
let flashFlag = true;
window.addEventListener('blur',doFlashTitle,true);
window.addEventListener('focus',function(){
    clearInterval(timer);
    document.title='微信网页版';
},true);

function doFlashTitle(){
    timer = setInterval(()=>{
        if(!flashFlag){
            document.title='微信网页页版';
        }else{
            document.title='微信';
        }
        flashFlag=!flashFlag
    },500)
}
```

#### 1.24 全屏 API

`Fullscreen`：这个 API 可以使你所打开的页面全屏展示，没有其他页面外的内容展示在屏幕上。

- `Element.requestFullscreen()` 方法用于发出异步请求使元素进入全屏模式。
- 当进入/退出全屏模式时,会触发`fullscreenchange` 事件。

```
function fullScreenFun(){
    let self = this;
    var fullscreenEnabled = document.fullscreenEnabled ||
                                     document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled;

   if(fullscreenEnabled){
       let de = document.documentElement;
       if(self.fullScreenInfo ==='打开全屏'){
           if(de.requestFullscreen){
               de.requestFullscreen();
           }else if(de.mozRequestFullScreen){
               de.mozRequestFullScreen();
           }else if(de.webkitRequestFullScreen){
               de.webkitRequestFullScreen();
           }
       }else{
           if(document.exitFullscreen){
                document.exitFullscreen();
           }else if(document.mozCancelFullScreen){
               document.mozCancelFullScreen();
           }else if(document.webkitCancelFullScreen){
              document.webkitCancelFullScreen();
           }
           self.fullScreenInfo = '打开全屏'
       }
   }else{
        self.fullScreenInfo= '浏览器当前不能全屏';
   }
}
```

相关：

1. document.fullscreenElement：当前处于全屏状态的元素 element
2. document.fullscreenEnabled：标记 fullscreen 当前是否可用
3. document.exitFullscreen()：退出全屏

### 参考资料

- [关于移动端适配，你必须要知道的](https://juejin.im/post/5cddf289f265da038f77696c)
- [彻底搞懂移动 Web 开发中的 viewport 与跨屏适配](https://mp.weixin.qq.com/s/aaXgFw4isWq1RrHkv75zLA)
- [深入浅出 Viewport 设计原理](https://www.cnblogs.com/onepixel/p/12144364.html)
- [浅谈移动 Web 开发（上）：深入概念](https://www.infoq.cn/article/development-of-the-mobile-web-deep-concept/)
- [【原】移动 web 资源整理](https://www.cnblogs.com/PeunZhang/p/3407453.html)
- [移动 web 最佳实践](https://juejin.im/post/5d759f706fb9a06afa32adec)
- [移动 Web 前端知识库](https://github.com/AlloyTeam/Mars)
- [H5 移动端知识点总结](https://www.cnblogs.com/tugenhua0707/p/5180841.html)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
