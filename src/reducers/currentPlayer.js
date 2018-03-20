import { CHANGE_PLAYER } from '../actions/types'

export default (state = 1, {type, payload } = {}) => {
  switch(type) {
    case CHANGE_PLAYER:
      if (state ===1 ) return 2
      return 1

    default:
      return state
  }
}
