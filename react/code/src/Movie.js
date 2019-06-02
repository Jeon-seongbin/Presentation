import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

//Does not have State Component(function Component)
function Movie({title, poster}){
    return(
        <div>
            <MoviePoster poster={poster}/>
            <h1>hello movie {title}</h1>
        </div>
    );
}

function MoviePoster({poster}){
    return (
        <img src={poster} alt="movie poster" />
    );
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

export default Movie;