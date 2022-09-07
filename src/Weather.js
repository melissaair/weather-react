import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });

	function handleReposnse(response) {
		console.log(response.data);
		setWeatherData({
			ready: true,
			temperature: response.data.main.temp,
			city: response.data.name,
			date: new Date(response.data.dt * 1000),
			description: response.data.weather[0].description,
			imgUrl: response.data.weather.icon,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			dayHigh: response.data.main.temp_max,
			dayLow: response.data.main.temp_min,
			feelsLike: response.data.main.feels_like,
		});
	}

	if (weatherData.ready) {
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
					<h1 className="my-4">
						<strong>{weatherData.city}</strong>
					</h1>
					<div className="row">
						<div className="col-sm-6 weather-temperature">
							<img
								src={weatherData.imgUrl}
								alt={weatherData.description}
								className="float-left"
							/>
							<strong>{Math.round(weatherData.temperature)}</strong>
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
								H: {Math.round(weatherData.dayHigh)}° | L:{" "}
								{Math.round(weatherData.dayLow)}°
							</li>
							<li>
								<FormattedDate date={weatherData.date} />
							</li>
						</ul>
					</div>
					<div className="col-6">
						<ul>
							<li>Humidity: {weatherData.humidity}%</li>
							<li>Wind: {weatherData.wind} km/h</li>
							<li>Feels like: {Math.round(weatherData.feelsLike)}°</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "7677ab34c9ac366d0f3ee07e10dd24d2";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
		axios.get(apiUrl).then(handleReposnse);

		return "Loading...";
	}
}
