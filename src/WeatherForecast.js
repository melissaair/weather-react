import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	function showForecast(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	function load() {
		let apiKey = "aa09763d916df0424c840d55bfc2d2c9";
		let lat = props.coordinates.lat;
		let lon = props.coordinates.lon;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

		axios.get(apiUrl).then(showForecast);
	}

	if (loaded) {
		return (
			<div className="WeatherForecast">
				<div className="container">
					<div className="row my-4">
						<div className="col-1">
							<i class="fa-solid fa-calendar-days calendar-icon"></i>
						</div>
						<div className="col-11">
							<h3>5-DAY FORECAST</h3>
						</div>
						<hr />
						{forecast.map(function(dailyForecast, index) {
							if (index < 5) {
								return (
									<div className="col" key={index}>
										<WeatherForecastDay data={dailyForecast} />
									</div>
								);
							} else {
								return null;
							}
						})}
					</div>
				</div>
			</div>
		);
	} else {
		load();

		return "Loading...";
	}
}
