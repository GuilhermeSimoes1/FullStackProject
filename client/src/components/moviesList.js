import Card from "./card";

function MoviesList({movies}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {movies.map(movie => (
        <Card 
          key={movie.id}
          title={movie.title}
          genre={movie.genre}
          year={movie.year}
          director={movie.director}
          imageUrl={movie.imageUrl}
        />
      ))}
    </div>
  );
}
export default MoviesList;