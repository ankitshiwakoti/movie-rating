import React, { useEffect, useState } from "react";
import { fetchAllMovies } from "../../services/apiServices"; // Make sure your fetchAllMovies function is updated

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Track the current page

  useEffect(() => {
    const getMovies = async () => {
      try {
        const allMovies = await fetchAllMovies(page); // Fetch movies for the current page
        setMovies(allMovies); // Update state with the movies
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false); // Stop loading if an error occurs
      }
    };

    getMovies(); // Call the API to fetch movies whenever the page changes
  }, [page]); // Dependency on `page` means it'll fetch data when the page changes

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle empty movie list
  if (movies.length === 0) {
    return <div>No movies found</div>;
  }

  return (
    <div className="movies-list">
      <h1>All Movies</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="pagination">
        <button
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))} // Go to previous page (min 1)
          disabled={page === 1} // Disable previous button on first page
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)} // Go to next page
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
