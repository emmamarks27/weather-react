import React from "react";

export default function WeatherForecastIcon(props) {
  let url = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
  return (
    <div>
      <img src={url} id="today-weather-icon" alt="weather icon"></img>
    </div>
  );
}
