'use strict'
import { INITIAL, REFRESH, DEAL, DETAIL } from '../actions/index'

const initialState = {}
export default (state = initialState, action) => {
  let new_state = {
    url: 'http://localhost:3000/email',
    inbox: {
      to: 'junk',
      data: []
    },
    junk: {
      to: 'inbox',
      data: []
    },
    detail: {
      id: '',
      content: []
    }
  }

  switch (action.type) {
    case INITIAL:
      return new_state
    case REFRESH:
      // for(let i = 0 ; i < 10 ; i++){
      //   action.value.list.map(c => new_state[c.state].data.push(c))
      // }
      console.log('REFRESH')
      action.value.list.map(c => new_state[c.state].data.push(c))
      return new_state
    case DEAL:
      new_state.inbox.data = [...state.inbox.data]
      new_state.junk.data = [...state.junk.data]
      new_state.detail = state.detail
      new_state[action.value].data.filter(c => c.selected).map(c => new_state[new_state[action.value].to].data.push(c))
      new_state[action.value].data = new_state[action.value].data.filter(c => !c.selected)
      return new_state
    case DETAIL:
      new_state = Object.assign({}, state)
      new_state.detail = action.value
      return new_state
    default:
      return state
  }
}