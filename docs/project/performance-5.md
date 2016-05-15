# 执行性能——专业术语

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 性能报告指标

### 一、性能报告指标

页面从加载到展示的过程图：

![images](performance39.png)

- 首次绘制（First Paint）
- 首次有效绘制（First MeaningFull Paint）
- 首屏时间（Speed Index）
- 首次 CPU 空闲时间（First CPU Ide）
- 完全可以交互时间（Time to Interactive）
- 最大估计输入延时（Max Potential First Input Delay）

#### 1.1 首次绘制（FP）

**FP（全称“First Point”，翻译）**是时间线上的第一个“时间点”，它代表浏览器第一次向屏幕传输像素的时间，也就是页面在屏幕上首次发生视觉变化的时间。

> 注意：FP 不包含默认背景绘制，但包含非默认的背景绘制。

#### 1.2 首次有效绘制（FMP）

**FMP（全称“First Meaningful Paint”，翻译为“首次有效绘制”）**表示页面的“主要内容”开始出现在屏幕上的时间点。它是我们测量用户加载体验的主要指标。

FMP 本质上是通过一个算法来猜测某个时间点可能是 FMP，所以有时候不准。

#### 1.3 首屏时间

**首屏时间**，这就是我们上面提到的 LCP，它表示填满首屏页面所消耗的时间，首屏时间的值越大，那么加载速度越慢

#### 1.4 首次 CPU 空闲时间

**首次 CPU 空闲时间（First CPU Idle），也称为 First interacitve**，它表示页面达到最小化可交互的时间，也就是说并不需要等到页面上的所有元素都可以交互，只要可以对大部分用户输入做出响应即可

#### 1.5 完全可交时间

**完全可交互时间（Time to Interactive），简称 TTI**，它表示页面中所有元素都达到了可交互的时长。

#### 1.6 最大估计输入延时

### 参考资料

- [Web 性能领域常见的专业术语](https://mp.weixin.qq.com/s/GIpmZIY6yxGRBpkTDHuJuw)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
