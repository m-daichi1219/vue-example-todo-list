import * as types from './mutation-types'

export default {
  [types.FETCH_ALL_TASKLIST] (state, payload) {
    state.tasks = payload
  },
  [types.ADD_TASK] (state, payload) {
    payload.id = state.tasks.length + 1
    state.tasks.push(payload)
  },
  [types.UPDATE_TASK] (state, payload) {
    state.tasks.forEach((task, idx) => {
      if (task.id === payload.id) {
        state.tasks[idx] = payload
      }
    })
  },
  [types.REMOVE_TASK] (state, payload) {
    state.tasks.forEach((task, idx) => {
      if (task.id === payload) {
        state.tasks.splice(idx, 1)
      }
    })

    state.tasks.forEach((task, idx) => {
      task.id = idx + 1
    })
  },
  callGet (state, payload) {
    state.test = payload
  }
}
