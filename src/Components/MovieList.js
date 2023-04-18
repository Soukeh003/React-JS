import React from 'react'
import MovieCard from './MovieCard'
import AddMovie from './AddMovie'

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
            return <MovieCard key={movie.id} movie={movie}/>
        })
        }
    </div>
    </div>
  )
}

export default MovieList