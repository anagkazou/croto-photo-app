import React from "react";

import "./searchbar.styles.scss";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
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
    return (
      <div className="search">
        <input
          className="search__input"
          type="text"
          name="search-text"
          id="search-text"
          placeholder="Search"
          onChange={this.handleChange}
        />
        <button type="submit" />
      </div>
    );
  }
}

export default Searchbar;
