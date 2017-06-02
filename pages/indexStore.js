import { createStore, applyMiddleware, compose } from 'redux'
import timerReducer, { timerMiddleware } from '../redux/modules/Timer'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose


const enhancer = composeEnhancers(
  applyMiddleware(timerMiddleware)
)

export const indexStore = (initialState = {
  isTimerStart: false
}) => {
  return createStore(timerReducer, initialState, enhancer)
}

export default indexStore
