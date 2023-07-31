import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import { useNavigate } from 'react-router-dom';
import {FacebookShareButton} from 'react-share';
import {FacebookIcon} from 'react-share'
import { TelegramShareButton } from "react-share";
import {TelegramIcon} from 'react-share'
import { WhatsappShareButton } from "react-share";
import {WhatsappIcon} from 'react-share'
import useStyles from './styles.js';

import { saveFavoritesToLocalStorage, getFavoritesFromLocalStorage } from '../utils/localStorage.js';

const PlaceDetails = ({ place, selected, refProp, handleAddToFavorites }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  // Initialize isFavorite state by checking if the place is in favorites
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const favorites = getFavoritesFromLocalStorage();
    setIsFavorite(favorites.some((favPlace) => favPlace.name === place.name));
  }, [place]);

  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const handleAddToFavoritesClick = () => {
    if (typeof handleAddToFavorites === 'function') {
      handleAddToFavorites(place);
    }
    setIsFavorite(!isFavorite); // Toggle isFavorite state
  };

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">
            {place.num_reviews} review{place.num_reviews > 1 && 's'}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center" key={award.display_name}>
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
        <Button size="small" color="primary" onClick={handleAddToFavoritesClick}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
        <FacebookShareButton url={place.website}>
          <FacebookIcon logoFillColor = "white" round={true}></FacebookIcon>
        </FacebookShareButton>
        <WhatsappShareButton url={place.website}>
          <WhatsappIcon logoFillColor = "white" round={true}></WhatsappIcon>
        </WhatsappShareButton>
        <TelegramShareButton url={place.website}>
          <TelegramIcon logoFillColor = "white" round={true}></TelegramIcon>
        </TelegramShareButton>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;