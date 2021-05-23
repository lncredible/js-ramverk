import starImg from "./star.png";
import cancelImg from "./cancel.png";

const Movies = (props) => {

  const removeMovie = (event) => {
    event.parentElement.remove();
  };

  const renderStars = (amount) => {
    var stars = [];

    for (var i = 0; i < amount; i++) {
      stars[i] = <img key={i} src={starImg}></img>;
    }

    return stars;
  };

  return (
    <div className="col-md-12 results">
      <ul className="grades">
        {props.movies.length > 0 &&
          props.movies.map((movie, i) => {
            return (
              movie && (
                <li
                  data-grade={movie.movieGrade}
                  data-title={movie.movieTitle}
                  key={i}
                >
                  <p>{movie.movieTitle}</p>
                  <div>{renderStars(movie.movieGrade)}</div>

                  <img
                    onClick={(e) => removeMovie(e.target)}
                    src={cancelImg}
                  ></img>
                </li>
              )
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
