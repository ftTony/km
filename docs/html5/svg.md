# svg 学习

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- canvas 和 SVG 的是什么以及区别

### 一、canvas 和 SVG 的是什么以及区别

#### 1.1 SVG 是什么

- SVG 是一种使用 XML 描述 2D 图形的语言
- SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个附加 JavaScript 事件处理器。
- 在 SVG 中，

#### 1.2 Canvas 是什么

- Canvas 通过 JavaScript 来绘制 2D 图形。
- Canvas 是逐像素进行渲染的。
- 在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象

#### 1.3 Canvas 与 SVG 的比较

|                    | SVG  | Canvas |
| ------------------ | ---- | ------ |
| 是否依赖分辨率     | 否   | 是     |
| 是否支持事件处理器 | 支持 | 不支持 |
| 适用场景 | 适合带有大型渲染区域的应用程序（比如谷歌地图） | 适合图像密集型的游戏，其中的许多对象会被频繁重绘 |
| 是否能够以.png或.jpg格式保存图像 | 不能 | 能 |

### 参考资料

- [SVG 入门指南(看完,对 SVG 结构不在陌生)](https://mp.weixin.qq.com/s/_u6De6IZXFnL2yXmvJQ7Gg)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
