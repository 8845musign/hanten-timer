import { createStore, applyMiddleware } from 'redux'
import TimerReducer from '../redux/modules/Timer'

export const indexStore = (initialState = {}) => {
  return createStore(TimerReducer, initialState, applyMiddleware())
}

export default indexStore
