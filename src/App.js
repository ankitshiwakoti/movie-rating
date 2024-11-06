import React, { useState, useEffect } from 'react';
import { fetchPopularMovies } from './services/apiServices'; // Assuming this file is in the services folder

const App = () => {
  // State to store popular movies
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    const getMovies = async () => {
      try {
        const popularMovies = await fetchPopularMovies();
        console.log('Popular Movies:', popularMovies); // Log the data to check the response
        if (popularMovies && popularMovies.length > 0) {
          setMovies(popularMovies); // Set movies data in state
        } else {
          setError('No popular movies found');
        }
      } catch (error) {
        setError('Failed to fetch movies');
        console.error(error); // Log the error for debugging
      } finally {
        setLoading(false); // Set loading to false after the API request
      }
    };

    getMovies(); // Call the function to fetch movies
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  if (error) {
    return <div>{error}</div>; // Show error message if something goes wrong
  }

  return (
    <div className="App">
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {movies.length === 0 ? (
          <p>No movies found</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
              <p>{movie.overview}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
