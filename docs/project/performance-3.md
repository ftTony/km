# 性能优化手段

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 网页内容
- 服务器
- Cookie
- CSS
- JavaScript
- 图片
- 测试网页性能工具

### 一、网页内容

- 减少http请求次数
- 减少DNS查询次数
- 避免页面跳转
- 缓存Ajax
- 延迟加载
- 提前加载
- 减少DOM元素数量
- 根据域名划分内容
- 减少iframe数量
- 避免404

#### 1.1 减少http请求次数

80%的响应时间花在下载网页内容(images, stylesheets, javascripts, scripts, flash等)。减少请求次数是缩短响应时间的关键！可以通过简化页面设计来减少请求次数，但页面内容较多可以采用以下技巧。

- **捆绑文件：** 现在有很多现成的工具(webpack、gulp、rollup)帮我们将多个脚本文件捆绑成一个文件，将多个样式样式表文件捆绑成一个文件，以此来减少文件的下载次数。
- 

#### 1.2 减少DNS查询次数

#### 1.3 避免页面跳转

#### 1.4 缓存Ajax

#### 1.5 延迟加载

#### 1.6 提前加载

#### 1.7 减少DOM元素数量

#### 1.8 根据域名划分内容

#### 1.9 减少iframe数量

#### 1.10 避免404

### 二、服务器

- 使用CDN
- 添加Expires 或Cache-Control报文头
- Gzip压缩传输文件
- 配置ETags
- 使用GET Ajax请求
- 避免空的图片src

### 三、Cookie

- 减少Cookie大小
- 页面内容使用无cookie域名

### 四、CSS

- 将样式表置顶
- 避免CSS表达式
- 用代替@import
- 避免使用Filters

### 五、JavaScript

- 将脚本置底
- 使用外部Javascirpt和CSS文件
- 精简Javascript和CSS
- 去除重复脚本
- 减少DOM访问
- 使用智能事件处理

### 六、图片

- 优化图像
- 优化CSS Sprite
- 不要在HTML中缩放图片
- 使用小且可缓存的favicon.ico

### 七、测试网页性能工具


### 参考资料

- [雅虎35条军规](https://developer.yahoo.com/performance/rules.html)
- [毫秒必争，前端网页性能最佳实践](http://www.cnblogs.com/developersupport/p/webpage-performance-best-practices.html)
- [7 天打造前端性能监控系统](http://fex.baidu.com/blog/2014/05/build-performance-monitor-in-7-days/)
- [Web前端优化最佳实践及工具集锦](https://www.csdn.net/article/2013-09-23/2817020-web-performance-optimization)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>