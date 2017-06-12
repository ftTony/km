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

#### 13. 移动端去除 type 为 number 的箭头

#### 14. 实现横屏竖屏的方案

#### 15. canvas 在 retina 屏模糊

#### 16. 用同等比例的图片在 PC 机上很清楚,但是手机上很模糊,原因是什么呢?

#### 17. 启动或禁用自动识别页面中的电话号码;

#### 18. h5 网站 input 设置为 type=number 的问题

#### 19. select 下拉选择设置问题

#### 20. 移动端 HTML5 audio autoplay 失效问题

#### 21. CSS 动画页面闪白,动画卡顿,图片错乱的问题

#### 22. html5 碰到上下拉动滚动条时卡顿/慢怎么解决

#### 23. 浏览器后退不刷新

#### 24. transition 清除闪屏

#### 25. 解决 active 伪类失效

#### 26. 设置 input 文本框的 placeholder 的颜色

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

#### 父元素设置了 border-radius，子元素应用了 transform，并且父元素设置了 overflow:hidden，但是却失效？

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
