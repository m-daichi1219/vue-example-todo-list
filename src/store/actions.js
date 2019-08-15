import * as types from './mutation-types'

export default {
  fetchLists: ({ commit }) => {
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    if (tasks) {
      commit(types.FETCH_ALL_TASKLIST, tasks)
    }
  },
  addTask: ({ commit }, { task }) => {
    commit(types.ADD_TASK, task)
  },
  updateTask: ({ commit }, { task }) => {
    commit(types.UPDATE_TASK, task)
  },
  removeTask: ({ commit }, { taskId }) => {
    if (taskId && !isNaN(Number(taskId))) {
      commit(types.REMOVE_TASK, taskId)
    }
  }
}
