'use strict'
import { INITIAL, REFRESH, TOGGLE, DEAL} from '../actions/index'

const initialState = {
  data: {},
  display: false,
  inbox:  {
    to: 'starred',
    data: []
  },
  starred: {
    to: 'inbox',
    data: []
  }
}
export default (state = initialState, action) => {
  let new_state = {}

  switch (action.type) {
    case INITIAL:
      return {
        url: 'http://localhost:3000/email',
        from: 0,
        size: 10,
        inbox: {
          to: 'starred',
          data: [
            { number: 'inbox1', subject: 'Doe', address: 'john@example.com', selected: false },
            { number: 'inbox2', subject: 'Moe', address: 'mary@example.com', selected: false },
            { number: 'inbox3', subject: 'Dooley', address: 'july@example.com', selected: false },
            { number: 'inbox4', subject: 'Dooley', address: 'july@example.com', selected: false },
            { number: 'inbox5', subject: 'Dooley', address: 'july@example.com', selected: false },
            { number: 'inbox6', subject: 'Dooley', address: 'july@example.com', selected: false },
            { number: 'inbox7', subject: 'Dooley', address: 'july@example.com', selected: false },
            { number: 'inbox8', subject: 'Dooley', address: 'july@example.com', selected: false },
            { number: 'inbox9', subject: 'Dooley', address: 'july@example.com', selected: false },
            { number: 'inbox10', subject: 'Dooley', address: 'july@example.com', selected: false },
            { number: 'inbox11', subject: 'Dooley', address: 'july@example.com', selected: false },
            { number: 'inbox12', subject: 'Dooley', address: 'july@example.com', selected: false }
          ]
        },
        starred: {
          to: 'inbox',
          data: [
            { number: 'starred1', subject: 'Doe', address: 'john@example.com', selected: false },
            { number: 'starred2', subject: 'Moe', address: 'mary@example.com', selected: false },
            { number: 'starred3', subject: 'Dooley', address: 'july@example.com', selected: false },
            { number: 'starred4', subject: 'Dooley', address: 'july@example.com', selected: false },
            { number: 'starred5', subject: 'Dooley', address: 'july@example.com', selected: false },
            { number: 'starred6', subject: 'Dooley', address: 'july@example.com', selected: false },
            { number: 'starred7', subject: 'Dooley', address: 'july@example.com', selected: false },
            { number: 'starred8', subject: 'Dooley', address: 'july@example.com', selected: false }
          ]
        }
      }
    case REFRESH:
      new_state = Object.assign({}, state)
      new_state.data = action.value.list
      return new_state
    case TOGGLE:
      new_state = Object.assign({}, state)
      new_state.display = !state.display
      return new_state
    case DEAL:
      new_state = Object.assign({}, state)
      state[action.value].data.filter(c => c.selected).map(c => new_state[new_state[action.value].to].data.push(c))
      new_state[action.value].data = state[action.value].data.filter(c => !c.selected)
      return new_state
    default:
      return state
  }
}