# 队列

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 创建队列

### 一、创建队列

- `enqueue(element)`:向队列尾部添加一个新的项。
- `dequeue()`：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
- `font()`：返回队列中第一个元素——最先被
- `isEmpty()`：如果队列中不包含任何元素，返回true，否则返回false。
- `size()`：返回队列包含的元素个数，与数组的length属性类似。

**ES5代码实现**

```
function Queue(){
    var items = [];

    this.enqueue = function(element){
        items.push(element);
    };

    this.dequeue = function(){
        return items.shift();
    };

    this.front = function(){
        return items[0];
    };

    this.isEmpty = function(){
        return items.length==0;
    };
}
```

**ES6代码实现**

```
class Queue{
    constructor(...items){
        this.reverse = false;
        this.queue = [...items];
    }

    enqueue(...items){
        return this.reverse?this.queue.push(...items):this.queue.unshift(...items);
    }

    dequeue(){
        return this.reverse ? this.queue.shift() : this.queue.pop();
    }
}
```

### 二、优先队列

## 参考资料

- 《学习JavaScript数据结构与算法》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>