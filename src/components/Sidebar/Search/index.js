import React from "react";
import { useMainContext } from "../../../context/MainContext";
import { BiSearchAlt } from "react-icons/bi";

function SearchBar() {
  const { setSearch } = useMainContext();

  return (
    <div className="searchbar">
      <label className="searchbar-label" htmlFor="src">
        <BiSearchAlt size={20} className="searchbar-icon" />
      </label>

      <input
        onChange={(e) => setSearch(e.target.value.toLocaleUpperCase())}
        type="search"
        className="searchbar-input"
        placeholder="Search City.."
      />
    </div>
  );
}

export default SearchBar;
