import { createSelector } from 'reselect'

const isNew = (name, tasks) => {
  const names = Object.values(tasks).map(task => task.name)

  return !names.includes(name)
}

const editingTaskSelector = state => state.editing.task
const tasksSelector = state => state.tasks

const addValidateSelector = createSelector(
  editingTaskSelector,
  tasksSelector,
  (editingTask, tasks) => { return isNew(editingTask.name, tasks) }
)

export default addValidateSelector
