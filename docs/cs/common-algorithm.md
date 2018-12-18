# 前端常见算法

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 数组去复
- 实现一个洗牌算法
- 计算数组中每个元素出现的次数
- JS找出数组 arr 中重复出现过的元素
- 统计一个字符串中出现最多的字母
- 字符串回文判断(回文是指把相同的词汇或句子，在下文中调换位置或颠倒过来，产生首尾回环的情趣，叫做回文，也叫回环。)
- 不利用第三方变量的情况下交换两个变量的值

### 数组去复

**方法一**

```
var array=[1,1,'1'];

function unique(array){
    var res=[];
    for(var i=0,len=array.length;i<len;i++){
        var current=array[i];
        if(res.indexOf(current)===-1) res.push(current);
    }
    return res;
}

console.log(unique(array));
```

**利用filter**

```
var array=[1,2,1,1,'1'];

function unique(array){
    var res=array.filter(function(item,index,array){
        return array.indexOf(item)===index;
    });
    return res;
}
console.log(unique(array));
```

**方法三**

```
var arr=[1,2,1,2,3,5,4,5,3,4,4,4,4];
function unique(){
    var result=arr.sort().reduce((init,current)=>{
        if(init.length===0 || init[init,length-1]){
            init.push(current);
        }
        return init;
    },[]);
    return result;
}
console.log(unique(arr));
```

### 实现一个洗牌算法

**算法描述**

>这是最经典的洗牌算法，其算法思想是从原数组中随机抽取一个新的元素到新数组中
>从还没处理的数组（假如还剩n个）中，产生一个[0,n]之间的随机数random
>从剩下的n个元素中把第random个元素取出到新数组中
>删除原数组第random个元素
>重复第2 3步直到所有的元素取完

**代码实现**

```
function shufle(arr){
	var result=[],
		random;
		while(arr.length>0){
			random=Math.floor(Math.random(arr.length));
			result.push(arr[random]);
			arr.splice(random,1);
		}
		return result;
}
```

### 计算数组中每个元素出现的次数

```
var names=['Alice','Bob','Iiff','Bruce','Alice'];

var countedNames=names.reduce(function(allNames,name){
    if(name in allNames){
        allNames[name]++;
    }else{
        allNames[name]=1;
    }
    return allNames;
},{});
```

### JS找出数组 arr 中重复出现过的元素

```
var str1 = "jhadfgskjfajhdewqe";
var arr1=str1.split('');
var result=arr1.reduce(function(arr2,current){
	if(arr1.indexOf(current)>-1 && ((arr2.length===0) || (arr2.length !==0 && arr2.indexOf(current)===-1))) arr2.push(current);
	return arr2;
},[]);
console.log(str1);
```

### 统计一个字符串中出现最多的字母

**方法一**

```
var str1 = "jhadfgskjfajhdewqe";  
    var arr1 = str1.split('');  
    console.log(arr1);  
    function MostUnit(){  
        var arrA = [];  
        var arrB = [];  
        for(var i = 0 ;i <arr1.length; i ++){  
            if(arrA.indexOf(arr1[i])==-1){  
                arrA.push(arr1[i]);  
                arrB.push(1);  
            }else {  
                arrB[arrA.indexOf(arr1[i])] ++;  
            }  
        }  
        console.log(arrB)  
        console.log(arrA[arrB.indexOf(Math.max.apply(Math,arrB))]);  
    }  
    MostUnit();//j  
```

**方法二**

```
var str1 = "jhadfgskjfajhdewqe";
var result=str1.split('').reduce(function(obj,current){
	if(current in obj){
		obj[current]++;
	}else{
		obj[current]=1;
	}
	obj.max=obj.max>obj[current]?obj.max:obj[current];
	obj.key=obj.max>obj[current]?obj.key:current;
	return obj;
},{});
console.log(result.key,result.max);
```

### 字符串回文判断(回文是指把相同的词汇或句子，在下文中调换位置或颠倒过来，产生首尾回环的情趣，叫做回文，也叫回环。)

```
var str1='abcdefgh';
var str1='abcdcba';
function plalindrome(str){
    return str===str.split('').reverse().join('');
}
console.log(plalindrome(str1)); //false;
console.log(plalindrome(str2)); //true;
```

### 不利用第三方变量的情况下交换两个变量的值

**方法一**

```
var a = 10;  
var b = 12;  
function swap (a,b) {  
    b = b - a;  
    a = a + b;  
    b = a - b;  
    return [a,b]  
}  
console.log(swap(a,b));  
```

**方法二**

```
a = {a:b,b:a};
b = a.b;
a = a.a;
```

### 参考资料

- [JavaScript专题之数组去重](https://github.com/mqyqingfeng/Blog/issues/27)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>