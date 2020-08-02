import React, { Component } from "react";

class GeneralInformation extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="pokemonInfoNamesItem">
          <div>NAME: </div>
          <div>HEIGHT:</div>
          <div>WEIGHT: </div>
          <div>BASE EXP: </div>
        </div>
        <div className="pokemonInfoItem">
          <div>{this.props.name}</div>
          <div> {this.props.height}</div>
          <div> {this.props.weight}</div>
          <div> {this.props.baseExp}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default GeneralInformation;
