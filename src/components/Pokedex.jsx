import React, { Component } from "react";
import Pokemon from "./Pokemon";
import Info from "./Info";
import btnLeft from "../assets/cross_gray_left.PNG";
import btnLeftShadow from "../assets//cross_gray_left_shadow.PNG";
import btnRight from "../assets/cross_gray_right.PNG";
import btnRightShadow from "../assets/cross_gray_right_shadow.PNG";
import btnUp from "../assets/cross_gray_up.PNG";
import btnUpShadow from "../assets/cross_gray_up_shadow.PNG";
import btnDown from "../assets/cross_gray_down.PNG";
import btnDownShadow from "../assets/cross_gray_down_shadow.PNG";
import btnMiddle from "../assets/cross_gray_middle.PNG";
import bg from "../assets/pokedex_without_buttons.PNG";
import blue_light from "../assets/blue_led_light.PNG";
import resetBtn from "../assets/small_gray_button.PNG";
import resetBtnShadow from "../assets/small_gray_button_shadow.PNG";
import infoBtn from "../assets/info.png";

class Pokedex extends Component {
  state = {
    pokemonPokedexNumber: 1,
    light: "off",
    info: "unclicked"
  };

  NextPokemon = () => {
    this.ChangeLed();
    if (this.state.pokemonPokedexNumber + 1 > 151) {
      this.setState({ pokemonPokedexNumber: 1 });
    } else {
      this.setState({
        pokemonPokedexNumber: this.state.pokemonPokedexNumber + 1
      });
    }
    setTimeout(this.ChangeLed, 250);
  };

  NextTenPokemon = () => {
    this.ChangeLed();
    if (this.state.pokemonPokedexNumber + 10 > 151) {
      this.setState({ pokemonPokedexNumber: 1 });
    } else {
      this.setState({
        pokemonPokedexNumber: this.state.pokemonPokedexNumber + 10
      });
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

  PreviousPokemon = () => {
    this.ChangeLed();
    if (this.state.pokemonPokedexNumber - 1 === 0) {
      this.setState({ pokemonPokedexNumber: 151 });
    } else {
      this.setState({
        pokemonPokedexNumber: this.state.pokemonPokedexNumber - 1
      });
    }
    setTimeout(this.ChangeLed, 250);
  };

  PreviousTenPokemon = () => {
    this.ChangeLed();
    if (this.state.pokemonPokedexNumber - 10 < 0) {
      this.setState({ pokemonPokedexNumber: 150 });
    } else {
      this.setState({
        pokemonPokedexNumber: this.state.pokemonPokedexNumber - 10
      });
    }
    setTimeout(this.ChangeLed, 250);
  };

  ResetPokemon = () => {
    this.ChangeLed();
    this.setState({ pokemonPokedexNumber: 1 });
    setTimeout(this.ChangeLed, 250);
  };

  ShowInfo = () => {
    if (this.state.info === "clicked") {
      this.setState({ info: "unclicked" });
    } else {
      this.setState({ info: "clicked" });
    }
  };

  render() {
    var led;
    if (this.state.light === "on") {
      led = <img className="blueLight" src={blue_light} alt="blueLight" />;
    } else {
      led = <React.Fragment></React.Fragment>;
    }

    var info;
    if (this.state.info === "clicked") {
      info = <Info />;
    } else {
      info = <React.Fragment></React.Fragment>;
    }
    return (
      <React.Fragment>
        <div className="tooSmallDevice">
          Pokemons are happier when they have more space, maybe you should try
          to catch them on desktop device
        </div>
        <div className="mainContainer">
          <div className="pokedexContainer">
            <img className="pokedexImage" src={bg} alt="bg" />
            <div className="pokemonGrid">
              {led}
              <Pokemon
                key={this.state.pokemonPokedexNumber}
                pokemonPokedexNumber={this.state.pokemonPokedexNumber}
              /> 
              <img
                className="resetButtonItem"
                style={{ zIndex: "1", marginRight: "6px", marginBottom: "6px" }}
                src={resetBtn}
                alt="resetBtn"
                onClick={this.ResetPokemon}
              />
              <img
                className="resetButtonItem"
                src={resetBtnShadow}
                alt="resetBtnShadow"
              />
              <div className="crossButtonItem">
                <div className="crossButtonGrid">
                  <img
                    className="crossButtonUpItem"
                    src={btnUp}
                    alt="btnUp"
                    onClick={this.NextTenPokemon}
                  />
                  <img
                    className="crossButtonUpShadowItem"
                    src={btnUpShadow}
                    alt="btnUpShadow"
                  />
                  <img
                    className="crossButtonLeftItem"
                    src={btnLeft}
                    alt="btnLeft"
                    onClick={this.PreviousPokemon}
                  />
                  <img
                    className="crossButtonLeftShadowItem"
                    src={btnLeftShadow}
                    alt="btnLeftShadow"
                  />
                  <img
                    className="crossButtonMiddleItem"
                    src={btnMiddle}
                    alt="btnMiddle"
                  />
                  <img
                    className="crossButtonRightItem"
                    src={btnRight}
                    alt="btnRight"
                    onClick={this.NextPokemon}
                  />
                  <img
                    className="crossButtonRightShadowItem"
                    src={btnRightShadow}
                    alt="btnRightShadow"
                  />
                  <img
                    className="crossButtonDownItem"
                    src={btnDown}
                    alt="btnDown"
                    onClick={this.PreviousTenPokemon}
                  />
                  <img
                    className="crossButtonDownShadowItem"
                    src={btnDownShadow}
                    alt="btnDownShadow"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            className="infoButton"
            src={infoBtn}
            alt="infoBtn"
            onClick={this.ShowInfo}
          />
        </div>

        {info}
      </React.Fragment>
    );
  }
}

export default Pokedex;
