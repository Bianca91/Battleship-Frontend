import React, { PureComponent } from 'react'
//import PropTypes from 'prop-types'
import './Instructions.css'
import { connect } from 'react-redux'
import { checkBoat, createBoatInstruction } from '../lib/game'
import { nextBoat, changePlayer, changeState } from '../actions/actions'
import ErrorMessage from '../components/games/ErrorMessage'


export class Instructions extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {errorText: ""};
  }

  // static propTypes = {
  //   currentPlayer: PropTypes.number.isRequired,
  //   boat: PropTypes.number.isRequired,
  //   nextBoat: PropTypes.func.isRequired,
  //   changePlayer: PropTypes.func.isRequired,
  //   board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
  // }

makeText = () => {
  const {boat, gameState} = this.props
  if (gameState === "play") return ""
  return createBoatInstruction(boat)
}

handleClick = () => {
  const {boat, nextBoat, changePlayer, currentPlayer, boatMapPlayer1, boatMapPlayer2, gameState, changeState} = this.props
  let board = currentPlayer === 1 ? boatMapPlayer1 : boatMapPlayer2

  if (gameState === "addBoats") {
    if (checkBoat(boat, board) === true) {
      this.setState({errorText: ""})
      if (boat === 5) {
        if (currentPlayer === 1) {
          changePlayer()
        }
        else {
          changeState()
          changePlayer()
        }
      }
      nextBoat()
    }
    else {
      this.setState({errorText: "ERROR: Boat shape is not correct"})
    }
  }
  else {
    this.setState({errorText: ""})
    changePlayer()
  }

}

  render() {
    return (
      <div className="Instructions">
        <h3 className="CurrentPlayer">Player{this.props.currentPlayer} is {this.props.gameState === "addBoats" ? "adding boats" : "playing"}..</h3>
        <h4 className="Text">{this.makeText()}</h4>
        <ErrorMessage errorText={this.state.errorText} />
        <button onClick={this.handleClick} className = "okButton">OK</button>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    currentPlayer: reduxState.currentPlayer,
    boat: reduxState.boat,
    boatMapPlayer1: reduxState.boatMapPlayer1,
    boatMapPlayer2: reduxState.boatMapPlayer2,
    gameState: reduxState.gameState
  }
}

export default connect(mapStateToProps, { nextBoat, changePlayer, changeState })(Instructions)
