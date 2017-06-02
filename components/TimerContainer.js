import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { startTimer, stopTimer } from '../redux/modules/Timer'

import Timer from './Timer'

class TimerContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      pastTime: 0
    }
  }

  render () {
    return (
      <Timer
        elapsedTime={this.state.elapsedTime}
        startTimer={this.props.startTimer}
        stopTimer={this.props.stopTimer}
        settingTime={this.props.settingTime}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isTimerStart: state.isTimerStart,
    startTime: state.startTime,
    elapsedTime: state.elapsedTime
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: bindActionCreators(startTimer, dispatch),
    stopTimer: bindActionCreators(stopTimer, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer)
