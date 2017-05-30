import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { startTimer } from '../redux/modules/Timer'

import Timer from './Timer'

class TimerContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      pastTime: 0
    }
  }

  componentWillReceiveProps () {
    if (this.props.startTimer) {
      this.timer = setInterval(() => {
        // 経過時間計算
        const pastTime = new Date().getTime() - this.props.startTime

        this.setState({
          pastTime: pastTime
        })
      }, 1000)
    }
  }

  render () {
    return (
      <Timer pastTime={this.state.pastTime} startTimer={this.props.startTimer} />
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
    startTimer: bindActionCreators(startTimer, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer)
