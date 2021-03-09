import React from "react";

import "./header.styles.scss";
import logo from "../../assets/svg/froto_logo.svg";
// import Searchbar from "../searchbar/searchbar.component";

const Header = () => (
  <header className="header">
    <img src={logo} alt="" className="header__logo" />

    {/* <Searchbar /> */}
  </header>
);

export default Header;
