// Constants
export const START = 'redux/modules/Timer/START'

// reducer
const TimerReducer = (state = { isTimerStart: false }, action = {}) => {
  switch (action.type) {
    case START:
      return Object.assign({},
        { isTimerStart: true },
        state
      )
    default:
      return state
  }
}

// Actions
export function startTimer () {
  return { type: START }
}

export default TimerReducer
