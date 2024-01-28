
import Movie from './Movie';

const Movies = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <Movie
          key={index}
          name={movie.name}
          year={movie.year}
          rating={movie.rating}
          image={movie.image}
        />
      ))}
    </div>
  );
};

export default Movies;
