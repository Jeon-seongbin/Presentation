import React ,{Component} from 'react';
import Value from './Value'
import Control from './Control'
//import {connect, bindActionCreators } from './react-redux';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Counter extends Component {

    constructor(props){
        super(props);
        //this.setRandomColor = this.setRandomColor.bind(this);
        //bind??
        //this.setRandomColor = this.setRandomColor.bind(this);
        //문장을 집어넣어서 바인딩시키면 render()에서 onClick={this.setRandomColor}를 할 때
        //this가 현재 this라는 것을 알게 되는 것이다.
    }

    //arrow function 은 현재 객체 정보를 포함한 function 이기 때문에 bind작업이 필요 없다

    //onRandomizeColor={this.setRandomColor}/>
    //함수 props 형식에 this.setRandomColor형식의 함수를 저장
    //실행(onClick이벤트)가 실행되면 밑의 함수 실행
    setRandomColor = () => {
        const color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ]
        console.log(color);
        this.props.handleSetColor(color);
        //props형태의 handlerSetColor(color)실행
        //mapDispatchToProps의 handleSetColor를 실행하면서 dispatch를 실행
        //dispatch를 실행하면 action과 함께 recucer실행
    }

    render(){
        const color = this.props.color;
        const style = {
            background : `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        }
        
        return (
            <div>
            <div style={style}>
                <Value number={this.props.number}/>
                <Control 
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}/>
            </div>
            </div>
        );
    }
}

//리덕스의 state를 이 컴포넌트와 연결한다

const mapStateToProps = (state) => {
    //state 는 그저 파라메터의 이름이며, 리덕스의 state를 의미함
    //어떠한 props가 리덕스의 어떤 state와 연결될 지 정하는 작업
    //state 는 action에서 만들어낸다(initState를 두고 거기서 필요작업 실행)
    return {
        number : state.counter.number,
        color : state.ui.color
    }
    //state의 값들이 컴포넌트의 number와 color로 연결된다<<
} 

const mapDispatchToProps = (dispatch) =>{
//이 함수에서 props를 생성하고, dispatch를 실행하여 엑션 실행 
    return {
        handleIncrement: () => { dispatch(actions.increment()) },
        //handleIncrement prop를 실행 하면 dispatch를 실행한다
        handleDecrement: () => { dispatch(actions.decrement()) },
        //액션을 dispatch하는 함수를 props로 연결한다
        handleSetColor : (color) => { dispatch(actions.setColor(color)) }
    }
   //return bindActionCreators(actions,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
//컴포넌트를 리덕스로 반환하는 또다른 함수를 반환함
//현재 컴포넌트를 리덕스로 연결하는 작업(state-redux store ,dispatch)
//dispatch에 연결(실행)하면 리듀서 실행