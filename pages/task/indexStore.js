import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import tasksReducer from '../../redux/shared/tasks'
import addReducer, { addMiddleware } from '../../redux/pages/task/add'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
  applyMiddleware(addMiddleware)
)

const rootReducer = combineReducers({
  add: addReducer,
  tasks: tasksReducer
})

export const indexStore = () => {
  return createStore(rootReducer, {}, enhancer)
}

export default indexStore
