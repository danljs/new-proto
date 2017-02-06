'use strict'
import { INITIAL, REFRESH, TOGGLE} from '../actions/index'

const initialState = {
  data: {},
  display: false
}
export default (state = initialState, action) => {
  let new_state = {}

  switch (action.type) {
    case INITIAL:
      return {
        url: 'http://localhost:3000/email',
        from: 0,
        size: 10,
        data: []
      }
    case REFRESH:
      new_state = Object.assign({}, state)
      new_state.data = action.value.list
      return new_state

    case TOGGLE:
      new_state = Object.assign({}, state)
      new_state.display = !state.display
      return new_state
    default:
      return state
  }
}