# 链表

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 创建链表

### 一、创建链表

单链表的操作核心有：

- `push(value)`-在链表的末尾/头部添加一个节点
- `pop()`-从链表的末尾/头部删除一个节点
- `get(index)`-返回指定索引处的节点
- `delete(index)`- 删除指定索引处的节点
- `isEmpty()` - 根据列表长度返回true或false
- `print()`- 返回链表的可见表示

**ES5相关代码**

```
function LinkedList(){

    var Node = function(element){
      this.element = element;
      this.next = null;  
    };

    var length = 0;
    var head = null;

    this.append = function(element){};
    this.insert = function(position,element){};
    this.removeAt = function(position){};
    this.remove = function(element){};
    this.indexOf = function(element){};
    this.isEmpty = function(){};
    this.size = function(){};
    this.toString = function(){};
    this.print = function(){};
}
```

### 二、单链表

**ES6相关代码**

```
class Node{
    constructor(data){
        this.data = data;
    }
}
```

### 三、双链表

### 四、循环链表

### 五、反转链表

### 六、LRU算法

### 七、链表相关试题

## 参考资料

- 《学习JavaScript数据结构与算法》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>