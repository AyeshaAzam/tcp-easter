import * as React from "react";
import Egg from "./Egg";
import "./EggGame.css";

class EggGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nrOfCrackedEggs: 0,
      highscore: 0,
      timer: 30,
      eggs: []
    };
  }

  componentDidMount() {
    const eggs = [];
    for (let i = 0; i < 20; i++) {
      eggs.push({
        id: i,
        cracked: false,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`
      });
    }
    this.setState({
      eggs: eggs
    });
  }

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
    const emptyEggs = [];

    for (let i = 0; i < 20; i++) {
      emptyEggs.push({
        id: i,
        cracked: false,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`
      });
    }

    this.setState({
      nrOfCrackedEggs: 0,
      timer: 30,
      eggs: emptyEggs
    });
  };

  componentWillMount() {
    this.interval = setInterval(() => {
      if (this.state.timer <= 0) {
        return;
      }
      this.setState({ timer: this.state.timer - 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onClick = id => {
    this.increaseCount();
    const { eggs } = this.state;
    eggs[id].cracked = true;

    this.setState({
      eggs: eggs
    });
  };

  render() {
    const { eggs } = this.state;

    if (eggs.length === 0) return <Egg />;

    return (
      <div className="gameContainer">
        {this.state.timer !== 0 && (
          <div className="eggs">
            {eggs.map((egg, index) => (
              <div
                key={index}
                style={{
                  position: "fixed",
                  top: egg.cracked ? egg.top : `${Math.random() * 100}%`,
                  left: egg.cracked ? egg.left : `${Math.random() * 100}%`
                }}
              >
                <Egg
                  key={index}
                  onClick={() => this.onClick(egg.id)}
                  cracked={egg.cracked}
                />
              </div>
            ))}
          </div>
        )}
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
