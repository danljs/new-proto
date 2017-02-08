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
    const {ui, actions} = this.props
    const from = 'From: Mike Red<miker@hotmial.com>'
    return (
      <div className='mdetail'>
        <div>{from}</div>
        <div>Date: Jun 5, 2016</div>
        <div>Subject: Perdidit meae Card</div>
        <hr/>
        <div className='content'>
          <div>A qui cela concerne,</div>
          <br/>
          <div>
          Aidj djow sdkjhd asdfj sdkdhs sdkjhdl asdfhsks. Sdkfh sdhdskdf kjhdsfk sdhwj kjhdsfk kjhdsfk
          aidj djow sdkjhd asdfj sdkdhs sdkjhdl asdfhsks.
          </div>
          <br/>
          <div>
          Kjhdsfk sdhwj kjhdsfk kjhdsfk
          aidj djow sdkjhd asdfj sdkdhs sdkjhdl asdfhsks sdkfh sdhdskdf kjhdsfk sdhwj kjhdsfk kjhdsfk
          aidj djow.
          </div>
          <br/>
          <div>
          Kjhdsfk sdhwj kjhdsfk kjhdsfk
          aidj djow sdkjhd asdfj sdkdhs sdkjhdl asdfhsks sdkfh sdhdskdf kjhdsfk sdhwj kjhdsfk kjhdsfk
          aidj djow.
          </div>
          <br/>
          <div>
          Kjhdsfk sdhwj kjhdsfk kjhdsfk
          aidj djow sdkjhd asdfj sdkdhs sdkjhdl asdfhsks sdkfh sdhdskdf kjhdsfk sdhwj kjhdsfk kjhdsfk
          aidj djow.
          </div>
          <br/>
          <div>Diego Sanchex et Sofia</div>
          <div>1234 Circle Lane</div>
          <div>Toronto.ON</div>
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
)(email_detail)