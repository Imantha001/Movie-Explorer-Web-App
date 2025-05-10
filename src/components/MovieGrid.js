import React from 'react';
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';

// MovieGrid component displays a grid of movie cards
const MovieGrid = ({ movies }) => (
  <Grid container spacing={2}>
    {/* Map through the movies array and render a MovieCard for each movie */}
    {movies.map((movie) => (
      <Grid item xs={6} sm={4} md={3} key={movie.id}>

        {/* MovieCard component displays individual movie details */}
        <MovieCard movie={movie} />
      </Grid>
    ))}
  </Grid>
);

export default MovieGrid;