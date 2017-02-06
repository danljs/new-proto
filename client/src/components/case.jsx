'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'

class cases extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const {ui, actions} = this.props
    return (
      <div className='case'>
        <h1>Case</h1>
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
)(cases)
