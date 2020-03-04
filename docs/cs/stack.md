# 栈

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

### 创建栈

![images](stack.png)

**ES5代码**

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

**ES6代码**

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

### 栈的相关方法

- `push(element(s))`：添加一个（或几个）新元素到栈顶。
- `pop()`：移除栈顶的元素，同时返回被移除的元素。
- `peek()`：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）。
- `isEmpty()`：如果栈里没有任何元素就返回true，否则返回false。
- `clear()`：移除栈里的所有元素
- `size()`：返回栈里的元素个数。这个方法和数组的length属性很类似。

### 栈的实际应用


### 参考资料

- 《学习JavaScript数据结构与算法》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>