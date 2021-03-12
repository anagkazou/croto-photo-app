import React from "react";

import "./hero.styles.scss";
import Searchbar from "../searchbar/searchbar.component";
import SearchContext from "../../searchContext";

const Hero = (props) => {
  return (
    <SearchContext.Consumer>
      {(context) => (
        <div className="hero">
          <h1 className="hero__text">
            Free images and videos for your creative needs.
          </h1>
          <Searchbar {...props} context={context} />
        </div>
      )}
    </SearchContext.Consumer>
  );
};

// const withContext = (Component) => {
//   return (props) => {
//       <MyContext.Consumer>
//            {(context) => {
//               return <Component {...props} context={context} />
//            }}
//       </MyContext.Consumer>
//   }
// }

export default Hero;
