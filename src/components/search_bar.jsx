/* eslint-disable */
import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input type="search" className="form-control form-search" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
