import TimeUtil from '../utils/Time'

const convertToTimeRemaing = (settingTime, pastTime) => {
  return settingTime - pastTime
}

export default ({ startTimer, stopTimer, pastTime, settingTime }) => {
  return (
    <div>
      <button onClick={startTimer}>startTimer</button>
      Time Reaming : {TimeUtil.unix2mmss(convertToTimeRemaing(settingTime, pastTime))} sec

      <button onClick={stopTimer}>stopTimer</button>
    </div>
  )
}
