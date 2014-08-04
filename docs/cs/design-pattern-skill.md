# 技巧型设计模式

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- [链模式](#一、链模式)
- [委托模式](#二、委托模式)
- [数据访问模式](#三、数据访问模式)
- [节流模式](#四、节流模式)
- [简单模板模式](#五、简单模板模式)
- [惰性模式](#六、惰性模式)
- [参与者模式](#七、参与者模式)
- [等待者模式](#八、等待者模式)

### 一、链模式

#### 1.1 介绍

通常情况下，通过对构造函数使用`new`会返回一个绑定到`this`上的新实例，所以我们可以在`new`出来的对象上直接用`.`访问其属性和方法。如果在普通函数中也返回当前实例，那么我们就可以使用`.`在单行代码中一次性连续调用多个方法，就好像它们被链接在一起一样，这就是链式调用。

#### 1.2 代码

```
class Reactangle{
    constructor(){
        this.length = null      // 长
        this.width = null       // 宽
        this.color = null       // 颜色
    }

    /* 设置长度 */
    setLength(length){
        this.length = length
        return this
    }

    /* 设置宽度 */
    setWidth(width){
        this.width = width
        return this
    }

    /* 设置颜色 */
    setColor(color){
        this.color = color
        return this
    }
}

const rect = new Rectangle()
  .setLength('100px')
  .setWidth('80px')
  .setColor('blue')
console.log(rect)
// 输出：{length: "100px", width: "80px", color: "blue"}
```

#### 1.4 场景

- jquery 中的链式调用
- Underscore 中的链模式

### 二、委托模式

#### 2.1 介绍

多个对象接受并处理同一个请求，他们请求委托给另一个对象统一处理请求。

#### 2.2 代码

```
let ul = document.getElementById('container');
ul.onclick = function (e = window.event) {
    let tar = e.target || e.srcElement;
    if (tar.nodeName.toLowerCase() === 'li') {
        tar.style.color = 'blue';
    }
}
```

#### 2.3 场景

- dom 事件委托

### 三、数据访问模式

#### 3.1 介绍

抽象和封装对数据源的访问与存储。

#### 3.2 代码

```
// 本地存储localStorage

class BaseLocalStorage{
    constructor(preId,timeSign = '|-|'){
        this.preId = preId;
        this.timeSing = timeSign;
        this.status = {
            SUCCESS: 0,     // 成功
            FAILURE: 1,         // 失败
            OVERFLOW: 2,        // 溢出
            TIMEOUT: 3          // 过期
        };
        this.storage = localStorage || window.localStorage;
    }

    // 获取本地存储数据ylkd数据真实字段
    getKey(key){
        return this.preId + key;
    }

    /** 添加或者修改数据
     * @param key
     * @param value
     * @param callback
     * @param time
     */
    set(key,value,callback,time){
        // 默认操作状态是成功的
        let status = this.status.SUCCESS,
             getKey = this.getKey(key);
        try{
            time = + new Date(time) || time.getTime();
        }catch(e){
            // 传入的时间参数或者时间参数有无获取默认时间，一个月
            time = +new Date()+ 1000 * 60 * 60 * 24 * 31;
        }

        try{
            this.storage.setItem(getKey,time + this.timeSing + value);
        }catch(e){
            // 溢出失败，返回溢出状态
            status = this.status.OVERFLOW
        }
        callback && callback.call(this,status,getKey,value)
    }

    // 获取数据
    get(key,callback){
        let status = this.status.SUCCESS,
            getKey = this.getKey(key),
            value = null,           // 默认值为空
            timeSignLen = this.timeSing.length,         // 时间戳与存储数据之间的拼接长度
            index,
            time,   // 时间戳
            result; // 最终获致到的数据
        try{
            value = this.storage.getItem(getKey);
        }catch(e){
            result = {
                status: this.status.FAILURE,
                value:null
            }
            callback && callback.call(this.result.status,result,value)
            return result
        }

        // 获取成功
        if(value){
            index = value.indexOf(this.timeSing);
            time = +value.slice(0,index);           // 获取时间戳
            if(+new Date(time) > + new Date() || time===0){
                // 获取数据结果
                value = value.slice(index + timeSignLen);
            }else{
                // 获取则结果为null
                value = null
                status = this.status.TIMEOUT;
                time.remove(key)
            }
        }else{
            status = this.status.FAILURE;
        }

        // 设置结果
        result = {
            status: status,
            value: value
        };
        callback && callback.call(this,result.status,result.value);
        return result
    }

    // 删除数据
    remove(key,callback){
        let status = this.status.FAILURE,
            getKey = this.getKey(key),
            value = null;
        value = this.storage.getItem(getKey);
        if(value){
            // 删除数据
            this.storage.removeItem(getKey);
            status = this.status.SUCCESS;
        }
        callback && callback.call(this,status,status>0? null : value.slice(value.indexOf(this.timeSing)+this.timeSing.length))
    }
}

/*使用实例*/
let LS = new BaseLocalStorage('LS__');
LS.set('a', 'xiao ming', function () {
    console.log(arguments)
});
LS.get('a', function () {
    console.log(arguments)
});
LS.remove('a', function () {
    console.log(arguments)
});
LS.remove('a', function () {
    console.log(arguments)
});
LS.get('a', function () {
    console.log(arguments)
});
```

### 四、节流模式

#### 4.1 介绍

对于复杂的业务逻辑进行节流控制， 执行最后一次操作并取消其他操作， 提高性能。

#### 4.2 代码

```
// 返回顶部
/* 返回顶部按钮添加动画，每次手动页面滚动时，他都要不停的抖动。原因 */

let throttle = function(){
    let isClear = arguments[0],fn;
    // 第一个参数表示是否清楚计时器
    if(typeof isClear === 'boolean'){
        // 第二参数则为函数
        fn = arguments[1];
        fn.__trottleID && clearTimeout(fn.__trottleID);
    }else{
        // 第一个参数为函数
        fn = isClear;
        // 第二个参数为函数执行时候的参数
        let param = arguments[1];
        let p = Object.assign({
            context: null,
            args: [],
            time:300
        },param);
        arguments.callee(true,fn);
        fn.__trottleID = setTimeout(function(){
            fn.apply(p.context,p.args)
        },p.time)
    }
}

// 实际使用
function moveScroll(){
    let top = $(document).scrollTo();
    $('#back').animate({top:top+30},400,'easeOutCubic')
}
// 监听页面滚动事件
$(window).on('scroll',function(){
    throttle(moveScroll)
})
```

### 五、简单模板模式

#### 5.1 介绍

#### 5.2 代码

```

```

#### 5.3 优点

#### 5.4 缺点

#### 5.5 场景

### 六、惰性模式

#### 6.1 介绍

减少每次代码执行的重复性的分支判断，通过对对象重定义比原对象中的分支判断。

#### 6.2 代码

```
// 解决函数执行时候的重复性的分支判断
A.on3 = function (dom, type, fn) {
    if (document.addEventListener) {
        A.on3 = function (dom, type, fn) {
            dom.addEventListener(type, fn, false);
        }
    } else if (document.attachEvent) {
        A.on3 = function (dom, type, fn) {
            dom.attachEvent('on' + type, fn);
        }
    } else {
        A.on3 = function (dom, type, fn) {
            dom['on' + type] = fn;
        }
    }
    A.on3(dom, type, fn);
};
```

### 七、参与者模式

#### 7.1 介绍

在特定的作用于中执行给定的函数，并将参数原封不动的传递。

```

```

### 八、等待者模式

#### 8.1 介绍

通过对多个异步进程的监听， 来触发未来发生的动作。

```

```

### 参考资料

- 《JavaScript 设计模式》

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
