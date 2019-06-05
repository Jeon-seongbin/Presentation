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

  render(){
    {/* return 에서는 최상위 코드 한개를 가진다 */}
    return (
      <div className="App">
        <Subject title="web1" sub="world wide web1"/>
        <TOC/>
        <Content title="HTML1" desc="HTML is HyperText Markup Language."/>
      </div>
    );
  }
}

export default App;
