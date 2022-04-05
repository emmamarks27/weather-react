import React from "react";
import WeatherTodayIcon from "./WeatherTodayIcon";
import ForecastDayFormat from "./ForecastDayFormat";
import "./forecastDayFormat.css";

export default function ForecastDay(props) {
  return (
    <div className="col-9 w-90 forecast">
      <div className="row">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h5>
                <ForecastDayFormat timestamp={new Date(props.data.dt * 1000)} />
              </h5>
            </div>
            <div className="temperatures">
              <span className="max-temp">
                {Math.round(props.data.temp.max)}°
              </span>{" "}
              <span className="min-temp">
                {Math.round(props.data.temp.min)}°
              </span>
            </div>
            <WeatherTodayIcon icon={props.data.weather[0].icon} />
          </div>
        </div>
      </div>
    </div>
  );
}
