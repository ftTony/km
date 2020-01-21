# mvvm 框架介绍

## 前言

三个非常重要的架构模式

- MVC（Model(模型)-View(视图)-Controller(控制器)）
- MVP（Model(模型)-View(视图)-Presenter(中介者)）
- MVVM（Model(模型)-View(视图)-ViewModel(视图模型)）

## 内容

- [MVC 模式](#一、MVC-模式)
- [MVP 模式](#二、MVP-模式)
- [MVVM 是什么?](#三、mvvm-是什么)
- [MVVM 的优缺点?](#四、mvvm-的优缺点)

### 一、MVC 模式

MVC 是一个架构设计模式，它通过分离关注点的方式支持改进应用组织方式。它促成了业务数据(Models)从用户面(Views)中分离出来，还有第三个组成部分(Controllers)负责管理传统意义上的业务逻辑和用户输入。

![images](mvc.jpeg)

#### 1.1 Models

#### 1.2 Models

#### 1.3 Models

#### 1.4 MVC 模式的优势

### 二、MVP 模式

模型-视图-展示器(MVP)是 MVC 设计模式的一个衍生模式，它专注于提升展现逻辑。

![images](mvp.png)

#### 2.1 Presenter

MVP 中的 P 代表展示器。它是一个包含视图的用户界而逻辑的组件。不像 MVC，来自视图的调用被委派给了控制器，它是从视图中解耦出来的，并且转而通过一个接口来同它进行对话。

### 三、MVVM 是什么?

![images](mvvm.png)

#### 3.1 ViewModel

ViewModel 层：把 View 需要的层数据暴露，并对 View 层的数据绑定绑定声明、指令声明、事件绑定声明负责，也就是处理 View 层的具体业务逻辑。ViewModel 底层会做好绑定属性的监听。当 ViewModel 中数据变化，View 层会得到更新；而当 View 中声明了数据的双向绑定（通常是表单元素），框架也会监听 View 层（表单）值的变化。一旦值变化，View 层绑定的 ViewModel 中的数据也会得到自动更新。

#### 3.2 MVVM 模式优劣

**优点：**

1. 分享视图(View)和模型(Model，降低代码耦合，提高视图或者逻辑的重用性：比如视图(View)可以独立于 Model 变化和修改，一个 ViewModel 可以绑定不同的“View”上，当 View 变化的时候 Model 不可以不变，当 Model 变化的时候 View 也可以不变。你可以把一些视图逻辑放在一个 ViewModel 里面，让很多 view 征用这段视图逻辑
2. 提高可测试性：ViewModel 的存在可以帮助开发者更好地编写测试代码
3. 自动更新 dom：利用双向绑定，数据更新后视图自动更新，让开发者从繁琐的手动 dom 中解放

**缺点：**

1. Bug 很难被调试：因为使用双向绑定的模式，当你看到界面异常了，有可能是你 View 的代码有 Bug，也可能是 Model 的代码有问题。数据绑定使得一个位置的 Bug 被快速传递到别的位置，
2. 一个大的模块中 Model 也会很大，虽然使用方便了也很容易保证了数据的一致性，当时长期持有，有释放内存就千万了花费更多的内存
3. 对于大型的图形应用程序，视图状态较多，ViewModel 的构建和维护的成本都会比较高。

### 参考资料

- [你对 MVVM 的理解?](https://www.cxymsg.com/guide/vue.html#%E4%BD%A0%E5%AF%B9mvvm%E7%9A%84%E7%90%86%E8%A7%A3)
- [看完这篇关于 MVVM 的文章，面试通过率提升了 80%](https://juejin.im/post/5af8eb55f265da0b814ba766)
- [MVC、MVP 和 MVVM 对比笔记](https://www.cnblogs.com/shenyf/p/9532342.html)
- [不好意思！耽误你的十分钟，让 MVVM 原理还给你](https://juejin.im/post/5abdd6f6f265da23793c4458)
- [mvvm 与 mvc](https://github.com/qappleh/Web-Daily-Question/blob/master/%E6%9E%B6%E6%9E%84/MVC%E5%92%8CMVVM/README.md)
- 《现代化前端技术解析》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
