# redux学习

## 内容

### 一、原理

1. 首先用户发出Action

` store.dispatch(action);`

2. 然后，Store自动调用Reducer，并且传入两个参数：当前State和收到的Action。Reducer会返回新的State。

```
let nextState = todoApp(previousState,action); 

```

3. State一旦有变化，Store就会调用监听函数。

```
 // 设置监听函数
store.subscribe(listener);

```

4、`listener`可以通过`store.getState()`得到当前状态。如果使用的是React，这时可以触发重新渲染View。

```
function listerner(){
    let newState = store.getState();
  component.setState(newState);   
}
```
