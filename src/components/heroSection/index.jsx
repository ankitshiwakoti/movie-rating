import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/apiServices';

const HeroSection = () => {
  // Initialize trendingMovies as an empty array
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies.results || []); // Ensure movies.results is an array or fallback to empty array
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
    getTrendingMovies();
  }, []);

  // Prevent rendering until we have movies to show
  if (!trendingMovies.length) return <div>Loading...</div>;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trendingMovies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trendingMovies.length) % trendingMovies.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {trendingMovies.map((movie, index) => (
        <div
          key={movie.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center p-6">
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">{movie.title}</h1>
              <p className="text-white text-lg max-w-2xl mx-auto mb-6">{movie.overview}</p>
              <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
      >
        &#10095;
      </button>
    </div>
  );
};

export default HeroSection;
