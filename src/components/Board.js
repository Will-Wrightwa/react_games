import React, { Component } from 'react';
import Tile from './Tile'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {foo:"bar"}
  }
  render(){
    let arr = [
        1,0,1,0,1,0,1,0,
        0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,
        0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,
        0,1,0,1,0,1,0,1,
        1,0,1,0,1,0,1,0,
        0,1,0,1,0,1,0,1,
      ]
    const colors = ["grey","black"]
    const style = {
      width: "40vmin",
      height: "40vmin",
      display: "flex",
      flexWrap:"wrap",
      padding:"0.5%",
      border: "solid brown 3px"
    }
    // let bd = arr.map((row)=>row.map((t)=> < Tile color={ colors[t] } />))
    let bd = arr.map((t)=> < Tile color={ colors[t] }  />)
    console.log( bd )
      return (<div style={{display:"inline-block"}}>
        <div style={style} >
        {bd}
        </div>
      </div>
    )
  }
}


export default Board
