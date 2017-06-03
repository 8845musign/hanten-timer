import { createAction } from 'redux-actions'

// Constants
export const START = 'redux/modules/Timer/START'
export const STOP = 'redux/modules/Timer/STOP'
export const ELAPSE = 'redux/modules/Timer/ELAPSE'
export const SET_TIME = 'redux/modules/Timer/SET_TIME'

// inital
const initialState = {
  isTimerStart: false,
  startTime: null,
  elapsedTime: 0,
  settingTime: 20 * 1000
}

// reducer
const timerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case START:
      return Object.assign({},
        state,
        {
          isTimerStart: true,
          startTime: new Date().getTime()
        }
      )
    case STOP:
      return Object.assign({},
      state,
        {
          isTimerStart: false,
          startTime: null
        }
      )
    case ELAPSE:
      return Object.assign({},
        state,
        {
          elapsedTime: action.payload - state.startTime
        }
      )
    case SET_TIME:
      return Object.assign({},
        state,
        {
          settingTime: action.payload
        }
      )
    default:
      return state
  }
}
export default timerReducer

// Actions
export const startTimer = createAction(START)
export const stopTimer = createAction(STOP)
export const elapseTimer = createAction(ELAPSE, now => now)
export const setTime = createAction(SET_TIME, time => time)

let timer = null
// middleware
export const timerMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === START) {
    timer = setInterval(() => {
      const state = getState()

      if (state.isTimerStart) {
        dispatch(elapseTimer(new Date().getTime()))
      }
    }, 500)
  } else if (action.type === STOP) {
    clearInterval(timer)
  }

  next(action)
}

export const timerElapseMiddleware = ({ dispatch, getState }) => next => action => {
  const state = getState()

  if (action.type === ELAPSE && state.elapsedTime > state.settingTime) {
    dispatch(stopTimer())
  } else {
    next(action)
  }
}
