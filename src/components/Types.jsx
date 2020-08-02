import React, { Component } from "react";
import Type from "./Type";

class Types extends Component {
  state = {
    pokemonTypes: ""
  };

  componentDidMount() {
    this.mounted = true;
    const pokemonTypes = this.props.pokemonTypes;
    if (this.mounted) {
      this.setState({ pokemonTypes: pokemonTypes });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pokemonTypes ? (
          <div className="typesItem">
            {this.state.pokemonTypes.map((pokemonType, i) => (
              <Type
                key={this.state.pokemonTypes[i].slot}
                slot={this.state.pokemonTypes[i].slot}
                type={this.state.pokemonTypes[i].type}
              />
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </React.Fragment>
    );
  }
}

export default Types;
