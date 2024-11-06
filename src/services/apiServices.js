import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
console.log("api ho", apiKey);
// const apiKey = 'aa8049ed2742afdf98e0d6923ea3ffac';
const baseUrl = 'https://api.themoviedb.org/3';


// Function to fetch popular movies
export const fetchPopularMovies = async () => {
  try {
      console.log("api key", apiKey);
    // Log the URL to confirm it's correct
    const url = `${baseUrl}/movie/popular?api_key=${apiKey}`;
    // const check=`${baseUrl}/api_key=${apiKey}`;
    // console.log("trying to check",check);
    console.log('Request URL:', url);
    
    // Make the API call
    const response = await axios.get(url);
    console.log('API Response:', response.data); // Log the entire response
    return response.data.results; // Return the movie results
  } catch (error) {
    console.error('Error fetching popular movies:', error.response ? error.response.data : error);
    return []; // Return an empty array in case of error
  }
};
