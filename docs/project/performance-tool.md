# 性能优化——工具使用

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 谷歌开发者工具 Audits
- 谷歌开发者工具 Performance

### 一、Audits

Audit 的配置模块主要有两部分组成，一个是**监测类型**，另外一个是**设备类型（Device）**（注意使用 Audit 功能需要翻墙）。

**监控类型（Categories）是指需要监控哪些内容，**这里有五个对应的选项，它们的功能分别是：

- 监测并分析 Web 性能（**Performance**）；
- 监测并分析 PWA（**Progessive Web App**）程序的性能；
- 监测并分析 Web 应用是否采用了最佳实践策略（Best practices）；
- 监测并分析是否实施了无障碍功能（**Accessibility**），无障碍功能让一些身体有障碍的人可以方便地浏览你的 Web 应用。
- 监测并分析 Web 应用是否采实施了 SEO 搜索引擎优化（**SEO**）。

### 二、Performance

生成的报告页，如下图所示：

![images](performance43.png)

我们可以将 Performance 分为三个主要的部分，分别为**概览面板、性能指标面板和详情面板**。

#### 2.1 概览面板

Performance 就会将几个关键指标，诸如页面帧速（FPS）、CPU 资源消耗、网络请求流量、V8 内存使用量（堆内存）等，按照时间顺序成图表的形式展现出来，这就是概览面板。

有了概览面板，我们就能一览几个关键的历史数据指标，进而能快速定位到可能存在问题的时间节点。

- 如果 FPS 图表上出现了红色块，那么就表示红色块附近渲染出一帧所需时间过久，帧的渲染时间过久，就有可能导致页面卡顿。
- 如果 CPU 图形占用面积太大，表示 CPU 使用率就越高，那么就有可能因为某个

#### 2.2 性能指标面板

#### 2.3 详情面板

### 参考资料

- [加餐四｜页面性能工具：如何使用 Performance？](https://time.geekbang.org/column/article/177070)
- [加餐五 | 性能分析工具：如何分析 Performance 中的 Main 指标？](https://time.geekbang.org/column/article/179428)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
