# 队列

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 队列介绍
- 创建队列
- 队列实际应用

### 一、队列介绍

队列是遵循**先进先出**（FIFO，也称为先来先服务）原则的一组有序的项。队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。

在现实中，最觉的队列的例子就是排队。在电影院、自助餐厅、杂货店收银台，我们都会排队。排在第一位的人会先接受服务。

### 二、创建队列

- `enqueue(element)`:向队列尾部添加一个新的项。
- `dequeue()`：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
- `font()`：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek类似）。
- `isEmpty()`：如果队列中不包含任何元素，返回true，否则返回false。
- `size()`：返回队列包含的元素个数，与数组的length属性类似。

#### 2.1 ES5代码实现

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

    this.clear = function(){
        items = [];
    }

    this.size = function(){
        return items.length;
    }

    this.print = function(){
        console.log(items.toString());
    }
}
```

### 2.3 ES6代码实现

```
class Queue{
    constructor(...items){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    // 向队列添加元素
    enqueue(){
        this.items[this.count] = element;
        this.count++;
    }
    // 从队列移除元素
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    isEmpty(){
        return (this.count - this.lowestCount) === 0;
    }
    size(){
        return this.count - this.lowestCount;
    }
    clear(){
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    toString(){
        if(this.isEmpty()){
            if(this.isEmpty()){
                return '';
            }
        }
        let objString = ``;
        for(let i = this.lowestCount + 1;i<this.count;i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}
```

#### 2.3 优先队列

```
function PriorityQueue(){
    let items = [];
    function QueueElement(element,priority){
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element,priority){
        let queueElement = new QueueElement(element,priority);

        let added = false;
        for(let i=0;i<items.length;i++){
            if(queueElement.priority < items[i].priority){
                items.splice(i,0,queueElement);
                added = true;
                break;
            }
        }
        if(!added){
            items.push(queueElement);
        }
    };

    this.print = function(){
        for(let i=0; i<items.length;i++){
            console.log(`${items[i].element}-${items[i].priority}`);
        }
    }
}
```

#### 2.4 循环队列

```
function hotPotato(nameList,num){

    let queue = new Queue();

    for(let i=0; i<nameList.length;i++){
        queue.enqueue(nameList[i]);
    }

    let eliminated = '';
    while(queue.size()>1){
        for(let i=0;i<num;i++){
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated+'在击鼓伟花游戏中被淘汰。')
    }
    return queue.dequeue();
}
```

### 三、队列实际应用

- 击鼓传花游戏
- 回文检查器
- 事件循环

## 参考资料

- 《学习JavaScript数据结构与算法》
- [「中高级前端」窥探数据结构的世界- ES6版](https://juejin.im/post/5cd1ab3df265da03587c142a)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>