/**
 * 包含所有action
 * 同步的action返回的都是一个对象
 * 异步的action返回的是一个函数
 */
import { INCREMENT, DECREMENT } from '../redux/action-type';

export const increment = (number) => ({ type: INCREMENT, data: number });
export const decrement = (number) => ({ type: DECREMENT, data: number });
export const incrementAsync = (number) => (
    dispatch => {
        //异步的代码，可以是ajax请求
        setTimeout(() => {
            dispatch(increment(number))
        }, 1000)
    }
);