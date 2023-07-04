import React, { useState } from "react";
const api = {
  key: "74abde792af0b43fbafa5d46c343ce8b",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(
        `${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`
      )
        .then(response => response.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  }

  const dateBuilder = (date) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    let date1 = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    return `${day} ${date1} ${month} ${year}`;
  };
  return (
    <div className= {
      (typeof weather.main != 'undefined') ? (
        (weather.main.temp > 70) ? 'app warm' : 'app')
      : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°F</div>
              <div className="feels">Feels like {Math.round(weather.main.feels_like)}°F</div>
              <div className="weather">{weather.weather[0].main}</div>
              <div className = 'wind'>Wind: {weather.wind.speed}mph</div>
              <div className = 'low'>{Math.round(weather.main.temp_min)}°F / {Math.round(weather.main.temp_max)}°F</div>
              <div className = 'wind'>Humidity: {weather.main.humidity}%</div>
              <div>

              </div>
              
              
            </div>
          </div>
        ) : ("")}
      </main>
    </div>
  );
}

export default App;
