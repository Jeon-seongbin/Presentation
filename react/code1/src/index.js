import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// 외부에서 사용되는 state를 바깥에서 볼 수 없다
// props는 외부에서 property로써 전달됨
serviceWorker.unregister();
