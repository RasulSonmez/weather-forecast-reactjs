import React from "react";

function Highlights() {
  return (
    <div>
      <h2 className="pt-5  text-sky-500 text-2xl font-medium">
        Weekly Forecast
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div class="flex flex-col bg-white  p-4 rounded-3xl mt-2">
          <h3 class="subtitle">Tempratures</h3>
          <div>
            <div class="flex items-center">
              <figure>
                <img
                  class="w-24"
                  src="/static/media/thermometer-warmer.738b6e27.svg"
                  alt="sunrise"
                />
              </figure>
              <span class="text-xl text-gray-600  font-semibold">
                <span class="font-semibold">Max: </span>
                <span class="font-normal">17°</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
