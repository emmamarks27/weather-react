import React from "react";
import TodayWeatherTemperature from "./TodayWeatherTemperature";
import WeatherTodayIcon from "./WeatherTodayIcon";
export default function TodayWeather() {
  return (
    <div className="col-3 today-weather-forecast">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Today</h5>
          <span className="card-text">
            <TodayWeatherTemperature />
          </span>
          <WeatherTodayIcon />
        </div>
      </div>
    </div>
  );
}
