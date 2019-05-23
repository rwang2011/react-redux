import { createStore } from 'redux';

import { counter } from './reducer';

// 生成一个store对象
const store = createStore(counter) // 内部会第一次调用reduer函数得到初始state

export default store;