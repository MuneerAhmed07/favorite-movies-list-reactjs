import React from 'react'

const MovieCard = ({movie, isFavorite, toggleFavorite}) => {
  return (
    <>
     <div className="movie-card">
        <h3>{movie}</h3>
        <button onClick={() => toggleFavorite(movie)}>
            {isFavorite ? "Remove from favorite" : "Add to Favorites"}
        </button>
    </div> 
    </>
  )
}

export default MovieCard;
