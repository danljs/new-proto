'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'

class tasks extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const {ui, actions} = this.props
    return (
      <div className='task'>
      <h1>Task</h1>
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
)(tasks)
