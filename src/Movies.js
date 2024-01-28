
import Movie from './Movie';

const Movies = ({ movies }) => {
    return (
      <div className="movies-grid">
        {movies.map((movie, index) => (
          <Movie key={index} {...movie} />
        ))}
      </div>
    );
  };

  export default Movies;
