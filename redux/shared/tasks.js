import { createAction } from 'redux-actions'

// contants
export const ADD = 'redux/shared/tasks/ADD'

// actions
const add = createAction(ADD, (name, id) => {
  return {
    name,
    id,
    createdAt: new Date().getTime()
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
        state,
        { [action.payload.id]: action.payload }
      )
    default:
      return state
  }
}
export default tasksReducer
