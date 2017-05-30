import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { startTimer } from '../redux/modules/Timer'

import Timer from './Timer'

const REST_TIME = 60

class TimerContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      restTime: REST_TIME
    }
  }

  componentWillReceiveProps () {
    if (this.props.startTimer) {
      this.restTime = REST_TIME

      this.timer = setInterval(() => {
        this.setState({
          restTime: this.state.restTime - 1
        })
      }, 1000)
    }
  }

  render () {
    return (
      <Timer restTime={this.state.restTime} startTimer={this.props.startTimer} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isTimerStart: state.isTimerStart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: bindActionCreators(startTimer, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer)
