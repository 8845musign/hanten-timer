import { createAction } from 'redux-actions'

// Constants
export const START = 'redux/modules/Timer/START'
export const STOP = 'redux/modules/Timer/STOP'
export const ELAPSE = 'redux/modules/Timer/ELAPSE'

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
    default:
      return state
  }
}

// Actions
export function startTimer () {
  return { type: START }
}

export function stopTimer () {
  return { type: STOP }
}

export const elapse = createAction(ELAPSE, now => now)

let timer = null
// middleware
export const timerMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === START) {
    timer = setInterval(() => {
      dispatch(elapse(new Date().getTime()))
    }, 500)
  } else if (action.type === STOP) {
    clearInterval(timer)
  }

  next(action)
}

export default timerReducer
