import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Square from '../components/games/Square'
import './Board.css'
import { connect } from 'react-redux'


export class Board extends PureComponent {
  static propTypes = {
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
  }

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
    return (
      <div className="Board">
        {this.props.board.map(this.renderRow)}
      </div>
    )
  }
}


const mapStateToProps = (reduxState) => {

  return {
    board: reduxState.board
  }
}


export default connect(mapStateToProps)(Board)

//prop board (arrayOfarray) that is connected to boatMapPlayer1
//for each row in board do renderRow function
//then for each value in row do renderSquare function
//creates component square to which we give value, row, col
