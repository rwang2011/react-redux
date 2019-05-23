import { connect } from 'react-redux'

import { increment, decrement, incrementAsync } from '../redux/actions'
import Counter from '../components/Counter'

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