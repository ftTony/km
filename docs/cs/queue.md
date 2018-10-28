# 队列

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 创建队列

### 一、创建队列

**ES5代码实现**

```
function Queue(){
    var items = [];

    this.enqueue = function(element){
        items.push(element);
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