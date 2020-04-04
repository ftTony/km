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

```

#### 3.3 优点

#### 3.4 缺点

#### 3.5 场景

### 四、节流模式

#### 4.1 介绍

对于复杂的业务逻辑进行节流控制， 执行最后一次操作并取消其他操作， 提高性能。

#### 4.2 代码

```

```

#### 4.3 优点

#### 4.4 缺点

#### 4.5 场景

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

#### 6.2 代码

```

```

#### 6.3 优点

#### 6.4 缺点

#### 6.5 场景

### 七、参与者模式

```

```

### 八、等待者模式

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
