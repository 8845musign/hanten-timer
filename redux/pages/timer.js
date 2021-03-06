import { createAction } from 'redux-actions'
import uuid from 'uuid/v1'
import {
  start as startPomodoro,
  end as endPomodoro,
  newPomodoro
} from '../shared/pomodoro'
import { actions as pomodorosActions } from '../shared/pomodoros'
import { actions as tasksActions } from '../shared/tasks'

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

// utils
const isNewTask = (taskName, tasks) => {
  const names = Object.values(tasks).map((task) => task.name)

  return !names.includes(taskName)
}

const getTaskId = (taskName, tasks) => {
  const task = Object.values(tasks).filter((task) => { return task.name === taskName })

  return task[0].id
}

let timer = null
// middleware
const startMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === START) {
    const state = getState()

    const { tasks } = state
    const { taskTitle } = state.timer

    let taskId
    if (isNewTask(taskTitle, tasks)) {
      taskId = uuid()
      dispatch(tasksActions.add(taskTitle, taskId))
    } else {
      taskId = getTaskId(taskTitle, tasks)
    }

    timer = setInterval(() => {
      const state = getState()

      if (state.timer.isStart) {
        dispatch(elapseTimer(new Date().getTime()))
      }
    }, 10)
    dispatch(startPomodoro(taskId, action.payload))
  }

  next(action)
}

const stopMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type === STOP) {
    clearInterval(timer)
    new Promise((resolve) => {
      dispatch(endPomodoro(action.payload))
      resolve()
    }).then(() => {
      if (Notification.permission === 'granted') {
        new Notification("stop timer")
      }

      const state = getState()
      const recordPomodoro = Object.assign({}, state.pomodoro)
      dispatch(pomodorosActions.record(recordPomodoro))

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

export const middlewares = [
  startMiddleware,
  timerElapseMiddleware,
  stopMiddleware
]

const calcIncreaseTimeForElapse = (baseTime, nextTime) => {
  return nextTime - baseTime
}
