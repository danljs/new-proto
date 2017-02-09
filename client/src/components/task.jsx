'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'

class tasks extends React.Component{
  constructor(props) {
    super(props)
    this.state={ active: 0 }
  }

  render() {
    const {ui, actions} = this.props
    return (
      <div className='task'>
        <h1>Task</h1>
        <div className='left hide-detail'>
          <div className='main'>
            <ul className="nav nav-tabs">
              <li role="presentation" className={this.state.active === 0 ? 'active' : ''}>
                <a onClick={()=>this.setState({active: 0})}>Open Tasks</a>
              </li>
              <li role="presentation" className={this.state.active === 1 ? 'active' : ''}>
                <a onClick={()=>this.setState({active: 1})}>Search</a>
              </li>
            </ul>
            <div className='row header'>
            </div>
            <div className='footer'>
            </div>
          </div>
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
)(tasks)
