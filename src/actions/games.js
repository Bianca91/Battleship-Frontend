import * as request from 'superagent'
import {baseUrl} from '../constants'

export const ADD_GAME = 'ADD_GAME'
export const UPDATE_GAME = 'UPDATE_GAME'
export const UPDATE_GAMES = 'UPDATE_GAMES'
export const JOIN_GAME_SUCCESS = 'JOIN_GAME_SUCCESS'
export const UPDATE_GAME_SUCCESS = 'UPDATE_GAME_SUCCESS'
export const ADD_BOAT_SQUARE_P1 = 'ADD_BOAT_SQUARE_P1'
export const ADD_BOAT_SQUARE_P2 = 'ADD_BOAT_SQUARE_P2'

export const getGames = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/games`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: UPDATE_GAMES,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const joinGame = (gameId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/games/${gameId}/players`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: JOIN_GAME_SUCCESS
      })
    })
    .catch(err => console.error(err))
}

export const createGame = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
 console.log("createGame")
  request
    .post(`${baseUrl}/games`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: ADD_GAME,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const updateGame = (gameId, boardships, boardguess) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .patch(`${baseUrl}/games/${gameId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({boardships, boardguess})
    .then(result => {
      dispatch({
        type: UPDATE_GAME_SUCCESS
      })
    })
    .catch(err => console.error(err))
}
