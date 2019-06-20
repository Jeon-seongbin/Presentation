import React ,{Component} from 'react';
import Value from './Value'
import Control from './Control'
//import {connect, bindActionCreators } from './react-redux';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Counter extends Component {

    constructor(props){
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor(){
        const color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ]
        console.log(color);
        this.props.handleSetColor(color);

    }
    render(){
        const color = this.props.color;
        
        const style = {
            background : `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        }
        //console.log(color);
        //console.log(style);
        
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
    //state 는 그저 파라메터이고
    //컴포넌트의 state와는 다르다
    return {
        number : state.counter.number,
        color : state.ui.color
    }
    //state의 값들이 컴포넌트의 number와 color로 연결된다
} 

const mapDispatchToProps = (dispatch) => {
    
    return {
        handleIncrement: () => { dispatch(actions.increment()) },
        handleDecrement: () => { dispatch(actions.decrement()) },
        handleSetColor : (color) => { dispatch(actions.setColor(color)) }
    }
   //return bindActionCreators(actions,dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
//컴포넌트를 리덕스로 반환하는 또다른 함수를 반환함