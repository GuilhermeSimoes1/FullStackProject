import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar";
import MoviesList from "./components/moviesList";

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5107/api/movies")
      .then (response => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch (error => {
        console.error("There was an error fetching the movies!", error);
      });
  }, []);


  return (
    <div>
      <Navbar />
      <MoviesList movies={movies} />
    </div>

  );
}

export default App;
