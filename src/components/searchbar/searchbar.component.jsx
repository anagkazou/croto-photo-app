import React from "react";

import "./searchbar.styles.scss";
import logo from "../../assets/svg/froto_logo.svg";
import search from "../../assets/svg/search.svg";

const Searchbar = () => (
  <div className="search">
    <input
      className="search__input"
      type="text"
      name="search-text"
      id="search-text"
      placeholder="Search"
    />
    <button type="submit"></button>
  </div>
);

export default Searchbar;
