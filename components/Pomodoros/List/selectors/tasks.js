import { createSelector } from 'reselect'

const pomodorosSelector = state => state.pomodoros
const tasksSelector = state => state.tasks

const extractTask = (pomodoros, tasks) => {
  return pomodoros.map((pomodoro) => {
    const task = tasks[pomodoro.taskId]

    return task ? task.name : ''
  })
}

const extractTasksSelector = createSelector(
  pomodorosSelector,
  tasksSelector,
  (pomodoros, tasks) => {
    return extractTask(pomodoros, tasks)
  }
)

export default extractTasksSelector
