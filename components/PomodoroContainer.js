// @flow

import { Component } from 'react'
import { connect } from 'react-redux'

import Pomodoro from './Pomodoro'

class PomodoroContainer extends Component {
  render () {
    return (
      <Pomodoro />
    )
  }
}

export default connect()(PomodoroContainer)
