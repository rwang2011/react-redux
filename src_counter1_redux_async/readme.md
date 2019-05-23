redux自身不支持异步，使用插件redux-thunk可以支持异步

createStore(
    Counter,
    initialState, //可选，整个应用的初始状态
    applyMiddleware(thunk)  //第二个参数可以放插件，插件不能直接放在这里，必须用applyMiddleware包装一下
)


applyMiddleware():
作用是将所有中间件组成一个数组，依次执行。