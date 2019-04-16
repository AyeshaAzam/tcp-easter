import React, { Component } from "react";
import "./App.css";
import EasterEgg from "./EasterEgg";
import EasterGame from "./game/EggGame";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="easter">
          <h1 className="title">Happy easter!</h1>
        </div>
      </div>
    );
  }
}

export default App;
