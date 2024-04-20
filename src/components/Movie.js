import React, { useState, useEffect } from 'react';
import '../css/Movie.css';
import { ArrowBigRight, ArrowBigLeft } from 'lucide-react';
import def from '../interstellar.jpg';
const Movie = () => {
    const [Movies, setMovies] = useState([]);
    const [Page, setPage] = useState(1);
    const [TotalPages, setTotalPages] = useState(1); 
    const Url = "https://www.omdbapi.com/?apikey=c5fbc3db";

    const getData = async (title, page) => {
        const resp = await fetch(`${Url}&s=${title}&page=${page}`);
        const resp_data = await resp.json();

        console.log(resp_data);
        setMovies(resp_data.Search);
        setTotalPages(Math.ceil(parseInt(resp_data.totalResults) / 10));
    };

    useEffect(() => {
        getData('rrr', Page);
    }, [Page]);

    const pageIncrement = () => {
        setPage((prevPage) => Math.min(prevPage + 1, TotalPages)); 
    };

    const pageDecrement = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };
 
    console.log(Page);
    return (
        <>
            <div className='container'>
                {Movies && Movies.map((movie) => (

                    <div className="movie-preview" key={movie.imdbID}>
                        <div className='movie-poster'>
                          {console.log(def)}
                           <img src={movie.Poster?movie.Poster:def} alt="" className='poster' />
                        </div>
                        <div className="movie-info">
                            <div className="info">
                                <p>{movie.Type}</p>
                                <p>{movie.Year}</p>
                            </div>
                            <div className="movie-title">
                                <p className="title">{movie.Title}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="pagination">
                  {Movies && 
                  <>
                    <button className='prev-btn btn' onClick={pageDecrement} disabled={Page === 1}>
                        <ArrowBigLeft className='right-arrow' />Prev
                    </button>
                    <button className='next-btn btn' onClick={pageIncrement} disabled={Page === TotalPages}>
                        Next <ArrowBigRight className='right-arrow'/>
                    </button>
                    </>
                  }
                </div>
                
            </div>
        </>
    );
};

export default Movie;
