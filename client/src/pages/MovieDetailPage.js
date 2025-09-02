import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function MovieDetailPage() {

    const API_BASE = "http://localhost:5107";
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`${API_BASE}/api/movies/${id}`)
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the movie details!", error);
            });
    }, [id]);

    if (!movie) {
        return <div className="container mx-auto p-4">Loading...</div>;
    }

    return (
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto mt-10">

            <div className="md:w-1/2 flex-shrink-0">
                <img
                    src={movie.imageUrl ? `${API_BASE}${movie.imageUrl}` : "/images/placeholder.png"}
                    alt={movie.title}
                    className="object-cover w-full h-80 md:h-full"
                />
            </div>

            <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
                    <p className="text-gray-700 mb-6">{movie.description}</p>
                </div>
                <div className="mt-6">
                    <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Genre:</span> {movie.genre}</p>
                    <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Year:</span> {movie.year}</p>
                    <p className="text-sm text-gray-600"><span className="font-semibold">Director:</span> {movie.director}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailPage;