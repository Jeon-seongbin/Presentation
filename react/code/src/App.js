import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js'

class App extends Component{

  state ={
  }

  componentDidMount(){
   this._getMovies();
  }
/*
  async _getMovies = () => {
    await movies = await this._callApi();
    //callApi 기능이 '끝나는 걸' 기다림

  }
*/

  _callApi = () => {
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(data =>{
      console.log(data);
    })
    .catch(err => console.log(err));
  }


  _renderMovies = () => {
    const movies = this.state.movies.map( (movie, index) =>{
      return <Movie title={movie.title} poster={movie.poster} key={index} /> 
    });
    return movies;
  }
  render(){
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "loading"}
        <nav>
          <ol>
            <li>html</li>
            <li>javascript</li>
            <li>css</li>
          </ol>
        </nav>
        <article>
          <h2>welcome</h2>
          hello react
        </article>
      </div>
    );
  }
}
export default App;
