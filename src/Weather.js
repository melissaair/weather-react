import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Los Angeles",
    temperature: 90,
    date: "Tuesday 4:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
    dayHigh: 92,
    dayLow: 70,
    feelsLike: 93
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100 search-btn"
            />
          </div>
        </div>
      </form>

      <div className="overview">
        <h1 className="mt-4">
          <strong>{weatherData.city}</strong>
        </h1>
        <div className="row my-4">
          <div className="col-6 weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <strong>{weatherData.temperature}</strong>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <ul>
            <li>{weatherData.description}</li>
            <li>
              H: {weatherData.dayHigh}° | L: {weatherData.dayLow}°
            </li>
            <li>{weatherData.date}</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
            <li>Feels like: {weatherData.feelsLike}°</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
