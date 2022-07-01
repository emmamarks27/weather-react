import React from "react";
import WeatherTodayIcon from "./WeatherTodayIcon";
import DateTime from "./DateTime";
import WeatherForecast from "./WeatherForecast";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <header>
        <DateTime dateInfo={props.data.date} />
      </header>

      <h1>Weather App</h1>

      <div className="row row-one">
        <div className="col-3 today-weather-location">
          <span id="searched-city">{props.data.name}</span>
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>WindSpeed: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>

        <div className="col-9 col-one">
          <h2>5 Day Weather Forecast</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-3 today-weather-forecast">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Today</h5>
              <div id="today-weather">{Math.round(props.data.temp)}°C</div>
              <WeatherTodayIcon icon={props.data.icon} />
            </div>
          </div>
        </div>
        <WeatherForecast coords={props.data.coords} />
      </div>
    </div>
  );
}
