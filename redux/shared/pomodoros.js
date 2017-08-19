import { createAction } from 'redux-actions'
import uuid from 'uuid/v1'

// initialState
const initialState = []

// constants
const RECORD = 'redux/shared/pomodoros/RECORD'

export const constants = {
  RECORD
}

// actions
const record = createAction(RECORD, pomodoro => pomodoro)

export const actions = {
  record
}

// middlewares
const recordMiddleware = store => next => action => {
  if (action.type === RECORD) {
    action.payload.id = uuid()
  }

  next(action)
}

export const middlewares = {
  recordMiddleware
}

// reudcer
const pomodorosReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECORD:
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

export default pomodorosReducer
