/**
 * Task list page
 * edit task
 */
import { createAction } from 'redux-actions'
import uuid from 'uuid/v1'
import { actions as tasksActions } from '../shared/tasks'

// Constants
const CHANGE = 'redux/pages/task/CHANGE'
const ADD = 'redux/pages/task/ADD'

// Actions
const change = createAction(CHANGE, name => name)
const add = createAction(ADD)

export const actions = {
  change,
  add
}

// Middlewares
const addMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === ADD) {
    const state = getState()
    const { name } = state.editing.task
    dispatch(tasksActions.add(name, uuid()))
  }

  next(action)
}

export const middlewares = [
  addMiddleware
]

// Reducer
const initialState = {
  name: ''
}

const taskEditReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      return Object.assign({},
        { name: action.payload }
      )
    case ADD:
      return Object.assign({}, initialState)
    default:
      return state
  }
}

export default taskEditReducer
