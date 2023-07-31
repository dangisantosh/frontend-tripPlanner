import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import PlaceDetails from './PlaceDetails/PlaceDetails.jsx';
import { getFavoritesFromLocalStorage, saveFavoritesToLocalStorage  } from "./utils/localStorage.js";


const FavoritesPage = () => {
  const favorites = getFavoritesFromLocalStorage();
  const [favoritePlaces, setFavoritePlaces] = useState(favorites);

  const handleRemoveFromFavorites = (place) => {
    const updatedFavorites = favoritePlaces.filter((favPlace) => favPlace.name !== place.name);
    setFavoritePlaces(updatedFavorites);
    saveFavoritesToLocalStorage(updatedFavorites);
  };

  if (favoritePlaces.length === 0) {
    return (
      <div>
        <Typography variant="h5">Your Favorites List is Empty</Typography>
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h6">Favorites</Typography>
        <List>
          {favoritePlaces.map((place, index) => (
            <ListItem key={index}>
              <PlaceDetails place={place} isFavorite={place.isFavorite} handleAddToFavorites={handleRemoveFromFavorites} />
            </ListItem>
          ))}
        </List>
    </div>
  );
};

export default FavoritesPage;