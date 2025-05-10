# Movie Explorer App

Movie Explorer is a React-based web application that allows users to explore movies, search for specific titles, filter by genre, year, and rating, and manage their favorite movies. The app uses The Movie Database (TMDB) API to fetch movie data.

## Features

- **Authentication**: Users must log in to access the app. A simple authentication system is implemented with a default username (`admin`) and password (`password`).
- **Search**: Search for movies by title using the TMDB API.
- **Filters**: Filter movies by genre, release year, and rating.
- **Favorites**: Add or remove movies from the favorites list, which is stored in the browser's local storage.
- **Trending Movies**: View a list of trending movies.
- **Movie Details**: View detailed information about a movie, including its trailer.
- **Dark Mode**: Toggle between light and dark themes.

## Project Setup

### Prerequisites

- Node.js (v16 or later)
- npm (v7 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movie-explorer-app.git
   cd movie-explorer-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your TMDB API key:
   ```bash
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   ```

4. Start the development server:
   ```bash
   npm start
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.
- `npm run eject`: Ejects the app configuration (use with caution).

## API Usage

The app uses the TMDB API to fetch movie data. The following endpoints are utilized:

- **Trending Movies**: Fetches trending movies for the week.
- **Search Movies**: Searches for movies by title.
- **Movie Details**: Fetches detailed information about a specific movie, including trailers and credits.

### API Configuration

The API key is stored in the `.env` file as `REACT_APP_TMDB_API_KEY`. Ensure you replace `your_tmdb_api_key` with your actual TMDB API key.

## Folder Structure

src/
├── api/                # API integration with TMDB
├── components/         # Reusable UI components
├── context/            # Context providers for state management
├── pages/              # Page components for routing
├── App.js              # Main app component
├── index.js            # Entry point
├── theme.js            # Theme configuration


## Features Implemented

### Authentication
   - Implemented in AuthContext.
   - Protects routes using the ProtectedRoute component.

### Search and Filters
   - Search functionality is implemented in SearchBar.
   - Filters are implemented in FilterBar.

### Favorites Management
   - Favorites are managed using MovieContext.
   - Favorites are stored in localStorage.

### Movie Details
   - Detailed movie information is displayed in MovieDetails.

### Dark Mode
   - Theme toggling is implemented in ThemeContext.
