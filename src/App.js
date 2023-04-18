import { useState } from "react";
import "./App.css";
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList";
import { movieData } from "./Data";

function App() {
  const [movies, setMovies] = useState(movieData);
  const [filterTitel, setFilterTitel] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  return (
    <div>
      <Filter
        setFilterTitel={setFilterTitel}
        filterRating={filterRating}
        setFilterRating={setFilterRating}
      />
      <MovieList
        setMovies={setMovies}
        movies={movies}
        filterTitel={filterTitel}
        filterRating={filterRating}
      />
    </div>
  );
}

export default App;
