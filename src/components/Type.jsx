import React, { Component } from "react";
import axios from "axios";

class Type extends Component {
  state = {
    slot: "",
    typeName: "",
    type: ""
  };

  async componentDidMount() {
    this.mounted = true;
    try {
      var res = await axios.get(this.props.type.url);
    } catch (e) {
      console.log(`Type axios request failed: ${e}`);
    }
    if (this.mounted) {
      this.setState({
        slot: this.props.slot,
        typeName: this.props.type.name,
        type: res.data
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return <div style={{ fontSize: "8px" }}> {this.props.type.name}</div>;
  }
}

export default Type;
