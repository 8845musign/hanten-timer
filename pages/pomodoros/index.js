import React from 'react'
import withRedux from 'next-redux-wrapper'

import indexStore from '../../indexStore'

import Pomodoros from '../../components/Pomodoros'

class Index extends React.Component {
  render () {
    return (
      <Pomodoros />
    )
  }
}

export default withRedux(indexStore)(Index)
