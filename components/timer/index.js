// @flow

import Link from 'next/link'

import TimeUtil from '../../utils/Time'

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
  isStart: boolean,
  isPause: boolean,
  taskTitle: String,
  changeTaskTitle: Function,
}

export default ({ startTimer, stopTimer, pauseTimer, elapsedTime, settingTime, setTime, isStart, isPause, taskTitle, changeTaskTitle }: Props) => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='tile notification'>
          <label className='label'>Task Title</label>
          <div className='control'>
            <input className='input' type='text' value={taskTitle} onChange={onChangeTitle(changeTaskTitle)} />
          </div>
        </div>

        <div className='tile notification is-info'>
          Time Reaming : {TimeUtil.unix2mmss(convertToTimeRemaing(settingTime, elapsedTime))} sec
          <progress className='progress' value={elapsedTime} max={settingTime} >15%</progress>
        </div>

        <div className='tile notification'>
          <div className='columns'>
            <div className='column'>
              <button className='button is-info is-outlined' onClick={onClickStart(startTimer)}>startTimer</button>
            </div>

            <div className='column'>
              <button className='button' onClick={pauseTimer} disabled={isPause || !isStart}>Pause</button>
            </div>

            <div className='column'>
              <button className='button is-danger is-outlined' onClick={onClickStop(stopTimer)}>stopTimer</button>
            </div>
          </div>
        </div>

        <div className='tile notification'>
          <input className='input' value={settingTime} onChange={onChange(setTime)} readOnly={isStart === true} />
        </div>

        <Link href='/task'><a>> tasks</a></Link>
      </div>
    </section>
  )
}
