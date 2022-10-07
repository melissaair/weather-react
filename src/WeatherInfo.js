import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<h1 className="mt-4 mb-3">
				<strong>{props.data.city}</strong>
			</h1>
			<div className="overview">
				<div className="row">
					<div className="col-2">
						<div className="clearfix">
							<div className="float-left">
								<img src={props.data.iconUrl} alt={props.data.description} />
							</div>
						</div>
					</div>
					<div className="col-8 weather-temperature">
						<strong>{Math.round(props.data.temperature)}</strong>°
					</div>
				</div>
			</div>

			<div className="row justify-content-md-center">
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
						<li>
							<span className="description-title"> Humidity:</span>{" "}
							{props.data.humidity}%
						</li>
						<li>
							<span className="description-title"> Wind:</span>{" "}
							{props.data.wind} km/h
						</li>
						<li>
							<span className="description-title">Feels like:</span>{" "}
							{Math.round(props.data.feelsLike)}°
						</li>
					</ul>
				</div>
				<WeatherForecast coordinates={props.data.coordinates} />
			</div>
		</div>
	);
}
