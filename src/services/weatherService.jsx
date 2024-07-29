// src/services/weatherService.js
import axios from 'axios';

const API_KEY = '8c48bf5f35b4f8a85ccdc87055c98ae6';
const BASE_URL = 'http://api.openweathermap.org/data/2.5';

export const fetchWeather = (city) => {
  return axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}`);
};
