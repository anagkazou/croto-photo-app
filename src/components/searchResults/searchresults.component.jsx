import React, { useEffect } from "react";

import "./searchresults.styles.scss";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SearchContext from "../../searchContext";

const images = [
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/300/300?image=206",
];

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: this.props.searchTerm,
      images: [],
    };
  }
  fetchImages = (count = 10) => {
    const accessKey = "client_id=Pfh8JlnvQWeWQU_ZLsHRhUE8rF4YE4AN3KAd6mMnUyk";

    const url = `https://api.unsplash.com/photos/?${accessKey}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => data)
      .then((data) => {
        this.setState({ image: [...data] });
        console.log(this.state.images);
      });
  };
  componentDidMount() {
    this.fetchImages();
  }

  handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({
      searchTerm: value,
    });
    this.props.context.updateValue("searchTerm", value);
    console.log(this.props.context.state.searchTerm);
  };

  render() {
    let { images } = this.state;
    return (
      <SearchContext.Consumer>
        <div style={{ margin: "2rem" }}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
          >
            <Masonry gutter="10px">
              {images.map((image) => (
                <img
                  // key={i}
                  src={image.urls.thumb}
                  style={{ width: "100%", display: "block" }}
                  alt=""
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </SearchContext.Consumer>
    );
  }
}

export default SearchResults;
