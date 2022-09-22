import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	function handleReposnse(response) {
		console.log(response.data);
		setWeatherData({
			ready: true,
			coordinates: response.data.coord,
			temperature: response.data.main.temp,
			city: response.data.name,
			date: new Date(response.data.dt * 1000),
			description: response.data.weather[0].description,
			iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			icon: response.data.weather.icon,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			dayHigh: response.data.main.temp_max,
			dayLow: response.data.main.temp_min,
			feelsLike: response.data.main.feels_like,
		});
	}

	function search() {
		const apiKey = "7677ab34c9ac366d0f3ee07e10dd24d2";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
		axios.get(apiUrl).then(handleReposnse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form onSubmit={handleSubmit} className="mb-3">
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Type a city.."
								className="form-control"
								autoComplete="off"
								autoFocus="on"
								onChange={handleCityChange}
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
				<WeatherInfo data={weatherData} />
				<WeatherForecast coordinates={weatherData.coordinates} />
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}
