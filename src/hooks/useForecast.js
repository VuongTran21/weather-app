import axios from 'axios';
import { useState } from 'react';

export const useForecast = () => {
  const [loading, setLoading] = useState(false);
  const [forecasts, setForecasts] = useState([]);

  const getForecast = async (searchText) => {
    setLoading(true);
    const urlLocation = `location/search/?query=${searchText}`;

    try {
      const { data } = await axios(urlLocation);
      if (data && data.length > 0) {
        const urlForecast = `location/${data[0]['woeid']}/`;
        const response = await axios(urlForecast);
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
