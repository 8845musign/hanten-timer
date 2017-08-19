import { createAction } from 'redux-actions'
import {
  start as startPomodoro,
  end as endPomodoro,
  newPomodoro
} from '../shared/pomodoro'
import { actions as pomodorosActions } from '../shared/pomodoros'

// Constants
export const START = 'redux/pages/timer/START'
export const STOP = 'redux/pages/timer/STOP'
export const PAUSE = 'redux/pages/timer/PAUSE'
export const ELAPSE = 'redux/pages/timer/ELAPSE'
export const SET_TIME = 'redux/pages/timer/SET_TIME'
export const CHANGE_TASK_TITLE = 'redux/pages/timer/CHANGE_TASK_TITLE'

// inital
const initialState = {
  isStart: false,
  isPause: false,
  preveElapsedime: null,
  elapsedTime: 0,
  settingTime: 20 * 1000,
  taskTitle: ''
}

// reducer
const timerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case START:
      return Object.assign({},
        state,
        {
          isStart: true,
          isPause: false,
          preveElapsedime: action.payload
        }
      )
    case STOP:
      return Object.assign({},
      state,
        {
          isStart: false,
          pause: false,
          startTime: null,
          elapsedTime: null
        }
      )
    case PAUSE:
      return Object.assign({},
        state,
        { isPause: true, isStart: false }
      )
    case ELAPSE:
      return Object.assign({},
        state,
        {
          elapsedTime: state.elapsedTime + calcIncreaseTimeForElapse(state.preveElapsedime, action.payload),
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
    case CHANGE_TASK_TITLE:
      return Object.assign({},
        state,
        {
          taskTitle: action.payload
        }
      )
    default:
      return state
  }
}
export default timerReducer

// Actions
export const startTimer = createAction(START, time => time)
export const stopTimer = createAction(STOP, time => time)
export const pauseTimer = createAction(PAUSE)
export const elapseTimer = createAction(ELAPSE, now => now)
export const setTime = createAction(SET_TIME, time => time)
export const changeTaskTitle = createAction(CHANGE_TASK_TITLE, title => title)

let timer = null
// middleware
const timerMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === START) {
    timer = setInterval(() => {
      const state = getState()

      if (state.timer.isStart) {
        dispatch(elapseTimer(new Date().getTime()))
      }
    }, 10)

    dispatch(startPomodoro(action.payload))
  } else if (action.type === STOP) {
    clearInterval(timer)
    new Promise((resolve) => {
      dispatch(endPomodoro(action.payload))
      resolve()
    }).then(() => {
      dispatch(newPomodoro())
    })
  }

  next(action)
}

const timerElapseMiddleware = ({ dispatch, getState }) => next => action => {
  const state = getState()

  if (action.type === ELAPSE && state.timer.elapsedTime > state.timer.settingTime) {
    dispatch(stopTimer())
  } else {
    next(action)
  }
}

const stopMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === STOP) {
    const state = getState()
    const endPomodoro = Object.assign({}, state.pomodoro)

    dispatch(pomodorosActions.record(endPomodoro))
  }

  next(action)
}

export const middlewares = [
  timerMiddleware,
  timerElapseMiddleware,
  stopMiddleware
]

const calcIncreaseTimeForElapse = (baseTime, nextTime) => {
  return nextTime - baseTime
}

