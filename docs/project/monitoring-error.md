# 错误监控

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 为什么要处理异常?
- 需要处理哪些异常？
- 错误监控的方法

### 一、为什么要处理异常?

异常是不可控的，会影响最终的呈现结果，但是我们有充分的理由去做这样的事件。

- 增强用户体验；
- 远程定位问题；
- 未雨绸缪，及早发现问题；
- 无法复线问题，尤其是移动端，机型，系统都是问题；
- 完善的前端方案，前端监控系统；

### 二、需要处理哪些异常？

对于前端来说，我们可以做的异常捕获还真不少，总结一下，大概如下：

- `JS`语法错误、代码异常
- `Ajax`请求异常
- 静态资源加载异常
- `Promise`异常
- `Iframe`异常
- 跨域`Script error`
- 崩溃和卡顿

### 三、错误监控的方法

- try-catch
- onerror
- 监听 error 事件
- unhandledrejection

#### 3.1 try-catch

`try-catch`只能捕获到同步的运行时错误，对语法和异步错误无能为力，捕获不到。

**1. 同步运行时的错误：**

```
try {
  let name = 'jartto';
  console.log(nam);
} catch(e) {
  console.log('捕获到异常：',e);
}
```

输出：

```
捕获到异常： ReferenceError: nam is not defined
    at <anonymous>:3:15
```

**2. 不能捕获到语法错误**

```
try {
  let name = 'jartto;
  console.log(nam);
} catch(e) {

  console.log('捕获到异常：',e);
}
```

输出：

```
Uncaught SyntaxError: Invalid or unexpected token
```

**3. 异步错误**

```
try {
  setTimeout(() => {
    undefined.map(v => v);
  }, 1000)
} catch(e) {
  console.log('捕获到异常：',e);
}
```

输出

```
Uncaught TypeError: Cannot read property 'map' of undefined
    at setTimeout (<anonymous>:3:11)
```

#### 3.2 window.onerror

**1. 同步**

```
window.onerror = function(message, source, lineno, colno, error) {
// message：错误信息（字符串）。
// source：发生错误的脚本URL（字符串）
// lineno：发生错误的行号（数字）
// colno：发生错误的列号（数字）
// error：Error对象（对象）
console.log('捕获到异常：',{message, source, lineno, colno, error});
}
Jartto;
```

捕获到了异常：

```
VM243:9 Uncaught ReferenceError: Jartto is not defined
    at <anonymous>:9:1
```

**2. 语法错误**

```
window.onerror = function(message, source, lineno, colno, error) {
console.log('捕获到异常：',{message, source, lineno, colno, error});
}
let name = 'Jartto
```

输出结果：

```
Uncaught SyntaxError: Invalid or unexpected token
```

**3. 异步**

```
window.onerror = function(message, source, lineno, colno, error) {
    console.log('捕获到异常：',{message, source, lineno, colno, error});
}
setTimeout(() => {
    Jartto;
});
```

输出结果：

```
捕获到异常： {message: "Uncaught ReferenceError: Jartto is not defined", source: "http://127.0.0.1:8001/", lineno: 36, colno: 5, error: ReferenceError: Jartto is not defined
    at setTimeout (http://127.0.0.1:8001/:36:5)}
```

**4. 网络请求异常**

```
<script>
window.onerror = function(message, source, lineno, colno, error) {
    console.log('捕获到异常：',{message, source, lineno, colno, error});
    return true;
}
</script>
<img src="./jartto.png">
```

不论是静态资源异常，或者接口异常，错误都无法捕获到。

**结论**

`onerror`最好写在所有`JS`脚本的前面，否则有可能捕获不到错误；

`window.onerror`函数只有在返回`true`的时候，异常才不会向上抛出，否则即使是知道异常的发生控制台还是会显示`Uncaught Error: xxxxx`

```
window.onerror = function(message, source, lineno, colno, error) {
    console.log('捕获到异常：',{message, source, lineno, colno, error});
    return true;
}
setTimeout(() => {
    Jartto;
});
```

`onerror`无法捕获语法错误；

#### 3.3 监听 error 事件

```
<img src="./xxxxx.png">
window.addEventListener('error', args => {
    console.log(
      'error event:', args
    );
    return true;
  },
  true // 利用捕获方式
);
```

运行结果如下：

