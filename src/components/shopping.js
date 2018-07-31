import React, { Component } from 'react';
import Header from "./header";
import Footer from "./footer";
import Content from "./content";
import '../App.css';

class Shopping extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}


export default Shopping;
