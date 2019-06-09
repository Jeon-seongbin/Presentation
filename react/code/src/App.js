import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js'

class App extends Component{

  //state
  state = {}

  componentDidMount(){
   this._getMovies();
  }

  _getMovies = async () => {
    //call api의 return value를 movies에 set
    //아 험수를 Promise로 만드는 async
    //비동기 함수로 둔다

    const movies = await this._callApi();
    //callApi 기능이 '끝나는 걸' 기다림 완료 되기를 기다림
    //Promise를 쓰고 그 결과값을 받기를 기다림
    //일반함수 앞에 await을 넣어도 아무런 상관이 없다
    //꼭 Promise를 리턴하는 함수가 아니어도 await을 쓸 수 있다
    
    //const movies = this._callApi();
    //await를 안 썻을 경우 현재 리엑트의 state에 값이 안 들어가 있는 상태로 this.state가 실행이
    //되어버리기 때문에 react코드에서 에러가 난다
    this.setState({
      movies: movies
    });
  }

  _callApi = () => {
    //This URL is change every month I think
    const URL = 'https://yts.lt/api/v2/list_movies.json?sort_by=download_count';
    return fetch(URL)
    //fetch를 하면 promise라는 객체가 나온다
    //promise 를 쓰면 then을 쓸 수 있다
    .then(response => response.json())
    //then 은 promise의 결과값 이다
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) =>{
      //컴포넌트에 index를 이용하는것은 느리기 때문에 안좋다
      return <Movie 
        title={movie.title}
        poster={movie.medium_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
        key={movie.id}
      />
    });
    return movies;
  }

  render(){
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "loading"}
      </div>
    );
  }
}

export default App;