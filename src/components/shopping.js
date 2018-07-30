import React, { Component } from 'react';

import '../App.css';

class Shopping extends Component {
  state = {
    color: "black",
    display:"inline-block",
    counterCart: [
      { id: 1, value: 0, item: "Keyboard" },
      { id: 2, value: 0, item: "Sandal" },
      { id: 3, value: 0, item: "Mouse" },
      { id: 4, value: 0, item: "HardDisk" },
    ]
  };

  render() {
    return (
      <div>
        { this.counterComponents() }
      </div>
    );
  }
  
  counterComponents(){
    if (this.state.counterCart === 0) return <label>"You have no cart"</label>

    return (
      <ul>{ 
        this.state.counterCart.map(c => (
          <li key={c.id} style={{ listStyle:"none" }}>
          <div style={{ display:"inline-block" ,padding:20, color: this.state.color }}>
            { c.value } 
          </div>
          <div style={{ display:"inline-block" ,padding:20, color: this.state.color }}>
            { c.item } 
          </div>
          <div style={{ display:"inline-block" ,padding:20, color: this.state.color }}>
              <button onClick={ () => this.addHandler(c.id) }>Add To Cart</button>
          </div>
          </li>
        )) 
      }</ul>
    )
  }

  addHandler = id => {
    // const addCounter = this.state.counterCart.filter(c => c.id !== id)
    this.setState({value: this.state.value + 1})
  }


}

export default Shopping;
