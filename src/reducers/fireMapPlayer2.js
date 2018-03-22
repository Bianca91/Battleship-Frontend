import { FIRE_P2, NEW_GAME } from '../actions/types'

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
    case FIRE_P2:
      return state.map((thisRow, rowIndex) => {
        if (rowIndex !== payload.row) return thisRow

        return thisRow.map((thisValue, colIndex) => {
          if (colIndex !== payload.col) return thisValue

          switch (thisValue) {
            case 0: return payload.fired
            default: return 0
          }
        })
      })

    case NEW_GAME:
      return emptyBoard
      
    default:
      return state
  }
}
