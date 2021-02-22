import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({movies, inputSearch, value, addMovie}) => {
  
  return (

    <div className="moviesList">
      {movies.filter (movie => 
      movie.title.toLowerCase().includes(inputSearch.toLowerCase())
      && 
      movie.rating >= value )
      
      .map (movie =>
      <MovieCard movies={movie} key={movies.id} isMovieCard={true}/>)
      }
      
      <MovieCard isMovieCard={false} addMovie={addMovie}/>
      </div>
      
  );
};

export default MovieList;
