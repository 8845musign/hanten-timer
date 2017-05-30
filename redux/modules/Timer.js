// Constants
export const START = 'redux/modules/Timer/START'
export const STOP = 'redux/modules/Timer/STOP'

// inital
const initialState = {
  isTimerStart: false,
  startTime: null
}

// reducer
const TimerReducer = (state = initialState, action = {}) => {
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

export default TimerReducer
