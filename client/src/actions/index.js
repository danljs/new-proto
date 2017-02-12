'use strict'
import 'whatwg-fetch'
const url = 'http://localhost:3000/email'
export const 
  INITIAL = 'INITIAL',
  REFRESH = 'REFRESH',
  DEAL = 'DEAL',
  DETAIL = 'DETAIL'

export let initial = () => ({type: INITIAL})
export let request = () => dispatch => fetch(url).then(
  response => response.json().then(data => dispatch(refresh(data)))
)
export let refresh = value => ({type: REFRESH, value})

export let deal = value => ({type: DEAL, value})

export let detail = value => dispatch => fetch(`${url}/${value.id}`).then(
  response => response.json().then(data => dispatch(refresh_detail(data)))
)
export let refresh_detail = value => ({type: DETAIL, value})