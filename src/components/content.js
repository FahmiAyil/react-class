import React, { Component } from 'react';
import '../App.css';

import { connect } from "react-redux";
import { setName, setValue, setItemIdVal, addItem, kickItem } from "./../action";

// rmwc
import { TextField } from "rmwc/TextField";


class Content extends Component {
  state = {
    value: 0,
    event: "",
    Item: {}
  };

  checkItem = () => {
    if (!this.props.item) return <span>Kosong Plong</span>;

    return <ul>
        {this.props.item.map(i => (
          <li key={i.id} style={{ listStyle: "none", padding: 10 }}>
            {i.value} - {i.name} -{" "}
            <button onClick={() => this.add(i.id)}>Beli</button>
            <button onClick={() => this.kick(i.id)}>Buang</button>
          </li>
        ))}
      </ul>;
  };

  add = id => {
    let data = this.props.item.filter(i => i.id === id).pop();
    data.value = data.value + 1;
    this.setState({ value: this.state.value + 1 });
    this.props.setItemIdVal(data);
  };

  kick = async id => {
    let data = await this.props.item.filter(i => i.id !== id).pop();
    await this.props.kickItem(data);
  };

  handleChange = event => {   
    this.setState({ event: event.target.value });
  }

  handleSubmit = async(event) => {
    await this.setState({
      Item: {
        id: this.props.item.length +1,
        name: this.state.event,
        value: 0
      }})
    await this.props.addItem(this.state.Item);
    await this.setState({ Item: {} })
    // alert("Data sudah ditambahkan: " + this.state.event);
  }

  render() {
    return (
      <div>
        {console.log(this.props.item)}
        {console.log(this.props.total)}
        {this.checkItem()}
        <div >
          <TextField
            outlined
            label="Nama Barang..."
            onBlur={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Tambah</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.getItem,
  name: state.setItem.name,
  value: state.setItem.value,
  total: state.getTotal,
});

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch(setName(name)),
  setValue: value => dispatch(setValue(value)),
  setItemIdVal: (value) => dispatch(setItemIdVal(value)),
  addItem: value => dispatch(addItem(value)),
  kickItem: value => dispatch(kickItem(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
