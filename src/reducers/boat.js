import { NEXT_BOAT, NEW_GAME } from '../actions/types'


export default (state = 1, { type, payload } = {}) => {
  switch (type) {
    case NEXT_BOAT:
      if (state < 5) return state+=1
      return 1
    case NEW_GAME:
      return 1

    default:
      return state

  }
}
