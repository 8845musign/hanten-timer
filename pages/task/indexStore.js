import { createStore, applyMiddleware, compose } from 'redux'
import taskReducer from '../../redux/pages/task'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
  applyMiddleware()
)

export const indexStore = () => {
  return createStore(taskReducer, {}, enhancer)
}

export default indexStore
