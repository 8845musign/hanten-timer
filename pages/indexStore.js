import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import timerReducer, { timerMiddleware, timerElapseMiddleware } from '../redux/pages/timer'
import tasksReducer from '../redux/shared/tasks'
import addReducer, { addMiddleware } from '../redux/pages/task/add'
import pomodoroReducer from '../redux/shared/pomodoro'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
  applyMiddleware(timerMiddleware, timerElapseMiddleware, addMiddleware)
)

const rootReducer = combineReducers({
  add: addReducer,
  tasks: tasksReducer,
  pomodoro: pomodoroReducer,
  timer: timerReducer
})

export const indexStore = () => {
  return createStore(rootReducer, {}, enhancer)
}

export default indexStore
