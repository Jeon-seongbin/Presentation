import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js'

const movies =[
  {
    title : 'Metrix',
    poster :  'https://avatars1.githubusercontent.com/u/9919?s=200&v=4'
  },
  {
    title :  'full metal jacket',
    poster :  'https://cdn-images-1.medium.com/max/1600/1*Z55pTi7p9T9HyTpDBtSVGg.png'
  },
  {
    title : 'old boy',
    poster : 'https://en.wikipedia.org/wiki/File:Firefox_Logo,_2017.svg'
  },
  {
    title : 'star wars',
    poster : 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp13/space/mbp13-space-select-201807?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1529520054457'
  }
];

function App() {
  return (
    <div className="App">
    
      {movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index} />
      })}
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

export default App;
