import React from "react";
import DropDownMenu from "./DropDown";
import ForecastCard from "./ForecastCard";
import SearchBar from "./Search";
function Sidebar() {
  return (
    <aside className="sidebar">
      <SearchBar />
      <DropDownMenu />
      <ForecastCard />
    </aside>
  );
}

export default Sidebar;
