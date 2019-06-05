import React,{Component} from 'react';

class Subject extends Component{
    render(){
        return (
            <header>
                {/* this.props.property name */}
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </header>
      );
    }
}

export default Subject;