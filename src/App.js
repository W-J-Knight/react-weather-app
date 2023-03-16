import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';
<<<<<<< HEAD
=======
import Forecast from './components/forecast/forecast';
>>>>>>> Building_weather_forecast_component

function App() {
  
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")


    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch((err)=>console.log(err));
  };
<<<<<<< HEAD
  console.log(currentWeather)
=======
  // console.log(currentWeather)
>>>>>>> Building_weather_forecast_component
  console.log(forecast)
  return (
    <div className="container">   
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather &&<CurrentWeather data={currentWeather}/>}
<<<<<<< HEAD
=======
      {forecast && <Forecast data={forecast} />}
>>>>>>> Building_weather_forecast_component
    </div>
  );
}

export default App;
