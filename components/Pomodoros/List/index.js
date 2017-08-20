// @flow

import { Component } from 'react'
import { connect } from 'react-redux'

import tasksSelector from './selectors/tasks'
import Item from './Item'

class List extends Component {
  props: {
    tasks: Array<String>,
  }

  renderItem (task) {
    return <Item key={task} task={task} />
  }

  render () {
    return (
      <ul>
        {this.props.tasks.map(this.renderItem)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: tasksSelector(state)
  }
}

export default connect(mapStateToProps)(List)
