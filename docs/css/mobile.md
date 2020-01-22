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

#### viewport 模板

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
