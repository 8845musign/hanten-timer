// @flow

import Link from 'next/link'
import uuid from 'uuid/v1'

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

type Task = {
  name: string,
  id: string
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
  tasks: Array<Task>
}

export default ({ startTimer, stopTimer, pauseTimer, elapsedTime, settingTime, setTime, isStart, isPause, taskTitle, changeTaskTitle, tasks }: Props) => {
  const taskListId = uuid()
  const renderTaskOption = (task: Task) => {
    return <option value={task.name} key={task.id} />
  }

  return (
    <section className='section'>
      <div className='container'>
        <h1 className='title is-1'>HANTEN TIMER</h1>

        <div className='tile is-vertical is-ancestor'>
          <div className='tile is-12 notification'>
            <div className='tile is-child'>
              <label htmlFor='task-title' className='title is-4'>Task Title</label>
              <div className='control'>
                <input id='task-title' className='input' type='text' value={taskTitle} onChange={onChangeTitle(changeTaskTitle)} list={taskListId} />
                <datalist id={taskListId}>
                  {Object.values(tasks).map(renderTaskOption)}
                </datalist>
              </div>
            </div>
          </div>

          <div className='tile is-12 notification is-info'>
            <div className='tile is-child'>
              <h2 className='title is-4'>Time Reaming</h2>
              <p className='subtitle'>{TimeUtil.unix2mmss(convertToTimeRemaing(settingTime, elapsedTime))} sec</p>
              <progress className='progress' value={elapsedTime} max={settingTime} >15%</progress>
            </div>
          </div>

          <div className='tile is-12 notification'>
            <div className='columns'>
              <div className='column'>
                <button className='button is-info' onClick={onClickStart(startTimer)}>startTimer</button>
              </div>

              <div className='column'>
                <button className='button' onClick={pauseTimer} disabled={isPause || !isStart}>Pause</button>
              </div>

              <div className='column'>
                <button className='button is-danger' onClick={onClickStop(stopTimer)}>stopTimer</button>
              </div>
            </div>
          </div>

          <div className='tile is-12 notification'>
            <div className='tile is-child'>
              <h2 className='title is-4'>settings</h2>

              <div className='field has-addons'>
                <div className='control'>
                  <input className='input' value={settingTime} onChange={onChange(setTime)} readOnly={isStart === true} />
                </div>

                <div className='control'>
                  <div className='button is-static'>
                    minutes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul>
          <li><Link href='/task'><a>> tasks</a></Link></li>
          <li><Link href='/pomodoros'><a>> pomodoros</a></Link></li>
        </ul>
      </div>
    </section>
  )
}
