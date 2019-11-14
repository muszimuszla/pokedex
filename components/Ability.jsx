import React, { Component } from "react";
import axios from "axios";

class Ability extends Component {
  state = {
    pokemonAbility: "",
    abilityInfo: ""
  };

  async componentDidMount() {
    this.mounted = true;
    let pokemonAbility = this.props.pokemonAbility;
    try {
      var res = await axios.get(pokemonAbility.url);
    } catch (e) {
      console.log(`Ability axios request failed: ${e}`);
    }
    if (this.mounted) {
      this.setState({
        pokemonAbility: pokemonAbility,
        abilityInfo: res.data
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div style={{ fontSize: "8px" }}>{this.props.pokemonAbility.name}</div>
    );
  }
}

export default Ability;
