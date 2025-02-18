import React from "react";
import "./WeatherForecast.css"

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">
          ICON
          </div>
          <div className="forecast-daily-temp">
            {" "}
            <span className="max-temp">5° </span>/{" "}
            <span className="min-temp">-2°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
