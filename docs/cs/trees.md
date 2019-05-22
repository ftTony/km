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
    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }

    var root = null;

    this.insert = function(key){
        var newNode = new Node(key);

        if(root === null){
            root = newNode;
        }else{
            insertNode(root.newNode);
        }
    };

    this.min = function(){
        return minNode(root);
    }

    this.max = function(){
        return maxNode(root);
    }

    // 中序遍历
    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(root,callback);
    }

    // 前序遍历
    this.preOrderTraverse = function(callback){
        preOrderTraverseNode(root,callback);
    }

    // 后序遍历
    this.postOrderTraverse = function(callback){
        postOrderTraverseNode(root,callback);
    }

    // 搜索一个特定的值
    this.search = function(key){
        return searchNode(root,key);
    }

    // 删除一个节点
    this.remove = function(key){
        root = removeNode(root,key);
    }
}

var removeNode = function(node,key){

    if(node === null){
        return null;
    }
    if(key<node.key){
        node.left = removeNode(node.left,key);
        return node;
    }else if(key>node.key){
        node.right = removeNode(node.right,key);
        return node;
    }else{ // 健等于node.key
        // 第一种情况——一种叶节点
        if(node.left === null && node.right === null){
            node = null;
            return node;
        }

        // 第二种情况——一个只有一个子节点的节点
        if(node.left === null){
            node= node.right;
            return node;
        }else if(node.right===null){
            node= node.left;
            return node;
        }

        // 第三种情况——一个有两个节点的节点
        var aux = findMinxNode(node.right);
        node.key = aux.key8;
        node.right = removeNode(node.right,aux.key);
        return node;
    }
}

var searchNode = function(node,key){
    if(node === null){
        return false;
    }
    if(key<node.key){
        return searchNode(node.left,key);
    }else if(key>node.key){
        return searchNode(node.right,key);
    }else{
        return true;
    }
}

var inOrderTraverseNode = function(node,callback){
    if(node !== null){
        inOrderTraverseNode(node.left,callback);
        callback(node.key);
        inOrderTraverseNode(node.right,callback);
    }
};

var preOrderTraverseNode = function(node,callback){
    if(node!==null){
        callback(node.key);
        preOrderTraverseNode(node.left,callback);
        preOrderTraverseNode(node.right,callback);
    }
};

var postOrderTraverseNode = function(node,callback){
    if(node!==null){
        postOrderTraverseNode(node.left,callback);
        postOrderTraverseNode(node.right,callback);
        callback(node.key);
    }
}

function printNode(value){
    console.log(value);
}

var insertNode = function(node,newNode){
    if(newNode.key < node.key){
        if(node.left === null){
            node.left = newNode;
        }else{
            insertNode(node.left,newNode);
        }
    }else{
        if(node.right === null){
            node.right = newNode;
        }else{
            insertNode(node.right,newNode);
        }
    }
}

// 最小值
var minNode = function(node){
    if(node){
        while(node && node.left !== null){
            node = node.left;
        }
        return node.key;
    }
    return null;
};


// 最大值
var maxNode = function(node){
    if(node){
        while(node && node.right !==null){
            node = node.right;
        }
        return node.key;
    }
    return null;
};

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
- [二叉树有几种存储方式？(上)](https://mp.weixin.qq.com/s/h_mO28pmE_uNbHA5GVmWPA)
- [二叉树基础（上）：什么样的二叉树适合用数组来存储？](https://time.geekbang.org/column/article/67856)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>