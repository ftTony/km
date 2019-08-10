# 节流与防抖动

## 前言

事件的触发权很多时候都属于用户，有些情况下会产生问题：

- 向后台发送数据，用户频繁触发，对服务器造成压力
- 一些浏览器事件：window.onresize、window.mousemove 等，触发的频率非常高，会造成浏览器性能问题

如果你碰到这些问题，那就需要用到函数节流和防抖了。

## 内容

- [什么是防抖](#一、什么是防抖)
- [防抖实现](#二、防抖实现)
- [使用场景](#三、使用场景)
- [什么是节流](#四、什么是节流)
- [节流实现](#五、节流实现)
- [使用场景](#六、使用场景)
- [防抖与节流区别](#七、防抖与节流区别)

### 一、什么是防抖

**防抖：** 一个需要频繁触发的函数，在规定时间内，只让最后一次生效，前面的不生效。

### 二、防抖实现

**代码实现**

```
function debounce(func,wait,immediate){
    var timeout,result;
    var debounced = function(){
        var context = this;
        var args = arguments;

        if(timeout) clearTimeout(timeout);
        if(immediate){
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            },wait);
            if(callNow) result = func.apply(context,args);
        }else{
            timeout = setTimeout(function(){
                func.apply(context,args);
            },wait);
        }
        return result;
    };

    debounced.cancel = function(){
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
}

```

### 三、使用场景

对于连续的事件响应我们只需要执行一次回调：

- 每次`resize/scroll` 触发统计事件
- 文本输入的验证(连续输入文字后发送`AJAX`请求进行验证，验证一次就好)

### 四、什么是节流

**函数节流：** 一个函数执行一次后，只有大于设定的执行周期后才会执行第二次。

### 五、节流实现

```

function throttle(fun,wait,options){
    var timeout,context,args,result;
    var previous = 0;
    if(!options) options = {};

    var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context,args);
        if(!timeout) context = args = null;
    };

    var throttled = function() {
        var now = new Date().getTime();
        if(!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if(remaining <=0 || remaining > wait){
            if(timeout){
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context,args);
            if(!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false){
            timeout = setTimeout(later,remaining);
        }
    };

    throttled.cancel = function(){
        clearTimeout(timeout);
        previous = 0;
        timeout = null;
    };
}

```

### 六、使用场景

需要间隔一定时间触发回调来控制函数调用频率：

- DOM 元素的拖拽功能实现(mousemove)
- 搜索联想(keyup)
- 计算鼠标移动的距离(mousemove)
- Canvas 模拟画板功能(mousemove)
- 射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）
- 监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，只有用户停止滚动后，才会判断是否到页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次

### 七、防抖与节流区别

函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理处理函数，而函数防抖只是在最后一次事件后才触发一次函数。比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。

### 参考资料

- [节流防抖](https://muyiy.vip/blog/7/7.1.html)
- [JavaScript 专题之跟着 underscore 学防抖](https://github.com/mqyqingfeng/Blog/issues/22)
- [JavaScript 专题之跟着 underscore 学节流](https://github.com/mqyqingfeng/Blog/issues/26)
- [函数节流和防抖](https://github.com/ljianshu/Blog/issues/43)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
