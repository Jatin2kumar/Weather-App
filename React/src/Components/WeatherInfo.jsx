import React from "react";

function WeatherInfo({ weatherData, onReset }) {
  return (
    <div className="weather-info">
      <h2>Weather in {weatherData.cityName}</h2>
      <p>
        Temperature: {weatherData.temperature}
        {weatherData.unit === "metric" ? "°C" : "°F"}
      </p>
      <p>Description: {weatherData.description}</p>
      <img
        src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
        alt={weatherData.description}
      />
      <button type="button" className="reset" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default WeatherInfo;
