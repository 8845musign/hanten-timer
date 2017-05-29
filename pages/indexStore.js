import { createStore, applyMiddleware, compose } from 'redux'
import TimerReducer from '../redux/modules/Timer'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose


const enhancer = composeEnhancers(
  applyMiddleware()
)

export const indexStore = (initialState = {
  isTimerStart: false
}) => {
  return createStore(TimerReducer, initialState, enhancer)
}

export default indexStore
