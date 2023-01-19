// / <reference types="react-scripts" />

interface City {
  countryCode: string;
  latitude: number;
  longitude: number;
  name: string;
}

interface SearchData {
  label: string;
  value: string;
}

interface CurrentWeather {
  city: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: Weather[];
  wind: {
    speed: number;
  }
}

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface Forecast {
  list: ForecastItem[];
}

interface ForecastItem extends CurrentWeather {
  clouds: {
    all: number;
  }
}

