import { ADD_BOAT_SQUARE_P1, ADD_BOAT_SQUARE_P2, CHANGE_PLAYER, NEXT_BOAT, FIRE_P1, FIRE_P2, CHANGE_STATE, DISABLE_MOVE, P1_WON, P2_WON, NEW_GAME } from './types'


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

export const disableMove = () => ({
  type: DISABLE_MOVE
})

export const P1Won = () => ({
  type: P1_WON
})

export const P2Won = () => ({
  type: P2_WON
})

export const newGame = () => ({
  type: NEW_GAME
})
