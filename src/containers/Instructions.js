import React, { PureComponent } from 'react'
//import PropTypes from 'prop-types'
import './Instructions.css'
import { connect } from 'react-redux'
import { checkBoat, createBoatInstruction } from '../lib/game'
import { nextBoat, changePlayer } from '../actions/actions'
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
  const {boat} = this.props
  return createBoatInstruction(boat)
}

handleClick = () => {
  const {boat, nextBoat, changePlayer, currentPlayer, boatMapPlayer1, boatMapPlayer2} = this.props
  let board = currentPlayer === 1 ? boatMapPlayer1 : boatMapPlayer2
  if (checkBoat(boat, board) === true) {
    this.setState({errorText: ""})
    if (boat === 5) changePlayer()
    nextBoat()
  }
  else {
    this.setState({errorText: "ERROR: Boat shape is not correct"})
  }
}

  render() {
    return (
      <div className="Instructions">
        <h3 className="CurrentPlayer">Player{this.props.currentPlayer} is playing..</h3>
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
  }
}

export default connect(mapStateToProps, { nextBoat, changePlayer })(Instructions)
