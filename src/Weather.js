import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Stockholm");
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.daily[1].temperature.day,
      country: response.data.country,
      wind: response.data.daily[0].wind.speed,
      humidity: response.data.daily[0].temperature.humidity,
      description: response.data.daily[0].condition.description,
      icon_url: response.data.daily[0].condition.icon_url,
      iconDescription: response.data.daily[0].condition.icon,
      date: new Date(response.data.daily[0].time * 1000),
    });
  }

  function search() {
    const apiKey = "a7oe402d391da40bfcfe02337et07b50";

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    //search for a city
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
