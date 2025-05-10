import React, { createContext, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';

// AuthContext provides authentication state and functions to manage user login/logout
const AuthContext = createContext();

// AuthProvider component provides authentication-related state and functions to its children
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle user login
  // Accepts a username and password, and authenticates the user
  const login = (username, password) => {
    // Simulate authentication logic (username: 'admin', password: 'password')
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);  // Set the user as authenticated
      return true; // Return true if authentication is successful
    }
    return false; // Return false if authentication fails
  };

  // Function to handle user logout
  const logout = () => setIsAuthenticated(false); // Set the user as unauthenticated

  // Provide authentication state and functions to the children components
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
export const useAuth = () => useContext(AuthContext);

// ProtectedRoute component restricts access to authenticated users
// If the user is not authenticated, they are redirected to the login page
export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Access authentication state from AuthContext
  return isAuthenticated ? children : <Navigate to="/login" />; // Redirect to login page if not authenticated
};