import React, { Component } from 'react';
import '../App.css';

import { connect } from "react-redux";

class Header extends Component {
  state = {
    display: "inline-block",
    colorHeader: "white"
  };

  render() {
    return <div style={{ backgroundColor: "FireBrick" }}>
        <h1 style={{ display: this.state.display, width: "85%", color: this.state.colorHeader }}> Shopping with React </h1>
        <span style={{ }}> Total Cart {this.props.total} </span>
      </div>;
  }
  
  
}

const mapStateToProps = state => ({
  total: state.getTotal
});

export default connect(
  mapStateToProps,
)(Header);
