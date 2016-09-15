# 链表

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 链表介绍
- 创建链表
- 链表应用

### 一、链表介绍

### 二、创建链表

单链表的操作核心有：

- `append(element)`-向列表尾部添加一个新的项。
- `remove(element)`-从列表中移除一项。
- `indexOf(index)`-返回指定索引处的节点
- `removeAt(position)`-从列表的特定位置移除一项。
- `isEmpty()` -如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
- `size()`-返回链表包含的元素个数。与数组的length属性类似。
- `print()`- 返回链表的可见表示

#### 2.1 单链表

**ES5相关代码**

```
function LinkedList(){

    var Node = function(element){
      this.element = element;
      this.next = null;  
    };

    var length = 0;
    var head = null;

    this.append = function(element){
        
        var node = new Node(element),
            current;

        if(head === null){  // 列表中第一个节点
            head = node;
        }else{
            current = head;

            // 循环列表，直到找到最后一项
            while(current.next){
                current = current.next;
            }

            // 找到最后一项，将其next赋为node，建立链接
            current.next = node;
        }

        length++;   // 更新列表的长度
    };
    this.insert = function(position,element){
        
        // 检查越界值
        if(position>=0 && position<=length){

            var node = new Node(element),
                current = head,
                previous,
                index =0;
            
            if(position ===0){  // 在第一个位置添加

                node.next = current;
                head = node;
            }else{
                while(index++<position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }

            length++;
            return true;
        }else{
            return false;
        }
    };
    this.removeAt = function(position){

        // 检查越界值
        if(position>-1 && position<length){
            var current = head,
                previous,
                index =0;

            // 移除第一项
            if(position === 0){
                head = current.next;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }

                // 将previous与current的下一项链接起来：路过current，从而移除它
                previous.next = current.next;
            }
            length--;

            return current.element;
        }else{
            return null;
        }
    };
    this.remove = function(element){
        var index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.indexOf = function(element){

        var current = head,
            index = -1;

        while(current){
            if(element === current.element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.isEmpty = function(){
        return length ===0;
    };
    this.size = function(){
        return length;
    };
    this.getHead = function(){
        return head;
    };
    this.toString = function(){

        var current = head,
            string = '';

        while(current){
            string = current.element;
            current = current.next;
        }
        return string;
    };
}
```

**ES6相关代码**

```
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){

    }
}
```

#### 2.2 双链表

```
function DoublyLinkedList(){
    var Node = function(element){
        this.element = element;
        this.next = null;
        this.prev = null;   //新增
    };

    var length = 0;
    var head = null;
    var tail = null;

    this.insert = function(position,element){

        // 检查越界值
        if(position>=0 && position<=length){
            var node = new Node(element),
                current = head,
                previous,
                index = 0;

            if(position ===0){  //在第一个位置添加

                if(!head){
                    head = node;
                    tail = node;
                }else{
                    node.next = current;
                    current.prev= node;
                    head = node;
                }
            }else if(position === length){  // 最后一项

                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            }else{
                while(index++<position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

                current.prev= node;     //新增的
                node.prev= previous;
            }
            length++;       // 更新列表的长度
            return true;
        }else{
            return false;
        }
    }
}
```

#### 2.3 循环链表

```
```

#### 2.4 反转链表

```
```

### 三、链表应用

- LRU算法
- 删除链表中的节点
- 从尾到头打印链表
- 链表倒数第k个节点
- 复杂链表的复制
- 链表中环的入口节点

#### 3.1 LRU算法

```
https://github.com/LuckyWinty/fe-weekly-questions/issues/47

作者：王天笑
链接：https://zhuanlan.zhihu.com/p/60731274
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.tail = {};
  this.head = {};
  this.tail.prev = this.head;
  this.head.next = this.tail;
  this.map = new Map();
};

 /**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
    const node = this.map.get(key);

    node.prev.next = node.next;
    node.next.prev = node.prev;

     this.tail.prev.next = node;
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev = node;

     return node.value;
  } else {
    return -1;
  }
};

 /**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.get(key) !== -1) {
    this.tail.prev.value = value;
  } else {
    // capacity 限制
    if (this.capacity === this.map.size) {
      this.map.delete(this.head.next.key);
      this.head.next = this.head.next.next;
      this.head.next.prev = this.head;
    }

     const newNode = { key, value };
    this.map.set(key, newNode);

     this.tail.prev.next = newNode;
    newNode.prev = this.tail.prev;
    newNode.next = this.tail;
    this.tail.prev = newNode;
  }
};
```

### 七、链表相关试题

## 参考资料

- [图解：我终于让女朋友学会了翻转链表！](https://mp.weixin.qq.com/s/kpaap25Y-2EOZsJnKyXbLQ)
- 《学习JavaScript数据结构与算法》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>