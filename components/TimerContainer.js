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

  componentWillReceiveProps (next) {
    if (next.isTimerStart) {
      this.timer = setInterval(() => {
        // 経過時間計算
        const pastTime = new Date().getTime() - next.startTime

        this.setState({
          pastTime: pastTime
        })
      }, 1000)
    } else {
      clearInterval(this.timer)
      this.setState({
        pastTime: 0
      })
    }
  }

  render () {
    return (
      <Timer pastTime={this.state.pastTime} startTimer={this.props.startTimer} stopTimer={this.props.stopTimer} />
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
