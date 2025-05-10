import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// LoginPage component provides a login form for user authentication
const LoginPage = () => {
  const [username, setUsername] = useState(''); // State to store the entered username
  const [password, setPassword] = useState(''); // State to store the entered password
  const [error, setError] = useState(''); // State to store any error messages
  const navigate = useNavigate();  // Hook to navigate to different routes
  const { login } = useAuth(); // Access the login function from AuthContext

  // Function to handle the login action
  const handleLogin = () => {
    if (login(username, password)) {
      navigate('/'); // Navigate to the home page if login is successful
    } else {
      setError('Invalid username or password'); // Display an error message on failed login
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      gap={2}
    >
      {/* Page title */}
      <Typography variant="h4">Login</Typography>

      {/* Display error message if login fails */}
      {error && <Typography color="error">{error}</Typography>}

      {/* Input fields for username */}
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Update username state on input change
        fullWidth
      />

      {/* Input fields for password */}
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Update password state on input change
        fullWidth
      />

      {/* Button to trigger the login action */}
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;