import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieGrid from '../components/MovieGrid';
import { Typography } from '@mui/material';

// Favorites page displays the user's favorite movies
const Favorites = () => {
  // Access the favorites array from MovieContext
  const { favorites } = useContext(MovieContext);

  return (
    
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Your Favorites
      </Typography>

      {/* Check if there are any favorite movies */}
      {favorites.length > 0 ? (
        <MovieGrid movies={favorites} />  // Render the MovieGrid component with the favorite movies
      ) : (
        // Display a message if there are no favorite movies
        <Typography variant="body1">You have no favorite movies yet.</Typography>
      )}
    </div>
  );
};

export default Favorites;