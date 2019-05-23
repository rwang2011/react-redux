import { connect } from 'react-redux'

import { increment, decrement, incrementAsync } from '../redux/actions'
import Counter from '../components/Counter'

/** 
 * connect 用于从UI组件生成容器组件
 * 第一个参数：mapStateToProps，是个函数，把外部数据（state）映射成UI组件的参数
 * 第二个参数：mapDispatchToProps, 把用户对UI组件的操作映射成action
 *            对象：每个键名是UI组件的同名参数，键值是个函数，作为action creator,返回的action会由redux自动发出
 *            函数：有两个参数为dispatch,ownProps(容器组件的属性)，返回一个对象，每个键名是UI组件的同名参数，键值是个函数，定义了每个操作怎样发出action
*/
export default connect(
    state => ({ count: state }),
    { increment, decrement, incrementAsync }
    // (dispatch) => {
    //     return {
    //         increment: (number) => (dispatch(increment(number))),
    //         decrement: (number) => (dispatch(decrement(number))),
    //         incrementAsync: (number) => (dispatch(incrementAsync(number)))
    //     }
    // }
)(Counter);