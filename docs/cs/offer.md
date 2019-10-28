# 指剑offer相关题

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

### 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数

```

```

### 请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

```
function replaceSpace(str){
    return str.replace(/ /g, '%20');
}
```

### 反向链表

```
// 节点定义
class Node{
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}

```


### 参考资料

- [剑指 offer -- JavaScript 版](https://www.nowcoder.com/discuss/49349)
- [剑指 offer](https://xin-tan.com/passages/2019-06-23-algorithm-offer/)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>