import TimeUtil from '../utils/Time'

const convertToTimeRemaing = (settingTime, pastTime) => {
  return settingTime - pastTime
}

const onChange = (setTime) => {
  return (e) => {
    const time = parseInt(e.target.value)
    setTime(time)
  }
}

export default ({ startTimer, stopTimer, pauseTimer, elapsedTime, settingTime, setTime, isTimerStart, pause }) => {
  return (
    <div>
      <button onClick={startTimer}>startTimer</button>
      Time Reaming : {TimeUtil.unix2mmss(convertToTimeRemaing(settingTime, elapsedTime))} sec
      <button onClick={stopTimer}>stopTimer</button>
      <input value={settingTime} onChange={onChange(setTime)} readOnly={isTimerStart === true} />
      <button onClick={pauseTimer} disabled={pause || !isTimerStart}>Pause</button>
    </div>
  )
}
