import React,{Component} from 'react';

class Subject extends Component{
    render(){
        return (
            <header>
                {/* this.props.property name */}
                <h1>
                    <a href="/" onClick={function(e){
                        {/* 2. 이벤트를 클릭 했을때(이벤트) */}
                        e.preventDefault();
                        {/* 이벤트 막기 */}
                        this.props.onChangePage();
                        {/* 3. onChangePage 는 prop형태로 로 전달되어 바깥에 설정해 놓은 함수를 실행.  */}
                    }.bind(this)}>
                        {this.props.title}
                    </a>
                </h1>
                {this.props.sub}
            </header>
      );
    }
}

export default Subject;