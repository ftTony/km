# 对象扩展

## 前言

ES6 对象扩展新增方法 is()、assign()、setPrototypeOf()、getPrototypeOf()、keys()、values()、entries()。

## 内容

- [属性的简洁表示法](#一属性的简洁表示法)
- [属性名表达式](#二属性名表达式)
- [方法的 name 属性](#三方法的name属性)
- [属性的可枚举性和遍历](#四属性的可枚举性和遍历)
- [Object.is()](#五objectis)
- [Object.assign()](#六objectassign)
- [Object.setPrototypeOf()](#七objectsetprototypeof)
- [Object.getPrototypeOf()](#八objectgetprototypeof)
- [Object.keys()，Object.values()，Object.entries()](#九objectkeysobjectvaluesobjectentries)
- [对象的扩展运算符](#十对象的扩展运算符)
- [Null 传导运算符](#十一null-传导运算符)

### 一、属性的简洁表示法

ES6 允许直接定稿变量和函数，作为对象的属性和方法。

```
var foo = 'bar';
var baz = {foo};

function f(x, y) {
  return {x, y};
}

var o = {
  method() {
    return "Hello!";
  }
};

```

### 二、属性名表达式

ES6 允许字面量定义对象时，用表达式作为对象的属性名，即把表达式放在方括号内。

```
let propKey = 'foo';

let obj = {
    [propKey] : true,
    ['a'+'bc'] : 123
}

```

### 三、方法的 name 属性

函数的`name`属性，返回函数名。对象方法也是函数，因此也有`name`属性。

```
const person = {
  sayName() {
    console.log('hello!');
  },
};

person.sayName.name   // "sayName"
```

上面代码中，方法的`name`属性返回函数名（即方法名）。

### 四、属性的可枚举性和遍历

#### 4.1 可枚举性

对象的每个属性都有一个描述对象，用来控制该属性的行为。`Object.getOwnPropertyDescriptor`方法可以获取该属性的描述对象。

```
let obj = {foo:123};
Object.getOwnPropertyDescriptor(obj,'foo')
```

#### 4.2 可遍历

ES6 一共有 5 种方法可以遍历对象的属性。

##### 4.2.1 for...in

`for...in`循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

##### 4.2.2 Object.keys(obj)

`Object.keys`返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含）。

##### 4.2.3 Object.getOwnPropertyNames(obj)

`Object.getOwnPropertyNames`返回一个数组，包含对象自身的所有 Symbol 属性。

##### 4.2.4 Reflect.ownKeys(obj)

`Reflect.ownKeys`返回一个数组，包含对象自身的所有属性，不管属性名是 Symbol 或字符串，也不管是否可枚举。

以上的 5 种方法遍历对象的属性，都遵守同样的属性遍历的次序规则。

- 首先遍历所有属性名为数值的属性，按照数字排序。
- 其次遍历所有属性名为字符串的属性，按照生成时间排序。
- 最后遍历所有属性名为 Symbol 值的属性，按照生成时间排序。

```
Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
// ['2', '10', 'b', 'a', Symbol()]
```

### 五、Object.is()

ES5 比较两个值是否相等，只有两个运算符：相等运算符（`==`）和严格相等运算符（`===`）。它们都有缺点，前者会自动转换数据类型，后者的 NaN 不等于自身，以及+0 等于-0。JavaScript 缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。

ES6 提出“Same-value equality”（同值相等）算法，用来解决这个问题。`Object.is`就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。

```
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

### 六、Object.assign()

`Object.assign`方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。

```
var target = { a: 1 };

var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

#### 6.1 常见用途

- 为对象添加属性
- 为对象添加方法
- 克隆对象
- 合并多个对象
- 为属性指定默认值

### 七、Object.setPrototypeOf()

`Object.setPrototypeOf`方法的作用与`__proto__`相同，用来设置一个对象的`prototype`对象，返回参数对象本身。它是 ES6 正式推荐的设置原型对象的方法。

```
// 格式
Object.setPrototypeOf(object,prototype)


```

### 八、Object.getPrototypeOf()

该方法与`Object.setPrototypeOf`方法配套，用于读取一个对象的原型对象。

```
Object.getPrototypeOf(obj);
```

### 九、Object.keys()，Object.values()，Object.entries()

- Object.keys()
- Object.values()
- Object.entries()

#### 9.1 Object.keys()

ES5 引入了`Object.keys`方法，返回一个数组，成员参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。

```
var obj = {foo:'bar',baz:42};
Object.keys(obj)

// ["foo","baz"]
```

#### 9.2 Object.values()

`Object.values`方法返回一个数组，成员是参数对象自身的（不含继承的）

```
var obj = {foo:'bar',baz:42};
Object.values(obj)

//  ['bar',42]
```

#### 9.3 Object.entries()

`Object.entries`方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。

```
var obj = {foo:'bar',baz:42};
Object.entries(obj)
// [["foo","bar"],["baz",42]]
```

### 十、对象的扩展运算符

- 解构赋值
- 扩展运算符

### 11.1 解构赋值

对象的解构赋值用于从一个对象取值，相当于将所有可遍历的、但尚未被读取的属性，分配到指定的对象上面。所有的键和它们的值，都会拷贝到新对象上面。

```
let {x,y,...z} = {x:1,y:2,a:3,b:4};
x // 1
y // 2
z // {a:3,b:4}

```

### 11.2 扩展运算符

扩展运算符(`...`)用于取出参数对象的所有可遍历属性，拷贝不到前对象之中。

```
let z = {a:3,b:4};
let n = {...z};
n   // {a:3,b:4}
```

### 十一、Null 传导运算符

编程实务中，如果读取对象内部的某个属性，往往需要判断一下该对象是否存在。比如，要读取 message.body.user.firstName，安全的写法是写成下面这样。

```
const firstName = (message
  && message.body
  && message.body.user
  && message.body.user.firstName) || 'default';
```

这样的层层判断非常麻烦，因此现在有一个提案，引入了“Null 传导运算符”（null propagation operator）`?.`，简化上面的写法。

```
const firstName = message?.body?.user?.firstName || 'default';
```

上面代码有三个`?.`运算符，只要其中一个返回`null`或`undefined`，就不再往下运算，而是返回 `undefined`。

“Null 传导运算符”有四种用法。

- `obj?.prop` // 读取对象属性
- `obj?.[expr]` // 同上
- `func?.(...args)` // 函数或对象方法的调用
- `new C?.(...args)` // 构造函数的调用

### 参考资料

- [《ECMAScript 6 入门》 第三版](https://yjhenan.gitbooks.io/-ecmascript-6/content/docs/object.html)
- [ECMAScript 6 入门](http://es6.ruanyifeng.com/#docs/object)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>