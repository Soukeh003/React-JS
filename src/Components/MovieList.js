import React from 'react'
import MovieCard from './MovieCard'
import AddMovie from './AddMovie'
import { Link } from 'react-router-dom'

const MovieList = ({movies , filterTitel , filterRating , setMovies }) => {
  return (
    <div>
      <div style={{margin :"2rem"}}>
        <AddMovie setMovies={setMovies} movies={movies}/>
      </div>
      <div className='movie-list'>
        {movies
        .filter((movie) => 
            movie.title
            .toLowerCase()
            .trim()
            .includes(filterTitel.toLowerCase().trim()) && 
            movie.rating >= filterRating
        )
        .map((movie) => {
            return (
              <div key={movie.id}>
                <Link to={`${movie.id}`}>
                  <MovieCard key={movie.id} movie={movie}/>
                </Link>
              </div>
            )
        })
      }
    </div>
    </div>
  )
}

export default MovieList