const convertToSec = (milliseconds) => {
  return Math.floor(milliseconds / 1000)
}

const convertToTimeRemaing = (settingTime, pastTime) => {
  return settingTime - pastTime
}

export default ({ startTimer, stopTimer, pastTime, settingTime }) => {
  return (
    <div>
      <button onClick={startTimer}>startTimer</button>
      Time Reaming : {convertToSec(convertToTimeRemaing(settingTime, pastTime))} sec

      <button onClick={stopTimer}>stopTimer</button>
    </div>
  )
}
