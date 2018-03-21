import { CHANGE_STATE } from '../actions/types'

export default (state = "addBoats", {type, payload } = {}) => {
  switch(type) {
    case CHANGE_STATE:
      return "play"

    default:
      return state
  }
}
