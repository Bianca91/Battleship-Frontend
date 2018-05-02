import { DISABLE_MOVE, CHANGE_PLAYER, NEW_GAME } from '../actions/types'

export default (state = false , {type, payload } = {}) => {
  switch(type) {
    case DISABLE_MOVE:
      return false
    case CHANGE_PLAYER:
      return true
    case NEW_GAME:
      return false

    default:
      return state
  }
}
