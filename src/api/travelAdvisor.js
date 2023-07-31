
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        // 'X-RapidAPI-Key': process.env.REACT_RAPID_API ,
        'X-RapidAPI-Key': 'd3e253b88emsh3d542e4ce3df077p12f96ajsn72349cb3eb96',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat : lat, lon: lng },
        headers: {
        //  'X-RapidAPI-Key': process.env.REACT_WEATHER_KEY,
         'X-RapidAPI-Key': "006e57a695mshc9cd7f1ab3b5025p192168jsnad62f2e177e5",
         'X-RapidAPI-Host': 'open-weather-map27.p.rapidapi.com'
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
