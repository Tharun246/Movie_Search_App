import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import './css/movies.css';

const Movies = () => {
  const URL = "https://www.omdbapi.com/?apikey=9c7be92c";
  const [movies, setMovies] = useState([]);

  const getMovies = async (title) => {
    const data = await fetch(`${URL}&s=${title}`);
    const resp = await data.json();
    setMovies(resp.Search);
  };

  useEffect(() => {
    getMovies('avengers');
  }, []);

  return (
    <div className='container'>
      <p>{Movies.length}</p>
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          name={movie.Title}
          poster={movie.Poster}
          type={movie.Type}
          year={movie.Year}
        />
      ))}
    </div>
  );
};

export default Movies;
