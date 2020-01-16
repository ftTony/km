# 移动端 H5 页面开发坑点指南

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

#### 1. 点击样式闪动

Q：当你点击一个链接或者通过 JavaScript 定义的可点击元素的时候，它就会出现一个半透明的灰色背景。

A：根本原因是`-webkit-tap-highlight-color`，这个属性是用于设定元素在移动设备（如 Adnroid、IOS）上被触发

#### 2. 屏蔽用户选择

代码如下

```
-webkit-touh-callout:none;
-webkit-user-select:none;
-khtml-user-select:none;
```

#### 3. 移动端如何清除输入框内阴影

Q：在 IOS 上，输入框默认有内陪阴影，但无法使用 box-shadow 来清除，如果

#### 4. 禁止文本缩放

#### 5. 如何禁止保存或拷贝图像

#### 6. 解决字体在移动端比例缩小后出现锯齿的问题

代码如下：

```
-webkit-font-smoothing:antialiased;
```

#### 7. 点击样式闪动

#### 8. 点击样式闪动

#### 9. 点击样式闪动

#### 10. 点击样式闪动

#### 11. 点击样式闪动

#### 12. 点击样式闪动

#### 13. 点击样式闪动

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
