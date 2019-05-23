import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { counter } from './reducer';

// 生成一个store对象
const store = createStore(
    counter,
    // initialState,  可选，整个应用的初始状态
    applyMiddleware(thunk)  //应用上异步插件
) // 内部会第一次调用reduer函数得到初始state

export default store;