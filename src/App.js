import React, { Component } from "react";
import "./App.css";
import Egg from "./Egg";

class App extends Component {
  state = {
    nrOfCrackedEggs: 0,
    highscore: 0,
    timer: 30
  };

  increateCount = () => {
    const updatedNumber = this.state.nrOfCrackedEggs + 1;
    const { highscore } = this.state;
    this.setState({
      nrOfCrackedEggs: this.state.nrOfCrackedEggs + 1,
      highscore:
        updatedNumber > this.state.highscore ? updatedNumber : highscore
    });
  };

  restart = () => {
    this.setState({
      nrOfCrackedEggs: 0,
      timer: 30
    });
  };

  componentWillMount() {
    this.interval = setInterval(() => {
      if (this.state.timer <= 0) {
        clearInterval(this.interval);
        this.forceUpdate();
        return;
      }
      this.setState({ timer: this.state.timer - 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const eggs = [];

    for (let i = 0; i < 20; i++) {
      eggs.push(
        <div
          style={{
            position: "fixed",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
        >
          <Egg increateCount={this.increateCount} />
        </div>
      );
    }

    return (
      <div className="app">
        <h1 className="title">Happy easter!</h1>
        {this.state.timer !== 0 && <div className="eggs">{eggs}</div>}
        <div className="amount">
          <div>{this.state.nrOfCrackedEggs}</div>
          <div className="highscore">Highscore: {this.state.highscore}</div>
        </div>
        <button onClick={this.restart}>Restart</button>
        Time left: {this.state.timer}s
      </div>
    );
  }
}

export default App;
