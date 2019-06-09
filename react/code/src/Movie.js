import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

///////////////////////////////////////////////////
//                  Main Component
///////////////////////////////////////////////////
//Does not have State Component(function Component)
function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Columns">
                <div className="Movie__Info">
                    <h3>{title}</h3>
                    <div className="Moive__Genres">
                            {genres.map((genre,index) => <MovieGenre genre={genre} key={index}/>)}
                    </div>
                    <p className="Movie__Synopsis">
                        {synopsis}
                    </p>
                </div>
            </div>
        </div>
    );
}

{/* className은 정상적인 css에서 class를 말한다
JSX에서는 className이라고 씀 */}

///////////////////////////////////////////////////
//                  Sub Component
///////////////////////////////////////////////////
function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt}/>
    );
}

function MovieGenre({genre}){
    return (
        <span className="Movie__genre">{genre} </span>
    )
}

///////////////////////////////////////////////////
//                  PropTypes
///////////////////////////////////////////////////
MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre : PropTypes.string.isRequired
}

export default Movie;