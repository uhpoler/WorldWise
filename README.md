# WorldWise

**WorldWise** is an interactive web application built with React that allows users to explore cities, register visited locations, and manage their personal city collection. The app features map-based navigation, geolocation support, and user authentication to personalize the experience.

## Features

- **Interactive Map**: Users can click on any point on the map to add cities they have visited.
- **Geolocation**: Automatically center the map on the user's current location.
- **City and Country List**: Displays a list of cities and their respective countries that the user has visited.
- **User Authentication**: Login functionality to protect access to personalized city data.
- **URL-based City Selection**: Cities can also be selected by providing coordinates in the URL query string.
- **Lazy Loading**: Dynamic imports and code-splitting for faster initial page loads.
- **Responsive Design**: Optimized for desktop and mobile viewing experiences.

## Components

The project is organized into the following React components:

- **App**: The main component that handles routing and authentication.
- **Map**: Displays a map where users can select cities, and it integrates with geolocation and map-click events.
- **CityList**: Shows a list of cities that the user has added.
- **CountryList**: Aggregates and displays the countries of the visited cities.
- **CityItem**: Represents a single city entry with its details.
- **Form**: A form to submit new city details after selecting on the map.
- **PageNav**: Handles navigation across the app, including login and links to other pages.
- **Spinner**: Displays a loading spinner during asynchronous operations.
- **Message**: Displays messages like errors or empty state notifications.

## State Management and Hooks

This application uses the **Context API** and custom **React Hooks** for efficient state management:

- **useCities**: A custom hook that fetches and provides access to the cities data, manages loading states, and handles city-specific operations.
- **useUrlPosition**: A hook to extract latitude and longitude from the URL, enabling users to share and revisit city selections.
- **useGeolocation**: A hook that retrieves the user's geolocation coordinates, allowing dynamic map positioning.
  
The global state, including cities and authentication status, is managed using React's `useReducer` and `useContext` hooks, providing a scalable structure for future state expansions.

## Authentication

- **Protected Routes**: Certain routes, such as the city management interface, are protected and require user login.
- **FakeAuthContext**: Provides basic login/logout functionality, allowing access to secure areas of the application.

## How It Works

1. **Map Interaction**: Users can click on any city or country on the map to add it to their list.
2. **Geolocation**: Clicking "Use your position" will fetch the user's current location and display it on the map.
3. **URL Positioning**: Users can share a link with specific latitude and longitude, and the map will center on those coordinates.
4. **Authentication**: Only logged-in users can add cities or view their city lists. Non-authenticated users are prompted to log in.

## Technologies Used

- **React**: Core library for building user interfaces.
- **React Router**: Handles navigation and routing across pages.
- **Context API**: For state management and sharing data across components.
- **useReducer & useContext**: Manages complex state logic and access to global state.
- **React Hooks**: Custom hooks for URL handling and geolocation features.
- **Leaflet**: Interactive maps for city selection and map-based operations.
- **OpenStreetMap**: Provides map tiles and data.
- **CSS Modules**: Ensures that styles are scoped locally to each component.
- **JavaScript (ES6+)**: Modern JavaScript syntax and features.
- **Lazy Loading (React Suspense)**: Dynamically load components like pages to optimize performance.

## Screenshots

![image](https://github.com/user-attachments/assets/20f84b99-036f-4780-9914-fba2e581f685)
![image](https://github.com/user-attachments/assets/3a3c6959-38f7-4a22-9c9b-cc8ca58ee7e3)
![image](https://github.com/user-attachments/assets/891a4285-7600-4eb3-a439-7e0bf3eff51a)

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/WorldWise.git
   ```
2. **Install the dependencies**:
   ```bash
   npm install
   ```
3. **Start the application**:
   ```bash
   npm dev
   ```

   The app will be available at `http://localhost:5173`.

## Future Enhancements

- Integration with a real authentication service (OAuth or Firebase).
- Adding features like city ratings, reviews, and sharing visited cities with friends.
- Performance improvements for handling large datasets of cities.
