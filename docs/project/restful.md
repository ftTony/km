# RESTful 架构

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [什么是 REST](#一、什么是-rest)
- [REST 特点](#二、rest-特点)
- [REST 优点](#三、rest-优点)
- [Nodejs 实现 RESTful API](#四、nodejs-实现-restful-api)

### 一、什么是 REST

REST：（Representational State Transfer）即**表现层状态转换**，定义了**资源**的通用访问格式，是一种网络应用程序的**设计风格**和**开发方式**。

在概念中，需要理解以下几个名称：

1. 资源：即**服务器上获取到的东西任何资源**，一条用户记录，一个用户的密码，一张图片等等都是。
2. 资源的表述：即**资源格式**，是 HTML、XML、JSON、纯文本、图片等等，可以用各种各样的格式表述你获取到的资源。
3. 状态转移：即**URL 定位资源**，用 HTTP 动词（GET，POST，DELETE,DETC）描述操作。操作是动词，资源是名词。
4. 统一接口：即通过统一的接口对资源进行操作。

### 二、REST 特点

REST 通常基于使用`HTTP`，`URI`和`XML`以及`HTML`这些现有的广泛流行的协议和标准，每一种 URI 代表一种资源。

REST 通常使用 `JSON` 数据格式。

REST 基本架构的四个方法：

- **GET**-用于**获取数据**
- **PUT**-用于**更新或添加数据**
- **DELETE**-用于**删除数据**
- **POST**- 用于**添加数据**

### 三、REST 优点

- 可更高效利用缓存来提高响应速度
- 通讯本身的无状态性可以让不同的服务器的处理一系列请求中的不同请求，提高服务器的扩展性
- 浏览器即可作为客户端，简化软件需求
- 相对于其他叠加在 HTTP 协议之上的机制，REST 的软件依赖性更小
- 不需要额外的资源发现机制
- 在软件技术演进中的长期的兼容性更好

### 四、Nodejs 实现 RESTful API

- 初始化 mock 数据
- 获取用户列表
- 添加用户
- 获取用户详情
- 删除指定用户

#### 4.1 初始化 mock 数据

本案例使用 mock 数据来演示，如下：

```
{
   "user1" : {
      "name" : "leo",
      "password" : "123456",
      "profession" : "teacher",
      "id": 1
   },
   "user2" : {
      "name" : "pingan8787",
      "password" : "654321",
      "profession" : "librarian",
      "id": 2
   },
   "user3" : {
      "name" : "robin",
      "password" : "888888",
      "profession" : "clerk",
      "id": 3
   }
}
```

#### 4.2 获取用户列表

这一步我们会创建 RESTful API 中的`/users`，使用 GET 来**读取用户的信息列表：**

```
// index.js
const expres = require('express');
const app = express();
const fs = require('fs');

// 定义读取用户的信息列表的接口
app.get('/users',(req,res)=>{
    fs.readFile(__direname+'/'+'users.json','utf8',(err,data)=>{
        console.log(data);
        res.end(data);
    });
})

const server = app.listen(8081,function(){
    const {address,port} = server.address();
    console.log(server run in: http://%s:%s',address,port);
})
```

#### 4.3 添加用户

这一步我们会创建 RESTful API 中的`/users`，使用 POST 来**添加用户记录**：

```
// index.js
// 省略之前文件 只展示需要实现的接口

// mock 一条要新增的数据
const user={
    'user4':{
        'name':'pingan',
        'password':'password4',
        'profession':'teacher',
        'id':4
    }
}

// 定义添加用户记录的接口
app.post('/users',(req,res)=>{
    // 读取已存在的数据
    fs.readFile(__dirname+'/'+'users.json','utf8',(err,data)=>{
        data = JSON.parse(data);
        data['user4']=user['user4'];
        console.log(data);
        res.end(JSON.stringify(data));
    })
})
```

#### 4.4 获取用户详情

这一步我们在 RESTful API 中的 URI 后面加上 /users/:id，使用 GET 来**获取指定用户详情**：

```
// index.js
// 省略之前文件 只展示需要实现的接口

// 定义 获取指定用户详情的接口
app.get('/users/:id',(req,res)=>{
    // 首先我们读取已存在的用户
    fs.readFile(__dirname+'/'+'users.json','utf8',(err,data)=>{
        data = JSON.parse(data);
        const user = data['user'+req.params.id]
        console.log(user);
        res.end(JSON.stringify(user);)
    })
})
```

#### 4.5 删除指定用户

这一步我们会创建 RESTful API 中的 /users，使用 DELETE 来**删除指定用户**：

```
// index.js
// 省略之前文件  只展示需要实现的接口

// mock 一条要删除的用户id
const id = 2;

app.delete('/users',(req,res)=>{
    fs.readFile(__dirname+'/'+'users.json','utf8',(err,data)=>{
        data = JSON.parse(data);
        delete data['user'+id];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

```

相关代码在[这里](https://github.com/ftTony/notes/tree/master/nodejs/express/restful)

### 参考资料

- [【全栈修炼】RESTful 架构及实践修炼宝典](http://www.pingan8787.com/2019/11/25/186-%E3%80%90%E5%85%A8%E6%A0%88%E4%BF%AE%E7%82%BC%E3%80%91RESTful%E6%9E%B6%E6%9E%84%E5%8F%8A%E5%AE%9E%E8%B7%B5%E4%BF%AE%E7%82%BC%E5%AE%9D%E5%85%B8/)
- [RESTful 架构详解](https://github.com/frank-lam/fullstack-tutorial/blob/master/notes/RESTful%20API.md)
- [理解 RESTful API 设计规范](https://www.cnblogs.com/tugenhua0707/p/12153857.html)
- [HTTP 协议理解及服务端与客户端的设计实现](https://mp.weixin.qq.com/s/69EvvR0FHR57QuhDC7bJ8w)
- [RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)
- [Nodejs RESTFul 架构实践](https://mp.weixin.qq.com/s/p9yUwzI4jivJ26iKRTdm-g)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
