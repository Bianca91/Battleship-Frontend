import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './SquareFire.css'
import { fireP1, fireP2, changePlayer, disableMove , P1Won, P2Won } from '../../actions/actions'
import { connect } from 'react-redux'
import { checkWhatWasFired, checkIfWon } from '../../lib/game'


class SquareFire extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,

  }

  handleClick = () => {
    const {row, col, fireP1, fireP2, fireMapPlayer1, boatMapPlayer1, fireMapPlayer2, boatMapPlayer2, currentPlayer, value, gameState, disableMove, allowedNextMove, P1Won, P2Won } = this.props
    if (value !== 0 || gameState === "addBoats" || allowedNextMove === false) return
    let fired
    if (currentPlayer === 1) {
      fired = checkWhatWasFired(row, col, boatMapPlayer2)
      if (fired === 1) disableMove()
      if (checkIfWon(fireMapPlayer1, boatMapPlayer2, fired) === true) P1Won()
      fireP1(row, col, fired)
    }
    else {
      fired = checkWhatWasFired(row, col, boatMapPlayer1)
      if (fired === 1) disableMove()
      if (checkIfWon(fireMapPlayer2, boatMapPlayer1, fired) === true) P2Won()
      fireP2(row, col, fired)
    }
  }

  makeClassName = () => {
    const {value} = this.props
    let classNameArray = ['SquareFire']
    classNameArray.push(`value${value || 0}`)
    return classNameArray.join(' ')
  }


  render() {
    return (
      <div
      className = {this.makeClassName()}
      onClick = {this.handleClick}
      />

    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    currentPlayer: reduxState.currentPlayer,
    boatMapPlayer1: reduxState.boatMapPlayer1,
    boatMapPlayer2: reduxState.boatMapPlayer2,
    gameState: reduxState.gameState,
    allowedNextMove: reduxState.allowedNextMove,
    fireMapPlayer1: reduxState.fireMapPlayer1,
    fireMapPlayer2: reduxState.fireMapPlayer2
  }
}

export default connect(mapStateToProps, { fireP1, fireP2, changePlayer, disableMove, P1Won, P2Won })(SquareFire)

//creates class Square with props of the square
//className css purpose
//handleClick function to change the value of the square on the boatMapPlayer1(store)
//handleClick function calls addBoatSquare function
