// @flow

import moment from 'moment'

type Props = {
  pomodoro: Object,
  tasks: Object
}

export default ({ pomodoro, tasks }: Props) => {
  const getTaskName = () => {
    const task = tasks[pomodoro.taskId]
    return task ? task.name : ''
  }

  const dateTimeFormat = (time) => {
    return moment(time).format('LT')
  }

  const durationMinutes = (startTime, endTime) => {
    return moment.duration(endTime - startTime).minutes()
  }

  const { startTime, endTime } = pomodoro

  return (
    <li>
      <style jsx>{`
        li {
          margin-bottom: 0.5em;
        }
      `}</style>
      <div className='title is-4'>{durationMinutes(startTime, endTime)} / {getTaskName()}</div>
      <div className='subtitle is-6'>{dateTimeFormat(startTime)} - {dateTimeFormat(endTime)}</div>
    </li>
  )
}
