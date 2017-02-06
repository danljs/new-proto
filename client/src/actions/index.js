'use strict'
import 'whatwg-fetch'

export const 
  INITIAL = 'INITIAL',
  REFRESH = 'REFRESH',
  TOGGLE = 'TOGGLE'

export let initial = () => ({type: INITIAL})
export let request = value => dispatch => fetch(value.url).then(
  response => {
    response.json().then(
    data => dispatch(refresh(data))
  )}
)
export let refresh = value => ({type: REFRESH, value})
export let toggle = () => ({type: TOGGLE})

