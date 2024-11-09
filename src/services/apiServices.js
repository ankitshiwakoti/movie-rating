import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
console.log("api ho", apiKey);

const baseUrl = 'https://api.themoviedb.org/3';


// Fetching Popular Movies
export const fetchTrendingMovies = async () => {
  try {
      console.log("api key", apiKey); 
    const url = `${baseUrl}/movie/popular?api_key=${apiKey}`;  
    console.log('Request URL:', url);
    // Make the API call
    const response = await axios.get(url);
    console.log('API Response popular:', response.data); // Log the entire response
    return response.data.results; // Return the movie results
  } catch (error) {
    console.error('Error fetching popular movies:', error.response ? error.response.data : error);
    return []; // Return an empty array in case of error
  }
};

// fetching all movie
export const fetchAllMovies = async (page) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}&language=en-US`
    );
    return response.data.results; // Return only the list of movies from the response
  } catch (error) {
    console.error("Error fetching movies:", error);
    return []; // Return an empty array on error
  }
};
