import { CHANGE_STATE, P1_WON, P2_WON, NEW_GAME } from '../actions/types'

export default (state = "addBoats", {type, payload } = {}) => {
  switch(type) {
    case CHANGE_STATE:
      return "play"
    case P1_WON:
      return "P1Won"
    case P2_WON:
      return "P2Won"
    case NEW_GAME:
      return "addBoats"

    default:
      return state
  }
}