```
error event： Event:{
    bubbles: false
    cancelBubble: false
    cancelable: false
    composed: false
    currentTarget: null
    defaultPrevented: false
    eventPhase: 0
    isTrusted: true
    path: (5) [img, body, html, document, Window]
    returnValue: true
    srcElement: img
    target: img
    timeStamp: 373.70499999815365
    type: "error"
    __proto__: Event
}
```

由于网络请求异常不会事件冒泡，因此必须在捕获阶段将其捕捉到才行，但是这种方式虽然可以捕捉到网络请求的异常，但是无法判断 HTTP 状态是`404`还是其他状态，所心还需要配合服务端日志才进行排查分析才可以。

注意：

- 不同浏览器下返回的`error`对象可能不同，需要注意兼容处理。
- 需要注意避免`addEventListener`重复监听。

结论：监听`error`事件，可以捕获同步错误，异步错误，网络错误，不能处理`Promise`错误

#### 3.4 unhandledrejection

在`promise`中使用`catch`可以非常方便的捕获到异步`error`，如果没有写`catch`的`Promise`中抛出的错误无法被`onerror`或`try-catch`捕获到，为了防止有漏掉的`Promise`异步，建议在全局增加一个对`unhandledrejection`的监听，用来全局监听`Uncaught Promise Error`。

```
window.addEventListener("unhandledrejection", function(e){
  e.preventDefault()
  console.log('捕获到异常：', e);
  return true;
});
Promise.reject('promise error');
```

输出结果：

```
PromiseRejectionEvent={
    bubbles: false
    cancelBubble: false
    cancelable: true
    composed: false
    currentTarget: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
    defaultPrevented: true
    eventPhase: 0
    isTrusted: true
    path: [Window]
    promise: Promise {<rejected>: "promise error"}
    reason: "promise error"
    returnValue: false
    srcElement: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
    target: Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
    timeStamp: 23.06500000122469
    type: "unhandledrejection"
}
```

#### 总结

| 异常类型           | 同步方法 | 异步方法 | 资源加载 | Promise |
| ------------------ | -------- | -------- | -------- | ------- |
| try/catch          | 可以     | 不可以   | 不可以   | 不可以  |
| onerror            | 可以     | 可以     | 不可以   | 不可以  |
| error 事件监听     | 可以     | 可以     | 可以     | 可以    |
| unhandledrejection | 不可以   | 不可以   | 不可以   | 可以    |

### 四、错误监控常见问题

- 跨域问题
- 代码压缩后，如何处理定位到代码问题
- VUE errorHandler
- React 异常捕获
- iframe 异常
- 崩溃和卡顿

#### 4.1 跨域问题

一般情况，如果出现`Script error`这样的错误，基本上可以确定是出现 了跨域问题。这时候不会有其他太多辅助信息的，但是解决思路无非如下：

跨源资源共享机制(`CORS`)：我们为`crossOrigin`属性。

```
<script src="http://jartto.wang/main.js" crossorigin></script>
```

或者动态去添加 `js` 脚本：

```
const script = document.createElement('script');
script.crossOrigin = 'anonymous';
script.src = url;
document.body.appendChild(script);
```

特别注意，服务器端需要设置：Access-Control-Allow-Origin

