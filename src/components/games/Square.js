import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Square.css'
import { addBoatSquareP1, addBoatSquareP2 } from '../../actions/actions'
import { connect } from 'react-redux'


class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    //addBoatSquareP1: PropTypes.func.isRequired,
    //boat: PropTypes.number.isRequired,
  }

  handleClick = () => {
    const {row, col, addBoatSquareP1, addBoatSquareP2, currentPlayer, boat, value} = this.props
    if (value !== 0 && value !== boat) return
    if (currentPlayer === 1) {
      addBoatSquareP1(row, col, boat)
    }
    else {
      addBoatSquareP2(row, col, boat)
    }
  }

  makeClassName = () => {
    const {value} = this.props
    let classNameArray = ['Square']
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
    boat: reduxState.boat,
    currentPlayer: reduxState.currentPlayer

  }
}

export default connect(mapStateToProps, { addBoatSquareP1, addBoatSquareP2 })(Square)

//creates class Square with props of the square
//className css purpose
//handleClick function to change the value of the square on the boatMapPlayer1(store)
//handleClick function calls addBoatSquare function
