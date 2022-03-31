import React from "react";
import "./WeatherNearMe.css";

export default function WeatherNearMe() {
  return (
    <div className="row">
      <div className="col-3 text-center weather-near-me">
        <button className="btn button-primary" id="local">
          Weather near me
        </button>
      </div>
    </div>
  );
}
