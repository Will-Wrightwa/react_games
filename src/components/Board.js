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
      marginLeft: "auto",
      marginRight: "auto",

      width: "30%",
      display: "flex",
      flexWrap:"wrap",
      margin:0,
      padding:0

    }
    // let bd = arr.map((row)=>row.map((t)=> < Tile color={ colors[t] } />))
    let bd = arr.map((t)=> < Tile color={ colors[t] } />)
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
