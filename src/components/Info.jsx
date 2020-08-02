import React, { Component } from 'react';

class Info extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="infoBox">
                    <h6> INSTRUCTIONS</h6>
                    <div className="info">
                        <div style={{marginRight:"2vw"}}>
                        <p> RIGTH</p>
                        <p> LEFT</p>
                        <p> UP </p>
                        <p> DOWN</p>
                        <p> GREY BTN  </p>
                        <p> BEIGE L BTN  </p>
                        <p> BEIGE R BTN</p>
                        </div>
                        <div>
                        <p> pokedex index next  </p>
                        <p> pokedex index previous  </p>
                        <p> pokedex index +10  </p>
                        <p> pokedex index -10  </p>
                        <p> pokedex index reset </p>
                        <p> pokemon info previous  </p>
                        <p> pokemon info next </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Info;