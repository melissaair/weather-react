import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
	function handleResponse(response) {
		console.log(response.data);
	}

	let apiKey = "7677ab34c9ac366d0f3ee07e10dd24d2";
	let lat = props.coordinates.lat;
	let lon = props.coordinates.lon;
	let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

	axios.get(apiUrl).then(handleResponse);

	return (
		<div className="WeatherForecast">
			<div className="row mt-4">
				<div className="col">
					<div className="WeatherForecast-day">Thu</div>
					<WeatherIcon code={props.icon} />
					<div classname="WeatherForecast-temperatures">
						<span className="WeatherForecast-Ttemperature-max">19°</span>
						<span className="WeatherForecast-temperature-min">10°</span>
					</div>
				</div>
			</div>
		</div>
	);
}
