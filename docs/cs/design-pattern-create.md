# 创建型设计模式

## 前言

本人平时学习及收集内容，欢迎参入一起讨论。

## 内容

- 简单工厂模式
- 工厂方法模式
- 抽象工厂模式
- 建造者模式
- 单例模式

### 一、简单工厂模式

```
// 篮球基类
class BasketBall{
    constructor(){
        this.intro = '篮球盛行于美国'
    }
}
```

### 二、工厂方法模式

```

```

### 三、抽象工厂模式

```

```

### 四、建造者模式

```

```

### 五、单例模式

```
let LazySingle = (function(){
    let _instance = null;
    function single(){
        return {
            publicMath(){},
            publicConst:100
        }
    }
    return function(){
        if(!_instance){
            _instance = single();
        }
        // 返回单例
        return _instance;
    }
})();
console.log(LazySingle().publicConst);
```

### 参考资料

- 《JavaScript 设计模式》
- 《JavaScript设计模式与开发实践》
- [第二篇、创建型设计模式](https://github.com/yanlele/node-index/blob/master/book/04%E3%80%81js%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/02%E7%AF%87%E3%80%81%E5%88%9B%E5%BB%BA%E5%9E%8B%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/README.md#class02-08)

## 联系作者

<div align="center">
    <p>
        平凡世界，贵在坚持。
    </p>
    <img :src="$withBase('/about/contact.png')" />
</div>
