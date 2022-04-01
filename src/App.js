import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import WeatherInfo from "./WeatherInfo";

export default function App() {
  const [city, setCity] = useState("London");
  let [weatherData, setWeatherData] = useState({
    temp: null,
    wind: null,
    humidity: null,
    description: null,
    ready: false,
    name: null,
    icon: null,
    date: null,
  });

  function handleSearch(event) {
    setCity(event.target.value);
  }

  function apiCall() {
    let apiKey = "6058dab818729bfcd7473650aa63148c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleRequest);
  }

  function handleRequest(response) {
    setWeatherData({
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      ready: true,
      name: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    apiCall();
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div>
            <WeatherInfo data={weatherData} />

            <form onSubmit={handleSubmit} className="search-form">
              <div className="row">
                <label htmlFor="search-engine" className="label">
                  Search for another city
                </label>
              </div>
              <div className="row">
                <div className="col-10">
                  <input
                    onChange={handleSearch}
                    type="text"
                    className="form-control"
                    id="search-engine"
                  />
                </div>

                <div className="col-2">
                  <input
                    type="submit"
                    value="search"
                    className="form-control btn btn-primary"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="container footnote">
          <h5>
            Coded by:{" "}
            <a
              href="https://github.com/emmamarks27/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Emma Marks
            </a>
          </h5>
        </div>
      </div>
    );
  } else {
    apiCall();
    return <div> Not working bro! </div>;
  }
}
