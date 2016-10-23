# npm 常见配置

## 前言

`npm`在前端开发流程中提供了非常完善的自动化工具链，已成为每个前端开发者必备的工具，但是同样由于其强大性导致很多前端开发者只会简单的使用它。本文将总结在日常开发中所需要的`npm`知识点，以便开发者们更好的将`npm`运用在实际开发中。

## 内容

- npm 处理 node_modules 目录结构
- npm 中的依赖包
- npm scripts 脚本
- npm 配置
- npm 工程管理
- npm 的几个实用技巧

### 一、npm 处理 node_modules 目录结构

一个项目开发、上线所依赖的插件包都存放在`node_modules`中。虽然在实际开发中无需关注这个目录里面的文件结构细节，但了解`node_modules`中的内容可以帮助我们更好的理解`npm`组织这些文件的机制。

假设项目`App`中有如下三个依赖：

```
"dependencies": {
    A: "1.0.0",
    B: "1.0.0",
    C: "1.0.0"
}
```

`A`、`B`、`C`三个模块又有如下依赖：

```
A@1.0.0 -> D@1.0.0

B@1.0.0 -> D@2.0.0

C@1.0.0 -> D@1.0.0
```

#### 1.1 npm 2.x - 嵌套结构

```
├── node_modules
│   ├── A@1.0.0
│   │   └── node_modules
│   │   │   └── D@1.0.0
│   ├── B@1.0.0
│   │   └── node_modules
│   │   │   └── D@2.0.0
│   └── C@1.0.0
│   │   └── node_modules
│   │   │   └── D@1.0.0
```

#### 1.2 npm 3.x - 扁平结构

```

```

### 二、npm 中的依赖包

在`node`中其实总共5种依赖：

- **dependencies - 业务依赖**
- **devDependencies - 开发依赖**
- **peerDependencies - 同伴依赖**
- **bundledDependencies / bundleDependencies - 打包依赖**
- **optionalDependencies - 可选依赖**

### 三、npm scripts 脚本

### 四、npm 配置

### 五、npm 工程管理

### 六、npm 的几个实用技巧

### 参考资料

- [13 个 npm 快速开发技巧](https://juejin.im/post/5d1d40ea6fb9a07eb94fa7df)
- [你所需要的 npm 知识储备都在这了](https://juejin.im/post/5d08d3d3f265da1b7e103a4d)
- [npm依赖：构建编译](https://juejin.im/post/5c44a2fbf265da610f63ff39)
- [npm依赖：框架平台](https://juejin.im/post/5c457d656fb9a04a0730af07)
- [npm依赖：类库工具](https://juejin.im/post/5c457e516fb9a049ec6b6341)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>