此外，我们也可以试试这个[解决 Script Error 的另类思路](https://juejin.im/post/5c00a405f265da610e7fd024)：

```
const originAddEventListener = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = function (type, listener, options) {
  const wrappedListener = function (...args) {
    try {
      return listener.apply(this, args);
    }
    catch (err) {
      throw err;
    }
  }
  return originAddEventListener.call(this, type, wrappedListener, options);
}
```

解释一下：

#### 4.2 代码压缩后，如何处理定位到代码问题

如果想将错误和原有的代码关联起来就需要`sourcemap`文件。

**sourceMap 是什么**

`sourceMap`就是一个文件，里面储存着位置信息。这个文件里保存的，是转换后代码的位置，和对应的转换前的位置。

#### 4.3 VUE errorHandler

#### 4.4 React 异常捕获

#### 4.5 frame 异常

对于`iframe`的异常捕获，我们还得借力`window.onerror`：

```
window.onerror = function(message, source, lineno, colno, error) {
  console.log('捕获到异常：',{message, source, lineno, colno, error});
}
```

一个简单的例子可能如下：

```
<iframe src="./iframe.html" frameborder="0"></iframe>
<script>
  window.frames[0].onerror = function (message, source, lineno, colno, error) {
    console.log('捕获到 iframe 异常：',{message, source, lineno, colno, error});
    return true;
  };
</script>
```

一个简单的例子可能如下：

```
<iframe src="./iframe.html" frameborder="0"></iframe>
<script>
  window.frames[0].onerror = function (message, source, lineno, colno, error) {
    console.log('捕获到 iframe 异常：',{message, source, lineno, colno, error});
    return true;
  };
</script>
```

#### 4.6 崩溃和卡顿

卡顿也是网页暂时响应比较慢，`JS`可能无法及时执行。但崩溃就不一样了，网页都崩溃了，`JS`都不行了，还有什么办法可以监控网页的崩溃，并将网页崩溃上报呢？

崩溃和卡顿也是不可忽视的，也话会导致你的用户流失。

**1. 利用`window`对象的`load`和`beforeunload`事件实现了网页崩溃的监控。**

```
window.addEventListener('load', function () {
    sessionStorage.setItem('good_exit', 'pending');
    setInterval(function () {
        sessionStorage.setItem('time_before_crash', new Date().toString());
    }, 1000);
  });

  window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('good_exit', 'true');
  });

  if(sessionStorage.getItem('good_exit') &&
    sessionStorage.getItem('good_exit') !== 'true') {
    /*
        insert crash logging code here
    */
    alert('Hey, welcome back from your crash, looks like you crashed on: ' + sessionStorage.getItem('time_before_crash'));
  }
```

参考资料：[如何监控网页的卡顿？](https://zhuanlan.zhihu.com/p/39292837)

2. 基于以下原因，我们可以使用`Service Worker`来实现[如何监控网页崩溃？](https://zhuanlan.zhihu.com/p/40273861)

- `Service Worker`有自己独立的工作线程，与网页区分开，网页崩溃了，`Servie Worker`一般情况下不会崩溃；
- `Service Woker`生命周期一般要比网页还要长，可以用来监控网页的状态；
- 网页可以通过`navigator.serviceWorker.controller.postMessage API`向掌管自己的`SW`发送消息。

### 五、错误上传

#### 5.1 动态创建 img 标签

其实上报就是要将捕获的异常信息发送到后端。最常用的方式首推动态创建标签方式。因为这种方式无需加载任何通讯库，而且页面是无需刷新的。

```
new Image().src = 'http://localhost:7001/monitor/error'+ '?info=xxxxxx'
```

#### 5.2 Ajax 上报

实际上我们也可以用 ajax 的方式上报错误，这和我们再业务程序中并没有什么区别。在这里就不赘述。

### 参考资料

- [使用 vue+node 搭建前端异常监控系统](https://juejin.im/post/5e5e423ae51d4527041172b6)
- [接入 sentry-让你的错误别再裸奔](https://mp.weixin.qq.com/s/JEDt9BL2eWpVTrtbfEPiAA)
- [如何优雅处理前端异常？](https://zhuanlan.zhihu.com/p/51800345)
- [前端代码异常监控实战](https://zhuanlan.zhihu.com/p/31979395)
- [前端异常监控解决方案研究](https://cdc.tencent.com/2018/09/13/frontend-exception-monitor-research/)
- [揭开 JS 无埋点技术的神秘面纱](http://unclechen.github.io/2018/06/24/%E6%8F%AD%E5%BC%80JS%E6%97%A0%E5%9F%8B%E7%82%B9%E6%8A%80%E6%9C%AF%E7%9A%84%E7%A5%9E%E7%A7%98%E9%9D%A2%E7%BA%B1/)
- [【第 790 期】构建可靠的前端异常监控服务-采集篇](https://mp.weixin.qq.com/s/LGbMXauSuuGWcvqazjXWjQ)
- [撸一个前端监控系统（React + Node + Mysql + Webpack plugin + Docker）—— （上）](https://juejin.im/post/5e3146cce51d453176604809)
- [转转商业前端错误监控系统(Sentry)策略升级](https://juejin.im/post/5e6b16315188254963277621)
- [【第 833 期】如何设计一个前端监控系统](https://mp.weixin.qq.com/s/_AaZXxvMMFjHAynXylsjrw)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
```
