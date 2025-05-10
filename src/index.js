import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProviderWrapper from './context/ThemeContext';

// Entry point of the React application

// Get the root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  // Wrap the application with ThemeProviderWrapper to manage light/dark theme
  <ThemeProviderWrapper>

    {/* CssBaseline provides a consistent baseline for Material-UI styling */}
    <CssBaseline />
    
    {/* Render the main App component */}
    <App />
  </ThemeProviderWrapper>
);