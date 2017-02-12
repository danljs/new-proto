'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {withRouter} from 'react-router'

import * as Actions from '../actions'

class detail extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.ui.detail.id === '' 
      || nextProps.params.email_id !== this.props.params.email_id) {
      this.props.actions.detail({id: nextProps.params.email_id})
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.params.email_id !== this.props.params.email_id 
    || nextProps.ui.detail.id !== this.props.ui.detail.id
  }
  render() {
    const {ui, actions} = this.props
    const from = `${ui.detail.name}<${ui.detail.address}>`
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
// )withRouter(detail)
)(withRouter(detail, {withRef: true}))