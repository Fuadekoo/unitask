import React, { useState } from 'react';
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import drizzle_icon from "../assets/drizzle.png";
import cloud_icon from "../assets/cloud.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";
import { fetchWeather } from '../services/weatherService';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchWeather = async () => {
    try {
      const response = await fetchWeather(city);
      setWeather(response.data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch weather data. Please check your API key or try again later.');
      setWeather(null);
    }
  };

  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case 'Clear':
        return clear_icon;
      case 'Drizzle':
        return drizzle_icon;
      case 'Clouds':
        return cloud_icon;
      case 'Rain':
        return rain_icon;
      case 'Snow':
        return snow_icon;
      case 'Wind':
        return wind_icon;
      default:
        return cloud_icon;
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white'>
      <div className="flex items-center justify-between w-full max-w-md p-4 bg-white shadow-md rounded-lg">
        <input
          type="text"
          className='flex-grow p-2 border border-gray-300 rounded-md'
          placeholder='Enter city'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className="ml-2">
          <button onClick={handleFetchWeather}>
            <img src={search_icon} alt="search" className="w-6 h-6" />
          </button>
        </div>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {weather && (
        <div className="flex flex-col items-center mt-4 font-sans">
          <div className="mb-2">
            <img src={getWeatherIcon(weather.weather[0].main)} alt="weather" className="w-12 h-12" />
          </div>
          <div className="text-2xl font-semibold">{weather.main.temp/10} °C</div>
          <div className="text-lg text-gray-600">{weather.name}</div>
          <div className="flex mt-2 space-x-4">
            <div className="flex items-center">
              <img src={humidity_icon} alt="humidity" className="w-6 h-6" />
              <span className="ml-1">{weather.main.humidity}%</span>
            </div>
            <div className="flex items-center">
              <img src={wind_icon} alt="wind" className="w-6 h-6" />
              <span className="ml-1">{weather.wind.speed} m/s</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;