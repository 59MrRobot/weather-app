import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    currentWeather: null,
    forecast: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    startProcess: (state) => {
      state.isFetching = true;
    },
    //CURRENT WEATHER
    getCurrentWeatherSuccess: (state, action) => {
      state.isFetching = false;
      state.currentWeather = action.payload;
      state.error = false;
    },
    getCurrentWeatherFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //FORECAST
    getForecastSuccess: (state, action) => {
      state.isFetching = false;
      state.forecast = action.payload;
      state.error = false;
    },
    getForecastFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    reset: (state) => {
      state.currentWeather = null;
      state.forecast = null;
    }
  }
});

export const {
  startProcess,
  getCurrentWeatherSuccess,
  getCurrentWeatherFailure,
  getForecastSuccess,
  getForecastFailure,
  reset,
} = weatherSlice.actions;
export default weatherSlice.reducer;