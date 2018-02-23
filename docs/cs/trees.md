# 树结构

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 树的分类
- 创建BinarySearchTree类

### 一、树的分类

- 二叉树：`Binary Search Tree`
- AVL树：`AVL Tree`
- 红黑树：`Red-Black Tree`
- 线段树：`Segment Tree`
- 芬威克树：`Fenwick Tree`

### 二、创建树

```
function BinarySearchTree(){

}

```

### 三、树的相关方法

- `insert(key)`：向树中插入一个新的键。
- `search(key)`：在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false。
- `inOrderTraverse`：通过中序遍历方式遍历所有节点。
- `preOrderTraverse`：通过先序遍历方式遍历所有节点。
- `postOrderTraverse`：通过后序遍历方式遍历所有节点。
- `min`：返回树中最小的值/键。
- `max`：返回树中最大的值/键。
- `remove(key)`：从树中移除某个键

### 参考资料

- 《学习JavaScript数据结构与算法》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>