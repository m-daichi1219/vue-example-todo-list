import { expect } from 'chai'
import mutations from '@/store/mutations'
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

describe('mutations.js', () => {
  let state
  beforeEach(() => {
    state = cloneDeep({ tasks })
  })

  describe('FETCH_ALL_TASKLIST', () => {
    const dummy = {}
    const payload = tasks

    it('payloadがstate.tasksに格納されていること', () => {
      mutations.FETCH_ALL_TASKLIST(dummy, payload)

      expect(dummy.tasks).to.deep.equal(tasks)
    })
  })

  describe('ADD_TASK', () => {
    const payload = {
      name: 'TaskName4',
      tags: ['tag4', 'tag5'],
      detail: 'detail comment',
      limit: '2020-12-31T12:59'
    }

    it('payloadがstate.tasksに追加されていること', () => {
      mutations.ADD_TASK(state, payload)
      const actual = state.tasks.slice(-1)[0]

      expect(state.tasks.length).to.equal(4)
      expect(actual.name).to.equal('TaskName4')
      expect(actual.tags).to.eql(['tag4', 'tag5'])
      expect(actual.detail).to.equal('detail comment')
      expect(actual.limit).to.equal('2020-12-31T12:59')
      expect(actual.id).to.equal(4)
    })
  })

  describe('UPDATE_TASK', () => {
    const payload = {
      name: 'TaskName2_update',
      tags: ['tag2', 'tag3', 'update'],
      detail: 'detail comment_update',
      limit: '2020-12-31T12:59',
      id: 2
    }

    it('state.tasksの情報がpayloadに更新されていること', () => {
      mutations.UPDATE_TASK(state, payload)
      const actual = state.tasks[1]

      expect(actual.name).to.equal('TaskName2_update')
      expect(actual.tags).to.eql(['tag2', 'tag3', 'update'])
      expect(actual.detail).to.equal('detail comment_update')
      expect(actual.limit).to.equal('2020-12-31T12:59')
      expect(actual.id).to.equal(2)
    })
  })

  describe('REMOVE_TASK', () => {
    const payload = 2

    it('payloadの情報がstate.tasksから除かれること', () => {
      mutations.REMOVE_TASK(state, payload)
      const actual = state.tasks

      expect(actual.length).to.equal(2)

      expect(actual[0].name).to.equal('TaskName1')
      expect(actual[0].tags).to.eql(['tag1', 'tag2'])
      expect(actual[0].detail).to.equal('detail comment')
      expect(actual[0].limit).to.equal('2019-12-01T12:59')
      expect(actual[0].id).to.equal(1)

      expect(actual[1].name).to.equal('TaskName3')
      expect(actual[1].tags).to.eql(['tag3', 'tag4'])
      expect(actual[1].detail).to.equal('detail comment')
      expect(actual[1].limit).to.equal('2018-12-31T12:59')
      expect(actual[1].id).to.equal(2)
    })
  })
})
