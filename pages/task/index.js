import React from 'react'
import withRedux from 'next-redux-wrapper'

import indexStore from '../indexStore'

import TaskContainer from '../../components/task/TaskContainer'

class Index extends React.Component {
  render () {
    return (
      <TaskContainer />
    )
  }
}

export default withRedux(indexStore)(Index)
