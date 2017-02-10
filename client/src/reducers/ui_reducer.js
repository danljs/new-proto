'use strict'
import { INITIAL, REFRESH, DEAL, DETAIL, ACTIVE} from '../actions/index'

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
  },
  detail: {}
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
          data: []
        },
        starred: {
          to: 'inbox',
          data: []
        },
        detail: {
          id: '',
          content: []
        }
      }
    case REFRESH:
      new_state = Object.assign({}, state)
      new_state.inbox.data = []
      new_state.starred.data = []
      action.value.data.list.map(c => new_state[c.state].data.push(c))
      const detail = action.value.data.list.find(c => action.value.id === c.id)
      if (detail) new_state.detail = detail
      return new_state
    case DEAL:
      new_state = Object.assign({}, state)
      state[action.value].data.filter(c => c.selected).map(c => new_state[new_state[action.value].to].data.push(c))
      new_state[action.value].data = state[action.value].data.filter(c => !c.selected)
      return new_state
    case DETAIL:
      new_state = Object.assign({}, state)
      new_state.detail = action.value
      return new_state
    default:
      return state
  }
}