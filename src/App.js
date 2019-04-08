import React, { Component } from "react";
import "./App.css";
import Egg from "./Egg";
import EggGame from "./EggGame";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="easter">
          <h1 className="title">Happy easter!</h1>
          {/* <Egg /> */}
        </div>
        {/* <EggGame /> */}
      </div>
    );
  }
}

export default App;
