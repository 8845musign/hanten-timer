// @flow

import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Link from 'next/link'

import { actions as taskActions } from '../../redux/pages/task'
import addValidateSelector from './addValidateSelector'

import Tasks from './Tasks'
import Add from './Add'

class TaskContainer extends Component {
  props: {
    name: String,
    change: Function,
    tasks: Object,
    add: Function,
    validAdd: boolean
  }

  render () {
    return (
      <section className='section'>
        <div className='container'>
          <h1 className='title is-1'>TASK LIST</h1>

          <Add
            name={this.props.name}
            change={this.props.change}
            add={this.props.add}
            validAdd={this.props.validAdd}
          />

          <Tasks tasks={this.props.tasks} />

          <Link href='/'><a>>timer</a></Link>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.editing.task.name,
    tasks: state.tasks,
    validAdd: addValidateSelector(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: bindActionCreators(taskActions.change, dispatch),
    add: bindActionCreators(taskActions.add, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)
