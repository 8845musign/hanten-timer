// @flow

import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Link from 'next/link'

import { change } from '../../redux/pages/task/add'
import { add } from '../../redux/shared/tasks'

import Tasks from './Tasks'
import Add from './Add'

class TaskContainer extends Component {
  props: {
    name: String,
    change: Function,
    tasks: Object,
    add: Function
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
          />

          <Tasks tasks={this.props.tasks} />

          <Link href='/'><a>>timer</a></Link>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
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
