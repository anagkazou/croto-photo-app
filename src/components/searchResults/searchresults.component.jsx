import React from "react";

import "./searchresults.styles.scss";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SearchContext from "../../searchContext";

// const images = [
//   "https://picsum.photos/200/300?image=1050",
//   "https://picsum.photos/300/300?image=206",
//   "https://picsum.photos/300/300?image=206",
//   "https://picsum.photos/200/300?image=1050",
//   "https://picsum.photos/300/300?image=206",
//   "https://picsum.photos/300/300?image=206",
//   "https://picsum.photos/300/300?image=206",
//   "https://picsum.photos/200/300?image=1050",
//   "https://picsum.photos/300/300?image=206",
//   "https://picsum.photos/200/300?image=1050",
//   "https://picsum.photos/300/300?image=206",
//   "https://picsum.photos/300/300?image=206",
// ];

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // searchTerm: this.props.searchTerm,
      images: this.props.apidata,
    };
  }

  // handleChange = (event) => {
  //   event.preventDefault();
  //   const { value } = event.target;
  //   this.setState({
  //     searchTerm: value,
  //   });
  //   this.props.context.updateValue("searchTerm", value);
  //   console.log(this.props.context.state.searchTerm);
  // };

  render() {
    let { images } = this.state;
    return (
      <SearchContext.Consumer>
        <div style={{ margin: "2rem" }}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 3, 750: 3, 900: 4 }}
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
