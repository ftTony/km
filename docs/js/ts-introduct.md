# ts 学习

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [什么是 TypeScript](#一、什么是-typescript)
- [配置 TypeScript](#二、配置-typescript)
- [基础类型](#三、基础类型)
- [接口](#四、接口)
- [类](#五、类)
- [函数](#六、函数)
- [继承](#七、继承)
- [泛型](#八、泛型)

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

使用模版字符串，它可以定义多行文本和内嵌表达式。

```
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.

I'll be ${ age + 1 } years old next month.`;
```

定义 sentence 的方式效果相同：

```
let sentence: string = "Hello, my name is " + name + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
```

#### 2.4 数组

TypeScript 像 JavaScript 一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 `[]`，表示由此类型元素组成的一个数组：

```
let list: number[] = [1, 2, 3];
```

第二种方式是使用数组泛型，`Array<元素类型>`：

```
let list: Array<number> = [1, 2, 3];
```

#### 2.5 元组

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。

```
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```

#### 2.6 枚举

`enum`类型是对 JavaScript 标准数据类型的一个补充。

```
enum Color {Red,Green,Blue}
let c:Color = Color:Green;
```

#### 2.7 Any

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any 类型来标记这些变量：

```
let notSure:any = 4;
notSure
```

#### 2.8 Void

`void`类型像是与`any`类型相反，它表示没有任何类型。

```
function warnUser():void{
    console.log('This is my warning message');
}
```

#### 2.9 Null 和 Undefined

`undefined` 和 `null` 两者各自有自己的类型分别叫做 `undefined` 和 `null`。

```
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

#### 2.10 Never

`never`类型表示的是那些永不存在的值的类型。

```
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

#### 2.11 Object

`object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null` 或 `undefined` 之外的类型。

```
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

#### 2.12 类型断言

类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。

类型断言有两种形式。 其一是“尖括号”语法：

```
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

另一个为`as`语法：

```
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

### 四、接口

接口有助于在整个应用程序中形成模式，这样任何开发人员在编写代码时都可以选择这种模型并遵循它。

#### 4.1 例子

```
interface LabelledValue{
    label:string;
}

function printLabel(labelledObj:LabelledValue){
    console.log(labelledObj.label);
}

let myObj = {size:10,label:'Size 10 Object'};
printLabel(myObj);
```

#### 4.2 可选属性

```
interface SquareConfig{
    color?: string;
    width?: number;
}

function createSquare(config:SquareConfig):{color:string,area:number}{
  let newSquare = {color: "white", area: 100};
  if (config.clor) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    newSquare.color = config.clor;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});
```

#### 4.3 只读属性

一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用`readonly`来指定只读属性:

```
interface Point {
    readonly x: number;
    readonly y: number;
}
```

### 五、类

### 六、函数

### 七、继承

### 八、泛型

### 参考资料

- [【TS 演化史 -- 破晓】一步一个脚印入门 TS](https://mp.weixin.qq.com/s/fvRvtcdrigcQzjUKwyzvHw)
- [TypeScript 手册指南](https://www.tslang.cn/docs/handbook/basic-types.html)
- [TypeScript Handbook（中文版）](https://zhongsp.gitbooks.io/typescript-handbook/content/)
- [TypeScript 入门教程](https://ts.xcatliu.com/)
- [滋 TS 源码（一）- 准备调试](https://mp.weixin.qq.com/s/vU4WN2wA8hzW8Y5WHulFSQ)
- [滋 TS 源码（二）- 开始编译](https://mp.weixin.qq.com/s/GgpDGAbSbWpFD_hgfqnCZQ)
- [滋 TS 源码（三）- 词法分析](https://mp.weixin.qq.com/s/r9waheefjYfsJ_D-r6UlUg)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
