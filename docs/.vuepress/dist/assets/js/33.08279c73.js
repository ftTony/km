(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{255:function(a,s,n){"use strict";n.r(s);var r=n(13),t=Object(r.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"高级排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高级排序"}},[a._v("#")]),a._v(" 高级排序")]),a._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),n("p",[a._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),a._v(" "),n("h2",{attrs:{id:"内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),n("ul",[n("li",[a._v("希尔排序")]),a._v(" "),n("li",[a._v("归并排序")]),a._v(" "),n("li",[a._v("快速排序")]),a._v(" "),n("li",[a._v("堆排序")]),a._v(" "),n("li",[a._v("计数排序")]),a._v(" "),n("li",[a._v("桶排序")]),a._v(" "),n("li",[a._v("基数排序")])]),a._v(" "),n("h3",{attrs:{id:"一、希尔排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、希尔排序"}},[a._v("#")]),a._v(" 一、希尔排序")]),a._v(" "),n("h4",{attrs:{id:"_1-1-算法简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-算法简介"}},[a._v("#")]),a._v(" 1.1 算法简介")]),a._v(" "),n("blockquote",[n("p",[a._v("希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列。动态定义间隔序列的算法是《算法（第 4 版》的合著者 Robert Sedgewick 提出的。")])]),a._v(" "),n("h4",{attrs:{id:"_1-2-算法描述和实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-算法描述和实现"}},[a._v("#")]),a._v(" 1.2 算法描述和实现")]),a._v(" "),n("p",[a._v("先将整个待排序的记录序列分割成为苦干子序列分别进行直接插入排序，具体算法描述：")]),a._v(" "),n("ul",[n("li",[a._v("选择一个增量序列 t1，t2，...，tk，其中 ti>tj,tk=1;")]),a._v(" "),n("li",[a._v("按增量序列个数 k，对序列进行 k 趟排序")]),a._v(" "),n("li",[a._v("每趟排序，根据对应的增量 ti，将待排序列分割成若干长度为 m 的子序列，分别对各子表进行直接插入排序。仅增量因子为 1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。")])]),a._v(" "),n("p",[n("strong",[a._v("JavaScript 代码实现")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("function shellSort(arr){\n    var len = arr.length,\n        temp,\n        gap = 1;\n   console.time('希尔排序耗时：');\n   while(gap<len/5){\n       gap = gap*5+1;\n   }\n   for(gap;gap>0;gap=Math.floor(gap/5)){\n       for(var i = gap;i<len;i++){\n           temp=arr[i];\n           for(var j=i-gap;i>=0 && arr[j]>temp;j-=gap){\n               arr[j+gap]=arr[j];\n           }\n           arr[j+gap]=temp;\n       }\n   }\n   console.timeEnd('希尔排序耗时：')\n   return arr;\n}\nvar arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];\nconsole.log(shellSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br")])]),n("h4",{attrs:{id:"_1-3-希尔排序图示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-希尔排序图示"}},[a._v("#")]),a._v(" 1.3 希尔排序图示")]),a._v(" "),n("p",[n("img",{attrs:{src:"sort08.gif",alt:"images"}})]),a._v(" "),n("h4",{attrs:{id:"_1-4-算法分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-算法分析"}},[a._v("#")]),a._v(" 1.4 算法分析")]),a._v(" "),n("ul",[n("li",[a._v("最佳情况：T(n) = O(nlog2 n)")]),a._v(" "),n("li",[a._v("最坏情况：T(n) = O(nlog2 n)")]),a._v(" "),n("li",[a._v("平均情况：T(n) =O(nlog n)")])]),a._v(" "),n("h3",{attrs:{id:"二、归并排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、归并排序"}},[a._v("#")]),a._v(" 二、归并排序")]),a._v(" "),n("h4",{attrs:{id:"_2-1-算法简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-算法简介"}},[a._v("#")]),a._v(" 2.1 算法简介")]),a._v(" "),n("blockquote",[n("p",[a._v("和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择好的多，因为始终都是 O(n log n）的时间复杂度。代价是需要额外的内存空间。")])]),a._v(" "),n("blockquote",[n("p",[a._v("归并排序是建立在归并操作上的一种有效的排序算法。该算法是采用分治的一个非常典型的应用。归并排序是一种稳定的排序方法。将已有序的子序列合并，得到完全有序的序列；即先使每个序列有序，再使子序列段间有序。若将两个序表合并合并成一个有序表，称为 2-路归并。")])]),a._v(" "),n("h4",{attrs:{id:"_2-2-算法描述和实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-算法描述和实现"}},[a._v("#")]),a._v(" 2.2 算法描述和实现")]),a._v(" "),n("p",[n("strong",[a._v("具体算法描述如下：")])]),a._v(" "),n("ul",[n("li",[a._v("把长度为 n 的输入序列分成两个长度为"),n("code",[a._v("n/2")]),a._v("的子序列；")]),a._v(" "),n("li",[a._v("对这两个序列分别采用归并排序；")]),a._v(" "),n("li",[a._v("将两个排序好的子序列合并成一个最终的排序序列")])]),a._v(" "),n("p",[n("strong",[a._v("JavaScript 代码实现：")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("function mergeSort(arr){\n    var len = arr.length;\n    if(len<2){\n        return arr;\n    }\n    var mddle = Math.floor(len/2),\n        left = arr.slice(0,middle),\n        right = arr.slice(middle);\n    return merge(mergeSort(left),mergeSort(right));\n}\n\nfunction merge(left,right){\n    var result = [];\n    console.time('归并排序耗时');\n    while(left.length && right.length){\n        if(left[0]<=right[0]){\n            result.push(left.shift());\n        }else{\n            result.push(right.shift());\n        }\n    }\n\n    while(left.length) result.push(left.shift())\n\n    while(right.length) result.push(right.shift());\n\n    console.timeEnd('归并排序耗时');\n    return result;\n}\n\nvar arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];\nconsole.log(mergeSort(arr));\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br"),n("span",{staticClass:"line-number"},[a._v("25")]),n("br"),n("span",{staticClass:"line-number"},[a._v("26")]),n("br"),n("span",{staticClass:"line-number"},[a._v("27")]),n("br"),n("span",{staticClass:"line-number"},[a._v("28")]),n("br"),n("span",{staticClass:"line-number"},[a._v("29")]),n("br"),n("span",{staticClass:"line-number"},[a._v("30")]),n("br"),n("span",{staticClass:"line-number"},[a._v("31")]),n("br"),n("span",{staticClass:"line-number"},[a._v("32")]),n("br")])]),n("h4",{attrs:{id:"_2-3-动图演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-动图演示"}},[a._v("#")]),a._v(" 2.3 动图演示")]),a._v(" "),n("p",[n("img",{attrs:{src:"sort09.gif",alt:"images"}})]),a._v(" "),n("h4",{attrs:{id:"_2-4-算法分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-算法分析"}},[a._v("#")]),a._v(" 2.4 算法分析")]),a._v(" "),n("ul",[n("li",[a._v("最佳情况：T(n) = O(n)")]),a._v(" "),n("li",[a._v("最差情况：T(n) = O(nlogn)")]),a._v(" "),n("li",[a._v("平均情况：T(n) = O(nlogn)")])]),a._v(" "),n("h3",{attrs:{id:"三、快速排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、快速排序"}},[a._v("#")]),a._v(" 三、快速排序")]),a._v(" "),n("h4",{attrs:{id:"_3-1-算法简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-算法简介"}},[a._v("#")]),a._v(" 3.1 算法简介")]),a._v(" "),n("blockquote",[n("p",[a._v("快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。")])]),a._v(" "),n("h4",{attrs:{id:"_3-2-算法描述和实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-算法描述和实现"}},[a._v("#")]),a._v(" 3.2 算法描述和实现")]),a._v(" "),n("p",[a._v("快速排序使用分治法来的把一个串分为两个子串。具体算法描述如下：")]),a._v(" "),n("ul",[n("li",[a._v("从数列中挑出一个元素，称为“基准”；")]),a._v(" "),n("li",[a._v("重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就牌数列的中间位置。这个称为分区操作；")]),a._v(" "),n("li",[a._v("递归地把小于基准值元素的子数列和大于基准值元素的子数列和大于苦准值元素的子数列排序。")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// 方法一\nfunction quickSort(array,left,right){\n    console.time('1.快速排序耗时');\n    if(Object.prototype.toString.call(array).slice(8,-1)==='Array' && typeof left ==='number' && typeof right ==='number'){\n        if(left<right){\n            var x = array[right],i = left -1,temp;\n            for(var j = left;j<=right;j++){\n                if(array[j] <=x){\n                    i++;\n                    temp = array[i];\n                    array[i]=array[j];\n                    array[j]=temp;\n                }\n            }\n            quickSort(array,left,i-1);\n            quickSort(array,i+1,right);\n        }\n        console.time('1.快速排序耗时');\n        return array;\n    }else{\n        return 'array is not an Array or left or right is not a number';\n    }\n}\n\n// 方法二\nvar quickSort2 = function(arr){\n    console.time('2.快速排序耗时');\n    if(arr.length <=2) return arr;\n    var pivotIndex = Math.floor(arr.length/2);\n    var pivot = arr.splice(pivotIndex,1)[0];\n    var left = [];\n    var right = [];\n    for(var i=0;i<arr.length;i++){\n        if(arr[i]<pivot){\n            left.push(arr[i]);\n        }else{\n            right.push(arr[i]);\n        }\n    }\n    console.timeEnd('2.快速排序耗时');\n    return quickSort2(left).concat([pivot],quickSort2(right));\n};\nvar arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];\nconsole.log(quickSort(arr,0,arr.length-1));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]\nconsole.log(quickSort2(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br"),n("span",{staticClass:"line-number"},[a._v("25")]),n("br"),n("span",{staticClass:"line-number"},[a._v("26")]),n("br"),n("span",{staticClass:"line-number"},[a._v("27")]),n("br"),n("span",{staticClass:"line-number"},[a._v("28")]),n("br"),n("span",{staticClass:"line-number"},[a._v("29")]),n("br"),n("span",{staticClass:"line-number"},[a._v("30")]),n("br"),n("span",{staticClass:"line-number"},[a._v("31")]),n("br"),n("span",{staticClass:"line-number"},[a._v("32")]),n("br"),n("span",{staticClass:"line-number"},[a._v("33")]),n("br"),n("span",{staticClass:"line-number"},[a._v("34")]),n("br"),n("span",{staticClass:"line-number"},[a._v("35")]),n("br"),n("span",{staticClass:"line-number"},[a._v("36")]),n("br"),n("span",{staticClass:"line-number"},[a._v("37")]),n("br"),n("span",{staticClass:"line-number"},[a._v("38")]),n("br"),n("span",{staticClass:"line-number"},[a._v("39")]),n("br"),n("span",{staticClass:"line-number"},[a._v("40")]),n("br"),n("span",{staticClass:"line-number"},[a._v("41")]),n("br"),n("span",{staticClass:"line-number"},[a._v("42")]),n("br"),n("span",{staticClass:"line-number"},[a._v("43")]),n("br"),n("span",{staticClass:"line-number"},[a._v("44")]),n("br"),n("span",{staticClass:"line-number"},[a._v("45")]),n("br")])]),n("h4",{attrs:{id:"_3-3-动图演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-动图演示"}},[a._v("#")]),a._v(" 3.3 动图演示")]),a._v(" "),n("p",[n("img",{attrs:{src:"sort10.gif",alt:"images"}})]),a._v(" "),n("h4",{attrs:{id:"_3-4-算法分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-算法分析"}},[a._v("#")]),a._v(" 3.4 算法分析")]),a._v(" "),n("ul",[n("li",[a._v("最佳情况：T(n)=O(nlogn)")]),a._v(" "),n("li",[a._v("最差情况：T(n)=O(n2)")]),a._v(" "),n("li",[a._v("平均情况：T(n)=O(nlogn)")])]),a._v(" "),n("h3",{attrs:{id:"四、堆排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、堆排序"}},[a._v("#")]),a._v(" 四、堆排序")]),a._v(" "),n("h4",{attrs:{id:"_4-1-算法简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-算法简介"}},[a._v("#")]),a._v(" 4.1 算法简介")]),a._v(" "),n("blockquote",[n("p",[a._v("堆排序是指利用堆这种数据结构所设计的一种排序算法。堆积是一个挖完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。")])]),a._v(" "),n("h4",{attrs:{id:"_4-2-算法描述和实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-算法描述和实现"}},[a._v("#")]),a._v(" 4.2 算法描述和实现")]),a._v(" "),n("p",[n("strong",[a._v("具体算法描述如下：")])]),a._v(" "),n("ul",[n("li",[a._v("将初始待排序关键字序列(R1,R2....Rn)构建成大顶堆，此堆为初始的无序区；")]),a._v(" "),n("li",[a._v("将堆顶元素"),n("code",[a._v("R[1]")]),a._v("与最后一个元素"),n("code",[a._v("R[n]")]),a._v("交换，此时得到新的无序区"),n("code",[a._v("(R1,R2,...Rn-1)")]),a._v("和新的有序(Rn)，且满足"),n("code",[a._v("R[1,2...n-1]<=R[n]")]),a._v(";")]),a._v(" "),n("li",[a._v("由于交换后新的堆顶"),n("code",[a._v("1R[1]")]),a._v("可能违反堆的性质，因此需要对当前无序区"),n("code",[a._v("(R1,R2,....Rn-1)")]),a._v("调整为新堆，然后再次将"),n("code",[a._v("R[1]")]),a._v("与无序区最后一个元素交换，得到新的无序区(R1,R2,...Rn-2)和新的有序区(Rn-1....Rn-2)和新的有序区(Rn-1,Rn)。不断重复此过程直到有序区的元素个数为 n-1，则整个排序过程完成。")])]),a._v(" "),n("p",[n("strong",[a._v("JavaScript 代码实现")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("\n/*\n方法说明：堆排序\narray 待排序数组\n*/\n\nfunction heapify(arr,x,len){\n    console.time('堆排序耗时');\n    if(Object.prototype.toString.call(arr).slice(8,-1) === 'Array' typeof x==='number'){\n         // 建堆\n        var heapSize = array.length,\n             temp;\n        for(var i = Math.floor(heapSize/2)-1;i>=0;i--){\n            heapify(array,i,heapSize);\n        }\n\n        for(var j = heapSize-1;j>=1;j--){\n            temp = Array[0];\n            array[0] = array[j];\n            array[j] = temp;\n            heapify(array,0,--heapSize);\n        }\n        console.timeEnd('堆排序耗时');\n        return array;\n    }else{\n        return 'array is not an Array!';\n    }\n}\n\n/* 方法说明：维护堆的性质\n@param arr 数组\n@param x 数组下标\n@param len 堆大小\n*/\nfunction heapify(arr,x,len){\n    if(Object.prototype.toString.call(arr).slice(8,-1)==='Array' && typeof x ==='number'){\n        var l = 2 * x+1,\n            r= 2*x+2,\n            largest = x,\n            temp;\n        if(l<len && arr[l]>arr[argest]){\n            largest = l;\n        }\n        if(r< len && arr[r]>arr[largest]{\n            largest =r;\n        })\n        if(largest ! =x){\n            temp = arr[x];\n            arr[x]=arr[largest];\n            arr[largest] = temp;\n            heapify(arr,largest,len);\n        }\n    }else{\n        return 'arr is not an Array or x is not a number';\n    }\n}\nvar arr =[91,60,96,13,35,65,46,65,10,30,20,31,77,81,22];\nconsole.log(heapSort(arr));\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br"),n("span",{staticClass:"line-number"},[a._v("25")]),n("br"),n("span",{staticClass:"line-number"},[a._v("26")]),n("br"),n("span",{staticClass:"line-number"},[a._v("27")]),n("br"),n("span",{staticClass:"line-number"},[a._v("28")]),n("br"),n("span",{staticClass:"line-number"},[a._v("29")]),n("br"),n("span",{staticClass:"line-number"},[a._v("30")]),n("br"),n("span",{staticClass:"line-number"},[a._v("31")]),n("br"),n("span",{staticClass:"line-number"},[a._v("32")]),n("br"),n("span",{staticClass:"line-number"},[a._v("33")]),n("br"),n("span",{staticClass:"line-number"},[a._v("34")]),n("br"),n("span",{staticClass:"line-number"},[a._v("35")]),n("br"),n("span",{staticClass:"line-number"},[a._v("36")]),n("br"),n("span",{staticClass:"line-number"},[a._v("37")]),n("br"),n("span",{staticClass:"line-number"},[a._v("38")]),n("br"),n("span",{staticClass:"line-number"},[a._v("39")]),n("br"),n("span",{staticClass:"line-number"},[a._v("40")]),n("br"),n("span",{staticClass:"line-number"},[a._v("41")]),n("br"),n("span",{staticClass:"line-number"},[a._v("42")]),n("br"),n("span",{staticClass:"line-number"},[a._v("43")]),n("br"),n("span",{staticClass:"line-number"},[a._v("44")]),n("br"),n("span",{staticClass:"line-number"},[a._v("45")]),n("br"),n("span",{staticClass:"line-number"},[a._v("46")]),n("br"),n("span",{staticClass:"line-number"},[a._v("47")]),n("br"),n("span",{staticClass:"line-number"},[a._v("48")]),n("br"),n("span",{staticClass:"line-number"},[a._v("49")]),n("br"),n("span",{staticClass:"line-number"},[a._v("50")]),n("br"),n("span",{staticClass:"line-number"},[a._v("51")]),n("br"),n("span",{staticClass:"line-number"},[a._v("52")]),n("br"),n("span",{staticClass:"line-number"},[a._v("53")]),n("br"),n("span",{staticClass:"line-number"},[a._v("54")]),n("br"),n("span",{staticClass:"line-number"},[a._v("55")]),n("br"),n("span",{staticClass:"line-number"},[a._v("56")]),n("br"),n("span",{staticClass:"line-number"},[a._v("57")]),n("br"),n("span",{staticClass:"line-number"},[a._v("58")]),n("br")])]),n("h4",{attrs:{id:"_4-3-动图演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-动图演示"}},[a._v("#")]),a._v(" 4.3 动图演示")]),a._v(" "),n("p",[n("img",{attrs:{src:"sort11.gif",alt:"images"}})]),a._v(" "),n("h4",{attrs:{id:"_4-4-算法分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-算法分析"}},[a._v("#")]),a._v(" 4.4 算法分析")]),a._v(" "),n("ul",[n("li",[a._v("最佳情况：T(n)=O(nlogn)")]),a._v(" "),n("li",[a._v("最堆情况：T(n)=O(nlogn)")]),a._v(" "),n("li",[a._v("平均情况：T(n)=O(nlogn)")])]),a._v(" "),n("h3",{attrs:{id:"五、计数排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、计数排序"}},[a._v("#")]),a._v(" 五、计数排序")]),a._v(" "),n("h4",{attrs:{id:"_5-1-算法简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-算法简介"}},[a._v("#")]),a._v(" 5.1 算法简介")]),a._v(" "),n("blockquote",[n("p",[a._v("计数排序是一种稳定的排序算法。计数排序使用一个额外的数组 C，其中第 i 个元素是待排序数组 A 中值等于 i 的元素的个数。然后根据数组 C 来将 A 中的元素排到正确的位置。它只能对整数进行排序。")])]),a._v(" "),n("h4",{attrs:{id:"_5-2-算法描述和实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-算法描述和实现"}},[a._v("#")]),a._v(" 5.2 算法描述和实现")]),a._v(" "),n("p",[n("strong",[a._v("具体算法描述如下：")])]),a._v(" "),n("ul",[n("li",[a._v("找出待排序的数组中最大和最小的元素；")]),a._v(" "),n("li",[a._v("统计数组中每个值为的元素出现的次数，存入数组 C 的第 i 项；")]),a._v(" "),n("li",[a._v("对所有的计数累加（从 C 中的第一个元素开始，每一项和前一项相加）；")]),a._v(" "),n("li",[a._v("反向填充目标数组：将每个元素 i 放在新数组的第 C(i)项，每第一个元素就将 C(i)减去 1。")])]),a._v(" "),n("p",[n("strong",[a._v("JavaScript 代码实现：")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("function countingSort(array){\n    var len = array.length,\n         B = [],\n         C = [],\n         min = max = array[0];\n         console.time('计数排序耗时');\n         for(var i =0; i<len;i++){\n             min = min <= array[i] ? min:array[i];\n             max = max>= array[i]? max:array[i];\n             C[array[i]] = C[array[i]]?C[array[i]] +1:1;\n         }\n         for(var j=min;j<max;j++){\n             C[j+1] = (C[j+1] || 0) + (C[j] || 0);\n         }\n         for(var k = len-1;k>=0;k--){\n             B[C[array[k]]-1] = array[k];\n             C[array[k]]--;\n         }\n         console.timeEnd('计数排序耗时');\n         return B;\n}\nvar arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];\nconsole.log(countingSort(arr)); //[1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8, 9, 9]\n\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br")])]),n("h4",{attrs:{id:"_5-3-动图演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-动图演示"}},[a._v("#")]),a._v(" 5.3 动图演示")]),a._v(" "),n("p",[n("img",{attrs:{src:"sort12.gif",alt:"images"}})]),a._v(" "),n("h4",{attrs:{id:"_5-4-算法分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-算法分析"}},[a._v("#")]),a._v(" 5.4 算法分析")]),a._v(" "),n("blockquote",[n("p",[a._v("当输入的元素是 n 个到 0 到 k 之间的整数时，它的运行时间是 O(n+k)。计数排序不是比较排序，排序的速度快于任何比较排序算法。由于用来计数的数组 C 的长度取决于待排序数组中数据的范围(等于待排序数组的最大值与最小值的差加上 1)，这使得计数排序对于数据范围很大的数组，需要大量时间和内存。")])]),a._v(" "),n("ul",[n("li",[a._v("最佳情况：T(n)=O(n+k)")]),a._v(" "),n("li",[a._v("最差情况：T(n)=O(n+k)")]),a._v(" "),n("li",[a._v("平均情况：T(n)=O(n+k)")])]),a._v(" "),n("h3",{attrs:{id:"六、桶排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、桶排序"}},[a._v("#")]),a._v(" 六、桶排序")]),a._v(" "),n("h4",{attrs:{id:"_6-1-算法简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-算法简介"}},[a._v("#")]),a._v(" 6.1 算法简介")]),a._v(" "),n("blockquote",[n("p",[a._v("桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。")])]),a._v(" "),n("blockquote",[n("p",[a._v("桶排序的工作的原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排）")])]),a._v(" "),n("h4",{attrs:{id:"_6-2-算法描述和实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-算法描述和实现"}},[a._v("#")]),a._v(" 6.2 算法描述和实现")]),a._v(" "),n("p",[n("strong",[a._v("具体算法描述如下：")])]),a._v(" "),n("ul",[n("li",[a._v("设置一个定量数组当作空桶")]),a._v(" "),n("li",[a._v("遍历输入数据，并且把数据一个一个放到对应的桶里去；")]),a._v(" "),n("li",[a._v("对每个不是空的桶进行排序；")]),a._v(" "),n("li",[a._v("从不是空的桶里把排好序的数据拼接起来。")])]),a._v(" "),n("p",[n("strong",[a._v("JavaScript 代码实现")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// 桶排序\nfunction bucketSort(array,num){\n    if(array.length <=1){\n        return array;\n    }\n    var len = array.length,\n        buckets = [],\n        result = [],\n        mtn = max = array[0],\n        regex ='/^[1-9]+[0-9]*$/',\n        space,\n        n=0;\n        num = num || ((num>1 && regex.test(num))?num:10);\n        console.time('桶排序耗时');\n        for(var i =1;i<len;i++){\n            min = min <= array[i] ? min : array[i];\n            max = max>= arr[i]? max : array[i];\n        }\n        space = (max - min+1)/num;\n        for(var j=0; j<len;j++){\n            var index = Math.floor((array[j]-min)/space);\n            if(buckets[index]){\n                var k = buckets[index].length -1;\n                while(k>=0 && buckets[index][k]>array[j]){\n                    buckets[index][k+1] = buckets[index][k];\n                    k--;\n                }\n                buckets[index][k+1] = array[j];\n            }else{\n                // 穿桶，初始化\n                buckets[index]=[];\n                buckets[index].push(array[j]);\n            }\n        }\n    while(n<num){\n        result = result.concat(buckets[n]);\n        n++;\n    }\n    console.timeEnd('桶排序耗时');\n    return result;\n}\nvar arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];\nconsole.log(bucketSort(arr,4));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br"),n("span",{staticClass:"line-number"},[a._v("25")]),n("br"),n("span",{staticClass:"line-number"},[a._v("26")]),n("br"),n("span",{staticClass:"line-number"},[a._v("27")]),n("br"),n("span",{staticClass:"line-number"},[a._v("28")]),n("br"),n("span",{staticClass:"line-number"},[a._v("29")]),n("br"),n("span",{staticClass:"line-number"},[a._v("30")]),n("br"),n("span",{staticClass:"line-number"},[a._v("31")]),n("br"),n("span",{staticClass:"line-number"},[a._v("32")]),n("br"),n("span",{staticClass:"line-number"},[a._v("33")]),n("br"),n("span",{staticClass:"line-number"},[a._v("34")]),n("br"),n("span",{staticClass:"line-number"},[a._v("35")]),n("br"),n("span",{staticClass:"line-number"},[a._v("36")]),n("br"),n("span",{staticClass:"line-number"},[a._v("37")]),n("br"),n("span",{staticClass:"line-number"},[a._v("38")]),n("br"),n("span",{staticClass:"line-number"},[a._v("39")]),n("br"),n("span",{staticClass:"line-number"},[a._v("40")]),n("br"),n("span",{staticClass:"line-number"},[a._v("41")]),n("br"),n("span",{staticClass:"line-number"},[a._v("42")]),n("br"),n("span",{staticClass:"line-number"},[a._v("43")]),n("br")])]),n("h4",{attrs:{id:"_6-3-动图演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-动图演示"}},[a._v("#")]),a._v(" 6.3 动图演示")]),a._v(" "),n("p",[n("img",{attrs:{src:"sort13.gif",alt:"images"}})]),a._v(" "),n("h4",{attrs:{id:"_6-4-算法分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-算法分析"}},[a._v("#")]),a._v(" 6.4 算法分析")]),a._v(" "),n("blockquote",[n("p",[a._v("桶排序最好情况下使用线性时间 O(n)，桶排序的时间复杂度，取决与对各个数据进行排序的时间得复杂度，因为其它部分的时间复杂度都为 O(n)。很显然，桶划分的越小，各个桶之间的数据越少，排序手忙脚乱的时间也会越少。但相应的空间消耗就会增大。")])]),a._v(" "),n("ul",[n("li",[a._v("最佳情况：T(n) = O(n+k)")]),a._v(" "),n("li",[a._v("最差情况：T(n) = O(n+k)")]),a._v(" "),n("li",[a._v("平均情况：T(n) = O(n2)")])]),a._v(" "),n("h3",{attrs:{id:"七、基数排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#七、基数排序"}},[a._v("#")]),a._v(" 七、基数排序")]),a._v(" "),n("h4",{attrs:{id:"_7-1-算法简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-算法简介"}},[a._v("#")]),a._v(" 7.1 算法简介")]),a._v(" "),n("blockquote",[n("p",[a._v("基数排序也是非比较的排序算法，对每一位进行排序，从最低位开始排序，复杂度为 O(kn)，为数组长度，k 为数组中的数的最大位数；")])]),a._v(" "),n("blockquote",[n("p",[a._v("基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高在前。基数排序基于分别排序，分别收集，所以是稳定的。")])]),a._v(" "),n("h4",{attrs:{id:"_7-2-算法描述和实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-算法描述和实现"}},[a._v("#")]),a._v(" 7.2 算法描述和实现")]),a._v(" "),n("p",[n("strong",[a._v("具体算法描述如下：")])]),a._v(" "),n("ul",[n("li",[a._v("取得数组中的最大数，并取得位数；")]),a._v(" "),n("li",[a._v("arr 为原始数组，从最低位开始取每个位组成 radix 数组；")]),a._v(" "),n("li",[a._v("对 radix 进行计数排序（利用计数排序适用于小范围数的特点）；")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("/**\n* 基数排序适用于\n*  (1)数据范围较小，建议在小于1000\n*  (2)每个数值都要大于等于0\n* @author domonare\n* @param arr 待排序数据\n* @param maxDigit 最大位数\n*/\n\nfunction radixSort(arr,maxDigit){\n    var mod = 10;\n    var dev = 1;\n    var counter = [];\n    console.time('基数排序耗时');\n    for(var i=0;i< maxDigit;i++,dev*=10,mod*=10){\n        for(var j=0;j<arr.length;j++){\n            var bucket = parseInt((arr[j] % mod)/dev);\n            if(counter[bucket] == null){\n                counter[bucket] = [];\n            }\n            counter[bucket].push(arr[j]);\n        }\n        var pos = 0;\n        for(var j=0;j<counter.length;j++){\n            var value = null;\n            if(counter[j]!=null){\n                while((value=counter[j].shift()) !=null){\n                    arr[pos++] = value;\n                }\n            }\n        }\n    }\n    console.timeEnd('基数排序耗时');\n    return arr;\n}\nvar arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];\nconsole.log(radixSort(arr,2)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br"),n("span",{staticClass:"line-number"},[a._v("25")]),n("br"),n("span",{staticClass:"line-number"},[a._v("26")]),n("br"),n("span",{staticClass:"line-number"},[a._v("27")]),n("br"),n("span",{staticClass:"line-number"},[a._v("28")]),n("br"),n("span",{staticClass:"line-number"},[a._v("29")]),n("br"),n("span",{staticClass:"line-number"},[a._v("30")]),n("br"),n("span",{staticClass:"line-number"},[a._v("31")]),n("br"),n("span",{staticClass:"line-number"},[a._v("32")]),n("br"),n("span",{staticClass:"line-number"},[a._v("33")]),n("br"),n("span",{staticClass:"line-number"},[a._v("34")]),n("br"),n("span",{staticClass:"line-number"},[a._v("35")]),n("br"),n("span",{staticClass:"line-number"},[a._v("36")]),n("br"),n("span",{staticClass:"line-number"},[a._v("37")]),n("br")])]),n("h4",{attrs:{id:"_7-3-动图演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-动图演示"}},[a._v("#")]),a._v(" 7.3 动图演示")]),a._v(" "),n("p",[n("img",{attrs:{src:"sort14.gif",alt:"images"}})]),a._v(" "),n("h4",{attrs:{id:"_7-4-算法分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-算法分析"}},[a._v("#")]),a._v(" 7.4 算法分析")]),a._v(" "),n("ul",[n("li",[a._v("最佳情况："),n("code",[a._v("T(n) = O(n*k)")])]),a._v(" "),n("li",[a._v("最差情况："),n("code",[a._v("T(n) = O(n*k)")])]),a._v(" "),n("li",[a._v("平均情况："),n("code",[a._v("T(n) = O(n*k)")])])]),a._v(" "),n("h4",{attrs:{id:"_7-5-基数排序有两种方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-基数排序有两种方法"}},[a._v("#")]),a._v(" 7.5 基数排序有两种方法")]),a._v(" "),n("ul",[n("li",[a._v("MSD 从高位开始进行排序")]),a._v(" "),n("li",[a._v("LSD 从低位开始进行排序")])]),a._v(" "),n("p",[n("strong",[a._v("基数排序 VS 计数排序 VS 桶排序")])]),a._v(" "),n("p",[a._v("这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异：")]),a._v(" "),n("ul",[n("li",[a._v("基数排序：根据键值的每位数字来分配桶")]),a._v(" "),n("li",[a._v("计数排序：每个桶只存储单一键值")]),a._v(" "),n("li",[a._v("桶排序：每个桶存储一定范围的数值")])]),a._v(" "),n("h3",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://blog.damonare.cn/2016/12/20/%E5%8D%81%E5%A4%A7%E7%BB%8F%E5%85%B8%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95%E6%80%BB%E7%BB%93%EF%BC%88javascript%E6%8F%8F%E8%BF%B0%EF%BC%89/",target:"_blank",rel:"noopener noreferrer"}},[a._v("十大经典排序算法总结（javascript 描述）"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/vn3KiV-ez79FmbZ36SX9lg",target:"_blank",rel:"noopener noreferrer"}},[a._v("十大经典排序算法动画，看我就够了！"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"https://time.geekbang.org/column/article/41913",target:"_blank",rel:"noopener noreferrer"}},[a._v("排序（下）：如何用快排思想在 O(n)内查找第 K 大元素？"),n("OutboundLink")],1)]),a._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/3GOOMguWaNaY1MvRBKYACQ",target:"_blank",rel:"noopener noreferrer"}},[a._v("【图解数据结构】 一组动画彻底理解快速排序"),n("OutboundLink")],1)])]),a._v(" "),n("h2",{attrs:{id:"联系作者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系作者"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),n("div",{attrs:{align:"center"}},[n("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),n("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=t.exports}}]);