import React, { Component } from "react";
import "./Egg.css";

class Egg extends Component {
  state = {
    cracked: false
  };

  crackEgg = () => {
    this.setState({
      cracked: true
    });

    if (this.props.increaseCount) {
      this.props.increaseCount();
    }
  };

  render() {
    const { cracked } = this.state;

    if (cracked)
      return (
        <div>
          <div className="container">
            <div className="egg-upper">
              <div className="upperCrack1"> </div>
              <div className="upperCrack2"> </div>
              <div className="upperCrack3"> </div>
              <div className="upperCrack4"> </div>
            </div>
            <div className="egg-lower">
              <div className="crack1"> </div>
              <div className="crack2"> </div>
              <div className="crack3"> </div>
            </div>
          </div>
        </div>
      );

    return <div onClick={this.crackEgg} className="egg" />;
  }
}

export default Egg;
