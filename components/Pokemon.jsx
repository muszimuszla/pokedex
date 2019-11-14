import React, { Component } from "react";
import axios from "axios";
import Abilities from "./Abilities";
import Sprites from "./Sprites";
import Types from "./Types";
import GeneralInformation from "./GeneralInformation";
import Species from "./Species";
import beigeBtnBack from "../assets/beige_button_back.PNG";
import beigeBtnLeft from "../assets/beige_button_left.PNG";
import beigeBtnRight from "../assets/beige_button_right.PNG";
import beigeBtnShadow from "../assets/beige_button_shadow.PNG";
import yellow_light from "../assets/yellow_led_light.PNG";

class Pokemon extends Component {
  state = {
    pokemonPokedexNumber: "",
    pokemon: "",
    information: "generalInformation",
    light: "off"
  };

  async componentDidMount() {
    this.mounted = true;
    let pokemonPokedexNumber = this.props.pokemonPokedexNumber;
    try {
      var res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonPokedexNumber}/`
      );
    } catch (e) {
      console.log(`Pokemon axios request failed: ${e}`);
    }
    if (this.mounted) {
      this.setState({
        pokemonPokedexNumber: pokemonPokedexNumber,
        pokemon: res.data
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  ChooseInformation = () => {
    this.ChangeLed();
    if (this.state.information === "generalInformation") {
      this.setState({ information: "species" });
    } else {
      this.setState({ information: "generalInformation" });
    }
    setTimeout(this.ChangeLed, 250);
  };

  ChangeLed = () => {
    if (this.state.light === "off") {
      this.setState({ light: "on" });
    } else {
      this.setState({ light: "off" });
    }
  };

  Choose = () => {
    let choosen;
    if (this.state.information === "generalInformation") {
      choosen = (
        <GeneralInformation
          key={this.state.pokemon.height}
          name={this.state.pokemon.name}
          height={this.state.pokemon.height}
          weight={this.state.pokemon.weight}
          baseExp={this.state.pokemon.base_experience}
        />
      );
    } else if (this.state.information === "species") {
      choosen = (
        <Species
          key={this.state.pokemon.weight}
          pokedexNumber={this.state.pokemonPokedexNumber}
        />
      );
    } else {
      choosen = <div></div>;
    }
    return choosen;
  };

  render() {
    let choosen = this.Choose();

    let led;
    if (this.state.light === "on") {
      led = (
        <img className="yellowLight" src={yellow_light} alt="yellowLight" />
      );
    } else {
      led = <div></div>;
    }

    return (
      <React.Fragment>
        {led}
        {choosen}
        <div className="pokemonInfoCrossBg"></div>
        <img
          className="beigeButtonItem"
          src={beigeBtnBack}
          alt="beigeBtnBack"
        />
        <img
          className="beigeButtonItem"
          style={{ zIndex: "1", marginLeft: "7px", marginTop: "7px" }}
          src={beigeBtnLeft}
          alt="beigeBtnLeft"
          onClick={this.ChooseInformation}
        />
        <img
          className="beigeButtonItem"
          style={{ zIndex: "1", justifySelf: "end", marginRight: "2px" }}
          src={beigeBtnRight}
          alt="beigeBtnRight"
          onClick={this.ChooseInformation}
        />
        <img
          className="beigeButtonItem"
          style={{ marginLeft: "8.5px", marginTop: "16px" }}
          src={beigeBtnShadow}
          alt="beigeBtnShadow"
        />
        <div className="pokedexNumberItem">
          {this.state.pokemonPokedexNumber}
        </div>
        <div className="pokedenNumberItemCrossBg"></div>
        <Abilities
          key={this.state.pokemon.name}
          pokemonAbilities={this.state.pokemon.abilities}
        />
        <Types
          key={this.state.pokemon.types}
          pokemonTypes={this.state.pokemon.types}
        />
        <div className="abilitiesItemCrossBg"></div>
        <div className="typesItemCrossBg"></div>
        <div className="spriteItem">
          <Sprites
            key={this.state.pokemon.sprites}
            pokemonSprites={this.state.pokemon.sprites}
          />
        </div>
        <div className="spriteItemCrossBg"></div>
      </React.Fragment>
    );
  }
}

export default Pokemon;
