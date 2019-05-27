import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js'

function App() {
  return (
    <div className="App">
    <Movie/>
    <Movie/>
    <Movie/>
    <Movie/>
    <Movie/>
    <Movie/>
    <Movie/>
    
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
