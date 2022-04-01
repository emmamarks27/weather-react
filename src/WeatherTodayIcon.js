import React from "react";
import "./WeatherTodayIcon.css";

export default function WeatherTodayIcon(props) {
  let url = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
  return (
    <div>
      <img src={url} id="today-weather-icon" alt="weather icon"></img>
    </div>
  );
}
