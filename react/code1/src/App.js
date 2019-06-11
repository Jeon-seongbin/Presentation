import React,{Component} from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Subject from './components/Subject'
import Control from './components/Control'

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
    this.state.contents ? this.max_content_id = this.state.contents.length :this.max_content_id = 0 ; 
  }

getContent(){
  let _title ,_desc, _article = null;  
  if(this.state.mode === 'welcome'){
    _title = this.state.welcome.title;
    _desc = this.state.welcome.desc;
    _article = <ReadContent title={_title} desc={_desc} />;
  } else if (this.state.mode === 'read'){
    let content = this.state.contents.filter(content => content.id === this.state.selected_content_id)[0];
    _title = content.title;
    _desc = content.desc;
    _article = <ReadContent title={_title} desc={_desc} />;
  } else if (this.state.mode === 'create'){
    _article = <CreateContent onSubmit={(_title,_desc) => {
      this.setState({
        contents: [
          ...this.state.contents, {id: ++this.max_content_id , title: _title, desc: _desc}
        ]
        //push 를 쓰지 말고 concat 함수를 이용 원본데이터 이용하지 않고 변경
      });
    }}/>;
  } else if (this.state.mode === 'update'){
    if(this.state.contents.length === 0 ){
      return;
    }
    var _contents = Array.from(this.state.contents);
    _contents = _contents.filter(_content =>_content.id === this.state.selected_content_id)[0];
    console.log(_contents);
    _article = <UpdateContent
                data={_contents}
                onSubmit={( _id, _title, _desc) => {
                  const _contents = Array.from(this.state.contents);
                  _contents.map(content => {
                    if(content.id === _id){
                      content.id = _id;
                      content.title = _title;
                      content.desc = _desc;
                    }
                  });
                  this.setState({
                    contents:_contents
                  })
                }}/>;
  }
  return _article
}

  render(){
    {/* return 에서는 최상위 코드 한개를 가진다 */}
    {/* 자바스크립트의 코드로써 실행하기 위해선 중괄호를 쓴다 */}

    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={() => {
            this.setState({mode : 'welcome'})
          }}
        />
        {/*1. onChangePage 이 컴포넌트가 이벤트를 전달하는 props이다(추가) */}
        <TOC
          onChangePage={(id) => {
            this.setState({
              mode:'read',
              selected_content_id : Number(id)
            });
            //setState 메소드로 값을 바꾸어야 리엑트가 state의 값이 바뀌었는지 알 수 있다
          }}
        contents={this.state.contents}/>
        <Control onChangeMode={(_mode)=>{
          if(_mode === 'delete'){
            if(window.confirm('really?')){
              const deleteContent = Array.from(this.state.contents);
              for(let i = 0 ; i < deleteContent.length ; i++){
                if(deleteContent[i].id === this.state.selected_content_id){
                  deleteContent.splice(i , 1);
                  break;
                }
              }
              this.setState({
                mode : 'welcome',
                contents : deleteContent
              })
              alert("deleted!");
            }
            return;
          }
          this.setState({
            mode : _mode
          });
        }}/>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
//이벤트가 실행되었을때 실행되어야 할 함수 -> 핸들러