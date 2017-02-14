'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {withRouter} from 'react-router'

import * as Actions from '../actions'

class list extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      checked: false
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.checked !== this.state.checked ||
    this.props.ui[this.props.folder].data.length === 0 || 
    nextProps.ui.detail.id !== this.props.ui.detail.id || 
    nextProps.ui[this.props.folder].data.length !== this.props.ui[this.props.folder].data.length
  }
  componentDidUpdate(prevProps, prevState){
    if (this.refs.highlight) this.refs.highlight.scrollIntoViewIfNeeded()
  }
  render() {
    console.log('list.render')
    const {ui, actions, router, params} = this.props
    return (
      <div className='list'>
        <h4>{this.props.folder}</h4>
        <div className='main'>
          <table className='table table-fixed table-hover table-striped'>
            <thead>
              <tr>
                <th className='col-xs-3'>Number</th>
                <th className='col-xs-3'>Subject</th>
                <th className='col-xs-6'>From</th>
              </tr>
            </thead>
            <tbody className={params.email_id ? 'half' : 'full'}>
            {
              ui[this.props.folder].data.map((c,i) => 
                <tr key={i} ref={c.id === ui.detail.id ? 'highlight' : ''} className={c.id === ui.detail.id ? 'highlight' : ''} 
                  onClick={e => {
                    c.selected = !c.selected
                    if (c.id !== ui.detail.id ) {
                      router.push(`/email/${c.id}`)
                    }else{
                      this.setState({checked: !this.state.checked})
                    }
                  }}>
                  <td className='col-xs-3'>
                    <input type='checkBox' checked={c.selected} onChange={()=>{console.log('aa')}}/>
                    &nbsp;{c.id}
                  </td>
                  <td className='col-xs-3'>{c.subject}</td>
                  <td className='col-xs-6'>{c.address}</td>
                </tr>  
              )
            }
            </tbody>
          </table>
          <div className='footer'>
            <button className='deal' onClick={()=>actions.deal(this.props.folder)}>Todo</button>
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
)(withRouter(list, {withRef: true}))
