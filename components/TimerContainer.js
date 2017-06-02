import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { startTimer, stopTimer } from '../redux/modules/Timer'

import Timer from './Timer'

// ミリ秒換算
const SETTING_TIME = 2 * 1000;

class TimerContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      pastTime: 0
    }
  }

  componentWillReceiveProps (next) {
    if (next.isTimerStart) {
      this.timer = setInterval(() => {
        // 経過時間計算
        let pastTime = new Date().getTime() - next.startTime

        if (pastTime > SETTING_TIME) {
          this.props.stopTimer()
          pastTime = 0
          clearInterval(this.timer)
        }

        this.setState({
          pastTime: pastTime
        })
      }, 1000)
    } else if (this.timer && !next.isTimerStart) {
      clearInterval(this.timer)
      this.setState({
        pastTime: 0
      })
    }
  }

  render () {
    return (
      <Timer
        pastTime={this.state.pastTime}
        startTimer={this.props.startTimer}
        stopTimer={this.props.stopTimer}
        settingTime={SETTING_TIME}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isTimerStart: state.isTimerStart,
    startTime: state.startTime
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: bindActionCreators(startTimer, dispatch),
    stopTimer: bindActionCreators(stopTimer, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer)
