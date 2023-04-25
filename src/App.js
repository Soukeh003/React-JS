import { useState } from "react";
import "./App.css";
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList";
import { movieData } from "./Data";
import { Routes , Route } from "react-router-dom";
import MovieTrailer from "./Components/Movietrailer";




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
      <Routes>
        <Route path="/" element={<MovieList setMovies={setMovies} movies={movies} filterTitel={filterTitel} filterRating={filterRating} />} />
        <Route path="/:id" element={<MovieTrailer movies={movies} />}/>
      </Routes>
    </div>
  );
}

export default App;
