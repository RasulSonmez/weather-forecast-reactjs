import React from "react";
import { useMainContext } from "../../../../context/MainContext";
function WeeklyForecast() {
  const { weatherData, days, city } = useMainContext();

  console.log(weatherData.dt);
  return (
    <div>
      <h2 className="pt-5  text-sky-500 text-2xl font-medium">
        Weekly Forecast
      </h2>
      <h1 className="city-title">{city.name}</h1>
      <ul className="grid grid-cols-2 xl:grid-cols-8 md:grid-cols-3 gap-3 md:gap-6 lg:gap-2 m-4">
        {weatherData &&
          weatherData.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-col justify-center items-center bg-white  rounded-xl p-3"
            >
              <span class="font-semibold text-lg text-gray-600">
                {days[new Date(item.dt * 1000).getDay()]}
              </span>

              <img
                className="w-2/3"
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt="icon-01n"
              />
              <span className="text-xs text-gray-500 ">
                {" "}
                {item.weather[0].description.substring(0, 5)}
              </span>
              <span className="text-lg text-gray-500 ">
                {Math.floor(item.temp.max)}°C
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default WeeklyForecast;
