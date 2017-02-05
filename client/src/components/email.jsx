'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import Mdetail from './email_detail'

class mconsole extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.props.actions.request({
      url: this.props.ui.url, 
      from: this.props.ui.from, 
      size: this.props.ui.size
    })
  }

  // componentWillReceiveProps(nextProps){
  //   debugger
  //   if(nextProps.ui.target.url !== this.state.url) {
  //     this.props.actions.request({
  //       url: nextProps.ui.url, 
  //       from: nextProps.ui.from, 
  //       size: nextProps.ui.size
  //     })
  //   }
  // }

  render() {
    const {ui, actions} = this.props
    return (
      <div className='email'>
      <h1>Email</h1>
        <div className={ui.display ? 'left show-detail' : 'left hide-detail'} >
          <div className='mconsole'>
            <div></div>
            <div className='row header'>
              <div className='add' onClick={e => actions.add()}/>
              <div className='add' onClick={e => actions.toggle()}/>
              <div className='print' onClick={e => actions.print()}/>
            </div>
            <section className='main'><ul>
              <li className='row title'>
              </li>
              {
                ui.data.map((c,i) => 
                  <div key={i}>
                    <div>{c.id}</div>
                    <div>{c.subject}</div>
                    <div>{c.from}</div>
                    <div>{c.date}</div>
                  </div>
                )
              }
            </ul></section>
            <div className='footer'>
              <div>{ui.summary}</div>
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
  lang: state.lang,
  ui: state.ui
})

let mapDispatchToProps = dispatch =>({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mconsole)
