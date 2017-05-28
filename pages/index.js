import React from 'react'
import withRedux from 'next-redux-wrapper'

import indexStore from './indexStore'

import Timer from '../components/Timer'

class Index extends React.Component {
  render () {
    return (
      <Timer />
    )
  }
}

export default withRedux(indexStore)(Index)
