import React from "react";
import { BiSearchAlt } from "react-icons/bi";

function SearchBar() {
  return (
    <div className="searchbar">
      <label className="searchbar-label" htmlFor="src">
        <BiSearchAlt size={20} className="searchbar-icon" />
      </label>

      <input
        type="search"
        className="searchbar-input"
        placeholder="Search City.."
      />
    </div>
  );
}

export default SearchBar;
