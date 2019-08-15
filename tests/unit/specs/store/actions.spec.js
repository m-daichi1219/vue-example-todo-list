import * as types from '@/store/mutation-types'
import actions from '@/store/actions'
import sinon from 'sinon'
import { expect } from 'chai'
import { cloneDeep } from 'lodash'

const tasks = [
  {
    name: 'TaskName1',
    tags: ['tag1', 'tag2'],
    detail: 'detail comment',
    limit: '2019-12-01T12:59',
    id: 1
  },
  {
    name: 'TaskName2',
    tags: ['tag2', 'tag3'],
    detail: 'detail comment',
    limit: '2017-12-15T12:59',
    id: 2
  },
  {
    name: 'TaskName3',
    tags: ['tag3', 'tag4'],
    detail: 'detail comment',
    limit: '2018-12-31T12:59',
    id: 3
  }
]

const localStorageMock = (() => {
  let store = {}

  return {
    getItem: (key) => {
      return store[key] || null
    },
    setItem: (key, value) => {
      store[key] = value.toString()
    },
    clear: () => {
      store = {}
    }
  }
})()

global.localStorage = localStorageMock

describe('actions.js', () => {
  let commit
  beforeEach(() => {
    commit = sinon.spy()
  })

  describe('fetchLists', () => {
    afterEach(() => {
      localStorage.clear()
    })

    it('localStorageにタスクが存在しない場合', () => {
      actions.fetchLists({ commit })

      expect(commit.called).to.equal(false)
    })

    it('localStorageにタスクが存在する場合', () => {
      localStorage.setItem('tasks', JSON.stringify(tasks))
      actions.fetchLists({ commit })

      expect(commit.called).to.equal(true)
      expect(commit.args[0][0]).to.equal(types.FETCH_ALL_TASKLIST)
      expect(commit.args[0][1]).to.eql(tasks)
    })
  })

  describe('addTask', () => {
    const task = {
      name: 'TaskName',
      tags: ['tag'],
      detail: 'detail comment',
      limit: '2017-12-15T12:59'
    }

    it('storeにタスクを追加', () => {
      actions.addTask({ commit }, { task })

      expect(commit.called).to.equal(true)
      expect(commit.args[0][0]).to.equal(types.ADD_TASK)
      expect(commit.args[0][1]).to.deep.equal(task)
    })
  })

  describe('updateTask', () => {
    const task = {
      name: 'TaskName_update',
      tags: ['tag'],
      detail: 'detail comment',
      limit: '2017-12-15T12:59',
      id: 2
    }

    it('タスクの情報を更新', () => {
      actions.updateTask({ commit }, { task })

      expect(commit.called).to.equal(true)
      expect(commit.args[0][0]).to.equal(types.UPDATE_TASK)
      expect(commit.args[0][1]).to.deep.equal(task)
    })
  })

  describe('removeTask', () => {
    it('数値以外の情報が渡された場合', () => {
      actions.removeTask({ commit }, { taskId: 'dummy' })

      expect(commit.called).to.equal(false)
    })

    it('文字列型の数字が渡された場合', () => {
      actions.removeTask({ commit }, { taskId: '2' })

      expect(commit.called).to.equal(true)
      expect(commit.args[0][0]).to.equal(types.REMOVE_TASK)
      expect(commit.args[0][1]).to.equal('2')
    })

    it('数値型の数字が渡された場合', () => {
      actions.removeTask({ commit }, { taskId: 2 })

      expect(commit.called).to.equal(true)
      expect(commit.args[0][0]).to.equal(types.REMOVE_TASK)
      expect(commit.args[0][1]).to.equal(2)
    })
  })
})
