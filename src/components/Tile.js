import React, { Component } from 'react';

class Tile extends Component {
  constructor(props) {
    super(props)
    this.state = {foo:"bar"}
  }
  render() {
    const margin = 0.1
    const size = ((1/8)* 100 - (2 * margin))

    const style = {
      margin: margin + "%",
      width: size + "%",
      height: size + "%",
      backgroundColor: this.props.color
    };

    return (

      <div style={style}></div>

    )
  }
}

export default Tile
