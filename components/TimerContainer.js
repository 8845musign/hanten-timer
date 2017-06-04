// @flow

import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { startTimer, stopTimer, setTime, pauseTimer } from '../redux/modules/Timer'

import Timer from './Timer'

class TimerContainer extends Component {
  props: {
    isTimerStart: boolean,
    elapsedTime: number,
    settingTime: number,
    pause: boolean,
    startTimer: Function,
    stopTimer: Function,
    setTime: Function,
    pauseTimer: Function
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
        pause={this.props.pause}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isTimerStart: state.isTimerStart,
    elapsedTime: state.elapsedTime,
    settingTime: state.settingTime,
    pause: state.pause
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: bindActionCreators(startTimer, dispatch),
    stopTimer: bindActionCreators(stopTimer, dispatch),
    setTime: bindActionCreators(setTime, dispatch),
    pauseTimer: bindActionCreators(pauseTimer, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer)
