# cluster 集群

## 前言

单个`Node.js`实例运行在单个线程中。 为了充分利用多核系统，有时需要启用一组 Node.js 进程去处理负载任务。

## 内容

- [多个 node 实例+多个端口](#一、多个node实例+多个端口)
- [主进程向子进程转发请求](#二、主进程向子进程转发请求)
- [实例代码](#三、实例代码)
- [实现原理](#四、实现原理)

### 一、多个 node 实例+多个端口

集群内的 node 实例，各自监听不同的端口，再由反向代理实现请求到多个端口的分发。

- 优点：实现简单，各实例相对独立，这对服务稳定性有好处。
- 缺点：增加端口战胜，进程之间通信比较麻烦。

### 二、主进程向子进程转发请求

集群内，创建一个主进程（master），以及若干个子进程。由 master 监听客户连接请求，并根据特定的策略，转发 worker。

- 优点：通常只占用一个端口，通信相对简单，转发策略更灵活。
- 缺点：实现相对复杂，对主进程的稳定性要求较高。

### 三、实例代码

```
const cluster = require('cluster');

if(cluster.isMaster){
    const cpuNum = require('os').cpus().length;
    for(let i=0;i<cpuNum;++i){
        cluster.fork();
    }

    // 创建进程完成后输出信息
    cluster.on('online',(worker)=>{
        console.log('Create worker-' + worker.process.pid);
    });

    // 监听子进程退出后重启事件
    cluster.on('exit',(worker,code,signal)=>{
        console.log('[Master] worker ' + worker.process.pid + ' died with code:' + code + ', and' + signal);
        cluster.fork();     // 重启子进程
    });
}else{
    const net = require('net');
    net.createServer().on('connection',(socket)=>{
        setTimeout(()=>{
            socket.end('Request handled by worker-'+process.pid);
        },10);
    }).listen(8989);
}
```

输出结果

```
Create worker- 23735
Create worker- 23731
Create worker- 23729
Create worker- 23730
```

### 四、实现原理

#### 4.1 master、worker 如何通信

> master 进程通过 cluster.fork()来创建 worker 进程。cluster.fork()内部是通过 child_process.fork()来创建子进程。

#### 4.2 如何实现端口共享

net 模块中，对 listen() 方法进行了特殊处理。根据当前进程是 master 进程，还是 worker 进程：

1. master 进程：在该端口上正常监听请求。（没做特殊处理）
2. worker 进程：创建 server 实例。然后通过 IPC 通道，向 master 进程发送消息，让 master 进程也创建 server 实例，并在该端口上监听请求。当请求进来时，master 进程将请求转发给 worker 进程的 server 实例。

#### 4.3 如何将请求分发到多个 worker

每当 worker 进程创建 server 实例来监听请求，都会通过 IPC 通道，在 master 上进行注册。当客户端请求到达，master 会负责将请求转发给对应的 worker。

具体转发给哪个 worker？这是由转发策略决定的。可以通过环境变量 NODE_CLUSTER_SCHED_POLICY 设置，也可以在 cluster.setupMaster(options)时传入。

当有客户请求到达，master 会轮询一遍 worker 列表，找到第一个空闲的 worker，然后将该请求转发给该 worker。

### 参考资料

- 《深入浅出 Nodejs》
- [cluster 模块](https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/cluster.md)
- [通过 Node.js 的 Cluster 模块源码，深入 PM2 原理](https://mp.weixin.qq.com/s/668R5YheK0GGd8kUGtRFVA)
- [【第 1003 期】Nodejs cluster 模块深入探究](https://mp.weixin.qq.com/s/rdbVHJs1z1SSOjmUZEXKEA)
- [Nodejs 进阶：解答 Cluster 模块的几个疑问](https://mp.weixin.qq.com/s/uRCfvzLlkXVwQ4FTmGArrg)
- [源码分析 Node 的 Cluster 模块](https://mp.weixin.qq.com/s/vKHG1mznQL3_iJ4XEbWaqg)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
