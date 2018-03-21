import { ADD_BOAT_SQUARE_P1 } from '../actions/types'

const emptyBoard = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]

export default (state = emptyBoard, {type, payload } = {}) => {
  switch (type) {
    case ADD_BOAT_SQUARE_P1:
      return state.map((thisRow, rowIndex) => {
        if (rowIndex !== payload.row) return thisRow

        return thisRow.map((thisValue, colIndex) => {
          if (colIndex !== payload.col) return thisValue

          switch (thisValue) {
            case 0: return payload.boat
            default: return 0
          }
        })
      })

    default:
      return state
  }
}
