import * as types from './mutation-types'
import { List } from '../api'

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
  },
  axtionTest: ({ commit }, data) => {
    console.log('action:axtionTest')
    console.log('process.env.VUE_APP_ENV:' + process.env.VUE_APP_ENV)
    return List.callGet(data)
      .then((ret) => {
        console.log('return callGet')
        console.log('res:' + ret)
        commit('callGet', ret)
      })
      .catch(err => { throw err })
  }
}
