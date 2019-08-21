/* eslint-disable */
import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.props.handleClick} data-id={this.props.id} />
    );
  }
}

export default Gif;
