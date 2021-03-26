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
      displayDownloadBtnMobile: window.innerWidth < 900 ? "block" : "none",
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
        link.setAttribute("download", "file.png");
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
  }

  render() {
    const { apiImages, displayDownloadBtnMobile } = this.state;
    console.log(window.innerWidth);
    let { apidata } = this.props;
    return (
      <>
        {apidata.length < 2 ? (
          <Banner />
        ) : (
          <div style={{ margin: "3vw" }}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 3 }}
            >
              <Masonry columnsCount={3} gutter="2vw">
                {apidata.map((res) => (
                  <div className="search-item">
                    <img
                      // key={i}
                      src={res.urls.small}
                      className="search-item__img"
                      style={{ width: "100%", display: "block" }}
                      alt=""
                    />
                    <div className="user user__desktop">
                      <img
                        src={res.user.profile_image.small}
                        alt=""
                        className="user__img"
                      />
                      <p className="user__name">{res.user.name}</p>{" "}
                    </div>
                    <button
                      className="search-item__btn"
                      onClick={() => this.download(res)}
                    >
                      <div className="search-item__btn--img" />
                    </button>
                    <div className="search-item__mobile">
                      <div className="user__mobile">
                        <img
                          src={res.user.profile_image.small}
                          alt=""
                          className="user__img"
                        />
                        <p className="user__name">{res.user.name}</p>{" "}
                      </div>
                      <button
                        className="search-item__btn-text"
                        style={{ display: `${displayDownloadBtnMobile} ` }}
                        onClick={() => this.download(res)}
                      >
                        Download
                      </button>
                    </div>
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
