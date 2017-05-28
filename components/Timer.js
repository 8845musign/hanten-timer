import { connect } from 'react-redux'

export default connect(state => state)(({ startTimer }) => {
  return (
    <button onClick={startTimer}>Start Timer</button>
  )
})
