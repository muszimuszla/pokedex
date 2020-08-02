import React, { Component } from "react";

class Sprites extends Component {
  state = {
    pokemonSprites: ""
  };

  componentDidMount() {
    this.mounted = true;
    const pokemonSprites = this.props.pokemonSprites;
    if (this.mounted) {
      this.setState({ pokemonSprites: pokemonSprites });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pokemonSprites ? (
          <div>
            <img
              className="img-responsive "
              style={{ width: "200px", imageRendering: "pixelated" }}
              src={this.state.pokemonSprites.front_default}
              alt="Pic"
            />
          </div>
        ) : (
          <div></div>
        )}
      </React.Fragment>
    );
  }
}

export default Sprites;
