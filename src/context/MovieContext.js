import React, { createContext, useState } from 'react';

// MovieContext provides state and functions related to movie favorites and search
export const MovieContext = createContext();

// MovieProvider component provides movie-related state and functions to its children
const MovieProvider = ({ children }) => {

// State to store the list of favorite movies
// Initialize from localStorage or set to an empty array if not available
const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);

// State to store the last search query
// Initialize from localStorage or set to an empty string if not available
const [lastSearch, setLastSearch] = useState(() => localStorage.getItem('lastSearch') || '');

// Function to add a movie to the favorites list
const addFavorite = (movie) => {
  // Check if the movie is already in the favorites list
  if (!favorites.some((fav) => fav.id === movie.id)) {
    const updated = [...favorites, movie]; // Add the movie to the favorites list
    setFavorites(updated);  // Update the state with the new favorites list
    localStorage.setItem('favorites', JSON.stringify(updated)); // Save the updated favorites list to localStorage
  }
};

// Function to remove a movie from the favorites list
const removeFavorite = (id) => {
  const updated = favorites.filter((m) => m.id !== id); // Filter out the movie by its ID
  setFavorites(updated); // Update the state
  localStorage.setItem('favorites', JSON.stringify(updated)); // Save the updated  list to localStorage
}; 

  // Provide the state and functions to child components
  const value = {
    favorites, // List of favorite movies
    addFavorite, // Function to add a movie to favorites
    removeFavorite, // Function to remove a movie from favorites
    lastSearch, // Last search query
    setLastSearch: (query) => { 
      setLastSearch(query); // Update the last search query state
      localStorage.setItem('lastSearch', query); // Save the last search query to localStorage
    },
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

export default MovieProvider;