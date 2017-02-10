'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'

class detail extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {ui, actions} = this.props
    const from = `${ui.detail.name}<${ui.detail.address}>`
    console.log('detail')
    return (
      <div className='detail'>
      {
        ui.detail.id !== '' ?
        <div>
          <div>From: {from}</div>
          <div>Date: {ui.detail.date}</div>
          <div>Subject: {ui.detail.subject}</div>
          <hr/>
          <div className='content'>
          {ui.detail.content.map((c, i) => <div key={i}>{c === "" ? <br/> : <div>{c}</div>}</div>)}
          </div>
        </div>
        : ''
      }
      </div>
    )
  }
}

let mapStateToProps = state =>({
  ui: state.ui
})

let mapDispatchToProps = dispatch =>({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(detail)