import React from "react";
import Navbar from "../../Navbar";
import Highlights from "./Highlights";
import WeeklyForecast from "./WeeklyForecast";

function Container() {
  return (
    <div className="container">
      <Navbar />
      <WeeklyForecast />
      <Highlights />
    </div>
  );
}

export default Container;
