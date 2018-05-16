# Webpack HMR 原理解析（转载）

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

Hot Module Replacement（以下简称 HMR）是 webpack 发展至今引入的最令人兴奋的特性之一 ，当你对代码进行修改并保存后，webpack 将对代码重新打包，并将新的模块发送到浏览器端，浏览器通过新的模块替换老的模块，这样在不刷新浏览器的前提下就能够对应用进行更新。例如，在开发 Web 页面过程中，当你点击按钮，出现一个弹窗的时候，发现弹窗标题没有对齐，这时候你修改 CSS 样式，然后保存，在浏览器没有刷新的前提下，标题样式发生了改变。感觉就像在 Chrome 的开发者工具中直接修改元素样式一样。

本篇文章不是告诉你怎么使用 HMR，如果你对 HMR 依然感觉到陌生，建议先阅读[官网 HMR 指南](https://doc.webpack-china.org/guides/hot-module-replacement/#-hmr)，上面有 HMR 最简单的用例，我会等着你回来的。

### 为什么需要HMR

在webpack HMR功能之前，已经有很多live reload的工具或库，比如[live-server](http://tapiov.net/live-server/)，这些库监控文件的变化，然后通知浏览器端刷新页面，那么我们为什么还需要HMR呢？答案其实在上文中已经提及一些。

- live reload工具并不能够保存应用的状态（states），当刷新页面后，应用之前状态丢失，还是上文中的例子，点击按钮出现弹窗，当浏览器刷新后，弹窗也随即消失，要恢复到之前状态，还需再次点击按钮。而webpack HMR则不会刷新器，而是运行时对模块进行热替换，保证了应用状态不会丢失，提升了开发效率。
- 在古老的开发流程中，我们可能需要手动运行命令对代码进行打包，并且打包后再手动刷新浏览器页面，而这一系列重复的工作都可以通过HMR工作流来自动化完成，让更多的精力投入到业务中，而不是时间浪费在重复的工作上。
- HMR兼容市面上大多前端框架或库，比如[React Hot Loader](https://github.com/gaearon/react-hot-loader)，[Vue-loader](https://github.com/vuejs/vue-loader)，能够监听React或者Vue组件的变化，实时将最新的组件更新到浏览器端。[Elm Hot Loader](https://github.com/fluxxu/elm-hot-loader)支持通过webpack对Elm语言代码进行转译并打包，当然它也实现了HMR功能。

### HMR 的工作原理图解

初识HMR的时候觉得其很神奇，一直有一些疑问萦绕在脑海。

1. webpack可以将不同的模块打包成`bundle`文件或者几个`chunk`文件，但是当我通过`webpack HMR`进行开发的过程中，我并没有在我的dist目录中找到webpack打包好的文件，它们去哪呢？
2. 通过查看[webpack-dev-server](https://link.zhihu.com/?target=https%3A//github.com/webpack/webpack-dev-server)的package.json文件，我们知道其依赖于[webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)库，那webpack-dev-middleware在HMR过程中扮演什么角色？
3. 使用HMR的过程中，通过Chrome开发者工具我知道浏览器是通过`websocket`和`webpack-dev-server`进行通信的，但是`websocket`的`message`中并没有发现新模块代码。打包后的新模块又是通过什么方式发送到浏览器端的呢？为什么新的模块不通过websocket随消息一起发送到浏览器端呢？为什么新的模块不通过websocket随消息一起发送到浏览器端呢？
4. 浏览器拿到最新的模块代码，HMR又是怎么将老的模块替换成新的模块，在替换的过程中怎样处理模块之间的依赖关系？
5. 当模块的热替换过程中，如果替换模块失败，有什么回退机制吗？

带着上面的问题，于是决定深入到 webpack 源码，寻找 HMR 底层的奥秘。

![images](webpack19.jpg)

图一：HMR工作流程图解

上图是webpack配合`webpack-dev-server`进行应用开发的模块热更新流程图。

- 上图底部红色框内是服务端，而上面的橙色框是浏览器端。
- 绿色的方框是webpack代码控制的区域。蓝色方框是`webpack-dev-server`代码控制的区域，洋红色的方框是文件系统，文件修改后的变化就发生在这，而青色的方框是应用本身。

上图显示了我们修改代码到模块热更新完成的一个周期，通过深绿色的阿拉伯数字符号已经将HMR的整个过程标识了出来。

1. 第一步，在webpack的watch模式下，文件系统中某一个文件发生修改，webpack监听到文件变化，根据配置文件对模块重新编译打包，并将打包后的代码通过简单的JavaScript对象保存在内存中。
2. 第二步是webpack-dev-server和webpack之间的接口交互，而在这一步，主要是dev-server的中间件webpack-dev-middleware和webpack之间的交互，webpack-dev-middleware调用webpack暴露的API对代码变化进行监控，并且告诉webpack，将代码打包到内存中。
3. 第三步是webpack-dev-server对文件变化的一个监控，这一步不同于第一步，并不是监控代码变化重新打包。当我们在配置文件中配置了[devServer.watchContentBase](https://webpack.js.org/configuration/dev-server/#devserver-watchcontentbase)为true的时候，Server会监听这些配置文件夹中静态文件的变化，变化后会通知浏览器端对应用进行live reload。注意，这儿是浏览器刷新，和HMR是两个概念。
4. 第四步也是webpack-dev-server代码的工作，该步骤主要是通过[sockjs](https://github.com/sockjs/sockjs-client)在浏览器端和服务端之间建立一个websocket长连接，将webpack编译打包的各个阶段的状态信息告浏览器端，同时也包括第三步中Server监听静态文件变化的信息。浏览器端根据这些socket消息进行不同的操作。当然服务端传递的最主要信息还是新模块的hash值，后面的步骤根据这一hash值来进行模块热替换。
5. webpack-dev-server/client 端并不能够请求更新的代码，也不会执行热更模块操作，而把这些工作又交回给了webpack，webpack/hot/dev-server的工作就是根据webpack-dev-server/client传给它的信息以及dev-server的配置决定是刷新浏览器呢还是进行模块热更新。当然如果仅仅是刷新浏览器，也就没有后面那些步骤了。
6. HotModuleReplacement.runtime 是客户端 HMR 的中枢，它接收到上一步传递给他的新模块的hash值，它通过 JsonpMainTemplate.runtime向server端发送ajax请求，服务端返回一个json，该json包含了所有要更新的模块的hash值，获取到更新列表后，该模块再次通过jsonp请求，获取到最新的模块代码。这就是上图中7、8、9步骤。
7. 而第10步是决定HMR成功与否的关键步骤，在该步骤中，HotModulePlugin将会对新旧模块进行对比，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引用。
8. 最后一步，当HMR失败后，回退到live reload操作，也就是进行浏览器刷新来获取最新打包代码。

### 运用 HMR 的简单例子

在上一个部分，通过一张 HMR 流程图，简要的说明了 HMR 进行模块热更新的过程。当然你可能感觉还是很迷糊，对上面出现的一些英文名词也可能比较陌生（上面这些英文名词代表着代码仓库或者仓库中的文件模块），没关系，在这一部分，我将通过一个[最简单最纯粹的例子](https://github.com/Jocs/webpack-HMR-demo)，通过分析 wepack及 webpack-dev-server 源码详细说明各个库在 HMR 过程中的具体职责。

在开始这个例子之前简单对这个仓库文件进行下说明，仓库中包含文件如下：

```
--hello.js
--index.js
--index.html
--package.json
--webpack.config.js
```

项目中包含两个js文件，项目入口文件是index.js文件，hello.js文件是index.js文件一个依赖，js代码如你所见，将在body元素中添加一个包含`hello world`的div元素。

webpack.config.js的配置如下：

```
const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/')
    },
    devServer: {
        hot: true
    }
}
```

值得一提的是，在上面的配置中并没有配置HotModuleReplacementPlugin，原因在于当我们设置devServer.hot为true后，并且在package.json文件中添加如下的script脚本：

>"start": "webpack-dev-server --hot --open"

添加——hot配置项后，devServer会告诉webpack自动引入HotModuleReplacementPlugin插件，而不用我们再手动引入了。

进入到仓库目录，npm install安装依赖后，运行npm start就启动了devServer服务，访问[http://127.0.0.1:8080](http://127.0.0.1:8080)就可以看到我们的页面了。

下面将进入到关键环节，在简单例子中，我将修改hello.js文件中的代码，在源码层面上来分析HMR的具体运行流程，当然我还是将按照上面图解来分析。修改代码如下：（以下所有代码块首行就是该文件的路径）

```
// hello.js
- const hello = () => 'hello world' // 将 hello world 字符串修改为 hello eleme
+ const hello = () => 'hello eleme'0
```

页面中hello world文件随即变成hello eleme。

**第一步：webpack对文件系统进行watch打包到内存中**

webpack-dev-middleware 调用 webpack 的 api 对文件系统 watch，当hello.js文件发生改变后，webpack重新对文件进行编译打包，然后保存到内存中。

```
// webpack-dev-middleware/lib/Shared.js
if(!options.lazy) {
    var watching = compiler.watch(options.watchOptions, share.handleCompilerCallback);
    context.watching = watching;
}
```

你可能会疑问了，为什么webpack没有将文件直接打包到output.path目录下呢？文件又去了哪儿？原来webpack将bundle.js文件打包到了内存中，不生成文件的原因就在于访问内存中的代码比访问文件系统中的文件更快，而且也减少了代码写入文件的开销，这一切都归功于[memory-fs](https://github.com/webpack/memory-fs)，memory-fs是webpack-dev-middleware的一个依赖库，webpack-dev-middleware将webpack原本的outputFileSystem替换成了MemoryFileSystem实例，这样代码就将输出到内存中，webpack-dev-middleware 中该部分源码如下：

```
// webpack-dev-middleware/lib/Shared.js
var isMemoryFs = !compiler.compilers && compiler.outputFileSystem instanceof MemoryFileSystem;
if(isMemoryFs) {
    fs = compiler.outputFileSystem;
} else {
    fs = compiler.outputFileSystem = new MemoryFileSystem();
}
```

首先判断当前fileSystem是否已经是MemoryFileSystem的实例，如果不是，用MemoryFileSystem的实例替换compiler之前outputFileSystem。这样bundle.js文件代码就作为一个简单javascript对象保存在了内存中，当浏览器请求bundle.js文件时，devServer就直接去内存中找到上面保存的javascript对象返回给浏览器端。

**第二步：devServer通知浏览器端文件发生改变**

在这一阶段，sockjs是服务器和浏览器端之间的桥梁，在启动devServer的时候，sockjs在服务端和浏览器端建立了一个webSocket长连接，以便将webpack编译和打包的各个阶段状态告知浏览器，最关键的步骤还是webpack-dev-server调用webpack api监听compile的done事件，当compile完成后，webpack-dev-server通过`_sendStatus`方法将编译打包后的新模块hash值发送到浏览器端。

```
// webpack-dev-server/lib/Server.js
compiler.plugin('done', (stats) => {
  // stats.hash 是最新打包文件的 hash 值
  this._sendStats(this.sockets, stats.toJson(clientStats));
  this._stats = stats;
});
...
Server.prototype._sendStats = function (sockets, stats, force) {
  if (!force && stats &&
  (!stats.errors || stats.errors.length === 0) && stats.assets &&
  stats.assets.every(asset => !asset.emitted)
  ) { return this.sockWrite(sockets, 'still-ok'); }
  // 调用 sockWrite 方法将 hash 值通过 websocket 发送到浏览器端
  this.sockWrite(sockets, 'hash', stats.hash);
  if (stats.errors.length > 0) { this.sockWrite(sockets, 'errors', stats.errors); } 
  else if (stats.warnings.length > 0) { this.sockWrite(sockets, 'warnings', stats.warnings); }      else { this.sockWrite(sockets, 'ok'); }
};
```

**第三步：webpack-dev-server/client接收到服务端消息做出响应**

可能你又会有疑问，我并没有在业务代码里面添加接收websocket消息的代码，也没有在webpack.config.js中的entry属性中添加新的入口文件，那么bundle.js中接收websocket消息的代码从哪来的呢？原来是webpack-dev-server修改了webpack配置中的entry属性，在里面添加了webpack-dev-client的代码，这样在最后bundle.js文件中就会有接收websocket消息的代码了。

webpack-dev-server/client当接收到type为hash消息后会将hash值暂存起来，当接收到type为ok的消息后对应用执行reload操作，如下图所示，hash消息是在ok消息之前。

![images](webpack20.jpg)

图二：websocket 接收 dev-server 通过 sockjs 发送到浏览器端的消息列表

在 reload 操作中，webpack-dev-server/client 会根据 hot 配置决定是刷新浏览器还是对代码进行热更新（HMR）。代码如下：

```
/ webpack-dev-server/client/index.js
hash: function msgHash(hash) {
    currentHash = hash;
},
ok: function msgOk() {
    // ...
    reloadApp();
},
// ...
function reloadApp() {
  // ...
  if (hot) {
    log.info('[WDS] App hot update...');
    const hotEmitter = require('webpack/hot/emitter');
    hotEmitter.emit('webpackHotUpdate', currentHash);
    // ...
  } else {
    log.info('[WDS] App updated. Reloading...');
    self.location.reload();
  }
}
```

如上面代码所示，首先将hash值暂存到currentHash变量，当接收到ok消息后，对App进行reload。如果配置了模块热更新，就调用webpack/hot/emitter将最新hash值发送给webpack，然后将控制权交给webpack客户端代码。如果没有配置模块热更新，就直接调用location.reload方法刷新页面。

**第四步：webpack接收到最新hash值验证并请求模块代码**

在这一步，其实是webpack中三个模块(三个文件，后面英文名对应文件路径)之间配合的结果，首先是webpack/hot/dev-server监听第三步webpack-dev-server/client发送的`webpackHotUpdate`消息，调用webpack/lib/HotModuleReplacement.runtime（简称 HMR runtime）中的 check 方法，检测是否有新的更新，在check过程中会利用webpack/lib/JsonpMainTemplate.runtime（简称 jsonp runtime）中的两个方法`hotDownloadUpdateChunk`和`hotDownloadManifest`，第二个方法是调用AJAX向服务器端请求是否有更新的文件，如果有将发更新的文件列表返回浏览器，而第一个方法是通过jsonp请求最新的模块代码然后将代码返回给HMR runtime，HMR runtime会根据返回的新模块代码做进一步处理，可能是刷新页面，也可能是对模块进行热更新。

![images](webpack21.jpg)

图三：hotDownloadManifest方法获取更新文件列表

![images](webpack22.jpg)

图四：hotDownloadUpdateChunk获取到更新的新模块代码

如上两图所示，值得注意的是，两次请求的都是使用上一次的hash值拼接的请求文件名，hotDownloadManifest方法返回的是最新的hash值，hotDownloadUpdateChunk方法返回的就是最新hash值对对应的代码块。然后将新的代码块返回给HMR runtime，进行模块热更新。

还记得**HMR的工作原理图解**中的问题3吗？为什么更新模块的代码不直接在第三步通过websocket发送到浏览器端，而是通过jsonp来获取呢？我的理解是功能块的解耦，各个模块各司其职，dev-server/client只负责消息的传递而不负责新模块的获取，而这些工作应该有HMR runtime来完成，HMR runtime才应该是获取新代码的地方。再就是因为不使用webpack-dev-server 的前提，使用webpack-hot-middleware 和 webpack 配合也可以完成模块热更新流程，在使用webpack-hot-middleware中有件有意思的事，它没有使用websocket，而是使用的EventSource。综上所述，HMR 的工作流中，不应该把新模块代码放在 websocket 消息中。

**第五步：HotModuleReplacement.runtime 对模块进行热更新**

这一步是整个模块热更新（HMR）的关键步骤，而且模块热更新都是发生在HMR runtime 中的 hotApply 方法中，这儿我不打算把 hotApply 方法整个源码贴出来了，因为这个方法包含 300 多行代码，我将只摘取关键代码片段。

```
// webpack/lib/HotModuleReplacement.runtime
function hotApply() {
    // ...
    var idx;
    var queue = outdatedModules.slice();
    while(queue.length > 0) {
        moduleId = queue.pop();
        module = installedModules[moduleId];
        // ...
        // remove module from cache
        delete installedModules[moduleId];
        // when disposing there is no need to call dispose handler
        delete outdatedDependencies[moduleId];
        // remove "parents" references from all children
        for(j = 0; j < module.children.length; j++) {
            var child = installedModules[module.children[j]];
            if(!child) continue;
            idx = child.parents.indexOf(moduleId);
            if(idx >= 0) {
                child.parents.splice(idx, 1);
            }
        }
    }
    // ...
    // insert new code
    for(moduleId in appliedUpdate) {
        if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
            modules[moduleId] = appliedUpdate[moduleId];
        }
    }
    // ...
}
```

从上面hotApply方法可以看出，模块热替换主要分三个阶段，第一个阶段是找出outdatedModules和outdateDependencies，这儿我没有贴这部分代码，有兴趣可以自己阅读源码。第二个阶段从缓存中删除过期的模块和依赖，如下：

>delete installedModules[moduleId];
>delete outdatedDependencies[moduleId];

第三个阶段是将新的模块添加到modules中，当下次调用__webpack_require__(webpack 重写的 require 方法)方法的时候，就是获取到了新的模块代码了。

模块热更新的错误处理，如果在热更新过程出现错误，热更新将回退到刷新浏览器，这部分代码在dev-server代码中，简要代码如下：

```
module.hot.check(true).then(function(updatedModules) {
    if(!updatedModules) {
        return window.location.reload();
    }
    // ...
}).catch(function(err) {
    var status = module.hot.status();
    if(["abort", "fail"].indexOf(status) >= 0) {
        window.location.reload();
    }
});
```

dev-server 先验证是否有更新，没有代码更新的话，重载浏览器。如果在 hotApply 的过程中出现 abort 或者 fail 错误，也进行重载浏览器。

**第六步：业务代码需要做些什么？**

当用新的模块代码替换老的模块后，但是我们的业务代码并不能知道代码已经发生变化，也就是说，当hello.js文件修改后，我们需要在index.js文件中调用HMR的accept方法，添加模块更新后的处理函数，及时将hello方法的返回值插入到页面中。代码如下：

```
// index.js
if(module.hot) {
    module.hot.accept('./hello.js', function() {
        div.innerHTML = hello()
    })
}
```

这样就是整个 HMR 的工作流程了。

### 参考资料

- [Webpack HMR 原理解析](https://zhuanlan.zhihu.com/p/30669007)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>

