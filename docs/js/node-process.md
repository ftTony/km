# process 进程

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [服务器进程进化](#一服务器进程进化)
- [进程相关属性及方法](#二进程相关属性及方法)
- [创建子进程](#三创建子进程)
- [进程间通信](#四进程间通信)
- [句柄传递](#五句柄传递)

### 一、服务器进程进化

- [同步单进程服务器](#11-同步单进程服务器)
- [同步多进程服务器](#12-同步多进程服务器)
- [同步多进程多线程服务器](#13-同步多进程多线程服务器)
- [单进程单线程基于事件驱动的服务器](#14-单进程单线程基于事件驱动的服务器)
- [NodeJS 的实现多进程架构](#15-nodejs的实现多进程架构)

#### 1.1 同步单进程服务器

该服务器是最早出现的，执行模型是同步的，它的服务模式是一次只能处理一个请求，其他的请求需要顺序依次等待处理执行。也就是说如果当前的请求正在处理的话，那么其他的请求都处于阻塞等待的状态。因此这样的服务器处理速度是不好的。

#### 1.2 同步多进程服务器

为了解决上面同步单进程服务器无法处理并发的问题，我们就出来一个同步多进程服务器，它的功能是一个请求需要一个进程来服务，也就是说如果有 100 个请求就需要 100 个进程来进行服务，那么这样就会有很大的进程的开销问题了。并且相同的状态在内在中会有多种，这样会造成资源浪费。

#### 1.3 同步多进程多线程服务器

为了解决上面多进程中资源浪费的问题，我们就引入了多进程多线程服务器模式，从我们之前一个进程处理一个请求，现在我们改成为一个线程来处理一个请求，纯种相对于进程来说开销会少很多，并且线程之间还可以共享数据。并且我们可以使用线程池减少创建和销毁的开销。

但是多线程也有缺点，比如多个请求需要使用多个线程来服务，但是每个纯种需要一定的内在来存放自己的堆和栈的。这样就会导致占用太多的内存。第二就是：CPU 核心只能处理一件事件，系统是通过将 CPU 切分为时间片的方法来让线程可以均匀地使用 CPU 的资源的。在系统切换线程的过程中也会进行线程上下文切换，当线程数量过多时进行上下文切换会非常耗费时间的。因此在很大的并发量下，多线程还是无法做到很好的伸缩性。Apache 服务器是这样架构的。

#### 1.4 单进程单线程基于事件驱动的服务器

为了解决上面的问题，我们出现了单进程单线程基于事件驱动的模式出现了，使用单线程的优点是：避免内存开销和上下文切换的开销。

所有的请求都在单线程上执行的，其他的异步 IO 和事件驱动相关的线程是通过 libuv 中的事件循环来实现内部的线程池和线程调度的。可伸缩性比之前的都好，但是影响事件驱动服务模型性能的只能 CPU 的计算能力，但是只能使用单核的 CPU 来处理事件驱动，但是我们的计算机目前都是多核的，我们要如何使用多核 CPU 呢？如果我们使用多核 CPU 的话，那么 CPU 的计算能力就会得到一个很大的提升。

#### 1.5 NodeJS 的实现多进程架构

如上第四点，面对单线程单进程对多核使用率不好的问题，因此我们使用多进程，每个进程使用一个 cpu，因此我们就可以实现多核 cpu 的利用。
Node 提供了 child_process 模块和 cluster 模块来实现多进程以及进程的管理。也就是我们常说的 Master-Worker 模式。也就是说进程分为 Master(主)进程 和 worker（工作）进程。master 进程负责调度或管理 worker 进程，那么 worker 进程负责具体的业务处理。在服务器层面来讲，worker 可以是一个服务进程，负责出来自于客户端的请求，多个 worker 就相当于多个服务器，因此就构成了一个服务器群。master 进程则负责创建 worker，接收客户端的请求，然后分配到各个服务器上去处理，并且监控 worker 进程的运行状态及进行管理操作。

如下图所示：

![image](process.png)

### 二、进程相关属性及方法

- `process.env`：返回当前服务运行的环境
- `process.nextTick`：异步操作
- `process.argv`：属性返回一个数组，其中包含当启动 Node.js 进程时传入的命令行参数。
- `process.cwd`：返回当前工作路径。
- `process.stdin`：标准输入。
- `process.stdout`：标准输出。
- `process.seteuid`：获得当前用户的 id。
- `process.getgid`：获得当前群组的 id
- `process.pid`：返回进程 id
- `process.title`：可以用它来修改进程的名字，当你用 ps 命令，同时有多个 node 进程在跑的时候，作用就出来了。
- `process.uptime`：当前 node 进程已经运行了多长时间（单位是秒）。
- `process.memoryUsage`：返回进程占用的内存，单位为字节。
- `process.hrtime`：一般用于做性能基准测试。返回一个数组，数组里的值为 [[seconds, nanoseconds] （1 秒等 10 的九次方毫微秒）。
- `process.version`：返回当前 node 的版本，比如'v6.1.0'。
- `process.arch`：返回当前系统的处理器架构（字符串），比如`arm`, `ia32`, or `x64`。
- `process.platform`：返回关于平台描述的字符串，比如 darwin、win32 等。
- `process.kill`：它并不是用来杀死进程的，而是用来向进程发送信号。
- `process.exit`：可以用来立即退出进程。

### 三、创建子进程

创建子进程，有四个方法分别：

- **spawn**：子进程中执行的是非 node 程序，提供一组参数后，执行的结果以流的形式返回。
- **execFile**：子进程中执行的是非 node 程序，提供一组参数后，执行的结果以回调的形式返回。
- **exec**：子进程执行的是非 node 程序，提供一串 shell 命令，执行结果后以回调的形式返回，它与 execFile 不同的是，exec 可以直接执行一串 shell 命令。
- **fork**：子进程执行的是 node 程序，提供一组参数后，执行的结果以流的形式返回，它与 spawn 不同的是，fork 生成的子进程只能执行 node 应用。

```
var cp = require('child_process');
cp.spawn('node',['worker.js']);
cp.exec('node worker.js',function(err,stdout,stderr){
    // some code
});
cp.execFile('workder.js',function(err,stdout,stderr){

});
cp.fork('./worker.js');
```

| 类型       | 回调/异常 | 进程类型 | 执行类型        | 可设置超时 |
| ---------- | --------- | -------- | --------------- | ---------- |
| spawn()    | x         | 任意     | 命令            | x          |
| exec()     | ✓         | 任意     | 命令            | ✓          |
| execFile() | ✓         | 任意     | 可执行文件      | ✓          |
| fork()     | x         | node     | javascript 文件 | x          |

### 四、进程间通信

在 nodejs 中父子进程之间通信可以通过 on('message')和 send()方法来实现通信，on('message')是监听 message 事件的。当该进程收到其他进程发送的消息时，便会触发 message 事件。send()方法则是用于向其他进程发送消息的。

```
// parent.js
var cp = require('child_process');
var n = cp.fork(__dirname + '/sub.js');

n.on('message',function(m){
    console.log('PARENT got message:',m);
});

n.send({hello:'world'});
```

```
process.on('message',function(m){
    console.log('CHILD got message:',m);
});

process.send({foo:'bar'});
```

### 五、句柄传递

- [Master 实现对 Worker 的请求进行分发](#41-master实现对worker的请求进行分发)
- [Worker 监听同一个端口](#42-worker监听同一个端口)

#### 4.1 Master 实现对 Worker 的请求进行分发

master.js

```
const childProcess = require('child_process');
const net = require('net');

// 获取cpu的数量
const cpuNum = require('os').cpus().length;

let workers = [];
let cur = 0;

for(let i=0;i<cpuNum;++i){
    workers.push(childProcess.fork('./workder.js'));
    console.log('worker process-' + workers[i].pid);
}

// 创建TCP服务器
const tcpServer = net.createServer();

/*
    服务器收到请求后颁发给工作进程去处理
*/
tcpServer.on('connection',(socket)=>{
    worker[cur].send('socket',socket);
    cur = Number.parseInt((cur+1)%cpuNum);
});

tcpServer.listen(8989,()=>{
    console.log('Tcp Server:127.0.0.1:8989');
});
```

worker.js 代码如下：

```
// 接收主进程发来的消息
process.on('message',(msg,socket)=>{
    if(msg === 'socket' && socker){
        // 利用setTimeout 模拟异步请求
        setTimeout(()=>{
            socket.end('Request handled by worker-'+process.pid);
        },100);
    }
});

```

tcp.client.js 代码如下：

```
const net = require('net');
const maxConnectCount = 10;

for(let i=0;i<maxConnectCount;++i){
    net.createConnection({
        port:8989,
        host:'127.0.0.1'
    }).on('data',(d)=>{
        console.log(d.toString());
    })
}
```

#### 4.2 Worker 监听同一个端口

master.js 代码如下：

```
const childProcess = require('child_process');
const net = require('net');

// 获取cpu数量
const cpuNum = require('os').cpus().length;

let workers = [];
let cur = 0;

for(let i=0;i<cpuNum;++i){
    workers.push(childProcess.fork('./worker.js'));
    console.log('worker process-'+workers[i].pid);
}

// 创建TCP服务器
const tcpServer = net.createServer();

tcpServer.listen(8989,()=>{
    console.log('Tcp Server:127.0.0.1:8989');
    // 监听端口后将服务器句柄发送给worker进程
    fot(let i=0;i<cpuNum;++i){
        workers[i].send('tcpServer',tcpServer);
    }
    // 关闭master线程的端口监听
    tcpServer.close();
})

```

worker.js 代码如下:

```
// 接收主进程发来的消息
process.on('message',(msg,tcpServer)=>{
    if(msg === 'tcpServer' && tcpServer){
        tcpServer.on('connection',(socket)=>{
            setTimeout(()=>{
                socket.end('Request handled by worker-'+process.pid);
            },100);
        })
    }
});

```

tcp_client.js 代码如下：

```
const net = require('net');
const maxConnectCount =10;

for(let i=0;i<maxConnectCount;++i){
    net.createConnection({
        port:8989,
        host:'127.0.0.1'
    }).on('data',(d)=>{
        console.log(d.toString());
    })
}
```

### 参考资料

- [Node.js 中文文档](http://nodejs.cn/api/process.html)
- [浅谈 NodeJS 多进程服务架构基本原理](https://www.cnblogs.com/tugenhua0707/p/11141076.html)
- [Node.js 进阶之进程与线程](https://mp.weixin.qq.com/s/s4tLmVrUUKNVEWdk3CoB6A)
- [浅析 Node 进程与线程](https://juejin.im/post/5e0728ce518825122b0f99f2)
- [深入理解 Node.js 进程与线程(8000 长文彻底搞懂)](https://segmentfault.com/a/1190000020077274)
- [分享 10 道 Nodejs 进程相关面试题](https://mp.weixin.qq.com/s/dKN95zcRI7qkwGYKhPXrcg)
- 《深入浅出 Node.js》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
