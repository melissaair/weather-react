import React from "react";
import "./WeatherForecast.css";
import "./Weather.css";

export default function WeatherForecastDay(props) {
	let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

	function day() {
		let date = new Date(props.data.dt * 1000);
		let day = date.getDay();

		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		return days[day];
	}

	return (
		<div className="d-flex WeatherForecast">
			<div className="d-flex justify-content-sm-between">
				<div className="p-1">
					<div className="WeatherForecast-day">{day()}</div>
					<img src={icon} alt={props.data.weather[0].description} />
					<div className="WeatherForecast-temperatures">
						<span className="WeatherForecast-temperature-max">
							{Math.round(props.data.temp.max)}°
						</span>
						<span className="WeatherForecast-temperature-min">
							{Math.round(props.data.temp.min)}°
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
