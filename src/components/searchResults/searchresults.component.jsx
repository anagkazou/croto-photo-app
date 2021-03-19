import React from "react";
import axios from "axios";
import "./searchresults.styles.scss";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Banner from "../banner/banner.component";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // searchTerm: this.props.searchTerm,
      apiImages: [this.props.apidata],
    };
  }

  download(image) {
    axios
      .request({
        url: image.urls.regular,
        method: "GET",
        responseType: "blob",
      })
      .then(({ data }) => {
        console.log(data);
        //const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = "/#";
        link.setAttribute("download", "file.png"); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
  }

  render() {
    console.log(this.props.apidata);
    let { apidata } = this.props;
    return (
      <>
        {apidata.length < 2 ? (
          <Banner />
        ) : (
          <div style={{ margin: "2rem" }}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 3 }}
            >
              <Masonry columnsCount={3} gutter="20px">
                {apidata.map((res) => (
                  <div className="search-item">
                    <img
                      // key={i}
                      src={res.urls.small}
                      className="search-item__img"
                      style={{ width: "100%", display: "block" }}
                      alt=""
                    />
                    <button
                      className="search-item__link"
                      onClick={() => this.download(res)}
                    >
                      <div className="search-item__link--img" />
                    </button>
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        )}
      </>
    );
  }
}

export default SearchResults;
