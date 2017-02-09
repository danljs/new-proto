'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {withRouter} from 'react-router'

import * as Actions from '../actions'
import Mdetail from './email_detail'

class list extends React.Component{
  constructor(props) {
    super(props)
    this.state={ 
      active: 0,
      page: 1
    }
  }

  render() {
    const {ui, actions, router} = this.props
    const pages = [{ no: 1 }, { no: 2 }, { no: 3 }, { no: 4 }, { no: 5 }]
    console.log('list')
    return (
      <div className='list'>
        <div className='main'>
          <table className='table table-fixed table-hover table-striped'>
            <thead>
              <tr>
                <th className='col-xs-3'>Number</th>
                <th className='col-xs-3'>Subject</th>
                <th className='col-xs-6'>From</th>
              </tr>
            </thead>
            <tbody>
            {
              ui[this.props.folder].data.map((c,i) => 
                <tr key={i} className={c.id === ui.detail.id ? 'highlight' : ''} 
                  onClick={e => router.push(`/email/${c.id}`)}>
                  <td className='col-xs-3'>
                    <input type='checkBox' checked={c.selected} onChange={()=>c.selected = !c.selected}/>
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
            <nav aria-label='Page navigation'><ul className='pagination'>
              <li><a onClick={() => ''} aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>
              {
                pages.map(c =>
                  <li key={c.no} className={this.state.page === c.no ? 'active' : ''}>
                    <a onClick={()=>this.setState({page: c.no})}>{c.no}</a>
                  </li>
                )
              }
              <li><a onClick={() => ''} aria-label='Next'><span aria-hidden='true'>&raquo;</span></a></li>
            </ul></nav>
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
)(withRouter(list))
