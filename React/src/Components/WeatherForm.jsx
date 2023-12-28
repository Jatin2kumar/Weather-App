import React, { useState } from "react";

function WeatherForm({ onWeatherSubmit }) {
  const [city, setCity] = useState("Delhi");
  const [unit, setUnit] = useState("metric");

  const handleSubmit = async (event) => {
    event.preventDefault();
    onWeatherSubmit({ city, unit });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Weather APP</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City Name"
      />
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="metric">Celcius</option>
        <option value="imperial">Fahrenheit</option>
      </select>
      <button type="submit">Check Weather</button>
    </form>
  );
}

export default WeatherForm;
