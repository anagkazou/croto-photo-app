import React from "react";

import "./hero.styles.scss";
import Searchbar from "../searchbar/searchbar.component";

const Hero = () => (
  <div className="hero">
    <h1 className="hero__text">
      Free images and videos for your creative needs.
    </h1>
    <Searchbar />
  </div>
);

export default Hero;
