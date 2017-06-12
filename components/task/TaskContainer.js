// @flow

import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { change } from '../../redux/pages/task/add'
import { add } from '../../redux/shared/tasks'

import Add from './Add'

const renderTask = (tasks) => {
  const renderTasks = []

  Object.keys(tasks).forEach((id) => {
    const task = tasks[id]
    renderTasks.push(<li key={id}>{task.name}</li>)
  })

  return renderTasks
}

class TaskContainer extends Component {
  props: {
    name: String,
    change: Function,
    tasks: Object,
    add: Function
  }

  render () {
    return (
      <div>
        <ul>
          {renderTask(this.props.tasks)}
        </ul>
        <Add
          name={this.props.name}
          change={this.props.change}
          add={this.props.add}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.add.name,
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: bindActionCreators(change, dispatch),
    add: bindActionCreators(add, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)
