'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

import * as Actions from '../actions'

class header extends React.Component{
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProps){

  }
  render() {
    const { actions, router, location } = this.props
    const selected = location.pathname === '/' ? '/case' : location.pathname;
    const menus = [
      {link: '/email', title: 'Email'},
      {link: '/case', title: 'Case'},
      {link: '/task', title: 'Task'}
    ]
    return (
      <div className='header-area'><div>
      {
        menus.map((c,i) => <a key={i} className={selected.includes(c.link) ? 'selected':''} onClick={e => router.push(c.link)}>{c.title}</a>)
      }
      </div></div>
    )
  }
}
let mapStateToProps = state =>({

})

let mapDispatchToProps = dispatch =>({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(header))