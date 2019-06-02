import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{
    
    state = {
        greeting : 'hello'
    }

    componentDidMount(){
        setTimeout(()=> {
            this.setState({
                greeting : 'hello again'
            });
        },3000);
    }

    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
    }

    render(){
        return(
            <div>
                {this.state.greeting}
                <MoviePoster poster={this.props.poster}/>
                <h1>hello movie {this.props.title}</h1>
            </div>
        );
    }
}

class MoviePoster extends Component{

    static propTypes ={
        poster : PropTypes.string.isRequired
    }

    render(){
        return(
          <img src={this.props.poster} />
        );
    }
}

export default Movie;