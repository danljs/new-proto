'use strict'
import 'whatwg-fetch'

export const 
  INITIAL = 'INITIAL',
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  PRINT = 'PRINT',
  DOWNLOAD = 'DOWNLOAD',

  UPDATE = 'UPDATE',
  UPDATE_REPORT = 'UPDATE_REPORT',
  SAVE_REPORT = 'SAVE_REPORT',
  REFRESH = 'REFRESH',

  TOGGLE = 'TOGGLE'

export let initial = () => ({type: INITIAL})
export let add = () => ({type: ADD})
export let remove = row_num => ({type: REMOVE, row_num})

export let download = data => ({type: DOWNLOAD, data})
export let update = value => ({type: UPDATE, value})

export let update_report = value => ({type: UPDATE_REPORT, value})

export let request = value => dispatch => fetch(value.url).then(
  response => {
    response.json().then(
    data => dispatch(refresh({col_num: value.col_num, row_num: value.row_num,data}))
  )}
)
export let refresh = value => ({type: REFRESH, value})
export let toggle = () => ({type: TOGGLE})

