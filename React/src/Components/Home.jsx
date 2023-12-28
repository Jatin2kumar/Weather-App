import React, { useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherInfo from "./WeatherInfo";

function Home() {
  const [weatherData, setWeatherData] = useState(null);

  const API = process.env.REACT_APP_API;
  const url = "http://api.openweathermap.org/data/2.5/weather";

  const handleWeatherSubmit = async ({ city, unit }) => {
    try {
      const response = await fetch(
        `${url}?q=${city}&appid=${API}&units=${unit}`
      );
      const data = await response.json();
      if (response.ok) {
        setWeatherData({
          cityName: data.name,
          temperature: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          unit,
        });
      } else {
        console.error("There was an error fetching weather data.");
        setWeatherData(null);
      }
    } catch (error) {
      console.error("There was an error ", error);
      setWeatherData(null);
    }
  };

  const handleReset = () => {
    setWeatherData(null);
  };

  return (
    <div className="container">
      <WeatherForm onWeatherSubmit={handleWeatherSubmit} />
      {weatherData && (
        <WeatherInfo weatherData={weatherData} onReset={handleReset} />
      )}
    </div>
  );
}

export default Home;
