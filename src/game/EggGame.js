import * as React from "react";
import Egg from "./Egg";
import "./EggGame.css";

const NUMBER_OF_EGGS = 20;
const GAME_TIMER = 30;

class EggGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nrOfCrackedEggs: 0,
      highscore: 0,
      timer: GAME_TIMER,
      eggs: []
    };
  }

  componentDidMount() {
    //   const eggs = [];
    //   for (let i = 0; i < NUMBER_OF_EGGS; i++) {
    //     eggs.push({
    //       id: i,
    //       cracked: false,
    //       top: `${Math.random() * 100}%`,
    //       left: `${Math.random() * 100}%`
    //     });
    //   }
    //   this.setState({
    //     eggs: eggs
    //   });
  }

  // increaseCount = () => {
  //   const updatedNumber = this.state.nrOfCrackedEggs + 1;
  //   const { highscore } = this.state;
  //   this.setState({
  //     nrOfCrackedEggs: this.state.nrOfCrackedEggs + 1,
  //     highscore:
  //       updatedNumber > this.state.highscore ? updatedNumber : highscore
  //   });
  // };

  // restart = () => {
  //   const { eggs } = this.state;

  //   eggs.map((egg, index) => {
  //     eggs[index].cracked = false;
  //   });

  //   this.setState({
  //     nrOfCrackedEggs: 0,
  //     timer: GAME_TIMER,
  //     eggs: eggs
  //   });
  // };

  // componentWillMount() {
  //   this.interval = setInterval(() => {
  //     if (this.state.timer <= 0) {
  //       return;
  //     }
  //     this.tick();
  //   }, 1000);
  // }

  // tick = () => {
  //   const { eggs, timer } = this.state;
  //   this.setState({ timer: timer - 1 });
  //   eggs.map((egg, index) => {
  //     if (egg.cracked) return null;

  //     eggs[index].top = Math.random() * 100;
  //     eggs[index].left = Math.random() * 100;
  //   });
  //   this.setState({
  //     eggs: eggs
  //   });
  // };

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  onClick = id => {
    //   this.increaseCount();
    //   const { eggs } = this.state;
    //   eggs[id].cracked = true;
    //   this.setState({
    //     eggs: eggs
    //   });
  };

  render() {
    const { eggs } = this.state;

    if (eggs.length === 0) return <Egg />;

    return (
      <div className="gameContainer">
        {/* {this.state.timer !== 0 && (
          <div className="eggs">
            {eggs.map((egg, index) => (
              <div
                key={index}
                style={{
                  position: "fixed",
                  top: egg.top + "%",
                  left: egg.left + "%"
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
        )} */}

        {/* <div className="amount">
          <div>{this.state.nrOfCrackedEggs}</div>
          <div className="highscore">Highscore: {this.state.highscore}</div>
        </div>
        Time left: {this.state.timer}
        <button className="restart" onClick={this.restart}>
          Restart
        </button> */}
      </div>
    );
  }
}

export default EggGame;
