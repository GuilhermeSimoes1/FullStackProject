import Card from "./card";

function MoviesList({movies}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-14" style={{ marginTop: '40px' }}>
      {movies.map(movie => (
        <Card 
          id={movie.id}
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