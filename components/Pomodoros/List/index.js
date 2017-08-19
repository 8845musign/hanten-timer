// @flow

import { Component } from 'react'
import { connect } from 'react-redux'

import Item from './Item'

class List extends Component {
  props: {
    pomodoros: Array<Object>,
  }

  renderItem (pomodoro) {
    return <Item key={pomodoro.id} pomodoro={pomodoro} />
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
    pomodoros: state.pomodoros
  }
}

export default connect(mapStateToProps)(List)
