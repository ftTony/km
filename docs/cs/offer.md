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

### 实现conver方法，把原始list转换成树形结构，要求尽可能降低时间复杂度

以下数据结构中，id代表部门编号，name是部门名称，parentId是父部门编号，为0代表一级部门，现在要求实现一个convert方法，把原始list转换成树形结构，parentId为多少就挂载在该id的属性children数组下，结构如下：

```
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
const result = convert(list,...);

// 转换的结果如下：
let result = [{
    id:1,
    name:'部门A',
    parentId:0,
    children:[
        {
            id:3,
            name:'部门C',
            parentId:1,
            childrend:[
                {
                    id:6,
                    name:'部门F',
                    parentId:3
                },
                {
                    id:16,
                    name:'部门L',
                    parentId:3
                }
            ]
        },
        {
            id:4,
            name:'部门ID',
            parentId:1,
            children:[
                {
                    id:8,
                    name:'部门H',
                    parentId:4
                }
            ]
        }
    ],
    id:2,
    name:'部门B'
    parent
}]
```

方法一：使用reduce

```
function convert(list){
    const res = []
    const map = list.reduce((res,v)=>(res[v.id]=v,res),{});         //  转换成类似对象数据结构
    for(const item of list){
        if(item.parentId === 0){
            res.push(item)
            continue;
        }
        if(item.parentId in map){
            const parent = map[item.parentId]
            parent.children = parent.children || []
            parent.children.push(item)
        }
    }
    return res
}
```

方法二：基于DFS来写

```
function convert(source,parentId=0){
    let trees = [];
    for(let item of source){
        if(item.parentId === parentId){
            let children = convert(source,item['id']);
            if(children.length){
                item.children = children
            }
            trees.push(item);
        }
    }
    return trees
}
```

方法三：类似方法一，比方法浅析

```
function convert(list){
    const obj = {}
    const res = []
    list.forEach(item=>{
        obj[item.id] = item
    })
    list.forEach(item=>{
        if(item.parentId !==0){
            obj[item.parentId]['children']? obj[item.parentId]['children'].push(item):obj[item.parentId]['children'] = [item]
        }else{
            res.push(item)
        }
    })
    return res
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

### 介绍下深度优先遍历和广度优化先遍历，如何实现？

**html代码**

```
<body>
    <div class="parent">
        <div class="child-1">
            <div class="child-1-1">
                <div class="child-1-1-1">
                    a
                </div>
            </div>
            <div class="child-1-2">
                <div class="child-1-2-1">
                    b
                </div>
            </div>
            <div class="child-1-3">
                c
            </div>
        </div>
        <div class="child-2">
            <div class="child-2-1">
                d
            </div>
            <div class="child-2-2">
                e
            </div>
        </div>
        <div class="child-3">
            <div class="child-3-1">
                f
            </div>
        </div>
    </div>
</body>
```

**深度优先遍历**

深度优先遍历DFS与树的先序遍历比较类似。假设初始状态是代码中所有顶点均未被访问，则从某个顶点v出发，首先访问该顶点然后依次从它的各个未被访问的邻接点出发深度优先搜索遍历图，直至图中所有和v有路径想通的顶点都被访问到。若此时尚有其他顶点未被访问到，则另选一个未被访问的顶点作起点，重复上述过程，直至图中所有顶点都被访问到为止。

```
/*深度优先遍历三种方式*/
let deepTraversal1=(node,nodeList=[])=>{
    if(node !== null){
        nodeList.push(node)
        let children = node.children
        for(let i=0;i<children.length;i++){
            
        }
    }
}
let deepTraversal2 = (node)=>{

}
let deepTraversal3 = (node) =>{

}
```

**广度优先遍历**

广度优先遍历BFS从代码中某顶点v出发，在访问了v之后依次访问v的各个未曾访问v的各个未曾访问的邻接点，然后分别从这些邻接点出发依次访问它们的邻接点，并使得“先被访问的顶点的邻接点先于后被访问的顶点的邻接点被访问，直至图中所有已被访问的顶点的邻接点都被访问到。如果此时图中尚有顶点未被访问，则需要另选一个未曾被访问过的顶点作为新起点，重复上述过程，直至图中所有顶点都被访问到为止。”

```
let widthTraversal2 = (node)=>{
    let nodes = []
    let stack = []
    if(node){
        stack.push(node)
        while(stack.length){
            let item = stack.shift()
        }
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