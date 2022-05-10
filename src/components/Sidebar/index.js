import React from "react";
import ForecastCard from "./ForecastCard";
import SearchBar from "./Search";

function Sidebar() {
  return (
    <aside className="sidebar">
      <SearchBar />
      <ForecastCard />
    </aside>
  );
}

export default Sidebar;
