import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//react Dom 라이브러리를 출력
//리엑트 라이브러리

//리엑트 돔은 하나의 라이브러리를 출력하고
//도큐먼트에 엘리먼트가 있는데 엘리먼트 아이디는 루트이다
//html파일에 있다

serviceWorker.unregister();
