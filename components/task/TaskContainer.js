import { Component } from 'react'
import { connect } from 'react-redux'

class TaskContainer extends Component {
  render () {
    return (
      <div>task</div>
    )
  }
}

export default connect()(TaskContainer)
