import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import indexStore from './indexStore'
import startTimer from '../redux/modules/Timer'

import Timer from '../components/Timer'

class Index extends React.Component {
  render () {
    return (
      <Timer />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isStartTimer: bindActionCreators(startTimer, dispatch)
  }
}

export default withRedux(indexStore, null, mapDispatchToProps)(Index)
