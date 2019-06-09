import React,{Component} from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject'
import './App.css';

{/* 생활코딩 리엑트강좌 */}
{/* 컴포넌트는 정리정돈의 도구이다 - 생활코딩 */}
{/* Component 는 항상 render함수를 가진다 - Nomard */}
{/* this.props. property 이름을 지정*/}

class App extends Component {

/*
컴포넌트의 구성
  외부에서 받는 값 : props
  내부에서 쓰는 값 : state

  내부에서 쓰는것을 바깥에서 보지 못하게 함
  props와 state는 철저하게 분리 되어야 함
  양쪽의 편의성을 도모함(부품)
*/

  constructor(props){
/*
    컴포넌트보다 render보다 더 빠르게 실행하며
    초기화를 담당한다
*/

/*
    리엑트는 Prop나 state가 바뀌면 render가 다시 호출된다
*/
    super(props);
    this.state = {
      mode : 'welcome',
      selected_content_id: 0,
      welcome : {title : 'welcome', desc : 'welcome HTML'},
      subject : {title : 'web', sub : 'world wide web'},
      contents : [
        {id:1, title:'HTML', desc: 'HTML is HyperText Markup Language.'},
        {id:2, title:'CSS', desc: 'CSS is Design.'},
        {id:3, title:'Javascript', desc: 'Javascript is Interactive.'}
      ]
    }
  }

  render(){
    {/* return 에서는 최상위 코드 한개를 가진다 */}
    {/* 자바스크립트의 코드로써 실행하기 위해선 중괄호를 쓴다 */}

    var _title = null;
    var _desc = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      let content = this.state.contents.filter(content => content.id == this.state.selected_content_id)[0];
      _title = content.title;
      _desc = content.desc;
    }

    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode : 'welcome'})
          }.bind(this)}
          />
          {/*1. onChangePage 이 컴포넌트가 이벤트를 전달하는 props이다(추가) */}
          <TOC
            onChangePage={function(id){
              this.setState({
                mode:'read',
                selected_content_id : Number(id)
              });
              //setState 메소드로 값을 바꾸어야 리엑트가 state의 값이 바뀌었는지 알 수 있다
            }.bind(this)}
            contents={this.state.contents}/>
          <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
