(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{247:function(a,s,r){"use strict";r.r(s);var n=r(4),t=Object(n.a)({},(function(){var a=this,s=a.$createElement,r=a._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"简单排序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简单排序","aria-hidden":"true"}},[a._v("#")]),a._v(" 简单排序")]),a._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),r("p",[a._v("本人平时学习及收集内容，欢迎参入一起讨论。")]),a._v(" "),r("h2",{attrs:{id:"内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[a._v("#")]),a._v(" 内容")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E4%B8%80%E3%80%81%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95%E8%AF%B4%E6%98%8E"}},[a._v("排序算法说明")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E4%BA%8C%E3%80%81%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F"}},[a._v("冒泡排序")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E4%B8%89%E3%80%81%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F"}},[a._v("选择排序")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#%E5%9B%9B%E3%80%81%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F"}},[a._v("插入排序")])])]),a._v(" "),r("h3",{attrs:{id:"一、排序算法说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、排序算法说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、排序算法说明")]),a._v(" "),r("h4",{attrs:{id:"_1-1-定义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-定义","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.1 定义")]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("定义")]),a._v("：对一序列对象根据某个关关键字进行排序")]),a._v(" "),r("li",[r("strong",[a._v("输入")]),a._v("：n 个数："),r("code",[a._v("a1,a2,a3,…,an")])]),a._v(" "),r("li",[r("strong",[a._v("输出")]),a._v("：n 个数的排列:"),r("code",[a._v("a1’,a2’,a3’,…,an’")]),a._v("，使得"),r("code",[a._v("a1’<=a2’<=a3’<=…<=an’")]),a._v("。")])]),a._v(" "),r("h4",{attrs:{id:"_1-2-算法优劣术语的说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-算法优劣术语的说明","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.2 算法优劣术语的说明")]),a._v(" "),r("ul",[r("li",[r("strong",[a._v("稳定")]),a._v("：如果 a 原本在前面，而 a=b，排序之后 a 仍然在 b 的前面。")]),a._v(" "),r("li",[r("strong",[a._v("不稳定")]),a._v("：如果 a 原本在 b 的前面，而 a=b，排序之后 a 可能会出现在 b 的后面。")]),a._v(" "),r("li",[r("strong",[a._v("内排序")]),a._v("：所有排序操作都在内在中完成；")]),a._v(" "),r("li",[r("strong",[a._v("外排序")]),a._v("：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内在的数据传输才能进行；")]),a._v(" "),r("li",[r("strong",[a._v("原地排序")]),a._v("：空间复杂度是 O(1)的排序算法。")]),a._v(" "),r("li",[r("strong",[a._v("时间复杂度")]),a._v("：一个算法执行所耗费的时间。")]),a._v(" "),r("li",[r("strong",[a._v("空间复杂度")]),a._v("：运行完一个程序所需内存的大小。")])]),a._v(" "),r("p",[a._v("关于时间复杂和空间复杂度更多了解可以点击"),r("router-link",{attrs:{to:"/cs/base-o.html"}},[a._v("这里")])],1),a._v(" "),r("h4",{attrs:{id:"_1-3-排序算法图片总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-排序算法图片总结","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.3 排序算法图片总结")]),a._v(" "),r("p",[a._v("排序对比：")]),a._v(" "),r("p",[r("img",{attrs:{src:"sort01.png",alt:"images"}})]),a._v(" "),r("p",[r("strong",[a._v("名词解释:")])]),a._v(" "),r("ul",[r("li",[r("code",[a._v("n")]),a._v("：数据规模")]),a._v(" "),r("li",[r("code",[a._v("k")]),a._v("：“桶”的个数")]),a._v(" "),r("li",[r("code",[a._v("In-place")]),a._v("：占用常数内存，不占用额外内存")]),a._v(" "),r("li",[r("code",[a._v("Out-place")]),a._v("：占用额外内存")])]),a._v(" "),r("p",[r("strong",[a._v("排序分类：")])]),a._v(" "),r("p",[r("img",{attrs:{src:"sort02.png",alt:"images"}})]),a._v(" "),r("h3",{attrs:{id:"二、冒泡排序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、冒泡排序","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、冒泡排序")]),a._v(" "),r("h4",{attrs:{id:"_2-1-算法描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-算法描述","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.1 算法描述")]),a._v(" "),r("blockquote",[r("p",[a._v("冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。")])]),a._v(" "),r("p",[a._v("具体算法描述如下：")]),a._v(" "),r("ul",[r("li",[a._v("比较相邻的元素。如果第一个比第二大，就交换它们两个；")]),a._v(" "),r("li",[a._v("对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；")]),a._v(" "),r("li",[a._v("针对所有的元素重复以上的步骤，除了最后一个；")]),a._v(" "),r("li",[a._v("重复步骤 1~3，直到排序完成。")])]),a._v(" "),r("h4",{attrs:{id:"_2-2-代码实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-代码实现","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.2 代码实现")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("function bubbleSort(arr){\n    var len = arr.length;\n    for(var i = 0;i<len;i++){\n        for(var j=0;j<len-1-i;j++){\n            if (arr[j] > arr[j+1]) {        //相邻元素两两对比\n                var temp = arr[j+1];        //元素交换\n                arr[j+1] = arr[j];\n                arr[j] = temp;\n            }\n        }\n    }\n    return arr;\n}\n\nvar arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];\nconsole.log(bubbleSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br"),r("span",{staticClass:"line-number"},[a._v("14")]),r("br"),r("span",{staticClass:"line-number"},[a._v("15")]),r("br"),r("span",{staticClass:"line-number"},[a._v("16")]),r("br")])]),r("blockquote",[r("p",[a._v("**改进冒泡排序：**设置一标志性变量 pos，用于记录每趟排序中最后一次进行交换的位置。由于 pos 位置之后的记录均已交换到位，故在进行下一趟排序时只需要扫描到 pos 位置即可。")])]),a._v(" "),r("p",[a._v("改进后算法如下：")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("function bubbleSort2(arr){\n    console.time('改进后冒泡排序耗时');\n    var i = arr.length -1;\n    while(i>0){\n        var pos =0; // 每趟开始时，无记录交换\n        for(var j=0;j<i;j++){\n            if(arr[j]>arr[j+1]){\n                pos = j;    // 记录交换的位置\n                var tmp = arr[j];\n                arr[j]=arr[j+1];\n                arr[j+1]=tmp;\n            }\n            i = pos;    // 为下一趟排序作准备\n        }\n    }\n    console.timeEnd('改进后冒泡排序耗时');\n    return arr;\n}\nvar arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];\nconsole.log(bubbleSort2(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br"),r("span",{staticClass:"line-number"},[a._v("14")]),r("br"),r("span",{staticClass:"line-number"},[a._v("15")]),r("br"),r("span",{staticClass:"line-number"},[a._v("16")]),r("br"),r("span",{staticClass:"line-number"},[a._v("17")]),r("br"),r("span",{staticClass:"line-number"},[a._v("18")]),r("br"),r("span",{staticClass:"line-number"},[a._v("19")]),r("br"),r("span",{staticClass:"line-number"},[a._v("20")]),r("br")])]),r("blockquote",[r("p",[a._v("传统冒泡排序中每一趟排序操作只能找到一个最大值或最小值，我们考虑利用在每趟排序中进行正向和反向两遍冒泡的方法一次可以得到两个最终值（最大者和最小者），从而使排序趟数几乎减少了一半。")])]),a._v(" "),r("p",[a._v("改进后的算法实现为:")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("function bubbleSort3(arr3){\n    var low = 0;\n    var high = arr.length-1;    // 设置变量的初始值\n    var tmp,j;\n    console.time('');\n    while(low<high){\n        for(j=low;j<high;++j){\n            if(arr[j]>arr[j+1]){\n                tmp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = tmp;\n            }\n            --high;\n        }\n        for(j=high;j>low;--j){\n            if(arr[j]<arr[j-1]){\n                tmp = arr[j];\n                arr[j]=arr[j-1];\n                arr[j-1]=tmp;\n            }\n            ++low;\n        }\n        console.timeEnd('2.改进后冒泡排序耗时');\n        return arr3;\n    }\n}\nvar arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];\nconsole.log(bubbleSort3(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br"),r("span",{staticClass:"line-number"},[a._v("14")]),r("br"),r("span",{staticClass:"line-number"},[a._v("15")]),r("br"),r("span",{staticClass:"line-number"},[a._v("16")]),r("br"),r("span",{staticClass:"line-number"},[a._v("17")]),r("br"),r("span",{staticClass:"line-number"},[a._v("18")]),r("br"),r("span",{staticClass:"line-number"},[a._v("19")]),r("br"),r("span",{staticClass:"line-number"},[a._v("20")]),r("br"),r("span",{staticClass:"line-number"},[a._v("21")]),r("br"),r("span",{staticClass:"line-number"},[a._v("22")]),r("br"),r("span",{staticClass:"line-number"},[a._v("23")]),r("br"),r("span",{staticClass:"line-number"},[a._v("24")]),r("br"),r("span",{staticClass:"line-number"},[a._v("25")]),r("br"),r("span",{staticClass:"line-number"},[a._v("26")]),r("br"),r("span",{staticClass:"line-number"},[a._v("27")]),r("br"),r("span",{staticClass:"line-number"},[a._v("28")]),r("br")])]),r("p",[r("img",{attrs:{src:"sort03.png",alt:"images"}})]),a._v(" "),r("h4",{attrs:{id:"_2-3-冒泡排序动图演示"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-冒泡排序动图演示","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.3 冒泡排序动图演示")]),a._v(" "),r("p",[r("img",{attrs:{src:"sort04.gif",alt:"images"}})]),a._v(" "),r("h4",{attrs:{id:"_2-4-算法分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-算法分析","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.4 算法分析")]),a._v(" "),r("ul",[r("li",[a._v("最佳情况："),r("code",[a._v("T(n)")]),a._v(" = "),r("code",[a._v("O(n)")])])]),a._v(" "),r("blockquote",[r("p",[a._v("当输入的数据已经是正序时")])]),a._v(" "),r("ul",[r("li",[a._v("最差情况："),r("code",[a._v("T(n)")]),a._v("="),r("code",[a._v("O(n2)")])])]),a._v(" "),r("blockquote",[r("p",[a._v("当输入的数据是时")])]),a._v(" "),r("ul",[r("li",[a._v("平均情况："),r("code",[a._v("T(n)")]),a._v("="),r("code",[a._v("O(n2)")])])]),a._v(" "),r("h3",{attrs:{id:"三、选择排序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、选择排序","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、选择排序")]),a._v(" "),r("blockquote",[r("p",[a._v("表现最稳定的排序算法之一，因为无论什么数据进去都是 O（n2）的时间复杂度...所以乃至它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。理论上讲，选择排序可能也是平时排序一般人想到的最多的排序方法。")])]),a._v(" "),r("h4",{attrs:{id:"_3-1-算法介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-算法介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.1 算法介绍")]),a._v(" "),r("blockquote",[r("p",[a._v("选择排序是一种简单直观的排序算法。它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。")])]),a._v(" "),r("h4",{attrs:{id:"_3-2-算法描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-算法描述","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.2 算法描述")]),a._v(" "),r("p",[a._v("n 个记录的直接选择排序可以经过 n-1 趟直接选择排序得到有序结果。具体算法描述如下：")]),a._v(" "),r("ul",[r("li",[a._v("初始状态：无序区为"),r("code",[a._v("R[1...n]")]),a._v("，有序区为空；")]),a._v(" "),r("li",[a._v("第 i 趟排序"),r("code",[a._v("(i=1,2,3…n-1)")]),a._v("开始时，当前有序区和无序区分别为"),r("code",[a._v("R[1..i-1]")]),a._v("和"),r("code",[a._v("R(i..n）")]),a._v("。该趟排序从当前无序区中-选出关键字最小的记录"),r("code",[a._v("R[k]")]),a._v("，将它与无序区的第 1 个记录 R 交换，使"),r("code",[a._v("R[1..i]")]),a._v("和"),r("code",[a._v("R[i+1..n)")]),a._v("分别变为记录个数增加 1 个的新有序区和记录个数减少 1 个的新无序区；")]),a._v(" "),r("li",[r("code",[a._v("n-1")]),a._v("趟结束，数组有序化了。")])]),a._v(" "),r("h4",{attrs:{id:"_3-3-代码实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-代码实现","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.3 代码实现")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("function selectionSort(arr){\n    var len = arr.length;\n    var minIndex,temp;\n    console.log('选择排序耗时');\n    for(var i=0;i<len-i;i++){\n        minIndex = i;\n        for(var j = i + 1; j<len;j++){\n            if(arr[j]<arr[minIndex]){   // 寻找最小的数\n                minIndex = j;\n            }\n        }\n        temp = arr[i];\n        arr[i] = arr[minIndex];\n        arr[minIndex] = temp;\n    }\n    console.timeEnd('选择排序耗时');\n}\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br"),r("span",{staticClass:"line-number"},[a._v("14")]),r("br"),r("span",{staticClass:"line-number"},[a._v("15")]),r("br"),r("span",{staticClass:"line-number"},[a._v("16")]),r("br"),r("span",{staticClass:"line-number"},[a._v("17")]),r("br")])]),r("h4",{attrs:{id:"_3-4-选择排序动图演示"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-选择排序动图演示","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.4 选择排序动图演示")]),a._v(" "),r("p",[r("img",{attrs:{src:"sort05.gif",alt:"images"}})]),a._v(" "),r("h4",{attrs:{id:"_3-5-算法分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-算法分析","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.5 算法分析")]),a._v(" "),r("ul",[r("li",[a._v("最佳情况："),r("code",[a._v("T(n)")]),a._v(" = "),r("code",[a._v("O(n2)")])]),a._v(" "),r("li",[a._v("最差情况："),r("code",[a._v("T(n)")]),a._v(" = "),r("code",[a._v("O(n2)")])]),a._v(" "),r("li",[a._v("平均情况："),r("code",[a._v("T(n)")]),a._v(" = "),r("code",[a._v("O(n2)")])])]),a._v(" "),r("h3",{attrs:{id:"四、插入排序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、插入排序","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、插入排序")]),a._v(" "),r("blockquote",[r("p",[a._v("插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易理解的了，因为只要打过扑克牌的人都应该能够秒懂。当然，如果你说你打扑克牌摸牌的时候从来不按牌的大小整理牌，那估计这辈子你对插入排序的算法都不会产生任何兴趣了…..")])]),a._v(" "),r("h4",{attrs:{id:"_4-1-算法简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-算法简介","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.1 算法简介")]),a._v(" "),r("blockquote",[r("p",[a._v("插入排序的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。插入排序在实现上，通常采用 in-place 排序（即只需用到 O(1)的额外空间的排序），因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。")])]),a._v(" "),r("h4",{attrs:{id:"_4-2-算法描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-算法描述","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.2 算法描述")]),a._v(" "),r("p",[a._v("一般来说，插入排序都采用 in-place 在数组上实现。具体算法描述如下：")]),a._v(" "),r("ul",[r("li",[a._v("从第一个元素开始，该元素可以认为已经被排序；")]),a._v(" "),r("li",[a._v("取出下一个元素，在已经排序的元素序列中从后向前扫描；")]),a._v(" "),r("li",[a._v("如果该元素（已排序）大于新元素，将该元素移到下一位置；")]),a._v(" "),r("li",[a._v("重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置；")]),a._v(" "),r("li",[a._v("将新元素插入到该位置后；")]),a._v(" "),r("li",[a._v("重复步骤 2~5。")])]),a._v(" "),r("h4",{attrs:{id:"_4-3-代码实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-代码实现","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.3 代码实现")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("function insertionSort(array){\n    if(Object.prototype.toString.call(array).slice(8,-1)==='Array'){\n        console.time('插入排序耗时：');\n        for(var i = 1; i<array.length;i++){\n            var key = array[i];\n            var j = i-1;\n            while(j>=0 && array[j]>key){\n                array[j+1] = array[j];\n                j--;\n            }\n            array[j+1] = key;\n        }\n        console.time('插入排序耗时：');\n        return array;\n    }else{\n        return 'array is not an Array';\n    }\n}\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br"),r("span",{staticClass:"line-number"},[a._v("14")]),r("br"),r("span",{staticClass:"line-number"},[a._v("15")]),r("br"),r("span",{staticClass:"line-number"},[a._v("16")]),r("br"),r("span",{staticClass:"line-number"},[a._v("17")]),r("br"),r("span",{staticClass:"line-number"},[a._v("18")]),r("br")])]),r("blockquote",[r("p",[a._v("**改进插入排序：**查找插入位置时使用二分查找的方式")])]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("function binaryInsertionSort(array) {\n    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {\n        console.time('二分插入排序耗时：');\n\n        for (var i = 1; i < array.length; i++) {\n            var key = array[i], left = 0, right = i - 1;\n            while (left <= right) {\n                var middle = parseInt((left + right) / 2);\n                if (key < array[middle]) {\n                    right = middle - 1;\n                } else {\n                    left = middle + 1;\n                }\n            }\n            for (var j = i - 1; j >= left; j--) {\n                array[j + 1] = array[j];\n            }\n            array[left] = key;\n        }\n        console.timeEnd('二分插入排序耗时：');\n\n        return array;\n    } else {\n        return 'array is not an Array!';\n    }\n}\nvar arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];\nconsole.log(binaryInsertionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br"),r("span",{staticClass:"line-number"},[a._v("12")]),r("br"),r("span",{staticClass:"line-number"},[a._v("13")]),r("br"),r("span",{staticClass:"line-number"},[a._v("14")]),r("br"),r("span",{staticClass:"line-number"},[a._v("15")]),r("br"),r("span",{staticClass:"line-number"},[a._v("16")]),r("br"),r("span",{staticClass:"line-number"},[a._v("17")]),r("br"),r("span",{staticClass:"line-number"},[a._v("18")]),r("br"),r("span",{staticClass:"line-number"},[a._v("19")]),r("br"),r("span",{staticClass:"line-number"},[a._v("20")]),r("br"),r("span",{staticClass:"line-number"},[a._v("21")]),r("br"),r("span",{staticClass:"line-number"},[a._v("22")]),r("br"),r("span",{staticClass:"line-number"},[a._v("23")]),r("br"),r("span",{staticClass:"line-number"},[a._v("24")]),r("br"),r("span",{staticClass:"line-number"},[a._v("25")]),r("br"),r("span",{staticClass:"line-number"},[a._v("26")]),r("br"),r("span",{staticClass:"line-number"},[a._v("27")]),r("br"),r("span",{staticClass:"line-number"},[a._v("28")]),r("br")])]),r("p",[r("strong",[a._v("改进前后对比")])]),a._v(" "),r("p",[r("img",{attrs:{src:"sort06.png",alt:"images"}})]),a._v(" "),r("h4",{attrs:{id:"_4-4-插入排序动图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-插入排序动图","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.4 插入排序动图")]),a._v(" "),r("p",[r("img",{attrs:{src:"sort07.gif",alt:"images"}})]),a._v(" "),r("h4",{attrs:{id:"_4-5-算法分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-算法分析","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.5 算法分析")]),a._v(" "),r("ul",[r("li",[a._v("最佳情况：输入数组按升序排列。"),r("code",[a._v("T(n)=O(n)")])]),a._v(" "),r("li",[a._v("最坏情况：输入数组按降序排序。"),r("code",[a._v("T(n)=O(n2)")])]),a._v(" "),r("li",[a._v("平均情况："),r("code",[a._v("T(n)=O(n2)")])])]),a._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://blog.damonare.cn/2016/12/20/%E5%8D%81%E5%A4%A7%E7%BB%8F%E5%85%B8%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95%E6%80%BB%E7%BB%93%EF%BC%88javascript%E6%8F%8F%E8%BF%B0%EF%BC%89/",target:"_blank",rel:"noopener noreferrer"}},[a._v("十大经典排序算法"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://time.geekbang.org/column/article/41802",target:"_blank",rel:"noopener noreferrer"}},[a._v(" 排序（上）：为什么插入排序比冒泡排序更受欢迎？"),r("OutboundLink")],1)])]),a._v(" "),r("h2",{attrs:{id:"联系作者"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#联系作者","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系作者")]),a._v(" "),r("div",{attrs:{align:"center"}},[r("p",[a._v("\n        平凡世界，贵在坚持。\n    ")]),a._v(" "),r("img",{attrs:{src:a.$withBase("/about/contact.png")}})])])}),[],!1,null,null,null);s.default=t.exports}}]);