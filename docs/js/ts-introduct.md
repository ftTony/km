# ts 学习

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 什么是 TypeScript
- 配置 TypeScript
- 基础类型
- 接口
- 类
- 函数
- 继承
- 泛型

### 一、什么是 TypeScript

**TypeScript 是 JS 类型的超集**。它假设咱们知道什么是超集，什么是类型化。**TypeScript 看作是 JavaScript 之上的一个外壳。**

`TypeScript`是一个外壳，因为编写 TypeScript 的代码，在编译之后，剩下的只是简单的 JS 代码。

但是 JS 引擎无法读取 TypeScript 代码，因此任何 TypeScript 文件都应该经过**预翻译**过程。只有在第一个编译步骤之后，才剩下纯 JS 代码，可以在浏览器中运行。

### 二、配置 TypeScript

#### 2.1 安装 TypeScript

```
npm install -g typescript
```

#### 2.1 构建你的第一个 TypeScript 文件

在编辑器，将下面的代码输入到`greeter.ts`文件里：

```
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
```

#### 2.2 编译代码

在命令行上，运行 TypeScript 编译器：

```
tsc greeter.ts
```

### 三、基础类型

#### 2.1 布尔值

最基本的数据类型就是简单的 true/false 值，在 JavaScript 和 TypeScript 里叫做 `boolean`。

```
let isDone: boolean = false;
```

#### 2.2 数字

和 JavaScript 一样，TypeScript 里的所有数字都是浮点数。 这些浮点数的类型是 `number`。

```
let decLiteral: number = 0 ;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
```

#### 2.3 字符串

JavaScript 程序的另一项基本操作是处理网页或服务器端的文本数据。

```
let name: string = "bob";
name = "smith";
```

#### 2.4 数组

#### 2.5 元组

#### 2.6 枚举

#### 2.7 Any

#### 2.8 Void

#### 2.9 Null 和 Undefined

#### 2.10 Never

#### 2.11 Object

#### 2.12 类型断言

### 四、接口

### 五、类

### 六、函数

### 七、继承

### 八、泛型

### 参考资料

- [【TS 演化史 -- 破晓】一步一个脚印入门 TS](https://mp.weixin.qq.com/s/fvRvtcdrigcQzjUKwyzvHw)
- [TypeScript 手册指南](https://www.tslang.cn/docs/handbook/basic-types.html)
- [TypeScript Handbook（中文版）](https://zhongsp.gitbooks.io/typescript-handbook/content/)
- [TypeScript 入门教程](https://ts.xcatliu.com/)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
