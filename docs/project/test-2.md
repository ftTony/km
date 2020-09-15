# 集成测试

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 集成测试
- 端对端测试
- 压力测试
- 接口测试

### 一、集成测试

**集成测试**：就是测试应用中不同模块如何集成，如何一起工作，这和它的名字一致。

### 二、端对端测试

**端到端测试（e2e）**：是站在用户角度的测试，把我们的程序看成是一个黑盒子，我不懂你内部是怎么实现的，我只负责打开浏览器，把测试内容在页面上输入一遍，看是不是我想要得到的结果。

### 三、压力测试

压力测试常用工具有`ab`、`siege`、`http_load`等，这里我们介绍`ab`如何使用

`ab`使用方法如下：

```
ab -n 4000 -c 1000 http://www.xiaowuzi.info
```

上面命令表示 4000 个请求，1000 个并发用户向服务端发出请求。下面介绍一下响应返回各个参数的含义

- `Document Path`：表示文档的路径，此处为`/`
- `Document Length`：表示文档的长度，就是报文的大小，这里有 10KB。
- `Concurrency Level`：并发级别，就是我们在命令中传入的 c，此处为 10，即 10 个并发。
- `Time taken for tests`：表示完成所有测试所花费的时间，它与命令行中 􏱑 入的 t 选项有细微出入。
- `Complete requests`：表示在这次测试中一共完成多少次请求。
- `Failed requests`：表示其中产生失败的请求数，这次测试中没有失败的请求。
- `Write errors`表示在写入过程中出现的错误次数(连接断开导致的)。
- `Total transferred`：表示所有的报文大小。
- `HTML transferred`：表示仅 HTTP 报文的正文大小，它比上一个值小。
- `Requests per second`：这是我们重点关 􏳤 的一个值，它表示服务器能每秒能处理多少请求，是重点反映服务器并发能力的指标。这个值又称 RPS 或 QPS。
- 两个`Time per request`值： 第一个代表的是用户平均等待时间，第二个代表的是服务器平均请求处理事伯，前者除以并发数得到后者。
- `Transfer rate`：表示传输率，等于传输的大小除以传输时间，这个值受网卡的带宽限制。
- `Connection Times`：连接时间，它包括客户端端向服务器端建立连接、服务器端处理请求、等待报文响应的过程。

### 四、接口测试

### 参考资料

- [羚珑项目自动化测试方案实践](https://mp.weixin.qq.com/s/Ta7SFF3IPtW8itZnQypeBA)
- [京喜前端自动化测试之路](https://mp.weixin.qq.com/s/VhvXTNuM7TSfFtzBVmhTyg)
- [京喜前端自动化测试之路(小程序篇)](https://mp.weixin.qq.com/s/03LgU-20_PFjtiz6UfeUZA)
- [测试专题](https://github.com/yanlele/node-index/tree/master/book/13%E3%80%81%E6%B5%8B%E8%AF%95%E4%B8%93%E9%A2%98)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
