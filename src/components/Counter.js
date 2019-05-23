import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Counter extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  }

  render() {
    const { count } = this.props;
    return (
      <div>
        <div>{count}</div>
        <input type="text" ref={e => this.input = e} />
        <button onClick={this.handleIncrement}>加</button>
        <button onClick={this.handleDecrement}>减</button>
        <button onClick={this.handleIncrementAsync}>异步加</button>
      </div>
    );
  }

  handleIncrement = () => {
    const value = this.input.value * 1;
    this.props.increment(value);
  }

  handleDecrement = () => {
    const value = this.input.value * 1;
    this.props.decrement(value);
  }

  handleIncrementAsync = () => {
    const value = this.input.value * 1;
    // setTimeout(() => {
    //   this.props.increment(value);
    // }, 1000);

    // 原来在react组件中异步的，放到redux中去
    this.props.incrementAsync(value);
  }
}


//connect的作用是把组件和redux连接起来，返回一个新的组件(容器组件)
// 参数都会当做属性添加到被包装的组件上,此处，将会把count,increment,decrement都添加到Counter组件上
// export default connect(
//   state => ({ count: state }),
//   { increment, decrement }
// )(Counter);

//redux和组件耦合度太高，把redux的部分抽取出来，让组件保持纯洁
export default Counter;