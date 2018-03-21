import { ADD_BOAT_SQUARE_P1, ADD_BOAT_SQUARE_P2, CHANGE_PLAYER, NEXT_BOAT, FIRE_P1, FIRE_P2, CHANGE_STATE } from './types'


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

export const fireP1 = (row, col, fired) => ({
  type: FIRE_P1,
  payload: { row, col, fired }
})

export const fireP2 = (row, col, fired) => ({
  type: FIRE_P2,
  payload: { row, col, fired }
})

export const changeState = () => ({
  type: CHANGE_STATE
})
