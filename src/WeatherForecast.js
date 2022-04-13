import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weatherforecast.css";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  useEffect(() => {
    setReady(false);
  }, [props.coords]);

  let [ready, setReady] = useState(false);
  let [forecastTemp, setForecast] = useState(null);

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
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return forecastTemp.map(function (dailyForecast, index) {
      if (index > 0 && index < 6) {
        return (
          <div class="col" key={index}>
            <ForecastDay data={dailyForecast} />
          </div>
        );
      }
    });
  } else {
    search();
    return "Not working from forecast!";
  }
}
