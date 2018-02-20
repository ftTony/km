# 链表

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 创建链表

### 一、创建链表

单链表的操作核心有：

- `append(element)`-向列表尾部添加一个新的项。
- `remove(element)`-从列表中移除一项。
- `indexOf(index)`-返回指定索引处的节点
- `removeAt(position)`-从列表的特定位置移除一项。
- `isEmpty()` -如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
- `size()`-返回链表包含的元素个数。与数组的length属性类似。
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

### 二、单链表

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

### 三、双链表

```
function DoublyLinkedList(){
    var Node = function(element){
        this.element = element;
        this.next = null;
        this.prev = null;   //新增
    }
}
```

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