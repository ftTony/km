# 高级排序

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 希尔排序
- 归并排序
- 快速排序
- 堆排序
- 计数排序
- 桶排序
- 基数排序

### 一、希尔排序

#### 1.1 算法简介

> 希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列。动态定义间隔序列的算法是《算法（第 4 版》的合著者 Robert Sedgewick 提出的。

#### 1.2 算法描述和实现

先将整个待排序的记录序列分割成为苦干子序列分别进行直接插入排序，具体算法描述：

- 选择一个增量序列 t1，t2，...，tk，其中 ti>tj,tk=1;
- 按增量序列个数 k，对序列进行 k 趟排序
- 每趟排序，根据对应的增量 ti，将待排序列分割成若干长度为 m 的子序列，分别对各子表进行直接插入排序。仅增量因子为 1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。

**JavaScript 代码实现**

```
function shellSort(arr){
    var len = arr.length,
        temp,
        gap = 1;
   console.time('希尔排序耗时：');
   while(gap<len/5){
       gap = gap*5+1;
   }
   for(gap;gap>0;gap=Math.floor(gap/5)){
       for(var i = gap;i<len;i++){
           temp=arr[i];
           for(var j=i-gap;i>=0 && arr[j]>temp;j-=gap){
               arr[j+gap]=arr[j];
           }
           arr[j+gap]=temp;
       }
   }
   console.timeEnd('希尔排序耗时：')
   return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(shellSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

#### 1.3 希尔排序图示

![images](sort08.gif)

#### 1.4 算法分析

- 最佳情况：T(n) = O(nlog2 n)
- 最坏情况：T(n) = O(nlog2 n)
- 平均情况：T(n) =O(nlog n)

### 二、归并排序

#### 2.1 算法简介

> 和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择好的多，因为始终都是 O(n log n）的时间复杂度。代价是需要额外的内存空间。

> 归并排序是建立在归并操作上的一种有效的排序算法。该算法是采用分治的一个非常典型的应用。归并排序是一种稳定的排序方法。将已有序的子序列合并，得到完全有序的序列；即先使每个序列有序，再使子序列段间有序。若将两个序表合并合并成一个有序表，称为 2-路归并。

#### 2.2 算法描述和实现

**具体算法描述如下：**

- 把长度为 n 的输入序列分成两个长度为`n/2`的子序列；
- 对这两个序列分别采用归并排序；
- 将两个排序好的子序列合并成一个最终的排序序列

**JavaScript 代码实现：**

```
function mergeSort(arr){
    var len = arr.length;
    if(len<2){
        return arr;
    }
    var mddle = Math.floor(len/2),
        left = arr.slice(0,middle),
        right = arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    var result = [];
    console.time('归并排序耗时');
    while(left.length && right.length){
        if(left[0]<=right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }

    while(left.length) result.push(left.shift())

    while(right.length) result.push(right.shift());

    console.timeEnd('归并排序耗时');
    return result;
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(mergeSort(arr));
```

#### 2.3 动图演示

![images](sort09.gif)

#### 2.4 算法分析

- 最佳情况：T(n) = O(n)
- 最差情况：T(n) = O(nlogn)
- 平均情况：T(n) = O(nlogn)

### 三、快速排序

#### 3.1 算法简介

> 快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。

#### 3.2 算法描述和实现

快速排序使用分治法来的把一个串分为两个子串。具体算法描述如下：

- 从数列中挑出一个元素，称为“基准”；
- 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就牌数列的中间位置。这个称为分区操作；
- 递归地把小于基准值元素的子数列和大于基准值元素的子数列和大于苦准值元素的子数列排序。

```
// 方法一
function quickSort(array,left,right){
    console.time('1.快速排序耗时');
    if(Object.prototype.toString.call(array).slice(8,-1)==='Array' && typeof left ==='number' && typeof right ==='number'){
        if(left<right){
            var x = array[right],i = left -1,temp;
            for(var j = left;j<=right;j++){
                if(array[j] <=x){
                    i++;
                    temp = array[i];
                    array[i]=array[j];
                    array[j]=temp;
                }
            }
            quickSort(array,left,i-1);
            quickSort(array,i+1,right);
        }
        console.time('1.快速排序耗时');
        return array;
    }else{
        return 'array is not an Array or left or right is not a number';
    }
}

// 方法二
var quickSort2 = function(arr){
    console.time('2.快速排序耗时');
    if(arr.length <=2) return arr;
    var pivotIndex = Math.floor(arr.length/2);
    var pivot = arr.splice(pivotIndex,1)[0];
    var left = [];
    var right = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    console.timeEnd('2.快速排序耗时');
    return quickSort2(left).concat([pivot],quickSort2(right));
};
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(quickSort(arr,0,arr.length-1));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(quickSort2(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```

#### 3.3 动图演示

![images](sort10.gif)

#### 3.4 算法分析

- 最佳情况：T(n)=O(nlogn)
- 最差情况：T(n)=O(n2)
- 平均情况：T(n)=O(nlogn)

### 四、堆排序

#### 4.1 算法简介

> 堆排序是指利用堆这种数据结构所设计的一种排序算法。堆积是一个挖完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。

#### 4.2 算法描述和实现

**具体算法描述如下：**

- 将初始待排序关键字序列(R1,R2....Rn)构建成大顶堆，此堆为初始的无序区；
- 将堆顶元素`R[1]`与最后一个元素`R[n]`交换，此时得到新的无序区`(R1,R2,...Rn-1)`和新的有序(Rn)，且满足`R[1,2...n-1]<=R[n]`;
- 由于交换后新的堆顶`1R[1]`可能违反堆的性质，因此需要对当前无序区`(R1,R2,....Rn-1)`调整为新堆，然后再次将`R[1]`与无序区最后一个元素交换，得到新的无序区(R1,R2,...Rn-2)和新的有序区(Rn-1....Rn-2)和新的有序区(Rn-1,Rn)。不断重复此过程直到有序区的元素个数为 n-1，则整个排序过程完成。

**JavaScript 代码实现**

```

```

#### 4.3 动图演示

![images](sort11.gif)

#### 4.4 算法分析

- 最佳情况：T(n)=O(nlogn)
- 最堆情况：T(n)=O(nlogn)
- 平均情况：T(n)=O(nlogn)

### 五、计数排序

#### 5.1 算法简介

> 计数排序是一种稳定的排序算法。计数排序使用一个额外的数组 C，其中第 i 个元素是待排序数组 A 中值等于 i 的元素的个数。然后根据数组 C 来将 A 中的元素排到正确的位置。它只能对整数进行排序。

#### 5.2 算法描述和实现

**具体算法描述如下：**

- 找出待排序的数组中最大和最小的元素；
- 统计数组中每个值为的元素出现的次数，存入数组 C 的第 i 项；
- 对所有的计数累加（从 C 中的第一个元素开始，每一项和前一项相加）；
- 反向填充目标数组：将每个元素 i 放在新数组的第 C(i)项，每第一个元素就将 C(i)减去 1。

**JavaScript 代码实现：**

```

```

#### 5.3 动图演示

![images](sort12.gif)

#### 5.4 算法分析

> 当输入的元素是 n 个到 0 到 k 之间的整数时，它的运行时间是 O(n+k)。计数排序不是比较排序，排序的速度快于任何比较排序算法。由于用来计数的数组 C 的长度取决于待排序数组中数据的范围(等于待排序数组的最大值与最小值的差加上 1)，这使得计数排序对于数据范围很大的数组，需要大量时间和内存。

- 最佳情况：T(n)=O(n+k)
- 最差情况：T(n)=O(n+k)
- 平均情况：T(n)=O(n+k)

### 六、桶排序

#### 6.1 算法简介

> 桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。

> 桶排序的工作的原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排）

#### 6.2 算法描述和实现

**具体算法描述如下：**

- 设置一个定量数组当作空桶
- 遍历输入数据，并且把数据一个一个放到对应的桶里去；
- 对每个不是空的桶进行排序；
- 从不是空的桶里把排好序的数据拼接起来。

**JavaScript 代码实现**

```

```

#### 6.3 动图演示

#### 6.4 算法分析

### 七、基数排序

#### 7.1 算法简介

> 基数排序也是非比较的排序算法，对每一位进行排序，从最低位开始排序，复杂度为 O(kn)，为数组长度，k 为数组中的数的最大位数；

> 基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高在前。基数排序基于分别排序，分别收集，所以是稳定的。

#### 7.2 算法描述和实现

**具体算法描述如下：**

- 取得数组中的最大数，并取得位数；
- arr 为原始数组，从最低位开始取每个位组成 radix 数组；
- 对 radix 进行计数排序（利用计数排序适用于小范围数的特点）；

```

```

#### 7.3 动图演示

#### 7.4 算法分析

### 参考资料

- [十大经典排序算法总结（javascript 描述）](https://blog.damonare.cn/2016/12/20/%E5%8D%81%E5%A4%A7%E7%BB%8F%E5%85%B8%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95%E6%80%BB%E7%BB%93%EF%BC%88javascript%E6%8F%8F%E8%BF%B0%EF%BC%89/)
- [十大经典排序算法动画，看我就够了！](https://mp.weixin.qq.com/s/vn3KiV-ez79FmbZ36SX9lg)
- [排序（下）：如何用快排思想在 O(n)内查找第 K 大元素？](https://time.geekbang.org/column/article/41913)
- [【图解数据结构】 一组动画彻底理解快速排序](https://mp.weixin.qq.com/s/3GOOMguWaNaY1MvRBKYACQ)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
