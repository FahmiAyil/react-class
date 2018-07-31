import React, { Component } from 'react';
import '../App.css';

class Shopping extends Component {
  state = {
    display: "inline-block",
    colorHeader: "white"
  };

  render() {
    return <div style={{ backgroundColor: "FireBrick" }}>
      <h5 style={{ textAlign:"center", padding:5, color: this.state.colorHeader }}> Copyright Glabs </h5>
    </div>;
  }
  
  
}

export default Shopping;
