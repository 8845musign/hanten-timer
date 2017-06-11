import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import timerReducer, { timerMiddleware, timerElapseMiddleware } from '../redux/pages/timer'
import pomodoroReducer from '../redux/shared/pomodoro'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
  applyMiddleware(timerMiddleware, timerElapseMiddleware)
)

const rootReducer = combineReducers({
  timer: timerReducer,
  pomodoro: pomodoroReducer
})

export const indexStore = () => {
  return createStore(rootReducer, {}, enhancer)
}

export default indexStore
