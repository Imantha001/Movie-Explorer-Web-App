import React, { useState } from 'react';
import { Box, TextField, MenuItem, Button } from '@mui/material';

// FilterBar component allows users to filter movies by genre, year, and rating
// `onFilter` is a callback function passed as a prop to handle the filter criteria
const FilterBar = ({ onFilter }) => {
    // State variables to store the selected filter values
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');

    // Function to handle the "Apply" button click
    // Calls the `onFilter` callback with the selected filter values
    const handleFilter = () => {
        onFilter({ genre, year, rating });
    };

    return (
        // Box container to layout the filter inputs and button
        <Box display="flex" gap={2} mb={2}>
            {/* Dropdown for selecting movie genre */}
            <TextField
                select
                label="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                fullWidth
            >
                {/* Menu items for different genres */}
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Action">Action</MenuItem>
                <MenuItem value="Adventure">Adventure</MenuItem>
                <MenuItem value="Animation">Animation</MenuItem>
                <MenuItem value="Comedy">Comedy</MenuItem>
                <MenuItem value="Crime">Crime</MenuItem>
                <MenuItem value="Documentary">Documentary</MenuItem>
                <MenuItem value="Drama">Drama</MenuItem>
                <MenuItem value="Family">Family</MenuItem>
                <MenuItem value="Fantasy">Fantasy</MenuItem>
                <MenuItem value="History">History</MenuItem>
                <MenuItem value="Horror">Horror</MenuItem>
                <MenuItem value="Music">Music</MenuItem>
                <MenuItem value="Mystery">Mystery</MenuItem>
                <MenuItem value="Romance">Romance</MenuItem>
                <MenuItem value="ScienceFiction">Science Fiction</MenuItem>
                <MenuItem value="TVMovie">TV Movie</MenuItem>
                <MenuItem value="Thriller">Thriller</MenuItem>
                <MenuItem value="War">War</MenuItem>
                <MenuItem value="Western">Western</MenuItem>
            </TextField>

            {/* Input field for entering the release year */}
            <TextField
                label="Year"
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                fullWidth
            />

            {/* Input field for entering the movie rating */}
            <TextField
                label="Rating"
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                fullWidth
            />

            {/* Button to apply the selected filters */}
            <Button variant="contained" onClick={handleFilter}>
                Apply
            </Button>
        </Box>
    );
};

export default FilterBar;