import React, { Component } from 'react'
import * as actions from '../redux/actions'


class App extends Component {

  render() {
    const count = this.props.store.getState();
    return (
      <div>
        <div>{count}</div>
        <input type="text" ref={e => this.input = e} />
        <button onClick={this.handleIncrement}>加</button>
        <button onClick={this.handleDecrement}>减</button>
      </div>
    );
  }

  handleIncrement = () => {
    const value = this.input.value * 1;
    //把actios单独拿出来
    // this.props.store.dispatch({ type: INCREMENT, data: value });
    this.props.store.dispatch(actions.increment(value));
  }

  handleDecrement = () => {
    const value = this.input.value * 1;
    // this.props.store.dispatch({ type: DECREMENT, data: value });
    this.props.store.dispatch(actions.decrement(value));
  }
}

export default App;