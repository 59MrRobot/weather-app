import React from 'react';
import './CurrentWeather.scss';

interface Props {
  currentWeather: CurrentWeather;
}

export const CurrentWeather: React.FC<Props> = React.memo(
  ({ currentWeather }) => {
    const {
      city,
      main,
      weather,
      wind,
    } = currentWeather;

    return (
      <div className="current-weather">
        <div className="top">
          <div>
            <p className="city">{city}</p>
            <p className="current-weather__description">{weather[0].main}</p>
          </div>

          <img 
            src={`icons/${weather[0].icon}.png`}
            alt="weather" 
            className="current-weather__icon" 
          />
        </div>

        <div className="bottom">
          <p className="temperature">{Math.round(main.temp)}°C</p>
          <div className="parameter">
            <div className="parameter__row">
              <span className="parameter__label">Details</span>
            </div>

            <div className="parameter__row">
              <span className="parameter__label">Feels like:</span>
              <span className="parameter__value">{Math.round(main.feels_like)}°C</span>
            </div>

            <div className="parameter__row">
              <span className="parameter__label">Wind:</span>
              <span className="parameter__value">{`${wind.speed} m/s`}</span>
            </div>

            <div className="parameter__row">
              <span className="parameter__label">Humidity:</span>
              <span className="parameter__value">{main.humidity}%</span>
            </div>

            <div className="parameter__row">
              <span className="parameter__label">Pressure:</span>
              <span className="parameter__value">{main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
