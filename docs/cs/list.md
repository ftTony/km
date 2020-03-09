# 链表

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [链表介绍](#一、链表介绍)
- [创建链表](#二、创建链表)
- [链表相关试题](#三、链表相关试题)

### 一、链表介绍

链表存储有序的元素集合，但不同于数组，链表中的元素在内在中并不是连续放置的。每个元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成。

相对于传统的数组，链表的一个好处在于，添加或移除元素的时候不需要移动其他元素。然而，链表需要使用指针，因此实现链表时需要额外注意。在数组中，我们需要直接访问任何位置的任何元素，而要想访问链表中间的一个元素，则需要从起点开始迭代链表直到找到所需的元素。

### 二、创建链表

单链表的操作核心有：

- `append(element)`-向列表尾部添加一个新的项。
- `remove(element)`-从列表中移除一项。
- `indexOf(index)`-返回指定索引处的节点
- `removeAt(position)`-从列表的特定位置移除一项。
- `isEmpty()` -如果链表中不包含任何元素，返回 true，如果链表长度大于 0 则返回 false。
- `size()`-返回链表包含的元素个数。与数组的 length 属性类似。
- `print()`- 返回链表的可见表示

#### 2.1 单链表

**ES5 相关代码**

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

**ES6 相关代码**

```
class Node{
    constructor(element,next)){
        this.element = delementata;
        this.next = next;
    }
}

class LinkedList{
    constructor(equalsFn = ((a,b)=>a===b)){
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }
    push(element){
        const node = new Node(element);
        let current;
        if(this.head == null){
            this.head = node;
        }else{
            current = this.head;
            while(current.next !=null){
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
    removeAt(index){
        if(index>=0 && index<this.count){
            let current = this.head;
            if(index === 0){
                this.head = current.next;
            }else{
                const previous = this.getElementAt(index-1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
    getElementAt(index){
        if(index>0 && index<= this.count){
            let node = this.head;
            for(let i=0;i<index && node!=null;i++){
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    remove(element){
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    insert(element,index){
        if(index>=0 && index<=this.count){
            const node = new Node(element);
            if(index === 0){
                const current = this.head;
                node.next = current;
            }else{
                const previous = this.getElementAt(index-1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    indexOf(element){
        let current = this.head;
        for(let i=0;i<this.size() && current !=null;i++){
            if(this.equalsFn(element,current.element)){
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    size(){
        return this.count;
    }
    isEmpty(){
        return this.size()===0;
    }
    getHead(){
        return this.head;
    }
    toString(){
        if(this.head ==null){
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for(let i=1;i<this.size() && current !=null;i++){
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
    clear(){
        this.head = undefined;
        this.count = 0;
    }
}
```

#### 2.2 双链表

**ES5 代码实现**

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

    this.append = function(element){
        var node = new Node(element)  ,
            current;
        if(head === null){
            head = node;
            tail = node;
        }else{
            tail.next = node;
            node.prev = tail;
            tail = node;
        }

        length++;
    };

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
    };

    this.removeAt = function(postion){

        if(position>-1 && position < length){

            var current = head,
                previous,
                index = 0;

            if(position === 0){
                head = current.next;

                if(length === 1){
                    tail = null;
                }else{
                    head.prev = null;
                }
            }else if(position === length -1){
                current = tail;
                tail = current.prev;
                tail.next = null;
            }else{
                while(index++ <position){
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
                current.next.prev = previous;
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

        if(element === current.element){
            return 0;
        }

        index++;

        while(current.next){

            if(element === current.element){
                return index;
            }

            current = current.next;
            index++;
        }

        if(element == current.element){
            return index;
        }

        return -1;
    };

    this.isEmpty = function(){
        return length === 0;
    };

    this.size = function(){
        return length;
    };

    this.toString = function(){
        var current = head,
            s = current?current.element:'';
        while(current && current.next){
            current = current.next;
            s+= ','+ current.element;
        }

        return s;
    }

    this.inversetToString = function(){

        var current = tail,
            s = current? current.element : '';
        while(current && current.prev){
            current = current.prev;
            s +=',' + current.element;
        }
        return s;
    };

    this.print = function(){
        console.log(this.toString());
    };

    this.printInverse = function(){
        console.log(this.inverseToString());
    };

    this.getHead = function(){
        return head;
    };

    this.getTail = function(){
        return tail
    };
}
```

**ES6 代码实现**

```
class DoublyNode extends Node{
    constructor(element,next,prev){
        super(element,next);
        this.prev = prev;
    }
}

class DoublyLinkedList extends LinkedList{
    constructor(equalsFn=(a,b)=>a===b){
        super(equalsFn);
        this.tail = unedfined
    }
    push(element){
        const node = new DobulyNode(element);
        if(this.head == null){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.count++;
    }
    insert(element,index){
        if(index>=0 && index<=this.count){
            if(index>=0 && index<= this.count){
                const node = new DoublyNode(element);
                let current = this.head;
                if(index ===0){
                    if(this.head == null){
                        this.head = node;
                        this.tail = node;
                    }else{
                        node.next = this.head;
                        this.head.prev = node;
                        this.head = node;
                    }
                }else if(index === this.count){
                    current = this.tail;
                    current.next = current;
                    this.tail = node;
                }else{
                    const previous = this.getElementAt(index-1);
                    current = previous.next;
                    node.next= current;
                    previous.next = node;
                    current.prev = node;
                    node.prev = previous;
                }
                this.count++;
                return true;
            }
            return false;
        }
    }
    removeAt(index){
        if(index>=0 && index < this.count){
            let current = this.head;
            if(index ===0){
                this.head = this.head.next;
                if(this.count === 1){
                    this.tail = undefined;
                }else{
                    this.head.prev = undefined;
                }
            }else if(index === this.count - 1 ){
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            }else{
                current = this.getElementAt(index);
                const previous = current.prev;
                previous.next = current.next;
                current.next.prev = preious;
            }
            this.count--;
            return current.element;
        }
        return undefined
    }
    indexOf(element){
        let current = this.head;
        let index = 0;
        while(current ! = null){
            if(this.equalsFn(element,current.element)){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
    getHead(){
        return this.head;
    }
    getTail(){
        return this.tail;
    }
    clear(){
        super.clear();
        this.tail = undefined;
    }
    toString(){
        if(this.head == null){
            return '';
        }
        let objString = ``;
        let current = this.head.next;
        while(current != null){
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
    inverseToString(){
        if(this.tail == null){
            return '';
        }
        let objString = `${this.tail.element}`;
        let previous = this.tail.prev;
        while(previous !=null){
            objString = `${objString},${previous.element}`;
            previous = previous.prev;
        }
        return objString;
    }
}
```

#### 2.3 循环链表

**循环链表** 可以像链表一样只有单向引用，也可以像双向链表一样有双向引用。循环链表和链表之间唯一的区别在于，最后一个元素指向下一个元素的指针不是引用 undefined，而是指向第一个元素

**ES5 代码实现**

```
function CircularLinkedList(){
    var Node = function(element){
        this.element = element;
        this.next = null;
    };

    var length = 0;
    var head = null;

    this.append = function(element){
        var node = new Node(element),
            current;

        if(head === null){
            head = node;
        }else{
            current = head;

            while(current.next !==head){
                current = current.next;
            }
            current.next = node;
        }
    };

    this.insert = function(position,element){
        if(position>=0 && position<= length){

        }else{
            return false;
        }
    };

    this.removeAt = function(position){
        if(postion>-1 && position<length){

            var current = head,
                previous,
                index=0;

            if(position === 0){
                head = current.next;
            }else{
                while(index++< position){
                    previous = current;
                    current = current.next;
                }

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
            index = 0;

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

    this.print = function(){
        console.log(this.toString());
    }
}
```

**ES6 代码实现**

```
CircularLinkedList extends LinkedList{
    constructor(equalsFn = ((a,b)=>a===b)){
        super(equalsFn);
    }
    push(element){
        const node = new Node(element);
        let current;
        if(this.head == null){
            this.head = node;
        }else{
            current = this.getElementAt(this.size() - 1);
            current.next = node;
        }
        node.next = this.head;
        this.count++;
    }
    insert(element,index){
        if(index>=0 && index <= this.count){
            const node = new Node(element);
            let current = this.head;
            if(index === 0){
                if(this.head == null){
                    this.head = node;
                    node.next = this.head;
                }else{
                    node.next = current;
                    current = this.getElementAt(this.size());
                    this.head = node;
                    current.next = this.head;
                }
            }else{
                const previous = this.getElementAt(index-1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    removeAt(index){
        if(index>=0 && index<this.count){
            let current = this.head;
            if(index === 0){
                if(this.size() === 1){
                    this.head = undefined;
                }else{

                }
            }else{
                const previous = this.getElementAt(index-1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}
```

#### 2.4 有序链表

**有序链表** 是指保持元素有序的链表结构。除了使用排序算法之外，我们还可以将元素插入到正确的位置来保证链表的有序性。

```
class SortedLinkedList extends LinkList{
    constructor(equalsFn = (a,b)=>{return a==b},compareFn = (a,b)=>{if(a===b){return 0} return a<b?-1:1}){
        super(equalsFn);
        this.equalsFn = equalsFn;
        this.compareFn = compareFn;
    }
    push(element){
        if(this.isEmpty()){
            super.push(element);
        }else{
            const index = this.getIndexNextSortedElement(element);
            super.insert(element,index);
        }
    }
    insert(element,index=0){
        if(this.isEmpty()){

        }
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element,pos);
    }
    getIndexNextSortedElement(element){
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
        const comp = this.compareFn(element, current.element);
        if (comp === Compare.LESS_THAN) {
            return i;
        }
        current = current.next;
        }
        return i;
    }
}
```

#### 2.5 反转链表

**借助栈**

```
参考地址：https://xxoo521.com/2020-01-12-reverse-link/

var reverseList = function(head){
    if(!head){
        return null;
    }

    const stack = {}
    let node = head;
    while(node){
        stack.push(node.val);
        node = node.next;
    }

    const newHead = {
        val: stack.pop(),
        next: null
    };
    node = newHead;
    while(stack.length){
        node.next = {
            val:stack.pop(),
            next:null
        };
        node = node.next;
    }
    return newHead;
}
```

**原地反转**

```
var reverseList = function(head){
    if(!head){
        return null;
    }

    let node = head;
    let preNode = null;
    while(node.next){
        const nextNode = node.next;
        node.next = preNode;
        preNode = node;
        node = nextNode;
    }
    node.next = preNode;
    return node;
}
```

### 三、链表相关试题

- LRU 算法
- 删除链表中的节点
- 从尾到头打印链表
- 链表倒数第 k 个节点
- 复杂链表的复制
- 链表中环的入口节点
- 从尾到头打印链表
- 合并两个排序的链表

#### 3.1 LRU 算法

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

## 参考资料

- [图解：我终于让女朋友学会了翻转链表！](https://mp.weixin.qq.com/s/kpaap25Y-2EOZsJnKyXbLQ)
- 《学习 JavaScript 数据结构与算法》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
