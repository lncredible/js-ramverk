import React, {useState } from "react";
import AddMovie from "./AddMovie";
import Movies from "./Movies";
import OrderByAlphaButton from "./OrderByAlphaButton";
import OrderByGradeButton from "./OrderByGradeButton";

const MovieApplication = () => {
  const [state, setState] = useState({
    movies: [],
    sortBy: "",
  });

  const handleSortClick = (sortBy) => {
    let sortedMovies = [];
    if (sortBy === "alphaSort") {
      sortedMovies = { ...state }.movies.sort((movieA, movieB) => {
        let a = movieA.movieTitle;
        let b = movieB.movieTitle;

        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (sortBy === "gradesSort") {
      sortedMovies = { ...state }.movies.sort((movieA, movieB) => {
        let a = movieA.movieGrade;
        let b = movieB.movieGrade;

        return b - a;
      });
    }
    setState({
      ...state,
      movies: [...sortedMovies],
      sortBy: sortBy,
    });
  };

  const addMovieGrades = (theMovie) => {
    setState({
      ...state,
      movies: [...state.movies, theMovie],
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div style={{ textAlign: "center" }} className="col-md-12">
          <h2>Min filmlista</h2>
        </div>
        <div style={{ textAlign: "center" }} className="col-md-12">
          <h4>Lägg till en film</h4>
        </div>
      </div>
      <hr />
      <AddMovie addMovieGrades={addMovieGrades} />

      <div className="row filmreview">
        <div className="col-md-12">
          <h2>Inlagda filmer</h2>
        </div>

        <Movies movies={state.movies} />

        <div className="col-md-12">
          <OrderByAlphaButton onClick={handleSortClick} />
          <OrderByGradeButton onClick={handleSortClick} />
        </div>
      </div>
    </div>
  );
};

export default MovieApplication;
