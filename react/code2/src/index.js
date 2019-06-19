import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
//프로바이더 리엑트 컴포넌트에서 리덕스 사용을 가능하게 함

import reducers from './reducers';

const store = createStore(reducers)
//스토어는 리듀서에서 만들어진다?

//dispatch(action)
//action 을 리듀서로 보냄

//getState()
//현재 상태를 반환

//subscribe(listener)
//상태가 바뀔 때 마다 listener가 콜백 함수

//replaceReducer(nextReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
