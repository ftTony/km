# 链表

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 创建链表

### 一、创建链表

**相关代码**

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