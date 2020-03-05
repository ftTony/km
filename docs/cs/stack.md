# 栈

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [栈数据结构介绍](#一、栈数据结构介绍)
- [创建栈](#二、创建栈)
- [栈的实际应用](#三、栈的实际应用)

### 一、栈数据结构介绍

栈是一种遵从**后进先出**（LIFO）原则的有序集合。新添加或待删除的元素都保存在线栈的同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近近栈顶，旧元素都接近栈底。

在现实生活中也能发现很多栈的例子。例如一摞书或者餐厅里叠放的盘子。

栈也被用在编程语言编译器和内在中保存变量、方法调用等，也被用于浏览器历史记录。

### 二、创建栈

![images](stack.png)

栈的相关方法

- `push(element(s))`：添加一个（或几个）新元素到栈顶。
- `pop()`：移除栈顶的元素，同时返回被移除的元素。
- `peek()`：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）。
- `isEmpty()`：如果栈里没有任何元素就返回true，否则返回false。
- `clear()`：移除栈里的所有元素
- `size()`：返回栈里的元素个数。这个方法和数组的length属性很类似。

#### 2.1 ES5创建

```
function Stack(){
    var items = [];

    this.push = function(element){
        items.push(element);
    };

    this.pop = function(){
        return items.pop();
    };

    this.peek = function(){
        return items[items.length-1];
    };

    this.isEmpty = function(){
        return items.length == 0;
    }

    this.size = function(){
        return items.length;
    };

    this.clear = function(){
        items = [];
    }

    this.print = function(){
        console.log(items.toString());
    }
}
```

#### 2.2 ES6代码（栈数据结构）

```
class Stack{
    constructor(){
        this.items=[];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        return this.items.pop();
    }

    isEmpty(){
        return this.items.length == 0;
    }

    peek(){
        return this.items[this.items.length-1];
    }

    size (){
        return this.items.length;
    }

    clear(){
        this.items = [];
    }

    print (){
        console.log(this.items.toString());
    }
}
```

#### 2.3 创建一个Stack类

```
class Stack{
    constructor(){
        this.count = 0;
        this.items = {};
    }
    push(element){
        this.items[this.count] = element;
        this.count++;
    }
    size(){
        return this.count;
    }
    isEmpty(){
        return this.count === 0;
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count - 1];
    }
    clear(){
        this.items = {}
        this.count = 0
    }
    toString(){
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.items[0]}`;
        for(let i = 1;i<this.count;i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}
```

### 三、栈的实际应用

- 从十进制到二进制
- 进制转换算法
- 平衡圆括号
- 汉诺塔

### 参考资料

- 《学习JavaScript数据结构与算法第三版》
- [「中高级前端」窥探数据结构的世界- ES6版](https://juejin.im/post/5cd1ab3df265da03587c142a)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>