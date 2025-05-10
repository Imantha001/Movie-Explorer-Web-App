import axios from 'axios';

// TMDB API key retrieved from environment variables
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

// Base URL for TMDB API
const BASE_URL = 'https://api.themoviedb.org/3';

// Fetch trending movies for the week
// Accepts an optional `page` parameter for pagination (default is 1)
export const fetchTrendingMovies = (page = 1) =>
  axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`);

// Fetch a list of popular movies
export const fetchPopularMovies = () =>
  axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

// Search for movies by title
// Accepts a `query` string and an optional `page` parameter for pagination (default is 1)
export const searchMovies = (query, page = 1) =>
  axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);

// Fetch detailed information about a specific movie
// Accepts a movie `id` and includes additional data such as videos and credits
export const fetchMovieDetails = (id) =>
  axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`);