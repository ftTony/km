# 虚拟 DOM 解析——优化篇

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

我们不要按顺序去循环`newChildren`和`oldChildren`这两个数组，可以先比较这两个数组里特殊位置的子节点，比如：

- 先把`newChildren`数组里的所有未处理子节点的第一个子节点和`oldChildren`数组里所有未处理子节点的第一个子节点做比对，如果相同，那就直接进入更新节点的操作；
- 如果不同，再把`newChildren`数组里所有未处理子节点的最后一个子节点和`oldChildren`数组里所有未处理子节点的最后一个子节点做比对，如果相同，那就直接进入更新节点的操作；
- 如果不同，再把`newChildren`数组里所有未处理子节点的最后一个子节点和`oldChildren`数组里所有未处理子节点的第一个子节点做比对，如果相同，那就直接进入更新节点的操作，更新完后再将`oldChildren`数组里的该节点移动到与newChildren数组里节点相同的位置；
- 如果不同，再把`newChildren`数组里所有未处理子节点的第一个子节点和`oldChildren`数组里所有未处理子节点的最后一个子节点做比对，如果相同，那就直接进入更新节点的操作，更新完后再将`oldChildren`数组里的该节点移动到与`newChildren`数组里节点相同的位置；

最后四种情况都试完如果还不同，那就按照之前循环的方式来查找节点。

- `newChildren`数组里的所有未处理子节点的第一个子节点称为：新前；
- `newChildren`数组里的所有未处理子节点的最后一个子节点称为：新后；
- `oldChildren`数组里的所有未处理子节点的第一个子节点称为：旧前；
- `oldChildren`数组里的所有未处理子节点的最后一个子节点称为：旧后；


### 参考资料

- [优化更新子节点](https://www.bookset.io/read/Learn-Vue-Source-Code/03c8bbd76b668bed.md)