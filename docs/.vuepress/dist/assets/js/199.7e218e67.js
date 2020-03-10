(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{422:function(e,a,s){"use strict";s.r(a);var t=s(13),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"ts-学习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts-学习"}},[e._v("#")]),e._v(" ts 学习")]),e._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),s("p",[e._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),e._v(" "),s("h2",{attrs:{id:"内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[e._v("#")]),e._v(" 内容")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E4%BB%80%E4%B9%88%E6%98%AF-typescript"}},[e._v("什么是 TypeScript")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E9%85%8D%E7%BD%AE-typescript"}},[e._v("配置 TypeScript")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E5%9F%BA%E7%A1%80%E7%B1%BB%E5%9E%8B"}},[e._v("基础类型")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E6%8E%A5%E5%8F%A3"}},[e._v("接口")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%94%E3%80%81%E7%B1%BB"}},[e._v("类")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E5%85%AD%E3%80%81%E5%87%BD%E6%95%B0"}},[e._v("函数")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%83%E3%80%81%E7%BB%A7%E6%89%BF"}},[e._v("继承")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E5%85%AB%E3%80%81%E6%B3%9B%E5%9E%8B"}},[e._v("泛型")])])]),e._v(" "),s("h3",{attrs:{id:"一、什么是-typescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是-typescript"}},[e._v("#")]),e._v(" 一、什么是 TypeScript")]),e._v(" "),s("p",[s("strong",[e._v("TypeScript 是 JS 类型的超集")]),e._v("。它假设咱们知道什么是超集，什么是类型化。"),s("strong",[e._v("TypeScript 看作是 JavaScript 之上的一个外壳。")])]),e._v(" "),s("p",[s("code",[e._v("TypeScript")]),e._v("是一个外壳，因为编写 TypeScript 的代码，在编译之后，剩下的只是简单的 JS 代码。")]),e._v(" "),s("p",[e._v("但是 JS 引擎无法读取 TypeScript 代码，因此任何 TypeScript 文件都应该经过"),s("strong",[e._v("预翻译")]),e._v("过程。只有在第一个编译步骤之后，才剩下纯 JS 代码，可以在浏览器中运行。")]),e._v(" "),s("h3",{attrs:{id:"二、配置-typescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、配置-typescript"}},[e._v("#")]),e._v(" 二、配置 TypeScript")]),e._v(" "),s("h4",{attrs:{id:"_2-1-安装-typescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-安装-typescript"}},[e._v("#")]),e._v(" 2.1 安装 TypeScript")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install -g typescript\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"_2-1-构建你的第一个-typescript-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-构建你的第一个-typescript-文件"}},[e._v("#")]),e._v(" 2.1 构建你的第一个 TypeScript 文件")]),e._v(" "),s("p",[e._v("在编辑器，将下面的代码输入到"),s("code",[e._v("greeter.ts")]),e._v("文件里：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('function greeter(person) {\n    return "Hello, " + person;\n}\n\nlet user = "Jane User";\n\ndocument.body.innerHTML = greeter(user);\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("h4",{attrs:{id:"_2-2-编译代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-编译代码"}},[e._v("#")]),e._v(" 2.2 编译代码")]),e._v(" "),s("p",[e._v("在命令行上，运行 TypeScript 编译器：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("tsc greeter.ts\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"三、基础类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、基础类型"}},[e._v("#")]),e._v(" 三、基础类型")]),e._v(" "),s("h4",{attrs:{id:"_2-1-布尔值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-布尔值"}},[e._v("#")]),e._v(" 2.1 布尔值")]),e._v(" "),s("p",[e._v("最基本的数据类型就是简单的 true/false 值，在 JavaScript 和 TypeScript 里叫做 "),s("code",[e._v("boolean")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let isDone: boolean = false;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"_2-2-数字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-数字"}},[e._v("#")]),e._v(" 2.2 数字")]),e._v(" "),s("p",[e._v("和 JavaScript 一样，TypeScript 里的所有数字都是浮点数。 这些浮点数的类型是 "),s("code",[e._v("number")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let decLiteral: number = 0 ;\nlet hexLiteral: number = 0xf00d;\nlet binaryLiteral: number = 0b1010;\nlet octalLiteral: number = 0o744;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h4",{attrs:{id:"_2-3-字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-字符串"}},[e._v("#")]),e._v(" 2.3 字符串")]),e._v(" "),s("p",[e._v("JavaScript 程序的另一项基本操作是处理网页或服务器端的文本数据。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('let name: string = "bob";\nname = "smith";\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("使用模版字符串，它可以定义多行文本和内嵌表达式。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let name: string = `Gene`;\nlet age: number = 37;\nlet sentence: string = `Hello, my name is ${ name }.\n\nI'll be ${ age + 1 } years old next month.`;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("定义 sentence 的方式效果相同：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('let sentence: string = "Hello, my name is " + name + ".\\n\\n" +\n    "I\'ll be " + (age + 1) + " years old next month.";\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h4",{attrs:{id:"_2-4-数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-数组"}},[e._v("#")]),e._v(" 2.4 数组")]),e._v(" "),s("p",[e._v("TypeScript 像 JavaScript 一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 "),s("code",[e._v("[]")]),e._v("，表示由此类型元素组成的一个数组：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let list: number[] = [1, 2, 3];\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("第二种方式是使用数组泛型，"),s("code",[e._v("Array<元素类型>")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let list: Array<number> = [1, 2, 3];\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"_2-5-元组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-元组"}},[e._v("#")]),e._v(" 2.5 元组")]),e._v(" "),s("p",[e._v("元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// Declare a tuple type\nlet x: [string, number];\n// Initialize it\nx = ['hello', 10]; // OK\n// Initialize it incorrectly\nx = [10, 'hello']; // Error\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h4",{attrs:{id:"_2-6-枚举"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-枚举"}},[e._v("#")]),e._v(" 2.6 枚举")]),e._v(" "),s("p",[s("code",[e._v("enum")]),e._v("类型是对 JavaScript 标准数据类型的一个补充。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("enum Color {Red,Green,Blue}\nlet c:Color = Color:Green;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h4",{attrs:{id:"_2-7-any"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-any"}},[e._v("#")]),e._v(" 2.7 Any")]),e._v(" "),s("p",[e._v("有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any 类型来标记这些变量：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("let notSure:any = 4;\nnotSure\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h4",{attrs:{id:"_2-8-void"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-void"}},[e._v("#")]),e._v(" 2.8 Void")]),e._v(" "),s("p",[s("code",[e._v("void")]),e._v("类型像是与"),s("code",[e._v("any")]),e._v("类型相反，它表示没有任何类型。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function warnUser():void{\n    console.log('This is my warning message');\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h4",{attrs:{id:"_2-9-null-和-undefined"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-null-和-undefined"}},[e._v("#")]),e._v(" 2.9 Null 和 Undefined")]),e._v(" "),s("p",[s("code",[e._v("undefined")]),e._v(" 和 "),s("code",[e._v("null")]),e._v(" 两者各自有自己的类型分别叫做 "),s("code",[e._v("undefined")]),e._v(" 和 "),s("code",[e._v("null")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// Not much else we can assign to these variables!\nlet u: undefined = undefined;\nlet n: null = null;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h4",{attrs:{id:"_2-10-never"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-never"}},[e._v("#")]),e._v(" 2.10 Never")]),e._v(" "),s("p",[s("code",[e._v("never")]),e._v("类型表示的是那些永不存在的值的类型。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// 返回never的函数必须存在无法达到的终点\nfunction error(message: string): never {\n    throw new Error(message);\n}\n\n// 推断的返回值类型为never\nfunction fail() {\n    return error("Something failed");\n}\n\n// 返回never的函数必须存在无法达到的终点\nfunction infiniteLoop(): never {\n    while (true) {\n    }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br")])]),s("h4",{attrs:{id:"_2-11-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-11-object"}},[e._v("#")]),e._v(" 2.11 Object")]),e._v(" "),s("p",[s("code",[e._v("object")]),e._v("表示非原始类型，也就是除"),s("code",[e._v("number")]),e._v("，"),s("code",[e._v("string")]),e._v("，"),s("code",[e._v("boolean")]),e._v("，"),s("code",[e._v("symbol")]),e._v("，"),s("code",[e._v("null")]),e._v(" 或 "),s("code",[e._v("undefined")]),e._v(" 之外的类型。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('declare function create(o: object | null): void;\n\ncreate({ prop: 0 }); // OK\ncreate(null); // OK\n\ncreate(42); // Error\ncreate("string"); // Error\ncreate(false); // Error\ncreate(undefined); // Error\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("h4",{attrs:{id:"_2-12-类型断言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-12-类型断言"}},[e._v("#")]),e._v(" 2.12 类型断言")]),e._v(" "),s("p",[e._v("类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。")]),e._v(" "),s("p",[e._v("类型断言有两种形式。 其一是“尖括号”语法：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('let someValue: any = "this is a string";\n\nlet strLength: number = (<string>someValue).length;\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("另一个为"),s("code",[e._v("as")]),e._v("语法：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('let someValue: any = "this is a string";\n\nlet strLength: number = (someValue as string).length;\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"四、接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、接口"}},[e._v("#")]),e._v(" 四、接口")]),e._v(" "),s("p",[e._v("接口有助于在整个应用程序中形成模式，这样任何开发人员在编写代码时都可以选择这种模型并遵循它。")]),e._v(" "),s("h4",{attrs:{id:"_4-1-例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-例子"}},[e._v("#")]),e._v(" 4.1 例子")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("interface LabelledValue{\n    label:string;\n}\n\nfunction printLabel(labelledObj:LabelledValue){\n    console.log(labelledObj.label);\n}\n\nlet myObj = {size:10,label:'Size 10 Object'};\nprintLabel(myObj);\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("h4",{attrs:{id:"_4-2-可选属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-可选属性"}},[e._v("#")]),e._v(" 4.2 可选属性")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("interface SquareConfig{\n    color?: string;\n    width?: number;\n}\n\nfunction createSquare(config:SquareConfig):{color:string,area:number}{\n  let newSquare = {color: \"white\", area: 100};\n  if (config.clor) {\n    // Error: Property 'clor' does not exist on type 'SquareConfig'\n    newSquare.color = config.clor;\n  }\n  if (config.width) {\n    newSquare.area = config.width * config.width;\n  }\n  return newSquare;\n}\n\nlet mySquare = createSquare({color: \"black\"});\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br")])]),s("h4",{attrs:{id:"_4-3-只读属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-只读属性"}},[e._v("#")]),e._v(" 4.3 只读属性")]),e._v(" "),s("p",[e._v("一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用"),s("code",[e._v("readonly")]),e._v("来指定只读属性:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("interface Point {\n    readonly x: number;\n    readonly y: number;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h3",{attrs:{id:"五、类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、类"}},[e._v("#")]),e._v(" 五、类")]),e._v(" "),s("h3",{attrs:{id:"六、函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、函数"}},[e._v("#")]),e._v(" 六、函数")]),e._v(" "),s("h3",{attrs:{id:"七、继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、继承"}},[e._v("#")]),e._v(" 七、继承")]),e._v(" "),s("h3",{attrs:{id:"八、泛型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八、泛型"}},[e._v("#")]),e._v(" 八、泛型")]),e._v(" "),s("h3",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/fvRvtcdrigcQzjUKwyzvHw",target:"_blank",rel:"noopener noreferrer"}},[e._v("【TS 演化史 -- 破晓】一步一个脚印入门 TS"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.tslang.cn/docs/handbook/basic-types.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("TypeScript 手册指南"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://zhongsp.gitbooks.io/typescript-handbook/content/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TypeScript Handbook（中文版）"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://ts.xcatliu.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TypeScript 入门教程"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/vU4WN2wA8hzW8Y5WHulFSQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("滋 TS 源码（一）- 准备调试"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/GgpDGAbSbWpFD_hgfqnCZQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("滋 TS 源码（二）- 开始编译"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/r9waheefjYfsJ_D-r6UlUg",target:"_blank",rel:"noopener noreferrer"}},[e._v("滋 TS 源码（三）- 词法分析"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"联系作者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[e._v("#")]),e._v(" 联系作者")]),e._v(" "),s("div",{attrs:{align:"center"}},[s("p",[e._v("\n        平凡世界，贵在坚持。\n    ")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);a.default=n.exports}}]);