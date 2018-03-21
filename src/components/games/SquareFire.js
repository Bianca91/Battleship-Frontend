import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './SquareFire.css'
import { fireP1, fireP2, changePlayer } from '../../actions/actions'
import { connect } from 'react-redux'
import { checkWhatWasFired } from '../../lib/game'


class SquareFire extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    //addBoatSquareP1: PropTypes.func.isRequired,
    //boat: PropTypes.number.isRequired,
  }

  handleClick = () => {
    const {row, col, fireP1, fireP2, boatMapPlayer1, boatMapPlayer2, currentPlayer, changePlayer, value, gameState} = this.props
    if (value !== 0 || gameState === "addBoats") return
    let fired
    if (currentPlayer === 1) {
      fired = checkWhatWasFired(row, col, boatMapPlayer2)
      console.log(fired);
      fireP1(row, col, fired)
      //changePlayer()
    }
    else {
      fired = checkWhatWasFired(row, col, boatMapPlayer1)
      console.log(fired);
      fireP2(row, col, fired)
      //changePlayer()
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
    gameState: reduxState.gameState
  }
}

export default connect(mapStateToProps, { fireP1, fireP2, changePlayer })(SquareFire)

//creates class Square with props of the square
//className css purpose
//handleClick function to change the value of the square on the boatMapPlayer1(store)
//handleClick function calls addBoatSquare function
