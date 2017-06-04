import { createStore, applyMiddleware, compose } from 'redux'
import timerReducer, { timerMiddleware, timerElapseMiddleware } from '../redux/modules/Timer'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
  applyMiddleware(timerMiddleware, timerElapseMiddleware)
)

export const indexStore = (initialState = {
  isTimerStart: false,
  startTime: null,
  elapsedTime: 0,
  settingTime: 60 * 20 * 1000
}) => {
  return createStore(timerReducer, initialState, enhancer)
}

export default indexStore
