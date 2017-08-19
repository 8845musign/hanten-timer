import { createAction } from 'redux-actions'
import uuid from 'uuid/v1'

// contants
export const ADD = 'redux/shared/tasks/ADD'

// actions
const add = createAction(ADD, name => {
  return {
    name,
    createdAt: new Date().getTime(),
    id: uuid()
  }
})

export const actions = {
  add
}

// reducer
const tasksReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case ADD:
      return Object.assign({},
        { [action.payload.id]: action.payload }
      )
    default:
      return state
  }
}
export default tasksReducer
