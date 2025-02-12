import React from "react";
import "./Weather.css";

export default function Weather() {
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
        Stockholm, Sweden
      </h1>
      <ul>
        <li>Wednesday, 09:03</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
                
                      
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.RrHwM1YDjzezbDfF19ltKQHaHa&pid=Api&P=0&h=180"
              alt="Sunny weather icon" className="img-float "
            />
              <span className="temperature">20</span>
              <span className="unit">°C</span>{" "}
            </div>{" "}
          
       
        <div className="col-6">
          <ul>
            <li>Humidity: 75 %</li>
            <li>Wind: 3,4 km/h</li>
            <li>Sunrise: 5:00</li>
            <li>Sunset: 16:00</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
