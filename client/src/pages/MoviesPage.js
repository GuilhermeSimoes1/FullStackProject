import React from 'react';
import MoviesList from '../components/moviesList';

function MoviesPage({ movies }) {
    return(
        <div className="container mx-auto p-4">
            <MoviesList movies={movies} />
        </div>
    );

}export default MoviesPage;
    