import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/tmdb';
import { Typography } from '@mui/material';

// MoviePage component displays detailed information about a specific movie
const MoviePage = () => {
  const { id } = useParams(); // Get the movie ID from the URL parameters
  const [movie, setMovie] = useState(null); // State to store movie details

  useEffect(() => {
    // Fetch movie details when the component mounts or when the movie ID changes
    fetchMovieDetails(id).then((res) => setMovie(res.data));
  }, [id]);

  // Display a loading message while the movie details are being fetched
  if (!movie) return <Typography>Loading...</Typography>;

  return (
    <div style={{ padding: 20 }}>
      {/* Display the movie title */}
      <Typography variant="h4">{movie.title}</Typography>

      {/* Display the movie overview */}
      <Typography variant="body1">{movie.overview}</Typography>

      {/* Display the movie genres */}
      <Typography variant="body2">
      Genres: {movie.genres.map(g => g.name).join(', ')}</Typography>
    </div>
  );
};

export default MoviePage;