// localStorage.js
export const saveFavoritesToLocalStorage = (favorites) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  
  export const getFavoritesFromLocalStorage = () => {
    const favoritesString = localStorage.getItem("favorites");
    return favoritesString ? JSON.parse(favoritesString) : [];
  };