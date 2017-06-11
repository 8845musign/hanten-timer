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

const onChangeTitle = (changeTaskTitle: Function) => {
  return (e) => {
    changeTaskTitle(e.target.value)
  }
}

const onClickStart = (startTimer: Function) => {
  return () => {
    startTimer(new Date().getTime())
  }
}

const onClickStop = (stopTimer: Function) => {
  return () => {
    stopTimer(new Date().getTime())
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
      <style global jsx>{`
        body {
          background-color: #FF5252
        }
      `}</style>
      <fieldset>
        <label>Task Title</label>
        <input type='text' value={taskTitle} onChange={onChangeTitle(changeTaskTitle)} />
      </fieldset>

      <div>
        Time Reaming : {TimeUtil.unix2mmss(convertToTimeRemaing(settingTime, elapsedTime))} sec
      </div>

      <fieldset>
        <button onClick={onClickStart(startTimer)}>startTimer</button>
        <button onClick={pauseTimer} disabled={isPause || !isTimerStart}>Pause</button>
        <button onClick={onClickStop(stopTimer)}>stopTimer</button>
      </fieldset>

      <fieldset>
        <input value={settingTime} onChange={onChange(setTime)} readOnly={isTimerStart === true} />
      </fieldset>
    </div>
  )
}
