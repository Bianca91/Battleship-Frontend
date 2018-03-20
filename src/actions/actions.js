import { ADD_BOAT_SQUARE, CHANGE_PLAYER, NEXT_BOAT } from './types'


export const addBoatSquare = (row, col, boat) => ({
  type: ADD_BOAT_SQUARE,
  payload: { row, col, boat }
})

export const changePlayer = () => ({
  type: CHANGE_PLAYER
})

export const nextBoat = () => ({
  type: NEXT_BOAT
})
