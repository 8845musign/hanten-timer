import React from 'react'
import withRedux from 'next-redux-wrapper'

import indexStore from '../indexStore'

import PomodoroContainer from '../../components/PomodoroContainer'

class Index extends React.Component {
  render () {
    return (
      <PomodoroContainer />
    )
  }
}

export default withRedux(indexStore)(Index)
