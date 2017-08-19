import { createAction } from 'redux-actions'
import { ADD as ADD_TAKS } from '../../shared/tasks'

// contants
export const INIT = 'redux/pages/task/add/INIT'
export const CHANGE = 'redux/pages/task/add/CHANGE'

// actions
export const change = createAction(CHANGE, (key, value) => {
  return { key, value }
})
export const init = createAction(INIT)

// middlewares
const addMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === ADD_TAKS) {
    dispatch(init())
  }

  next(action)
}

export const middlewares = [
  addMiddleware
]

// reducer
const initialState = {
  name: ''
}

const addReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INIT:
      return initialState
    case CHANGE:
      return Object.assign({},
        state,
        { [action.payload.key]: action.payload.value }
      )
    default:
      return state
  }
}

export default addReducer
