import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Container,Typography,CircularProgress,Chip,Button,Box} from '@mui/material';

// TMDB API key retrieved from environment variables
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// MovieDetails component fetches and displays detailed information about a specific movie
const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL parameters
  const [movie, setMovie] = useState(null); // State to store movie details
  const [videoKey, setVideoKey] = useState(''); // State to store the YouTube video key for the trailer
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    // Function to fetch movie details and trailer video
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details and videos concurrently
        const [detailsRes, videoRes] = await Promise.all([
          axios.get(`${BASE_URL}/movie/${id}`, {
            params: { api_key: API_KEY },
          }),
          axios.get(`${BASE_URL}/movie/${id}/videos`, {
            params: { api_key: API_KEY },
          }),
        ]);

        setMovie(detailsRes.data);

        // Find the trailer video from the fetched videos
        const trailer = videoRes.data.results.find(
          (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
        );

        if (trailer) {
          setVideoKey(trailer.key); // Set the video key for the trailer
        }

        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchMovieDetails();
  }, [id]); // Re-run the effect when the movie ID changes 

  // Show a loading spinner while data is being fetched
  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', marginTop: '4rem' }}>
        <CircularProgress />
      </Container>
    );
  }

  // Show a message if the movie is not found
  if (!movie) {
    return (
      <Container sx={{ textAlign: 'center', marginTop: '4rem' }}>
        <Typography variant="h6">Movie not found.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      {/* Layout for movie details */}
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
        {/* Movie poster */}
        <Box>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ width: '100%', borderRadius: 8 }}
          />
        </Box>

        {/* Movie details */}
        <Box>
          {/* Movie title, release date, and overview */}
          <Typography variant="h4" gutterBottom>{movie.title}</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Release Date: {movie.release_date}
          </Typography>
          <Typography variant="body1" gutterBottom>{movie.overview}</Typography>

          {/* Genres */}
          <Box my={2}>
            <Typography variant="subtitle2" gutterBottom>Genres:</Typography>
            {movie.genres.map((genre) => (
              <Chip key={genre.id} label={genre.name} sx={{ mr: 1, mb: 1 }} />
            ))}
          </Box>

          {/* Movie rating */}
          <Typography variant="h6" color="primary" gutterBottom>
            Rating: {movie.vote_average}
          </Typography>

          {/* Button to watch the trailer */} 
          {videoKey && (
            <Button
              variant="contained"
              color="secondary"
              href={`https://www.youtube.com/watch?v=${videoKey}`} // Link to the trailer
              target="_blank" // Open in a new tab
              rel="noopener noreferrer"
            >
              Watch Trailer
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default MovieDetails;
