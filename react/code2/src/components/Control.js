import React,{Component} from 'react';

class Control extends Component{
    render(){
        return (
            <div>
                Control
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>random</button>
            </div>
        )
    }
}

export default Control;