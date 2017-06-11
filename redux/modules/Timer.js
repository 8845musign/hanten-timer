import { createAction } from 'redux-actions'
import {
  start as startPomodoro,
  end as endPomodoro,
  newPomodoro
} from './shared/pomodoro'

// Constants
export const START = 'redux/modules/Timer/START'
export const STOP = 'redux/modules/Timer/STOP'
export const PAUSE = 'redux/modules/Timer/PAUSE'
export const ELAPSE = 'redux/modules/Timer/ELAPSE'
export const SET_TIME = 'redux/modules/Timer/SET_TIME'
export const CHANGE_TASK_TITLE = 'redux/modules/Timer/CHANGE_TASK_TITLE'

// inital
const initialState = {
  isTimerStart: false,
  pause: false,
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
          isTimerStart: true,
          pase: false,
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
      const baseTime = state.preveElapsedime ? state.preveElapsedime : action.payload.startTime

      return Object.assign({},
        state,
        {
          elapsedTime: state.elapsedTime + (action.payload.time - baseTime),
          preveElapsedime: action.payload.time
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
export const timerMiddleware = ({ dispatch, getState }) => next => action => {
  const state = getState()

  if (action.type === START) {
    timer = setInterval(() => {
      const state = getState()

      if (state.timer.isTimerStart) {
        dispatch(elapseTimer(new Date().getTime()))
      }
    }, 10)

    dispatch(startPomodoro(action.payload))
  } else if (action.type === STOP) {
    clearInterval(timer)
    dispatch(endPomodoro(action.payload))
    // TODO 保存してから新規ポモドーロを作成する
    dispatch(newPomodoro())
  } else if (action.type === ELAPSE) {
    action.payload = {
      time: action.payload,
      startTime: state.pomodoro.startTime
    }
  }

  next(action)
}

export const timerElapseMiddleware = ({ dispatch, getState }) => next => action => {
  const state = getState()

  if (action.type === ELAPSE && state.timer.elapsedTime > state.timer.settingTime) {
    dispatch(stopTimer())
  } else {
    next(action)
  }
}
