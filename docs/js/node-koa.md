# koa 基础应用

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [安装](#一、安装-koa)
- [路由](#二、路由)
- [请求数据获取](#三、请求数据获取)
- [静态资源加载](#四、静态资源加载)
- [cookie/session](#五、cookie-session)
- [数据库 mysql](#六、数据库mysql)

### 一、安装 koa

```
npm install koa --save
```

- 快速使用
- 启动 demo

#### 1.1 快速使用

```
const Koa = require('koa')
const app = new Koa()

app.use(async (ctx)=>{
    ctx.body = 'hello koa2'
})

app.listen(3000)

console.log('[demo] start-quick is starting at port 3000')
```

#### 1.2 启动 demo

由于 koa2 是基于 async/await 操作中间件，目前 node.js 7.x 的 harmony 模式下才能使用，所以启动的时的脚本如下：

```
node index.js
```

访问 http:localhost:3000，效果如下

![images](node01.png)

### 二、路由

- 安装 koa-router 中间件
- 快速使用 koa-router

#### 2.1 安装 koa-router 中间件

```
npm install --save koa-router
```

#### 2.2 快速使用 koa-router

```
const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

const Router = require('koa-router')

let home = new Router()

// 子路由1
home.get('/', async ( ctx )=>{
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
})

// 子路由2
let page = new Router()
page.get('/404', async ( ctx )=>{
  ctx.body = '404 page!'
}).get('/helloworld', async ( ctx )=>{
  ctx.body = 'helloworld page!'
})

// 装载所有子路由
let router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] route-use-middleware is starting at port 3000')
})

```

### 三、请求数据获取

- GET 请求数据获取
- POST 请求数据获取

#### 3.1 GET 请求数据获取

获取 GET 请求数据有两个路径：

- 是从上下文中直接获取
  - 请求对象`ctx.query`，返回如 `{ a:1, b:2 }`
  - 请求字符串`ctx.querystring`，返回如 `a=1&b=2`
- 是从上下文的 `request` 对象中获取
  - 请求对象 `ctx.request.query`，返回如 `{ a:1, b:2 }`
  - 请求字符串 `ctx.request.querystring`，返回如 `a=1&b=2`

**例子代码**

```
const Koa = require('koa')
const app = new Koa()

app.use( async ( ctx ) => {
  let url = ctx.url
  // 从上下文的request对象中获取
  let request = ctx.request
  let req_query = request.query
  let req_querystring = request.querystring

  // 从上下文中直接获取
  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring

  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  }
})

app.listen(3000, () => {
  console.log('[demo] request get is starting at port 3000')
})
```

**执行程序**

```
node get.js
```

执行后程序后，用 chrome 访问 http://localhost:3000/page/user?a=1&b=2 会出现以下情况

![images](node02.png)

#### 3.2 POST 请求数据获取

对于 POST 请求的处理，koa2 没有封装获取参数的方法，可以通过以下方式获取

- 解析上下文 context 中的原生 node.js 请求对象 req，将 POST 表单数据解析成 query string（例如：`a=1&b=2&c=3`），再将 query string 解析成 JSON 格式（例如：`{"a":"1", "b":"2", "c":"3"}`）
- 使用 `koa-bodyparser`中间件

**解析上下文 context 中的原生 node.js 请求对象 req 相关代码**

```
const Koa = require('koa')
const app = new Koa()

app.use( async ( ctx ) => {

  if ( ctx.url === '/' && ctx.method === 'GET' ) {
    // 当GET请求时候返回表单页面
    let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
  } else if ( ctx.url === '/' && ctx.method === 'POST' ) {
    // 当POST请求的时候，解析POST表单里的数据，并显示出来
    let postData = await parsePostData( ctx )
    ctx.body = postData
  } else {
    // 其他请求显示404
    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
  }
})

// 解析上下文里node原生请求的POST参数
function parsePostData( ctx ) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.addListener('data', (data) => {
        postdata += data
      })
      ctx.req.addListener("end",function(){
        let parseData = parseQueryStr( postdata )
        resolve( parseData )
      })
    } catch ( err ) {
      reject(err)
    }
  })
}

// 将POST请求参数字符串解析成JSON
function parseQueryStr( queryStr ) {
  let queryData = {}
  let queryStrList = queryStr.split('&')
  console.log( queryStrList )
  for (  let [ index, queryStr ] of queryStrList.entries()  ) {
    let itemList = queryStr.split('=')
    queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
  }
  return queryData
}

app.listen(3000, () => {
  console.log('[demo] request post is starting at port 3000')
})
```

**使用 `koa-bodyparser`中间件相关代码**

```
const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

// 使用ctx.body解析中间件
app.use(bodyParser())

app.use( async ( ctx ) => {

  if ( ctx.url === '/' && ctx.method === 'GET' ) {
    // 当GET请求时候返回表单页面
    let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
  } else if ( ctx.url === '/' && ctx.method === 'POST' ) {
    // 当POST请求的时候，中间件koa-bodyparser解析POST表单里的数据，并显示出来
    let postData = ctx.request.body
    ctx.body = postData
  } else {
    // 其他请求显示404
    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
  }
})

app.listen(3000, () => {
  console.log('[demo] request post is starting at port 3000')
})
```

**启动例子**

```
node post.js
```

**访问页面**

![images](node03.png)

### 四、静态资源加载

#### 4.1 安装·koa-static 中间件

```
npm install --save koa-static
```

#### 4.2 使用例子

```
const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'

app.use(static(
  path.join( __dirname,  staticPath)
))


app.use( async ( ctx ) => {
  ctx.body = 'hello world'
})

app.listen(3000, () => {
  console.log('[demo] static-use-middleware is starting at port 3000')
})
```

#### 4.3 效果

访问http://localhost:3000

![images](node04.png)

访问http://localhost:3000/index.html

![images](node05.png)

访问http://localhost:3000/js/index.js

![images](node06.png)

### 五、cookie/session

- koa 使用 cookie
- koa 使用 session

#### 5.1 koa 使用 cookie

**使用方法**

koa 提供了从上下文直接读取、写入 cookie 的方法

- `ctx.cookies.get(name, [options])`读取上下文请求中的`cookie`
- `ctx.cookies.set(name, value, [options])`在上下文中写入`cookie`

**例子代码**

```
const Koa = require('koa')
const app = new Koa()

app.use( async ( ctx ) => {

  if ( ctx.url === '/index' ) {
    ctx.cookies.set(
      'cid',
      'hello world',
      {
        domain: 'localhost',  // 写cookie所在的域名
        path: '/index',       // 写cookie所在的路径
        maxAge: 10 * 60 * 1000, // cookie有效时长
        expires: new Date('2017-02-15'),  // cookie失效时间
        httpOnly: false,  // 是否只用于http请求中获取
        overwrite: false  // 是否允许重写
      }
    )
    ctx.body = 'cookie is ok'
  } else {
    ctx.body = 'hello world'
  }

})

app.listen(3000, () => {
  console.log('[demo] cookie is starting at port 3000')
})
```

**运行例子**

```
node index.js
```

访问http://localhost:3000/index

![images](node07.png)

#### 5.1 koa 使用 session

koa2 原生功能只提供了 cookie 的操作，但是没有提供 session 操作。session 就只用自己实现或者通过第三方中间件实现。在 koa2 中实现 session 的方案有一下几种

- 如果 session 数据量很小，可以直接存在内存中
- 如果 session 数据量很大，则需要存储介质存放 session 数据

**数据库存储方案**

- 将 session 存放在 mysql 数据库中
- 需要用到中间件
  - `koa-session-minimal` 适用于 `koa2` 的`session`中间件，提供存储介质的读写接口 。
  - `koa-mysql-session` 为 `koa-session-minimal`中间件提供 `MySQL` 数据库的 `session` 数据读写操作。
  - 将 `sessionId`和对于的数据存到数据库
- 将数据库的存储的 sessionid 存到页面的 cookie 中
- 根据 cookie 的 sessionid 去获取对于的 session 信息

**例子代码**

```
const Koa = require('koa')
const session = require('koa-session-minimal')
const MysqlSession = require('koa-mysql-session')

const app = new Koa()

// 配置存储session信息的mysql
let store = new MysqlSession({
  user: 'root',
  password: 'abc123',
  database: 'koa_demo',
  host: '127.0.0.1',
})

// 存放sessionId的cookie配置
let cookie = {
  maxAge: '', // cookie有效时长
  expires: '',  // cookie失效时间
  path: '', // 写cookie所在的路径
  domain: '', // 写cookie所在的域名
  httpOnly: '', // 是否只用于http请求中获取
  overwrite: '',  // 是否允许重写
  secure: '',
  sameSite: '',
  signed: '',

}

// 使用session中间件
app.use(session({
  key: 'SESSION_ID',
  store: store,
  cookie: cookie
}))

app.use( async ( ctx ) => {

  // 设置session
  if ( ctx.url === '/set' ) {
    ctx.session = {
      user_id: Math.random().toString(36).substr(2),
      count: 0
    }
    ctx.body = ctx.session
  } else if ( ctx.url === '/' ) {

    // 读取session信息
    ctx.session.count = ctx.session.count + 1
    ctx.body = ctx.session
  }

})

app.listen(3000)
console.log('[demo] session is starting at port 3000')
```

**运行例子**

```
node index.js
```

**访问连接设置 session**

`http://localhost:3000/set`

![images](node08.png)

**查看数据库 session 是否存储**

![images](node09.png)

**查看 cookie 中是否种下了 sessionId**

`http://localhost:3000`

![images](node10.png)

### 六、数据库 mysql

- 安装 node.js 的 mysql 模块
- 使用模块

#### 6.1 安装 node.js 的 mysql 模块

```
npm install --save mysql
```

#### 6.2 使用模块

**创建数据库会话**

```
const mysql      = require('mysql')
const connection = mysql.createConnection({
  host     : '127.0.0.1',   // 数据库地址
  user     : 'root',    // 数据库用户
  password : '123456'   // 数据库密码
  database : 'my_database'  // 选中数据库
})

// 执行sql脚本对数据库进行读写
connection.query('SELECT * FROM my_table',  (error, results, fields) => {
  if (error) throw error
  // connected!

  // 结束会话
  connection.release()
});
```

> 注意：一个事件就有一个从开始到结束的过程，数据库会话操作执行完后，就需要关闭掉，以免占用连接资源。

**创建数据连接池**

一般情况下操作数据库是很复杂的读写过程，不只是一个会话，如果直接用会话操作，就需要每次会话都要配置连接参数。所以这时候就需要连接池管理会话。

```
const mysql = require('mysql')

// 创建数据池
const pool  = mysql.createPool({
  host     : '127.0.0.1',   // 数据库地址
  user     : 'root',    // 数据库用户
  password : '123456'   // 数据库密码
  database : 'my_database'  // 选中数据库
})

// 在数据池中进行会话操作
pool.getConnection(function(err, connection) {

  connection.query('SELECT * FROM my_table',  (error, results, fields) => {

    // 结束会话
    connection.release();

    // 如果有错误就抛出
    if (error) throw error;
  })
})
```

### 参考资料

- 《Koa 与 Node.js 开发实战》
- [深入浅出 Koa2](https://github.com/berwin/Blog/issues/9)
- [Koa2 进阶学习笔记](https://chenshenhai.github.io/koa2-note/)
- [KOA2 框架原码解析和实现](https://juejin.im/post/5db7eaf7f265da4cee4d61b9)
- [多维度分析 Express、Koa 之间的区别](https://mp.weixin.qq.com/s/fPd8FHk2Ak224bgWD5a4oQ)
- [[Node.js 进阶系列]Koa 源码精读一](https://github.com/webfansplz/article/issues/12)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
````
