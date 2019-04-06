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
  };

  render() {
    const { cracked } = this.state;

    if (cracked)
      return (
        <div>
          <div class="container">
            <div class="egg-upper">
              <div class="upperCrack1"> </div>
              <div class="upperCrack2"> </div>
              <div class="upperCrack3"> </div>
              <div class="upperCrack4"> </div>
            </div>
            <div class="egg-lower">
              <div class="crack1"> </div>
              <div class="crack2"> </div>
              <div class="crack3"> </div>
            </div>
          </div>
        </div>
      );

    return (
      <div
        onClick={() => {
          this.crackEgg();
          this.props.increateCount();
        }}
        class="egg"
      />
    );
  }
}

export default Egg;
