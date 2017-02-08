'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import List from './email_list'
import Detail from './email_detail'
class cases extends React.Component{
  constructor(props) {
    super(props)
    this.state={ active: 0 }
  }

  render() {
    const {ui, actions, params} = this.props
    return (
      <div className='emailBox'>
        <div className='left' >
          <List folder='inbox'/>
        </div>
        <div className='right'>
          <List folder='starred'/>
        </div>
        <div className='bottom'>
          <Detail emailId={params.email_id}/>
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
)(cases)
