import React from 'react'
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
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <div className="flex items-center justify-between w-full max-w-md p-4 bg-white shadow-md rounded-lg">
            <input type="text" className='flex-grow p-2 border border-gray-300 rounded-md' placeholder='search' name="city" id="city" />
            <div className="ml-2">
                <img src={search_icon} alt="search" className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-center ml-4">
                <div className="mb-2">
                    <img src={cloud_icon} alt="weather" className="w-12 h-12" />
                </div>
                <div className="text-2xl font-semibold">24c</div>
                <div className="text-lg text-gray-600">London</div>
                <div className="flex mt-2 space-x-4">
                    <div className="flex items-center">
                        {/* <img src="" alt="" className="w-6 h-6" /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp