// @flow

import { Component } from 'react'
import { connect } from 'react-redux'

import Item from './Item'

class List extends Component {
  props: {
    pomodoros: Array<Object>,
    tasks: Object
  }

  constructor (props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
  }

  renderItem (pomodoro) {
    return <Item key={pomodoro.id} pomodoro={pomodoro} tasks={this.props.tasks} />
  }

  render () {
    return (
      <ul>
        {this.props.pomodoros.map(this.renderItem)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pomodoros: state.pomodoros,
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(List)
