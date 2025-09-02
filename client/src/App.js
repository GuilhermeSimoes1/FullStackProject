import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar";
import MoviesPage from "./pages/MoviesPage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MovieDetailPage from "./pages/MovieDetailPage";

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
      <Router>
          <Navbar />

        <Routes>
          <Route path="/" element={<MoviesPage movies={movies} />} />
           <Route path="/movies" element={<MoviesPage movies={movies} />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
