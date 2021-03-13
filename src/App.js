import "./App.css";
import React from "react";
import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import Banner from "./components/banner/banner.component";
import SearchResults from "./components/searchResults/searchresults.component";
import SearchContext from "./searchContext";

import Unsplash, { toJson } from "unsplash-js";
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

  accessKey = "client_id=Pfh8JlnvQWeWQU_ZLsHRhUE8rF4YE4AN3KAd6mMnUyk";

  url = `https://api.unsplash.com/photos/?${this.accessKey}`;

  getAPIURL() {
    return this.url;
  }
  fetchImages = async () => {
    try {
      await fetch(this.getAPIURL)
        .then((resp) => resp.json())
        .then((data) => data)
        .then((data) => {
          this.setState({ image: [...data] });
          console.log(this.state.images);
        });
    } catch (error) {
      console.error(error);
    }
  };

  async componentDidMount() {
    this.fetchImages();
  }
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
            <SearchResults apidata={this.state.images} />
          )}
        </div>
      </SearchContext.Provider>
    );
  }
}

export default App;
