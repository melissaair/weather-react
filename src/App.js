import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <div className="Github">
        <p><a href="https://github.com/melissaair/weather-react">Open-source code</a>, by <a href="https://github.com/melissaair">Melissa Ibarra-Ramos</a></p>
      </div>
    </div>
  );
}