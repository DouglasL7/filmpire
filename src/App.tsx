import React from 'react';
import { useEffect } from 'react';

import './App.css';
import { BsSearch } from "react-icons/bs"

const API_URL = 'http://www.omdbapi.com?apikey=bb175bef';

const movie1 = {
  "Title": "Superman/Batman: Apocalypse",
  "Year": "2010",
  "imdbID": "tt1673430",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
};

const App = () => {

  const searchMovies = async (title:any) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    console.log(data);
    
  };

  useEffect(() => {
    searchMovies("Superman");
  },[]);

  return(
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input 
          placeholder='Search for movies'
          value="Superman"
          onChange={() => {}}
        />
        <BsSearch
          onClick={() => {}}
        />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img 
              src={movie1.Poster} 
              alt="Superman" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;