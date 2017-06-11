// @flow

import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { startTimer, stopTimer, setTime, pauseTimer, changeTaskTitle } from '../redux/pages/timer'

import Timer from './Timer'

class TimerContainer extends Component {
  props: {
    isStart: boolean,
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
        isStart={this.props.isStart}
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
    isStart: state.timer.isStart,
    elapsedTime: state.timer.elapsedTime,
    settingTime: state.timer.settingTime,
    isPause: state.timer.isPause,
    taskTitle: state.timer.taskTitle
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
