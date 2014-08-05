# canvas 学习

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。相关代码在[这里](https://github.com/ftTony/notes/tree/master/javascript/canvas)

## 内容

- [介绍](#一、介绍)
- [兼容性处理](#二、兼容性处理)
- [绘制形状](#三、绘制形状)
- [添加样式和颜色](#四、添加样式和颜色)
- [绘制文本](#五、绘制文本)
- [变形](#六、变形)
- [合成与裁剪](#七、合成与裁剪)
- [像素操作](八、像素操作)

### 一、介绍

`<canvas>`是一个可以使用脚本(通常为 JavaScript)来绘制图形的 HTML 元素.例如,它可以用于绘制图表、制作图片构图或者制作简单的(以及不那么简单的)动画.

`<canvas>` 最早由 Apple 引入 WebKit，用于 Mac OS X 的 Dashboard，随后被各个浏览器实现。如今，所有主流的浏览器都支持它。

### 二、兼容性处理

#### 2.1 替换文本

我们在`<canvas>`标签中提供了替换内容。不支持`<canvas>`的浏览器将忽略容器在中渲染后备内容。而支持`<canvas>`的浏览器将会忽略在容器中包含的内容，并且只是正常渲染 `canvas`。

代码如下：

```
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 +0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt=""/>
</canvas>
```

#### 2.2 检查支持性

替换内容是用于在不支持`<canvas>`标签的浏览器中展示的。通过简单的测试`getContext()`方法的存在，脚本可以检查编程支持性。代码如下：

```
var canvas = document.getElementById('tutorial');

if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

### 三、绘制形状

- 绘制矩形
- 绘制路径
- 线
- 图弧

#### 3.1 绘制矩形

#### 3.2 绘制路径

#### 3.3 线

`lineTo(x,y)`：绘制一条从当前位置到指定 x 以及 y 位置的直线

#### 3.4 图弧

- `arc(x,y,radius,startAngle,endAngle)`

### 四、添加样式和颜色

- 色彩
- 透明度
- 线型样式
- 渐变
- 图案样式
- 阴影

#### 4.1 色彩

#### 4.2 透明度

#### 4.3 线型样式

#### 4.4 渐变

#### 4.5 图案样式

#### 4.6 阴影

### 五、绘制文本

- 字体样式
- 对齐方式
- 文本基线
- 文本方向

#### 5.1 字体样式

#### 5.2 对齐方式

#### 5.3 文本基线

#### 5.4 文本方向

### 六、变形

- save
- restore
- 移动 Translating
- 旋转 Rotating
- 缩放 Scaling
- 变形 Transforms

#### 6.1 save

#### 6.2 restore

#### 6.3 移动 Translating

#### 6.4 旋转 Rotating

#### 6.5 缩放 Scaling

#### 6.6 变形 Transforms

### 七、合成与裁剪

- globalCompositeOperation
- clip

#### 7.1 globalCompositeOperation

#### 7.2 clip

### 八、像素操作

- createImageData
- getImageData
- 例子

#### 8.1 createImageData

#### 8.2 getImageData

#### 8.3 例子

## 参考资料

- [Canvas 性能优化](https://juejin.im/post/5ba478136fb9a05d151ca173)
- [canvas-应用大全](https://github.com/CodeLittlePrince/blog/issues/21)
- [【第 513 期】Canvas 最佳实践（性能篇）](https://mp.weixin.qq.com/s/7tyqEWX0xJkDUJX_zYVLIw)
- [高质量前端快照方案：来自页面的「自拍」](https://juejin.im/post/5df2e8ab6fb9a0163770816d)
- [Canvas 超全教程](https://zhuanlan.zhihu.com/p/81863157)
- [MDN 教程](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_usage)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
