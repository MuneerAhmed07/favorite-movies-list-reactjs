import { useState } from 'react';
import MovieCard from './MovieCard';

const MoiveFav = () => {

    const [favorite, setFavorite] = useState([]);

    const movies = ["Insception", "Interstellar", "The Dark Knight", "Avatar"];

    // Toggle movie in and out Method
    const toggleFavorite = (movie) => {
        setFavorite((prevFavorite) =>
            prevFavorite.includes(movie) ? prevFavorite.filter((fav) => fav !== movie) : [...prevFavorite, movie]
        )
    }

    console.log(favorite);

    return (
        <>
            <div className="favorite-movies">
                <h2>All Movies</h2>
                <div className="movies-list">
                    {
                        movies.map((movie) => (
                            <MovieCard
                                key={movie}
                                movie={movie}
                                toggleFavorite={toggleFavorite}
                                isFavorite={favorite.includes(movie)}
                            />
                        ))
                    }
                </div>

                <h2 className='fav-heading'>Favorite Movies</h2>
                <ul className='favorites-list'>
                    {
                        favorite.map((movie) => (
                            <li key={movie}>
                                {movie}
                                <button onClick={() => toggleFavorite(movie)}>Remove</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default MoiveFav;
