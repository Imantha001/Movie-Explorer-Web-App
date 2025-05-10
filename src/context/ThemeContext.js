import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from '../theme';

// Create a context for managing the theme (light or dark mode)
export const ThemeContext = createContext();

const ThemeProviderWrapper = ({ children }) => {
  // State to manage the current theme mode (light or dark)
  const [mode, setMode] = useState('light');

  // Memoize the theme object to optimize performance
  // The theme is recalculated only when the `mode` changes
  const theme = useMemo(() => getTheme(mode), [mode]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    // Provide the theme mode and toggle function to child components
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {/* Apply the theme to Material-UI components */}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderWrapper;