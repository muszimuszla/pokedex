import React, { Component } from "react";
import axios from "axios";

class Species extends Component {
  state = {
    species: ""
  };

  async componentDidMount() {
    this.mounted = true;
    try {
      var res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${this.props.pokedexNumber}/`
      );
    } catch (e) {
      console.log(`Species axios request failed: ${e}`);
    }
    if (this.mounted) {
      this.setState({
        species: res.data
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <React.Fragment>
        {this.state.species ? (
          <React.Fragment>
            <div className="pokemonInfoNamesItem">
              <div>HAPPINESS </div>
              <div>COLOR:</div>
              <div>HABITAT: </div>
              <div>SHAPE: </div>
              <div>CAPTURE:</div>
            </div>
            <div className="pokemonInfoItem">
              <div>{this.state.species.base_happiness}</div>
              <div>{this.state.species.color.name}</div>
              <div>{this.state.species.habitat.name}</div>
              <div>{this.state.species.shape.name}</div>
              <div>{this.state.species.capture_rate}</div>
            </div>
          </React.Fragment>
        ) : (
          <div></div>
        )}
      </React.Fragment>
    );
  }
}

export default Species;
