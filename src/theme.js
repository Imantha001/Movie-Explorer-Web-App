import { createTheme } from '@mui/material/styles';

// Function to generate a Material-UI theme based on the selected mode (light or dark)
export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode, // Set the mode (light or dark)
      ...(mode === 'dark' && {
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
        text: {
          primary: '#ffffff',
        },
      }),
    },
  });