import React from 'react';
import './App.css';

import Nav from './Nav';
import Shop from './Shop';
import About from './About';

import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}/>
          {/* 어떤 url이라도 현재의 /와 매치 되었기 때문에 HomePage만 보여주고 끝낸다
              exact(정확한) 이라는 키워드를 이용하여, 정확하게 슬래시가 들어왔을 때 Home 컴포넌트를 보여주게 한다 */}
          
          <Route path="/about" component={About}/>
          {/* <About /> */}
          {/* 슬래시를 가지고 있어서 slash 의 내용을 표시하는 것 뿐 */}
          {/* 이걸 해결하기 위해서 스위치가 등장한다
           하나의 URL이 매치되면 동작 종료 */}

          <Route path="/shop" component={Shop}/>
          {/* <Shop /> */}
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;