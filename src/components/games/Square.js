import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Square.css'
import { addBoatSquare } from '../../actions/actions'
import { connect } from 'react-redux'



class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    addBoatSquare: PropTypes.func.isRequired,
    boat: PropTypes.number.isRequired,
  }

  handleClick = () => {
    const {row, col, addBoatSquare, boat} = this.props
    addBoatSquare(row, col, boat)
  }


  render() {
    return (
      <div
      className = {`Square value${this.props.value}`}
      onClick = {this.handleClick}
      />

    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    boat: reduxState.boat
  }
}

export default connect(mapStateToProps, { addBoatSquare })(Square)

//creates class Square with props of the square
//className css purpose
//handleClick function to change the value of the square on the boatMapPlayer1(store)
//handleClick function calls addBoatSquare function
