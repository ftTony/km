# 基本动画

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [动画的基本步骤](#一、动画的基本步骤)
- [操控动画](#二、操控动画)

### 一、动画的基本步骤

- 清空 canvas
- 保存 canvas 状态
- 绘制动画图形
- 恢复 canvas 状态

#### 1.1 清空 canvas

除非接下来要画的内容会完全充满 canvas （例如背景图），否则你需要清空所有。最简单的做法就是用 clearRect 方法。

#### 1.2 保存 canvas 状态

如果你要改变一些会改变 canvas 状态的设置（样式，变形之类的），又要在每画一帧之时都是原始状态的话，你需要先保存一下。

#### 1.3 绘制动画图形

这一步才是重绘动画帧。

#### 1.4 恢复 canvas 状态

如果已经保存了 canvas 的状态，可以先恢复它，然后重绘下一帧。

### 二、操控动画

#### 2.1 setInterval(fn,delay)

当设定好间隔时间后，function 会定期执行。

#### 2.2 setTimeout(fn,delay)

在设定好的时间之后执行函数

#### 2.3 requestAnimationFrame(callback)

告诉浏览器你希望执行一个动画，并在重绘之前，请求浏览器执行一个特定的函数来更新动画。

### 参考资料

- [Canvas 动画的性能优化实践](https://mp.weixin.qq.com/s/60buR6tyRi2A2_riJurUig)
- [基本的动画](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_animations)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
