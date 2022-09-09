import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherUnits from "./WeatherUnits";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<div className="overview">
				<h1 className="mt-4 mb-3">
					<strong>{props.data.city}</strong>
				</h1>
				<div className="row">
					<div className="col-sm-2">
						<img
							src={props.data.iconUrl}
							alt={props.data.description}
							className="float-left"
						/>
					</div>
					<div className="col-sm-10 weather-temperature">
						<WeatherUnits fahrenheit={props.data.temperature} />
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-6">
					<ul>
						<li>{props.data.description}</li>
						<li>
							H: {Math.round(props.data.dayHigh)}° | L:{" "}
							{Math.round(props.data.dayLow)}°
						</li>
						<li>
							<FormattedDate date={props.data.date} />
						</li>
					</ul>
				</div>
				<div className="col-6">
					<ul>
						<li>Humidity: {props.data.humidity}%</li>
						<li>Wind: {props.data.wind} km/h</li>
						<li>Feels like: {Math.round(props.data.feelsLike)}°</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
