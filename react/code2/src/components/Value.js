import React ,{Component}from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  number : PropTypes.number
}

const defaultPorps = {
  number : -1
}

class Value extends Component{

  render(){
    return (
      <div>
          <h1>{this.props.number}</h1>
      </div>
    );
  }
}

Value.propTypes = propTypes;
Value.defaultPorps = defaultPorps;

export default Value;