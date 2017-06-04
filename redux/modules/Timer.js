import { createAction } from 'redux-actions'

// Constants
export const START = 'redux/modules/Timer/START'
export const STOP = 'redux/modules/Timer/STOP'
export const PAUSE = 'redux/modules/Timer/PAUSE'
export const ELAPSE = 'redux/modules/Timer/ELAPSE'
export const SET_TIME = 'redux/modules/Timer/SET_TIME'

// inital
const initialState = {
  isTimerStart: false,
  startTime: null,
  pause: false,
  preveElapsedime: null,
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
          pase: false,
          startTime: new Date().getTime(),
          preveElapsedime: null
        }
      )
    case STOP:
      return Object.assign({},
      state,
        {
          isTimerStart: false,
          pause: false,
          startTime: null,
          elapsedTime: null
        }
      )
    case PAUSE:
      return Object.assign({},
        state,
        { pause: true, isTimerStart: false }
      )
    case ELAPSE:
      const baseTime = state.preveElapsedime ? state.preveElapsedime : state.startTime

      return Object.assign({},
        state,
        {
          elapsedTime: state.elapsedTime + (action.payload - baseTime),
          preveElapsedime: action.payload
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
export const pauseTimer = createAction(PAUSE)
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
    }, 10)
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
