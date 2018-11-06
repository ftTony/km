# koa 基础应用

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 安装
- 路由
- 请求数据获取
- 静态资源加载
- cookie/session

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

### 参考资料

- 《Koa 与 Node.js 开发实战》
- [Koa2 进阶学习笔记](https://chenshenhai.github.io/koa2-note/)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
````
