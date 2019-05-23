/**
 * 包含所有action
 */
import { INCREMENT, DECREMENT } from '../redux/action-type';

export const increment = (number) => ({ type: INCREMENT, data: number });
export const decrement = (number) => ({ type: DECREMENT, data: number });