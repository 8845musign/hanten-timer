import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { startTimer } from '../redux/modules/Timer'

class Timer extends Component {
  render () {
    return (
      <button onClick={this.props.startTimer}>Start Timer</button>
    )
  }
}

const mapStateToProps = ({ state }) => ({ state })

const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: bindActionCreators(startTimer, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
