import React from 'react';
import './App.scss';
import { CurrentWeather } from './components/CurrentWeather';
import { Forecast } from './components/Forecast';
import { Search } from './components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from './redux/weatherRedux';
import { getCurrentWeather, getForecast } from './redux/apiCalls';
import ClearIcon from '@mui/icons-material/Clear';

const App: React.FC = () => {
  const currentWeather = useSelector((state: any) => state.currentWeather);
  const forecast = useSelector((state: any) => state.forecast);
  const dispatch = useDispatch();

  const handleOnSearchChange = (searchData: SearchData) => {
    const [latitude, longitude] = searchData.value.split(' ');

    getCurrentWeather(dispatch, latitude, longitude, searchData.label);
    getForecast(dispatch, latitude, longitude, searchData.label);
  }

  return (
    <div className="container">
      <h1 className="container__title">Welcome to Weather App</h1>

      <Search onSearchChange={handleOnSearchChange} />

      <div
        className="container__clear"
        style={{ textAlign: "center", marginTop: "8px", cursor: "pointer"}}
        onClick={() => dispatch(reset())}
      >
        {currentWeather && <ClearIcon />}
      </div>

      {currentWeather && <CurrentWeather />}

      {forecast && <Forecast />}
    </div>
  );
}

export default App;
