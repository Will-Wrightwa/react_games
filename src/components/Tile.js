import React, { Component } from 'react';

class Tile extends Component {
  constructor(props) {
    super(props)
    this.state = {foo:"bar"}
  }
  render() {
    const margin = 0
    const size = ((1/8)* 100 - (2 * margin))
    const wrapper = {
      // margin: margin + "%",
      width: size + "%",
      paddingTop: size  + "%",
      position: 'relative',
      display: "inline-block",
      overflowY: 'hidden'

    }
    const style = {
      backgroundColor: this.props.color,
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    };

    return (

      <div style={style}></div>

    )
  }
}

export default Tile
