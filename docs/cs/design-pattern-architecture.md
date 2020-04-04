# 架构型设计模式

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 同步模块模式
- 异步模块模式
- Widget 模式
- MVC 模式
- MVP 模式
- MVVM 模式

### 一、同步模块模式

```

```

### 二、异步模块模式

```

```

### 三、Widget 模式

```

```

### 四、MVC 模式

MVC 模式将程序分为三个部分：模型（Model）、视图（View）、控制器（Controller）。

1. **Model 模型层：** 业务数据的处理和存储，数据更新后更新；
2. **View 视图层：** 人机交互接口，一般为展示给用户的界面；
3. **Controller 控制器层：** 负责连接 Model 层和 View 层，接受并处理 View 层触发的事件，并在 Model 层的数据状态变动时更新 View 层；

### 五、MVP 模式

**MVP** 模式将程序分为三个部分：模型（Model）、视图（View）、管理层（Presenter）。

1. **Model 模型层：** 只负责存储数据，与 View 呈现无关，也与 UI 处理逻辑无关，发生更新也不用主动通知 View;
2. **View 模型层：** 人机交互接口，一般为展示给用户的界面；
3. **Presenter 管理层：** 负责连接 Model 层和 View 层，处理 View 层的事件，负责获取数据并将获取的数据经过处理后更新 View;

### 六、MVVM 模式

**MVVM**模式将程序分为三个部分：模型（Model）、视图（View）、视图模型（View-Model）。

### 参考资料

- 《JavaScript 设计模式》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
