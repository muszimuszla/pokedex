import React, { Component } from "react";
import Ability from "./Ability";

class Abilities extends Component {
  state = {
    pokemonAbilities: ""
  };

  componentDidMount() {
    this.mounted = true;
    const pokemonAbilities = this.props.pokemonAbilities;
    if (this.mounted) {
      this.setState({ pokemonAbilities: pokemonAbilities });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pokemonAbilities ? (
          <div className="abilitiesItem">
            {this.state.pokemonAbilities.map(pokemonAbility => (
              <Ability
                key={pokemonAbility.slot}
                pokemonAbility={pokemonAbility.ability}
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

export default Abilities;
