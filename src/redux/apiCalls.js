import {
  startProcess,
  getCurrentWeatherFailure,
  getCurrentWeatherSuccess,
  getForecastFailure,
  getForecastSuccess,
} from "./weatherRedux";
import { WEATHER_API_URL } from '../api';

export const getCurrentWeather = async (dispatch, latitude, longitude, city) => {
  dispatch(startProcess());

  try {
    const response = await fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);

    response.json().then(res => dispatch(getCurrentWeatherSuccess({
      city,
      ...res,
    })))
  } catch (error) {
    dispatch(getCurrentWeatherFailure());
  }
}

export const getForecast = async (dispatch, latitude, longitude, city) => {
  dispatch(startProcess());

  try {
    const response = await fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);

    response.json().then(res => dispatch(getForecastSuccess({
      city,
      ...res,
    })))
  } catch (error) {
    dispatch(getForecastFailure());
  }
}