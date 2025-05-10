import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

// Header component displays the app's navigation bar
// Includes links, theme toggle, and authentication-related actions
const Header = () => {

  // Access theme mode and toggle function from ThemeContext
  const { mode, toggleTheme } = useContext(ThemeContext);

  // Access authentication state and logout function from AuthContext
  const { isAuthenticated, logout } = useAuth();

  return (
    // AppBar serves as the container for the header
    <AppBar position="static">

      <Toolbar>
        {/* App title displayed on the left */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Movie Explorer
        </Typography>

        {/* Navigation buttons displayed only if the user is authenticated */}
        {isAuthenticated && (
          <>
            {/* Link to the Home page */}
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>

            {/* Link to the Favorites page */}
            <Button color="inherit" component={Link} to="/favorites">
              Favorites
            </Button>

            {/* Logout button to end the user session */}
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </>
        )}

        {/* Icon button to toggle between light and dark themes */}
        <IconButton color="inherit" onClick={toggleTheme}>
          {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;