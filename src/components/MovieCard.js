import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

// MovieCard component displays individual movie details in a card format
// Includes movie poster, title, release year, rating, and a favorite toggle button
const MovieCard = ({ movie }) => {

  // Hook to navigate to the movie details page
  const navigate = useNavigate();

  // Access favorite-related functions and state from MovieContext
  const { addFavorite, removeFavorite, favorites } = useContext(MovieContext);

  // Check if the movie is already in the favorites list
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  // Handle the toggle action for adding/removing a movie from favorites
  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(movie.id); // Remove the movie from favorites if it is already a favorite
    } else {
      addFavorite(movie); // Add the movie to favorites if it is not already a favorite
    }
  };

  return (
    // Card component to display movie details
    <Card sx={{ cursor: 'pointer' }}>

      {/* Movie poster image */}
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Image URL for the movie poster
        alt={movie.title}
        onClick={() => navigate(`/movie/${movie.id}`)} // Navigate to the movie details page on click
      />


      <CardContent>
        {/* Movie title and release year */}
        <Typography variant="h6">{movie.title}</Typography>
        <Typography variant="body2">
          {movie.release_date?.slice(0, 4)} | ⭐ {movie.vote_average}
        </Typography>

        {/* Button to toggle favorite status */}
        <Button
          variant="contained"
          color={isFavorite ? 'secondary' : 'primary'}
          onClick={handleFavoriteToggle} // Handle favorite toggle action
          sx={{ marginTop: 1 }}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;