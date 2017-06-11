import { createAction } from 'redux-actions'

// initialState
const initialState = {
  startTime: null,
  endTime: null,
  elapsedTime: 0,
  setttingTime: 20 * 1000,
  taskId: ''
}

// constants
export const NEW = 'redux/shared/pomodoro/NEW'
export const START = 'redux/shared/pomodoro/START'
export const END = 'redux/shared/pomodoro/END'
export const SET_TIME = 'redux/shared/pomodoro/SET_TIME'
export const ELAPSE = 'redux/shared/pomodoro/ELAPSE'

// actions
export const newPomodoro = createAction(NEW)
export const setTime = createAction(SET_TIME)
export const start = createAction(START, time => time)
export const elapse = createAction(ELAPSE, time => time)
export const end = createAction(END, time => time)

// reudcer
const pomodoroReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW:
      return initialState
    case SET_TIME:
      return Object.assign({},
        state,
        { setttingTime: action.payload }
      )
    case START:
      return Object.assign({},
        state,
        { startTime: action.payload }
      )
    case ELAPSE:
      return Object.assign({},
        state,
        { elapsedTime: state.elapsedTime + action.payload }
      )
    case END:
      return Object.assign({},
        state,
        { endTime: action.payload }
      )
    default:
      return state
  }
}

export default pomodoroReducer
