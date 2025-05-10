import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import MovieProvider from './context/MovieContext';
import MovieDetails from './components/MovieDetails';
import LoginPage from './pages/LoginPage';
import { AuthProvider, ProtectedRoute } from './context/AuthContext';


// App component serves as the root of the application
const App = () => (
  // Wrap the application with AuthProvider to manage authentication state
  <AuthProvider>

  {/* Wrap the application with MovieProvider to manage movie-related state */}
  <MovieProvider>

    {/* Router to handle navigation between different pages */}
    <Router>
      <Header />
      <Routes>
        {/* Protected route for the Home page*/}
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />

        {/* Protected route for the Favorites page */}
        <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />

        {/* Route for the Movie Details page */}
        <Route path="/movie/:id" element={<MovieDetails />} />

        {/* Route for the Login page */}
        <Route path="/login" element={<LoginPage />} />


      </Routes>
    </Router>
  </MovieProvider>
  </AuthProvider>
);

export default App;