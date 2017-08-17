import React from 'react'
import withRedux from 'next-redux-wrapper'

import indexStore from './indexStore'

import TimerContainer from '../components/timer/container'

class Index extends React.Component {
  render () {
    return (
      <TimerContainer />
    )
  }
}

export default withRedux(indexStore)(Index)
