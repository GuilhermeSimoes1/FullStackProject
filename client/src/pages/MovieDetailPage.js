import React from "react";

function MovieDetailPage({ title, genre, year, director, imageUrl, description }) {
    const API_BASE = "http://localhost:5107";
    return (
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto mt-10">

            <div className="md:w-1/2 flex-shrink-0">
                <img
                    src={imageUrl ? `${API_BASE}${imageUrl}` : "/images/placeholder.png"}
                    alt={title}
                    className="object-cover w-full h-80 md:h-full"
                />
            </div>

            <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                    <p className="text-gray-700 mb-6">{description}</p>
                </div>
                <div className="mt-6">
                    <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Genre:</span> {genre}</p>
                    <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Year:</span> {year}</p>
                    <p className="text-sm text-gray-600"><span className="font-semibold">Director:</span> {director}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailPage;