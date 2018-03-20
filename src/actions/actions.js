import { ADD_BOAT_SQUARE_P1, ADD_BOAT_SQUARE_P2, CHANGE_PLAYER, NEXT_BOAT } from './types'


export const addBoatSquareP1 = (row, col, boat) => ({
  type: ADD_BOAT_SQUARE_P1,
  payload: { row, col, boat }
})

export const addBoatSquareP2 = (row, col, boat) => ({
  type: ADD_BOAT_SQUARE_P2,
  payload: { row, col, boat }
})

export const changePlayer = () => ({
  type: CHANGE_PLAYER
})

export const nextBoat = () => ({
  type: NEXT_BOAT
})
