import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import Banner from "./components/banner/banner.component";
import SearchResults from "./components/searchResults/searchresults.component";
import SearchContext from "./searchContext";

// import InfiniteScroll from "react-infinite-scroll-component";

import "./scss/main.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      images: [],
    };
  }
  updateValue = (key, val) => {
    this.setState({ [key]: val });
  };

  render() {
    return (
      <SearchContext.Provider
        value={{ state: this.state, updateValue: this.updateValue }}
      >
        <div className="App">
          <Header />
          <Hero />
          <Banner />
          {this.state.searchTerm === "" ? null : (
            <SearchResults searchQuery={this.state.searchTerm} />
          )}
        </div>
      </SearchContext.Provider>
    );
  }
}

export default App;
