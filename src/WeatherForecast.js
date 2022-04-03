import React, { useState } from "react";
import axios from "axios";
import "./weatherforecast.css";
import WeatherTodayIcon from "./WeatherTodayIcon";

export default function WeatherForecast(props) {
  let [forecastTemp, setForecast] = useState({
    mintemp: null,
    maxtemp: null,
    icon: null,
    ready: false,
  });

  function search() {
    let apiKey = "6058dab818729bfcd7473650aa63148c";
    let units = "metric";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data.daily[1].temp);
    setForecast({
      mintemp: response.data.daily[1].temp.min,
      maxtemp: response.data.daily[1].temp.max,
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
                <h5>Mon</h5>
              </div>
              <div className="temperatures">
                <span className="max-temp">{forecastTemp.max}°</span>{" "}
                <span className="min-temp">{forecastTemp.min}°</span>
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
