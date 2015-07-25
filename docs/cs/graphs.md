# 图

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 图的概念
- 图的相关术语
- 图的表示
- 图的遍历
- 最短路径

### 一、图的概念

图是由点和线组成的，图中的点叫做顶点，点与点之间的连线叫做边

### 二、图的相关术语

图是网络结构的抽象模型。图是一组由**边**连接的**节点**

#### 2.1 有向图和无向图

图可以是无向的或是有向的。

图还可以是**未加权的**或是**加权的**

### 三、图的表示

从数据结构的角度来说，我们有多种方式来表示图。图的正确表示法取决于待解决的问题和图的类型。

图的表示主要分为：邻接矩阵、邻接表、关联矩阵

#### 3.1 邻接矩阵

#### 3.2 邻接表

#### 3.3 关联矩阵

**ES5 代码实现**

```
function Graph(){
    var vertices = [];
    var adjList = new Dictionary();

    this.addVertex = function(v){
        vertices.push(v);
        adjList.set(v,[]);
    }

    this.addEdge = function(v,w){
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }

    this.toString = function(){
        var s = '';
        for(var i=0; i<vertices.length;i++){
            s +=vertices[i]+' -> ';
            var neighbors = adjList.get(vertices[i]);
            for(var j=0;j<neighbors.length;j++){
                s+=neighbors[j]+ ' ';
            }
            s+='\n';
        }
        return s;
    };
}
```

**ES6 代码实现**

```
class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected
        this.vertices = []
        this.adjList = new Dictionary()
    }
    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v)
            this.adjList.set(v, [])
        }
    }
    addEdge(a, b) {
        if (!this.adjList.get(a)) {
            this.addVertex(a)
        }
        if (!this.adjList.get(b)) {
            this.addVertex(b)
        }
        this.adjList.get(a).push(b)
        if (this.isDirected !== true) {
            this.adjList.get(b).push(a)
        }
    }
    getVertices() {
        return this.vertices
    }
    getAdjList() {
        return this.adjList
    }
    toString() {
        let s = ''
        for (let i = 0; i < this.vertices.length; i++) {
            s += `${this.vertices[i]}->`
            const neighbors = this.adjList.get(this.vertices[i])
            for (let j = 0; j < neighbors.length; j++) {
                s += `${neighbors[j]}`
            }
            s += '\n';
        }
        return s
    }
}
```

### 四、图的遍历

有两种算法可以对图进行遍历：**广度优先搜索** 和 **深度优先搜索**。图遍历可以用来寻找特定的顶点或寻找两个顶点之间的路径，检查图是否连通，检查图是否含有环。

**图遍历算法**的思想是必须追踪每个第一次访问的节点，并且追踪有哪些节点还没有被完全探 索。对于两种图遍历算法，都需要明确指出第一个被访问的顶点。

广度优先搜索算法和深度优先搜索算法基本上是相同的，只有一点不同，那就是待访问顶点 列表的数据结构，如下表所示：

| 算法         | 数据结构 | 描述                                                           |
| ------------ | -------- | -------------------------------------------------------------- |
| 深度优先搜索 | 栈       | 将顶点存入栈，顶点是沿着路径被探索的，存在新的相邻顶点就去访问 |
| 广度优先搜索 | 队列     | 将顶点存入队列，最先入队列的顶点先被探索                       |

#### 4.1 广度遍历

广度优先搜索算法会从指定的第一个顶点开始遍历图，先访问其所有的邻点（相邻顶点），就像一次访问图的一层。

**ES5 代码**

```
var initializeCodor = function(){
    var color = [];
    for(var i =0;i<vertices.length;i++){
        color[vertices[i]] = 'white';
    }
    return color;
};

this.bfs = function(v,callback){
    var bfs = function(v,callback){

        var color = initializeColor(),
            queue = new Queue();
        queue.enqueue(v);

        while(!queue.isEmpty()){
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
                color[u] = 'grey';
                for(var i=0;i<neightbors.length;i++){
                    var w = neighbors[i];
                    if(color[w] === 'white'){
                        color[w] = 'grey';
                        queue.enqueue(w);
                    }
                }
              color[u]='black';
              if(callback){
                  callback(u);
              }
        }
    }
}

```

**ES6 代码实现**

```
var initializeCodor = function(){
    var color = [];
    for(var i =0;i<vertices.length;i++){
        color[vertices[i]] = 'white';
    }
    return color;
};


this.dfs = function(callback){
    var color = initializeCodor();

    for(var i=0;i<vertices.length;i++){
        if(color[vertices[i]] ==='white'){
            dfsVisit(vertices[i],color,callback);
        }
    }
};

var dfsVisit = function(u,color,callback){
    color[u] = 'grey';
    if(callback){
        callback(u);
    }
    var neighbors = dfsVisit.get(u);
    for(var i=0;i<neighhors.length;i++){
        var w = neighbors[i];
        if(color[w]==='white'){
            dfsVisit(w,color,callback);
        }
    }
    color[u] = 'black';
}
```

#### 4.2 深度遍历

深度优先搜索算法将会从第一个指定的顶点开始遍历图，沿着路径走到这条路径最后一个顶点被访问了，接着原路回退并探索下一条路径。

**ES5 代码实现**

```

```

**ES6 代码实现**

```

```

#### 4.3 性能分析

对于广度优先搜索来说，最坏的情况下，我们要遍历所有的顶点（n）和点（k），时间复杂度 O（n+k）。如果是一全通图（顶点之间都有两条连线）的话，k 是大于 n 的，时间复杂度可以写为 O(k)。

其中搜索遍历的同时，我们需要借助几个数组空间用来存储顶点，空间复杂度为 O(n)。

深度优先遍历在最坏的情况下会重复遍历两次边，时间复杂度为 O(k)。

空间复杂度主要是递归调用需要额外的栈空间，栈空间的大小和顶点 n 成正比关系，所以空间复杂度为 O(n)。

### 五、最短路径

### 六、最小生成树

## 参考资料

- [「中高级前端」窥探数据结构的世界- ES6 版](https://juejin.im/post/5cd1ab3df265da03587c142a)
- [图形算法（邻接矩阵）](https://juejin.im/post/5de7c053518825125d1497e2)
- [动画：如何用广度和深度优先搜索找到女朋友？](https://mp.weixin.qq.com/s/ln5xLC3mzFoNdu1tk9olLg)
- [图解：什么是图？](https://mp.weixin.qq.com/s?__biz=MzAxNDYwODEzNw==&mid=2247486103&idx=1&sn=3a57404cb55c5ed7fce67fdd5569070d&chksm=9b91f8f1ace671e72dc139ddf249d6b0d435456fbfc86d3661847c15bfefc3cd85c939601b8d&scene=21#wechat_redirect)
- 《学习 JavaScript 数据结构与算法》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
