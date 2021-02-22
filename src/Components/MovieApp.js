import React, { useState } from "react";
import FilterByName from "./FilterByName/FilterByName";
import Footer from "./Footer/Footer";
import "../App.css";
import Raiting from "./Raiting/Raiting";
import { MovieData } from "./MovieData";
import MovieList from "./MovieList/MovieList";
import AddTrailer from "./AddTrailer/AddTrailer";
import { Switch, Route } from "react-router-dom";



const MovieApp = () => {
  const [movies, setMovies] = useState(MovieData);
  const [inputSearch, setInputSearch] = useState("");
  const [value, setValue] = useState(1);
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MovieApp} />
        <Route path="/AddTrailer" component={AddTrailer} />
      </Switch>

      <div className="movieApp">
        <FilterByName setInputSearch={setInputSearch} />
        <Raiting FilterRaiting={true} setValue={setValue} value={value} />
      </div>
      <MovieList
        movies={movies}
        inputSearch={inputSearch}
        value={value}
        addMovie={addMovie}
      />
      <Footer />
    </div>
  );
};

export default MovieApp;
