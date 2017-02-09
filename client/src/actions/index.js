'use strict'
import 'whatwg-fetch'

export const 
  INITIAL = 'INITIAL',
  REFRESH = 'REFRESH',
  DEAL = 'DEAL',
  DETAIL = 'DETAIL'

export let initial = () => ({type: INITIAL})
export let request = value => dispatch => fetch(value.url).then(
  response => response.json().then(data => dispatch(refresh(data)))
)
export let refresh = value => ({type: REFRESH, value})

export let deal = value => ({type: DEAL, value})

export let detail = value => dispatch => fetch('http://localhost:3000/email/' + value.id).then(
  response => response.json().then(data => dispatch(refresh_detail(data)))
)
export let refresh_detail = value => ({type: DETAIL, value})