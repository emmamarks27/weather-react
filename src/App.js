import React from "react";
import "./styles.css";
import Humidity from "./Humidity";
import WindSpeed from "./WindSpeed";
import DateTime from "./DateTime";
import SearchEngine from "./SearchEngine";
import WeatherForecast from "./WeatherForecast";
import WeatherNearMe from "./WeatherNearMe";
import TodayWeather from "./TodayWeather";
import SearchedCity from "./SearchedCity";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <DateTime />
        </header>

        <h1>Weather App</h1>

        <div className="row row-one">
          <div className="col-3 today-weather-location">
            <SearchedCity />
            <ul>
              <li id="weather-conditions"></li>
              <li>
                <Humidity />
              </li>
              <li>
                <WindSpeed />
              </li>
            </ul>
          </div>

          <div className="col-9 col-one">
            <h2>5 Day Weather Forecast</h2>
          </div>
        </div>

        <div className="row">
          <TodayWeather />
          <WeatherForecast />
        </div>

        <WeatherNearMe />

        <SearchEngine />
      </div>

      <div className="container footnote">
        <h5>Coded by: Emma Marks</h5>
      </div>

      <script src="src/java.js"></script>
    </div>
  );
}
