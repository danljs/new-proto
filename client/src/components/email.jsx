'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import List from './email_list'
import Detail from './email_detail'
class email extends React.Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.actions.request({url: this.props.ui.url})
    this.props.actions.detail({id: this.props.params.email_id})
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.email_id !== this.props.params.email_id) {
      this.props.actions.detail({id: nextProps.params.email_id})
    }
  }
  render() {
    const {ui, actions, params} = this.props
    return (
      <div className='emailBox'>
        <div className='left' ><List folder='inbox'/></div>
        <div className='right'><List folder='starred'/></div>
        <div className='bottom'><Detail/></div>
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
