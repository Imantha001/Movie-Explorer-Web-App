import React, { useEffect, useState, useContext, useCallback } from 'react';
import { fetchTrendingMovies, searchMovies } from '../api/tmdb';
import { MovieContext } from '../context/MovieContext';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import MovieGrid from '../components/MovieGrid';
import { Typography, CircularProgress, Box, Button } from '@mui/material';

// Home page displays trending movies or search results with filtering and pagination
const Home = () => {
  const [movies, setMovies] = useState([]); // State to store all movies
  const [filteredMovies, setFilteredMovies] = useState([]); // State to store filtered movies
  const [query, setQuery] = useState(''); // State to store the search query
  const [loading, setLoading] = useState(false);  // State to track loading status
  const [page, setPage] = useState(1);  // State to track the current page for pagination
  const [hasMore, setHasMore] = useState(true); // State to track if there are more movies to load
  const { setLastSearch } = useContext(MovieContext); // Access `setLastSearch` from MovieContext

  // Function to load movies based on the search query or trending movies
  const loadMovies = useCallback(() => {
    setLoading(true); // Set loading to true when fetching data
    const fetchMovies = query.trim() 
      ? searchMovies(query, page) // Fetch search results if a query is provided
      : fetchTrendingMovies(page); // Fetch trending movies if no query is provided

    fetchMovies
      .then((res) => {
        const newMovies = res.data.results;  // Extract movie results from the API response
        setMovies((prevMovies) => [...prevMovies, ...newMovies]); // Append new movies to the existing list
        setFilteredMovies((prevMovies) => [...prevMovies, ...newMovies]);  // Update filtered movies
        setHasMore(newMovies.length > 0); // Check if there are more movies to load
      })
      .finally(() => setLoading(false)); // Set loading to false after fetching data
  }, [query, page]);

  // Load movies when the component mounts or when `loadMovies` changes
  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  // Handle search action
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery); // Update the search query
    setLastSearch(searchQuery);  // Update the last search in MovieContext
    setPage(1); // Reset to the first page
    setMovies([]);  // Clear the current movie list
    setFilteredMovies([]); // Clear the filtered movie list
    setHasMore(true); // Reset the hasMore state
  };

  // Handle filtering action
  const handleFilter = ({ genre, year, rating }) => {
    let filtered = movies; // Start with all movies

    // Filter by genre if a genre is selected
    if (genre) {
      filtered = filtered.filter((movie) =>
        movie.genre_ids.includes(getGenreId(genre))
      );
    }

  // Filter by year if a year is selected
  if (year) {
    filtered = filtered.filter((movie) => {
      const movieYear = new Date(movie.release_date).getFullYear();
      return movieYear === parseInt(year, 10);
    });
  }

    // Filter by rating if a rating is selected
    if (rating) {
      filtered = filtered.filter((movie) => movie.vote_average >= parseFloat(rating));
    }

    setFilteredMovies(filtered); // Update the filtered movies state
  };

  // Function to map genre names to their corresponding IDs
  const getGenreId = (genreName) => {
    const genres = {
      Action: 28,
      Adventure: 12,
      Animation: 16,
      Comedy: 35,
      Crime: 80,
      Documentary: 99,
      Drama: 18,
      Family: 10751,
      Fantasy: 14,
      History: 36,
      Horror: 27,
      Music: 10402,
      Mystery: 9648,
      Romance: 10749,
      ScienceFiction: 878,
      TVMovie: 10770,
      Thriller: 53,
      War: 10752,
      Western: 37,
    };
    return genres[genreName];
  };

  return (
    <div style={{ padding: 20 }}>
      {/* Search bar for searching movies */}
      <SearchBar onSearch={handleSearch} /> 

      {/* Filter bar for filtering movies */}
      <FilterBar onFilter={handleFilter} />

      {/* Page title */}
      <Typography variant="h4" gutterBottom>
        {query.trim() ? 'Search Results' : 'Trending Movies'}
      </Typography>

      {/* Grid to display movies */}
      <MovieGrid movies={filteredMovies} />

      {/* Loading spinner displayed while fetching data */}
      {loading && (
        <Box display="flex" justifyContent="center" mt={2}>
          <CircularProgress />
        </Box>
      )}

      {/* Load more button displayed if there are more movies to load */}
      {hasMore && !loading && (
        <Box display="flex" justifyContent="center" mt={2}>
          <Button variant="contained" onClick={() => setPage((prev) => prev + 1)}>
            Load More
          </Button>
        </Box>
      )}
    </div>
  );
};

export default Home;