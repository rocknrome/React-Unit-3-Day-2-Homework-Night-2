
const Movie = ({ name, year, rating, image }) => {
    return (
      <div className="movie">
        <img src={image} alt={name} className="movie-image" />
        <div className="movie-info">
          <h2 className="movie-title">{name}</h2>
          <p className="movie-year">Year: {year}</p>
          <p className="movie-rating">Rating: {rating}</p>
        </div>
      </div>
    );
  };

  export default Movie;
