import * as React from "react";
import Egg from "./Egg";
import "./EggGame.css";

class EggGame extends React.Component {
  state = {
    nrOfCrackedEggs: 0,
    highscore: 0,
    timer: 30
  };

  increaseCount = () => {
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
          key={i}
          style={{
            position: "fixed",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
        >
          <Egg increaseCount={this.increaseCount} />
        </div>
      );
    }
    return (
      <div className="gameContainer">
        {this.state.timer !== 0 && <div className="eggs">{eggs}</div>}
        <div className="amount">
          <div>{this.state.nrOfCrackedEggs}</div>
          <div className="highscore">Highscore: {this.state.highscore}</div>
        </div>
        Time left: {this.state.timer}
        <button className="restart" onClick={this.restart}>
          Restart
        </button>
      </div>
    );
  }
}

export default EggGame;
