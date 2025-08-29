import { useEffect, useState } from "react";
import axios from "axios";

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
      <h1>Lista de Filmes</h1>
      <ul>
        {movies.map((movie, index) => (
        <li key={index}> 
          {JSON.stringify(movie)}
        </li>
        )
        )}  
      </ul>
    </div>

  );
}

export default App;
