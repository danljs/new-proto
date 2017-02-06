'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../actions'
import Mdetail from './email_detail'

class email extends React.Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.actions.request({
      url: this.props.ui.url, 
      from: this.props.ui.from, 
      size: this.props.ui.size
    })
  }

  render() {
    const {ui, actions} = this.props
    return (
      <div className='email'>
      <h1>Email</h1>
        <div className={ui.display ? 'left show-detail' : 'left hide-detail'} >
          <div className='mconsole'>
            <ul className="nav nav-tabs">
              <li role="presentation" className="active"><a href="#">Home</a></li>
              <li role="presentation"><a href="#">Profile</a></li>
              <li role="presentation"><a href="#">Messages</a></li>
            </ul>
            <div className='row header'>
              <div className='add' onClick={e => actions.add()}/>
              <div className='add' onClick={e => actions.toggle()}/>
              <div className='print' onClick={e => actions.print()}/>
            </div>

            <section className='main'><ul>
              <li className='row title'>
              </li>
              <table className="table table-hover table-striped">
                <thead>
                  <tr><th>Firstname</th><th>Lastname</th><th>Email</th></tr>
                </thead>
                <tbody>
                  <tr><td>John</td><td>Doe</td><td>john@example.com</td></tr>
                  <tr><td>Mary</td><td>Moe</td><td>mary@example.com</td></tr>
                  <tr><td>July</td><td>Dooley</td><td>july@example.com</td></tr>
                  <tr><td>July</td><td>Dooley</td><td>july@example.com</td></tr>
                </tbody>
              </table>
              {/*
                ui.data.map((c,i) => 
                  <div key={i}>
                    <div>{c.id}</div>
                    <div>{c.subject}</div>
                    <div>{c.from}</div>
                    <div>{c.date}</div>
                  </div>
                )
              */}
            </ul></section>
            <div className='footer'>
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                  <li className="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
                </ul>
              </nav>
            </div>
          </div>
          
        </div>
        {
          ui.display ? <div className='right'><Mdetail/></div> : ''
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
)(email)
