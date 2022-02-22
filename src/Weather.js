import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormanttedDate";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  function displayWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}`,
      description: response.data.weather[0].description,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-primary search-button">
            Search
          </button>
        </div>
      </div>
    </form>
  );
  if (weather.ready) {
    return (
      <div className="Weather">
        {form}
        <h1>{weather.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weather.date} />
          </li>
          <li>{weather.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weather.icon} alt={weather.description} />{" "}
            {Math.round(weather.temperature)}°C
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {Math.round(weather.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "8e7ae886bfd9f66febdffcb5fb779942";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    return form;
  }
}
