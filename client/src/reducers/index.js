'use strict'
import { combineReducers } from 'redux'
import ui_reducer from './ui_reducer'

let last_action = (state=null,action) => action

const rootReducer = combineReducers({
	last_action: last_action,
 	ui: ui_reducer
})

export default rootReducer 