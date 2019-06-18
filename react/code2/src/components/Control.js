import React,{Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
 
}

function createWarning(funcName){
    return () => console.warn(funcName + `is not defined`);
}

const defaultProps = {
    onPlus : () => createWarning("onPlus"),
    onSubtract : () => createWarning("onSubtract"),
    onPluonRamdomizeColors : () => createWarning("onPluonRamdomizeColors"),
}

class Control extends Component{
    render(){
        return (
            <div>
                Control
                <button onclick={this.props.onPlus}>+</button>
                <button onclick={this.props.onSubtract}>-</button>
                <button onclick={this.props.onRamdomizeColor}>random</button>
            </div>
        )
    }
}

export default Control;