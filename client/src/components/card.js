import React from "react";
import MovieDetailPage from "../pages/MovieDetailPage";
import { useNavigate } from "react-router-dom";

function Card({id,title, genre, year,director,imageUrl}) {

    const API_BASE = "http://localhost:5107"
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/movies/${id}`);
    }
    
  return (

<div className="max-w-xs rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition" onClick={handleClick}>
    <img src={`${API_BASE}${imageUrl}`||"/images/placeholder.png"}
        alt={title}
        className="w-full h-64 object-cover"
    />
    <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{genre} • {year}</p>
        <p className="text-sm text-gray-500 mt-1">Directed by {director}</p>
    </div>
</div>

);
}
export default Card;