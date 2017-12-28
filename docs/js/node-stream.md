# stream 模块

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [流接口简介](#一、流接口简介)
- [Stream 分类](#二、stream分类)

### 一、流接口简介

流（stream）是 Node.js 中处理流式数据的抽象接口。`Node.js`中很多对象都实现了流，流是`EventEmitter`对象的一个实例。

![image](stream.png)

访问`stream`模块：

```
const stream = require('stream');
```

### 二、Stream 分类

在 nodejs 中，有四种 stream 类型：

- **Readable：** 用来读取数据，比如`fs.createReadStrem()`。
- **Writable：** 用来写数据，比如`fs.createWriteStream()`。
- **Duplex：** 可读+可写，比如`net.Socket()`。
- **Transform：** 在读写的过程中，可以对数据进行修改，比如`zlib.createDeflat()`（数据压缩/解压）。

#### 2.1 Readable

可读流是对提供数据的来源的一种抽象。

`Readable`的例子包括：

- 客户端的 HTTP 响应
- 服务端的 HTTP 请求
- fs 的读取流

例一

```
var fs = require('fs');

fs.readFile('./sample.txt', 'utf8', function(err, content){
	// 文件读取完成，文件内容是 [你好，我是程序猿小卡]
	console.log('文件读取完成，文件内容是 [%s]', content);
});
```

例二

这里使用了`.pipe(dest)`，好处在于，如果源文件较大，对于降低内存占用有好处。

```
var fs = require('fs');

fs.createReadStream('./sample.txt').pipe(process.stdout);
```

#### 2.2 Writable

`Writable`的例子包括：

- 客户端的 HTTP 响应
- 服务端的 HTTP 请求
- fs 的写入流

```
var fs = require('fs');
var content = 'hello world';
var filepath = './sample.txt';

fs.writeFile(filepath, content);
```

#### 2.3 Duplex

双工流（Duplex）是同时实现了`Readable`和`Writable`接口的流。

最常见的 Duplex stream 应该就是`net.Socket`实例了

`Duplex`流的例子包括：

- TCP socket

服务端代码：

```
var net = require('net');
var opt = {
	host: '127.0.0.1',
	port: '3000'
};

var server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log('client send message: ', data.toString());
    });
    socket.write('hello client');
});
server.listen(opt.port, opt.host, ()=>{
    console.log(server.address());
});
```

客户端代码：

```
var net = require('net');
var opt = {
	host: '127.0.0.1',
	port: '3000'
};

var client = net.connect(opt, function(){
	client.write('msg from client');  // 可写
});

// 可读
client.on('data', function(data){
    // lient: got reply from server [reply from server]
	console.log('client: got reply from server [%s]', data);
	client.end();
});
```

#### 2.4 Transform

Transform 是 Duplex 的特殊，也就是说，Transform 也同时可读可写。

`Transform` 流的例子包括：

- zlib 流
- crypto 流

```
var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var inFile = fs.createReadStream('./extra/fileForCompress.txt');
var out = fs.createWriteStream('./extra/fileForCompress.txt.gz');

inFile.pipe(gzip).pipe(out);
```

### 参考资料

- 《node.js 高级编程》
- [Stream 模块](https://github.com/wscats/node-tutorial/tree/master/tutorial/stream)
- [理解 Stream 模块](https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/stream.md)
- [想学 Node.js，stream 先有必要搞清楚](https://juejin.im/post/5d25ce36f265da1ba84ab97a)
- [[译] 你所需要知道的关于 Node.js Streams 的一切](https://mp.weixin.qq.com/s/huPERCsDnDpk6jRnbD6n-Q)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
