import React from "react";
import "./App.css";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const { lat, lng } = searchData;

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ ...weatherResponse });
        setForecast({ ...forcastResponse });
      })
      .catch(console.log);
  };
  // console.log(currentWeather);
  // console.log(forecast);
  return (
    <div className="App">
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        <div>
          <Weather data={currentWeather} />
          {forecast && <Forecast data={forecast} />}
        </div>
      </div>
    </div>
  );
}

export default App;
