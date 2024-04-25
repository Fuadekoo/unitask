import React from 'react'
import "../weather/Weather.css"
import search_icon from "../../assets/search.png"
import clear_icon from "../../assets/clear.png"
import drizzle_icon from "../../assets/drizzle.png"
import cloud_icon from "../../assets/cloud.png"
import rain_icon from "../../assets/rain.png"
import snow_icon from "../../assets/snow.png"
import wind_icon from "../../assets/wind.png"
import humidity_icon from "../../assets/humidity.png"

function WeatherApp() {
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className='cityInput' placeholder='search' name="city" id="city" />
            <div className="search-icon">
                <img src={search_icon} alt="search" />
            </div>
            <div>
                <div className="weather-image">
                    <img src={cloud_icon} alt="" />
                </div>
                <div className="weather-temp">24c</div>
                <div className="weather-location">London</div>
                <div className="data-container">
                    <div className="element">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp