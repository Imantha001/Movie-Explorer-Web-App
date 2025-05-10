import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

// SearchBar component allows users to search for movies by title
// Accepts an `onSearch` prop, which is a callback function to handle the search query
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(''); // State variable to store the search query

  // Function to handle the search action
  const handleSearch = () => {
    onSearch(query); // Call the `onSearch` callback with the current query
  };

  return (
    // Container for the search input and button
    <div style={{ display: 'flex', marginBottom: 20 }}>
      {/* Input field for entering the search query */}
      <TextField
        fullWidth
        label="Search movies..." // Placeholder text for the input field
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update the query state on input change
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Trigger search on Enter key press
      />

      {/* Button to trigger the search action */}
      <Button 
      variant="contained" 
      onClick={handleSearch}  // Call the `handleSearch` function on click
      sx={{ marginLeft: 1 }}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;