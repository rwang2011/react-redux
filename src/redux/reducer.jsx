/** 
 * 包含多个reducer函数的模块
*/
import { INCREMENT, DECREMENT } from './action-type';
// import { combineReducers } from 'redux';

export function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + action.data;
        case DECREMENT:
            return state - action.data;
        default:
            return state;
    }
}


// 如果有多个reducer函数，可以使用combineReducers
// 此时不用单独向外暴露reducer函数，而是
// export default combineReducers({
//     counter,
//     comments   //reducer函数
// });
//此时，redux向外暴露的state的结构就是 {counter:2,comments:[]}