import { createAction } from 'redux-actions'
import uuidV1 from 'uuid/v1'

// contants
export const ADD = 'redux/modules/tasks/ADD'

// actions
export const add = createAction(ADD, name => {
  return {
    name,
    createdAt: new Date().getTime()
  }
})

// reducer
const tasksReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case ADD:
      const id = uuidV1()
      return {
        ...state,
        [id]: {
          name: action.payload.name,
          createAt: action.payload.createAt
        }
      }
    default:
      return state
  }
}
export default tasksReducer
