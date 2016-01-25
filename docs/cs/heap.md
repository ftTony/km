# 二叉堆

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [堆是什么？](#一、堆是什么？)
- [实现一个堆](#二、实现一个堆)
- [堆排序](#三、堆排序)

### 一、二叉堆是什么？

堆，又称为优先队列。虽然名为优先队列，但堆并不是队列。堆和队列是两种不同的数据结构，堆是树态的，队列是线性的。在队列中，我们可以向队列添加元素，取出的时候是按照进入队列的先后顺序取出元素的，先进先出；而在堆中，却不是按照元素添加的先后顺序，而是按照元素的优先级取出元素。

二叉堆是一种完全二叉树，因为完全二叉树的特性普遍使用数组结构是非常好用的，所以性注定了二叉堆的存储形式只能数组或动态数组。

### 二、二叉堆特点

- 它是一棵完全二叉树，表示树的每一层都有左侧和右侧子节点（除了最后一层的叶节点），并且最后一层的叶节点尽可能都是左侧节点。
- 二叉堆不是最小堆就是最大堆。最小堆允许你快速导出树的最小值，最大堆允许你快速导出树的最大值。所有的节点都大于等于（最大堆）或小于等于（最小堆）每个它的子节点。

### 二、实现一个堆

二叉树有两种表示方式。第一种是使用动态的表示方式，也就是指针。第二种是使用一个数组，通过索引值检索父节点、左侧和右侧子节点的值。

堆数据结构中有三个主要操作。

- insert(value)：这个方法向堆中插入一个新的值。如果插入成功，它返回 true，否则返回 false。
- extract()：这个方法移除最小值（最小堆）或最大值（最大堆），并返回这个值。
- findMinimum()：这个方法返回最小值（最小堆）或最大值（最大堆）且不会移除这个值。

代码如下：

```
const Compare = {
    LESS_THAN: -1,
    bigger_THAN: 1,
    EQUALS: 0
}

function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a)
}

function swap(array, a, b) {
    [array[a], array[b]] = [array[b], array[a]]
}

class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn
        this.heap = []
    }
    // 左侧子节点的位置是2*index+1
    getLeftIndex(index) {
        return (2 * index) + 1
    }
    // 右侧子节点的位置是2*index+2
    getRightIndex(index) {
        return (2 * index) + 2
    }
    // 父节点位置是index/2
    getParentIndex(index) {
        if (index === 0) {
            return undefined
        }
        return Math.floor((index - 1) / 2)
    }
    size() {
        return this.heap.length
    }
    isEmpty() {
        return this.size() <= 0
    }
    clear() {
        this.heap = []
    }
    findMinimum() {
        return this.isEmpty() ? undefined : this.heap[0]
    }
    insert(value) {
        if (value != null) {
            const index = this.heap.length
            this.heap.push(value)
            this.siftUp(index)
            return true
        }
        return false
    }
    // 下移操作
    siftDown(index) {
        let element = index
        const left = this.getLeftIndex(index)
        const right = this.getRightIndex(index)
        const size = this.size()
        if (left < size && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN) {
            element = left
        }
        if (right < size && this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN) {
            element = right
        }
        if (index !== element) {
            swap(this.heap, index, element)
            this.siftDown(element)
        }
    }
    // 上移操作
    siftUp(index) {
        let parent = this.getParentIndex(index)
        while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN) {
            swap(this.heap, parent, index)
            index = parent
            parent = this.getParentIndex(index)
        }
    }
    extract() {
        if (this.isEmpty()) {
            return undefined
        }
        if (this.size() === 1) {
            return this.heap.shift()
        }
        const removeValue = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.siftDown(0)
        return removeValue
    }
    heapify(array) {
        if (array) {
            this.heap = array
        }
        const maxIndex = Math.floor(this.size() / 2) - 1
        for (let i = 0; i <= maxIndex; i++) {
            this.siftDown(i)
        }
        return this.heap
    }
    getAsArray() {
        return this.heap
    }
}

class Max extends MinHeap {
    constructor(compareFn = defaultCompare) {
        super(compareFn)
        this.compareFn = compareFn
        this.compareFn = reverseCompare(compareFn)
    }
}
```

### 三、堆排序

我们可以使用二叉堆数据结构来帮助我们创建一个非常著名的排序算法：堆排序算法。它包下面三个步骤。

1. 用数组创建一个最大堆用作源数据。
2. 在创建最大堆后，最大的值会被存储在堆的第一个位置。我们要将它替换为堆的最后个值，将堆的大小减 1。
3. 最后，我们将堆的根节点下移并重复步骤 2 直到堆的大小为 1。

相关代码如下：

```
function heapify(array,index,heapSize,compareFn){
    let largest = index;
    const left = (2*index)+1;
    const right = (2*index)+2;
    if(left < heapSize && compareFn(array[left],array[index]>0)){
        largest = left;
    }
    if(right < heapSize && compareFn(array[right],array[largest])>0){
        largest = right;
    }
    if(largest ! == index){
        swap(array,index,largest)
        heapify(array,largest,heapSize,compareFn)
    }
}

function buildMaxHeap(array,compareFn){
    for(let i = Math.floor(array.length/2);i>=0;i-=1){
        heapify(array,i,array.length,compareFn)
    }
    return array
}

function heapSort(array,compareFn = defaultCompart){
    let heapSize = array.length
    buildMaxHeap(array,compareFn)
    while(heapSize>1){
        swap(array,0,--heapSize);
        heapify(array,0,heapSize,compareFn)
    }
    return array
}
```

### 参考资料

- 《学习 JavaScript 数据结构与算法》
- [什么是二叉堆？](https://mp.weixin.qq.com/s/En9p_zPRWpEFVZvbwdaJAA)
- [堆](http://www.conardli.top/docs/dataStructure/%E5%A0%86/%E5%A0%86.html)
- [堆和堆排序：为什么说堆排序没有快速排序快？](https://time.geekbang.org/column/article/69913)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
