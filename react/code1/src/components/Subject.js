import React,{Component} from 'react';

class Subject extends Component{
    render(){
        return (
            <header>
                {/* this.props.property name */}
                <h1>
                    <a href="/" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage();
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