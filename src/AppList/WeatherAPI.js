import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

function WeatherAPI() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = () => {
    const APIKey = "9e1ac06a6f72dc48dc80d70b4f040583";

    if (city === "") return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.cod === "404") {
          setNotFound(true);
          setWeatherData(null);
          return;
        }

        setNotFound(false);
        setWeatherData(json);
      });
  };

  const fetchSuggestions = (query) => {
    const APIKey = "9e1ac06a6f72dc48dc80d70b4f040583";

    if (query === "") {
      setSuggestions([]);
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${query}&type=like&appid=${APIKey}`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.cod === "200") {
          setSuggestions(json.list);
        }
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    fetchSuggestions(city);
  }, [city]);

  const containerStyle = {
    position: "relative",
    marginTop: "50px",
    width: "400px",
    height: weatherData || notFound ? "555px" : "100px",
    background: "linear-gradient(250deg, #fdd70069, #154f95be)",
    backdropFilter: "blur(30px)",
    border: "2px solid lightcyan",
    borderRadius: "16px",
    padding: "20px",
    color: "#fff",
    transition: "height 0.6s ease",
  };

  const searchBoxStyle = {
    position: "relative",
    width: "100%",
    height: "55px",
    display: "flex",
    alignItems: "center",
  };

  const searchBoxIconStyle = {
    position: "absolute",
    left: "10px",
    fontSize: "20px",
    color: "#fff",
  };

  const searchBoxInputStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "transparent",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "10px",
    outline: "none",
    fontSize: "22px",
    color: "#fff",
    fontWeight: "500",
    textTransform: "uppercase",
    padding: "0 40px 0 42px",
  };

  const searchBoxButtonStyle = {
    position: "absolute",
    right: "0",
    width: "40px",
    height: "100%",
    background: "transparent",
    border: "none",
    outline: "none",
    fontSize: "20px",
    color: "#fff",
    padding: "0 40px 0 5px",
    cursor: "pointer",
  };

  const suggestionsBoxStyle = {
    position: "absolute",
    top: "55px",
    width: "100%",
    background: "rgba(0, 0, 0, 0.7)",
    borderRadius: "10px",
    color: "#fff",
    zIndex: "1000",
  };

  const suggestionItemStyle = {
    padding: "10px",
    cursor: "pointer",
  };

  const weatherBoxStyle = {
    textAlign: "center",
    margin: "40px 0",
    overflow: "hidden",
    visibility: weatherData ? "visible" : "hidden",
    transform: weatherData ? "translateY(0%)" : "translateY(-100%)",
    transition: "transform 1s ease",
    transitionDelay: "0.6s",
  };

  const weatherBoxActiveStyle = {
    ...weatherBoxStyle,
    visibility: "visible",
    transform: "translateY(0%)",
  };

  const weatherBoxImgStyle = {
    width: "60%",
  };

  const tempStyle = {
    position: "relative",
    fontSize: "64px",
    lineHeight: "1",
    fontWeight: "700",
    margin: "20px 0 6px -30px",
  };

  const tempSpanStyle = {
    position: "absolute",
    fontSize: "24px",
    marginLeft: "4px",
  };

  const descriptionStyle = {
    fontSize: "22px",
    fontWeight: "500",
    textTransform: "capitalize",
  };

  const weatherDetailsStyle = {
    position: "absolute",
    bottom: "40px",
    left: "0",
    width: "100%",
    padding: "0 20px",
    display: "flex",
    overflow: "hidden",
    visibility: weatherData ? "visible" : "hidden",
    transform: weatherData ? "translateY(0%)" : "translateY(-100%)",
    transition: "transform 1s ease",
    transitionDelay: "1.2s",
  };

  const humidityStyle = {
    display: "flex",
    alignItems: "center",
    width: "50%",
    paddingLeft: "20px",
    justifyContent: "flex-start",
  };

  const windStyle = {
    display: "flex",
    alignItems: "center",
    width: "50%",
    paddingRight: "20px",
    justifyContent: "flex-end",
  };

  const iconStyle = {
    fontSize: "56px",
    marginRight: "10px",
  };

  const textStyle = {
    display: "inline-block",
    fontSize: "22px",
    fontWeight: "500",
  };

  const paragraphStyle = {
    fontSize: "14px",
    fontWeight: "500",
  };

  const notFoundStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    textAlign: "center",
    marginTop: "110px",
    overflow: "hidden",
    visibility: notFound ? "visible" : "hidden",
    transform: notFound ? "translateY(0%)" : "translateY(-100%)",
    transition: "transform 1s ease",
    transitionDelay: "0.6s",
  };

  const notFoundImgStyle = {
    width: "65%",
  };

  const notFoundTextStyle = {
    fontSize: "22px",
    fontWeight: "500",
    marginTop: "12px",
  };

  const GlobalStyle = createGlobalStyle`
    body {
      background: rgb(108, 75, 94);
      font-family: "Roboto", sans-serif;
    }
  `;

  const footerStyle = {
    fontSize: "1rem",
    marginTop: "5.6rem",
    marginBottom: "33rem",
    fontFamily: '"Courier Prime", monospace',
    fontWeight: 50,
    fontStyle: "normal",
    textAlign: "center",
    color: "#B3C0A4",
  };

  return (
    <>
      <GlobalStyle />
      <div className="weather-container" style={containerStyle}>
        <div className="search-box" style={searchBoxStyle}>
          <i className="bi bi-geo-alt-fill" style={searchBoxIconStyle}></i>
          <input
            type="text"
            placeholder="Enter your location"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            style={searchBoxInputStyle}
          />
          <button
            className="bi bi-search"
            onClick={handleSearch}
            style={searchBoxButtonStyle}
          ></button>
          {suggestions.length > 0 && (
            <div className="suggestions" style={suggestionsBoxStyle}>
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  style={suggestionItemStyle}
                  onClick={() => {
                    setCity(suggestion.name);
                    setSuggestions([]);
                  }}
                >
                  {suggestion.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {weatherData && (
          <div className="weather-box active" style={weatherBoxActiveStyle}>
            <div className="box">
              <div className="info-weather">
                <div className="weather">
                  <img
                    src={`https://i.postimg.cc/NfJV92Ks/cloud.png`}
                    alt="weather icon"
                    style={weatherBoxImgStyle}
                  />
                  <p className="temp" style={tempStyle}>
                    {parseInt(weatherData.main.temp)}
                    <span style={tempSpanStyle}>°C</span>
                  </p>
                  <p className="description" style={descriptionStyle}>
                    {weatherData.weather[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {weatherData && (
          <div className="weather-details active" style={weatherDetailsStyle}>
            <div className="humidity" style={humidityStyle}>
              <i className="bi bi-water" style={iconStyle}></i>
              <div className="text">
                <div className="info-humidity">
                  <span style={textStyle}>{weatherData.main.humidity}%</span>
                </div>
                <p style={paragraphStyle}>Humidity</p>
              </div>
            </div>

            <div className="wind" style={windStyle}>
              <i className="bi bi-wind" style={iconStyle}></i>
              <div className="text">
                <div className="info-wind">
                  <span style={textStyle}>
                    {parseInt(weatherData.wind.speed)}Km/h
                  </span>
                </div>
                <p style={paragraphStyle}>Wind Speed</p>
              </div>
            </div>
          </div>
        )}

        {notFound && (
          <div className="not-found active" style={notFoundStyle}>
            <div className="box">
              <img
                src="https://i.postimg.cc/C5436vMk/404.png"
                alt="not found"
                style={notFoundImgStyle}
              />
              <p style={notFoundTextStyle}>Oops! Location not found!</p>
            </div>
          </div>
        )}
      </div>
      <footer style={footerStyle}>
        Click Search icon after entering desired location <br />
        Info@mdzaid.us.kg
      </footer>
    </>
  );
}

export default WeatherAPI;
