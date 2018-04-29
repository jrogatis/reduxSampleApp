import axios from 'axios';

const API_KEY = '305be798df6d4af620a9617136145bbb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WHEATHER = 'FEATCH_WHEADER';

export const fetchWeather = city => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return { type: FETCH_WHEATHER, payload: request };
};
