import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../redux/actions'
import Counter from '../components/Counter'

export default connect(
    state => ({ count: state }),
    { increment, decrement }    //这里为什么不能是函数，dispatch=>({increment,decrement})
)(Counter);