import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import timerReducer, { middlewares as timerMiddlewares } from './redux/pages/timer'
import tasksReducer from './redux/shared/tasks'
import pomodorosReducer, {
  middlewares as pomodorosMiddlewares
} from './redux/shared/pomodoros'
import addReducer, { middlewares as addMiddlewares } from './redux/pages/task/add'
import pomodoroReducer from './redux/shared/pomodoro'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const middlewares = [
  ...addMiddlewares,
  ...timerMiddlewares,
  ...pomodorosMiddlewares
]

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
)

const rootReducer = combineReducers({
  add: addReducer,
  tasks: tasksReducer,
  pomodoro: pomodoroReducer,
  pomodoros: pomodorosReducer,
  timer: timerReducer
})

export const indexStore = () => {
  return createStore(rootReducer, {}, enhancer)
}

export default indexStore
