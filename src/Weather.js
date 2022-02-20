import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a city..." />
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-primary search-button">
              Search
            </button>
          </div>
        </div>
      </form>
      <h1>Cape Town</h1>
      <ul>
        <li>February 20, 15:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />{" "}
          27°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 27%</li>
            <li>Wind: 3km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
