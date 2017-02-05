'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import {withRouter, browserHistory} from 'react-router'

class header extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      selected : 0
    }
  }
  componentWillReceiveProps(nextProps){

  }
  render() {
    const { actions, router } = this.props
    const menus = [
      {link: '/email', title: 'Email', index: 0},
      {link: '/case', title: 'Case', index: 1},
      {link: '/task', title: 'Task', index: 2}
    ]
    return (
      <div className='header-area'><div>
        {
          menus.map((c,i) => <a key={i} onClick={e => {
            router.push(c.link)
            this.setState({selected : i})
          }} className={this.state.selected === c.index ? 'selected':''}>{c.title}</a>)
        }
        {/*
        <a onClick={e => actions.change_lang(lang.change_id)}>{lang.name}</a>
      */}
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