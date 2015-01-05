# 图

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [图的概念](#一、图的概念)
- [图的相关术语](#二、图的相关术语)
- [图的表示](#三、图的表示)
- [图的遍历](#四、图的遍历)
- [最短路径](#五、最短路径)
- [最小生成树](#六、最小生成树)

### 一、图的概念

图是由点和线组成的，图中的点叫做顶点，点与点之间的连线叫做边

### 二、图的相关术语

图是网络结构的抽象模型。图是一组由**边**连接的**节点**

#### 2.1 有向图和无向图

图分为有向图和无向图，无向图就是没有方向，有向图是有方向。

图还有度的概念，什么叫度呢？ 就是一个顶点对应有多少条边。度又分为出度和入度。入度表示，有多少条指向该顶点，出度则是恰恰相反。

图还有权重的概念。权重可以理解为两个顶点之间的关系亲密度。

### 三、图的表示

从数据结构的角度来说，我们有多种方式来表示图。图的正确表示法取决于待解决的问题和图的类型。

图的表示主要分为：邻接矩阵、邻接表

#### 3.1 邻接矩阵

邻接矩阵存储方式是用两个数组表示图。一个一维的数组存储图中顶点信息，一个二维数组存储图中的边或弧的信息。

- 在 n 个顶点的图需要有一个 `n*n` 大小矩阵
- 在一个无权图中，矩阵坐标中每个位置值为 1 代表两个点是相连的，0 表示两点是不相连的
- 在一个有权图中，矩阵坐标中每个位置值代表该两点之间的权重，0 表示两点不相连
- 在无向图中，邻接矩阵关于对角线相等

无权无向图表示如下：

![images](graphs01.jpg)

有向图和带权重表示如下：

![images](graphs02.jpg)

#### 3.2 邻接表

- 对于每个点，存储着一个链表，用来指向所有与该点直接相连的点
- 对于有权图来说，链表中元素值对应着权重

#### 3.3 邻接矩阵和链表对比

1. 邻接矩阵由于没有相连的边也占有空间，因此存在浪费空间的问题，而邻接链表则比较合理地利用空间
2. 邻接链表比较耗时，牺牲很大的时间来查找，因此比较耗时，而邻接矩阵法相比邻接链表法来说，时间复杂度低。

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

代码如下：

```
const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2
};

var initializeCodor = function(){
    var color = [];
    for(var i =0;i<vertices.length;i++){
        color[vertices[i]] = 'white';
    }
    return color;
};

const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue();
  const distances = {};
  const predecessors = {};
  queue.enqueue(startVertex);
  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }
  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        distances[w] = distances[u] + 1;
        predecessors[w] = u;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
  }
  return {
    distances,
    predecessors
  };
};

```

#### 4.2 深度遍历

深度优先搜索算法将会从第一个指定的顶点开始遍历图，沿着路径走到这条路径最后一个顶点被访问了，接着原路回退并探索下一条路径。

代码如下：

```
const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2
};

var initializeCodor = function(){
    var color = [];
    for(var i =0;i<vertices.length;i++){
        color[vertices[i]] = 'white';
    }
    return color;
};


const DFS = gragh => {
    const vertices = gragh.getVertices()
    const adjList = gragh.getAdjList()
    const color = initializeColor(vertices)
    const d = {}
    const f = {}
    const p = {}
    const time = {
        count: 0
    }
    for (let i = 0; i < vertices.length; i++) {
        f[vertices[i]] = 0
        d[vertices[i]] = 0
        p[vertices[i]] = null

    }
    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            DFSVisit(vertices[i], color, d, f, p, time, adjList);
        }
    }
    return {
        discovery: d,
        finished: f,
        predecessors: p
    }
}

const DFSVisit = (v, color, d, f, p, time, adjList) => {
    color[u] = Colors.GREY
    d[u] = ++time.count
    const neighbors = adjList.get(u)
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]
        if (color[w] === Colors.WHITE) {
            p[w] = u
            DFSVisit(w, color, d, f, p, time, adjList)
        }
    }
    color[u] = Colors.BLACK
    f[u] = ++time.count
};
```

#### 4.3 性能分析

对于广度优先搜索来说，最坏的情况下，我们要遍历所有的顶点（n）和点（k），时间复杂度 O（n+k）。如果是一全通图（顶点之间都有两条连线）的话，k 是大于 n 的，时间复杂度可以写为 O(k)。

其中搜索遍历的同时，我们需要借助几个数组空间用来存储顶点，空间复杂度为 O(n)。

深度优先遍历在最坏的情况下会重复遍历两次边，时间复杂度为 O(k)。

空间复杂度主要是递归调用需要额外的栈空间，栈空间的大小和顶点 n 成正比关系，所以空间复杂度为 O(n)。

### 五、最短路径

最短路径非常著名的两个算法分别是 Dijkstra 算法和 Floyd-Warshall 算法

#### 5.1 Dijkstra 算法

`Dijkstra`算法是一种永无休止从单个源到所有其他源的最短路径的贪心算法。

```
/**
 * 最短路径
 */
const INF = Number.MAX_SAFE_INTEGER
const minDistance = (dist, visited) => {
    let min = INF
    let minIndex = -1
    for (let v = 0; v < dist.length; v++) {
        if (visited[v] === false && dist[v] <= min) {
            min = dist[v]
            minIndex = v
        }
    }
    return minIndex
}

const dijkstra = (graph, src) => {
    const dist = [];
    const visited = [];
    const {
        length
    } = graph
    for (let i = 0; i < length; i++) {
        dist[i] = INF
        visited[i] = false
    }
    dist[src] = 0
    for (let i = 0; i < length - 1; i++) {
        const u = minDistance(dist, visited)
        visited[u] = true
        for (let v = 0; v < length; v++) {
            if (!visited[v] && graph[u][v] !== 0 && dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v]
            }
        }
    }
    return dist
}
```

#### 5.2 Floyd-Warshall 算法

`Floyd-Warshall`算法是一种计算图中所有最短路径的动态规划算法。

```
const floydWarshall = graph => {
    const dist = [];
    const {
        length
    } = graph
    for (let i = 0; i < length; i++) {
        dist[i] = []
        for (let j = 0; j < length; j++) {
            if (i === j) {
                dist[i][j] = 0
            } else if (!isFinite(graph[i][j])) {
                dist[i][j] = Infinity
            } else {
                dist[i][j] = graph[i][j]
            }
        }
    }
    for (let k = 0; k < length; k++) {
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j]
                }
            }
        }
    }
    return dist
}
```

参考资料：[漫画：图的 “最短路径” 问题](https://zhuanlan.zhihu.com/p/65340385)

### 六、最小生成树

两种主要的求最小生成树的算法:Prim 算法和 Kruskal 算法。

#### 6.1 Prim 算法

`Prim` 算法是一种求解加权无向通图的 MST 问题的贪心算法。

代码如下：

```
const INF = Number.MAX_SAFE_INTEGER
const minKey = (graph, key, visited) => {
    let min = INF
    let minIndex = 0
    for (let v = 0; v < graph.length; v++) {
        if (visited[v] === false && key[v] < min) {
            min = key[v]
            minIndex = v
        }
    }
    return minIndex
}

const prim = graph => {
    const parent = []
    const key = []
    const visited = []
    const {
        length
    } = graph
    for (let i = 0; i < length; i++) {
        key[i] = INF
        visited[i] = false
    }
    key[0] = 0
    parent[0] = -1
    for (let i = 0; i < length - 1; i++) {
        const u = minKey(graph, key, visited)
        visited[u] = true
        for (let v = 0; v < length; v++) {
            if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
                parent[v] = u
            }
        }
    }
    return parent
}
```

#### 6.2 Kruskal 算法

`Kruskal` 算法是一种求加树无向连通图的 MST 的贪心算法。

代码如下：

```
// 最小生成树
const INF = Number.MAX_SAFE_INTEGER;
const find = (i, parent) => {
    while (parent[i]) {
        i = parent[i]
    }
    return i
}
const union = (i, j, parent) => {
    if (i !== j) {
        parent[j] = i
        return true
    }
    return false
}
const initializeCost = graph => {
    const cost = []
    const {
        length
    } = graph
    for (let i = 0; i < length; i++) {
        cost[i] = []
        for (let j = 0; j < length; j++) {
            if (graph[i][j] === 0) {
                cost[i][j] = INF
            } else {
                cost[i][j] = graph[i][j]
            }
        }
    }
    return cost
}
const kruskal = graph => {
    const {
        length
    } = graph
    const parent = []
    let ne = 0
    let a;
    let b;
    let u;
    let v;
    const cost = initializeColor(graph)
    while (ne < length - 1) {
        for (let i = 0, min = INF; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (cost[i][j] < min) {
                    min = cost[i][j]
                    a = u = i
                    b = v = j
                }
            }
        }
        v = find(u, parent)
        v = find(v, parent)
        if (union(u, v, parent)) {
            ne++
        }
        cost[a][b] = cost[b][a] = INF
    }
    return parent
}
```

## 参考资料

- [「中高级前端」窥探数据结构的世界- ES6 版](https://juejin.im/post/5cd1ab3df265da03587c142a)
- [图形算法（邻接矩阵）](https://juejin.im/post/5de7c053518825125d1497e2)
- [动画：如何用广度和深度优先搜索找到女朋友？](https://mp.weixin.qq.com/s/ln5xLC3mzFoNdu1tk9olLg)
- [图解：什么是图？](https://mp.weixin.qq.com/s?__biz=MzAxNDYwODEzNw==&mid=2247486103&idx=1&sn=3a57404cb55c5ed7fce67fdd5569070d&chksm=9b91f8f1ace671e72dc139ddf249d6b0d435456fbfc86d3661847c15bfefc3cd85c939601b8d&scene=21#wechat_redirect)
- [图文详解 DFS 和 BFS](https://mp.weixin.qq.com/s/rRVGWEm-QzgJ-vkYZTWD7w)
- 《学习 JavaScript 数据结构与算法》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
