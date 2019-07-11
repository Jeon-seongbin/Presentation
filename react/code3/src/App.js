import React ,{Component}from 'react';
import './App.css';

import Nav from './Nav';
import Shop from './Shop';
import About from './About';
import ItemDetail from './ItemDetail';
import Mypage from './MyPage';
import NoMatch from './NoMatch';

import UserForm from './component/UserForm';
import axios from "axios";

//https://api.github.com/users/wk0012345


import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';

//https://www.youtube.com/watch?v=Law7wfdg_ls
//https://velopert.com/3417

class App extends Component {
  state = {
    repos: null
  }

   getUser = async e => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    console.log(user);
    e.target.elements.username.value ="";
    const URL = `https://api.github.com/users/${user}`;
    await axios.get(URL)
    //Promise
    .then((res) => {
      console.log(res);
      const repos = res.data.public_repos;
      console.log(repos);
      this.setState({
        repos
      });
    });
    //resolve
  }

  render(){
    return (
      <div>
      <Router>
        {/* 리엑트에 라우팅 기능을 추가하는 컴포넌트 */}
        <div className="App">
          <Nav />
          <Switch>
            {/* Switch를 쓸 때, Route 컴포넌트?에서의 path속성에서 하나만 매치가 되면 되돌려지는데
             현재 코드에 슬래시(/)가 있기 때문에 Home만 보여지고 exact 키워드를 써서 url을 정확하게 판별할때 이용*/}
  
            <Route path='/' exact component={Home}/>
            {/* 어떤 url이라도 현재의 /와 매치 되었기 때문에 HomePage만 보여주고 끝낸다
                exact(정확한) 이라는 키워드를 이용하여, 정확하게 슬래시가 들어왔을 때 Home 컴포넌트를 보여주게 한다 */}
  
            <Route path="/about" component={About}/>
            {/* <About /> */}
            {/* Switch를 안 썻을때, 슬래시를 가지고 있어서 slash 의 내용을 표시하는 것 뿐 */}
            {/* 이걸 해결하기 위해서 스위치가 등장한다
             하나의 URL이 매치되면 동작 종료 */}
  
            <Route path="/shop" exact component={Shop}/>
            {/* URL 베이스로 컴포넌트를 보여주거나 가리거나 한다 */}
            {/* 브라우저에 /shop 이라는 URL을 치면(path) shop이라는 컴포넌트가 보여진다(component) */}
            {/* <Shop /> */}
  
            <Route path="/shop/:id" component={ItemDetail}/>
            {/* shop을 치고  뒤에 아무거나 올 때 id로 입력하게 한다 */}
            {/* 이때 URL shop 과 path가 같으니 shop에 exact를 걸어준다 */}
            {/* url parameter */}
            
            <Route path="/myPage" component={Mypage} />
            <Route component={NoMatch} />
            {/* URL매치가 안 되었을때 */}
          </Switch>

        </div>
      </Router>
     
      <UserForm getUser={this.getUser} />
        { this.state.repos  ? <p>number of Repos { this.state.repos}</p> : <p>please enter a user name</p> }
    </div>
    );
  }
  
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
