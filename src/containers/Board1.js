import React, { PureComponent } from 'react'
//import PropTypes from 'prop-types'
import Square from '../components/games/Square'
import './Board.css'
import { connect } from 'react-redux'


export class Board1 extends PureComponent {
  // static propTypes = {
  //   board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  // }

  renderRow = (row, rowIndex) => {
    return (
      <div key={rowIndex} className="row">
        {row.map(this.renderSquare(rowIndex))}
      </div>
    )
  }

  renderSquare = rowIndex => (value, colIndex) => {
    return (
      <Square
      key={colIndex}
      value={value}
      row={rowIndex}
      col={colIndex}
      />
    )
  }

  render() {
    if (this.props.currentPlayer === 1) {
      return (
        <div className="Board">
          {this.props.boatMapPlayer1.map(this.renderRow)}
        </div>
      )
    }
    else {
      return (
        <div className="Board">
          {this.props.boatMapPlayer2.map(this.renderRow)}
        </div>
      )
    }
  }
}


const mapStateToProps = (reduxState) => {
  return {
    boatMapPlayer1: reduxState.boatMapPlayer1,
    boatMapPlayer2: reduxState.boatMapPlayer2,
    currentPlayer: reduxState.currentPlayer,
  }
}


export default connect(mapStateToProps)(Board1)

//prop board (arrayOfarray) that is connected to boatMapPlayer1
//for each row in board do renderRow function
//then for each value in row do renderSquare function
//creates component square to which we give value, row, col
