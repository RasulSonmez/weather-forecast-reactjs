import React from "react";
import Icon1 from "../../../icons/01n.svg";
import Icon2 from "../../../icons/02d.svg";
import Icon3 from "../../../icons/04d.svg";

function ForecastCard() {
  return (
    <div>
      <h2 className="pt-5 text-center text-sky-500 text-2xl font-medium">
        Istanbul Province, <br /> Turkey
      </h2>
      <figure className="flex items-center justify-center">
        <img src={Icon1} alt="" />
      </figure>

      <div className="flex items-center justify-center flex-col">
        <div class="weather-inner">
          <span class="text-6xl text-sky-500">
            <strong>9</strong>
          </span>
          <span class="text-3xl pb-5 text-gray-400 ">°</span>
          <span class="text-2xl pb-4 text-gray-400 ">C</span>
        </div>
        <span class="text-gray-500  text-sm font-semibold mt-4">
          Feels Like: 8°
        </span>
        <div class="flex items-end mt-4">
          <span class="text-3xl text-sky-500 font-semibold pr-2">
            Çarşamba,
          </span>
          <time class="text-gray-400">21:00</time>
        </div>
      </div>
      <div className="border-b border-gray-200 border-bottom w-full my-8 mx-auto"></div>
      <div>
        <div class="flex items-center">
          <img className="h-14" src={Icon2} alt="overcast clouds" />
          <span className="capitalize pl-1 ">overcast clouds</span>
        </div>
        <div className="flex items-center">
          <figure>
            <img className="h-14" src={Icon3} alt="overcast clouds" />
          </figure>
          <span className="capitalize pl-1 ">Rain - 0%</span>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ForecastCard;
