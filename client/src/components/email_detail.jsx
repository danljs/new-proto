'use strict'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'

class email_detail extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {ui, lang, actions, router} = this.props
    return (
      <div className='mdetail'>
        <div>From: pjaa@hotmial.com</div>
        <div>To: service@ontario.ca</div>
        <hr/>
        <div>Dear,</div>
        <br/>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;
        Aidj djow sdkjhd asdfj sdkdhs sdkjhdl asdfhsks. Sdkfh sdhdskdf kjhdsfk sdhwj kjhdsfk kjhdsfk
        aidj djow sdkjhd asdfj sdkdhs sdkjhdl asdfhsks.
        </div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;
        Kjhdsfk sdhwj kjhdsfk kjhdsfk
        aidj djow sdkjhd asdfj sdkdhs sdkjhdl asdfhsks sdkfh sdhdskdf kjhdsfk sdhwj kjhdsfk kjhdsfk
        aidj djow.
        </div>
        <br/>
        <div>Sincerely,</div>
        <div>John Stone.</div>
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
)(email_detail)