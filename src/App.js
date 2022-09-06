import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather defaultCity="Los Angeles" />
				<footer>
					<p>
						<a href="https://github.com/melissaair/weather-react">
							Open-source code
						</a>
						, by{" "}
						<a href="https://github.com/melissaair">Melissa Ibarra-Ramos</a>
					</p>
				</footer>
			</div>
		</div>
	);
}
