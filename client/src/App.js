import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar";
import MoviesPage from "./pages/MoviesPage";

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
      <MoviesPage movies={movies} />
    </div>

  );
}

export default App;
