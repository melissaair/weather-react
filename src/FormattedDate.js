import React from "react";
import "./Weather.css";

export default function FormattedDate(props) {
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let day = days[props.date.getDay()];
	let hours = props.date.getHours();
	if (hours < 10) {
		hours = `0${hours}`;
	}

	let minutes = props.date.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	let currentHour = props.date.getHours();
	let currentMinutes = props.date.getMinutes();
	if (currentMinutes < 10) {
		currentMinutes = `0${currentMinutes}`;
	}

	if (currentHour >= 7 && currentHour < 20) {
		document.body.className = "day";
	} else {
		document.body.className = "night";
	}

	return (
		<div>
			{day} {hours}:{minutes}
		</div>
	);
}
