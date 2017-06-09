// @flow

import TimeUtil from '../utils/Time'

const convertToTimeRemaing = (settingTime: number, pastTime: number) => {
  return settingTime - pastTime
}

const onChange = (setTime: Function) => {
  return (e) => {
    const time = parseInt(e.target.value)
    setTime(time)
  }
}

type Props = {
  startTimer: Function,
  stopTimer: Function,
  pauseTimer: Function,
  setTime: Function,
  elapsedTime: number,
  settingTime: number,
  isTimerStart: boolean,
  isPause: boolean,
  taskTitle: String,
  changeTaskTitle: Function,
}

export default ({ startTimer, stopTimer, pauseTimer, elapsedTime, settingTime, setTime, isTimerStart, isPause, taskTitle, changeTaskTitle }: Props) => {
  return (
    <div>
      <input type='text' value={taskTitle} onChange={changeTaskTitle} />
      <button onClick={startTimer}>startTimer</button>
      Time Reaming : {TimeUtil.unix2mmss(convertToTimeRemaing(settingTime, elapsedTime))} sec
      <button onClick={stopTimer}>stopTimer</button>
      <input value={settingTime} onChange={onChange(setTime)} readOnly={isTimerStart === true} />
      <button onClick={pauseTimer} disabled={isPause || !isTimerStart}>Pause</button>
    </div>
  )
}
