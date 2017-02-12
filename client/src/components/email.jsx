'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../actions'
import List from './email_list'

class email extends React.Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.actions.request()
  }
  componentWillReceiveProps(nextProps) {
    if(!nextProps.params.email_id){
      this.props.actions.request()
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.params.email_id !== this.props.params.email_id
  }
  render() {
    const {ui, actions, params} = this.props
    return (
      <div className='emailBox'>
        <div className='left' ><List folder='inbox'/></div>
        <div className='right'><List folder='junk'/></div>
        <div className='bottom'>
          {this.props.children}
        </div>
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
)(email)
