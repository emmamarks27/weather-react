import React, { useState } from "react";
import axios from "axios";
import "./weatherforecast.css";
import WeatherTodayIcon from "./WeatherTodayIcon";
import ForecastDayFormat from "./ForecastDayFormat";

export default function WeatherForecast(props) {
  let [forecastTemp, setForecast] = useState({
    mintemp: null,
    maxtemp: null,
    date: null,
    icon: null,
    ready: false,
  });

  function search() {
    let apiKey = "6058dab818729bfcd7473650aa63148c";
    let units = "metric";
    console.log(props.coords);
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data.daily[1].temp.min);
    console.log(response.data);
    setForecast({
      mintemp: response.data.daily[1].temp.min,
      maxtemp: response.data.daily[1].temp.max,
      date: new Date(response.data.daily[1].dt * 1000),
      icon: response.data.daily[1].weather[0].icon,
      ready: true,
    });
  }

  if (forecastTemp.ready) {
    return (
      <div className="col-9 w-90">
        <div className="row">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h5>
                  <ForecastDayFormat timestamp={forecastTemp.date} />
                </h5>
              </div>
              <div className="temperatures">
                <span className="max-temp">
                  {Math.round(forecastTemp.maxtemp)}°
                </span>{" "}
                <span className="min-temp">
                  {Math.round(forecastTemp.mintemp)}°
                </span>
              </div>
              <WeatherTodayIcon icon={forecastTemp.icon} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Not working from forecast!";
  }
}
