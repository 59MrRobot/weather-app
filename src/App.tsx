import React, { useState } from 'react';
import { WEATHER_API_URL } from './api';
import './App.scss';
import { CurrentWeather } from './components/CurrentWeather';
import { Forecast } from './components/Forecast';
import { Search } from './components/Search';

const App: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForecast] = useState();

  const handleOnSearchChange = (searchData: SearchData) => {
    const [latitude, longitude] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({city: searchData.label, ...weatherResponse});
        setForecast({city: searchData.label, ...forecastResponse});
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <h1>Welcome to Weather App</h1>
      <Search onSearchChange={handleOnSearchChange} />

      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}

      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;
