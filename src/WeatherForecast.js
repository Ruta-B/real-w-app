import React, { useState , useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);


   useEffect(() => {
     setLoaded(false);
   }, [props.coordinates]);

  function getForecast(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            return(<div className="col" key={index}>
          <ForecastDay data={dailyForecast} />
          </div>)
          })}
          
        </div>
      </div>
    );
  } else {
    let apiKey = "a7oe402d391da40bfcfe02337et07b50";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getForecast);
  }
}
