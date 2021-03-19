import "./App.css";
import React from "react";
import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import { BrowserRouter } from "react-router-dom";
import SearchResults from "./components/searchResults/searchresults.component";
import SearchContext from "./searchContext";

// import InfiniteScroll from "react-infinite-scroll-component";

import "./scss/main.scss";
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "Pfh8JlnvQWeWQU_ZLsHRhUE8rF4YE4AN3KAd6mMnUyk",
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      apiResult: [],
    };
  }

  updateValue = (val) => {
    this.setState({ searchTerm: val }, () => {
      this.fetchImages(this.state.searchTerm);
      console.log(this.state.searchTerm);
    });
  };

  accessKey = "client_id=Pfh8JlnvQWeWQU_ZLsHRhUE8rF4YE4AN3KAd6mMnUyk";

  url = `https://api.unsplash.com/photos/?${this.accessKey}`;

  getAPIURL() {
    return this.url;
  }

  fetchImages = (queryTerm) => {
    console.log("curernt query:" + queryTerm);
    unsplash.search
      .getPhotos({
        query: `${queryTerm}`,
        page: 1,
        perPage: 40,
      })
      .then((result) => {
        if (result.errors) {
          console.log("error occurred: ", result.errors[0]);
        } else {
          const response = result.response;

          this.setState({ apiResult: response.results }, () => {
            //this.fetchImages(this.state.searchTerm);
            console.log(this.state.apiResult);
          });
        }
      });
  };

  render() {
    return (
      <BrowserRouter>
        <SearchContext.Provider
          value={{ state: this.state, updateValue: this.updateValue }}
        >
          <div className="App">
            <Header />
            <Hero />
            <SearchResults apidata={this.state.apiResult} />
          </div>
        </SearchContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
