// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { saveFavoritesToLocalStorage, getFavoritesFromLocalStorage } from './utils/localStorage'; // Import the required functions

// export const FavoritesContext = createContext();

// export const useFavorites = () => useContext(FavoritesContext);

// export const FavoritesProvider = ({ children }) => {
//   const [favoritePlaces, setFavoritePlaces] = useState([]);

//   // Load favorites from localStorage on component mount
//   useEffect(() => {
//     const favoritesFromLocalStorage = getFavoritesFromLocalStorage();
//     if (favoritesFromLocalStorage) {
//       setFavoritePlaces(favoritesFromLocalStorage);
//     }
//   }, []);

//   // Save favorites to localStorage whenever favoritePlaces state changes
//   useEffect(() => {
//     saveFavoritesToLocalStorage(favoritePlaces);
//   }, [favoritePlaces]);

//   return (
//     <FavoritesContext.Provider value={{ favoritePlaces, setFavoritePlaces }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// };
