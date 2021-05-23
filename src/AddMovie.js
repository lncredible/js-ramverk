import React, { useState } from "react";

const AddMovie = (props) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieGrade, setMovieGrade] = useState("Välj betyg här...");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setMovieTitle(event.target.value);
  };

  const handleGradeChange = (event) => {
    setMovieGrade(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let warningMessage = "Skriv in en titel för att fortsätta..";

    let success = true;

    if (movieTitle.length <= 0 || movieTitle === warningMessage) {
      setMovieTitle(warningMessage);
      success = false;
    }
    if (movieGrade === "Välj betyg här...") {
      setErrorMessage("Välj ett betyg för att fortsätta..");

      success = false;
    }

    if (!success) {
      return;
    }

    setErrorMessage("");

    props.addMovieGrades({
      movieTitle: movieTitle,
      movieGrade: movieGrade,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="filmreview" id="filmreview">
      <div className="form-group">
        <label htmlFor="movieTitle">Titel:</label>
        <input
          value={movieTitle}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="movieTitle"
          placeholder="Titel här.."
        />
      </div>
      <label htmlFor="movieGrade">Betyg:</label>

      <select
        value={movieGrade}
        onChange={handleGradeChange}
        className="form-control"
        id="movieGrade"
      >
        <option disabled value="Välj betyg här..." disabled>
          Välj betyg här...
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <p id="err">{errorMessage}</p>

      <button
        style={{ backgroundColor: "green", marginTop: "10px" }}
        type="submit"
        className="btn btn-primary"
      >
        Spara film
      </button>
    </form>
  );
};

export default AddMovie;
