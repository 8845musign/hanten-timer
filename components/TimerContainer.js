// @flow

import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { startTimer, stopTimer, setTime, pauseTimer, changeTaskTitle } from '../redux/modules/Timer'

import Timer from './Timer'

class TimerContainer extends Component {
  props: {
    isTimerStart: boolean,
    elapsedTime: number,
    settingTime: number,
    isPause: boolean,
    startTimer: Function,
    stopTimer: Function,
    setTime: Function,
    pauseTimer: Function,
    changeTaskTitle: Function,
    taskTitle: String
  }

  render () {
    return (
      <Timer
        elapsedTime={this.props.elapsedTime}
        startTimer={this.props.startTimer}
        stopTimer={this.props.stopTimer}
        settingTime={this.props.settingTime}
        pauseTimer={this.props.pauseTimer}
        isTimerStart={this.props.isTimerStart}
        setTime={this.props.setTime}
        isPause={this.props.isPause}
        changeTaskTitle={this.props.changeTaskTitle}
        taskTitle={this.props.taskTitle}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isTimerStart: state.isTimerStart,
    elapsedTime: state.elapsedTime,
    settingTime: state.settingTime,
    isPause: state.isPause,
    taskTitle: state.taskTitle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: bindActionCreators(startTimer, dispatch),
    stopTimer: bindActionCreators(stopTimer, dispatch),
    setTime: bindActionCreators(setTime, dispatch),
    pauseTimer: bindActionCreators(pauseTimer, dispatch),
    changeTaskTitle: bindActionCreators(changeTaskTitle, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer)
