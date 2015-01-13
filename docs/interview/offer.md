# 指剑 offer 相关题

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

1. 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数

```

```

2. 请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为 We Are Happy.则经过替换之后的字符串为 We%20Are%20Happy。

```
function replaceSpace(str){
    return str.replace(/ /g, '%20');
}
```

3. 实现 conver 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度

以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，现在要求实现一个 convert 方法，把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：

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
    name:'部门B',
    parent:0
}]
```

方法一：使用 reduce

需要理解 reduce 的用法

```
function convert(list){
    const res = []
    const map = list.reduce((res,v)=>{res[v.id]=v; return res},{});         //  转换成对象数据结构
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

方法二：基于 DFS 来写

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

5. 介绍下深度优先遍历和广度优化先遍历，如何实现？

**html 代码**

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

深度优先遍历 DFS 与树的先序遍历比较类似。假设初始状态是代码中所有顶点均未被访问，则从某个顶点 v 出发，首先访问该顶点然后依次从它的各个未被访问的邻接点出发深度优先搜索遍历图，直至图中所有和 v 有路径想通的顶点都被访问到。若此时尚有其他顶点未被访问到，则另选一个未被访问的顶点作起点，重复上述过程，直至图中所有顶点都被访问到为止。

```
/*深度优先遍历三种方式*/
let deepTraversal1=(node,nodeList=[])=>{
    if(node !== null){
        nodeList.push(node)
        let children = node.children
        for(let i=0;i<children.length;i++){
            deepTraversal1(children[i],nodeList)
        }
    }
    return nodeList
}
let deepTraversal2 = (node)=>{
    let nodes = []
    if(node !== null){
        nodes.push(node)
        let children = node.chidren
        for(let i = 0;i< children.length;i++){
            nodes = nodes.concat(deepTraversal2(children[i]))
        }
    }
    return nodes
}
let deepTraversal3 = (node) =>{
    let stack = []
    let nodes = []
    if(node){
        // 推入当前处理的node
        stack.push(node)
        while(stack.length){
            let item = stack.pop()
            let children = item.children
            nodes.push(item)
            for(let i = children.length-1;i>=0;i--){
                stack.push(children[i])
            }
        }
    }
}
```

**广度优先遍历**

广度优先遍历 BFS 从代码中某顶点 v 出发，在访问了 v 之后依次访问 v 的各个未曾访问 v 的各个未曾访问的邻接点，然后分别从这些邻接点出发依次访问它们的邻接点，并使得“先被访问的顶点的邻接点先于后被访问的顶点的邻接点被访问，直至图中所有已被访问的顶点的邻接点都被访问到。如果此时图中尚有顶点未被访问，则需要另选一个未曾被访问过的顶点作为新起点，重复上述过程，直至图中所有顶点都被访问到为止。”

```
let widthTraversal2 = (node)=>{
    let nodes = []
    let stack = []
    if(node){
        stack.push(node)
        while(stack.length){
            let item = stack.shift()
            let children = item.children
            nodes.push(item)
            for(let i = 0; i<children.length;i++){
                stack.push(children[i])
            }
        }
    }
    return nodes
}
```

6. 输入一个链表，从尾到头打印链表每个节点的值。

```
function printListFromTailToHead(head){
    if(!head){
        return 0;
    }else{
        var arr = new Array();
        var curr = head;
        while(curr){
            arr.push(curr.val);
            curr = curr.next;
        }
        return arr.reverse();
    }
}
```

7. 用两个栈来实现一个队列，完成队列的 Push 和 Pop 操作。队列中的元素为 int 类型。

```
var stack1 = [];
var stack2 = [];
function push(node){
    stack1.push(node);
}
function pop(){
    var temp = stack1.pop();
    while(temp){

    }
    var result = stack2.pop();
    temp = stack2.pop();
    while(temp){
        stack1.push(temp);
        temp = stack2.pop()
    }
    return result;
}
```

8. 输入一个链表，输出该链表中倒数第 k 个结点。

```
function FindKthToTail(head,k){
    if(!head || k <=0){
        return null;
    }
    var i = head,j = head;
    while(--k){
        j = j.next;
        if(!j){
            return null;
        }
    }
    while(j.next){
        i = i.next;
        j = j.next;
    }
    j = null;
    return i;
}
```

9. 输入一个链表，反转链表后，输出链表的所有元素。

```
function ReverseList(pHead){
    var newHead,temp;
    if(!pHead){
        return null;
    }
    if(pHead.next === null){
        return pHead;
    }else{
        newHead = ReverseList(pHead.next);
    }
    temp = pHead.next;
    temp.next = pHead;
    pHead.next = null;
    temp = null;
    return newHead;
}
```

10. 输入 `n` 个整数，找出其中最小的`K`个数。例如输入`4,5,1,6,2,7,3,8` 这 8 个数字，则最小的 4 个数字是`1,2,3,4`。

```
function GetLeastNumber_Solution(input,k){
    if(!input || input.length<k){
        return [];
    }
    return input_sort(function(a,b){
        return a-b
    }).slice(0,k);
}
```

11. 从上往下打印出二叉树的每个节点，同层节点从左至右打印。

```

```

12. 买卖股票的最佳时机

```

```

13. 二维矩阵

```

```

14. 求树的路径之和 （dfs 搞定）

```

```

15. 求最长的山脉

```

```

16. 三角形最小路径和

```

```

17. 两数之和

题目：给定一个整数数组`nums`和一个目标值`target`，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

解答：

```
var twoSum = function(nums,target){
    let map = new Map()
    for(let i = 0; i<nums.length;i++){
        let k = target-nums[i]
        if(map.has(k)) {
            return [map.get(k), i]
        }
        map.set(nums[i], i)
    }
    return []
}

let nums = [2,7,11,15],
     target = 26;
twoSum(nums,target)
```

18. 爬楼梯

```

```

19. 使用最小花费爬楼梯

```

```

20. 编辑距离

```

```

21. 数组扁平化、去重、排序

题目：已知如下数组：`var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];`，编写一个程序将诗情画意化去并除其中重复部分数据，最终得到一个升序且不重复的数组

解答：

```
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]
// 扁平化
let flatArr = arr.flat(4)
// 去重
let disArr = Array.from(new Set(flatArr))
// 排序
let result = disArr.sort(function(a,b){
    return a - b
})
console.log(result)
```

22. 合并两个有序数组

题目：给你两个有序整数数组`nums1`和`nums2`，请你将`nums2`合并到`nums1`中，使 `nums1` 成为一个有序数组。

示例：

```
输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
```

解答：

```
var merge = function(nums1,m,nums2,n){
    let len1 = m-1,
        len2 = n-1,
        len = m+n-1
    while(len2 >=0){
        if(len1<0){
            nums1[len--] = num2[len2--]
            continue
        }
        nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--]: nums2[len2--]
    }
}
```

23. 判断一个单链表是否有环

题目：给定一个链表，判断链表中是否有环。为了表示给定链表中的环，我们使用整数`pos`来表示链表尾连接到链表中的位置（索引从`0`开始）。如果`pos`是`-1`，则在该链表中没有环。

示例：

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

解法一：给每个已遍历过的节点加标志位，遍历链表，当出现下一个节点已被标志时，则证明单链表环

```
let hasCycle = function(head) {
    while(head) {
        if(head.flag) return true
        head.flag = true
        head = head.next
    }
    return false
};
```

解法二：利用`JSON.stringify()`不能序列化含有循环引用的结构

```
try{
    JSON.stringify(head);
    return false;
}
catch(err){
    return true;
}
```

解法三：快慢指针（双指针法），设置快慢两个指针，遍历单链表，快指针一次走两步，慢指针一次走一步，如果单链表中存在环，则快慢指针终会指向同一个节点，否则直到快指针指向`null`时，快慢指针都不可能相遇。

```
let hasCycle = function(head){
    if(!head || !head.next){
        return false
    }
    let fast = head.next.next,slow = head.next
    while(fast ! == slow){
        if(!fast || !fast.next) return false
        fast = fast.next.next
        slow = slow.next
    }
    return true
}
```

24. 删除链表倒数第 n 个结点

题目：给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

```
给定一个链表: 1->2->3->4->5, 和 n = 2.
当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

解法一：添加`preHead`节点

```

```

解法二：单独处理倒数第`n`节点

```

```

25. 最长公共前缀

参考资料：[https://github.com/sisterAn/JavaScript-Algorithms/issues/19](https://github.com/sisterAn/JavaScript-Algorithms/issues/19)

题目：编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串`""`。

示例 1：

```
输入: ["flower","flow","flight"]
输出: "fl"
```

示例 2：

```
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

解法一：逐个比较

从前往后依次比较字符串，获取公共前缀。

```
var longestCommonPrefix = function(strs){
    if(strs === null || strs.length ===0) return ''
    let prevs = strs[0]
    for(let i=1;i<strs.length;i++){
        let j = 0
        for(;j<prevs.length && j<strs[i].length;j++){
            if(prevs.charAt(j) !== strs[i].charAt(j)) break
        }
        prevs = prevs.substring(0,j)
        if(prevs === '') return ''
    }
    return prevs
}
```

解法二：仅需最大、最小字符串的最长公共前缀

思路：获取数组中的最大值及最小值字符串，最小字符串与最大字符串的最长公共前缀也为其他字符串的公共前缀，即为字符串数组的最公共前缀

代码：

```
var longestCommonPrefix = function(strs){
    if(strs === null || strs.length === 0) return ''
    if(strs.length ===1) return strs[0]
    let min = 0,max = 0
    for(let i=1;i<strs.length;i++){
        if(strs[min].charAt(j) !== strs[max].charAt(j)){
            return strs[min].substring(0,j)
        }
    }
    return strs[min]
}
```

26. JS 如何实现两个超大数相加

解答：

```
function addBigNum(a, b){
  let arrA = a.split('').reverse()
  let arrB = b.split('').reverse()
  let aLen = arrA.length
  let bLen = arrB.length
  let shortArr, shortLen, longArr, longLen
  let result = []
  if(aLen<bLen){
    shortArr = arrA
    shortLen = aLen
    longArr = arrB
    longLen = bLen
  }else {
    shortArr = arrB
    shortLen = bLen
    longArr = arrA
    longLen = aLen
  }
  let add = 0
  for(let i = 0; i < shortLen; i++){
    let temp = (parseInt(arrA[i])+parseInt(arrB[i])+add)%10
    result.push(temp)
    add = Math.floor((parseInt(arrA[i])+parseInt(arrB[i])+add)/10)
  }
  if(shortLen===longLen){
    result.push(add)
  }else{
    for(let j = shortLen; j < longLen; j++){
      if(j===longLen-1){
        result.push(parseInt(longArr[j])+add)
      }else{
        let temp = (parseInt(longArr[j])+add)%10
        result.push(temp)
        add = Math.floor((parseInt(longArr[j])+add)/10)
      }
    }
  }
  return parseInt(result.reverse().join(''))
}
```

27. 无重复字符的最长子串

leetcode 的[第三题](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

题目：给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1：

```
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

示例 2：

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

示例 3：

```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

解答：

```
var lengthOfLongestSubstring = function (s) {
    var str = '' // 存放无重复子串
    var size = 0 //  当前最长无重复子串的长度
    for (var i = 0, len = s.length; i < len; i++) {
        var char = s.charAt(i)
        var index = str.indexOf(char)
        if (index == -1) {
            str += char
            size = size < str.length ? str.length : size
        } else {
            str = str.substr(index + 1) + char
        }
    }
    return size
};
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
