import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import store from './redux/store';

// 用react-redux提供的Provider组件来管理store,Provider自己提供监听的功能，所以不用监听store变化
ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));