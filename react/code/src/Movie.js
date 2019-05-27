import React ,{Component} from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster/>
                <h1>hello movie</h1>
            </div>
        );
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"/>
        );
    }
}

export default Movie;