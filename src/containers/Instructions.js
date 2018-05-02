import React, { PureComponent } from "react";
import "./Instructions.css";
import { connect } from "react-redux";
import { checkBoat, createBoatInstruction } from "../lib/game";
import {
  nextBoat,
  changePlayer,
  changeState,
  newGame
} from "../actions/actions";
import ErrorMessage from "../components/games/ErrorMessage";
import { withRouter } from "react-router";
import Board1 from "./Board1";
import Board2 from "./Board2";
import GamesList from "../components/games/GamesList";
import TopBar from "../components/layout/TopBar";

export class Instructions extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { errorText: "" };
  }

  makeText = () => {
    const { boat, gameState } = this.props;
    if (gameState !== "addBoats") return "";
    return createBoatInstruction(boat);
  };

  handleClick = () => {
    const {
      boat,
      nextBoat,
      changePlayer,
      currentPlayer,
      boatMapPlayer1,
      boatMapPlayer2,
      gameState,
      changeState,
      newGame
    } = this.props;
    let board = currentPlayer === 1 ? boatMapPlayer1 : boatMapPlayer2;

    if (gameState === "addBoats") {
      if (checkBoat(boat, board) === true) {
        this.setState({ errorText: "" });
        if (boat === 5) {
          if (currentPlayer === 1) {
            changePlayer();
          } else {
            changeState();
            changePlayer();
          }
        }
        nextBoat();
      } else {
        this.setState({ errorText: "ERROR: Boat shape is not correct" });
      }
    } else if (gameState === "play") {
      this.setState({ errorText: "" });
      changePlayer();
    } else {
      newGame();
    }
  };

  render() {
    let mainText;
    let buttonText;
    switch (this.props.gameState) {
      case "addBoats":
        mainText = "is adding boats..";
        buttonText = "Next Boat";
        break;
      case "play":
        mainText = "is playing..";
        buttonText = "OK";
        break;
      default:
        mainText = "has won !!!";
        buttonText = "New Game";
    }

    return (
      <div className="Instructions">
        <h3 className="CurrentPlayer">
          Player{this.props.currentPlayer} {mainText}
        </h3>
        <h4 className="Text">{this.makeText()}</h4>
        <ErrorMessage errorText={this.state.errorText} />
        <button onClick={this.handleClick} className="okButton">
          {buttonText}
        </button>
        <div className="Boards">
          <div className="MyFloat">
            <div className="MyFloatTitle">My Float</div>
            <div className="MyFloatBoard">
              <Board1 />
            </div>
          </div>

          <div className="Opponent">
            <div className="OpponentTitle">My Opponent</div>
            <div className="OpponentBoard">
              <Board2 />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    currentPlayer: reduxState.currentPlayer,
    boat: reduxState.boat,
    boatMapPlayer1: reduxState.boatMapPlayer1,
    boatMapPlayer2: reduxState.boatMapPlayer2,
    gameState: reduxState.gameState
  };
};

export default connect(mapStateToProps, {
  nextBoat,
  changePlayer,
  changeState,
  newGame
})(Instructions);
