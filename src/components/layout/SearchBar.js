import React from "react";
import SearchByName from "./SearchByName";
import SearchByTag from "./SearchByTag";

const SearchBar = () => {
  return (
    <nav id="SearchBar">
      <SearchByName />
      <SearchByTag />
    </nav>
  );
};

export default SearchBar;
