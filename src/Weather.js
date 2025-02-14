import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.daily[0].temperature.day,
      city: response.data.city,
      country: response.data.country,
      wind: response.data.daily[0].wind.speed,
      humidity: response.data.daily[0].temperature.humidity,
      description: response.data.daily[0].condition.description,
      icon_url: response.data.daily[0].condition.icon_url,
      iconDescription: response.data.daily[0].condition.icon,
      date: new Date(response.data.daily[0].time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#5f6368"
          >
            <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
          </svg>
          {weatherData.city}, {weatherData.country}
        </h1>
        <ul>
          <li>
            <Time date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex ">
              <div>
                <img
                  src={weatherData.icon_url}
                  alt={weatherData.iconDescription}
                  className="img-float "
                />
              </div>
              <div>
                <span className="temperature ">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>{" "}
              </div>
            </div>
          </div>{" "}
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
              <li>Sunrise: 5:00</li>
              <li>Sunset: 16:00</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a7oe402d391da40bfcfe02337et07b50";
    let city = "Stockholm";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
