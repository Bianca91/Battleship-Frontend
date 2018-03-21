import React, { PureComponent } from 'react'
//import PropTypes from 'prop-types'
import SquareFire from '../components/games/SquareFire'
import './Board.css'
import { connect } from 'react-redux'


export class Board2 extends PureComponent {
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
      <SquareFire
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
          {this.props.fireMapPlayer1.map(this.renderRow)}
        </div>
      )
    }
    else {
      return (
        <div className="Board">
          {this.props.fireMapPlayer2.map(this.renderRow)}
        </div>
      )
    }
  }
}


const mapStateToProps = (reduxState) => {
  return {
    fireMapPlayer1: reduxState.fireMapPlayer1,
    fireMapPlayer2: reduxState.fireMapPlayer2,
    currentPlayer: reduxState.currentPlayer,
  }
}


export default connect(mapStateToProps)(Board2)

//prop board (arrayOfarray) that is connected to boatMapPlayer1
//for each row in board do renderRow function
//then for each value in row do renderSquare function
//creates component square to which we give value, row, col
