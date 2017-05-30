// Constants
export const START = 'redux/modules/Timer/START'

// inital
const initialState = {
  isTimerStart: false,
  startTime: null,
  endTime: null
}

// reducer
const TimerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case START:
      return Object.assign({},
        state,
        {
          isTimerStart: true,
          startTime: new Date().getTime(),
          endTime: null
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

export default TimerReducer
