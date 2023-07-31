import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { Routes , Route, useNavigate  } from 'react-router-dom';

import { getPlacesData, getWeatherData } from '../../api/travelAdvisor';
import Header from '../Header/Header';
import List from '../List/List';
import Map from '../Map/Map';
import FavoritesPage from '../FavoritesPage';
import { saveFavoritesToLocalStorage, getFavoritesFromLocalStorage } from '../utils/localStorage';

const MainPage = () => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false); // Add isFavorite state
  const navigate  = useNavigate(); // Create a history object

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const filtered = places?.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      getWeatherData(coords.lat, coords.lng)
        .then((data) => setWeatherData(data));

      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
          setFilteredPlaces([]);
          setRating('');
          setIsLoading(false);
        });
    }
  }, [bounds, type]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  const handleAddToFavorites = (place) => {
    const favorites = getFavoritesFromLocalStorage();
    const isPlaceInFavorites = favorites.some((favPlace) => favPlace.name === place.name);

    if (!isPlaceInFavorites) {
      favorites.push(place);
      saveFavoritesToLocalStorage(favorites);
    } else {
      const updatedFavorites = favorites.filter((favPlace) => favPlace.name !== place.name);
      saveFavoritesToLocalStorage(updatedFavorites);
    }

    setIsFavorite(!isPlaceInFavorites);

   
  };

  return (
    <>
      <CssBaseline />
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      
        {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
       {
          <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List
              isLoading={isLoading}
              childClicked={childClicked}
              places={filteredPlaces ? filteredPlaces : places}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
              handleAddToFavorites={handleAddToFavorites}
              isFavorite={isFavorite}
            />
          </Grid>
          <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Map
              setChildClicked={setChildClicked}
              setBounds={setBounds}
              setCoords={setCoords}
              coords={coords}
              places={filteredPlaces ? filteredPlaces : places}
              weatherData={weatherData}
            />
          </Grid>
        </Grid>
        } 
      
    </>
  );
};

export default MainPage;