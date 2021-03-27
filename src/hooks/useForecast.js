import axios from 'axios';
import { useState } from 'react';

// https://www.metaweather.com/api/
const instance = axios.create({
  baseURL: 'https://www.metaweather.com/api/'
});

export const useForecast = () => {
  const [loading, setLoading] = useState(false);
  const [forecasts, setForecasts] = useState([]);

  const getForecast = async (searchText) => {
    if (!searchText) {
      return setForecasts([]);
    }

    setLoading(true);
    const urlLocation = `location/search/?query=${searchText}`;

    try {
      const { data } = await instance(urlLocation);
      if (data && data.length > 0) {
        const urlForecast = `location/${data[0]['woeid']}/`;
        const response = await instance(urlForecast);
        const { data: forecastData } = response;
        const { consolidated_weather } = forecastData;

        return setForecasts(consolidated_weather);
      }
      setForecasts([]);
    } catch {
      setForecasts([]);
    } finally {
      setLoading(false);
    }
  };

  return [{ loading, forecasts }, getForecast];
};
